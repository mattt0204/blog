import Router from 'koa-router';
import * as postsCtrl from './post.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
const posts = new Router();
posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();

post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.get('/', postsCtrl.read);

posts.use('/:id', postsCtrl.getPostById, post.routes());
export default posts;
