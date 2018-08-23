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
    constructor() {
        super();
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