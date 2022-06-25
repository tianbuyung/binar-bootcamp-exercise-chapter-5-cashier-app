const fs = require("fs");

function getListMenu() {
  const listMenu = fs.readFileSync("./data.json", "utf-8");
  return JSON.parse(listMenu);
}

console.log("data", getListMenu());

function getDetailMenu(id) {
  const menus = getListMenu();
  menus.forEach((menu) => {
    if (menu.id === id) {
      console.log(menu);
    }
  });
}

getDetailMenu(5);
