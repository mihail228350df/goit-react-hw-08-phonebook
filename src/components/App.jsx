import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './PrivateRout/PrivateRout';
import PublicRoute from './PublicRoute/PublicRoute';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isRefreshingUser ? (
        <h1>REFRESHING......</h1>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}