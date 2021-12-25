import { SearchOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import { Col, Avatar, Input, Row, Typography, Menu, Dropdown } from 'antd';
import { Link, NavLink } from 'umi';
import styles from './styles.less';
import './styles.less';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

export default function Header(props) {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('isLogin') == 'true',
  );
  const userName = localStorage.getItem('userName');

  function handleLogout() {
    setIsLogin(false);
    localStorage.setItem('isLogin', false);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/account">Cài đặt</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/choosePackage">Nâng cấp tài khoản</Link>
      </Menu.Item>
      <Menu.Item onClick={handleLogout}>
        <Link>Đăng xuất</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.header}>
      <div className="container">
        <Row gutter={[10, 10]} align="middle" justify="space-between">
          <Col span={3}>
            <Link to="/">
              <Typography.Title level={3} style={{ margin: '0' }}>
                FlosFilm
              </Typography.Title>
            </Link>
          </Col>
          <Col span={9}>
            <Row justify="space-around">
              <Col span={4}>
                <NavLink
                  exact
                  to="/"
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  Trang chủ <div className={styles.line} />
                </NavLink>
              </Col>
              <Col span={4}>
                <NavLink
                  to="/film-single"
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  Phim lẻ <div className={styles.line} />
                  <div className={styles.line} />
                </NavLink>
              </Col>
              <Col span={4}>
                <NavLink
                  to="/film-series"
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  Phim bộ <div className={styles.line} />
                </NavLink>
              </Col>
              <Col span={4}>
                <NavLink
                  to="/film-hot"
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  Phim hot <div className={styles.line} />
                </NavLink>
              </Col>
            </Row>
          </Col>
          <Col flex="auto" style={{ maxWidth: '300px' }}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Nhập từ khóa để tìm kiếm"
              style={{ borderRadius: '5px' }}
            />
          </Col>
          <Col>
            {isLogin ? (
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Row gutter={[20, 0]} align="middle" justify="end">
                  <Col span={8}>
                    <Avatar icon={<UserOutlined />} size={32} />
                  </Col>
                  <Col span={16} style={{ textAlign: 'right' }}>
                    <Typography.Text strong>{userName}</Typography.Text>
                  </Col>
                </Row>
              </Dropdown>
            ) : (
              <Link to="/authentication">
                <Typography.Title
                  level={5}
                  style={{ margin: '0px', color: 'var(--yellow)' }}
                >
                  Đăng nhập
                </Typography.Title>
              </Link>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
