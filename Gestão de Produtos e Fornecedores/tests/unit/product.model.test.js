const Product = require('../../src/models/Product');
const db = require('../../src/database/db');

describe('Model Product', () => {
  let id;

  afterAll(done => {
    db.run('DELETE FROM products');
    done();
  });

  it('deve criar, buscar, atualizar e deletar um produto', async () => {
    id = await Product.create({ name: 'Unit Test', price: 1 });
    let prod = await Product.getById(id);
    expect(prod.name).toBe('Unit Test');
    await Product.update(id, { name: 'Unit Test Edit', price: 2 });
    prod = await Product.getById(id);
    expect(prod.name).toBe('Unit Test Edit');
    await Product.delete(id);
    prod = await Product.getById(id);
    expect(prod).toBeUndefined() || expect(prod).toBeFalsy();
  });
}); 