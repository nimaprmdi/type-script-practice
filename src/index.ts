// This class will not available from calling outside
// it is like a uncoocked meal!
abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void; // abstract methods only can be in abstract classes
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log("Rendering a circle");
    }
}

let shape1 = new Circle(5, "red");
shape1.render();
