"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    getObject() {
        return this._objects;
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category, price) {
        return [{ name: category, price: price }];
    }
}
let compressibleStore = new CompressibleStore();
let storeClass = new Store();
let productStore = new ProductStore();
let searchAble = new SearchableStore();
// Access to child
compressibleStore.compress();
// Adding (a1) to the the (_objects)
storeClass.add("a");
console.log("objects => ", storeClass.getObject());
//
console.log("return given data => ", productStore.filterByCategory("a", 500));
console.log(searchAble.find("a"));
//# sourceMappingURL=index.js.map