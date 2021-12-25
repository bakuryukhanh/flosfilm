import { Form, Input, Button, Checkbox, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import FloatLabel from '@/components/FloatLabel';
import { useState } from 'react';
import './styles.less';
import { history } from 'umi';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    history.push('/registerSuccess');
  };

  return (
    <Form
      name="registerForm"
      className="register-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <FloatLabel label="Họ và tên" name="name" input={name}>
        <Form.Item
          name="nameItem"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên của bạn!',
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      <FloatLabel label="Email" name="email" input={email}>
        <Form.Item
          name="emailItem"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email của bạn!',
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      <FloatLabel label="Mật khẩu" name="password" input={password}>
        <Form.Item
          name="passwordItem"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu của bạn!',
            },
          ]}
        >
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
      </FloatLabel>
      <Form.Item>
        <Row justify="space-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Nhận thông báo về phim mới nhất</Checkbox>
          </Form.Item>
        </Row>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ color: 'black' }}
          block
        >
          <b>Đăng ký</b>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
