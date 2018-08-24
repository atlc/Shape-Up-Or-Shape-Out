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
    constructor() {
        super();
        
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }
}

// Global Shape object array
let shapes = []

$('#rectangleBtn').click(function() {
    let newRect = new Rectangle($('#rectWidthInput').val(),$('#rectHeightInput').val());
    shapes.push(newRect);
    console.log(newRect);
    console.log(newRect.area());
    console.log(newRect.perimeter());
});

$('#squareBtn').click(function() {
    console.log(this);
});

$('#circleBtn').click(function() {
    console.log(this);
});

$('#triangleBtn').click(function() {
    console.log(this);
});