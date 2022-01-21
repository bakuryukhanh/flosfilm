import React, { useEffect } from 'react';
import PaymentSteps from '../../components/paymentSteps/index';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useParams } from 'umi';
import { Typography } from 'antd';
import { listPackage } from './choosePackage';
import { formatAmount } from './payment';
import { Link } from 'umi';

export default function Result(props) {
  const { id, nMonth } = useParams();
  const name = listPackage[id].name;
  const today = new Date();
  const expireDate = today.setMonth(today.getMonth() + parseInt(nMonth));
  const output = new Date(expireDate);
  useEffect(() => {
    localStorage.setItem('isVip', true);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '70px',
      }}
    >
      <Typography.Text
        style={{ margin: '20px', fontWeight: 'bold', fontSize: '36px' }}
      >
        Giao dịch hoàn tất
      </Typography.Text>
      <PaymentSteps currenStep={2} />
      <CheckCircleIcon
        style={{ fontSize: '200px', color: '#00C2FF', margin: '20px' }}
      />
      <Typography.Text style={{ margin: '10px', fontSize: '20px' }}>
        Thanh toán thành công
      </Typography.Text>
      <Typography.Text style={{ margin: '10px', fontSize: '20px' }}>
        Bạn đã mua gói: {name}{' '}
      </Typography.Text>
      <Typography.Text style={{ margin: '10px', fontSize: '20px' }}>
        Ngày hết hạn: {output.toLocaleDateString('vi-VI')}{' '}
      </Typography.Text>
      <Link to="/">
        <button
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '4px 13px 4px 13px',
            color: 'black',
            backgroundColor: '#FED52F',
            borderRadius: '9px',
            marginTop: '10px',
          }}
        >
          Hoàn thành
        </button>
      </Link>
    </div>
  );
}
