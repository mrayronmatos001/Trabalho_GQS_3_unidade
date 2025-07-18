const request = require('supertest');
const app = require('../../app');
const db = require('../../src/database/db');

describe('API Produtos', () => {
  let id;

  afterAll(done => {
    db.run('DELETE FROM products');
    done();
  });

  it('POST /produtos - deve criar um produto', async () => {
    const res = await request(app)
      .post('/produtos')
      .send({ name: 'Produto Teste', price: 10.5 });
    expect(res.statusCode).toBe(302); // Redireciona
  });

  it('GET /produtos - deve listar produtos', async () => {
    const res = await request(app).get('/produtos');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Produto Teste');
  });

  it('GET /produtos/:id - deve retornar 404 para id inexistente', async () => {
    const res = await request(app).get('/produtos/9999');
    expect(res.statusCode).toBe(404);
  });

  it('POST /produtos/:id - deve atualizar um produto', async () => {
    // Cria produto para editar
    const create = await request(app).post('/produtos').send({ name: 'Editar', price: 5 });
    const list = await request(app).get('/produtos');
    const match = /produtos\/(\d+)\/editar/.exec(list.text);
    id = match ? match[1] : null;
    const res = await request(app)
      .post(`/produtos/${id}`)
      .send({ name: 'Editado', price: 15 });
    expect(res.statusCode).toBe(302);
  });

  it('POST /produtos/:id/delete - deve deletar um produto', async () => {
    const res = await request(app).post(`/produtos/${id}/delete`);
    expect(res.statusCode).toBe(302);
  });
}); 