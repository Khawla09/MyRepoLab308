function parseCSV(csvString) {
  // Split the CSV string into rows based on the "\r\n" sequence
  const rows = csvString.split("\n");

  // Loop through each row
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    let cell = "";
    let cellCount = 0;

    // Loop through each character in the row
    for (let j = 0; j < row.length; j++) {
      const char = row[j];

      // If the character is a comma, log the current cell and move to the next one
      if (char === ",") {
        cell = "";
        cellCount++;
        continue;
      }
      // If the character is not a comma, append it to the current cell
      else {
        cell += char;
      }
    }

    // Log the last cell

    // If the row has exactly 4 cells, log the entire row
    if (cellCount === 3) {
      console.log(row);
    } else {
      console.log("Invalid number of cells in row");
    }
  }
}

// Example CSV string
const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Parse the CSV string
parseCSV(csvString);
