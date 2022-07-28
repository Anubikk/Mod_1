let myVar = "someValue"

let myArr = []
myArr.push("someData")
myArr.pop()

let myObj = {}

myArr[0] = "World"
console.log(myObj)


//OBJECTS

//Bracket Notation
let myUser= { //Object one
    "id": 0,
    "firstName": "Caleb",
    "lastName": "Braten"
}

let anotherUser = {//Object two
    "id": 1,
    "firstName": "Ryan",
    "lastName": "Webster"
}

let myUsers = [myUser, anotherUser]; //Collection of objects as an object.

let name = "lastName" //declaring a var to return last name as name. Keys should be strings when called unless declared into a var. for bracket notation.

console.log(myUsers[1][name])//prints anotherUser as [1] is second index of overall user object
                            //second bracket is calling key of lastName for the value of "webster"

//DOT Notation

let myUser= { //Object one
    "id": 0,
    "firstName": "Caleb",
    "lastName": "Braten"
}

let anotherUser = {//Object two
    "id": 1,
    "firstName": "Ryan",
    "lastName": "Webster"
    "run": (dest) => console.log("We're running" + dest) //Declaring a function as a key value. in function expression format
}

let myUsers = [myUser, anotherUser]; //Collection of objects as an object.

let name = "lastName"
console.log(myUsers[1].id, myUsers[1][name])// myUser[1].id is dot notation for using key values as variables.

console.log(anotherUser.run("DisneyLand"))// runs the anon function assigned by "run" as a key to return the value of "we're Running"


console.log(Object.keys(anotherUser))//returns a new array with object keys. output = ["id, "firstName", lastName, "run"]

//Take aways for Objects

let newObj = {}//Empty obj
let newObjWithStuff = {
    "key": "someValue"//Obj with key/value pair
}

newObjWithStuf["key"]//read operation

newObjWithStuff["key"] = "newValue" //Write Operation

let myKeyVar = key
