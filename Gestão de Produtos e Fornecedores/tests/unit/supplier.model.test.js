const Supplier = require('../../src/models/Supplier');
const db = require('../../src/database/db');

describe('Model Supplier', () => {
  let id;

  afterAll(done => {
    db.run('DELETE FROM suppliers');
    done();
  });

  it('deve criar, buscar, atualizar e deletar um fornecedor', async () => {
    id = await Supplier.create({ name: 'Unit Test', contact: 'unit@teste.com' });
    let forn = await Supplier.getById(id);
    expect(forn.name).toBe('Unit Test');
    await Supplier.update(id, { name: 'Unit Test Edit', contact: 'edit@teste.com' });
    forn = await Supplier.getById(id);
    expect(forn.name).toBe('Unit Test Edit');
    await Supplier.delete(id);
    forn = await Supplier.getById(id);
    expect(forn).toBeUndefined() || expect(forn).toBeFalsy();
  });
}); 