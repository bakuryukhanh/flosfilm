import { Row, Col, Typography } from 'antd';
import styles from './styles.less';
import classname from 'classnames';

const FilmTag = ({ active, text, onClick, style }) => {
  return (
    <div
      className={active ? classname(styles.tag, styles.active) : styles.tag}
      style={style}
    >
      {text}
    </div>
  );
};

const SearchPage = (props) => {
  return (
    <div className="container">
      <div style={{ marginTop: '140px' }}>
        <Row gutter={[20, 20]}>
          <Col
            span={6}
            style={{
              background: '#4b4b4b',
              borderRadius: '5px',
              padding: '10px',
            }}
          >
            <Typography.Title level={3} style={{ color: '#ff8a00' }}>
              Tìm kiếm nâng cao
            </Typography.Title>
            <FilmTag text="Tất cả" />
            <FilmTag text="Tất cả" active />
          </Col>
          <Col span={18}></Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchPage;
