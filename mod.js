// this is an interface, an interface is sort of like a contract for your classes and objects
// interfaces describes properties but not the implementation, so functions for example are empty
var user = "Mike";
// this is a class, a class is just syntatic sugar for an immediately invoked function expression (IIFE)
// this class implements the user interface so it needs to utitlize those properties
var Admin = /** @class */ (function () {
    function Admin(name, age, loggedIn) {
        this.name = name;
        this.age = age;
        this.loggedIn = loggedIn;
    }
    Admin.prototype.getStatus = function () {
        console.log(this.loggedIn);
        return this.loggedIn;
    };
    return Admin;
}());
var Mike = new Admin("Mike", 34, true);
var myFunc = function () {
    //console.log(Mike)
    Mike.getStatus();
};
var getelement = function () {
    console.log(document.getElementById('myid').innerHTML = "This text will display in output");
};
var gettagname = function () {
    var myTag = document.getElementsByTagName("h1");
    console.log(myTag);
};
var getclassname = function () {
    var otherQ = document.querySelectorAll('.myclass');
    //console.log(otherQ)
    //console.log(otherQ)
    //otherQ.innerHTML = "this works"  //selects the first element in the query
    otherQ.forEach(function (el) { return el.innerHTML = "this works"; });
};
