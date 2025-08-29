// string method
let name : string = "farhan baber"
console.log(name);

// number method
let age : number = 17;
console.log(age);

// boolean method
let isCorrrect : boolean = true
console.log(isCorrrect);

// any method
let num : any = "allow everything"
console.log(num);

// unknow method

let user : unknown = "person"
console.log(user);
if (typeof user === "string") {
    console.log(user.toUpperCase());
}
// unknow method

let email : unknown = "api"
if (typeof email === "string") {
    console.log(email.toUpperCase());
    
}else if (typeof email === "number"){
console.log(email.toFixed(2));

}else{
    console.log("soory someis went wrong");
    
}
// unknoow method
let calabrity : unknown = "farhan"
if (typeof calabrity === "string") {
    console.log(calabrity.toUpperCase());
}else if (typeof calabrity === "number"){
    console.log(calabrity.toFixed(2));
    
}
// null method
let empty : null = null
console.log(empty);

// null ful method

let method : number | null = null;
method = 12
console.log(method);


// arry method
let marks : number [] = [10,20,30]
console.log(marks);
// professinal method array
let fruits : string []= ["Apple", "Banana", "kiwi"]
console.log(fruits);



export{

}