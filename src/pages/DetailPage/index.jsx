import { Row, Col, Button } from 'antd';
import Poster from '@/components/Poster';
import styles from './styles.less';
import FilmDetail from '@/components/FilmDetail';

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
          <Row style={{ paddingTop: '2rem' }}>
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
      <div className="container">Comment</div>
    </>
  );
}
