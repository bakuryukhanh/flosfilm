import { Tabs, Row, Typography } from 'antd';
import { Link } from 'umi';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import './styles.less';

const { TabPane } = Tabs;
function callback(key) {}

const AuthenticationPage = (prop) => {
  return (
    <div className="container">
      <Row>
        <Link to="/">
          <Typography.Title level={3} style={{ paddingTop: '20px' }}>
            FlosFilm
          </Typography.Title>
        </Link>
      </Row>

      <Row
        type="flex"
        justify="center"
        style={{ minHeight: '100vh', marginTop: '50px' }}
      >
        <Tabs
          onChange={callback}
          type="card"
          centered
          style={{ width: '30%' }}
          tabBarStyle={{ color: 'black' }}
        >
          <TabPane tab="Đăng nhập" key="1">
            <LoginForm />
          </TabPane>
          <TabPane tab="Đăng ký" key="2">
            <RegisterForm />
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default AuthenticationPage;
