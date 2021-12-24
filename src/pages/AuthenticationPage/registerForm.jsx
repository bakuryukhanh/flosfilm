import { Form, Input, Button, Checkbox, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import FloatLabel from '@/components/FloatLabel';
import { useState } from 'react';
import './styles.less';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
      <Form.Item
        name="nameItem"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên của bạn!',
          },
        ]}
      >
        <FloatLabel label="Nhập tên của bạn" name="name" input={name}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FloatLabel>
      </Form.Item>
      <Form.Item
        name="emailItem"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập email của bạn!',
          },
          {
            required: true,
            type: 'email',
            message: 'Email bạn nhập không đúng, vui lòng nhập lại!',
          },
        ]}
      >
        <FloatLabel label="Nhập email của bạn" name="email" input={email}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FloatLabel>
      </Form.Item>
      <Form.Item
        name="passwordItem"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu của bạn!',
          },
        ]}
      >
        <FloatLabel
          label="Nhập mật khẩu của bạn"
          name="password"
          input={password}
        >
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatLabel>
      </Form.Item>
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
