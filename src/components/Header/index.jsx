import { SearchOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import { Col, Avatar, Input, Row, Typography } from 'antd';
import { Link, NavLink } from 'umi';
import styles from './styles.less';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Header(props) {
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
            <Row gutter={[20, 0]} align="middle" justify="end">
              <Col span={8}>
                <Avatar icon={<UserOutlined />} size={32} />
              </Col>
              <Col span={16} style={{ textAlign: 'right' }}>
                <Typography.Text strong>Văn Khánh</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
