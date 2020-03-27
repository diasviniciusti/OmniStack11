const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const route = express.Router();

/**
* Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma infomação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Formas de SQL para JS
  * Drivers: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

route.post('/sessions', SessionController.create);

route.get('/ongs', OngController.index);
route.post('/ongs', OngController.create);

route.get('/profile', ProfileController.index);

route.get('/incidents', IncidentController.index);
route.post('/incidents', IncidentController.create);
route.delete('/incidents/:id', IncidentController.delete);
module.exports = route;