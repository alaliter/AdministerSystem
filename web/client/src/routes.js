import Base from './Base/Base';
import App from './App/App';

import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';

import News from './News/News';
import Friends from './Friends/Friends';
import Reviews from './Reviews/Reviews';

import Auth from './Auth/Auth';


const routes = {
  component: App,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        callback(null, Base);
      }
    },
    {
      //TODO: add Auth
      path: '/news',
      component: News
    },
    {
      //TODO: add Auth
      path: '/friends',
      component: Friends
    },
       //TODO: add Auth
      path: '/reviews',
      component: Reviews
    },
    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        replace('/');
      }
    }
  ]
};

export default routes;
