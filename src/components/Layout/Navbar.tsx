import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { Menu, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../router'

const Navbar = () => {
  const navigate = useNavigate()
  const auth = false

  return (
    <Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: 'white' }}>Solar</div>
            <Menu
              theme="dark"
              mode="horizontal"
              items={[
                {
                  key: 'logout',
                  label: 'Logout',
                  icon: <LogoutOutlined />,
                  onClick: () => console.log('Log out'),
                },
              ]}
              selectable={false}
            />
          </>
        ) : (
          <Menu
            theme="dark"
            mode="horizontal"
            items={[
              {
                key: 'login',
                label: 'Login',
                icon: <LoginOutlined />,
                onClick: () => navigate(RouteNames.LOGIN),
              },
            ]}
            selectable={false}
            disabledOverflow
          />
        )}
      </Row>
    </Header>
  )
}

export default Navbar
