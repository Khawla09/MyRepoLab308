function getArray(str) {
  let newStrArr = str.split("\n");
  //   console.log(newStrArr);

  let newArr = [];

  for (let i = 0; i < newStrArr.length; i++) {
    newArr.push(newStrArr[i].split(","));
  }
  console.log(newArr);
}

getArray(
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
);
