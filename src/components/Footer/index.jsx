import {
  ArrowRightOutlined,
  EnvironmentFilled,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons/lib/icons';
import { Col, Input, Row, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import styles from './styles.less';
export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <Row>
        <Col span={8} style={{ background: '#3d3d3d', padding: '30px 30px' }}>
          <Typography.Title level={2} style={{ marginBottom: '30px' }}>
            {' '}
            FlosFilm
          </Typography.Title>
          <Typography.Text style={{ display: 'block', marginBottom: '30px' }}>
            Đem đến cho bạn trải nghiệm xem phim tốt nhất và tuyệt vời nhất
          </Typography.Text>
          <Typography.Text
            strong
            style={{ display: 'block', marginBottom: '15px' }}
          >
            Đăng ký nhận thông báo tin mới
          </Typography.Text>
          <Input
            suffix={
              <Avatar
                shape="square"
                style={{ background: 'var(--yellow)', color: 'black' }}
                icon={<ArrowRightOutlined />}
              />
            }
            style={{ background: '#525252', width: '230px', padding: '5px' }}
            placeholder="Nhập email của bạn ở đây"
            bordered={false}
          />
        </Col>
        <Col span={16} style={{ background: '#2e2e2e', padding: '30px 30px' }}>
          <Row justify="space-around">
            <Col span={6}>
              <Typography.Title level={5}>Sản phẩm</Typography.Title>
              <br />
              <Typography.Text>Phim lẻ</Typography.Text>
              <br />
              <br />
              <Typography.Text>Phim bộ</Typography.Text>
              <br />
              <br />
              <Typography.Text>Phim hot</Typography.Text>
            </Col>
            <Col span={6}>
              <Typography.Title level={5}>Quy định</Typography.Title>
              <br />
              <Typography.Text>Quy chế sử dụng dịch vụ</Typography.Text>
              <br />
              <br />
              <Typography.Text>Chính sách bảo mât</Typography.Text>
              <br />
              <br />
              <Typography.Text>Chính sách sở hữu trí tuệ</Typography.Text>
            </Col>
            <Col span={6}>
              <Typography.Title level={5}>Thông tin</Typography.Title>
              <br />
              <Typography.Text>Về chúng tôi</Typography.Text>
              <br />
              <br />
              <Typography.Text>Tư vấn</Typography.Text>
              <br />
              <br />
              <Typography.Text>Khuyến mãi</Typography.Text>
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col span={12}>
              <Typography.Text>
                <EnvironmentFilled /> 66 Nguyễn Văn Cừ, Quận 5, Thành phố Hồ Chí
                Minh
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Typography.Text>
                <MailOutlined /> movie@flosfilm.com
              </Typography.Text>
            </Col>
            <Col span={6}>
              <Typography.Text>
                {' '}
                <PhoneOutlined /> +84 6666-8888
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
