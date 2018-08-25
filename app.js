class Shape {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return (this.width * this.height);
    }

    perimeter() {
        return ((2 * this.width) + (2 * this.height));
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle', width, height);
    }
}

class Square extends Shape {
    constructor(length) {
        super('Square', length, length);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle', radius * 2, radius * 2); // Each circle has a width and height of their diameter 
        this.radius = radius;
    }

    area() {
        return (Math.PI * (this.radius ** 2));
    }
    
    perimeter() {
        return (Math.PI * this.radius);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super('Triangle', height, height);
    }

    area() {
        return ((this.height ** 2) / 2);
    }

    perimeter() {
        return ((2 * this.height) + (Math.SQRT2 * this.height));
    }
}

// Global Shape object array
let shapes = []

$('#rectangleBtn').click(function () {
    let rect = new Rectangle($('#rectWidthInput').val(), $('#rectHeightInput').val());
    shapes.push(rect);
});

$('#squareBtn').click(function () {
    let square = new Square($('#squareInput').val());
    shapes.push(square);
});

$('#circleBtn').click(function () {
    let circ = new Circle($('#circleInput').val());
    shapes.push(circ);
});

$('#triangleBtn').click(function () {
    let tri = new Triangle($('#triangleInput').val());
    shapes.push(tri);
});