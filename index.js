const Koa = require('koa');
const Router = require('@koa/router');

const script = require('./script');

const PORT = 3000;

const app = new Koa();
const router = new Router();

router.get('/feedback-modal', (ctx, next) => {

  // some token validations
  if (ctx.request.query.token !== '75e3c671-91ed-4e91-a858-e3e7bdb9a090') {
    ctx.throw(403, 'Please provide a valid token');
  }

  ctx.set('Content-Type', 'text/javascript');
  ctx.body = `(${script.toString()})()`;
  ctx.status = 200;
  next();
});

app.use(router.routes());

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});
