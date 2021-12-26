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
        border: '1px solid #747474',
      }}
    >
      <Button
        className={styles['add-to-favorite-list']}
        type="text"
        icon={<HeartFilled className={styles['heart-filled']} />}
      />
    </div>
  );
};

export default Poster;
