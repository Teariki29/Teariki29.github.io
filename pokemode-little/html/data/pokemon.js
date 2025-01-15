
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
                    this.all_pokemons[pokemon["pokemon_id"]].getTypes();
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

    static getPokemonsByTypeList(list, typeName){

        // Tableau pour stocker le résultat
        let req = [];

        // Parcourt la liste de tout les pokémon et ajoute au tableau ceux qui ont le type demmander
        list.forEach(pokeCurrent => {
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

        console.table(req2);    
    }

    // Même chose que pour getPokemonsByType
    static getPokemonsByName(name){

        let req3 = [];

        Pokemon.all_pokemons.forEach(pokeCurrent => {

            if (pokeCurrent.pokemon_name==name) {
                req3.push(pokeCurrent);
            }
        });

        return req3;
 
    }

    static getPokemonsByGen(gen){

        let reqGen = [];

        Pokemon.all_pokemons.forEach(pokeCurrent => {

            if (pokeCurrent.gen==gen) {
                reqGen.push(pokeCurrent);
            }
        });

        return reqGen;
 
    }

    static getPokemonsByGenList(list, gen){

        let reqGen = [];

        list.forEach(pokeCurrent => {

            if (pokeCurrent.gen==gen) {
                reqGen.push(pokeCurrent);
            }
        });

        return reqGen;
 
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

        console.table(pokeTri);

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

        console.table(pokeTri);
        
    }

    static sortPokemonListByStamina(list2) {


        list2.sort(function(a, b) {
            return a.base_stamina - b.base_stamina;
        });
    
        return list2;
    }

    static sortPokemonListAttack(list3) {


        list3.sort(function(a, b) {
            return a.base_attack - b.base_attack;
        });
    
        return list3;
    }

    static sortPokemonListByDefence(list4) {


        list4.sort(function(a, b) {
            return a.base_defense - b.base_defense;
        });
    
        return list4;
    }

    static sortPokemonListByID(list5) {
        list5.sort(function(a, b) {
            return a.pokemon_id - b.pokemon_id;
        });
    
        return list5;
    }

    static sortPokemonListByGen(list6) {
        list6 = Pokemon.sortListPokemonByName(list6);
        list6.sort(function(a, b) {
            if (a.gen && b.gen) {
                const genA = parseInt(a.gen.split(' ')[1]);
                const genB = parseInt(b.gen.split(' ')[1]);
        
                return genA - genB;
            } else {
                return false;
            }
        });
        return list6;
    }

    static sortPokemonListByType(list7) {
        
        list7 = Pokemon.sortListPokemonByName(list7);

        list7.sort(function(a, b) {
            const typeA = a.getTypes()[0].name;
            const typeB = b.getTypes()[0].name;
    
            if (typeA < typeB) {
                return -1;
            } else if (typeA > typeB) {
                return 1;
            } else {
                return 0;
            }
        });
        
        return list7;
    }


    static getWeakestEnemies(attack) {
        let type = '';

        Attack.all_attacks.forEach(attackCurrent => {
            if (attackCurrent.name == attack) {
                type = attackCurrent.type;
            }
        });
        
        let typeObj = Type.all_types[type];
        let max= 0;
        for (let typeNam in typeObj.effectiveness){
            if (typeObj.effectiveness[typeNam]>max){
                max=typeObj.effectiveness[typeNam];
            }

        }
        let dmg=0;
        for (let typeNam2 in typeObj.effectiveness){
            for (let typeNam3 in typeObj.effectiveness){
                if (typeNam3!=typeNam2){
                    dmg = typeObj.effectiveness[typeNam3]*typeObj.effectiveness[typeNam2];

                }
                if (dmg>max){
                    max=dmg;
                }
            }
        }
        let ListTypeEfficasse = [];
        let ListTypeSoloEfficasse = [];
        for (let typeNam4 in typeObj.effectiveness){
            if (typeObj.effectiveness[typeNam4]==max){
                ListTypeSoloEfficasse.push(typeNam4);
            }
            for (let typeNam5 in typeObj.effectiveness){
                if (typeNam5!=typeNam4){
                    dmg = typeObj.effectiveness[typeNam5]*typeObj.effectiveness[typeNam4]
                
                if (dmg==max){
                    if (!ListTypeEfficasse.some(pair => 
                        (pair[0] === typeNam4 && pair[1] === typeNam5) || 
                        (pair[0] === typeNam5 && pair[1] === typeNam4))) {
                        ListTypeEfficasse.push([typeNam4, typeNam5]);
                    }
                    
                    }
                }
            }
        }

        console.log("Liste des couple de type, et Type efficasse");
        console.log(ListTypeEfficasse);
        console.log(ListTypeSoloEfficasse);

        let PokeFaibleLinal = [];
        let nbT = 0;
        let nbTpe
        Pokemon.all_pokemons.forEach(pokeActuelle => {
            ListTypeEfficasse.forEach(couple => {

                nbT=0;
                nbTpe=0;
                for (let typePokeActuelle in pokeActuelle.types){
                    if (typePokeActuelle == couple[0]){
                        nbT++;
                    }
                    if (typePokeActuelle == couple[1]){
                        nbT++;
                    }
                    if (nbT==2){
                        PokeFaibleLinal.push(pokeActuelle);
                    } 
                    nbTpe++
                }
            });
            if (nbTpe==1){

                ListTypeSoloEfficasse.forEach(elementSolo => {
                    if (pokeActuelle.types[elementSolo] && !PokeFaibleLinal.includes(pokeActuelle.types[elementSolo])){
                        PokeFaibleLinal.push(pokeActuelle)
                    }
                });
            }
        });
        console.log("Lise des pokmons les plus faible à l'attaque sont");
        console.table(PokeFaibleLinal);


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



        let listeFaible = [];
        let x = 0;
        Object.keys(typeObj.effectiveness).forEach(function(type) {
            x++;
            if (typeObj.effectiveness[type] == min) {
                listeFaible[x] = [typeObj.effectiveness[type], type];
            }
        });
        

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

        console.table(PokeFaibleFinal);


    }



    static getBestAttackTypesForEnemy(name) {
        let poke = Pokemon.getPokemonsByName(name);


        let max = 0;
        let dmg;

        
        for (let typeCurrent in Type.all_types){
            dmg=0;

            for (let typePoke in poke[0].types){

                if (dmg!=0) {
                    dmg *= Type.all_types[typeCurrent].effectiveness[typePoke];

                }
                if (dmg==0){
                    dmg = Type.all_types[typeCurrent].effectiveness[typePoke];

                }
            }

            if (dmg > max) {
                max = dmg;
            }

        }


        let ListBonType = [];

        for (let typeCurrent in Type.all_types){
            dmg=0;
            for (let typePoke in poke[0].types){
                if (dmg!=0) {
                    dmg *= Type.all_types[typeCurrent].effectiveness[typePoke];

                }

                if (dmg==0){
                    dmg = Type.all_types[typeCurrent].effectiveness[typePoke];
                } 
            }


            if (dmg == max) {
                ListBonType.push(typeCurrent);

            }

        }

        console.log("Voici la liste des meilleurs type d'attaque pour attaqué ce pokémon")
        console.log(ListBonType);


        let ListBestAttack = [];

        Attack.all_attacks.forEach(attackCurrent => {
            ListBonType.forEach(typeCurrentList => {
                if (attackCurrent.type.includes(typeCurrentList)){
                    ListBestAttack.push(attackCurrent);
                }
            });
        });

        console.log("La liste des meilleurs attaques contre ce pokémon est :");
        return ListBestAttack;

    }
}



