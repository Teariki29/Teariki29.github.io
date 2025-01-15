Pokemon.import_pokemon();
Pokemon.test();

let pokeListe = Pokemon.all_pokemons;

document.addEventListener("DOMContentLoaded", function() {

    // Affichage des pokémons

    function afficherPokemons(page, pokeListeUse) {

      const tbody = document.getElementById('pokemonTableBody');
      tbody.innerHTML = ''; 

   
        pokeListeUse.forEach(pokemon => {

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

      });
      console.log(totalPages);
    }

    i=1
  
    afficherPokemons(i, pokeListe);


  });

