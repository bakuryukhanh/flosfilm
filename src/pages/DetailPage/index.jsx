import { Row, Col, Button, Typography, Select, Rate, Input, List } from 'antd';
import Poster from '@/components/Poster';
import styles from './styles.less';
import FilmDetail from '@/components/FilmDetail';
import SortingSelection from '@/components/SortingSelection';
import Avatar from 'antd/lib/avatar/avatar';
import { SendOutlined } from '@ant-design/icons';
import Comment from '@/components/Comment';
import FilmCard from '@/components/FilmCard';

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
  directerList: [
    {
      id: 'cs',
      image: '',
      name: 'Eva Sørhaug',
    },
    {
      id: 'cs',
      image: '',
      name: 'Karyn Kusama',
    },
    {
      id: 'cs',
      image: '',
      name: 'Deepa Mehta',
    },
    {
      id: 'cs',
      image: '',
      name: 'Jamie Travis',
    },
    {
      id: 'cs',
      name: 'Bille Woodruff',
    },
    {
      id: 'cs',
      image: '',
      name: 'Ariel Kleiman',
    },
    {
      id: 'cs',
      image: '',
      name: 'Daisy von Scherler Mayer',
    },
  ],
  castList: [
    {
      id: 'es',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjIzNDg5NTg4Nl5BMl5BanBnXkFtZTcwMTU3NjgyMw@@._V1_UX32_CR0,0,32,44_AL_.jpg',
      name: 'Melanie Lynskey',
    },
    {
      id: 'bc',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTYxNDk4NDAyMl5BMl5BanBnXkFtZTgwNjIzMTc0NTM@._V1_UX32_CR0,0,32,44_AL_.jpg',
      name: 'Ella Purnell',
    },
    {
      id: 'bw',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjUzMzk5NzcyNV5BMl5BanBnXkFtZTcwNzQ1NjkzNw@@._V1_UX32_CR0,0,32,44_AL_.jpg',
      name: 'Christina Ricci',
    },
    {
      id: 'am',
      image:
        'https://m.media-amazon.com/images/M/MV5BZmY5YTBkZDYtNjVhNi00ZDRmLTg4NzctYWQ3Y2MzOTNhMDExXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX32_CR0,0,32,44_AL_.jpg',
      name: 'Warren Kole',
    },
  ],
};

const data = [
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 4,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 3,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 2.5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 3,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'https://joeschmoe.io/api/v1/random',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 0,
    commentDate: '25/12/2021',
  },
];

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

export default function index() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${filmDetail.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        <div className="container">
          <Row style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
            <Col span={6}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Poster image={filmDetail.image} />
                </Col>
                <Col span={24}>
                  <Button type="primary" className={styles['view-btn']}>
                    Xem phim
                  </Button>
                </Col>
                <Col span={24}>
                  <Button className={styles['view-trailer-btn']}>
                    Xem trailer
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col span={14} offset={2}>
              <FilmDetail {...filmDetail} />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container" style={{ padding: '5rem 0' }}>
        <Row align="middle">
          <Col span={8}>
            <Typography.Title level={2}>Đánh giá phim</Typography.Title>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Rate
              allowHalf
              defaultValue={0}
              onChange={(val) => console.log(val)}
            />
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <SortingSelection />
          </Col>
        </Row>
        <Row align="middle" style={{ marginTop: 50 }}>
          <Col span={3} style={{ textAlign: 'center' }}>
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              className={styles.avatar}
            />
          </Col>
          <Col span={19}>
            <Input
              placeholder="Nhập bình luận của bạn..."
              className={styles['comment-input']}
            />
          </Col>
          <Col span={2} style={{ textAlign: 'right' }}>
            <Button
              type="primary"
              icon={<SendOutlined />}
              className={styles['send-btn']}
            />
          </Col>
        </Row>
        <div style={{ overflow: 'auto', height: 680, margin: '2rem 6rem' }}>
          {data.map((comment, index) => (
            <Comment {...comment} key={index} />
          ))}
        </div>
        <Row align="middle" justify="space-between">
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
