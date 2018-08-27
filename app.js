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
        return Math.floor((Math.PI * this.radius * 2));
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

function draw(shape) {
    let drawing = document.createElement('div');
    drawing.className = `${shape.name}`;

    if (drawing.className == 'Circle') {
        drawing.style.borderRadius = '50%';
    } else if (drawing.className == 'Triangle') {
        drawing.style.borderBottom = `${shape.height}px solid yellow`;
        drawing.style.borderRight = `${(shape.height)}px solid transparent`;
    }

    drawing.style.width = `${shape.width}px`;
    drawing.style.height = `${shape.height}px`;
    drawing.style.top = `${Math.abs(Math.floor((Math.random() * 600)+1)-shape.height)}px`;
    drawing.style.left = `${Math.abs(Math.floor((Math.random() * 600)+1)-shape.width)}px`;
    $('#canvas').append(drawing);
    attachEvents(drawing, shape);
}

function attachEvents(drawing, shape) {
    $(drawing).click(() => {
        describe(shape);
    });

    $(drawing).dblclick(() => {
        delete shape;
        drawing.parentNode.removeChild(drawing);
    });
}

function describe(shape) {
    $('#shapeName').html(shape.name);
    $('#shapeWidth').html(shape.width);
    $('#shapeHeight').html(shape.height);
    $('#shapeRadius').html(shape.radius);
    $('#shapeArea').html(shape.area());
    $('#shapePerimeter').html(shape.perimeter());
}

$('#rectangleBtn').click(() => {
    let rect = new Rectangle($('#rectWidthInput').val(), $('#rectHeightInput').val());
    draw(rect);
});

$('#squareBtn').click(() => {
    let square = new Square($('#squareInput').val());
    draw(square);
});

$('#circleBtn').click(() => {
    let circ = new Circle($('#circleInput').val());
    draw(circ);
});

$('#triangleBtn').click(() => {
    let tri = new Triangle($('#triangleInput').val());
    draw(tri);
});