// http://api/v1/current_pokemon_moves.json
// This API returns all moves that Pokemon can currently learn via catching, evolving, hatching, or using TM's.
// Returns a JSON array where each element is a dict containing :
// - Pokemon ID, 
// - Pokemon name, 
// - an array of charged moves, 
// - an array of fast moves, 
// - an array of charged moves learnable from an elite TM, 
// - an array of fast legacy fast moves, 
// and optionally the form.
let pokemon_moves = [
    {
        "charged_moves": [
            "Sludge Bomb",
            "Seed Bomb",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Fall_2019",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Seed Bomb",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Solar Beam",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 2,
        "pokemon_name": "Ivysaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Petal Blizzard",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Copy_2019",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Petal Blizzard",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 3,
        "pokemon_name": "Venusaur"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Burst",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Scratch"
        ],
        "form": "Fall_2019",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Burst",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 4,
        "pokemon_name": "Charmander"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Flame Burst",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Scratch"
        ],
        "fast_moves": [
            "Ember",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 5,
        "pokemon_name": "Charmeleon"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Dragon Claw",
            "Overheat"
        ],
        "elite_charged_moves": [
            "Blast Burn",
            "Flamethrower"
        ],
        "elite_fast_moves": [
            "Ember",
            "Wing Attack",
            "Dragon Breath"
        ],
        "fast_moves": [
            "Fire Spin",
            "Air Slash"
        ],
        "form": "Copy_2019",
        "pokemon_id": 6,
        "pokemon_name": "Charizard"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Dragon Claw",
            "Overheat"
        ],
        "elite_charged_moves": [
            "Blast Burn",
            "Flamethrower"
        ],
        "elite_fast_moves": [
            "Ember",
            "Wing Attack",
            "Dragon Breath"
        ],
        "fast_moves": [
            "Fire Spin",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 6,
        "pokemon_name": "Charizard"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Tackle"
        ],
        "form": "Fall_2019",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 7,
        "pokemon_name": "Squirtle"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Ice Beam",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 8,
        "pokemon_name": "Wartortle"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Ice Beam",
            "Hydro Pump",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Copy_2019",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Ice Beam",
            "Hydro Pump",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 9,
        "pokemon_name": "Blastoise"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 10,
        "pokemon_name": "Caterpie"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 11,
        "pokemon_name": "Metapod"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Psychic",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 12,
        "pokemon_name": "Butterfree"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 13,
        "pokemon_name": "Weedle"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 14,
        "pokemon_name": "Kakuna"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Aerial Ace",
            "X Scissor",
            "Fell Stinger"
        ],
        "elite_charged_moves": [
            "Drill Run"
        ],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Infestation",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 15,
        "pokemon_name": "Beedrill"
    },
    {
        "charged_moves": [
            "Twister",
            "Aerial Ace",
            "Air Cutter"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 16,
        "pokemon_name": "Pidgey"
    },
    {
        "charged_moves": [
            "Twister",
            "Aerial Ace",
            "Air Cutter"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 17,
        "pokemon_name": "Pidgeotto"
    },
    {
        "charged_moves": [
            "Hurricane",
            "Aerial Ace",
            "Brave Bird",
            "Feather Dance"
        ],
        "elite_charged_moves": [
            "Air Cutter"
        ],
        "elite_fast_moves": [
            "Wing Attack",
            "Gust"
        ],
        "fast_moves": [
            "Air Slash",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 18,
        "pokemon_name": "Pidgeot"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hyper Fang",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Quick Attack"
        ],
        "form": "Alola",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Fang",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 19,
        "pokemon_name": "Rattata"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hyper Fang",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Quick Attack"
        ],
        "form": "Alola",
        "pokemon_id": 20,
        "pokemon_name": "Raticate"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Fang",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 20,
        "pokemon_name": "Raticate"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Drill Peck",
            "Sky Attack"
        ],
        "elite_charged_moves": [
            "Twister"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 21,
        "pokemon_name": "Spearow"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Drill Run",
            "Sky Attack"
        ],
        "elite_charged_moves": [
            "Twister"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 22,
        "pokemon_name": "Fearow"
    },
    {
        "charged_moves": [
            "Wrap",
            "Poison Fang",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Gunk Shot"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 23,
        "pokemon_name": "Ekans"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Sludge Wave",
            "Gunk Shot",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Acid",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 24,
        "pokemon_name": "Arbok"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Adventure_hat_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Copy_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge",
            "Fly"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Costume_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Fall_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge",
            "Fly"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Flying_5th_anniv",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Kariyushi",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Thunder Punch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charm"
        ],
        "form": "Pop_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Meteor Mash",
            "Thunder Punch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charm"
        ],
        "form": "Rock_star",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Flying Press",
            "Thunder Punch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charm"
        ],
        "form": "Vs_2019",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [
            "Surf",
            "Thunder"
        ],
        "elite_fast_moves": [
            "Present"
        ],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Winter_2020",
        "pokemon_id": 25,
        "pokemon_name": "Pikachu"
    },
    {
        "charged_moves": [
            "Psychic",
            "Thunder Punch",
            "Wild Charge",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Spark",
            "Thunder Shock"
        ],
        "form": "Alola",
        "pokemon_id": 26,
        "pokemon_name": "Raichu"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Thunder Punch",
            "Wild Charge",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Thunder"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Spark",
            "Charm",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 26,
        "pokemon_name": "Raichu"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Gyro Ball",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Powder Snow"
        ],
        "form": "Alola",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Slide",
            "Sand Tomb"
        ],
        "elite_charged_moves": [
            "Rock Tomb"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 27,
        "pokemon_name": "Sandshrew"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Gyro Ball",
            "Bulldoze",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Powder Snow"
        ],
        "form": "Alola",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Rock Tomb",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 28,
        "pokemon_name": "Sandslash"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Body Slam",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 29,
        "pokemon_name": "Nidoran\u2640"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Dig",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 30,
        "pokemon_name": "Nidorina"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Sludge Wave",
            "Stone Edge",
            "Earth Power",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 31,
        "pokemon_name": "Nidoqueen"
    },
    {
        "charged_moves": [
            "Horn Attack",
            "Body Slam",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 32,
        "pokemon_name": "Nidoran\u2642"
    },
    {
        "charged_moves": [
            "Horn Attack",
            "Dig",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 33,
        "pokemon_name": "Nidorino"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Sludge Wave",
            "Megahorn",
            "Earth Power",
            "Sand Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Fury Cutter"
        ],
        "fast_moves": [
            "Poison Jab",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 34,
        "pokemon_name": "Nidoking"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Body Slam",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 35,
        "pokemon_name": "Clefairy"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Psychic",
            "Moonblast",
            "Meteor Mash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Pound"
        ],
        "fast_moves": [
            "Charge Beam",
            "Zen Headbutt",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 36,
        "pokemon_name": "Clefable"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Ice Beam",
            "Blizzard",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Powder Snow"
        ],
        "form": "Alola",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Flamethrower",
            "Flame Charge",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 37,
        "pokemon_name": "Vulpix"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Ice Beam",
            "Blizzard",
            "Psyshock",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Powder Snow",
            "Charm"
        ],
        "form": "Alola",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Overheat",
            "Solar Beam",
            "Psyshock",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [
            "Fire Blast",
            "Flamethrower"
        ],
        "elite_fast_moves": [
            "Ember"
        ],
        "fast_moves": [
            "Feint Attack",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 38,
        "pokemon_name": "Ninetales"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Gyro Ball",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [
            "Play Rough",
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 39,
        "pokemon_name": "Jigglypuff"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Hyper Beam",
            "Play Rough",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Feint Attack",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 40,
        "pokemon_name": "Wigglytuff"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Air Cutter",
            "Swift"
        ],
        "elite_charged_moves": [
            "Sludge Bomb"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 41,
        "pokemon_name": "Zubat"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Air Cutter",
            "Poison Fang"
        ],
        "elite_charged_moves": [
            "Ominous Wind"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 42,
        "pokemon_name": "Golbat"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Sludge Bomb",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 43,
        "pokemon_name": "Oddish"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Sludge Bomb",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 44,
        "pokemon_name": "Gloom"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Solar Beam",
            "Moonblast",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 45,
        "pokemon_name": "Vileplume"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "X Scissor",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 46,
        "pokemon_name": "Paras"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "X Scissor",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Struggle Bug",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 47,
        "pokemon_name": "Parasect"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Psybeam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 48,
        "pokemon_name": "Venonat"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Psychic",
            "Bug Buzz",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bug Bite"
        ],
        "fast_moves": [
            "Infestation",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 49,
        "pokemon_name": "Venomoth"
    },
    {
        "charged_moves": [
            "Dig",
            "Mud Bomb",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Metal Claw"
        ],
        "form": "Alola",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "charged_moves": [
            "Dig",
            "Mud Bomb",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 50,
        "pokemon_name": "Diglett"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Mud Bomb",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Mud Slap"
        ],
        "form": "Alola",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Mud Bomb",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 51,
        "pokemon_name": "Dugtrio"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Dark Pulse",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bite"
        ],
        "form": "Alola",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Gyro Ball",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Metal Claw"
        ],
        "form": "Galarian",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Dark Pulse",
            "Foul Play"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 52,
        "pokemon_name": "Meowth"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Feint Attack"
        ],
        "form": "Alola",
        "pokemon_id": 53,
        "pokemon_name": "Persian"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Power Gem",
            "Play Rough",
            "Payback"
        ],
        "elite_charged_moves": [
            "Night Slash"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 53,
        "pokemon_name": "Persian"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Aqua Tail",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 54,
        "pokemon_name": "Psyduck"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hydro Pump",
            "Ice Beam",
            "Bubble Beam",
            "Synchronoise",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 55,
        "pokemon_name": "Golduck"
    },
    {
        "charged_moves": [
            "Cross Chop",
            "Low Sweep",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Karate Chop",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 56,
        "pokemon_name": "Mankey"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Low Sweep",
            "Night Slash",
            "Ice Punch"
        ],
        "elite_charged_moves": [
            "Cross Chop"
        ],
        "elite_fast_moves": [
            "Karate Chop"
        ],
        "fast_moves": [
            "Low Kick",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 57,
        "pokemon_name": "Primeape"
    },
    {
        "charged_moves": [
            "Flame Wheel",
            "Body Slam",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 58,
        "pokemon_name": "Growlithe"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Wild Charge",
            "Crunch",
            "Flamethrower"
        ],
        "elite_charged_moves": [
            "Bulldoze"
        ],
        "elite_fast_moves": [
            "Bite"
        ],
        "fast_moves": [
            "Fire Fang",
            "Snarl",
            "Thunder Fang"
        ],
        "form": "Normal",
        "pokemon_id": 59,
        "pokemon_name": "Arcanine"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Mud Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 60,
        "pokemon_name": "Poliwag"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Bubble Beam"
        ],
        "elite_charged_moves": [
            "Scald"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 61,
        "pokemon_name": "Poliwhirl"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Dynamic Punch",
            "Ice Punch",
            "Power Up Punch",
            "Scald"
        ],
        "elite_charged_moves": [
            "Submission"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Rock Smash",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 62,
        "pokemon_name": "Poliwrath"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Signal Beam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 63,
        "pokemon_name": "Abra"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Dazzling Gleam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 64,
        "pokemon_name": "Kadabra"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Focus Blast",
            "Shadow Ball",
            "Fire Punch"
        ],
        "elite_charged_moves": [
            "Dazzling Gleam",
            "Psychic"
        ],
        "elite_fast_moves": [
            "Counter"
        ],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 65,
        "pokemon_name": "Alakazam"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Brick Break",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Low Kick"
        ],
        "fast_moves": [
            "Rock Smash",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 66,
        "pokemon_name": "Machop"
    },
    {
        "charged_moves": [
            "Submission",
            "Brick Break",
            "Dynamic Punch"
        ],
        "elite_charged_moves": [
            "Cross Chop"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 67,
        "pokemon_name": "Machoke"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Dynamic Punch",
            "Close Combat",
            "Rock Slide",
            "Cross Chop"
        ],
        "elite_charged_moves": [
            "Stone Edge",
            "Submission",
            "Payback"
        ],
        "elite_fast_moves": [
            "Karate Chop"
        ],
        "fast_moves": [
            "Bullet Punch",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 68,
        "pokemon_name": "Machamp"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Sludge Bomb",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 69,
        "pokemon_name": "Bellsprout"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Sludge Bomb",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Razor Leaf"
        ],
        "fast_moves": [
            "Bullet Seed",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 70,
        "pokemon_name": "Weepinbell"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Sludge Bomb",
            "Solar Beam",
            "Leaf Tornado",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 71,
        "pokemon_name": "Victreebel"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Water Pulse",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 72,
        "pokemon_name": "Tentacool"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Sludge Wave",
            "Blizzard",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 73,
        "pokemon_name": "Tentacruel"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Rock Tomb",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Volt Switch"
        ],
        "form": "Alola",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Rock Tomb",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 74,
        "pokemon_name": "Geodude"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Stone Edge",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Volt Switch"
        ],
        "form": "Alola",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "charged_moves": [
            "Dig",
            "Stone Edge",
            "Rock Blast"
        ],
        "elite_charged_moves": [
            "Rock Slide"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 75,
        "pokemon_name": "Graveler"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Blast",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Volt Switch"
        ],
        "form": "Alola",
        "pokemon_id": 76,
        "pokemon_name": "Golem"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Blast",
            "Earthquake",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 76,
        "pokemon_name": "Golem"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Psybeam",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Psycho Cut"
        ],
        "form": "Galarian",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Wheel",
            "Stomp"
        ],
        "elite_charged_moves": [
            "Fire Blast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 77,
        "pokemon_name": "Ponyta"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Psychic",
            "Body Slam",
            "Megahorn"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Psycho Cut"
        ],
        "form": "Galarian",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Drill Run",
            "Heat Wave",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Ember"
        ],
        "fast_moves": [
            "Low Kick",
            "Fire Spin",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 78,
        "pokemon_name": "Rapidash"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "2020",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "charged_moves": [
            "Surf",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Iron Tail"
        ],
        "form": "Galarian",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 79,
        "pokemon_name": "Slowpoke"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psychic",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "2021",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Psychic",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Poison Jab"
        ],
        "form": "Galarian",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Psychic",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 80,
        "pokemon_name": "Slowbro"
    },
    {
        "charged_moves": [
            "Discharge",
            "Magnet Bomb",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 81,
        "pokemon_name": "Magnemite"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Magnet Bomb",
            "Flash Cannon",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Charge Beam",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 82,
        "pokemon_name": "Magneton"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Brave Bird",
            "Leaf Blade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Fury Cutter"
        ],
        "form": "Galarian",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Air Cutter",
            "Leaf Blade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Cut"
        ],
        "fast_moves": [
            "Air Slash",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 83,
        "pokemon_name": "Farfetch\u2019d"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Aerial Ace",
            "Brave Bird"
        ],
        "elite_charged_moves": [
            "Swift"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 84,
        "pokemon_name": "Doduo"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Aerial Ace",
            "Brave Bird"
        ],
        "elite_charged_moves": [
            "Air Cutter"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 85,
        "pokemon_name": "Dodrio"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Icy Wind",
            "Aqua Tail"
        ],
        "elite_charged_moves": [
            "Aqua Jet"
        ],
        "elite_fast_moves": [
            "Water Gun"
        ],
        "fast_moves": [
            "Ice Shard",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 86,
        "pokemon_name": "Seel"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Water Pulse",
            "Blizzard"
        ],
        "elite_charged_moves": [
            "Aqua Jet",
            "Icy Wind"
        ],
        "elite_fast_moves": [
            "Ice Shard"
        ],
        "fast_moves": [
            "Frost Breath",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 87,
        "pokemon_name": "Dewgong"
    },
    {
        "charged_moves": [
            "Crunch",
            "Gunk Shot",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Bite"
        ],
        "form": "Alola",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "charged_moves": [
            "Sludge",
            "Mud Bomb",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 88,
        "pokemon_name": "Grimer"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Gunk Shot",
            "Sludge Wave",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Poison Jab",
            "Snarl"
        ],
        "form": "Alola",
        "pokemon_id": 89,
        "pokemon_name": "Muk"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Gunk Shot",
            "Sludge Wave",
            "Thunder Punch",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Infestation",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 89,
        "pokemon_name": "Muk"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Water Pulse",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 90,
        "pokemon_name": "Shellder"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Hydro Pump",
            "Avalanche",
            "Icy Wind"
        ],
        "elite_charged_moves": [
            "Blizzard"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Ice Shard"
        ],
        "form": "Normal",
        "pokemon_id": 91,
        "pokemon_name": "Cloyster"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Dark Pulse",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Ominous Wind"
        ],
        "elite_fast_moves": [
            "Sucker Punch"
        ],
        "fast_moves": [
            "Lick",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 92,
        "pokemon_name": "Gastly"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Dark Pulse",
            "Sludge Bomb",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Shadow Claw",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 93,
        "pokemon_name": "Haunter"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Focus Blast",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Sludge Wave",
            "Dark Pulse",
            "Psychic",
            "Shadow Punch"
        ],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Sucker Punch",
            "Hex",
            "Shadow Claw"
        ],
        "form": "Costume_2020",
        "pokemon_id": 94,
        "pokemon_name": "Gengar"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Focus Blast",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Sludge Wave",
            "Dark Pulse",
            "Psychic",
            "Shadow Punch"
        ],
        "elite_fast_moves": [
            "Lick"
        ],
        "fast_moves": [
            "Sucker Punch",
            "Hex",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 94,
        "pokemon_name": "Gengar"
    },
    {
        "charged_moves": [
            "Sand Tomb",
            "Stone Edge",
            "Heavy Slam"
        ],
        "elite_charged_moves": [
            "Iron Head",
            "Rock Slide"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 95,
        "pokemon_name": "Onix"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 96,
        "pokemon_name": "Drowzee"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Psychic",
            "Focus Blast",
            "Fire Punch",
            "Ice Punch",
            "Thunder Punch",
            "Shadow Ball"
        ],
        "elite_charged_moves": [
            "Psyshock"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 97,
        "pokemon_name": "Hypno"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Bubble Beam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 98,
        "pokemon_name": "Krabby"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "X Scissor",
            "Water Pulse",
            "Crabhammer"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Mud Shot"
        ],
        "fast_moves": [
            "Bubble",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 99,
        "pokemon_name": "Kingler"
    },
    {
        "charged_moves": [
            "Swift",
            "Thunderbolt",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Tackle"
        ],
        "form": "Hisuian",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Gyro Ball"
        ],
        "elite_charged_moves": [
            "Signal Beam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 100,
        "pokemon_name": "Voltorb"
    },
    {
        "charged_moves": [
            "Swift",
            "Wild Charge",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Tackle"
        ],
        "form": "Hisuian",
        "pokemon_id": 101,
        "pokemon_name": "Electrode"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Hyper Beam",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Tackle"
        ],
        "fast_moves": [
            "Spark",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 101,
        "pokemon_name": "Electrode"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Psychic",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 102,
        "pokemon_name": "Exeggcute"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Dragon Pulse",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Dragon Tail"
        ],
        "form": "Alola",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Psychic",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Bullet Seed",
            "Extrasensory",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 103,
        "pokemon_name": "Exeggutor"
    },
    {
        "charged_moves": [
            "Bone Club",
            "Dig",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 104,
        "pokemon_name": "Cubone"
    },
    {
        "charged_moves": [
            "Bone Club",
            "Shadow Ball",
            "Fire Blast",
            "Flame Wheel"
        ],
        "elite_charged_moves": [
            "Shadow Bone"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Rock Smash",
            "Fire Spin"
        ],
        "form": "Alola",
        "pokemon_id": 105,
        "pokemon_name": "Marowak"
    },
    {
        "charged_moves": [
            "Bone Club",
            "Dig",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 105,
        "pokemon_name": "Marowak"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Low Sweep",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Stomp",
            "Brick Break"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 106,
        "pokemon_name": "Hitmonlee"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Ice Punch",
            "Thunder Punch",
            "Close Combat",
            "Power Up Punch"
        ],
        "elite_charged_moves": [
            "Brick Break"
        ],
        "elite_fast_moves": [
            "Rock Smash"
        ],
        "fast_moves": [
            "Bullet Punch",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 107,
        "pokemon_name": "Hitmonchan"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Stomp",
            "Power Whip"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 108,
        "pokemon_name": "Lickitung"
    },
    {
        "charged_moves": [
            "Sludge",
            "Sludge Bomb",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 109,
        "pokemon_name": "Koffing"
    },
    {
        "charged_moves": [
            "Sludge",
            "Hyper Beam",
            "Play Rough",
            "Hyper Beam",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle"
        ],
        "form": "Galarian",
        "pokemon_id": 110,
        "pokemon_name": "Weezing"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Shadow Ball",
            "Dark Pulse",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 110,
        "pokemon_name": "Weezing"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Horn Attack",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 111,
        "pokemon_name": "Rhyhorn"
    },
    {
        "charged_moves": [
            "Surf",
            "Earthquake",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Megahorn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 112,
        "pokemon_name": "Rhydon"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hyper Beam",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 113,
        "pokemon_name": "Chansey"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Sludge Bomb",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Power Whip"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 114,
        "pokemon_name": "Tangela"
    },
    {
        "charged_moves": [
            "Crunch",
            "Earthquake",
            "Outrage",
            "Power Up Punch"
        ],
        "elite_charged_moves": [
            "Brick Break",
            "Stomp"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 115,
        "pokemon_name": "Kangaskhan"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Dragon Pulse",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 116,
        "pokemon_name": "Horsea"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Dragon Pulse",
            "Hydro Pump"
        ],
        "elite_charged_moves": [
            "Blizzard"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 117,
        "pokemon_name": "Seadra"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Horn Attack",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 118,
        "pokemon_name": "Goldeen"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Water Pulse",
            "Megahorn"
        ],
        "elite_charged_moves": [
            "Icy Wind",
            "Drill Run"
        ],
        "elite_fast_moves": [
            "Poison Jab"
        ],
        "fast_moves": [
            "Peck",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 119,
        "pokemon_name": "Seaking"
    },
    {
        "charged_moves": [
            "Swift",
            "Bubble Beam",
            "Power Gem"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 120,
        "pokemon_name": "Staryu"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Power Gem",
            "Psychic",
            "Thunder",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Tackle"
        ],
        "fast_moves": [
            "Hidden Power",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 121,
        "pokemon_name": "Starmie"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt"
        ],
        "form": "Galarian",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 122,
        "pokemon_name": "Mr. Mime"
    },
    {
        "charged_moves": [
            "Night Slash",
            "X Scissor",
            "Aerial Ace"
        ],
        "elite_charged_moves": [
            "Bug Buzz"
        ],
        "elite_fast_moves": [
            "Steel Wing"
        ],
        "fast_moves": [
            "Fury Cutter",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 123,
        "pokemon_name": "Scyther"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Avalanche",
            "Psyshock",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Ice Punch"
        ],
        "elite_fast_moves": [
            "Pound"
        ],
        "fast_moves": [
            "Frost Breath",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 124,
        "pokemon_name": "Jynx"
    },
    {
        "charged_moves": [
            "Thunder Punch",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 125,
        "pokemon_name": "Electabuzz"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Fire Punch",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 126,
        "pokemon_name": "Magmar"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "X Scissor",
            "Close Combat",
            "Super Power"
        ],
        "elite_charged_moves": [
            "Submission"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Bug Bite",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 127,
        "pokemon_name": "Pinsir"
    },
    {
        "charged_moves": [
            "Horn Attack",
            "Iron Head",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 128,
        "pokemon_name": "Tauros"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash"
        ],
        "form": "Normal",
        "pokemon_id": 129,
        "pokemon_name": "Magikarp"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Crunch",
            "Outrage",
            "Twister"
        ],
        "elite_charged_moves": [
            "Dragon Pulse",
            "Aqua Tail"
        ],
        "elite_fast_moves": [
            "Dragon Tail"
        ],
        "fast_moves": [
            "Bite",
            "Waterfall",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 130,
        "pokemon_name": "Gyarados"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Surf",
            "Blizzard",
            "Skull Bash"
        ],
        "elite_charged_moves": [
            "Dragon Pulse",
            "Ice Beam"
        ],
        "elite_fast_moves": [
            "Ice Shard"
        ],
        "fast_moves": [
            "Frost Breath",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 131,
        "pokemon_name": "Lapras"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Transform"
        ],
        "form": "Normal",
        "pokemon_id": 132,
        "pokemon_name": "Ditto"
    },
    {
        "charged_moves": [
            "Dig",
            "Swift"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 133,
        "pokemon_name": "Eevee"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Hydro Pump",
            "Aqua Tail"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Scald"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 134,
        "pokemon_name": "Vaporeon"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Zap Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 135,
        "pokemon_name": "Jolteon"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Flamethrower",
            "Overheat"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Heat Wave",
            "Super Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 136,
        "pokemon_name": "Flareon"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Hyper Beam",
            "Zap Cannon"
        ],
        "elite_charged_moves": [
            "Signal Beam",
            "Psybeam",
            "Discharge"
        ],
        "elite_fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Charge Beam",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 137,
        "pokemon_name": "Porygon"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Bubble Beam",
            "Rock Blast"
        ],
        "elite_charged_moves": [
            "Rock Tomb",
            "Brine"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 138,
        "pokemon_name": "Omanyte"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Hydro Pump",
            "Rock Blast"
        ],
        "elite_charged_moves": [
            "Rock Slide"
        ],
        "elite_fast_moves": [
            "Rock Throw"
        ],
        "fast_moves": [
            "Mud Shot",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 139,
        "pokemon_name": "Omastar"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aqua Jet",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 140,
        "pokemon_name": "Kabuto"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Water Pulse",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Fury Cutter"
        ],
        "fast_moves": [
            "Mud Shot",
            "Rock Smash",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 141,
        "pokemon_name": "Kabutops"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Iron Head",
            "Hyper Beam",
            "Rock Slide",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Bite",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 142,
        "pokemon_name": "Aerodactyl"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Hyper Beam",
            "Earthquake",
            "Outrage",
            "Skull Bash",
            "Body Slam",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Yawn"
        ],
        "fast_moves": [
            "Zen Headbutt",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 143,
        "pokemon_name": "Snorlax"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Icy Wind",
            "Blizzard",
            "Ancient Power"
        ],
        "elite_charged_moves": [
            "Hurricane"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Ice Shard"
        ],
        "form": "Normal",
        "pokemon_id": 144,
        "pokemon_name": "Articuno"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Thunderbolt",
            "Thunder",
            "Ancient Power",
            "Drill Peck"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Thunder Shock"
        ],
        "fast_moves": [
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 145,
        "pokemon_name": "Zapdos"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Heat Wave",
            "Overheat",
            "Ancient Power"
        ],
        "elite_charged_moves": [
            "Sky Attack"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 146,
        "pokemon_name": "Moltres"
    },
    {
        "charged_moves": [
            "Wrap",
            "Twister",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 147,
        "pokemon_name": "Dratini"
    },
    {
        "charged_moves": [
            "Wrap",
            "Aqua Tail",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 148,
        "pokemon_name": "Dragonair"
    },
    {
        "charged_moves": [
            "Hurricane",
            "Hyper Beam",
            "Outrage",
            "Dragon Claw"
        ],
        "elite_charged_moves": [
            "Draco Meteor",
            "Dragon Pulse"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Steel Wing",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 149,
        "pokemon_name": "Dragonite"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Dynamic Punch",
            "Earthquake",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Psystrike"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Iron Tail"
        ],
        "form": "A",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo"
    },
    {
        "charged_moves": [
            "Psychic",
            "Thunderbolt",
            "Ice Beam",
            "Focus Blast",
            "Flamethrower"
        ],
        "elite_charged_moves": [
            "Psystrike",
            "Shadow Ball",
            "Hyper Beam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 150,
        "pokemon_name": "Mewtwo"
    },
    {
        "charged_moves": [
            "Psychic",
            "Ancient Power",
            "Dragon Claw",
            "Psyshock",
            "Ice Beam",
            "Blizzard",
            "Hyper Beam",
            "Solar Beam",
            "Thunderbolt",
            "Thunder",
            "Flame Charge",
            "Low Sweep",
            "Overheat",
            "Focus Blast",
            "Energy Ball",
            "Stone Edge",
            "Gyro Ball",
            "Bulldoze",
            "Rock Slide",
            "Grass Knot",
            "Flash Cannon",
            "Wild Charge",
            "Dark Pulse",
            "Dazzling Gleam",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Steel Wing",
            "Charge Beam",
            "Shadow Claw",
            "Volt Switch",
            "Struggle Bug",
            "Frost Breath",
            "Dragon Tail",
            "Infestation",
            "Poison Jab",
            "Rock Smash",
            "Snarl",
            "Cut",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 151,
        "pokemon_name": "Mew"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 152,
        "pokemon_name": "Chikorita"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 153,
        "pokemon_name": "Bayleef"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Solar Beam",
            "Earthquake"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 154,
        "pokemon_name": "Meganium"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Swift",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 155,
        "pokemon_name": "Cyndaquil"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Dig",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 156,
        "pokemon_name": "Quilava"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Overheat",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Blast Burn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Shadow Claw",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 157,
        "pokemon_name": "Typhlosion"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Jet",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 158,
        "pokemon_name": "Totodile"
    },
    {
        "charged_moves": [
            "Crunch",
            "Ice Punch",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 159,
        "pokemon_name": "Croconaw"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hydro Pump",
            "Ice Beam"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [
            "Water Gun"
        ],
        "fast_moves": [
            "Waterfall",
            "Bite",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 160,
        "pokemon_name": "Feraligatr"
    },
    {
        "charged_moves": [
            "Dig",
            "Brick Break",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 161,
        "pokemon_name": "Sentret"
    },
    {
        "charged_moves": [
            "Dig",
            "Brick Break",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 162,
        "pokemon_name": "Furret"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Sky Attack",
            "Night Shade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 163,
        "pokemon_name": "Hoothoot"
    },
    {
        "charged_moves": [
            "Psychic",
            "Sky Attack",
            "Night Shade",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 164,
        "pokemon_name": "Noctowl"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Swift",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 165,
        "pokemon_name": "Ledyba"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Silver Wind",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 166,
        "pokemon_name": "Ledian"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Signal Beam",
            "Cross Poison"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 167,
        "pokemon_name": "Spinarak"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Megahorn",
            "Cross Poison",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 168,
        "pokemon_name": "Ariados"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Air Cutter",
            "Sludge Bomb",
            "Poison Fang",
            "Cross Poison"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 169,
        "pokemon_name": "Crobat"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Thunderbolt",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 170,
        "pokemon_name": "Chinchou"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Charge Beam",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 171,
        "pokemon_name": "Lanturn"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Disarming Voice",
            "Thunder Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 172,
        "pokemon_name": "Pichu"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Psyshock",
            "Signal Beam"
        ],
        "elite_charged_moves": [
            "Psychic",
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 173,
        "pokemon_name": "Cleffa"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Shadow Ball",
            "Psychic"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 174,
        "pokemon_name": "Igglybuff"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Psyshock",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Hidden Power",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 175,
        "pokemon_name": "Togepi"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Dazzling Gleam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Steel Wing",
            "Zen Headbutt"
        ],
        "fast_moves": [
            "Extrasensory",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 176,
        "pokemon_name": "Togetic"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Psyshock",
            "Drill Peck"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 177,
        "pokemon_name": "Natu"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Futuresight",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 178,
        "pokemon_name": "Xatu"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Thunderbolt",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 179,
        "pokemon_name": "Mareep"
    },
    {
        "charged_moves": [
            "Power Gem",
            "Thunderbolt",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 180,
        "pokemon_name": "Flaaffy"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Focus Blast",
            "Thunder",
            "Power Gem",
            "Thunder Punch"
        ],
        "elite_charged_moves": [
            "Dragon Pulse"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 181,
        "pokemon_name": "Ampharos"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Petal Blizzard",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Acid",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 182,
        "pokemon_name": "Bellossom"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Aqua Tail",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 183,
        "pokemon_name": "Marill"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Hydro Pump",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 184,
        "pokemon_name": "Azumarill"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Earthquake",
            "Rock Slide",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 185,
        "pokemon_name": "Sudowoodo"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Surf",
            "Weather Ball Water"
        ],
        "elite_charged_moves": [
            "Earthquake"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 186,
        "pokemon_name": "Politoed"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Dazzling Gleam",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 187,
        "pokemon_name": "Hoppip"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Dazzling Gleam",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 188,
        "pokemon_name": "Skiploom"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Dazzling Gleam",
            "Solar Beam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [
            "Acrobatics"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Infestation",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 189,
        "pokemon_name": "Jumpluff"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Swift",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 190,
        "pokemon_name": "Aipom"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Cut"
        ],
        "form": "Normal",
        "pokemon_id": 191,
        "pokemon_name": "Sunkern"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Petal Blizzard",
            "Sludge Bomb",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 192,
        "pokemon_name": "Sunflora"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aerial Ace",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 193,
        "pokemon_name": "Yanma"
    },
    {
        "charged_moves": [
            "Mud Bomb",
            "Dig",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 194,
        "pokemon_name": "Wooper"
    },
    {
        "charged_moves": [
            "Sludge Bomb",
            "Earthquake",
            "Stone Edge",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 195,
        "pokemon_name": "Quagsire"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Shadow Ball"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 196,
        "pokemon_name": "Espeon"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Foul Play"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Psychic"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 197,
        "pokemon_name": "Umbreon"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Foul Play",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 198,
        "pokemon_name": "Murkrow"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Psychic",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "2022",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Shadow Ball",
            "Sludge Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Confusion",
            "Acid"
        ],
        "form": "Galarian",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Psychic",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 199,
        "pokemon_name": "Slowking"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Dark Pulse",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 200,
        "pokemon_name": "Misdreavus"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 201,
        "pokemon_name": "Unown"
    },
    {
        "charged_moves": [
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Splash",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 202,
        "pokemon_name": "Wobbuffet"
    },
    {
        "charged_moves": [
            "Psychic",
            "Thunderbolt",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 203,
        "pokemon_name": "Girafarig"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Rock Tomb",
            "Sand Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 204,
        "pokemon_name": "Pineco"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Earthquake",
            "Rock Tomb",
            "Sand Tomb",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 205,
        "pokemon_name": "Forretress"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Slide",
            "Drill Run"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 206,
        "pokemon_name": "Dunsparce"
    },
    {
        "charged_moves": [
            "Dig",
            "Aerial Ace",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 207,
        "pokemon_name": "Gligar"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Heavy Slam",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Dragon Tail",
            "Thunder Fang"
        ],
        "form": "Normal",
        "pokemon_id": 208,
        "pokemon_name": "Steelix"
    },
    {
        "charged_moves": [
            "Crunch",
            "Dazzling Gleam",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 209,
        "pokemon_name": "Snubbull"
    },
    {
        "charged_moves": [
            "Crunch",
            "Play Rough",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Snarl",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 210,
        "pokemon_name": "Granbull"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Ice Beam",
            "Sludge Wave",
            "Acid Spray",
            "Fell Stinger"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 211,
        "pokemon_name": "Qwilfish"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Iron Head",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Punch",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 212,
        "pokemon_name": "Scizor"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Stone Edge",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 213,
        "pokemon_name": "Shuckle"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Close Combat",
            "Earthquake",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 214,
        "pokemon_name": "Heracross"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Ice Punch",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 215,
        "pokemon_name": "Sneasel"
    },
    {
        "charged_moves": [
            "Cross Chop",
            "Crunch",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 216,
        "pokemon_name": "Teddiursa"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Hyper Beam",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Counter",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 217,
        "pokemon_name": "Ursaring"
    },
    {
        "charged_moves": [
            "Flame Burst",
            "Flame Charge",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 218,
        "pokemon_name": "Slugma"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Overheat",
            "Stone Edge",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Throw",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 219,
        "pokemon_name": "Magcargo"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Body Slam",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 220,
        "pokemon_name": "Swinub"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 221,
        "pokemon_name": "Piloswine"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Power Gem",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 222,
        "pokemon_name": "Corsola"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Water Pulse",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 223,
        "pokemon_name": "Remoraid"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Water Pulse",
            "Aurora Beam",
            "Acid Spray",
            "Octazooka"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 224,
        "pokemon_name": "Octillery"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Present"
        ],
        "form": "Normal",
        "pokemon_id": 225,
        "pokemon_name": "Delibird"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Present"
        ],
        "form": "Winter_2020",
        "pokemon_id": 225,
        "pokemon_name": "Delibird"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Ice Beam",
            "Aerial Ace",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Wing Attack",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 226,
        "pokemon_name": "Mantine"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Sky Attack",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 227,
        "pokemon_name": "Skarmory"
    },
    {
        "charged_moves": [
            "Crunch",
            "Flamethrower",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 228,
        "pokemon_name": "Houndour"
    },
    {
        "charged_moves": [
            "Crunch",
            "Fire Blast",
            "Foul Play",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 229,
        "pokemon_name": "Houndoom"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Outrage",
            "Octazooka"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Water Gun"
        ],
        "fast_moves": [
            "Waterfall",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 230,
        "pokemon_name": "Kingdra"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Rock Slide",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 231,
        "pokemon_name": "Phanpy"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Heavy Slam",
            "Play Rough",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Counter",
            "Mud Slap",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 232,
        "pokemon_name": "Donphan"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Hyper Beam",
            "Zap Cannon",
            "Tri Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Charge Beam",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 233,
        "pokemon_name": "Porygon2"
    },
    {
        "charged_moves": [
            "Stomp",
            "Wild Charge",
            "Megahorn"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 234,
        "pokemon_name": "Stantler"
    },
    {
        "charged_moves": [],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [],
        "form": "Normal",
        "pokemon_id": 235,
        "pokemon_name": "Smeargle"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Rock Slide",
            "Low Sweep"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 236,
        "pokemon_name": "Tyrogue"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Gyro Ball",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 237,
        "pokemon_name": "Hitmontop"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Ice Punch",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Frost Breath"
        ],
        "fast_moves": [
            "Powder Snow",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 238,
        "pokemon_name": "Smoochum"
    },
    {
        "charged_moves": [
            "Thunder Punch",
            "Brick Break",
            "Discharge"
        ],
        "elite_charged_moves": [
            "Thunderbolt"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 239,
        "pokemon_name": "Elekid"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Fire Punch",
            "Flame Burst"
        ],
        "elite_charged_moves": [
            "Flamethrower"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 240,
        "pokemon_name": "Magby"
    },
    {
        "charged_moves": [
            "Stomp",
            "Body Slam",
            "Gyro Ball",
            "Thunderbolt",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 241,
        "pokemon_name": "Miltank"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hyper Beam",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 242,
        "pokemon_name": "Blissey"
    },
    {
        "charged_moves": [
            "Thunder",
            "Thunderbolt",
            "Wild Charge",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 243,
        "pokemon_name": "Raikou"
    },
    {
        "charged_moves": [
            "Thunder",
            "Thunderbolt",
            "Wild Charge",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Volt Switch"
        ],
        "form": "S",
        "pokemon_id": 243,
        "pokemon_name": "Raikou"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Fire Blast",
            "Overheat",
            "Iron Head",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 244,
        "pokemon_name": "Entei"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Fire Blast",
            "Overheat",
            "Iron Head",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Fire Fang"
        ],
        "form": "S",
        "pokemon_id": 244,
        "pokemon_name": "Entei"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Bubble Beam",
            "Water Pulse",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Hidden Power"
        ],
        "fast_moves": [
            "Extrasensory",
            "Snarl",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 245,
        "pokemon_name": "Suicune"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Bubble Beam",
            "Water Pulse",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Hidden Power"
        ],
        "fast_moves": [
            "Extrasensory",
            "Snarl",
            "Ice Fang"
        ],
        "form": "S",
        "pokemon_id": 245,
        "pokemon_name": "Suicune"
    },
    {
        "charged_moves": [
            "Stomp",
            "Crunch",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 246,
        "pokemon_name": "Larvitar"
    },
    {
        "charged_moves": [
            "Dig",
            "Crunch",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 247,
        "pokemon_name": "Pupitar"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Crunch",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Smack Down"
        ],
        "fast_moves": [
            "Bite",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 248,
        "pokemon_name": "Tyranitar"
    },
    {
        "charged_moves": [
            "Sky Attack",
            "Hydro Pump",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Aeroblast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 249,
        "pokemon_name": "Lugia"
    },
    {
        "charged_moves": [
            "Sky Attack",
            "Hydro Pump",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Aeroblast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Dragon Tail"
        ],
        "form": "S",
        "pokemon_id": 249,
        "pokemon_name": "Lugia"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Fire Blast",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Earthquake",
            "Sacred Fire"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Steel Wing",
            "Hidden Power",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Fire Blast",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Earthquake",
            "Sacred Fire"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Steel Wing",
            "Hidden Power",
            "Incinerate"
        ],
        "form": "S",
        "pokemon_id": 250,
        "pokemon_name": "Ho-Oh"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Psychic",
            "Dazzling Gleam",
            "Seed Bomb",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Magical Leaf"
        ],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 251,
        "pokemon_name": "Celebi"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Aerial Ace",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 252,
        "pokemon_name": "Treecko"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Aerial Ace",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 253,
        "pokemon_name": "Grovyle"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Aerial Ace",
            "Earthquake",
            "Dragon Claw"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 254,
        "pokemon_name": "Sceptile"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 255,
        "pokemon_name": "Torchic"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 256,
        "pokemon_name": "Combusken"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Overheat",
            "Brave Bird",
            "Blaze Kick"
        ],
        "elite_charged_moves": [
            "Blast Burn",
            "Stone Edge"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 257,
        "pokemon_name": "Blaziken"
    },
    {
        "charged_moves": [
            "Dig",
            "Sludge",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 258,
        "pokemon_name": "Mudkip"
    },
    {
        "charged_moves": [
            "Mud Bomb",
            "Sludge",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 259,
        "pokemon_name": "Marshtomp"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Sludge Wave",
            "Surf",
            "Muddy Water"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 260,
        "pokemon_name": "Swampert"
    },
    {
        "charged_moves": [
            "Crunch",
            "Dig",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 261,
        "pokemon_name": "Poochyena"
    },
    {
        "charged_moves": [
            "Crunch",
            "Play Rough",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Fire Fang",
            "Thunder Fang",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 262,
        "pokemon_name": "Mightyena"
    },
    {
        "charged_moves": [
            "Dig",
            "Body Slam",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Galarian",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "charged_moves": [
            "Dig",
            "Grass Knot",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 263,
        "pokemon_name": "Zigzagoon"
    },
    {
        "charged_moves": [
            "Dig",
            "Body Slam",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Lick"
        ],
        "form": "Galarian",
        "pokemon_id": 264,
        "pokemon_name": "Linoone"
    },
    {
        "charged_moves": [
            "Dig",
            "Grass Knot",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 264,
        "pokemon_name": "Linoone"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 265,
        "pokemon_name": "Wurmple"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 266,
        "pokemon_name": "Silcoon"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Air Cutter",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 267,
        "pokemon_name": "Beautifly"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 268,
        "pokemon_name": "Cascoon"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Sludge Bomb",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 269,
        "pokemon_name": "Dustox"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 270,
        "pokemon_name": "Lotad"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Ice Beam",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 271,
        "pokemon_name": "Lombre"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Solar Beam",
            "Ice Beam",
            "Energy Ball",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 272,
        "pokemon_name": "Ludicolo"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 273,
        "pokemon_name": "Seedot"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Grass Knot",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 274,
        "pokemon_name": "Nuzleaf"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "Hurricane",
            "Foul Play",
            "Leaf Tornado"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Bullet Seed"
        ],
        "fast_moves": [
            "Razor Leaf",
            "Feint Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 275,
        "pokemon_name": "Shiftry"
    },
    {
        "charged_moves": [
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 276,
        "pokemon_name": "Taillow"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 277,
        "pokemon_name": "Swellow"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Air Cutter",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 278,
        "pokemon_name": "Wingull"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Hurricane",
            "Blizzard",
            "Weather Ball Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 279,
        "pokemon_name": "Pelipper"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Disarming Voice",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 280,
        "pokemon_name": "Ralts"
    },
    {
        "charged_moves": [
            "Psychic",
            "Disarming Voice",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 281,
        "pokemon_name": "Kirlia"
    },
    {
        "charged_moves": [
            "Psychic",
            "Dazzling Gleam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [
            "Synchronoise"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 282,
        "pokemon_name": "Gardevoir"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Bubble Beam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 283,
        "pokemon_name": "Surskit"
    },
    {
        "charged_moves": [
            "Air Cutter",
            "Ominous Wind",
            "Silver Wind",
            "Bubble Beam",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Infestation",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 284,
        "pokemon_name": "Masquerain"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Grass Knot",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 285,
        "pokemon_name": "Shroomish"
    },
    {
        "charged_moves": [
            "Dynamic Punch",
            "Seed Bomb",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [
            "Grass Knot"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 286,
        "pokemon_name": "Breloom"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Night Slash",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Yawn"
        ],
        "form": "Normal",
        "pokemon_id": 287,
        "pokemon_name": "Slakoth"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Bulldoze",
            "Brick Break"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 288,
        "pokemon_name": "Vigoroth"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Play Rough",
            "Earthquake"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Yawn"
        ],
        "form": "Normal",
        "pokemon_id": 289,
        "pokemon_name": "Slaking"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Bug Buzz",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 290,
        "pokemon_name": "Nincada"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Bug Buzz",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 291,
        "pokemon_name": "Ninjask"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Aerial Ace",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Struggle Bug"
        ],
        "fast_moves": [
            "Bug Bite",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 292,
        "pokemon_name": "Shedinja"
    },
    {
        "charged_moves": [
            "Stomp",
            "Disarming Voice",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 293,
        "pokemon_name": "Whismur"
    },
    {
        "charged_moves": [
            "Stomp",
            "Disarming Voice",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 294,
        "pokemon_name": "Loudred"
    },
    {
        "charged_moves": [
            "Crunch",
            "Disarming Voice",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 295,
        "pokemon_name": "Exploud"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Low Sweep",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 296,
        "pokemon_name": "Makuhita"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Close Combat",
            "Dynamic Punch",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bullet Punch"
        ],
        "form": "Normal",
        "pokemon_id": 297,
        "pokemon_name": "Hariyama"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Ice Beam",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 298,
        "pokemon_name": "Azurill"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 299,
        "pokemon_name": "Nosepass"
    },
    {
        "charged_moves": [
            "Dig",
            "Disarming Voice",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 300,
        "pokemon_name": "Skitty"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Disarming Voice",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Zen Headbutt",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 301,
        "pokemon_name": "Delcatty"
    },
    {
        "charged_moves": [
            "Power Gem",
            "Foul Play",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Feint Attack"
        ],
        "form": "Costume_2020",
        "pokemon_id": 302,
        "pokemon_name": "Sableye"
    },
    {
        "charged_moves": [
            "Power Gem",
            "Foul Play",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 302,
        "pokemon_name": "Sableye"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Vice Grip",
            "Iron Head",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Astonish",
            "Ice Fang",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 303,
        "pokemon_name": "Mawile"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Rock Tomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 304,
        "pokemon_name": "Aron"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Rock Slide",
            "Heavy Slam",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 305,
        "pokemon_name": "Lairon"
    },
    {
        "charged_moves": [
            "Thunder",
            "Stone Edge",
            "Heavy Slam",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Iron Tail",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 306,
        "pokemon_name": "Aggron"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Psyshock",
            "Low Sweep"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 307,
        "pokemon_name": "Meditite"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Psychic",
            "Dynamic Punch",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 308,
        "pokemon_name": "Medicham"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Discharge",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 309,
        "pokemon_name": "Electrike"
    },
    {
        "charged_moves": [
            "Thunder",
            "Wild Charge",
            "Flame Burst",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Charge Beam",
            "Thunder Fang"
        ],
        "form": "Normal",
        "pokemon_id": 310,
        "pokemon_name": "Manectric"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Discharge",
            "Swift",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 311,
        "pokemon_name": "Plusle"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Discharge",
            "Swift",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 312,
        "pokemon_name": "Minun"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "Bug Buzz",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 313,
        "pokemon_name": "Volbeat"
    },
    {
        "charged_moves": [
            "Silver Wind",
            "Bug Buzz",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 314,
        "pokemon_name": "Illumise"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Sludge Bomb",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 315,
        "pokemon_name": "Roselia"
    },
    {
        "charged_moves": [
            "Sludge",
            "Gunk Shot",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 316,
        "pokemon_name": "Gulpin"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Sludge Bomb",
            "Ice Beam",
            "Acid Spray"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 317,
        "pokemon_name": "Swalot"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Crunch",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 318,
        "pokemon_name": "Carvanha"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Crunch",
            "Poison Fang"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 319,
        "pokemon_name": "Sharpedo"
    },
    {
        "charged_moves": [
            "Heavy Slam",
            "Water Pulse",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 320,
        "pokemon_name": "Wailmer"
    },
    {
        "charged_moves": [
            "Surf",
            "Blizzard",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 321,
        "pokemon_name": "Wailord"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Heat Wave",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 322,
        "pokemon_name": "Numel"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Overheat",
            "Solar Beam",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 323,
        "pokemon_name": "Camerupt"
    },
    {
        "charged_moves": [
            "Overheat",
            "Solar Beam",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 324,
        "pokemon_name": "Torkoal"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Shadow Ball",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 325,
        "pokemon_name": "Spoink"
    },
    {
        "charged_moves": [
            "Psychic",
            "Shadow Ball",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 326,
        "pokemon_name": "Grumpig"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Tomb",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Psycho Cut"
        ],
        "form": "Normal",
        "pokemon_id": 327,
        "pokemon_name": "Spinda"
    },
    {
        "charged_moves": [
            "Sand Tomb",
            "Dig",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 328,
        "pokemon_name": "Trapinch"
    },
    {
        "charged_moves": [
            "Sand Tomb",
            "Bulldoze",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 329,
        "pokemon_name": "Vibrava"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Dragon Claw",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Earth Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 330,
        "pokemon_name": "Flygon"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Brick Break",
            "Seed Bomb",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 331,
        "pokemon_name": "Cacnea"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Dynamic Punch",
            "Grass Knot",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 332,
        "pokemon_name": "Cacturne"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Aerial Ace",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 333,
        "pokemon_name": "Swablu"
    },
    {
        "charged_moves": [
            "Sky Attack",
            "Dazzling Gleam",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [
            "Moonblast"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 334,
        "pokemon_name": "Altaria"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Night Slash",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 335,
        "pokemon_name": "Zangoose"
    },
    {
        "charged_moves": [
            "Poison Fang",
            "Crunch",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 336,
        "pokemon_name": "Seviper"
    },
    {
        "charged_moves": [
            "Psychic",
            "Rock Slide",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 337,
        "pokemon_name": "Lunatone"
    },
    {
        "charged_moves": [
            "Psychic",
            "Rock Slide",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 338,
        "pokemon_name": "Solrock"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Ice Beam",
            "Mud Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 339,
        "pokemon_name": "Barboach"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Blizzard",
            "Mud Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 340,
        "pokemon_name": "Whiscash"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Bubble Beam",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 341,
        "pokemon_name": "Corphish"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Bubble Beam",
            "Night Slash",
            "Crabhammer"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 342,
        "pokemon_name": "Crawdaunt"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Psybeam",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 343,
        "pokemon_name": "Baltoy"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Psychic",
            "Earthquake",
            "Earth Power",
            "Ice Beam",
            "Shadow Ball",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Confusion",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 344,
        "pokemon_name": "Claydol"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Mirror Coat",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 345,
        "pokemon_name": "Lileep"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 346,
        "pokemon_name": "Cradily"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Aqua Jet",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 347,
        "pokemon_name": "Anorith"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Water Pulse",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 348,
        "pokemon_name": "Armaldo"
    },
    {
        "charged_moves": [
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 349,
        "pokemon_name": "Feebas"
    },
    {
        "charged_moves": [
            "Surf",
            "Blizzard",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 350,
        "pokemon_name": "Milotic"
    },
    {
        "charged_moves": [
            "Hurricane",
            "Energy Ball",
            "Weather Ball Rock",
            "Weather Ball Normal"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Thunder",
            "Weather Ball Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Tackle"
        ],
        "form": "Rainy",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Ice Beam",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Tackle"
        ],
        "form": "Snowy",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Solar Beam",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Tackle"
        ],
        "form": "Sunny",
        "pokemon_id": 351,
        "pokemon_name": "Castform"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Flamethrower",
            "Thunder",
            "Ice Beam",
            "Aerial Ace",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 352,
        "pokemon_name": "Kecleon"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Night Shade",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 353,
        "pokemon_name": "Shuppet"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dazzling Gleam",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 354,
        "pokemon_name": "Banette"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Night Shade",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 355,
        "pokemon_name": "Duskull"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Ice Punch",
            "Fire Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 356,
        "pokemon_name": "Dusclops"
    },
    {
        "charged_moves": [
            "Stomp",
            "Aerial Ace",
            "Leaf Blade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 357,
        "pokemon_name": "Tropius"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Shadow Ball",
            "Psyshock",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 358,
        "pokemon_name": "Chimecho"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Thunder",
            "Megahorn",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 359,
        "pokemon_name": "Absol"
    },
    {
        "charged_moves": [
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Splash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 360,
        "pokemon_name": "Wynaut"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Icy Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 361,
        "pokemon_name": "Snorunt"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Gyro Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 362,
        "pokemon_name": "Glalie"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Body Slam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 363,
        "pokemon_name": "Spheal"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Body Slam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 364,
        "pokemon_name": "Sealeo"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Earthquake",
            "Water Pulse"
        ],
        "elite_charged_moves": [
            "Icicle Spear"
        ],
        "elite_fast_moves": [
            "Powder Snow"
        ],
        "fast_moves": [
            "Waterfall",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 365,
        "pokemon_name": "Walrein"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Ice Beam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 366,
        "pokemon_name": "Clamperl"
    },
    {
        "charged_moves": [
            "Crunch",
            "Ice Beam",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 367,
        "pokemon_name": "Huntail"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Psychic",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 368,
        "pokemon_name": "Gorebyss"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aqua Tail",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 369,
        "pokemon_name": "Relicanth"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Water Pulse",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Splash"
        ],
        "form": "Normal",
        "pokemon_id": 370,
        "pokemon_name": "Luvdisc"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Twister",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 371,
        "pokemon_name": "Bagon"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Dragon Pulse",
            "Twister"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 372,
        "pokemon_name": "Shelgon"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Hydro Pump",
            "Draco Meteor"
        ],
        "elite_charged_moves": [
            "Outrage"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Fire Fang",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 373,
        "pokemon_name": "Salamence"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 374,
        "pokemon_name": "Beldum"
    },
    {
        "charged_moves": [
            "Psychic",
            "Gyro Ball",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 375,
        "pokemon_name": "Metang"
    },
    {
        "charged_moves": [
            "Psychic",
            "Flash Cannon",
            "Earthquake"
        ],
        "elite_charged_moves": [
            "Meteor Mash"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Punch",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 376,
        "pokemon_name": "Metagross"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Zap Cannon",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Earthquake"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Rock Smash",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 377,
        "pokemon_name": "Regirock"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Earthquake",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Thunder"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Rock Smash",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 378,
        "pokemon_name": "Regice"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Hyper Beam",
            "Focus Blast"
        ],
        "elite_charged_moves": [
            "Zap Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Rock Smash",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 379,
        "pokemon_name": "Registeel"
    },
    {
        "charged_moves": [
            "Psychic",
            "Outrage",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Zen Headbutt",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 380,
        "pokemon_name": "Latias"
    },
    {
        "charged_moves": [
            "Psychic",
            "Dragon Claw",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 381,
        "pokemon_name": "Latios"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Thunder",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 382,
        "pokemon_name": "Kyogre"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Fire Blast",
            "Solar Beam"
        ],
        "elite_charged_moves": [
            "Fire Punch"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 383,
        "pokemon_name": "Groudon"
    },
    {
        "charged_moves": [
            "Outrage",
            "Aerial Ace",
            "Ancient Power"
        ],
        "elite_charged_moves": [
            "Hurricane"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 384,
        "pokemon_name": "Rayquaza"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Psychic",
            "Doom Desire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 385,
        "pokemon_name": "Jirachi"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Zap Cannon",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Poison Jab"
        ],
        "form": "Attack",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Thunderbolt",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Counter"
        ],
        "form": "Defense",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Thunderbolt",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Psycho Boost",
            "Thunderbolt",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Speed",
        "pokemon_id": 386,
        "pokemon_name": "Deoxys"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 387,
        "pokemon_name": "Turtwig"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Solar Beam",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 388,
        "pokemon_name": "Grotle"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Solar Beam",
            "Earthquake",
            "Sand Tomb"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 389,
        "pokemon_name": "Torterra"
    },
    {
        "charged_moves": [
            "Flame Wheel",
            "Flamethrower",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 390,
        "pokemon_name": "Chimchar"
    },
    {
        "charged_moves": [
            "Flame Wheel",
            "Flamethrower",
            "Low Sweep"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 391,
        "pokemon_name": "Monferno"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Flamethrower",
            "Close Combat"
        ],
        "elite_charged_moves": [
            "Blast Burn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 392,
        "pokemon_name": "Infernape"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Drill Peck",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 393,
        "pokemon_name": "Piplup"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Hydro Pump",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 394,
        "pokemon_name": "Prinplup"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Flash Cannon",
            "Drill Peck"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 395,
        "pokemon_name": "Empoleon"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 396,
        "pokemon_name": "Starly"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 397,
        "pokemon_name": "Staravia"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Heat Wave",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 398,
        "pokemon_name": "Staraptor"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Crunch",
            "Grass Knot"
        ],
        "elite_charged_moves": [
            "Shadow Ball",
            "Thunderbolt",
            "Ice Beam",
            "Super Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 399,
        "pokemon_name": "Bidoof"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Hyper Beam",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 400,
        "pokemon_name": "Bibarel"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 401,
        "pokemon_name": "Kricketot"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "X Scissor",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 402,
        "pokemon_name": "Kricketune"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 403,
        "pokemon_name": "Shinx"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Wild Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 404,
        "pokemon_name": "Luxio"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Wild Charge",
            "Crunch"
        ],
        "elite_charged_moves": [
            "Psychic Fangs"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Snarl",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 405,
        "pokemon_name": "Luxray"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 406,
        "pokemon_name": "Budew"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Sludge Bomb",
            "Dazzling Gleam",
            "Grass Knot",
            "Leaf Storm"
        ],
        "elite_charged_moves": [
            "Weather Ball Fire"
        ],
        "elite_fast_moves": [
            "Bullet Seed"
        ],
        "fast_moves": [
            "Poison Jab",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 407,
        "pokemon_name": "Roserade"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Ancient Power",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 408,
        "pokemon_name": "Cranidos"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Outrage",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 409,
        "pokemon_name": "Rampardos"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Ancient Power",
            "Heavy Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 410,
        "pokemon_name": "Shieldon"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Flamethrower",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 411,
        "pokemon_name": "Bastiodon"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Plant",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Sandy",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bug Bite"
        ],
        "form": "Trash",
        "pokemon_id": 412,
        "pokemon_name": "Burmy"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Energy Ball",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bug Bite"
        ],
        "form": "Plant",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Bulldoze",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bug Bite"
        ],
        "form": "Sandy",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Iron Head",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Bug Bite"
        ],
        "form": "Trash",
        "pokemon_id": 413,
        "pokemon_name": "Wormadam"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Aerial Ace",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 414,
        "pokemon_name": "Mothim"
    },
    {
        "charged_moves": [
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 415,
        "pokemon_name": "Combee"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Power Gem",
            "X Scissor",
            "Fell Stinger",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting",
            "Fury Cutter",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 416,
        "pokemon_name": "Vespiquen"
    },
    {
        "charged_moves": [
            "Thunder",
            "Thunderbolt",
            "Thunder Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Volt Switch"
        ],
        "form": "Normal",
        "pokemon_id": 417,
        "pokemon_name": "Pachirisu"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Water Pulse",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 418,
        "pokemon_name": "Buizel"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Hydro Pump",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 419,
        "pokemon_name": "Floatzel"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 420,
        "pokemon_name": "Cherubi"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Hyper Beam",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Overcast",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Hyper Beam",
            "Solar Beam",
            "Weather Ball Fire"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Sunny",
        "pokemon_id": 421,
        "pokemon_name": "Cherrim"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "East_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "West_sea",
        "pokemon_id": 422,
        "pokemon_name": "Shellos"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Earth Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "East_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Earth Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Hidden Power"
        ],
        "form": "West_sea",
        "pokemon_id": 423,
        "pokemon_name": "Gastrodon"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Hyper Beam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 424,
        "pokemon_name": "Ambipom"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Icy Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 425,
        "pokemon_name": "Drifloon"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Icy Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 426,
        "pokemon_name": "Drifblim"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 427,
        "pokemon_name": "Buneary"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Hyper Beam",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 428,
        "pokemon_name": "Lopunny"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 429,
        "pokemon_name": "Mismagius"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Psychic",
            "Dark Pulse",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 430,
        "pokemon_name": "Honchkrow"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Thunderbolt",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 431,
        "pokemon_name": "Glameow"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Thunder",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 432,
        "pokemon_name": "Purugly"
    },
    {
        "charged_moves": [
            "Wrap",
            "Shadow Ball",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 433,
        "pokemon_name": "Chingling"
    },
    {
        "charged_moves": [
            "Crunch",
            "Flamethrower",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 434,
        "pokemon_name": "Stunky"
    },
    {
        "charged_moves": [
            "Crunch",
            "Flamethrower",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 435,
        "pokemon_name": "Skuntank"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Psyshock",
            "Heavy Slam",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 436,
        "pokemon_name": "Bronzor"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Psychic",
            "Heavy Slam",
            "Bulldoze",
            "Psyshock",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 437,
        "pokemon_name": "Bronzong"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Earthquake",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 438,
        "pokemon_name": "Bonsly"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 439,
        "pokemon_name": "Mime Jr."
    },
    {
        "charged_moves": [
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 440,
        "pokemon_name": "Happiny"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Sky Attack",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 441,
        "pokemon_name": "Chatot"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Ominous Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 442,
        "pokemon_name": "Spiritomb"
    },
    {
        "charged_moves": [
            "Dig",
            "Twister",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 443,
        "pokemon_name": "Gible"
    },
    {
        "charged_moves": [
            "Dig",
            "Twister",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 444,
        "pokemon_name": "Gabite"
    },
    {
        "charged_moves": [
            "Outrage",
            "Earthquake",
            "Fire Blast",
            "Sand Tomb"
        ],
        "elite_charged_moves": [
            "Earth Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 445,
        "pokemon_name": "Garchomp"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Body Slam",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Lick"
        ],
        "form": "Normal",
        "pokemon_id": 446,
        "pokemon_name": "Munchlax"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Low Sweep",
            "Cross Chop"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 447,
        "pokemon_name": "Riolu"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Shadow Ball",
            "Close Combat",
            "Power Up Punch",
            "Aura Sphere"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bullet Punch"
        ],
        "form": "Normal",
        "pokemon_id": 448,
        "pokemon_name": "Lucario"
    },
    {
        "charged_moves": [
            "Dig",
            "Rock Tomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 449,
        "pokemon_name": "Hippopotas"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Stone Edge",
            "Body Slam",
            "Earth Power",
            "Weather Ball Rock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Bite",
            "Thunder Fang",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 450,
        "pokemon_name": "Hippowdon"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Aqua Tail",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 451,
        "pokemon_name": "Skorupi"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Tail",
            "Sludge Bomb",
            "Fell Stinger"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Infestation",
            "Bite",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 452,
        "pokemon_name": "Drapion"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Low Sweep",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Sting",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 453,
        "pokemon_name": "Croagunk"
    },
    {
        "charged_moves": [
            "Dynamic Punch",
            "Mud Bomb",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 454,
        "pokemon_name": "Toxicroak"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Energy Ball",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 455,
        "pokemon_name": "Carnivine"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Ice Beam",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 456,
        "pokemon_name": "Finneon"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Blizzard",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 457,
        "pokemon_name": "Lumineon"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Ice Beam",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 458,
        "pokemon_name": "Mantyke"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Energy Ball",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Ice Shard"
        ],
        "form": "Normal",
        "pokemon_id": 459,
        "pokemon_name": "Snover"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Energy Ball",
            "Outrage",
            "Weather Ball Ice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 460,
        "pokemon_name": "Abomasnow"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Focus Blast",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Feint Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 461,
        "pokemon_name": "Weavile"
    },
    {
        "charged_moves": [
            "Zap Cannon",
            "Wild Charge",
            "Flash Cannon",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 462,
        "pokemon_name": "Magnezone"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Earthquake",
            "Solar Beam",
            "Shadow Ball"
        ],
        "elite_charged_moves": [
            "Body Slam"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 463,
        "pokemon_name": "Lickilicky"
    },
    {
        "charged_moves": [
            "Surf",
            "Earthquake",
            "Stone Edge",
            "Skull Bash",
            "Super Power"
        ],
        "elite_charged_moves": [
            "Rock Wrecker"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 464,
        "pokemon_name": "Rhyperior"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Sludge Bomb",
            "Solar Beam",
            "Power Whip",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 465,
        "pokemon_name": "Tangrowth"
    },
    {
        "charged_moves": [
            "Thunder Punch",
            "Wild Charge",
            "Thunder",
            "Ice Punch"
        ],
        "elite_charged_moves": [
            "Flamethrower"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 466,
        "pokemon_name": "Electivire"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Fire Punch",
            "Fire Blast",
            "Psychic"
        ],
        "elite_charged_moves": [
            "Thunderbolt"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Karate Chop"
        ],
        "form": "Normal",
        "pokemon_id": 467,
        "pokemon_name": "Magmortar"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Dazzling Gleam",
            "Aerial Ace",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Hidden Power",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 468,
        "pokemon_name": "Togekiss"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Aerial Ace",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 469,
        "pokemon_name": "Yanmega"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Leaf Blade",
            "Energy Ball"
        ],
        "elite_charged_moves": [
            "Last Resort"
        ],
        "elite_fast_moves": [
            "Bullet Seed"
        ],
        "fast_moves": [
            "Razor Leaf",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 470,
        "pokemon_name": "Leafeon"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Icy Wind",
            "Ice Beam"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Water Pulse"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 471,
        "pokemon_name": "Glaceon"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Aerial Ace",
            "Night Slash",
            "Sand Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 472,
        "pokemon_name": "Gliscor"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Ancient Power"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Powder Snow"
        ],
        "form": "Normal",
        "pokemon_id": 473,
        "pokemon_name": "Mamoswine"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Hyper Beam",
            "Zap Cannon",
            "Blizzard"
        ],
        "elite_charged_moves": [
            "Tri Attack"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Charge Beam",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 474,
        "pokemon_name": "Porygon-Z"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Psychic",
            "Leaf Blade"
        ],
        "elite_charged_moves": [
            "Synchronoise"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Low Kick",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 475,
        "pokemon_name": "Gallade"
    },
    {
        "charged_moves": [
            "Magnet Bomb",
            "Rock Slide",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 476,
        "pokemon_name": "Probopass"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Psychic",
            "Dark Pulse"
        ],
        "elite_charged_moves": [
            "Shadow Ball"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 477,
        "pokemon_name": "Dusknoir"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Crunch",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 478,
        "pokemon_name": "Froslass"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Air Slash"
        ],
        "form": "Fan",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Frost",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Overheat",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Heat",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Mow",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Ominous Wind",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Thunderbolt",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Wash",
        "pokemon_id": 479,
        "pokemon_name": "Rotom"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Swift",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 480,
        "pokemon_name": "Uxie"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Swift",
            "Blizzard"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 481,
        "pokemon_name": "Mesprit"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Swift",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Extrasensory"
        ],
        "form": "Normal",
        "pokemon_id": 482,
        "pokemon_name": "Azelf"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Iron Head",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 483,
        "pokemon_name": "Dialga"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Fire Blast",
            "Hydro Pump",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 484,
        "pokemon_name": "Palkia"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Iron Head",
            "Stone Edge",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 485,
        "pokemon_name": "Heatran"
    },
    {
        "charged_moves": [
            "Giga Impact",
            "Focus Blast",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 486,
        "pokemon_name": "Regigigas"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Ancient Power",
            "Shadow Sneak"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Shadow Claw"
        ],
        "form": "Altered",
        "pokemon_id": 487,
        "pokemon_name": "Giratina"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Ominous Wind",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Shadow Claw"
        ],
        "form": "Origin",
        "pokemon_id": 487,
        "pokemon_name": "Giratina"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Moonblast",
            "Futuresight"
        ],
        "elite_charged_moves": [
            "Grass Knot"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 488,
        "pokemon_name": "Cresselia"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Water Pulse",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 489,
        "pokemon_name": "Phione"
    },
    {
        "charged_moves": [
            "Bubble Beam",
            "Psychic",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 490,
        "pokemon_name": "Manaphy"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Shadow Ball",
            "Dark Pulse"
        ],
        "elite_charged_moves": [
            "Sludge Bomb"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 491,
        "pokemon_name": "Darkrai"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Land",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Sky",
        "pokemon_id": 492,
        "pokemon_name": "Shaymin"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Bug",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Dark",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Dragon",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Electric",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Fairy",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Fighting",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Fire",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Flying",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Ghost",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Grass",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Ground",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Ice",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Poison",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Psychic",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Rock",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Steel",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Hyper Beam",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Shadow Claw"
        ],
        "form": "Water",
        "pokemon_id": 493,
        "pokemon_name": "Arceus"
    },
    {
        "charged_moves": [
            "Overheat",
            "Focus Blast",
            "Psychic",
            "V Create"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 494,
        "pokemon_name": "Victini"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 495,
        "pokemon_name": "Snivy"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Leaf Tornado",
            "Wrap"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 496,
        "pokemon_name": "Servine"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Leaf Tornado",
            "Aerial Ace"
        ],
        "elite_charged_moves": [
            "Frenzy Plant"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Iron Tail",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 497,
        "pokemon_name": "Serperior"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 498,
        "pokemon_name": "Tepig"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 499,
        "pokemon_name": "Pignite"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Rock Slide",
            "Focus Blast",
            "Flame Charge"
        ],
        "elite_charged_moves": [
            "Blast Burn"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 500,
        "pokemon_name": "Emboar"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Water Pulse",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 501,
        "pokemon_name": "Oshawott"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Water Pulse",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 502,
        "pokemon_name": "Dewott"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Megahorn",
            "Razor Shell"
        ],
        "elite_charged_moves": [
            "Hydro Cannon"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 503,
        "pokemon_name": "Samurott"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Fang",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 504,
        "pokemon_name": "Patrat"
    },
    {
        "charged_moves": [
            "Crunch",
            "Hyper Fang",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 505,
        "pokemon_name": "Watchog"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Rock Tomb",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 506,
        "pokemon_name": "Lillipup"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Play Rough",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 507,
        "pokemon_name": "Herdier"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Play Rough",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Take Down",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 508,
        "pokemon_name": "Stoutland"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Play Rough",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 509,
        "pokemon_name": "Purrloin"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Play Rough",
            "Dark Pulse",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 510,
        "pokemon_name": "Liepard"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 511,
        "pokemon_name": "Pansage"
    },
    {
        "charged_moves": [
            "Solar Beam",
            "Grass Knot",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 512,
        "pokemon_name": "Simisage"
    },
    {
        "charged_moves": [
            "Flame Burst",
            "Flame Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 513,
        "pokemon_name": "Pansear"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Fire Blast",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 514,
        "pokemon_name": "Simisear"
    },
    {
        "charged_moves": [
            "Surf",
            "Water Pulse",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 515,
        "pokemon_name": "Panpour"
    },
    {
        "charged_moves": [
            "Surf",
            "Hydro Pump",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 516,
        "pokemon_name": "Simipour"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Dazzling Gleam",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 517,
        "pokemon_name": "Munna"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Dazzling Gleam",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 518,
        "pokemon_name": "Musharna"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Aerial Ace",
            "Air Cutter"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 519,
        "pokemon_name": "Pidove"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Aerial Ace",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 520,
        "pokemon_name": "Tranquill"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Hyper Beam",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 521,
        "pokemon_name": "Unfezant"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Discharge",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 522,
        "pokemon_name": "Blitzle"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Discharge",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 523,
        "pokemon_name": "Zebstrika"
    },
    {
        "charged_moves": [
            "Bulldoze",
            "Rock Blast",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 524,
        "pokemon_name": "Roggenrola"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Bulldoze",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 525,
        "pokemon_name": "Boldore"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Solar Beam",
            "Super Power",
            "Heavy Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 526,
        "pokemon_name": "Gigalith"
    },
    {
        "charged_moves": [
            "Air Cutter",
            "Aerial Ace",
            "Psyshock"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 527,
        "pokemon_name": "Woobat"
    },
    {
        "charged_moves": [
            "Psychic",
            "Aerial Ace",
            "Futuresight"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 528,
        "pokemon_name": "Swoobat"
    },
    {
        "charged_moves": [
            "Rock Tomb",
            "Dig",
            "Drill Run"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 529,
        "pokemon_name": "Drilbur"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Earthquake",
            "Drill Run",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Mud Slap",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 530,
        "pokemon_name": "Excadrill"
    },
    {
        "charged_moves": [
            "Disarming Voice",
            "Dazzling Gleam",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 531,
        "pokemon_name": "Audino"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Brick Break",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 532,
        "pokemon_name": "Timburr"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Brick Break",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 533,
        "pokemon_name": "Gurdurr"
    },
    {
        "charged_moves": [
            "Dynamic Punch",
            "Focus Blast",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 534,
        "pokemon_name": "Conkeldurr"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Mud Bomb",
            "Sludge Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 535,
        "pokemon_name": "Tympole"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Earth Power",
            "Sludge Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 536,
        "pokemon_name": "Palpitoad"
    },
    {
        "charged_moves": [
            "Muddy Water",
            "Earth Power",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 537,
        "pokemon_name": "Seismitoad"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Low Sweep",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 538,
        "pokemon_name": "Throh"
    },
    {
        "charged_moves": [
            "Focus Blast",
            "Low Sweep",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 539,
        "pokemon_name": "Sawk"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 540,
        "pokemon_name": "Sewaddle"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Bug Buzz",
            "Silver Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 541,
        "pokemon_name": "Swadloon"
    },
    {
        "charged_moves": [
            "Leaf Blade",
            "X Scissor",
            "Silver Wind",
            "Leaf Storm"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 542,
        "pokemon_name": "Leavanny"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "Sludge Bomb",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 543,
        "pokemon_name": "Venipede"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "Sludge Bomb",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Sting"
        ],
        "form": "Normal",
        "pokemon_id": 544,
        "pokemon_name": "Whirlipede"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Sludge Bomb",
            "Gyro Ball",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 545,
        "pokemon_name": "Scolipede"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 546,
        "pokemon_name": "Cottonee"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Hurricane",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 547,
        "pokemon_name": "Whimsicott"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 548,
        "pokemon_name": "Petilil"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Hyper Beam",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 549,
        "pokemon_name": "Lilligant"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Blue_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Aqua Tail",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Water Gun"
        ],
        "form": "Red_striped",
        "pokemon_id": 550,
        "pokemon_name": "Basculin"
    },
    {
        "charged_moves": [
            "Dig",
            "Crunch",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 551,
        "pokemon_name": "Sandile"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Crunch",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 552,
        "pokemon_name": "Krokorok"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Crunch",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 553,
        "pokemon_name": "Krookodile"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ice Fang"
        ],
        "form": "Galarian",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
    },
    {
        "charged_moves": [
            "Fire Punch",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 554,
        "pokemon_name": "Darumaka"
    },
    {
        "charged_moves": [
            "Overheat",
            "Avalanche",
            "Super Power",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ice Fang"
        ],
        "form": "Galarian_standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Overheat",
            "Avalanche",
            "Super Power",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ice Fang"
        ],
        "form": "Galarian_zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Overheat",
            "Focus Blast",
            "Psychic",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fire Fang",
            "Incinerate"
        ],
        "form": "Standard",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Overheat",
            "Focus Blast",
            "Psychic",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fire Fang",
            "Incinerate"
        ],
        "form": "Zen",
        "pokemon_id": 555,
        "pokemon_name": "Darmanitan"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Petal Blizzard",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 556,
        "pokemon_name": "Maractus"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "X Scissor",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Cut",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 557,
        "pokemon_name": "Dwebble"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "X Scissor",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fury Cutter",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 558,
        "pokemon_name": "Crustle"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Brick Break",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 559,
        "pokemon_name": "Scraggy"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Power Up Punch",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 560,
        "pokemon_name": "Scrafty"
    },
    {
        "charged_moves": [
            "Air Cutter",
            "Psybeam",
            "Ancient Power",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 561,
        "pokemon_name": "Sigilyph"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish"
        ],
        "form": "Galarian",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 562,
        "pokemon_name": "Yamask"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Zen Headbutt",
            "Shadow Claw"
        ],
        "form": "Normal",
        "pokemon_id": 563,
        "pokemon_name": "Cofagrigus"
    },
    {
        "charged_moves": [
            "Surf",
            "Ancient Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 564,
        "pokemon_name": "Tirtouga"
    },
    {
        "charged_moves": [
            "Surf",
            "Ancient Power",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 565,
        "pokemon_name": "Carracosta"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Ancient Power",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 566,
        "pokemon_name": "Archen"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Ancient Power",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 567,
        "pokemon_name": "Archeops"
    },
    {
        "charged_moves": [
            "Gunk Shot",
            "Seed Bomb",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 568,
        "pokemon_name": "Trubbish"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Seed Bomb",
            "Gunk Shot",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Infestation",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 569,
        "pokemon_name": "Garbodor"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Aerial Ace",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 570,
        "pokemon_name": "Zorua"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Sludge Bomb",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 571,
        "pokemon_name": "Zoroark"
    },
    {
        "charged_moves": [
            "Swift",
            "Thunderbolt",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 572,
        "pokemon_name": "Minccino"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Thunderbolt",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 573,
        "pokemon_name": "Cinccino"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psyshock",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 574,
        "pokemon_name": "Gothita"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Futuresight",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 575,
        "pokemon_name": "Gothorita"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Futuresight",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 576,
        "pokemon_name": "Gothitelle"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Night Shade",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 577,
        "pokemon_name": "Solosis"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Night Shade",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 578,
        "pokemon_name": "Duosion"
    },
    {
        "charged_moves": [
            "Futuresight",
            "Shadow Ball",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hidden Power",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 579,
        "pokemon_name": "Reuniclus"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Bubble Beam",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 580,
        "pokemon_name": "Ducklett"
    },
    {
        "charged_moves": [
            "Ice Beam",
            "Bubble Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 581,
        "pokemon_name": "Swanna"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Ice Beam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 582,
        "pokemon_name": "Vanillite"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Ice Beam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 583,
        "pokemon_name": "Vanillish"
    },
    {
        "charged_moves": [
            "Blizzard",
            "Flash Cannon",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Frost Breath",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 584,
        "pokemon_name": "Vanilluxe"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Autumn",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Spring",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Summer",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Seed Bomb",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Winter",
        "pokemon_id": 585,
        "pokemon_name": "Deerling"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Autumn",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Spring",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Summer",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Solar Beam",
            "Wild Charge",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Take Down"
        ],
        "form": "Winter",
        "pokemon_id": 586,
        "pokemon_name": "Sawsbuck"
    },
    {
        "charged_moves": [
            "Discharge",
            "Aerial Ace",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 587,
        "pokemon_name": "Emolga"
    },
    {
        "charged_moves": [
            "Signal Beam",
            "X Scissor",
            "Drill Run",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 588,
        "pokemon_name": "Karrablast"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Acid Spray",
            "Drill Run",
            "Aerial Ace"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 589,
        "pokemon_name": "Escavalier"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Body Slam",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 590,
        "pokemon_name": "Foongus"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Sludge Bomb",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Feint Attack"
        ],
        "form": "Normal",
        "pokemon_id": 591,
        "pokemon_name": "Amoonguss"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Ice Beam",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Female",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
    },
    {
        "charged_moves": [
            "Night Shade",
            "Ice Beam",
            "Ominous Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 592,
        "pokemon_name": "Frillish"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Ice Beam",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Female",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Ice Beam",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bubble",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 593,
        "pokemon_name": "Jellicent"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 594,
        "pokemon_name": "Alomomola"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Bug Buzz",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charge Beam",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 595,
        "pokemon_name": "Joltik"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Bug Buzz",
            "Discharge",
            "Energy Ball",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 596,
        "pokemon_name": "Galvantula"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Flash Cannon",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 597,
        "pokemon_name": "Ferroseed"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Flash Cannon",
            "Acid Spray",
            "Thunder",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 598,
        "pokemon_name": "Ferrothorn"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Discharge",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 599,
        "pokemon_name": "Klink"
    },
    {
        "charged_moves": [
            "Vice Grip",
            "Thunderbolt",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 600,
        "pokemon_name": "Klang"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Flash Cannon",
            "Zap Cannon",
            "Mirror Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 601,
        "pokemon_name": "Klinklang"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 602,
        "pokemon_name": "Tynamo"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunderbolt",
            "Discharge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 603,
        "pokemon_name": "Eelektrik"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunderbolt",
            "Acid Spray",
            "Dragon Claw"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark"
        ],
        "form": "Normal",
        "pokemon_id": 604,
        "pokemon_name": "Eelektross"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 605,
        "pokemon_name": "Elgyem"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 606,
        "pokemon_name": "Beheeyem"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flame Burst",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 607,
        "pokemon_name": "Litwick"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Flame Burst",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 608,
        "pokemon_name": "Lampent"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Shadow Ball",
            "Overheat",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Fire Spin",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 609,
        "pokemon_name": "Chandelure"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Aqua Tail",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 610,
        "pokemon_name": "Axew"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Aqua Tail",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Iron Tail"
        ],
        "form": "Normal",
        "pokemon_id": 611,
        "pokemon_name": "Fraxure"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Surf",
            "Night Slash",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 612,
        "pokemon_name": "Haxorus"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Icy Wind",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Charm"
        ],
        "form": "Winter_2020",
        "pokemon_id": 613,
        "pokemon_name": "Cubchoo"
    },
    {
        "charged_moves": [
            "Ice Punch",
            "Surf",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 614,
        "pokemon_name": "Beartic"
    },
    {
        "charged_moves": [
            "Aurora Beam",
            "Night Slash",
            "Solar Beam",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ice Shard",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 615,
        "pokemon_name": "Cryogonal"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Body Slam",
            "Signal Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 616,
        "pokemon_name": "Shelmet"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Acid Spray",
            "Signal Beam",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Infestation"
        ],
        "form": "Normal",
        "pokemon_id": 617,
        "pokemon_name": "Accelgor"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Flash Cannon",
            "Muddy Water",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Metal Claw"
        ],
        "form": "Galarian",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk"
    },
    {
        "charged_moves": [
            "Mud Bomb",
            "Discharge",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 618,
        "pokemon_name": "Stunfisk"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Low Sweep",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Pound"
        ],
        "form": "Normal",
        "pokemon_id": 619,
        "pokemon_name": "Mienfoo"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Grass Knot",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 620,
        "pokemon_name": "Mienshao"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Night Slash",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 621,
        "pokemon_name": "Druddigon"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Brick Break",
            "Night Shade"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 622,
        "pokemon_name": "Golett"
    },
    {
        "charged_moves": [
            "Shadow Punch",
            "Dynamic Punch",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 623,
        "pokemon_name": "Golurk"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Iron Head",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 624,
        "pokemon_name": "Pawniard"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Iron Head",
            "X Scissor",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 625,
        "pokemon_name": "Bisharp"
    },
    {
        "charged_moves": [
            "Megahorn",
            "Stomp",
            "Skull Bash",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 626,
        "pokemon_name": "Bouffalant"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Brave Bird",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Wing Attack"
        ],
        "form": "Normal",
        "pokemon_id": 627,
        "pokemon_name": "Rufflet"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Brave Bird",
            "Rock Slide",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 628,
        "pokemon_name": "Braviary"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Brave Bird",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 629,
        "pokemon_name": "Vullaby"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Aerial Ace",
            "Foul Play",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 630,
        "pokemon_name": "Mandibuzz"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Thunder Punch",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Lick",
            "Fire Spin"
        ],
        "form": "Normal",
        "pokemon_id": 631,
        "pokemon_name": "Heatmor"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Iron Head",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 632,
        "pokemon_name": "Durant"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Crunch",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 633,
        "pokemon_name": "Deino"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Dark Pulse",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 634,
        "pokemon_name": "Zweilous"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Dark Pulse",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 635,
        "pokemon_name": "Hydreigon"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Bug Buzz",
            "Flame Wheel"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Ember",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 636,
        "pokemon_name": "Larvesta"
    },
    {
        "charged_moves": [
            "Overheat",
            "Bug Buzz",
            "Solar Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Spin",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 637,
        "pokemon_name": "Volcarona"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Iron Head",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Sacred Sword"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 638,
        "pokemon_name": "Cobalion"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Earthquake",
            "Rock Slide"
        ],
        "elite_charged_moves": [
            "Sacred Sword"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 639,
        "pokemon_name": "Terrakion"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Leaf Blade",
            "Stone Edge"
        ],
        "elite_charged_moves": [
            "Sacred Sword"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 640,
        "pokemon_name": "Virizion"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Dark Pulse",
            "Hyper Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Air Slash"
        ],
        "form": "Incarnate",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Psychic",
            "Focus Blast",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Gust"
        ],
        "form": "Therian",
        "pokemon_id": 641,
        "pokemon_name": "Tornadus"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunder",
            "Brick Break",
            "Thunder Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Thunder Shock"
        ],
        "form": "Incarnate",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus"
    },
    {
        "charged_moves": [
            "Sludge Wave",
            "Thunder",
            "Focus Blast",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Volt Switch"
        ],
        "form": "Therian",
        "pokemon_id": 642,
        "pokemon_name": "Thundurus"
    },
    {
        "charged_moves": [
            "Crunch",
            "Overheat",
            "Draco Meteor",
            "Stone Edge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 643,
        "pokemon_name": "Reshiram"
    },
    {
        "charged_moves": [
            "Outrage",
            "Wild Charge",
            "Flash Cannon",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 644,
        "pokemon_name": "Zekrom"
    },
    {
        "charged_moves": [
            "Earth Power",
            "Outrage",
            "Rock Slide",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Rock Throw"
        ],
        "form": "Incarnate",
        "pokemon_id": 645,
        "pokemon_name": "Landorus"
    },
    {
        "charged_moves": [
            "Earthquake",
            "Bulldoze",
            "Stone Edge",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Extrasensory"
        ],
        "form": "Therian",
        "pokemon_id": 645,
        "pokemon_name": "Landorus"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Blizzard",
            "Stone Edge",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Shadow Claw"
        ],
        "form": "Black",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Blizzard",
            "Draco Meteor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Blizzard",
            "Ancient Power",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Steel Wing"
        ],
        "form": "White",
        "pokemon_id": 646,
        "pokemon_name": "Kyurem"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Close Combat",
            "Hydro Pump",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Low Kick"
        ],
        "form": "Ordinary",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Close Combat",
            "Hydro Pump",
            "X Scissor"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Low Kick"
        ],
        "form": "Resolute",
        "pokemon_id": 647,
        "pokemon_name": "Keldeo"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Thunderbolt",
            "Dazzling Gleam",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Confusion"
        ],
        "form": "Aria",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Fire Punch",
            "Ice Punch",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Low Kick"
        ],
        "form": "Pirouette",
        "pokemon_id": 648,
        "pokemon_name": "Meloetta"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Burn",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Ice Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Chill",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Douse",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "X Scissor",
            "Magnet Bomb",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Fury Cutter"
        ],
        "form": "Shock",
        "pokemon_id": 649,
        "pokemon_name": "Genesect"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Seed Bomb",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 650,
        "pokemon_name": "Chespin"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Energy Ball",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 651,
        "pokemon_name": "Quilladin"
    },
    {
        "charged_moves": [
            "Gyro Ball",
            "Energy Ball",
            "Super Power",
            "Solar Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Vine Whip",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 652,
        "pokemon_name": "Chesnaught"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Flamethrower",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 653,
        "pokemon_name": "Fennekin"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Flamethrower",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 654,
        "pokemon_name": "Braixen"
    },
    {
        "charged_moves": [
            "Psychic",
            "Flamethrower",
            "Flame Charge",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Fire Spin",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 655,
        "pokemon_name": "Delphox"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Aerial Ace",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 656,
        "pokemon_name": "Froakie"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Aerial Ace",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 657,
        "pokemon_name": "Frogadier"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Aerial Ace",
            "Surf",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Feint Attack",
            "Bubble"
        ],
        "form": "Normal",
        "pokemon_id": 658,
        "pokemon_name": "Greninja"
    },
    {
        "charged_moves": [
            "Dig",
            "Bulldoze",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 659,
        "pokemon_name": "Bunnelby"
    },
    {
        "charged_moves": [
            "Dig",
            "Hyper Beam",
            "Earthquake",
            "Fire Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Shot",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 660,
        "pokemon_name": "Diggersby"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Heat Wave",
            "Swift"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 661,
        "pokemon_name": "Fletchling"
    },
    {
        "charged_moves": [
            "Aerial Ace",
            "Heat Wave",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Ember",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 662,
        "pokemon_name": "Fletchinder"
    },
    {
        "charged_moves": [
            "Brave Bird",
            "Fire Blast",
            "Flame Charge",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [
            "Incinerate"
        ],
        "fast_moves": [
            "Peck",
            "Fire Spin",
            "Steel Wing"
        ],
        "form": "Normal",
        "pokemon_id": 663,
        "pokemon_name": "Talonflame"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 664,
        "pokemon_name": "Scatterbug"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 665,
        "pokemon_name": "Spewpa"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Aerial Ace",
            "Energy Ball",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Gust",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 666,
        "pokemon_name": "Vivillon"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 667,
        "pokemon_name": "Litleo"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Solar Beam",
            "Dark Pulse",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Take Down"
        ],
        "form": "Female",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Solar Beam",
            "Dark Pulse",
            "Overheat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Fire Fang",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 668,
        "pokemon_name": "Pyroar"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Blue",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Orange",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Red",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "White",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Yellow",
        "pokemon_id": 669,
        "pokemon_name": "Flabebe"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Blue",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Orange",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Red",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "White",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Petal Blizzard",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle"
        ],
        "form": "Yellow",
        "pokemon_id": 670,
        "pokemon_name": "Floette"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Blue",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Orange",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Red",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "White",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Petal Blizzard",
            "Psychic",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Yellow",
        "pokemon_id": 671,
        "pokemon_name": "Florges"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Rock Slide",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 672,
        "pokemon_name": "Skiddo"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Rock Slide",
            "Leaf Blade",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Zen Headbutt",
            "Rock Smash",
            "Vine Whip"
        ],
        "form": "Normal",
        "pokemon_id": 673,
        "pokemon_name": "Gogoat"
    },
    {
        "charged_moves": [
            "Low Sweep",
            "Crunch",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 674,
        "pokemon_name": "Pancham"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Night Slash",
            "Iron Head",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Low Kick",
            "Snarl",
            "Bullet Punch"
        ],
        "form": "Normal",
        "pokemon_id": 675,
        "pokemon_name": "Pangoro"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Dandy",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Debutante",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Diamond",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Heart",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Kabuki",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "La_reine",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Matron",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Natural",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Pharaoh",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Surf",
            "Dark Pulse",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite",
            "Sucker Punch"
        ],
        "form": "Star",
        "pokemon_id": 676,
        "pokemon_name": "Furfrou"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Energy Ball",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Scratch"
        ],
        "form": "Normal",
        "pokemon_id": 677,
        "pokemon_name": "Espurr"
    },
    {
        "charged_moves": [
            "Psychic",
            "Energy Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm"
        ],
        "form": "Female",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic"
    },
    {
        "charged_moves": [
            "Psychic",
            "Energy Ball",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 678,
        "pokemon_name": "Meowstic"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 679,
        "pokemon_name": "Honedge"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Gyro Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 680,
        "pokemon_name": "Doublade"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Gyro Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Psycho Cut",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 681,
        "pokemon_name": "Aegislash"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 682,
        "pokemon_name": "Spritzee"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Thunderbolt",
            "Psychic",
            "Draining Kiss"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Charge Beam"
        ],
        "form": "Normal",
        "pokemon_id": 683,
        "pokemon_name": "Aromatisse"
    },
    {
        "charged_moves": [
            "Draining Kiss",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 684,
        "pokemon_name": "Swirlix"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Energy Ball",
            "Flamethrower",
            "Draining Kiss"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 685,
        "pokemon_name": "Slurpuff"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 686,
        "pokemon_name": "Inkay"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Foul Play",
            "Super Power",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Psycho Cut"
        ],
        "form": "Normal",
        "pokemon_id": 687,
        "pokemon_name": "Malamar"
    },
    {
        "charged_moves": [
            "Ancient Power",
            "Cross Chop",
            "Dig"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 688,
        "pokemon_name": "Binacle"
    },
    {
        "charged_moves": [
            "Skull Bash",
            "Cross Chop",
            "Stone Edge",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Mud Slap",
            "Fury Cutter"
        ],
        "form": "Normal",
        "pokemon_id": 689,
        "pokemon_name": "Barbaracle"
    },
    {
        "charged_moves": [
            "Aqua Tail",
            "Water Pulse",
            "Twister",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 690,
        "pokemon_name": "Skrelp"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Aqua Tail",
            "Outrage",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Acid",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 691,
        "pokemon_name": "Dragalge"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Crabhammer",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 692,
        "pokemon_name": "Clauncher"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Dark Pulse",
            "Ice Beam",
            "Crabhammer"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Smack Down"
        ],
        "form": "Normal",
        "pokemon_id": 693,
        "pokemon_name": "Clawitzer"
    },
    {
        "charged_moves": [
            "Parabolic Charge",
            "Bulldoze",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 694,
        "pokemon_name": "Helioptile"
    },
    {
        "charged_moves": [
            "Parabolic Charge",
            "Bulldoze",
            "Thunderbolt",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Volt Switch",
            "Mud Slap"
        ],
        "form": "Normal",
        "pokemon_id": 695,
        "pokemon_name": "Heliolisk"
    },
    {
        "charged_moves": [
            "Stomp",
            "Ancient Power",
            "Dragon Claw"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 696,
        "pokemon_name": "Tyrunt"
    },
    {
        "charged_moves": [
            "Crunch",
            "Stone Edge",
            "Outrage",
            "Earthquake"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Charm",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 697,
        "pokemon_name": "Tyrantrum"
    },
    {
        "charged_moves": [
            "Weather Ball Ice",
            "Ancient Power",
            "Aurora Beam",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Frost Breath"
        ],
        "form": "Normal",
        "pokemon_id": 698,
        "pokemon_name": "Amaura"
    },
    {
        "charged_moves": [
            "Weather Ball Ice",
            "Ancient Power",
            "Blizzard",
            "Thunderbolt",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Frost Breath",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 699,
        "pokemon_name": "Aurorus"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Dazzling Gleam",
            "Draining Kiss"
        ],
        "elite_charged_moves": [
            "Last Resort",
            "Psyshock"
        ],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 700,
        "pokemon_name": "Sylveon"
    },
    {
        "charged_moves": [
            "Flying Press",
            "Sky Attack",
            "X Scissor",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Low Kick",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 701,
        "pokemon_name": "Hawlucha"
    },
    {
        "charged_moves": [
            "Discharge",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 702,
        "pokemon_name": "Dedenne"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Moonblast",
            "Power Gem"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 703,
        "pokemon_name": "Carbink"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Sludge Wave",
            "Muddy Water"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 704,
        "pokemon_name": "Goomy"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Sludge Wave",
            "Muddy Water",
            "Water Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 705,
        "pokemon_name": "Sliggoo"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Sludge Wave",
            "Muddy Water",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 706,
        "pokemon_name": "Goodra"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Play Rough",
            "Draining Kiss",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 707,
        "pokemon_name": "Klefki"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 708,
        "pokemon_name": "Phantump"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Shadow Claw",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 709,
        "pokemon_name": "Trevenant"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Average",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Large",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Small",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Grass Knot",
            "Shadow Sneak",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Super",
        "pokemon_id": 710,
        "pokemon_name": "Pumpkaboo"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Average",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Large",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Small",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Shadow Ball",
            "Foul Play",
            "Fire Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Razor Leaf"
        ],
        "form": "Super",
        "pokemon_id": 711,
        "pokemon_name": "Gourgeist"
    },
    {
        "charged_moves": [
            "Crunch",
            "Icy Wind",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 712,
        "pokemon_name": "Bergmite"
    },
    {
        "charged_moves": [
            "Crunch",
            "Avalanche",
            "Earthquake",
            "Body Slam",
            "Mirror Coat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Ice Fang"
        ],
        "form": "Normal",
        "pokemon_id": 713,
        "pokemon_name": "Avalugg"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Air Cutter",
            "Heat Wave"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Wing Attack",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 714,
        "pokemon_name": "Noibat"
    },
    {
        "charged_moves": [
            "Draco Meteor",
            "Hurricane",
            "Heat Wave",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Air Slash",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 715,
        "pokemon_name": "Noivern"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Megahorn",
            "Close Combat",
            "Giga Impact",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 716,
        "pokemon_name": "Xerneas"
    },
    {
        "charged_moves": [
            "Dark Pulse",
            "Hurricane",
            "Focus Blast",
            "Hyper Beam",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Snarl",
            "Gust"
        ],
        "form": "Normal",
        "pokemon_id": 717,
        "pokemon_name": "Yveltal"
    },
    {
        "charged_moves": [
            "Outrage",
            "Earthquake",
            "Crunch",
            "Hyper Beam",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Bite",
            "Zen Headbutt"
        ],
        "form": "Normal",
        "pokemon_id": 718,
        "pokemon_name": "Zygarde"
    },
    {
        "charged_moves": [
            "Rock Slide",
            "Moonblast",
            "Power Gem"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 719,
        "pokemon_name": "Diancie"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Psybeam",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Confined",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Astonish"
        ],
        "form": "Unbound",
        "pokemon_id": 720,
        "pokemon_name": "Hoopa"
    },
    {
        "charged_moves": [
            "Hydro Pump",
            "Overheat",
            "Earth Power",
            "Sludge Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Incinerate",
            "Water Gun",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 721,
        "pokemon_name": "Volcanion"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 722,
        "pokemon_name": "Rowlet"
    },
    {
        "charged_moves": [
            "Seed Bomb",
            "Energy Ball",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 723,
        "pokemon_name": "Dartrix"
    },
    {
        "charged_moves": [
            "Shadow Sneak",
            "Energy Ball",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 724,
        "pokemon_name": "Decidueye"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Flame Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 725,
        "pokemon_name": "Litten"
    },
    {
        "charged_moves": [
            "Flamethrower",
            "Flame Charge",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 726,
        "pokemon_name": "Torracat"
    },
    {
        "charged_moves": [
            "Fire Blast",
            "Flame Charge",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Snarl",
            "Fire Fang"
        ],
        "form": "Normal",
        "pokemon_id": 727,
        "pokemon_name": "Incineroar"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Water Pulse",
            "Aqua Tail"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 728,
        "pokemon_name": "Popplio"
    },
    {
        "charged_moves": [
            "Aqua Jet",
            "Water Pulse",
            "Disarming Voice"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 729,
        "pokemon_name": "Brionne"
    },
    {
        "charged_moves": [
            "Psychic",
            "Hydro Pump",
            "Moonblast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Charm",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 730,
        "pokemon_name": "Primarina"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Aerial Ace",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 731,
        "pokemon_name": "Pikipek"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Rock Blast",
            "Sky Attack"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 732,
        "pokemon_name": "Trumbeak"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Rock Blast",
            "Flash Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Rock Smash",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 733,
        "pokemon_name": "Toucannon"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Crunch",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 734,
        "pokemon_name": "Yungoos"
    },
    {
        "charged_moves": [
            "Hyper Fang",
            "Crunch",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Take Down",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 735,
        "pokemon_name": "Gumshoos"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 736,
        "pokemon_name": "Grubbin"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 737,
        "pokemon_name": "Charjabug"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 738,
        "pokemon_name": "Vikavolt"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 739,
        "pokemon_name": "Crabrawler"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 740,
        "pokemon_name": "Crabominable"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 742,
        "pokemon_name": "Cutiefly"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 743,
        "pokemon_name": "Ribombee"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Tomb",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 744,
        "pokemon_name": "Rockruff"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dusk",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Drill Run",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Sucker Punch",
            "Rock Throw"
        ],
        "form": "Midday",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Psychic Fangs",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Rock Throw"
        ],
        "form": "Midnight",
        "pokemon_id": 745,
        "pokemon_name": "Lycanroc"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "School",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Solo",
        "pokemon_id": 746,
        "pokemon_name": "Wishiwashi"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 747,
        "pokemon_name": "Mareanie"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 748,
        "pokemon_name": "Toxapex"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 749,
        "pokemon_name": "Mudbray"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 750,
        "pokemon_name": "Mudsdale"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 751,
        "pokemon_name": "Dewpider"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 752,
        "pokemon_name": "Araquanid"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 753,
        "pokemon_name": "Fomantis"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 754,
        "pokemon_name": "Lurantis"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 755,
        "pokemon_name": "Morelull"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 756,
        "pokemon_name": "Shiinotic"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 757,
        "pokemon_name": "Salandit"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 758,
        "pokemon_name": "Salazzle"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 759,
        "pokemon_name": "Stufful"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 760,
        "pokemon_name": "Bewear"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 761,
        "pokemon_name": "Bounsweet"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 762,
        "pokemon_name": "Steenee"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 763,
        "pokemon_name": "Tsareena"
    },
    {
        "charged_moves": [
            "Petal Blizzard",
            "Grass Knot",
            "Draining Kiss"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Hidden Power"
        ],
        "form": "Normal",
        "pokemon_id": 764,
        "pokemon_name": "Comfey"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 765,
        "pokemon_name": "Oranguru"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 766,
        "pokemon_name": "Passimian"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 767,
        "pokemon_name": "Wimpod"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 768,
        "pokemon_name": "Golisopod"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 769,
        "pokemon_name": "Sandygast"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 770,
        "pokemon_name": "Palossand"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 771,
        "pokemon_name": "Pyukumuku"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 772,
        "pokemon_name": "Type: Null"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Bug",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dark",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dragon",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Electric",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Fairy",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Fighting",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Fire",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Flying",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ghost",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Grass",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ground",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ice",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Poison",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Psychic",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Rock",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Steel",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Water",
        "pokemon_id": 773,
        "pokemon_name": "Silvally"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Blue",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Green",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Indigo",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Meteor",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Orange",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Red",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Violet",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Yellow",
        "pokemon_id": 774,
        "pokemon_name": "Minior"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 775,
        "pokemon_name": "Komala"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 776,
        "pokemon_name": "Turtonator"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 777,
        "pokemon_name": "Togedemaru"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Busted",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Disguised",
        "pokemon_id": 778,
        "pokemon_name": "Mimikyu"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 779,
        "pokemon_name": "Bruxish"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 780,
        "pokemon_name": "Drampa"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 781,
        "pokemon_name": "Dhelmise"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Brick Break",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 782,
        "pokemon_name": "Jangmo-o"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Brick Break",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 783,
        "pokemon_name": "Hakamo-o"
    },
    {
        "charged_moves": [
            "Dragon Claw",
            "Close Combat",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Poison Jab",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 784,
        "pokemon_name": "Kommo-o"
    },
    {
        "charged_moves": [
            "Thunderbolt",
            "Dazzling Gleam",
            "Brave Bird",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Volt Switch",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 785,
        "pokemon_name": "Tapu Koko"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 786,
        "pokemon_name": "Tapu Lele"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 787,
        "pokemon_name": "Tapu Bulu"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 788,
        "pokemon_name": "Tapu Fini"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 789,
        "pokemon_name": "Cosmog"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 790,
        "pokemon_name": "Cosmoem"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 791,
        "pokemon_name": "Solgaleo"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 792,
        "pokemon_name": "Lunala"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 793,
        "pokemon_name": "Nihilego"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 794,
        "pokemon_name": "Buzzwole"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 795,
        "pokemon_name": "Pheromosa"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 796,
        "pokemon_name": "Xurkitree"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 797,
        "pokemon_name": "Celesteela"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 798,
        "pokemon_name": "Kartana"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 799,
        "pokemon_name": "Guzzlord"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dawn_wings",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Dusk_mane",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Ultra",
        "pokemon_id": 800,
        "pokemon_name": "Necrozma"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 801,
        "pokemon_name": "Magearna"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Original_color",
        "pokemon_id": 801,
        "pokemon_name": "Magearna"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 802,
        "pokemon_name": "Marshadow"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 803,
        "pokemon_name": "Poipole"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 804,
        "pokemon_name": "Naganadel"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 805,
        "pokemon_name": "Stakataka"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 806,
        "pokemon_name": "Blacephalon"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle"
        ],
        "form": "Normal",
        "pokemon_id": 807,
        "pokemon_name": "Zeraora"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Thunderbolt"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 808,
        "pokemon_name": "Meltan"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Thunderbolt",
            "Hyper Beam",
            "Rock Slide",
            "Super Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 809,
        "pokemon_name": "Melmetal"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 810,
        "pokemon_name": "Grookey"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 811,
        "pokemon_name": "Thwackey"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Scratch",
            "Razor Leaf"
        ],
        "form": "Normal",
        "pokemon_id": 812,
        "pokemon_name": "Rillaboom"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 813,
        "pokemon_name": "Scorbunny"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 814,
        "pokemon_name": "Raboot"
    },
    {
        "charged_moves": [
            "Flame Charge",
            "Flamethrower",
            "Focus Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 815,
        "pokemon_name": "Cinderace"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 816,
        "pokemon_name": "Sobble"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 817,
        "pokemon_name": "Drizzile"
    },
    {
        "charged_moves": [
            "Water Pulse",
            "Surf",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 818,
        "pokemon_name": "Inteleon"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 819,
        "pokemon_name": "Skwovet"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Bite",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 820,
        "pokemon_name": "Greedent"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 821,
        "pokemon_name": "Rookidee"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Brave Bird"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 822,
        "pokemon_name": "Corvisquire"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Brave Bird",
            "Iron Head"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Steel Wing",
            "Air Slash"
        ],
        "form": "Normal",
        "pokemon_id": 823,
        "pokemon_name": "Corviknight"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 824,
        "pokemon_name": "Blipbug"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 825,
        "pokemon_name": "Dottler"
    },
    {
        "charged_moves": [
            "Bug Buzz",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Struggle Bug",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 826,
        "pokemon_name": "Orbeetle"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 827,
        "pokemon_name": "Nickit"
    },
    {
        "charged_moves": [
            "Night Slash",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Quick Attack",
            "Snarl"
        ],
        "form": "Normal",
        "pokemon_id": 828,
        "pokemon_name": "Thievul"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 829,
        "pokemon_name": "Gossifleur"
    },
    {
        "charged_moves": [
            "Energy Ball",
            "Grass Knot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Razor Leaf",
            "Bullet Seed"
        ],
        "form": "Normal",
        "pokemon_id": 830,
        "pokemon_name": "Eldegoss"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Payback",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 831,
        "pokemon_name": "Wooloo"
    },
    {
        "charged_moves": [
            "Wild Charge",
            "Payback",
            "Body Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 832,
        "pokemon_name": "Dubwool"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Water Gun",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 833,
        "pokemon_name": "Chewtle"
    },
    {
        "charged_moves": [
            "Body Slam",
            "Surf",
            "Rock Blast"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 834,
        "pokemon_name": "Drednaw"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 835,
        "pokemon_name": "Yamper"
    },
    {
        "charged_moves": [
            "Crunch",
            "Thunder"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Spark",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 836,
        "pokemon_name": "Boltund"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Tackle"
        ],
        "form": "Normal",
        "pokemon_id": 837,
        "pokemon_name": "Rolycoly"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 838,
        "pokemon_name": "Carkol"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Rock Slide",
            "Flame Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Smack Down",
            "Incinerate"
        ],
        "form": "Normal",
        "pokemon_id": 839,
        "pokemon_name": "Coalossal"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 840,
        "pokemon_name": "Applin"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Fly",
            "Outrage",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Dragon Breath"
        ],
        "form": "Normal",
        "pokemon_id": 841,
        "pokemon_name": "Flapple"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Energy Ball",
            "Outrage",
            "Seed Bomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bullet Seed",
            "Astonish"
        ],
        "form": "Normal",
        "pokemon_id": 842,
        "pokemon_name": "Appletun"
    },
    {
        "charged_moves": [
            "Dig",
            "Bulldoze",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 843,
        "pokemon_name": "Silicobra"
    },
    {
        "charged_moves": [
            "Dig",
            "Bulldoze",
            "Earth Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Mud Slap",
            "Mud Shot"
        ],
        "form": "Normal",
        "pokemon_id": 844,
        "pokemon_name": "Sandaconda"
    },
    {
        "charged_moves": [
            "Drill Peck",
            "Fly",
            "Hydro Pump"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Peck",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 845,
        "pokemon_name": "Cramorant"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Jet",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bite",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 846,
        "pokemon_name": "Arrokuda"
    },
    {
        "charged_moves": [
            "Crunch",
            "Aqua Jet",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Waterfall",
            "Bite",
            "Peck"
        ],
        "form": "Normal",
        "pokemon_id": 847,
        "pokemon_name": "Barraskewda"
    },
    {
        "charged_moves": [
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid"
        ],
        "form": "Normal",
        "pokemon_id": 848,
        "pokemon_name": "Toxel"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Discharge",
            "Wild Charge",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark",
            "Poison Jab"
        ],
        "form": "Amped",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity"
    },
    {
        "charged_moves": [
            "Acid Spray",
            "Discharge",
            "Wild Charge",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Acid",
            "Spark",
            "Poison Jab"
        ],
        "form": "Low_key",
        "pokemon_id": 849,
        "pokemon_name": "Toxtricity"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Bug Buzz",
            "Crunch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 850,
        "pokemon_name": "Sizzlipede"
    },
    {
        "charged_moves": [
            "Heat Wave",
            "Bug Buzz",
            "Crunch",
            "Lunge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bug Bite",
            "Ember"
        ],
        "form": "Normal",
        "pokemon_id": 851,
        "pokemon_name": "Centiskorch"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Super Power",
            "Ice Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 852,
        "pokemon_name": "Clobbopus"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Super Power",
            "Ice Punch",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Waterfall"
        ],
        "form": "Normal",
        "pokemon_id": 853,
        "pokemon_name": "Grapploct"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch"
        ],
        "form": "Antique",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch"
        ],
        "form": "Phony",
        "pokemon_id": 854,
        "pokemon_name": "Sinistea"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch",
            "Hex"
        ],
        "form": "Antique",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Dark Pulse",
            "Psychic"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Sucker Punch",
            "Hex"
        ],
        "form": "Phony",
        "pokemon_id": 855,
        "pokemon_name": "Polteageist"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 856,
        "pokemon_name": "Hatenna"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 857,
        "pokemon_name": "Hattrem"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Dazzling Gleam",
            "Power Whip"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Charm",
            "Psycho Cut"
        ],
        "form": "Normal",
        "pokemon_id": 858,
        "pokemon_name": "Hatterene"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 859,
        "pokemon_name": "Impidimp"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Sucker Punch"
        ],
        "form": "Normal",
        "pokemon_id": 860,
        "pokemon_name": "Morgrem"
    },
    {
        "charged_moves": [
            "Foul Play",
            "Dark Pulse",
            "Play Rough",
            "Power Up Punch"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite",
            "Sucker Punch",
            "Low Kick"
        ],
        "form": "Normal",
        "pokemon_id": 861,
        "pokemon_name": "Grimmsnarl"
    },
    {
        "charged_moves": [
            "Cross Chop",
            "Night Slash",
            "Hyper Beam",
            "Gunk Shot"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Lick"
        ],
        "form": "Galarian",
        "pokemon_id": 862,
        "pokemon_name": "Obstagoon"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Close Combat",
            "Play Rough",
            "Foul Play"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Shadow Claw"
        ],
        "form": "Galarian",
        "pokemon_id": 863,
        "pokemon_name": "Perrserker"
    },
    {
        "charged_moves": [
            "Rock Blast",
            "Brine",
            "Night Shade",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Hex"
        ],
        "form": "Normal",
        "pokemon_id": 864,
        "pokemon_name": "Cursola"
    },
    {
        "charged_moves": [
            "Close Combat",
            "Brave Bird",
            "Leaf Blade",
            "Night Slash"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Counter",
            "Fury Cutter"
        ],
        "form": "Galarian",
        "pokemon_id": 865,
        "pokemon_name": "Sirfetch\u2019d"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Ice Punch",
            "Icy Wind"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Zen Headbutt",
            "Ice Shard"
        ],
        "form": "Galarian",
        "pokemon_id": 866,
        "pokemon_name": "Mr. Rime"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Sand Tomb",
            "Rock Tomb"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish"
        ],
        "form": "Galarian",
        "pokemon_id": 867,
        "pokemon_name": "Runerigus"
    },
    {
        "charged_moves": [
            "Dazzling Gleam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 868,
        "pokemon_name": "Milcery"
    },
    {
        "charged_moves": [
            "Dazzling Gleam",
            "Psyshock",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Charm"
        ],
        "form": "Normal",
        "pokemon_id": 869,
        "pokemon_name": "Alcremie"
    },
    {
        "charged_moves": [
            "Super Power",
            "Brick Break",
            "Megahorn"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 870,
        "pokemon_name": "Falinks"
    },
    {
        "charged_moves": [
            "Discharge",
            "Thunderbolt",
            "Bubble Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Water Gun",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 871,
        "pokemon_name": "Pincurchin"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Bug Buzz"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Struggle Bug"
        ],
        "form": "Normal",
        "pokemon_id": 872,
        "pokemon_name": "Snom"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Bug Buzz",
            "Ice Beam",
            "Hurricane"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Bug Bite"
        ],
        "form": "Normal",
        "pokemon_id": 873,
        "pokemon_name": "Frosmoth"
    },
    {
        "charged_moves": [
            "Stone Edge",
            "Rock Slide",
            "Stomp"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Throw"
        ],
        "form": "Normal",
        "pokemon_id": 874,
        "pokemon_name": "Stonjourner"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Weather Ball Ice",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow"
        ],
        "form": "Ice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue"
    },
    {
        "charged_moves": [
            "Icy Wind",
            "Weather Ball Ice",
            "Surf"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow"
        ],
        "form": "Noice",
        "pokemon_id": 875,
        "pokemon_name": "Eiscue"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory"
        ],
        "form": "Female",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee"
    },
    {
        "charged_moves": [
            "Psybeam",
            "Psychic",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Extrasensory"
        ],
        "form": "Male",
        "pokemon_id": 876,
        "pokemon_name": "Indeedee"
    },
    {
        "charged_moves": [
            "Crunch",
            "Payback",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Bite"
        ],
        "form": "Full_belly",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko"
    },
    {
        "charged_moves": [
            "Crunch",
            "Payback",
            "Thunderbolt",
            "Wild Charge"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Bite"
        ],
        "form": "Hangry",
        "pokemon_id": 877,
        "pokemon_name": "Morpeko"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Dig",
            "Play Rough"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 878,
        "pokemon_name": "Cufant"
    },
    {
        "charged_moves": [
            "Iron Head",
            "Dig",
            "Play Rough",
            "Heavy Slam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Rock Smash"
        ],
        "form": "Normal",
        "pokemon_id": 879,
        "pokemon_name": "Copperajah"
    },
    {
        "charged_moves": [
            "Discharge",
            "Dragon Pulse",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 880,
        "pokemon_name": "Dracozolt"
    },
    {
        "charged_moves": [
            "Discharge",
            "Avalanche",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Thunder Shock"
        ],
        "form": "Normal",
        "pokemon_id": 881,
        "pokemon_name": "Arctozolt"
    },
    {
        "charged_moves": [
            "Brine",
            "Dragon Pulse",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Breath",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 882,
        "pokemon_name": "Dracovish"
    },
    {
        "charged_moves": [
            "Brine",
            "Avalanche",
            "Ancient Power"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Powder Snow",
            "Water Gun"
        ],
        "form": "Normal",
        "pokemon_id": 883,
        "pokemon_name": "Arctovish"
    },
    {
        "charged_moves": [
            "Flash Cannon",
            "Dragon Claw",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Metal Claw"
        ],
        "form": "Normal",
        "pokemon_id": 884,
        "pokemon_name": "Duraludon"
    },
    {
        "charged_moves": [
            "Struggle"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Quick Attack"
        ],
        "form": "Normal",
        "pokemon_id": 885,
        "pokemon_name": "Dreepy"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Shadow Ball",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Astonish",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 886,
        "pokemon_name": "Drakloak"
    },
    {
        "charged_moves": [
            "Dragon Pulse",
            "Shadow Ball",
            "Outrage"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Hex",
            "Dragon Tail"
        ],
        "form": "Normal",
        "pokemon_id": 887,
        "pokemon_name": "Dragapult"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Iron Head",
            "Wild Charge",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Fire Fang"
        ],
        "form": "Crowned_sword",
        "pokemon_id": 888,
        "pokemon_name": "Zacian"
    },
    {
        "charged_moves": [
            "Play Rough",
            "Iron Head",
            "Wild Charge",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Fire Fang"
        ],
        "form": "Hero",
        "pokemon_id": 888,
        "pokemon_name": "Zacian"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Iron Head",
            "Crunch",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Ice Fang"
        ],
        "form": "Crowned_shield",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta"
    },
    {
        "charged_moves": [
            "Moonblast",
            "Iron Head",
            "Crunch",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Metal Claw",
            "Snarl",
            "Quick Attack",
            "Ice Fang"
        ],
        "form": "Hero",
        "pokemon_id": 889,
        "pokemon_name": "Zamazenta"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Dragon Pulse",
            "Flamethrower",
            "Hyper Beam"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Poison Jab"
        ],
        "form": "Eternamax",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus"
    },
    {
        "charged_moves": [
            "Cross Poison",
            "Dragon Pulse",
            "Flamethrower"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Dragon Tail",
            "Poison Jab"
        ],
        "form": "Normal",
        "pokemon_id": 890,
        "pokemon_name": "Eternatus"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Dynamic Punch",
            "Close Combat"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter"
        ],
        "form": "Normal",
        "pokemon_id": 891,
        "pokemon_name": "Kubfu"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Dynamic Punch",
            "Close Combat",
            "Aqua Jet"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter",
            "Waterfall"
        ],
        "form": "Rapid_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu"
    },
    {
        "charged_moves": [
            "Brick Break",
            "Dynamic Punch",
            "Close Combat",
            "Payback"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Rock Smash",
            "Counter",
            "Sucker Punch"
        ],
        "form": "Single_strike",
        "pokemon_id": 892,
        "pokemon_name": "Urshifu"
    },
    {
        "charged_moves": [
            "Power Whip",
            "Energy Ball",
            "Dark Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Vine Whip",
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 893,
        "pokemon_name": "Zarude"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Thunder",
            "Zap Cannon"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Thunder Shock",
            "Lock On"
        ],
        "form": "Normal",
        "pokemon_id": 894,
        "pokemon_name": "Regieleki"
    },
    {
        "charged_moves": [
            "Hyper Beam",
            "Outrage",
            "Dragon Pulse"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Bite"
        ],
        "form": "Normal",
        "pokemon_id": 895,
        "pokemon_name": "Regidrago"
    },
    {
        "charged_moves": [
            "Avalanche",
            "Icy Wind",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 896,
        "pokemon_name": "Glastrier"
    },
    {
        "charged_moves": [
            "Shadow Ball",
            "Foul Play",
            "Bulldoze"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Tackle",
            "Take Down"
        ],
        "form": "Normal",
        "pokemon_id": 897,
        "pokemon_name": "Spectrier"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Psychic",
            "Energy Ball",
            "Avalanche"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Take Down"
        ],
        "form": "Ice_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Psychic",
            "Energy Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Pound",
            "Confusion"
        ],
        "form": "Normal",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
    },
    {
        "charged_moves": [
            "Psyshock",
            "Psychic",
            "Energy Ball",
            "Shadow Ball"
        ],
        "elite_charged_moves": [],
        "elite_fast_moves": [],
        "fast_moves": [
            "Confusion",
            "Take Down"
        ],
        "form": "Shadow_rider",
        "pokemon_id": 898,
        "pokemon_name": "Calyrex"
    }
]