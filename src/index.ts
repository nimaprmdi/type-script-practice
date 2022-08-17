type ComponentOptions = {
    selector: string;
};

// function Component(value: number) { // We can define the type (static type) or (dynamic type)
function Component(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log("Component Called");

        constructor.prototype.options = options;
        console.log(constructor.prototype.options);

        constructor.prototype.userId = Date.now();
        constructor.prototype.insertInDom = () => {
            console.log("Inserted the component In Dom");
        };
    };
}

// @Component(5) // static type difinition
@Component({ selector: "#my-div" }) // Dynamic way
class ProfileComponent {
    // We have every thing from prototype here
}
