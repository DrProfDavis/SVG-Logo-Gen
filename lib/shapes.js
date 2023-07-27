// Sets up Shape and Color
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorChoice) {
        this.color = colorChoice;
    }
}

// Returns html snippet for Square and Color
class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// Returns html snippet for Circle and Color
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// Returns html snippet for Triangle and Color
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Square, Circle };


// FROM README
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');