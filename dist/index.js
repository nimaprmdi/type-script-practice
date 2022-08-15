"use strict";
// This class will not available from calling outside
// it is like a uncoocked meal!
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
let shape1 = new Circle(5, "red");
shape1.render();
//# sourceMappingURL=index.js.map