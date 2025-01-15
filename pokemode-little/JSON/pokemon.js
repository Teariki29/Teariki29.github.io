
// Définition de la classe Pokémon
class Pokemon {
    constructor(pokemonData) {
        this.base_attack = pokemonData["base_attack"];
        this.base_defense = pokemonData["base_defense"];
        this.base_stamina = pokemonData["base_stamina"];
        this.form = pokemonData["form"];
        this.pokemon_id = pokemonData["pokemon_id"];
        this.pokemon_name = pokemonData["pokemon_name"];
        this.types = pokemonData["types"];
        this.attack = pokemonData["attack"];
        this.gen = pokemonData["gen"]

    }

    // Methode toString
    toString() {
        return `${this.pokemon_name} (ID: ${this.pokemon_id}) - Form: ${this.form}\nBase Attack: ${this.base_attack}, Base Defense: ${this.base_defense}, Base Stamina: ${this.base_stamina}, Type: ${this.type}, Gen: ${this.gen}, Attaque: ${this.attack}`;
    }

    // Liste contenant tout les pokémons du jeux de donné
    static all_pokemons = [];


    // Importation de tout les pokémons
    static import_pokemon() {

        // Boucle qui parcours le tableau de pokemons.js en stockant le contenue chaque case dans la variable pokemon
        for (let pokemon of pokemons) {

            // Vérification de la présense du pokémon dans la liste des pokémon pour éviter d'importé 2 fois le même pokémon
            if (!Pokemon.all_pokemons[pokemon["pokemon_id"]]) {

                // Vérification qu'il s'agisse de la forme normal 
                if (pokemon["form"] == 'Normal'){

                    // ------------------------------ AJOUT DE LA GENERATION ------------------------------------------

                    // Boucle qui parrcour le tableau generation du fichier generation.js
                    for (let currentGen in generation){

                        // Vérification de la présence du pokémon dans chaque génération
                        for (let currentPokeGen of generation[currentGen]) {
                            if (pokemon["pokemon_name"] == currentPokeGen["name"]) {

                                // Une fois trouver, il est garder en mémoir dans pokemon["gen"]
                                pokemon["gen"] = currentGen;
                            }
                        }
                    }

                    // --------------------------------- AJOUT DES TYPES ---------------------------------------------


                    // Variable pour stocker les types des pokémons
                    const current_Type = [];

                    // Boucle qui parcoure le tableau du fichier pokemon_type.js 
                    for (const pokemon_types_current of pokemon_types){

                        // Identification du pokémon sous forme normal dans le tableau
                        if (pokemon_types_current["form"] == 'Normal' && pokemon_types_current["pokemon_id"] == pokemon["pokemon_id"]){

                            // Boucle pour parcourir tout les type du pokémon
                            for (const typeName of pokemon_types_current["type"]) {

                                // Vérification de leur présense dans la liste de tout les type et l'ajoute si il n'en fait pas parti
                                if (!Type.all_types[typeName]) {
                                    let     effectiveness = type_effectiveness[typeName];
                                    const type = new Type(typeName, effectiveness);
                                    Type.all_types[typeName] = type;
                                }


                                // Attribution des types
                                current_Type[typeName] = typeName;                
                            }
                        }
                    }

                    // --------------------------------- AJOUT DES ATTAQUES ---------------------------------------------

                    // Variables pour stocker les attaques
                    const current_attack = [];

                    // Boucle pour parcourir le tableau du fichier pokemon_moves
                    for (let pokemon_move_current of pokemon_moves) {

                        // Identification du pokemon sous forme normal dans le tableau
                        if (pokemon_move_current["form"] == 'Normal' && pokemon_move_current["pokemon_id"] == pokemon["pokemon_id"]){

                            // Création d'une variable pour sérarer les attacher "fast" et "charged"
                            let moveType;

                            // Boucle pour parcourir toutes les attaques "fast" du pokémon
                            for (let fastMoves of pokemon_move_current["fast_moves"]) {

                                // Changement de la valeur de la variable en fast car on s'occupe ici des attaques "fast"
                                moveType = "fast";

                                // Boucle pour parcourir le tableau fast_moves du fichier fast_moves
                                for (let move of fast_moves) {

                                    // Vérification que l'attaque est connue par le pokemon
                                    if (fastMoves == move["name"]){
                                    
                                        // Vérification de la présence de l'attaque dans la liste de toutes les attaques et l'ajoute si elle n'en fait pas partie
                                        if (!Attack.all_attacks[fastMoves]) {
                                            let fastmove = new Attack(moveType, move["type"], move["move_id"], move["energy_delta"], move["name"], move["power"], move["duration"], move["stamina_loss_scaler"], 0)
                                            Attack.all_attacks[move["move_id"]] = fastmove;
                                        }

                                        // Attribution de la variable
                                        current_attack[move["move_id"]] = move["name"];
                                    
                                    }
                                }
                            }


                            // Exactement la même chose que pour les attaques "fast" mais en changeant la variable moveType en attribuant la valeur "charged"

                            for (let chargedMove of pokemon_move_current["charged_moves"]) {
                                moveType = "charged";
                                for (let move of charged_moves) {
                                    if (chargedMove == move["name"]){
                                        if (!Attack.all_attacks[chargedMove]) {
                                            let chargemove = new Attack(moveType, move["type"], move["move_id"], move["energy_delta"], move["name"], move["power"], move["duration"], move["stamina_loss_scaler"], move["critical_chance"])
                                            Attack.all_attacks[move["move_id"]] = chargemove;
                                        }
                                        current_attack[move["move_id"]] = move["name"];
                                    
                                    }
                                }
                            }
                        }
                    }

                    // ------------------------------------- CREATION DU POKEMON ----------------------------------------------

                    // Ajout des attaques et des types
                    pokemon["attack"] = current_attack;
                    pokemon["types"] = current_Type;

                    // Création de l'objet Pokemon
                    this.all_pokemons[pokemon["pokemon_id"]] = new Pokemon(pokemon);                
                }
            }
        }
    }


    getTypes() {
        // Tableau qui stock le résultat
        let typePoke = [];

        // Ajout des objet Type dans le tableau selon le type du pokemon
        for (let typeCurrent in this.types) {
            typePoke.push(Type.all_types[typeCurrent]);
        }

        /* console.log(typePoke); */

        return typePoke;
    }


    // Exactement la même chose que pour getTypes
    getAttack() {

        let attack = [];

        for (let attackCurrent in this.attack) {
            attack.push(Attack.all_attacks[attackCurrent]);
        }

/*         console.log(attack) */

        return attack;
    }

    // Affichage de la liste de tout les pokémons
    static test() {
        console.log(Pokemon.all_pokemons);
    }


    static getPokemonsByType(typeName){

        // Tableau pour stocker le résultat
        let req = [];

        // Parcourt la liste de tout les pokémon et ajoute au tableau ceux qui ont le type demmander
        Pokemon.all_pokemons.forEach(pokeCurrent => {
            if (pokeCurrent.types[typeName]) {
                req[pokeCurrent.pokemon_id] = pokeCurrent;
            }
        });

/*         console.log(req);
 */
        return (req);
    }

    // Même chose que pour getPokemonsByType
    static getPokemonsByAttack(attackName) {

        let req2 = [];

        Pokemon.all_pokemons.forEach(pokeCurrent => {

            pokeCurrent.attack.forEach(pokeCurrentAttack => {
                if (pokeCurrentAttack == attackName){
                    req2.push(pokeCurrent);
                }
            });

 
        });

        console.log(req2);    
    }

    // Même chose que pour getPokemonsByType
    static getPokemonsByName(name){

        let req3 = [];

        Pokemon.all_pokemons.forEach(pokeCurrent => {
            if (pokeCurrent.pokemon_name[name]) {
                req3.push(pokeCurrent);
            }
        });

/*         console.log(req);
 */
        return (req3);
    }


    static sortPokemonByName() {

        // Tableau pour stocker le résultat
        let ltest = [];

        // Ajoute à ce tableau uniquement le nom de tout les pokémon
        Pokemon.all_pokemons.forEach(CurrentPoke => {
            ltest[CurrentPoke.pokemon_id]=CurrentPoke.pokemon_name;
        });

        // Tri de ce tableau
        ltest.sort();

        // Création d'un autre tableau pour stocker un résultat
        let pokeTri = [];

        // Parcour de ltest et pour chaque nom, retrouve le pokémon qui correspond et l'ajoute à la liste
        ltest.forEach(currentPoketri => {
            Pokemon.all_pokemons.forEach(poke => {
                if (poke.pokemon_name==currentPoketri) {
                    pokeTri.push(poke);
                }
            });

        });

        console.log(pokeTri);

    }

    // Même chose que au dessus mais demande une liste en entrée pour triée dedans
    static sortListPokemonByName(pokeList) {

        let ltest = [];

        pokeList.forEach(CurrentPoke => {
            ltest[CurrentPoke.pokemon_id]=CurrentPoke.pokemon_name;
        });

        ltest.sort();

        let pokeTri = [];

        let j = 1;
        ltest.forEach(currentPoketri => {
            let i = 1;

    
            pokeList.forEach(poke => {
                if (poke.pokemon_name==currentPoketri) {
                    pokeTri.push(poke);
                }
            });

            j++;
        });

        return pokeTri;
    }

    // Même chose qu'avec sortPokemonByName
    static sortPokemonByStamina() {

        let ltest2 = [];

        Pokemon.all_pokemons.forEach(CurrentPoke => {
            ltest2[CurrentPoke.pokemon_id]=[CurrentPoke.base_stamina, CurrentPoke.pokemon_name];
        });



        ltest2.sort(function(a, b) {
            return a[0] - b[0];
        });


        let pokeTri = [];

        let j = 1;
        ltest2.forEach(currentPoketri => {
            let i = 1;

    
            Pokemon.all_pokemons.forEach((poke) => {
                if (currentPoketri[1] === poke.pokemon_name) {
                    pokeTri[j] = poke;
                }
                
            });
            

            j++;
        });

        console.log(pokeTri);
        
    }



    static getWeakestEnemies(attack) {

        // Récupération de l'objet Type de l'attaque
        let type = '';
        Attack.all_attacks.forEach(attackCurrent => {
            if (attackCurrent.name == attack) {
                type = attackCurrent.type;
            }
        });
        let typeObj = Type.all_types[type];

        // Identification des types qui ont les plus grosse faiblaisse à l'attaque
        let max = 0;
        Object.keys(typeObj.effectiveness).forEach(function(type) {
            if (typeObj.effectiveness[type]> max) {
                max = typeObj.effectiveness[type];
            }
        });

        // Récupération de ces Objet Type
        let listeFaible = [];
        let x = 0;
        Object.keys(typeObj.effectiveness).forEach(function(type) {
            x++;
            if (typeObj.effectiveness[type] == max) {
                listeFaible[x] = [typeObj.effectiveness[type], type];
            }
        });
        
        // Création d'un tableau qui possèdera le même nombre de case que de type faible à l'attaque et dans chaque case, se trouve la liste des pokémons de chaque type
        // Par exemple, si l'attaque est super efficasse sur feu et sol, une case de ce tableau contiendra la liste de tout les pokémons de type feu et l'autre, ceux de type sol

        let ListPokeTypeFaible = [];
        let i = 1;
        listeFaible.forEach(element => {
            console.log(element[1]);
            ListPokeTypeFaible[i] = Pokemon.getPokemonsByType(element[1]);
            i++;
        });


        // Ici, je parcours tout les pokémons de la liste et je regarde si ils sont présent dans au moins 2 des listes pour identifier les doubles faiblaisse
        // Si l'attaque n'a qu'une seul faiblesse, retourne juste la liste des pokémon comprenant le type de la faiblesse
        let faiblaisse = 0;
        let PokeFaibleFinal = [];
        
        if (ListPokeTypeFaible.length>1){
        Pokemon.all_pokemons.forEach(pokeCurrentFinal => {
            faiblaisse = 0;
            ListPokeTypeFaible.forEach(typePoke => {
                typePoke.forEach(vérifPoke => {
                    if (vérifPoke == pokeCurrentFinal){
                        faiblaisse++;
                    }       
                });

            });

                if (faiblaisse == 2) {
                    PokeFaibleFinal.push(pokeCurrentFinal);
                }
            
            

        });

        } else {
            PokeFaibleFinal=ListPokeTypeFaible[0];
        }

        console.log(PokeFaibleFinal);

        return PokeFaibleFinal;
    }

    // Même chose que getWeakestEnemies
    static getStrongestEnemies(attack) {
        let type = '';

        Attack.all_attacks.forEach(attackCurrent => {
            if (attackCurrent.name == attack) {
                type = attackCurrent.type;
            }
        });




        let typeObj = Type.all_types[type];

        let min = typeObj.effectiveness["Grass"];
        Object.keys(typeObj.effectiveness).forEach(function(type) {
            if (typeObj.effectiveness[type] < min) {
                min = typeObj.effectiveness[type];
            }
        });

        console.log(min);


        let listeFaible = [];
        let x = 0;
        Object.keys(typeObj.effectiveness).forEach(function(type) {
            x++;
            if (typeObj.effectiveness[type] == min) {
                listeFaible[x] = [typeObj.effectiveness[type], type];
            }
        });
        
        console.log(listeFaible);

        let ListPokeTypeFaible = [];

        let i = 1;

        listeFaible.forEach(element => {
            console.log(element[1]);
            ListPokeTypeFaible[i] = Pokemon.getPokemonsByType(element[1]);
            i++;
        });


        let faiblaisse = 0;
        let PokeFaibleFinal = [];
   
        Pokemon.all_pokemons.forEach(pokeCurrentFinal => {
            faiblaisse = 0;
            ListPokeTypeFaible.forEach(typePoke => {
                typePoke.forEach(vérifPoke => {
                    if (vérifPoke == pokeCurrentFinal){
                        faiblaisse++;
                    }       
                });

            });

            if (faiblaisse == 2) {
                PokeFaibleFinal.push(pokeCurrentFinal);
            }
        });

        console.log(PokeFaibleFinal);


    }
}



