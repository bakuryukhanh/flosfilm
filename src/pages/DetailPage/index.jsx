import {
  Row,
  Col,
  Button,
  Typography,
  Select,
  Rate,
  Input,
  List,
  Form,
} from 'antd';
import Poster from '@/components/Poster';
import styles from './styles.less';
import FilmDetail from '@/components/FilmDetail';
import SortingSelection from '@/components/SortingSelection';
import Avatar from 'antd/lib/avatar/avatar';
import { SendOutlined } from '@ant-design/icons';
import Comment from '@/components/Comment';
import FilmCard from '@/components/FilmCard';
import { useParams, history } from 'umi';
import { useCallback, useEffect, useState } from 'react';
import { requestFilmDetails, requestRelevantFilms } from '@/service';

const filmDetailFake = {
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

let data = [
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn A',
    content: 'Bộ phim quá xuất sắc',
    rate: 5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn B',
    content: 'Bộ phim quá xuất sắc',
    rate: 4,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn C',
    content: 'Bộ phim quá xuất sắc',
    rate: 4,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn D',
    content: 'Bộ phim quá xuất sắc',
    rate: 4.5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn E',
    content: 'Bộ phim quá xuất sắc',
    rate: 5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn F',
    content: 'Bộ phim quá xuất sắc',
    rate: 5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn G',
    content: 'Bộ phim quá xuất sắc',
    rate: 5,
    commentDate: '25/12/2021',
  },
  {
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
    username: 'Nguyễn Văn H',
    content: 'Bộ phim quá xuất sắc',
    rate: 4.5,
    commentDate: '25/12/2021',
  },
];

export default function DetailPage() {
  const val = localStorage.getItem('rate');
  const { slug } = useParams();
  const localComments = localStorage.getItem('comments');
  const [rate, setRate] = useState(val ? parseFloat(val) : 0);
  const [comments, setComments] = useState(
    localComments ? JSON.parse(localComments) : data,
  );
  const [filmDetail, setFilmDetail] = useState(filmDetailFake);
  const [relevantFilms, setRelevantFilms] = useState([]);

  useEffect(() => {
    const result = requestFilmDetails(slug);
    setFilmDetail({ ...filmDetailFake, ...result });
  }, [slug]);

  const handleRedirect = useCallback(() => {
    history.push(`/watch/${slug}`);
  }, [history]);

  const handleRate = useCallback(
    (val) => {
      setRate(val);
      localStorage.setItem('rate', val);
    },
    [setRate],
  );

  const onFinish = (values) => {
    const date = new Date();
    const userName = localStorage.getItem('userName');
    const data = {
      avatar: 'http://simpleicon.com/wp-content/uploads/user1.svg',
      username: userName ? userName : 'Ẩn danh',
      content: values.comment,
      rate: rate,
      commentDate:
        (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
        '/' +
        (date.getMonth() > 8
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1)) +
        '/' +
        date.getFullYear(),
    };

    const updatedComments = [...comments];
    updatedComments.unshift(data);

    setComments(updatedComments);

    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            filter: 'blur(3px)',
            inset: '0',
            backgroundImage: `url(${filmDetail.image})`,
            backgroundSize: 'cover',
          }}
        />
        <div className="container">
          <Row style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
            <Col span={6}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Poster image={filmDetail.poster} />
                </Col>
                <Col span={24}>
                  <Button
                    type="primary"
                    className={styles['view-btn']}
                    onClick={handleRedirect}
                  >
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
              defaultValue={rate}
              onChange={(val) => handleRate(val)}
            />
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <SortingSelection />
          </Col>
        </Row>
        <Form name="commentForm" onFinish={onFinish} wrapperCol={{ span: 16 }}>
          <Row align="middle" style={{ marginTop: 50 }}>
            <Col span={3} style={{ textAlign: 'center' }}>
              <Avatar
                src="http://simpleicon.com/wp-content/uploads/user1.svg"
                className={styles.avatar}
              />
            </Col>

            <Col span={19} style={{ paddingTop: 24 }}>
              <Form.Item
                name="comment"
                rules={[
                  { required: true, message: 'Bạn chưa nhập bình luận!' },
                ]}
                wrapperCol={{ span: 28 }}
              >
                <Input
                  placeholder="Nhập bình luận của bạn..."
                  className={styles['comment-input']}
                />
              </Form.Item>
            </Col>

            <Col span={2} style={{ textAlign: 'right' }}>
              <Button
                type="primary"
                icon={<SendOutlined />}
                className={styles['send-btn']}
                htmlType="submit"
              />
            </Col>
          </Row>
        </Form>
        <div style={{ overflow: 'auto', height: 680, margin: '2rem 6rem' }}>
          {comments?.map((comment, index) => (
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
