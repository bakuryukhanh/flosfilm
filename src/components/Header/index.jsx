import { SearchOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import {
  Col,
  Avatar,
  Input,
  Row,
  Typography,
  Menu,
  Dropdown,
  Badge,
} from 'antd';
import { Link, NavLink } from 'umi';
import styles from './styles.less';
import './styles.less';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import SearchInput from './components/SearchBar';
import { VipSvg } from '@/assets/Vip';

export default function Header(props) {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('isLogin') == 'true',
  );

  const [isVip, setIsVip] = useState(localStorage.getItem('isVip'));
  const userName = localStorage.getItem('userName');

  function handleLogout() {
    setIsLogin(false);
    localStorage.setItem('isLogin', false);
  }

  const VipAvatar = () => {
    return (
      <div style={{ position: 'relative' }}>
        <Avatar
          icon={<UserOutlined />}
          style={{ background: 'transparent', border: 'solid 1.5px white' }}
        />
        <div style={{ position: 'absolute', top: '-20px', left: '30%' }}>
          <VipSvg />
        </div>
      </div>
    );
  };

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
            <SearchInput />
          </Col>
          <Col>
            {isLogin ? (
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Row gutter={[20, 0]} align="middle" justify="end">
                  <Col span={8}>
                    {!isVip ? (
                      <Avatar icon={<UserOutlined />} size={32} />
                    ) : (
                      <VipAvatar />
                    )}
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
