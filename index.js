"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string method
var name = "farhan baber";
console.log(name);
// number method
var age = 17;
console.log(age);
// boolean method
var isCorrrect = true;
console.log(isCorrrect);
// any method
var num = "allow everything";
console.log(num);
// unknow method
var user = "person";
console.log(user);
if (typeof user === "string") {
    console.log(user.toUpperCase());
}
// unknow method
var email = "api";
if (typeof email === "string") {
    console.log(email.toUpperCase());
}
else if (typeof email === "number") {
    console.log(email.toFixed(2));
}
else {
    console.log("soory someis went wrong");
}
// unknoow method
var calabrity = "farhan";
if (typeof calabrity === "string") {
    console.log(calabrity.toUpperCase());
}
else if (typeof calabrity === "number") {
    console.log(calabrity.toFixed(2));
}
// null method
var empty = null;
console.log(empty);
// null ful method
var method = null;
method = 12;
console.log(method);
// arry method
var marks = [10, 20, 30];
console.log(marks);
// professinal method array
var fruits = ["Apple", "Banana", "kiwi"];
console.log(fruits);
