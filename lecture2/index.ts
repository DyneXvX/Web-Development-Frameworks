let helloWord= 'Hello World';
console.log(helloWord);
//command in terminal to compile this is tsc .\index.ts
//command to initialize a typescript project tsc --init


//let bigInt=100n; 
//this required us to set the "target": "ES2020", in the tsconfig.json file. bigInt doesn't work on older version.

function add(x:number , y:number):number
{
    return x + y;
}

// "sourceMap": true,      /* Generates corresponding '.map' file. */ <-- really helps with debugging. Leave as true.
// tsc -w starts watching the type script files for changes.

console.log(add(5,9));

function add2(a:string , b:boolean)
{
    return a + b;
}

console.log(add2('s', true))

enum color{
    red,
    green,
    blue
}

let myColor = color.green;

//class setup can be done in typeScript
class Student{
    firstName:String='';

    constructor(firstName:string)
    {
        this.firstName = firstName;
    }
}

//ctrl C will kill the watching.