
// variable and datatypes in ts
let username:string = 'abhinav_googler'; // username is contain only string

let password:string | number // string and number both
password = 123

let id:number = 234;
let check:boolean = true

let flag:boolean | number; // flag is boolen and number both acessible
flag = false

// functions
let func = (n:number, m:number)=>{
    return n+m;
}

let func1 = (n:number,m:number):string=>{
    return String(n*m);
}

let func2 = (n:number,m:number):number=>{
    return (n*m);
}

// type alias / custom datatype
type myname = string | boolean;

type MyName = {
    firstName: string,
    middleName: string,
    lastName: string,
    age: Number,
    isPresent: boolean,
    _id: Number
}

// using type alias
const player1: MyName = {
    firstName: 'Abhinav',
    middleName: 'Suraj',
    lastName: 'bhardwaj',
    age: 20,
    isPresent: false,
    _id: 294
}

console.log(player1)

