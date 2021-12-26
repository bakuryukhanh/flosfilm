import { HeartFilled } from '@ant-design/icons/lib/icons';
import { Button, Tooltip } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import styles from './styles.less';

const Poster = ({ image }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddTOFavoriteList = useCallback(() => {
    setIsAdded(
      (prevState) => {
        localStorage.setItem('isAdded', prevState ? '' : 'true');
        return !prevState;
      },
      [setIsAdded],
    );
  });

  useEffect(() => {
    const val = localStorage.getItem('isAdded');
    setIsAdded(val ? true : false);
  }, []);

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
        className={
          isAdded
            ? styles['added-to-favorite-list']
            : styles['add-to-favorite-list']
        }
        type="text"
        icon={<HeartFilled className={styles['heart-filled']} />}
        onClick={handleAddTOFavoriteList}
      />

      {/* {isAdded ? (
        <Button
          className={styles['added-to-favorite-list']}
          type="text"
          icon={<HeartFilled className={styles['heart-filled']} />}
          onClick={handleAddTOFavoriteList}
        />
      ) : (
        <Button
          className={styles['add-to-favorite-list']}
          type="text"
          icon={<HeartFilled className={styles['heart-filled']} />}
          onClick={handleAddTOFavoriteList}
        />
      )} */}
    </div>
  );
};

export default Poster;
