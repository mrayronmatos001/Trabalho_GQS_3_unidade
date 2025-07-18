const request = require('supertest');
const app = require('../../app');
const db = require('../../src/database/db');

describe('API Fornecedores', () => {
  let id;

  afterAll(done => {
    db.run('DELETE FROM suppliers');
    done();
  });

  it('POST /fornecedores - deve criar um fornecedor', async () => {
    const res = await request(app)
      .post('/fornecedores')
      .send({ name: 'Fornecedor Teste', contact: '11-9999-9999' });
    expect(res.statusCode).toBe(302);
  });

  it('GET /fornecedores - deve listar fornecedores', async () => {
    const res = await request(app).get('/fornecedores');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Fornecedor Teste');
  });

  it('GET /fornecedores/:id - deve retornar 404 para id inexistente', async () => {
    const res = await request(app).get('/fornecedores/9999');
    expect(res.statusCode).toBe(404);
  });

  it('POST /fornecedores/:id - deve atualizar um fornecedor', async () => {
    // Cria fornecedor para editar
    const create = await request(app).post('/fornecedores').send({ name: 'Editar', contact: '00-0000-0000' });
    const list = await request(app).get('/fornecedores');
    const match = /fornecedores\/(\d+)\/editar/.exec(list.text);
    id = match ? match[1] : null;
    const res = await request(app)
      .post(`/fornecedores/${id}`)
      .send({ name: 'Editado', contact: '22-2222-2222' });
    expect(res.statusCode).toBe(302);
  });

  it('POST /fornecedores/:id/delete - deve deletar um fornecedor', async () => {
    const res = await request(app).post(`/fornecedores/${id}/delete`);
    expect(res.statusCode).toBe(302);
  });
}); 