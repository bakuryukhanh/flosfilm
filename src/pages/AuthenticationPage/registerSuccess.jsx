import { Result, Button, Row, Typography } from 'antd';
import { Link } from 'umi';
import './styles.less';

const RegisterSuccess = () => {
  return (
    <div className="container">
      <Row>
        <Link to="/">
          <Typography.Title level={3} style={{ paddingTop: '20px' }}>
            FlosFilm
          </Typography.Title>
        </Link>
      </Row>
      <Result
        status="success"
        title="Đăng ký thành công"
        subTitle="Vui lòng kiểm tra email của bạn và xác thực tài khoản!"
        extra={[
          <Link to="/authentication">
            <Button type="primary" key="login" style={{ color: 'black' }}>
              Đăng nhập
            </Button>
          </Link>,
          <Link to="/">
            <Button key="home">Về trang chủ</Button>
          </Link>,
        ]}
      />
    </div>
  );
};

export default RegisterSuccess;
