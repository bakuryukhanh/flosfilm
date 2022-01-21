import FilmCard from '@/components/FilmCard';
import { HeartFilled } from '@ant-design/icons';
import { Button, Col, Rate, Row, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'umi';
import styles from './styles.less';
import { requestFilmDetails, requestRelevantFilms } from '@/service';

export default function WatchPage() {
  const [isAdded, setIsAdded] = useState(false);
  const val = localStorage.getItem('rate');
  const [rate, setRate] = useState(val ? parseFloat(val) : 0);
  const [filmDetail, setFilmDetail] = useState({});
  const { id } = useParams();
  const [relevantFilms, setRelevantFilms] = useState([]);

  const handleAddTOFavoriteList = useCallback(() => {
    setIsAdded(
      (prevState) => {
        localStorage.setItem('isAdded', prevState ? '' : 'true');
        return !prevState;
      },
      [setIsAdded],
    );
  });

  const handleRate = useCallback(
    (val) => {
      setRate(val);
      localStorage.setItem('rate', val);
    },
    [setRate],
  );

  useEffect(() => {
    const val = localStorage.getItem('isAdded');
    setIsAdded(val ? true : false);
  }, []);

  useEffect(() => {
    const result = requestFilmDetails(id);
    setFilmDetail(result);
  }, [id]);

  useEffect(() => {
    const result = requestRelevantFilms().map((item) => {
      return {
        vnName: item.name,
        enName: item.originalName,
        rate: item.rate,
        time: item.time,
        type: item.categoryList[0].name,
        image: item.poster,
        slug: item.id,
        view: item.totalView,
      };
    });
    setRelevantFilms(result);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${filmDetail.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          padding: '120px 50px 80px',
        }}
      >
        <div className="container">
          <div
            // style={{ height: 'auto', padding: '120px 50px 80px' }}
            className={styles['iframe-container']}
          >
            <iframe
              className={styles['responsive-iframe']}
              src="https://www.youtube.com/embed/YJserno8tyU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <Row style={{ marginTop: 70 }}>
          <Col offset={2} span={20} style={{ textAlign: 'center' }}>
            <Typography.Title>
              {filmDetail.vnName ? filmDetail.vnName : filmDetail.enName}
            </Typography.Title>
          </Col>
          <Col span={2}>
            <Button
              className={
                isAdded
                  ? styles['added-to-favorite-list']
                  : styles['add-to-favorite-list']
              }
              type="text"
              icon={<HeartFilled className={styles['heart-filled']} />}
              onClick={handleAddTOFavoriteList}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Rate
              allowHalf
              defaultValue={rate}
              onChange={(val) => handleRate(val)}
            />
          </Col>
        </Row>
        <Row align="middle" justify="space-between" style={{ marginTop: 100 }}>
          <Col>
            <Typography.Title level={2}>Bộ phim liên quan</Typography.Title>
          </Col>
          <Col>
            <Typography.Title level={4} style={{ color: 'var(--yellow)' }}>
              Xem thêm
            </Typography.Title>
          </Col>
        </Row>
        <Row gutter={[30, 30]}>
          {relevantFilms.map((film, index) => (
            <Col span={8} key={index}>
              <FilmCard {...film} filmCardType="relevantFilm" />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
