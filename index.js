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

function addMenu(data) {
  const menus = getListMenu();
  menus.push(data);
  menus.forEach((data, i) => {
    data.id = i + 1;
  });
  console.log("data", menus);
  fs.writeFileSync("./data.json", JSON.stringify(menus));
}

addMenu({
  name: "ketoprak",
  price: 13500,
  quantity: 4,
});
