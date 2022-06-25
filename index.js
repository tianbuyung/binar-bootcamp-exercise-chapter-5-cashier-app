const fs = require("fs");

function getPermanentListMenus() {
  const listMenuAll = fs.readFileSync("./data.json", "utf-8");
  return JSON.parse(listMenuAll);
}

console.log("data", getPermanentListMenus());

function getListMenus() {
  const menus = getPermanentListMenus();
  const menusFiltered = menus.filter((menu) => {
    return menu.status !== false;
  });
  console.log("List menu yang tersedia: ", menusFiltered);
}

getListMenus();

function getDetailMenu(id) {
  const menus = getPermanentListMenus();
  menus.forEach((menu) => {
    if (menu.id === id && menu.status === true) {
      console.log("Ini adalah menu: ", menu);
    }
  });
}

getDetailMenu(4);

function addMenu(data) {
  const menus = getPermanentListMenus();
  menus.push(data);
  menus[menus.length - 1].id = menus[menus.length - 2].id + 1;
  menus[menus.length - 1].status = true;
  fs.writeFileSync("./data.json", JSON.stringify(menus));
  const menusFiltered = menus.filter((menu) => {
    return menu.status !== false;
  });
  console.log("Menu baru adalah: ", menusFiltered);
}

addMenu({
  name: "nasi ayam bakar",
  price: 23000,
  quantity: 3,
});

function deleteMenu(id) {
  const menus = getPermanentListMenus();
  menus.forEach((menu) => {
    if (menu.id === id) {
      menu.status = false;
    }
  });
  fs.writeFileSync("./data.json", JSON.stringify(menus));
  const menusFiltered = menus.filter((menu) => {
    return menu.status !== false;
  });
  console.log("Sisa menu yang tersedia adalah: ", menusFiltered);
}

deleteMenu(1);
