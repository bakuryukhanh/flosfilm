import { Select } from 'antd';
import styles from './styles.less';

const SortingSelection = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select
      defaultValue="Liên quan"
      onChange={handleChange}
      className={styles['ant-select-selection-item']}
    >
      <Select.Option value="most-relevant" className={styles['selection-item']}>
        Liên quan
      </Select.Option>
      <Select.Option value="newest" className={styles['selection-item']}>
        Mới nhất
      </Select.Option>
      <Select.Option value="top" className={styles['selection-item']}>
        Hay nhất
      </Select.Option>
    </Select>
  );
};

export default SortingSelection;
