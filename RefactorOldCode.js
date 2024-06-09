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
        // cell += char;
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
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Parse the CSV string
parseCSV(csvString);
