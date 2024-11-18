// variable and datatypes in ts
var username = 'abhinav_googler'; // username is contain only string
var password; // string and number both
password = 123;
var id = 234;
var check = true;
var flag; // flag is boolen and number both acessible
flag = false;
// functions
var func = function (n, m) {
    return n + m;
};
var func1 = function (n, m) {
    return String(n * m);
};
var func2 = function (n, m) {
    return (n * m);
};
// custom type data using in fun as a argument
function login(playerData) {
    return playerData;
}
console.log(login({ firstName: "Abhnav", lastName: "bhardwaaj", age: 20, isPresent: true, _id: 90 }));
