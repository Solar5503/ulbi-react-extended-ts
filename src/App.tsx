import Layout from 'antd/es/layout'
import { Content } from 'antd/es/layout/layout'
import './App.css'
import Navbar from './components/Layout/Navbar'
import AppRouter from './router/AppRouter'

function App() {
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
