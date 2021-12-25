import { Carousel, Col, Image, Row, Typography } from 'antd';
import styles from './styles.less';
const { Title, Text } = Typography;
import { Tag } from 'antd';
import {
  EyeOutlined,
  LeftCircleFilled,
  RightCircleFilled,
  StarFilled,
} from '@ant-design/icons/lib/icons';

const CastCard = ({ castInfo }) => {
  return (
    <Col span={4} style={{ textAlign: 'center' }}>
      <div
        style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}
      >
        <Image
          width={50}
          height={50}
          style={{ borderRadius: '50%' }}
          src={castInfo.image}
        />
      </div>

      <Text>{castInfo.name}</Text>
    </Col>
  );
};

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <RightCircleFilled
      style={{
        ...style,
        color: '#fed530',
        display: 'inline-flex',
        position: 'absolute',
        top: '25%',
        right: 0,
        fontSize: '30px',
      }}
      onClick={onClick}
    />
  );
};

// const PrevArrow = (props) => {
//   const { style, onClick } = props;
//   return (
//     <>
//       <LeftCircleFilled
//         style={{
//           ...style,
//           color: '#fed530',
//           display: 'inline-flex',
//           position: 'absolute',
//           top: '25%',
//           fontSize: '30px',
//           zIndex: 10,
//         }}
//         onClick={onClick}
//       />
//     </>
//   );
// };

const CastCarousel = ({ castList }) => {
  return (
    <Carousel
      arrows
      //prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
    >
      <Row className={styles['cast-carousel']} justify="space-around">
        {castList.map((cast, index) => (
          <CastCard castInfo={cast} key={index} />
        ))}
      </Row>
      <Row className={styles['cast-carousel']} justify="space-around">
        {castList.map((cast, index) => (
          <CastCard castInfo={cast} key={index} />
        ))}
      </Row>
    </Carousel>
  );
};

export default function FilmDetail({
  vnName,
  enName,
  time,
  view,
  type,
  description,
  rate,
  rateTime,
  castList,
}) {
  return (
    <div>
      <Title className={styles.title}>{vnName}</Title>
      <Title className={styles.title} style={{ marginTop: 0 }}>
        {enName}
      </Title>
      <Row gutter={[128]} style={{ padding: '1rem 0' }} justify="center">
        <Col>
          <Tag style={{ backgroundColor: '#747474', borderRadius: 8 }}>
            {rate} <StarFilled style={{ color: 'var(--yellow)' }} />
          </Tag>
          <Text>({rateTime} lượt đánh giá)</Text>
        </Col>
        <Col>
          <Text>
            <EyeOutlined /> {view} lượt xem
          </Text>
        </Col>
      </Row>
      <div>
        <Text>
          <b>Nội dung: </b>
          {description}
        </Text>
      </div>
      <div>
        <Text>
          <b>Thời lượng: </b>
          {time}
        </Text>
      </div>
      <div>
        <Text>
          <b>Thời lượng: </b>
          {time}
        </Text>
      </div>
      <div>
        <Text>
          <b>Thể loại: </b>
          {type}
        </Text>
      </div>
      <div>
        <Text>
          <b>Quốc gia: </b>
          {}
        </Text>
      </div>
      <div>
        <Text>
          <b>Đạo diễn: </b>
          {description}
        </Text>
      </div>
      <div>
        <Text>
          <b>Diễn viên: </b>
        </Text>
      </div>
      <div>
        <CastCarousel castList={castList} />
      </div>
    </div>
  );
}
