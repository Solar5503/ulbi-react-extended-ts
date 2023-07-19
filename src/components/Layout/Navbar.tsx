import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { Menu, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { useNavigate } from 'react-router-dom'
import { useTypedActions, useTypedSelector } from '../../hooks/redux'
import { RouteNames } from '../../router'

const Navbar = () => {
  const navigate = useNavigate()
  const { isAuth, user } = useTypedSelector((state) => state.authReducer)
  const { logout } = useTypedActions()

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu
              theme="dark"
              mode="horizontal"
              items={[
                {
                  key: 'logout',
                  label: 'Logout',
                  icon: <LogoutOutlined />,
                  onClick: () => logout(),
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
