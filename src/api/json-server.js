const jsonServer = require('json-server');
const path = require('path')
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, '../../db.json'))
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
	server(req, res);
};