import FilmCard from '@/components/FilmCard';
import { StarFilled } from '@ant-design/icons/lib/icons';
import { Typography, Row, Col } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.less';
import {
  requestHolidayFilms,
  requestHollywoodFilms,
  requestWatchedFilms,
} from '@/service';

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
    vnName: 'Encanto: Vùng Đất Thần Kỳ',
    enName: 'Encanto',
    description:
      'Phim xoay quanh câu chuyện về gia đình Madrigalas sống khép kin tại một căn nhà nằm phía sau núi Colombia. Nơi đây, tràn đầy những ma thuật, thị trấn đầy hài hước và những sinh vật thiên nhiên đầy diệu kỳ, nơi đây còn được gọi là Encanto. Tại đây, khi những đứa trẻ được sinh ra đời, đều được ban phát một sức mạnh đặc biệt có khả năng chữa lành mọi vết thương và sức mạnh dùng để chiến đấu chống lại kẻ xấu.',
    type: 'Hành động',
    time: '2 giờ 5 phút',
    rate: 4.5,
    image:
      'https://m.media-amazon.com/images/M/MV5BZTk0OGE3ZGEtZjJjZS00MjdhLWExMzEtZGRlZTdkODI5YzYzXkEyXkFqcGdeQXVyMTM0MTkzMzY0._V1_FMjpg_UX988_.jpg',
    thumbImage:
      'https://m.media-amazon.com/images/M/MV5BYWMyNjdlMTYtYTk2Yy00NGQ3LTgyOGEtNzZlZTkzYjY0Njg2XkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_FMjpg_UX1086_.jpg',
    view: '5k',
    percent: 50,
  },
];

const CarouselCard = (props) => {
  const { vnName, enName, description, type, time, rate, image } = props;
  return (
    <div className={styles['carousel-card']}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${image})` }}
      />
      <Row>
        <Col span={16} />
        <Col span={8} style={{ textAlign: 'left' }}>
          <Typography.Title level={1} style={{ marginBottom: '12px' }}>
            {vnName}
          </Typography.Title>
          <Typography.Title level={1} style={{ marginTop: 0 }}>
            {enName}
          </Typography.Title>
          <Typography.Text>{description}</Typography.Text>
          <div style={{ margin: '10px 5px' }}>
            <Typography.Text>Thể loại: {type}</Typography.Text>
          </div>
          <div style={{ margin: '10px 5px' }}>
            <Typography.Text>Thời lượng: {time}</Typography.Text>
          </div>
          <div style={{ margin: '10px 5px' }}>
            <Typography.Text>
              Đánh giá: {rate} <StarFilled style={{ color: 'var(--yellow)' }} />
            </Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const customIndicators = (
  onClickHandler,
  isSelected,
  index,
  label,
  fakeDataCarousel,
) => {
  if (isSelected) {
    return (
      <li
        style={{
          backgroundImage: `url(${fakeDataCarousel[index].thumbImage})`,
          transform: 'scale(1.2)',
        }}
        className={styles.indicator}
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    );
  }
  return (
    <li
      className={styles.indicator}
      onClick={onClickHandler}
      style={{ backgroundImage: `url(${fakeDataCarousel[index].thumbImage})` }}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

const HomePage = (_props) => {
  const watchedFilms = requestWatchedFilms().map((item) => {
    return {
      vnName: item.name,
      enName: item.originalName,
      rate: item.rate,
      time: item.time,
      type: item.categoryList[0].name,
      image: item.wallpaper,
      slug: item.id,
      view: item.viewBymonth,
    };
  });
  const holidayfilms = requestHolidayFilms().map((item) => {
    return {
      vnName: item.name,
      enName: item.originalName,
      rate: item.rate,
      time: item.time,
      type: item.categoryList[0].name,
      image: item.wallpaper,
      slug: item.id,
      view: item.viewBymonth,
    };
  });
  const hollywoodFilms = requestHollywoodFilms().map((item) => {
    return {
      vnName: item.name,
      enName: item.originalName,
      rate: item.rate,
      time: item.time,
      type: item.categoryList[0].name,
      image: item.wallpaper,
      slug: item.id,
      view: item.viewBymonth,
    };
  });
  return (
    <div className="container">
      <Carousel
        renderIndicator={(a, b, c, d) =>
          customIndicators(a, b, c, d, fakeDataCarousel)
        }
        showArrows={false}
      >
        {fakeDataCarousel.map((item) => {
          return <CarouselCard {...item} />;
        })}
      </Carousel>
      <div className={styles['film-section']}>
        <Row align="middle" justify="space-between">
          <Col>
            <Typography.Title level={2}>Tiếp tục xem</Typography.Title>
          </Col>
          <Col>
            <Typography.Title level={4} style={{ color: 'var(--yellow)' }}>
              Xem thêm
            </Typography.Title>
          </Col>
        </Row>
        <Row gutter={[30, 30]}>
          <Col span={16}>
            <FilmCard
              {...watchedFilms[0]}
              percent={50}
              style={{ aspectRatio: 'unset' }}
            />
          </Col>
          <Col span={8}>
            <FilmCard {...watchedFilms[2]} percent={30} />
          </Col>
          <Col span={8}>
            <FilmCard {...watchedFilms[3]} percent={40} />
          </Col>
          <Col span={8}>
            <FilmCard {...watchedFilms[4]} percent={80} />
          </Col>
          <Col span={8}>
            <FilmCard {...watchedFilms[1]} percent={20} />
          </Col>
        </Row>
      </div>
      <div className={styles['film-section']}>
        <Row align="middle" justify="space-between">
          <Col>
            <Typography.Title level={2}>
              Phim lễ hay nhất trên Flosfilm
            </Typography.Title>
          </Col>
          <Col>
            <Typography.Title level={4} style={{ color: 'var(--yellow)' }}>
              Xem thêm
            </Typography.Title>
          </Col>
        </Row>
        <Row gutter={[30, 30]}>
          <Col span={16}>
            <FilmCard {...holidayfilms[0]} style={{ aspectRatio: 'unset' }} />
          </Col>
          <Col span={8}>
            <FilmCard {...holidayfilms[2]} />
          </Col>
          <Col span={8}>
            <FilmCard {...holidayfilms[3]} />
          </Col>
          <Col span={8}>
            <FilmCard {...holidayfilms[4]} />
          </Col>
          <Col span={8}>
            <FilmCard {...holidayfilms[1]} />
          </Col>
        </Row>
      </div>
      <div className={styles['film-section']}>
        <Row align="middle" justify="space-between">
          <Col>
            <Typography.Title level={2}>Hành động hollywood</Typography.Title>
          </Col>
          <Col>
            <Typography.Title level={4} style={{ color: 'var(--yellow)' }}>
              Xem thêm
            </Typography.Title>
          </Col>
        </Row>
        <Row gutter={[30, 30]}>
          <Col span={16}>
            <FilmCard {...hollywoodFilms[0]} style={{ aspectRatio: 'unset' }} />
          </Col>
          <Col span={8}>
            <FilmCard {...hollywoodFilms[2]} />
          </Col>
          <Col span={8}>
            <FilmCard {...hollywoodFilms[3]} />
          </Col>
          <Col span={8}>
            <FilmCard {...hollywoodFilms[4]} />
          </Col>
          <Col span={8}>
            <FilmCard {...hollywoodFilms[1]} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
