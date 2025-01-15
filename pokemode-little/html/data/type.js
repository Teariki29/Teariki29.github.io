class Type {
    
    constructor(name, effectiveness) {
        this.name = name;
        this.effectiveness = effectiveness;
    }

    toString() {
        return `Type: ${this.name} est efficasse contre : ${this.effectiveness}`;
    }

    static all_types = [];

    static test() {
        console.log(Type.all_types);
    }
    
}