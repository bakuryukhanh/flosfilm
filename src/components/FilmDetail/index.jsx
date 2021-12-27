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
import { useParams } from 'umi';

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
  directerList,
}) {
  const { slug } = useParams();
  return (
    <div>
      <Title className={styles.title}>{vnName}</Title>
      <Title className={styles.title} style={{ marginTop: 0 }}>
        {enName}
      </Title>
      <Row gutter={[128]} style={{ padding: '1rem 0' }} justify="center">
        <Col>
          <Tag
            style={{
              backgroundColor: '#525252',
              borderRadius: 8,
              border: 'none',
            }}
          >
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
      <div className={styles.detail}>
        <Text>
          <b>Nội dung: </b>
          {description}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Thời lượng: </b>
          {time}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Thể loại: </b>
          {type}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Quốc gia: </b>
          {}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Đạo diễn: </b>
          {directerList[0].name}
        </Text>
      </div>
      <div className={styles.detail}>
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
