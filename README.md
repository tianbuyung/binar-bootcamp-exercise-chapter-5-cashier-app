## Name

Cashier App

## Description

This app is built to implement CRUD in Node JS - Chapter 5 Topic 1

## Installation

Clone this repository.

```
git clone https://gitlab.com/binar-exercise-fsw23/cashier-app.git
```

Mount the directory using terminal.

```
cd cashier-app
```

Run these comment.

1: Get list of menu

```sh
   node index.js 1
```

2: Get detail menu by id

```sh
   node index.js 2 [id]
```

Change [id] with number like 1, 2, 3 or others, e.g:
`node index.js 2 1`

3: Add new menu

```sh
   node index.js 3 [menu_name] [menu_price] [menu_quantity]
```

Change [menu_name] with new name like french fresh, coffee or others,
Change [menu_price] with new price like 20 for $20, 3000 for Rp.3000 or others,
Change [menu_quantity] with new quantity like 1, 2, 3 or others,
e.g:
`node index.js 3 coffee 3500 5`

4: Delete menu

```sh
   node index.js 4 [id]
```

Change [id] with number like 1, 2, 3 or others, e.g:
`node index.js 4 1`

5: Update menu price by id

```sh
   node index.js 5 [id] [new_menu_price]
```

Change [id] with number like 1, 2, 3 or others,
Change [new_menu_price] with new price like 20 for $20, 3000 for Rp.3000 or others, e.g:
`node index.js 5 5 10000`

6: Update menu name by id

```sh
   node index.js 6 [id] [new_menu_name]
```

Change [id] with number like 1, 2, 3 or others,
Change [new_menu_name] with new name like french fresh, coffee or others, e.g:
`node index.js 6 6 "Nasi Telor Ceplok"`

7: Update menu quantity by id

```sh
   node index.js 7 [id] [new_menu_quantity]
```

Change [id] with number like 1, 2, 3 or others,
Change [new_menu_quantity] with new quantity like 1, 2, 3 or others, e.g:
`node index.js 6 6 2`

## Authors and acknowledgment

Septian Maulana

## License

MIT License
