class Point {
    x;
    y;
    width;

    constructor(x, y) {
        this.x = x;
        this.y = y
        this.width = 10;
    }

    draw() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.width);
        fill(0);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}