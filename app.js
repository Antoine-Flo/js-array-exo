const data = require("./data.json");
const fs = require("fs");

const FILE_NAME = "bronze";
// What you put in the variable 'result' is what will be writen in the file
// Change the variable FILE_NAME to create a new file with the result for each exercice
// Comment out your solution once it's done to keep it as a reference

// Example :
// keep only the id and the username
const result = data.map((x) => {
  return {
    id: x.id,
    username: x.username,
  };
});

fs.writeFile(`./results/${FILE_NAME}.json`, JSON.stringify(result), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written succefully");
  }
});
