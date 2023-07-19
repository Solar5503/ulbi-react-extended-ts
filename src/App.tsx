import Layout from 'antd/es/layout'
import { Content } from 'antd/es/layout/layout'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Layout/Navbar'
import { useTypedActions } from './hooks/redux'
import AppRouter from './router/AppRouter'

function App() {
  const { login } = useTypedActions()

  useEffect(() => {
    if (localStorage.getItem('auth'))
      login({
        username: localStorage.getItem('username') ?? '',
        password: '123',
      })
  }, [login])
  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  )
}

export default App
