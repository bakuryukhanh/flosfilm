import FilmCard from '@/components/FilmCard';
import { HeartFilled } from '@ant-design/icons';
import { Button, Col, Rate, Row, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import styles from './styles.less';

const fakeDataCarousel = [
  {
    vnName: 'Hiệp sĩ xanh',
    enName: 'The green knight',
    description:
      'Muốn chứng minh giá trị bản thân, Gawain, người cháu liều lĩnh và cứng đầu của vua Arthur, đã chấp nhận bước vào cuộc hành trình đối đầu với Hiệp sĩ Xanh bất tử.',
    type: 'Hành động',
    time: '2 giờ 5 phút',
    rate: 4.5,
    image:
      'https://ghienreview.com/wp-content/uploads/2021/08/Ghien-review-The-Green-Knight-01.jpg',
    thumbImage:
      'https://cdn.shopify.com/s/files/1/0513/0613/5747/products/TheGreenKnight9_2376b752-8cc0-4ba4-8ee5-010e750d0995_530x@2x.jpg?v=1628091452',
    view: '2k',
    percent: 30,
  },
  {
    vnName: 'Hiệp sĩ xanh',
    enName: 'The green knight',
    description:
      'Muốn chứng minh giá trị bản thân, Gawain, người cháu liều lĩnh và cứng đầu của vua Arthur, đã chấp nhận bước vào cuộc hành trình đối đầu với Hiệp sĩ Xanh bất tử.',
    type: 'Hành động',
    time: '2 giờ 5 phút',
    rate: 4.5,
    image:
      'https://ghienreview.com/wp-content/uploads/2021/08/Ghien-review-The-Green-Knight-01.jpg',
    thumbImage:
      'https://ghienreview.com/wp-content/uploads/2021/08/Ghien-review-The-Green-Knight-01.jpg',
    view: '5k',
    percent: 50,
  },
];

const filmDetail = {
  vnName: 'Hiệp sĩ xanh',
  enName: 'The green knight',
  description:
    'Muốn chứng minh giá trị bản thân, Gawain, người cháu liều lĩnh và cứng đầu của vua Arthur, đã chấp nhận bước vào cuộc hành trình đối đầu với Hiệp sĩ Xanh bất tử.',
  type: 'Hành động',
  time: '2 giờ 5 phút',
  rate: 4.5,
  image:
    'https://ghienreview.com/wp-content/uploads/2021/08/Ghien-review-The-Green-Knight-01.jpg',
  thumbImage:
    'https://cdn.shopify.com/s/files/1/0513/0613/5747/products/TheGreenKnight9_2376b752-8cc0-4ba4-8ee5-010e750d0995_530x@2x.jpg?v=1628091452',
  view: '2k',
  percent: 30,
  rate: 4.5,
  rateTime: 30000,
};

export default function WatchPage() {
  const [isAdded, setIsAdded] = useState(false);
  const val = localStorage.getItem('rate');
  const [rate, setRate] = useState(val ? parseFloat(val) : 0);

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
              src="https://www.youtube.com/embed/uTsEZggYBWw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
          <Col span={8}>
            <FilmCard {...fakeDataCarousel[1]} filmCardType="relevantFilm" />
          </Col>
          <Col span={8}>
            <FilmCard {...fakeDataCarousel[1]} filmCardType="relevantFilm" />
          </Col>
          <Col span={8}>
            <FilmCard {...fakeDataCarousel[1]} filmCardType="relevantFilm" />
          </Col>
        </Row>
      </div>
    </>
  );
}
