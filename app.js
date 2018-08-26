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
        return Math.floor((Math.PI * (this.radius ** 2)));
    }
    
    perimeter() {
        return Math.floor((Math.PI * this.radius));
    }
}

class Triangle extends Shape {
    constructor(height) {
        super('Triangle', height, height);
    }

    area() {
        return Math.floor((this.height ** 2) / 2);
    }

    perimeter() {
        return Math.floor((2 * this.height) + (Math.SQRT2 * this.height));
    }
}

// Global Shape object array
let shapes = [];

function draw(shape) {
    let newDiv = document.createElement('div');
    newDiv.className = `${shape.name}`;
    newDiv.style.width = `${shape.width}px`;
    newDiv.style.height = `${shape.height}px`;
    newDiv.style.top = `${Math.abs(Math.floor((Math.random() * 600)+1)-shape.height)}px`
    newDiv.style.left = `${Math.abs(Math.floor((Math.random() * 600)+1)-shape.width)}px`
    $('#canvas').append(newDiv);
}

function describe(shape) {
    $('#shapeName').append(shape.name);
    $('#shapeWidth').append(shape.width);
    $('#shapeHeight').append(shape.height);
    $('#shapeRadius').append(shape.radius);
    $('#shapeArea').append(shape.area());
    $('#shapePerimeter').append(shape.perimeter());
}

$('#rectangleBtn').click(() => {
    let rect = new Rectangle($('#rectWidthInput').val(), $('#rectHeightInput').val());
    draw(rect);
    describe(rect);
    shapes.push(rect);
});

$('#squareBtn').click(function () {
    let square = new Square($('#squareInput').val());
    draw(square);
    describe(square);
    shapes.push(square);
});

$('#circleBtn').click(function () {
    let circ = new Circle($('#circleInput').val());
    draw(circ);
    describe(circ);
    shapes.push(circ);
});

$('#triangleBtn').click(function () {
    let tri = new Triangle($('#triangleInput').val());
    draw(tri);
    describe(tri);
    shapes.push(tri);
});