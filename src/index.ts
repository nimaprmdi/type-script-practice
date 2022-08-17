interface Product {
    name: string;
    price: number;
}

// This will create anything in the product interface readonly
type ReadOnlyProducts = {
    readonly // (K) is the key => it is like a for loop (This just work for Product interface)
    [K in keyof Product]: Product[K];
};

let product: ReadOnlyProducts = {
    name: "a",
    price: 5,
};
// product.name = "5"; // here we can not change the value of the name will get an error

/******** Next level Readonly *********/
type Optional<T> = {
    // using (?) made it optional
    [K in keyof T]?: T[K]; // made every thing here optional
};

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

let optional: Optional<Product> = {
    name: "name",
    // price is optional here
};

let nullable: Nullable<Product> = {
    name: null,
    price: null,
};
