import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={PostPage} path={'/@:username/:postId'} />
      <Route component={LoginPage} path={'/login'} />
      <Route component={WritePage} path={'/write'} />
      <Route component={RegisterPage} path={'/register'} />
    </>
  );
};

export default App;
