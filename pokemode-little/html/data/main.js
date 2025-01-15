Pokemon.import_pokemon();
Pokemon.test();

let pokeListe = Pokemon.all_pokemons;

document.addEventListener("DOMContentLoaded", function() {

    // Affichage des pokémons

    function afficherPokemons(page, pokeListeUse) {

      const tbody = document.getElementById('pokemonTableBody');
      tbody.innerHTML = ''; 

      if (page<1) {
        page=1;
      }

      if (page > totalPages) {
        page = totalPages;
      }
  
      const debut = (page - 1) * 25;
      const fin = debut + 25;
/*       const pokemonsAffiches = pokeListeUse.slice(debut, fin);
 */      let x = 0;
  
        pokeListeUse.forEach(pokemon => {
        if (x >= debut && x< fin) {

            
            const tr = document.createElement('tr');
            const imageNom = "webp/images/" + pokemon.pokemon_id.toString().padStart(3, '0') + '.webp';
            tr.innerHTML = `
            <td>${pokemon.pokemon_id}</td>
            <td>${pokemon.pokemon_name}</td>
            <td>${pokemon.gen}</td>
            <td><img src="${imageNom}" alt="${pokemon.nom}"></td>
            `;
            tbody.appendChild(tr);
        }
        x++
      });
      console.log(totalPages);
    }

    function nbpage(liste) {
        let nbElem=0;
        for (let a in liste) {
            nbElem++;
        }

        return Math.ceil(nbElem / 25);
    }
  
    let totalPages = nbpage(pokeListe);

    i=1
  
    afficherPokemons(i, pokeListe);


    // Bouton suivant et Précédant

    const btnSuiv = document.getElementById("suiv");
    const btnPresed = document.getElementById("presed");
  
    btnPresed.addEventListener('click', function() {
        console.log("cca");
      if (i>1){
          i--;
          afficherPokemons(i, pokeListe);
      }
    });
  
    btnSuiv.addEventListener('click', function() {
      if (i<totalPages){
          i++;
          afficherPokemons(i, pokeListe);
      }
    });



    // Bare de recherche

    const rechercheBare = document.getElementById("rechercheData");
    function updateSearchResults(query) {


        pokeListe = Pokemon.all_pokemons.filter(pokeCurrent =>
            pokeCurrent.pokemon_name.toLowerCase().includes(query.toLowerCase())
        );
        totalPages = nbpage(pokeListe);
        afficherPokemons(i, pokeListe);
    }

    rechercheBare.addEventListener('input', function(event) {
        const query = event.target.value;
        updateSearchResults(query);
    });


    // Filtre bouton

    const dragon = document.getElementById("dragon");

    dragon.addEventListener('click', function() {
        pokeListe = Pokemon.getPokemonsByType(dragon.innerHTML);
        totalPages = nbpage(pokeListe);
                afficherPokemons(i, pokeListe);
    });

    // Tri

    const tri = document.getElementById("tri");

    tri.addEventListener('click', function() {
        pokeListe = Pokemon.sortListPokemonByName(pokeListe);
        totalPages = nbpage(pokeListe);
                afficherPokemons(i, pokeListe);
    });

    // Reset

    const reset = document.getElementById("reset");

    reset.addEventListener('click', function() {
        pokeListe = Pokemon.all_pokemons;
        totalPages = nbpage(pokeListe);
        afficherPokemons(i, pokeListe);
    });
  });

