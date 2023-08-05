// var user = { name: "mani", age: 5 };
// var user1 = { age: 5, name: "mani" };
// function isEqual(user,user1){
//     var userkeys = Object.keys(user);
//     var user1keys = Object.keys(user1);

// if(userkeys.length != user1keys.length){
//   return false;

// }
// for (var userkey of userkeys) {
//   if (user[userkey] != user1[userkey]){
//     return false;
//   }
// }
//  return true;
// }

// console.log(isEqual(user,user1));



let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
function isEqual(obj1,obj2){
    let obj1keys = Object.keys(obj1);
    let obj2keys = Object.keys(obj2);

if(obj1keys.length != obj2keys.length){
  return false;

}
for (var objkey of obj1keys) {
  if (obj1[objkey] != obj2[objkey]){
    return false;
  }
}
 return true;
}

console.log(isEqual(obj1,obj2));