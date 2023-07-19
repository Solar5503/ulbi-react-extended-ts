import { Button, Form, Input } from 'antd'
import { useTypedActions, useTypedSelector } from '../hooks/redux'
import { IUser } from '../models/IUser'
import { rules } from '../utils/rules'

const LoginForm = () => {
  const { login } = useTypedActions()
  const { error, isLoading } = useTypedSelector((state) => state.authReducer)

  const submitHandler = (values: IUser) => login(values)

  return (
    <Form name="login" labelCol={{ span: 8 }} onFinish={submitHandler}>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
      {error && (
        <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
      )}
    </Form>
  )
}

export default LoginForm
