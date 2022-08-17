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

    // (keyof T) will say argument should be match with object keys
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find((obj) => obj[property] === value);
    }
}

let store = new Store<Product>();
store.add({ name: "bmw", price: 20 });
store.find("name", "bmw");
// store.find("brand", 5); // will not work because key not exist
