const fs = require("fs");

// Read all Menus
function getPermanentListMenus() {
  const listMenuAll = fs.readFileSync("./data.json", "utf-8");
  return JSON.parse(listMenuAll);
}

console.log("data", getPermanentListMenus());

// Read all Menus with status true
function getListMenus() {
  const menus = getPermanentListMenus();
  const menusFiltered = menus.filter((menu) => {
    return menu.status !== false;
  });
  console.log("List menu yang tersedia: ", menusFiltered);
}

getListMenus();

// Read detail Menu with status true
function getDetailMenu(id) {
  const menus = getPermanentListMenus();
  menus.forEach((menu) => {
    if (menu.id === id && menu.status === true) {
      console.log("Ini adalah menu: ", menu);
    }
  });
}

getDetailMenu(4);

// Create new menu
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

// Delete and Update status of Menu by ID
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

// Update Price Menu by id
function updatePriceMenu(id, price) {
  const menus = getPermanentListMenus();
  menus.forEach((menu) => {
    if (menu.id === id) {
      menu.price = price;
    }
  });
  fs.writeFileSync("./data.json", JSON.stringify(menus));
  menus.forEach((menu) => {
    if (menu.id === id && menu.status === true) {
      console.log("Ini adalah harga menu terbaru: ", menu);
    }
  });
}

updatePriceMenu(2, 14000);

// Update Name Menu by id
function updatePriceMenu(id, name) {
  const menus = getPermanentListMenus();
  menus.forEach((menu) => {
    if (menu.id === id) {
      menu.name = name;
    }
  });
  fs.writeFileSync("./data.json", JSON.stringify(menus));
  menus.forEach((menu) => {
    if (menu.id === id && menu.status === true) {
      console.log("Ini adalah nama menu terbaru: ", menu);
    }
  });
}

updatePriceMenu(4, "Mie goreng");

// Update Quantity Menu by id
function updatePriceMenu(id, qty) {
  const menus = getPermanentListMenus();
  menus.forEach((menu) => {
    if (menu.id === id) {
      menu.quantity = qty;
    }
  });
  fs.writeFileSync("./data.json", JSON.stringify(menus));
  menus.forEach((menu) => {
    if (menu.id === id && menu.status === true) {
      console.log("Ini adalah jumlah porsi terbaru: ", menu);
    }
  });
}

updatePriceMenu(5, 3);
