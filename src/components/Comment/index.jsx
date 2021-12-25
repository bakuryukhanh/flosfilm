import { Avatar, Col, Rate, Row, Typography } from 'antd';
import styles from './styles.less';

export default function Comment({
  avatar,
  username,
  content,
  rate,
  commentDate,
}) {
  return (
    <Row align="middle" className={styles.comment}>
      <Col span={3}>
        <Avatar src={avatar} className={styles.avatar} />
      </Col>
      <Col span={21}>
        <Row>
          <Typography.Title level={5}>{username}</Typography.Title>
        </Row>
        <Row>
          <Typography.Text style={{ color: '#D0CCCC' }}>
            {content}
          </Typography.Text>
        </Row>
        <Row>
          <Col span={20}>
            <Rate
              allowHalf
              defaultValue={rate}
              disabled
              onChange={(val) => console.log(val)}
            />
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            {commentDate}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
