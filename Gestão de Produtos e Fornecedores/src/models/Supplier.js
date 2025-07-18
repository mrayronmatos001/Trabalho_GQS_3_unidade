const db = require('../database/db');

const Supplier = {
  getAll: () => new Promise((resolve, reject) => {
    db.all('SELECT * FROM suppliers', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }),
  getById: (id) => new Promise((resolve, reject) => {
    db.get('SELECT * FROM suppliers WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  }),
  create: (data) => new Promise((resolve, reject) => {
    db.run('INSERT INTO suppliers (name, contact) VALUES (?, ?)', [data.name, data.contact], function(err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  }),
  update: (id, data) => new Promise((resolve, reject) => {
    db.run('UPDATE suppliers SET name = ?, contact = ? WHERE id = ?', [data.name, data.contact, id], function(err) {
      if (err) reject(err);
      else resolve();
    });
  }),
  delete: (id) => new Promise((resolve, reject) => {
    db.run('DELETE FROM suppliers WHERE id = ?', [id], function(err) {
      if (err) reject(err);
      else resolve();
    });
  })
};

module.exports = Supplier; 