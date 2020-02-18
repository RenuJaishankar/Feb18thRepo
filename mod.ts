// this is an interface, an interface is sort of like a contract for your classes and objects
// interfaces describes properties but not the implementation, so functions for example are empty
let user :string = "Mike"
interface user {
    name?:string
    age?:number
    loggedIn:boolean
    getStatus: () => boolean
}
// this is a class, a class is just syntatic sugar for an immediately invoked function expression (IIFE)
// this class implements the user interface so it needs to utitlize those properties
class Admin implements user {
    name:string
    age:number
    loggedIn:boolean
  
    constructor(name:string, age:number,loggedIn:boolean){
        this.name= name
        this.age = age
        this.loggedIn = loggedIn
    }
 getStatus(){
     console.log(this.loggedIn)
     return this.loggedIn
 }


}

let Mike=new Admin("Mike",34,true)
const myFunc = () =>{
 
 //console.log(Mike)
 Mike.getStatus()

}

const getelement = () =>{
console.log(document.getElementById('myid').innerHTML="This text will display in output")


}

const gettagname = () =>{
    let myTag = document.getElementsByTagName("h1")
   
console.log(myTag)
}

const getclassname = () =>{
    let otherQ=document.querySelectorAll('.myclass')
//console.log(otherQ)
//console.log(otherQ)
//otherQ.innerHTML = "this works"  //selects the first element in the query
otherQ.forEach(el => el.innerHTML="this works") 


}