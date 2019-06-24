const Login = () => import('@/views/login/Index')

const getStaticRoutes = () => {
  const staticRoute = [
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
  return staticRoute
}

export default getStaticRoutes
