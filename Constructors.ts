class Point3 {
    x: number;
    y: number;
    constructor(x?: number, y?:number){
        this.x = x;
        this.y = y;
    }
    draw2(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point3){
        //.,.
    }
}

let point2 = new Point3();
point.draw2();