import { Steps } from 'antd';
import styles from './index.less';

const { Step } = Steps;

export default function PaymentProgress({ currenStep }) {
  return (
    <Steps
      current={currenStep}
      className={styles.paymentSteps}
      labelPlacement="vertical"
      style={{
        width: '69%',
        alignSelf: 'center',
        marginBottom: '20px',
        backgroundColor: '#6c5ce7',
        padding: '13px',
        borderRadius: '9px',
        paddingBottom: '6px',
      }}
    >
      <Step title="Chọn gói" style={{ color: 'black' }} />
      <Step title="Thanh toán" style={{ color: 'black' }} />
      <Step title="Hoàn tất" style={{ color: 'white' }} />
    </Steps>
  );
}

const stepsData = [
  {
    id: 0,
    title: 'Chọn gói',
  },
  {
    id: 1,
    title: 'Thanh toán',
  },
  {
    id: 2,
    title: 'Hoàn tất',
  },
];
