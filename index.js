const fs = require("fs");

function getListMenu() {
  const listMenu = fs.readFileSync("./data.json", "utf-8");
  return JSON.parse(listMenu);
}

console.log("data", getListMenu());
