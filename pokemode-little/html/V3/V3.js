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
          tr.classList.add("carte1");
          const imageNom = "../webp/images/" + pokemon.pokemon_id.toString().padStart(3, '0') + '.webp';
          tr.innerHTML = `
          <td class='idpokemon'>${pokemon.pokemon_id}</td>
          <td class='nompokemon'>${pokemon.pokemon_name}</td>
          <td class='generation'>${pokemon.gen}</td>
          <td class='attaque'>${pokemon.base_attack}</td>
          <td class='defense'>${pokemon.base_defense}</td>
          <td class='stamina'>${pokemon.base_stamina}</td>
          <td class='type'>${typeAff}</td>
          <td class='idpokemon'>${atkAff}</td>
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
          test()
      }
    });
  
    btnSuiv.addEventListener('click', function() {
      if (i<totalPages){
          i++;
          afficherPokemons(i, pokeListe);
          test()
      }
    });



  const cartesPokemon = document.querySelectorAll('.carte1');
  const popup = document.getElementById('popup');
  const closeButton = document.getElementById('closeButton');

  console.log(cartesPokemon)


  
  function test() {
    
    const cartesPokemon = document.querySelectorAll('.carte1');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');

    cartesPokemon.forEach(carte => {
      carte.addEventListener('click', function(event) {
          let atkFast ='<option value="" disabled selected>Fast move</option> ';
          let atkCharged ='<option value="" disabled selected>Charged move</option> ';
          
          console.log("Carte cliquée");
          const pokemonData = getPokemonDataById(carte.querySelector('.idpokemon').textContent);
          const typePoke = carte.querySelector('.type').innerHTML;

          const popupContent = document.getElementById('popup-content');
          popupContent.querySelector('.idpokemon').textContent = `${pokemonData.pokemon_id}`;
          popupContent.querySelector('.nompokemon').textContent = pokemonData.pokemon_name;
          popupContent.querySelector('.type').innerHTML = typePoke;
          popupContent.querySelector('.generation').innerHTML = `<div class="generation-container"><span class="generation-label">${pokemonData.gen}</span><div class="ligne"></div></div>`;
          popupContent.querySelector('.attaque').textContent = `Attaque ${pokemonData.base_attack}`;
          popupContent.querySelector('.defense').textContent = `Défense ${pokemonData.base_defense}`;
          popupContent.querySelector('.stamina').textContent = `Stamina ${pokemonData.base_stamina}`;

          popupContent.querySelector('.fast-moves-dropdown').innerHTML = `<select class="fast-moves-dropdown">${atkFast}</select>`;
          popupContent.querySelector('.charged-moves-dropdown').innerHTML = `<select class="charged-moves-dropdown">${atkCharged}</select>`;

          popupContent.querySelector('.charged-moves-dropdown-bis').style.backgroundColor = "Transparent";
          popupContent.querySelector('.fast-moves-dropdown-bis').style.backgroundColor = "Transparent";


          popupContent.querySelector('.critical_chance').textContent = ``;
          popupContent.querySelector('.duration').textContent = ``;
          popupContent.querySelector('.energy_delta').textContent = ``;
          popupContent.querySelector('.move_id').textContent = ``;
          popupContent.querySelector('.power').textContent = ``;
          popupContent.querySelector('.stamina_loss_scaler').textContent = ``;
          popupContent.querySelector('.typeMv').textContent = ``;

          popupContent.querySelector('.critical_chance2').textContent = ``;
          popupContent.querySelector('.duration2').textContent = ``;
          popupContent.querySelector('.energy_delta2').textContent = ``;
          popupContent.querySelector('.move_id2').textContent = ``;
          popupContent.querySelector('.power2').textContent = ``;
          popupContent.querySelector('.stamina_loss_scaler2').textContent = ``;
          popupContent.querySelector('.type2').textContent = ``;
          
          const imageNom = carte.querySelector('img').getAttribute('src');
          const imagePokemon = popupContent.querySelector('.pokemon-image');
          imagePokemon.src = imageNom;
          imagePokemon.alt = pokemonData.pokemon_name;
          
          let listAtk=[];
          pokemonData.attack.forEach(element => {
            listAtk.push(Attack.getAttacksByName(element))
          });


          listAtk.forEach(tab => {
            tab.forEach(atk => {
              if (atk.movesType=="fast"){
                atkFast += "<option>"+atk.name+"</option>"
              }
              if (atk.movesType=="charged"){
                atkCharged += "<option>"+atk.name+"</option>"
              }
            });
            
          });

          popupContent.querySelector('.fast-moves-dropdown').innerHTML = `<select class="fast-moves-dropdown">${atkFast}</select>`;

          popupContent.querySelector('.charged-moves-dropdown').innerHTML = `<select class="charged-moves-dropdown">${atkCharged}</select>`;

          const listAtkFast = document.querySelector('.fast-moves-dropdown');
          listAtkFast.addEventListener('change', function() {
            console.log(listAtkFast.value)
            let Temp = Attack.getAttacksByName(listAtkFast.value)
            Temp.forEach(atkAff => {
              console.log(atkAff.power)
              popupContent.querySelector('.fast-moves-dropdown-bis').style.backgroundColor = "white";
              popupContent.querySelector('.critical_chance').innerHTML = `critical_chance : <span class="grasdetail">${atkAff.critical_chance}</span>`;
              popupContent.querySelector('.duration').innerHTML = `duration : <span class="grasdetail">${atkAff.duration}</span>`;
              popupContent.querySelector('.energy_delta').innerHTML = `energy_delta : <span class="grasdetail">${atkAff.energy_delta}</span>`;
              popupContent.querySelector('.move_id').innerHTML = `move_id : <span class="grasdetail">${atkAff.move_id}</span>`;
              popupContent.querySelector('.power').innerHTML = `Power : <span class="grasdetail">${atkAff.power}</span>`;
              popupContent.querySelector('.stamina_loss_scaler').innerHTML = `stamina_loss_scaler : <span class="grasdetail">${atkAff.stamina_loss_scaler}</span>`;
              popupContent.querySelector('.typeMv').innerHTML = `type : <span class="grasdetail">${atkAff.type}</span>`;

            });
          });

          const listAtkCharged = document.querySelector('.charged-moves-dropdown');
          listAtkCharged.addEventListener('change', function() {
            console.log(listAtkCharged.value)
            let Temp = Attack.getAttacksByName(listAtkCharged.value)
            Temp.forEach(atkAff => {
              console.log(atkAff.power)
              popupContent.querySelector('.charged-moves-dropdown-bis').style.backgroundColor = "white";
              popupContent.querySelector('.critical_chance2').innerHTML = `critical_chance : <span class="grasdetail">${atkAff.critical_chance}</span>`;
              popupContent.querySelector('.duration2').innerHTML = `duration : <span class="grasdetail">${atkAff.duration}</span>`;
              popupContent.querySelector('.energy_delta2').innerHTML = `energy_delta : <span class="grasdetail">${atkAff.energy_delta}</span>`;
              popupContent.querySelector('.move_id2').innerHTML = `move_id : <span class="grasdetail">${atkAff.move_id}</span>`;
              popupContent.querySelector('.power2').innerHTML = `Power : <span class="grasdetail">${atkAff.power}</span>`;
              popupContent.querySelector('.stamina_loss_scaler2').innerHTML = `stamina_loss_scaler : <span class="grasdetail">${atkAff.stamina_loss_scaler}</span>`;
              popupContent.querySelector('.type2').innerHTML = `type : <span class="grasdetail">${atkAff.type}</span>`;

            });
          });



          popup.style.display = 'block';
      });
    });
  }

  
  test();

  

  // Bouton pour fermer la popup
  closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
  });

  // Vérifier si les éléments sont correctement sélectionnés
  console.log("Popup:", popup);
  console.log("Cartes Pokemon:", cartesPokemon);

});
    
    
    
    // -------------------------------------------------------------------------------------------- PARTIE 
    
    
  function getPokemonDataById(pokemonId) {
    for (const pokemon of pokemons) {
        if (pokemon.pokemon_id == pokemonId && pokemon.form=="Normal") {
            return pokemon; 
        }
    }
    return null; 
  }