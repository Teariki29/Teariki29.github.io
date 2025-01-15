class Attack {
    
    constructor(movesType, type, move_id, energy_delta, name, power, duration, stamina_loss_scaler, critical_chance) {
        this.movesType = movesType;
        this.type = type;
        this.move_id = move_id;
        this.energy_delta = energy_delta;
        this.name = name;
        this.power = power;
        this.duration = duration;
        this.critical_chance = critical_chance;
        this.stamina_loss_scaler = stamina_loss_scaler
    }

    toString() {
        return `${this.move_id} Nom ${this.name} De forme ${this.movesType} Type ${this.type} Générant ${this.energy_delta} Puissance ${this.power} Dure ${this.duration} Chance de crit ${this.critical_chance}`;
    }

    static all_attacks = [];
    
    static test() {

        console.log(Attack.all_attacks);
    }

    // Même chose que pour getPokemonsByType
    static getAttacksByType(typeName) {

        let req3 = [];

        Attack.all_attacks.forEach(test => {
            if (test.type == typeName) {
                req3[test.move_id] = test;
            }
        });

        console.log(req3);
    }
}