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

          let typeAff =" ";
          for (let currentTypeAff in pokemon.types) {
            typeAff  += currentTypeAff+" ";
          }
          
          let atkAff = "| ";
          pokemon.attack.forEach(currentAttackAff => {
            atkAff += currentAttackAff + " | ";
          });
          
          const tr = document.createElement('tr');
          const imageNom = "../webp/images/" + pokemon.pokemon_id.toString().padStart(3, '0') + '.webp';
          tr.innerHTML = `
          <td>${pokemon.pokemon_id}</td>
          <td>${pokemon.pokemon_name}</td>
          <td>${pokemon.gen}</td>
          <td>${pokemon.form}</td>
          <td>${pokemon.base_attack}</td>
          <td>${pokemon.base_defense}</td>
          <td>${pokemon.base_stamina}</td>
          <td>${typeAff}</td>
          <td>${atkAff}</td>
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



  });

