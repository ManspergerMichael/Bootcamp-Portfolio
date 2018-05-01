class Pizza {
    constructor(radius, slices) {
        this.radius = radius;
        this._slices = slices;
    }
    get slices () { 
        return this._slices; 
    }
    set slices (slices) { 
        this._slices = slices;
    }
    get diameter(){
        return this.radius * 2;
    }
};

const pie = new Pizza(12, 6);
console.log(pie.slices);     // we use the getter to determine how many slices we have
pie.slices = 12;             // the setter will change the number of slices
console.log(pie.slices);     // use the getter again to make sure our slices have doubled
console.log(pie.diameter);
