function Component(constructor: Function) {
    console.log("Component decorator called");

    constructor.prototype.userId = Date.now();
    constructor.prototype.insertInDom = () => {
        console.log("Inserting dom component in dom ");
    };
}

@Component
class ProfileComponent {}
