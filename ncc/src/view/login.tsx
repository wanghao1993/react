import { Button, Form, Input } from 'antd'
import React from 'react'

const Login: React.FC = () => {
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log('Success:', values)
  } 
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const reset = () => {
    form.resetFields()
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>

        <Button onClick={() => reset()}>重置</Button>
      </Form.Item>
    </Form>
  )
}

export default Login
