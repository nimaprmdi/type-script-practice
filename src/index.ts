// Using (unknown) is prefred instead of any (Give us better type checking)
function render(document: any) {
    // This is equal to if(typeof document === 'string').
    // But with instance of we can say custom objet
    if (document instanceof WordDocument) { // WordDocument is (type) for example
        document.toUpperCase();
    }

    // type of just work for `string` , `boolean` , `number`
    if (typeof document === "string") {
        document.toUpperCase();
    }
}
