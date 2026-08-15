/*
1. Object 
2. Object.keys()
3. Object.values()
4. Object.entries()
5. Object comparision using custom function 

*/

const user1 = {
    email: "aashu@example.com",
    name: {nickname:"Aashu", fullname:"Aashutosh"},
    age: 25,
}

const user2 = {
    name: {nickname:"shiv", fullname:"Aashutosh"},
    age: 25,
    email: "aashu@example.com"
}

const user3 ={name:'aashu', age:50}

// console.log(Object.keys(user1), Object.values(user2)); // Output: [ 'email', 'name', 'age' ] [ 'name', 'age', 'email' ]

console.log(Object.entries(user3));
console.log(Object.keys(user3));

function compareObject (user1, user2){
    if(Object.keys(user1).length !== Object.keys(user2).length) return false;

    for(let key in user1){
        if(isValueArrayOrObject(user1[key]) && isValueArrayOrObject(user2[key])){
            return compareObject(user1[key], user2[key]);
        }
        
        if(user1[key]!==user2[key]){
            return false;
        }
    }
    return true;

}

function isValueArrayOrObject(value){
    if(typeof value === 'object'){
        return true;
    }
    return false;
}
console.log(compareObject(user1,user2)); // Output: false
