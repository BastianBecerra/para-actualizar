/*const request = require('supertest');
const app = require('../index');
const { Pool } = require('pg');
// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce',
  password: 'desafiolatam279',
  port: 5432,
});
// Configuración de Jest
beforeAll(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    )
  `);
});
afterAll(async () => {
  await pool.query(`
    DROP TABLE IF EXISTS users
  `);
  pool.end();
});
// Pruebas con Jest y Supertest
describe('Users API', () => {
  test('GET /users should return an empty array', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
  test('POST /users should create a new user', async () => {
    const newUser = { name: 'John Doe', email: 'johndoe@example.com' };
    const response = await request(app).post('/users').send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
  });
  test('GET /users should return an array with one user', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0].name).toBe('John Doe');
    expect(response.body[0].email).toBe('johndoe@example.com');
  });
  test('PUT /users/:id should update an existing user', async () => {
    const newUser = { name: 'Jane Doe', email: 'janedoe@example.com' };
    const response1 = await request(app).get('/users');
    const userId = response1.body[0].id;
    const response2 = await request(app)
      .put(`/users/${userId}`)
      .send(newUser);
    expect(response2.statusCode).toBe(200);
    expect(response2.body).toHaveProperty('id');
    expect(response2.body.name).toBe(newUser.name);
    expect(response2.body.email).toBe(newUser.email);
  });
  test('DELETE /users/:id should delete an existing user', async () => {
    const response1 = await request(app).get('/users');
    const userId = response1.body[0].id;
    const response2 = await request(app).delete(`/users/${userId}`);
    expect(response2.statusCode).toBe(204);
    const response3 = await request(app).get('/users');
    expect(response3.body.length).toBe(0);
  });
});
*/



const request = require("supertest");
const server = require("../index");


describe("CRUD Operations for products =)!!", () => {
    it("Obteniendo un statusCode 200 =)!! de un Arreglo con 1 Objeto mínimo =)!!", async () => {
        const response = await request(server).get("/obtener").send()
        const { body } = await request(server).get("/cafes").send()
        const coffees = body
        const coffee = {"id": 1, "nombre": "Cortado"}     
        const status = response.statusCode
        expect(status).toBe(200)
        expect(coffees).toBeInstanceOf(Array)
        expect(coffees).toContainEqual(coffee)
    })
    it("Obteniendo un 404 =)!! Cuando borramos un un Producto que no Existe =)!!", async () => {

        const jwt = "token"
        const id = new Date()
        const response = await request(server)
            .delete(`/cafes/${id}`)
            .set("Authorization", jwt)
            .send()
        const status = response.statusCode
        expect(status).toBe(404)
    })
    it("Agregando un Nuevo Usuario =)!!, para Devolver un Código 201 =)!!", async () => {
        const users = { nombre: "New Usuario =)!!" };
        const { statusCode: status } = await request(server)
          .post("/usuarios")
          .send(users);
        expect(status).toBe(201);
      });
    it("Probando Error 400 con PUT, al Actualizar un Café, Enviando un ID diferente al ID dentro del Payload del Café =)!!", async (id = 3) => {
        const coffee = {id: 7, nombre : "Good Coffeee =)!!"}
        const res = await request(server).put(`/cafes/${id}`).send(coffee)
        const status = res.statusCode
        expect(status).toBe(400)
    })
});