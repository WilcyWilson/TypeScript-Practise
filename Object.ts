class Point2 {
    x: number;
    y: number;
    draw2(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point2){
        //.,.
    }
}

let point = new Point2();
point.x = 2;
point.y = 3;
point.draw2();