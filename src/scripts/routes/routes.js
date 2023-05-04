import Home from '../views/page/home';
import Detail from '../views/page/detail';
import Favorite from '../views/page/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
