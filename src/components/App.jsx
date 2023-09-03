import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import NotFound from 'pages/NotFound';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
           <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;


