export class Point {
    constructor(x,y) {
        this.set(x,y);
    }
    set(x,y) {
        this.x = x;
        this.y = y;
    }
    scale(factor) {
        this.x *= factor;
        this.y *= factor;
    }
    clone() {
        return new Point(this.x,this.y);
    }
}

export class Vector extends Point {
    times(num) {
        return new Vector(this.x * num, this.y*num);
    }
}
