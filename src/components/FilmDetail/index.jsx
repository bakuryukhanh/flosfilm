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
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: 10,
          objectFit: 'cover',
        }}
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
  let tmpArr = [];
  for (let i = 0; i < castList.length; i += 4) {
    tmpArr.push(castList.slice(i, i + 4));
  }

  return (
    <Carousel
      arrows
      //prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      dots={false}
    >
      {tmpArr.map((arr, index1) => (
        <Row
          key={index1}
          className={styles['cast-carousel']}
          justify="space-around"
        >
          {arr.map((cast, index2) => (
            <CastCard castInfo={cast} key={index2} />
          ))}
        </Row>
      ))}
    </Carousel>
  );
};

export default function FilmDetail({
  vnName,
  enName,
  time,
  type,
  description,
  rate,
  rateTime,
  castList,
  directerList,
  totalView,
  country,
}) {
  console.log(country);
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
          <Text>({rateTime} l?????t ????nh gi??)</Text>
        </Col>
        <Col>
          <Text>
            <EyeOutlined /> {totalView} l?????t xem
          </Text>
        </Col>
      </Row>
      <div className={styles.detail}>
        <Text>
          <b>N???i dung: </b>
          {description}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Th???i l?????ng: </b>
          {time} ph??t
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Th??? lo???i: </b>
          {type}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Qu???c gia: </b>
          {country?.name}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>?????o di???n: </b>
          {directerList?.map((directer, index) => (
            <span key={index}>{directer.name}, </span>
          ))}
        </Text>
      </div>
      <div className={styles.detail}>
        <Text>
          <b>Di???n vi??n: </b>
        </Text>
      </div>
      <div>
        <CastCarousel castList={castList} />
      </div>
    </div>
  );
}
