//typescript is a supreset of Javascript
//all javascript is legal typescript
//but, not all typescript is legal javascript
//typically typescript code will compile to javascript
//You would then use the .js file that gets rendered.
class Animal {
    name:string
    color:string
    isAnAnimal(){
        return true
    }
}

//this interface only cares about satisfying the contract
//the contract means you need to add the interface properties into your class.
interface LaysEgg{
    layAnEgg()
}

class Duck extends Animal implements LaysEgg{
    wings = true
    quack(){
        return'Duck goes quack.'
    }
    layAnEgg(){
        return 'this duck laid an egg!'
    }
}
//constructing new objects with my defined classes
//think of Duck and Chicken as user-created types.
//note how my laysegg method is different here
//interfaces do not care about implementation,only that you satisfy the contract.
class Chicken extends Animal implements LaysEgg{
    wings=true
    layAnEgg(){
        return 'this chicken laid eggs'
    }

}

class Mouse extends Animal{
name:string
whiskersAmount:number
tailColor:string
constructor(w:number,t:string){
super()
this.whiskersAmount=w
this.tailColor=t
}
squeek(){
    return 'mouse goes squeek!'
}
}
//constructing new objects with my defined classes
//think of duck and chicken as user-created-types
const daffy = new Duck()
const foghorn = new Chicken()

console.log(daffy.quack())
console.log(daffy.wings)
console.log(daffy.isAnAnimal())
const mickey = new Mouse(3, 'pink')

// console.log(daffy.layAnEgg())
// console.log(foghorn.layAnEgg())
console.log(mickey.tailColor)