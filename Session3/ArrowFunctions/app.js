
var square = x=> x*x;
console.log(square(9));

var user = {
    name: "Andrew",
    sayHi:()=>{
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    },
    sayHiAgain(){
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
}

user.sayHi(1,2,3,4);

//user.sayHiAgain(1,2,3,4);