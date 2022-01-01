import { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import styles from './styles.less';
import classname from 'classnames';
import { data } from '../../../mock/data';
import FilmCard from '@/components/FilmCard';
import { useParams } from 'umi';
import { requestSearchFilms } from '@/service';

const categories = data.categories;

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

const SearchPage = (_props) => {
  const [films, setFilms] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const result = requestSearchFilms(slug);
    setFilms(result);
  }, [slug]);
  return (
    <div className="container">
      <div style={{ marginTop: '140px' }}>
        <Row gutter={[20, 20]}>
          <Col
            span={6}
            style={{
              background: '#4b4b4b',
              borderRadius: '5px',
              padding: '20px 10px',
            }}
          >
            <Typography.Title level={3} style={{ color: '#ff8a00' }}>
              Tìm kiếm nâng cao
            </Typography.Title>
            <FilmTag
              text="Tất cả"
              active
              style={{ width: 'calc(50% - 20px)' }}
            />
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Phạm vi</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            <FilmTag text="Diễn viên" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Phim" style={{ width: 'calc(50% - 20px)' }} />
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Thể loại</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            {categories.map((item) => (
              <FilmTag text={item.name} style={{ width: 'calc(50% - 20px)' }} />
            ))}
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Quốc gia</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            <FilmTag text="Trung Quốc" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Hàn Quốc" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Âu mỹ" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Nhật Bản" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Thái Lan" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Ấn độ" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Khác" style={{ width: 'calc(50% - 20px)' }} />
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Năm</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            <FilmTag text="2021" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2020" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2019" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2017" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2016" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2015" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2014" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Trước 2014" style={{ width: 'calc(50% - 20px)' }} />
          </Col>

          <Col
            span={18}
            style={{
              background: '#4b4b4b',
              borderRadius: '5px',
              padding: '20px 10px',
            }}
          >
            <Typography.Title level={3} style={{ color: '#ff8a00' }}>
              {films.length} kết quả của từ khóa "{slug}"
            </Typography.Title>
            <Typography.Title level={4}>Phim</Typography.Title>
            <div className={styles['film-grid']}>
              {films.map((item) => (
                <FilmCard
                  vnName={item.name}
                  enName={item.originalName}
                  image={item.wallpaper}
                  thumbImage={item.thumb}
                  view="2k"
                  percent={0}
                  type={item.categoryList[0].name}
                  style={{ minHeight: '400px' }}
                />
              ))}
            </div>
            <Typography.Title level={4} style={{ marginTop: '50px' }}>
              Diễn viên
            </Typography.Title>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchPage;
