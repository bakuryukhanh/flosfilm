import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons/lib/icons';
import { Progress, Tag, Typography } from 'antd';
import { history } from 'umi';
import styles from './styles.less';

const FilmCard = (props) => {
  const { vnName, enName, image, time, view, type, percent, style, slug } =
    props;
  return (
    <div
      className={styles.filmcard}
      onClick={() => history.push(`/film-detail/${slug}`)}
    >
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${image})`, ...style }}
      />
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
          {time} phút &nbsp;&nbsp;
          <EyeOutlined />
          &nbsp; {view} lượt xem
        </Typography.Text>
        <Typography.Title level={4}>
          {vnName ? vnName : enName}
        </Typography.Title>
        {percent && (
          <Progress
            percent={percent}
            showInfo={false}
            strokeColor="var(--yellow)"
          />
        )}
      </div>
    </div>
  );
};

export default FilmCard;
