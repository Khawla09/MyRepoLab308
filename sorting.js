function sorting(arr) {
  arr.pop();
  let obj1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  let obj2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  arr.splice(1, 0, obj1);
  arr.splice(arr.length, 0, obj2);

  let totalAge = 0;

  let arrLeng = arr.length;
  for (let i = 0; i < arrLeng; i++) {
    let age = Number(arr[i].age);
    totalAge = totalAge + age;
  }
  let avr = totalAge / arrLeng;
  console.log("Average of age is: " + avr);
  return arr;
}
let myArr = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
];

console.log(sorting(myArr));

//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n
//63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
