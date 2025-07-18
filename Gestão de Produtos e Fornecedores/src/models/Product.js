const db = require('../database/db');

const Product = {
  getAll: () => new Promise((resolve, reject) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }),
  getById: (id) => new Promise((resolve, reject) => {
    db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  }),
  create: (data) => new Promise((resolve, reject) => {
    db.run('INSERT INTO products (name, price) VALUES (?, ?)', [data.name, data.price], function(err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  }),
  update: (id, data) => new Promise((resolve, reject) => {
    db.run('UPDATE products SET name = ?, price = ? WHERE id = ?', [data.name, data.price, id], function(err) {
      if (err) reject(err);
      else resolve();
    });
  }),
  delete: (id) => new Promise((resolve, reject) => {
    db.run('DELETE FROM products WHERE id = ?', [id], function(err) {
      if (err) reject(err);
      else resolve();
    });
  })
};

module.exports = Product; 