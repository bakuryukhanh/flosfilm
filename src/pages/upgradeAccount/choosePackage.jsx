import React, { useState } from 'react';
import { Button, Typography } from 'antd';
// import { SpeedIcon, DevicesIcon, VideoSettingsIcon, LooksOneIcon, CancelPresentationIcon } from '@mui/icons-material';
import { Link } from 'umi';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import PaymentSteps from '../../components/paymentSteps/index';
import styles from './choosePackage.less';

export default function ChoosePackage(_props) {
  const [choosenID, setChoosenID] = useState(1);
  const toPayment = () => {
    console.log('To payment page');
  };
  const Package = ({ data }) => {
    const isChoosen = data.id == choosenID;
    const textColor = isChoosen ? 'black' : 'white';
    const backgroundColor = isChoosen ? 'white' : '#535353';
    const choose = () => {
      setChoosenID(data.id);
    };
    return (
      <div
        className={styles['packageContainer']}
        style={{ backgroundColor: backgroundColor, marginTop: '70px' }}
        onClick={choose}
      >
        <Typography.Text
          style={{ fontSize: '30px', color: textColor }}
          className={styles['packageName']}
        >
          {data.title}
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: textColor,
            marginTop: '13px',
            marginBottom: '13px',
          }}
        >
          {data.price}
        </Typography.Text>
        <div className={styles['rowContainer']}>
          <DevicesIcon style={{ color: textColor }} />
          <Typography.Text
            style={{ fontSize: '18px', marginLeft: '9px', color: textColor }}
          >
            {data.nDevice} thiết bị
          </Typography.Text>
        </div>
        <div className={styles['rowContainer']}>
          <SpeedIcon style={{ color: textColor }} />
          <Typography.Text
            style={{ fontSize: '18px', marginLeft: '9px', color: textColor }}
          >
            {data.speed}
          </Typography.Text>
        </div>
        <div className={styles['rowContainer']}>
          <VideoSettingsIcon style={{ color: textColor }} />
          <Typography.Text
            style={{ fontSize: '18px', marginLeft: '9px', color: textColor }}
          >
            {data.quality}
          </Typography.Text>
        </div>

        {data.haveAd ? (
          <div className={styles['rowContainer']}>
            <LooksOneIcon style={{ color: textColor }} />
            <Typography.Text
              style={{ fontSize: '18px', marginLeft: '9px', color: textColor }}
            >
              {data.ad}
            </Typography.Text>
          </div>
        ) : (
          <div className={styles['rowContainer']}>
            <CancelPresentationIcon style={{ color: textColor }} />
            <Typography.Text
              className={styles['noAd']}
              style={{ fontSize: '18px', marginLeft: '9px', color: textColor }}
            >
              {data.ad}
            </Typography.Text>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className={styles['container']} style={{ marginTop: '70px' }}>
      <Typography.Text className={styles.title}>
        Chọn gói phù hợp với bạn
      </Typography.Text>
      <PaymentSteps currenStep={0} />
      <div className={styles['packageRow']}>
        <Package data={listPackage[0]} />
        <Package data={listPackage[1]} />
        <Package data={listPackage[2]} />
      </div>
      <Link to={`/payment/${choosenID}`} style={{ alignSelf: 'center' }}>
        <Button
          style={{
            backgroundColor: '#FED52F',
            minWidth: '250px',
            fontSize: '26px',
            fontWeight: 'bolder',
            color: 'black',
            marginTop: '20px',
            height: 'max-content',
          }}
          onClick={toPayment}
        >
          Thanh toán
        </Button>
      </Link>
    </div>
  );
}

export const listPackage = [
  {
    id: 0,
    title: 'Gói chuẩn',
    name: 'Chuẩn',
    price: '50.000 đ/tháng',
    value: 50000,
    nDevice: 1,
    speed: 'Tốc độ thông thường',
    quality: 'Chất lượng HD (720p)',
    haveAd: true,
    ad: 'Quảng cáo/tập phim',
  },
  {
    id: 1,
    title: 'Gói VIP',
    name: 'VIP',
    price: '120.000 đ/tháng',
    value: 120000,
    nDevice: 3,
    speed: 'Tốc độ cao',
    quality: 'Chất lượng Full HD (1080p)',
    haveAd: false,
    ad: 'Quảng cáo',
  },
  {
    id: 2,
    title: 'Gói MAX',
    name: 'MAX',
    price: '250.000 đ/tháng',
    nDevice: 6,
    value: 250000,
    speed: 'Tốc độ tối đa',
    quality: 'Chất lượng tối đa',
    haveAd: false,
    ad: 'Quảng cáo',
  },
];
