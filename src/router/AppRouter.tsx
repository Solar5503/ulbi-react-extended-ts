import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames, privateRoutes, publicRoutes } from '.'

const AppRouter = () => {
  const auth = false

  return (
    <Routes>
      {auth
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
          auth ? (
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
