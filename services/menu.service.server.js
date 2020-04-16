const menuDao = require('../data/daos/menu.dao.server');

const findAllMenus = () =>
    menuDao.findAllMenus();

const findMenuForRestaurant = (rid) =>
    menuDao.findMenuForRestaurant(rid);

const createMenu = (menu) =>
    menuDao.createMenu(menu);

const deleteMenu = (mid) =>
    menuDao.deleteMenu(mid);

const addItem = (mid, iid) =>
    menuDao.addItem(mid, iid);

const deleteItem = (mid, iid) =>
    menuDao.deleteItem(mid, iid);

module.exports = {
  findAllMenus,
  findMenuForRestaurant,
  createMenu,
  deleteMenu,
  addItem,
  deleteItem
}
