interface Point {
    x: number,
    y: number,
    draw: (point) => void
}

let drawPoint = (point : Point) => {
   drawLogic(point.x, point.y);
}

let getDistance = (pointA: Point, pointB: Point) => {
    // ..
}

drawPoint({
    x: 1,
    y: 2
})