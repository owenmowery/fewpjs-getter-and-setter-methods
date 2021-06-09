class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    set diameter(dia) {
        this.radius = dia / 2;
    }

    set circumference(num) {
        this.radius = (num / Math.PI) / 2;
    }
}