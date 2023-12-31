import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames, privateRoutes, publicRoutes } from '.'
import { useTypedSelector } from '../hooks/redux'

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer)

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
      <Route
        path="*"
        element={
          isAuth ? (
            <Navigate to={RouteNames.EVENT} />
          ) : (
            <Navigate to={RouteNames.LOGIN} />
          )
        }
      />
    </Routes>
  )
}

export default AppRouter
