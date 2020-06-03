import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação mo back-end

// POST http://localhost:3333/users -> Criar um usuário
// GET http://localhost:3333/users -> Listar Usuários
// GET http://localhost:3333/users/5 -> Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rotageralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// knex: uma biblioteca para ajudar a escrever dados de uma tabela de banco dados da aplicação
// Exemplo: knex('users').where('name', 'Diego').select('*')


app.listen(3333);