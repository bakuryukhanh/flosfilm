import { useEffect, useState } from 'react';
import styles from './styles.less';
import { Input, Row, Col, Image, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { requestSearchFilms } from '@/service';
import { history, Link } from 'umi';

const FilmSearchList = ({ films, resetSearch }) => {
  return (
    <div className={styles['search-list']}>
      {films.map((film) => {
        return (
          <Link to={`/film-detail/${film.id}`} onClick={() => resetSearch()}>
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

const SearchInput = () => {
  const [films, setFilms] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.length === 0) {
      setFilms([]);
    } else {
      const result = requestSearchFilms(inputValue);
      setFilms(result);
    }
  }, [inputValue]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleOnEnter = (e) => {
    const value = e.target.value;
    history.push(`/search/${value}`);
    setFilms([]);
  };

  const handleResetSearch = () => {
    setInputValue('');
  };
  return (
    <div className={styles['search-container']}>
      <Input
        prefix={<SearchOutlined />}
        placeholder="Nhập từ khóa để tìm kiếm"
        style={{ borderRadius: '5px' }}
        onChange={handleOnChange}
        onPressEnter={handleOnEnter}
        value={inputValue}
      />
      {films.length != 0 && (
        <div className={styles['search-result']}>
          <FilmSearchList films={films} resetSearch={handleResetSearch} />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
