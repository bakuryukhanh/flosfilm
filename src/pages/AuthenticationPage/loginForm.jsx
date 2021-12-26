import { Form, Input, Button, Checkbox, Row, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import FloatLabel from '@/components/FloatLabel';
import { useState } from 'react';
import './styles.less';
import { data } from '../../../mock/data.js';
import { history } from 'umi';

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = (values) => {
    let isExist = false;
    data.users.forEach((user) => {
      if (user.userEmail === values.emailOrPhone) {
        isExist = true;
        if (user.userPassword === values.password) {
          localStorage.setItem('userName', user.userName);
          localStorage.setItem('isLogin', true);
          history.push('/');
        } else {
          message.error('Mật khẩu sai vui lòng nhập lại');
        }
      }
    });

    if (!isExist) {
      message.error('Tài khoản của bạn không tồn tại, vui lòng đăng ký');
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <FloatLabel
        label="Email hoặc số điện thoại"
        name="emailOrPhoneLabel"
        input={emailOrPhone}
      >
        <Form.Item
          name="emailOrPhone"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập email hoặc số điện thoại của bạn!',
            },
          ]}
        >
          <Input
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </Form.Item>
      </FloatLabel>
      <FloatLabel label="Mật khẩu" name="passwordLabel" input={password}>
        <Form.Item
          name="password"
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
            <Checkbox>Lưu mật khẩu</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="" style={{ color: '#fed530' }}>
            Quên mật khẩu?
          </a>
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
          <b>Đăng nhập</b>
        </Button>
      </Form.Item>
      <Form.Item style={{ textAlign: 'center' }}>Hoặc đăng nhập với</Form.Item>
      <Form.Item>
        <Row justify="center" align="middle">
          <a style={{ marginRight: '50px' }}>
            <img
              src="https://freesvg.org/img/1534129544.png"
              width={40}
              height={40}
            />
          </a>
          <a>
            <img
              src="https://www.mhpcolorado.org/wp-content/uploads/2021/02/TS-FB-Icon.png"
              width={50}
              height={50}
            />
          </a>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
