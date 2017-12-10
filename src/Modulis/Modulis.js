class Polygon{
    constructor(height=2, width=3){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.height * this.width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
var poly = new Polygon();
console.log(poly.calcArea());
console.log(poly.area);
//polygon.area = 3; 
export var P1 = Polygon;
export var P2 = Polygon;
export default Polygon;