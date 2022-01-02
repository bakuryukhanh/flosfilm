import { useState } from 'react';
import styles from './styles.less';
import { Input, Row, Col, Image, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { requestSearchFilms } from '@/service';
import { history, Link } from 'umi';

const FilmSearchList = ({ films }) => {
  return (
    <div className={styles['search-list']}>
      {films.map((film) => {
        return (
          <Link to={`/watch/${film.id}`}>
            <Row className={styles['result-row']} align="middle">
              <Col span={6}>
                <Image
                  src={film.thumb}
                  height="100px"
                  width="80px"
                  style={{ objectFit: 'cover', borderRadius: '5px' }}
                  preview={false}
                />
              </Col>
              <Col span={18}>
                <div>
                  <Typography.Title level={5} style={{ color: 'black' }}>
                    {film.name}
                  </Typography.Title>
                  <p> {film.year}</p>
                  <p
                    style={{
                      textOverflow: 'ellipsis',
                      display: 'block',
                      maxHeight: '20px',
                      wordWrap: 'break-word',
                      overflow: 'hidden',
                    }}
                  >
                    {film.writerList.map((item) => item.name).join(', ')}
                  </p>
                </div>
              </Col>
            </Row>
          </Link>
        );
      })}
    </div>
  );
};

const SearchInput = (props) => {
  const [films, setFilms] = useState([]);
  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      setFilms([]);
      return;
    }
    const result = requestSearchFilms(value);
    setFilms(result);
  };
  const handleOnEnter = (e) => {
    const value = e.target.value;
    history.push(`/search/${value}`);
    setFilms([]);
  };
  return (
    <div className={styles['search-container']}>
      <Input
        prefix={<SearchOutlined />}
        placeholder="Nhập từ khóa để tìm kiếm"
        style={{ borderRadius: '5px' }}
        onChange={handleOnChange}
        onPressEnter={handleOnEnter}
      />
      {films.length != 0 && (
        <div className={styles['search-result']}>
          <FilmSearchList films={films} />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
