class Demo {
    n: number = 9;
    check() {
        if (this.n == 9) {
            let n: number = 10;
            console.log(this.n); // hace referencia al atributo de la clase.
        }
    }
}
let demoObject = new Demo();
demoObject.check();


class Cube {
    width;
    height;
    length;
}

let cube1 = new Cube();
let cube2 = new Cube();
cube1.height = 1;
cube1.length = 2;
cube1.width = 1;
cube2 = cube1; // no cae la reasignacion al let debido a que son el mismo tipo de dato.

console.log(cube2.height);