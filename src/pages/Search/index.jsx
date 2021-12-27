import { Row, Col, Typography } from 'antd';
import styles from './styles.less';
import classname from 'classnames';
import { data } from '../../../mock/data';
import FilmCard from '@/components/FilmCard';

const categories = data.categories;
const filmDatas = [
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
      'https://cdn.shopify.com/s/files/1/0513/0613/5747/products/TheGreenKnight9_2376b752-8cc0-4ba4-8ee5-010e750d0995_530x@2x.jpg?v=1628091452',
    view: '2k',
    percent: 30,
  },
];

const FilmTag = ({ active, text, onClick, style }) => {
  return (
    <div
      className={active ? classname(styles.tag, styles.active) : styles.tag}
      style={style}
    >
      {text}
    </div>
  );
};

const SearchPage = (props) => {
  return (
    <div className="container">
      <div style={{ marginTop: '140px' }}>
        <Row gutter={[20, 20]}>
          <Col
            span={6}
            style={{
              background: '#4b4b4b',
              borderRadius: '5px',
              padding: '20px 10px',
            }}
          >
            <Typography.Title level={3} style={{ color: '#ff8a00' }}>
              Tìm kiếm nâng cao
            </Typography.Title>
            <FilmTag
              text="Tất cả"
              active
              style={{ width: 'calc(50% - 20px)' }}
            />
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Phạm vi</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            <FilmTag text="Diễn viên" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Phim" style={{ width: 'calc(50% - 20px)' }} />
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Thể loại</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            {categories.map((item) => (
              <FilmTag text={item.name} style={{ width: 'calc(50% - 20px)' }} />
            ))}
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Quốc gia</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            <FilmTag text="Trung Quốc" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Hàn Quốc" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Âu mỹ" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Nhật Bản" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Thái Lan" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Ấn độ" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Khác" style={{ width: 'calc(50% - 20px)' }} />
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Typography.Title level={4}>Năm</Typography.Title>
              <Typography.Text> Xóa</Typography.Text>
            </Row>
            <FilmTag text="2021" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2020" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2019" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2017" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2016" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2015" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="2014" style={{ width: 'calc(50% - 20px)' }} />
            <FilmTag text="Trước 2014" style={{ width: 'calc(50% - 20px)' }} />
          </Col>

          <Col
            span={18}
            style={{
              background: '#4b4b4b',
              borderRadius: '5px',
              padding: '20px 10px',
            }}
          >
            <Typography.Title level={3} style={{ color: '#ff8a00' }}>
              80 kết quả của từ khóa "jo"
            </Typography.Title>
            <Typography.Title level={4}>Phim</Typography.Title>
            <div className={styles['film-grid']}>
              {filmDatas.map((item) => (
                <FilmCard {...item} style={{ minHeight: '400px' }} />
              ))}
            </div>
            <Typography.Title level={4} style={{ marginTop: '50px' }}>
              Diễn viên
            </Typography.Title>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchPage;
