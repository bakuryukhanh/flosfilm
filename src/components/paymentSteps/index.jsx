import { Steps } from 'antd';
import styles from './index.less';

const { Step } = Steps;

export default function PaymentProgress({ currenStep }) {
  return (
    <Steps
      current={currenStep}
      className={styles.paymentSteps}
      labelPlacement="vertical"
      progressDot
      style={{
        width: '69%',
        alignSelf: 'center',
        marginBottom: '20px',
        padding: '13px',
        borderRadius: '9px',
        paddingBottom: '6px',
        background: 'transparent',
      }}
    >
      <Step title="Chọn gói" />
      <Step title="Thanh toán" />
      <Step title="Hoàn tất" />
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
