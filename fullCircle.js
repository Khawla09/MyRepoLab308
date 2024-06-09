function transformToCsv(arr) {
  // const arrayOfArrays = data.map(obj => Object.values(obj));
  const del = ",";
  const table = [];
  if (arr.length === 0) {
    return "";
  }
  //extract headers
  const headers = Object.keys(arr[0]);
  const valuesArr = arr.map((obj) => Object.values(obj));
  valuesArr.unshift(headers);
  //   console.log(valuesArr[0][0].toUpperCase());
  // console.log();
  for (let i = 0; i < valuesArr.length; i++) {
    table.push(valuesArr[i].join());
  }
  const finalCsv = table.join("\\n");
  return finalCsv;
}

let myArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
console.log(transformToCsv(myArray));
//should become
//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
