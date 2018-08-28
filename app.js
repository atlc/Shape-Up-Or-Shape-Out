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
        if (shape.radius > 300) {
            alert('This radius is too large for the canvas, and will be set to 75px.');
            shape.radius = 75;
            shape.width = shape.radius * 2;
            shape.height = shape.radius * 2;
        }
        drawing.style.borderRadius = '50%';
    }

    if (drawing.className !== 'Circle') {
        if (shape.width >= 599) {
            alert('This width is too large for the canvas, and will be set to 150px.');
            shape.width = 150;
        }

        if (shape.height >= 599) {
            alert('This height is too large for the canvas, and will be set to 150px.');
            shape.height = 150;
        }
    }

    if (drawing.className == 'Triangle') {
        drawing.style.borderBottom = `${shape.height}px solid yellow`;
        drawing.style.borderRight = `${(shape.height)}px solid transparent`;
    }

    drawing.style.width = `${shape.width}px`;
    drawing.style.height = `${shape.height}px`;
    drawing.style.top = `${Math.floor(Math.random() * (600 - 1 - shape.height))}px`;
    drawing.style.left = `${Math.floor(Math.random() * (600 - 1 - shape.width))}px`;


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
    $('#shapeName').html(`${shape.name}`);
    $('#shapeWidth').html(`${shape.width} px`);
    $('#shapeHeight').html(`${shape.height} px`);

    (shape.radius == undefined) ? $('#shapeRadius').html(' ') : $('#shapeRadius').html(`${shape.radius} px`);

    $('#shapeArea').html(`${shape.area().toLocaleString()} px`);
    $('#shapePerimeter').html(`${shape.perimeter().toLocaleString()} px`);
}

$('#rectangleBtn').click(() => {
    let rect = new Rectangle(parseInt($('#rectWidthInput').val(), 10), parseInt($('#rectHeightInput').val()), 10);
    draw(rect);
});

$('#squareBtn').click(() => {
    let square = new Square(parseInt($('#squareInput').val()), 10);
    draw(square);
});

$('#circleBtn').click(() => {
    let circ = new Circle(parseInt($('#circleInput').val()), 10);
    draw(circ);
});

$('#triangleBtn').click(() => {
    let tri = new Triangle(parseInt($('#triangleInput').val()), 10);
    draw(tri);
});