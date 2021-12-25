import { HeartFilled } from '@ant-design/icons/lib/icons';
import { Button, Tooltip } from 'antd';
import styles from './styles.less';

const Poster = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: 400,
        textAlign: 'right',
        borderRadius: 10,
        marginBottom: 20,
      }}
    >
      <Tooltip title="Thêm vào danh sách yêu thích">
        <Button
          className={styles['add-to-favorite-list']}
          type="text"
          icon={<HeartFilled className={styles['heart-filled']} />}
        />
      </Tooltip>
    </div>
  );
};

export default Poster;
