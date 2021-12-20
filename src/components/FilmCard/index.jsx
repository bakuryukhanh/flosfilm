import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons/lib/icons';
import { Card, Progress, Space, Tag, Typography } from 'antd';
import styles from './styles.less';

const FilmCard = (props) => {
  const { name, image, time, view, type, percent, style } = props;
  console.log({ backgroundImage: `url(${image})`, ...style });
  return (
    <div
      className={styles.filmcard}
      style={{ backgroundImage: `url(${image})`, ...style }}
    >
      <Tag
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: 'black',
        }}
        color="var(--yellow)"
      >
        {type}
      </Tag>
      <div>
        <Typography.Text>
          <ClockCircleOutlined />
          &nbsp;
          {time} &nbsp;&nbsp;
          <EyeOutlined />
          &nbsp; {view} lượt xem
        </Typography.Text>
        <Typography.Title level={4}>{name}</Typography.Title>
        <Progress
          percent={percent}
          showInfo={false}
          strokeColor="var(--yellow)"
        />
      </div>
    </div>
  );
};

export default FilmCard;
