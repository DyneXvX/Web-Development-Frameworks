var helloWord = 'Hello World';
console.log(helloWord);
//command in terminal to compile this is tsc .\index.ts
//command to initialize a typescript project tsc --init
//let bigInt=100n; 
//this required us to set the "target": "ES2020", in the tsconfig.json file. bigInt doesn't work on older version.
function add(x, y) {
    return x + y;
}
// "sourceMap": true,      /* Generates corresponding '.map' file. */ <-- really helps with debugging. Leave as true.
// tsc -w starts watching the type script files for changes.
console.log(add(5, 9));
function add2(a, b) {
    return a + b;
}
console.log(add2('s', true));
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var myColor = color.green;
//class setup can be done in typeScript
var Student = /** @class */ (function () {
    function Student(firstName) {
        this.firstName = '';
        this.firstName = firstName;
    }
    return Student;
}());
//cntl C will kill the watching.
