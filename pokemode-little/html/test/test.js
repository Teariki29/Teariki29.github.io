Pokemon.import_pokemon();



const getPokemonsByType = document.getElementById("getPokemonsByType");
const getPokemonsByAttack = document.getElementById("getPokemonsByAttack");
const getAttacksByType = document.getElementById("getAttacksByType");
const sortPokemonByName = document.getElementById("sortPokemonByName");
const sortPokemonByStamina = document.getElementById("sortPokemonByStamina");
const getWeakestEnemies = document.getElementById("getWeakestEnemies");
const getBestAttackTypesForEnemy = document.getElementById("getBestAttackTypesForEnemy");
const pokeName = document.getElementById("name")
const pokeType = document.getElementById("typeName")
const Atk = document.getElementById("attack")


getPokemonsByType.addEventListener('click', function() {
    console.log(`Voici la liste de tout les pokémons de type ${pokeType.value}`)
    console.table(Pokemon.getPokemonsByType(pokeType.value));
});

getPokemonsByAttack.addEventListener('click', function() {
    console.log(`Voici la liste de tout les pokémons qui possède l'attaque ${Atk.value}`)
    Pokemon.getPokemonsByAttack(Atk.value);
});

getAttacksByType.addEventListener('click', function() {
    console.log(`Voici la liste de tout les attaques de type ${pokeType.value}`)
    Attack.getAttacksByType(pokeType.value);
});

sortPokemonByName.addEventListener('click', function() {
    console.log("Voici la liste de tout les pokémons trier par ordre alphabétique")
    Pokemon.sortPokemonByName();
});

sortPokemonByStamina.addEventListener('click', function() {
    console.log("Voici la liste de tout les pokémons trier par la stat de stamina")
    Pokemon.sortPokemonByStamina();
});

getWeakestEnemies.addEventListener('click', function() {
    console.log(`Voici la liste des pokémon les plus faibles à l'attaque ${Atk.value}`)
    Pokemon.getWeakestEnemies(Atk.value);
});

getBestAttackTypesForEnemy.addEventListener('click', function() {
    console.log(`Pokémon sélectionné : ${pokeName.value}`)
    console.table(Pokemon.getBestAttackTypesForEnemy(pokeName.value));
});




