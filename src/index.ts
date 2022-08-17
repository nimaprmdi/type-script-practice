interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    getObject() {
        return this._objects;
    }
}

class CompressibleStore<T> extends Store<T> {
    compress() {}
}

class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find((obj) => obj.name === name);
    }
}

class ProductStore extends Store<Product> {
    filterByCategory(category: string, price: number): Product[] {
        return [{ name: category, price: price }];
    }
}

let compressibleStore = new CompressibleStore<Product>();
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
