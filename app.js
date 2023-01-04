const usersList = require("./data.json");
const fs = require("fs");

const FILE_NAME = "parsedAdress";
// What you put in the variable 'result' is what will be writen in the file
// Change the variable FILE_NAME to create a new file with the result for each exercice
// Comment out your solution once it's done to keep it as a reference

const result = usersList.map(({ first_name, last_name, address }) => ({
  name: `${first_name} ${last_name}`,
  adress: `${address.street_address} ${address.zip_code} ${address.country}`
}));

fs.writeFile(`./results/${FILE_NAME}.json`, JSON.stringify(result, null, 4), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written succefully");
  }
});

//Exercice 1
//const result = usersList.filter((user) => user.subscription.plan === "Bronze");

//Exercice 2
// const result = usersList.map((user) => {
//   const url = new URL(user.avatar)
//   return {
//     id: user.id,
//     avatarId: url.pathname.replace(".png", "").replace("/", ""),
//   };

// });

