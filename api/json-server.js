import jsonServer from 'json-server';
import path from 'path';
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, '../../db.json'))
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
	"/api/*": "/$1"
}))
server.listen(3000, () => {
	console.log('JSON server is running')
})
server.use(router);

module.exports = server