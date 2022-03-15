const myConstant = 10;
console.log(myConstant);

let myVariable = "Hello world";
console.log(myVariable);

const myArray = ["a", "b","c", "d", "e"];
for(let i=0;i<myArray.length;i++){
  console.log(myArray[i]);
}
myArray.forEach((alphabet)=>{
  console.log(alphabet);
})

const animal = {
  type: "Cat",
  name: "Meep",
}
const {type, name} = animal;

// To run on node run the following command:
// node script.js