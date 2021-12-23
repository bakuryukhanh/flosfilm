import React, { useState } from 'react';
import { Typography, Modal, notification } from 'antd';
import styles from './payment.less';
import PaymentSteps from '../../components/paymentSteps/index';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SyncIcon from '@mui/icons-material/Sync';
import { Dropdown, Selection } from 'react-dropdown-now';
import { useParams, history } from 'umi';
import { listPackage } from './choosePackage';
import 'react-dropdown-now/style.css';

export default function Payment(props) {
  // console.log(props.route)
  const { id } = useParams();
  const packagePrice = listPackage[id].value;
  const packageName = listPackage[id].name;
  const [methodID, setMethodID] = useState(0);
  const [nMonth, setNMonth] = useState(1);
  const [coupon, setCoupon] = useState('');
  const [couponErr, setCouponErr] = useState('');
  const [discount, setDiscount] = useState(0);
  const enterCoupon = (text) => {
    const value = text.target.value;
    setCoupon(value);
    const checkCoupon = listCoupon.find((item) => item.code == value);
    if (checkCoupon == undefined) {
      setCouponErr('Mã giảm giá không hợp lệ');
      setDiscount(0);
    } else {
      setDiscount(checkCoupon.value);
      setCouponErr('');
    }
  };
  return (
    <div className={styles['container']}>
      <Typography.Text className={styles.title}>Thanh toán</Typography.Text>
      <PaymentSteps currenStep={1} />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            padding: '20px',
            paddingLeft: '50px',
            flexDirection: 'column',
          }}
        >
          <Typography.Text
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              justifySelf: 'flex-start',
            }}
          >
            Phương thức thanh toán
          </Typography.Text>
          <ListMethod choosenID={methodID} setID={setMethodID} />
          <MethodContent methodID={methodID} nMonth={nMonth} packageID={id} />
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            flexDirection: 'column',
            borderLeftWidth: '2px',
            borderColor: 'wheat',
            borderLeftStyle: 'solid',
          }}
        >
          <Typography.Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Thông tin thanh toán
          </Typography.Text>
          <div style={inforRow}>
            <Typography.Text style={infoStyle}>
              Gói {packageName}
            </Typography.Text>
            <Typography.Text style={infoStyle}>
              {formatAmount(packagePrice)} / tháng
            </Typography.Text>
          </div>
          <div style={inforRow}>
            <Typography.Text style={infoStyle}>Thời hạn</Typography.Text>
            <Dropdown
              className={styles.dropdown}
              options={options}
              onChange={(item) => setNMonth(item.value)}
              value={nMonth}
            />
          </div>
          <div style={inforRow}>
            <Typography.Text style={infoStyle}>Mã giảm giá</Typography.Text>
            <div
              style={{
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <input
                type={'text'}
                style={{
                  maxWidth: '120px',
                  color: 'black',
                  padding: '2px 4px 2px 4px',
                }}
                value={coupon}
                onChange={enterCoupon}
              />
              <Typography.Text style={{ color: '#ff7675', marginTop: '4px' }}>
                {couponErr}
              </Typography.Text>
            </div>
          </div>
          <div style={inforRow}>
            <Typography.Text style={infoStyle}>Giảm giá</Typography.Text>
            <Typography.Text style={infoStyle}>
              {formatAmount(discount)}
            </Typography.Text>
          </div>
          <div
            style={{
              ...inforRow,
              borderTopColor: 'wheat',
              borderTopStyle: 'groove',
              alignItems: 'flex-start',
              padding: '13px',
            }}
          >
            <Typography.Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
              Tổng cộng
            </Typography.Text>
            <div
              style={{
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Typography.Text
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#fdcb6e',
                }}
              >
                {formatAmount(packagePrice * nMonth - discount)}{' '}
              </Typography.Text>
              {discount != 0 && (
                <Typography.Text
                  style={{ ...infoStyle, textDecoration: 'line-through' }}
                >
                  {formatAmount(packagePrice * nMonth)}{' '}
                </Typography.Text>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const infoStyle = { fontSize: '18px', fontWeight: 'bold' };
const inforRow = {
  display: 'flex',
  width: '100%',
  margin: '13px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '4px 20px 4px 20px',
};

const MethodContent = ({ methodID, nMonth, packageID }) => {
  switch (methodID) {
    case 0:
      return <VisaContent nMonth={nMonth} packageID={packageID} />;
    case 1:
      return <MomoContent />;
    default:
      return <ZalopayContent />;
  }
};

const VisaContent = ({ nMonth, packageID }) => {
  const [number, setNumber] = useState('');
  const [numberErr, setNumberErr] = useState('');
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [expireDateErr, setExpireDateErr] = useState('');
  const [cw, setCw] = useState('');
  const [cwErr, setCwErr] = useState('');
  const changeNumber = (text) => {
    const value = text.target.value;
    setNumber(value);
    if (value == '') {
      setNumberErr('Vui lòng nhập số thẻ');
    } else {
      setNumberErr('');
    }
  };
  const changeName = (text) => {
    const value = text.target.value;
    setName(value);
    if (value == '') {
      setNameErr('Vui lòng nhập tên in trên thẻ');
    } else {
      setNameErr('');
    }
  };
  // const datePlaceholder = 'MM/YY';
  const changeExpireDate = (text) => {
    const value = text.target.value;
    // const result = value + datePlaceholder.substring(value.length)
    // console.log(value)
    setExpireDate(value);
    if (value == '') {
      setExpireDateErr('Vui lòng nhập ngày hết hạn');
    } else {
      setExpireDateErr('');
    }
  };
  const changeCw = (text) => {
    const value = text.target.value;
    setCw(value);
    if (value == '') {
      setCwErr('Vui lòng nhập CVV/CVC2');
    } else {
      setCwErr('');
    }
  };
  const pay = () => {
    if (number == '') {
      setNumberErr('Vui lòng nhập số thẻ');
      return;
    }
    if (name == '') {
      setNameErr('Vui lòng nhập tên in trên thẻ');
      return;
    }
    if (expireDate == '') {
      setExpireDateErr('Vui lòng nhập ngày hết hạn');
      return;
    }
    if (cw == '') {
      setCwErr('Vui lòng nhập CVV/CVC2');
      return;
    }
    if (number == 1 && name == 2 && expireDate == 3 && cw == 4) {
      notification.open({
        message: 'Thanh toán thành công',
        description: 'Vui lòng kiểm tra lại thông tin và hoàn tất.',
      });
      history.push(`/result/${packageID}/${nMonth}`);
    } else
      Modal.error({
        title: 'Thanh toán thất bại',
        content: 'Vui lòng kiểm tra thông tin thanh toán và thử lại!',
      });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <text>Số thẻ</text>
      <input
        type={'number'}
        value={number}
        onChange={changeNumber}
        placeholder="Nhập số in trên thẻ"
        style={inputStyle}
      />
      <text style={errorMsg}>{numberErr}</text>
      <text>Tên in trên thẻ</text>
      <input
        type={'text'}
        value={name}
        onChange={changeName}
        placeholder="Nhập tên in trên thẻ"
        style={inputStyle}
      />
      <text style={errorMsg}>{nameErr}</text>
      <text>Ngày hết hạn</text>
      <input
        type={'number'}
        value={expireDate}
        onChange={changeExpireDate}
        placeholder="MM/YY"
        style={inputStyle}
      />
      <text style={errorMsg}>{expireDateErr}</text>
      <text>CVV/CVC2</text>
      <input
        type={'number'}
        value={cw}
        onChange={changeCw}
        placeholder="Nhập mã số bảo mật"
        style={inputStyle}
      />
      <text style={errorMsg}>{cwErr}</text>
      <button
        onClick={pay}
        style={{
          marginTop: '20px',
          padding: '6px 13px 6px 13px',
          maxWidth: '150px',
          borderRadius: '6px',
          backgroundColor: '#fdcb6e',
          color: '#2d3436',
          fontWeight: 'bold',
          fontSize: '20px',
          textA: 'center',
        }}
      >
        Thanh toán
      </button>
    </div>
  );
};

const qrStyle = { width: '200px', height: '200px', margin: '10px' };
const MomoContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <text style={{ fontWeight: 'bold', fontSize: '22px', color: '#e84393' }}>
        Quét mã để thanh toán
      </text>
      <img
        src="https://www.saigonchildren.com/wp-content/uploads/2020/04/MM_QR_CODE_MOMOTUUM20191113-saigonchildren.png"
        style={qrStyle}
      />
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <QrCodeScannerIcon style={{ color: 'white' }} />
        <Typography.Text style={{ fontSize: '18px', marginLeft: '4px' }}>
          Quét mã thanh toán trên ứng dụng Momo hoặc
        </Typography.Text>
      </div>
      <Typography.Text style={{ fontSize: '18px' }}>
        ứng dụng hỗ trợ quét mã QR code trên camera.
      </Typography.Text>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <SyncIcon style={{ color: 'white' }} />
        <Typography.Text style={{ fontSize: '18px', marginLeft: '4px' }}>
          Đang chờ bạn thanh toán...
        </Typography.Text>
      </div>
    </div>
  );
};

const ZalopayContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <text style={{ fontWeight: 'bold', fontSize: '22px', color: '#0689DA' }}>
        Quét mã QR để thanh toán qua ZaloPay
      </text>
      <img
        src="https://printgo.vn/uploads/media/790919/tao-ma-qr-code-san-pham-1_1620927223.jpg"
        style={qrStyle}
      />
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <QrCodeScannerIcon style={{ color: 'white' }} />
        <Typography.Text style={{ fontSize: '18px', marginLeft: '4px' }}>
          Quét mã thanh toán trên ứng dụng ZaloPay hoặc
        </Typography.Text>
      </div>
      <Typography.Text style={{ fontSize: '18px' }}>
        ứng dụng hỗ trợ quét mã QR code trên camera.
      </Typography.Text>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <SyncIcon style={{ color: 'white' }} />
        <Typography.Text style={{ fontSize: '18px', marginLeft: '4px' }}>
          Đang chờ bạn thanh toán...
        </Typography.Text>
      </div>
    </div>
  );
};

const ListMethod = ({ choosenID, setID }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <img
        src={methodData[choosenID].imgSrc}
        style={{
          ...imgStyle,
          width: 100,
          height: 65,
          marginLeft: '0px',
          borderColor: '#ff7675',
          borderWidth: '3px',
          borderStyle: 'solid',
        }}
      />

      <text style={{ fontWeight: 'bold', fontSize: 40, lineHeight: '50px' }}>
        /
      </text>
      {methodData
        .filter((item) => item.id != choosenID)
        .map((item) => (
          <img
            src={item.imgSrc}
            style={imgStyle}
            onClick={() => {
              setID(item.id);
            }}
          />
        ))}
    </div>
  );
};

export const formatAmount = (amount) => {
  const result = new Intl.NumberFormat('vn-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
  return result;
};

const imgStyle = {
  width: 70,
  height: 50,
  margin: '10px',
  backgroundColor: 'white',
  borderRadius: '9px',
};

const errorMsg = { color: '#ff7675', marginBottom: '6px', marginTop: '4px' };

const inputStyle = {
  color: 'black',
  borderRadius: '6px',
  maxWidth: '400px',
  padding: '4px 6px 4px 6px',
};

const methodData = [
  {
    id: 0,
    name: 'Visa',
    imgSrc:
      'https://www.greedyrates.ca/wp-content/uploads/2018/09/Visa-or-Mastercard.jpg',
  },
  {
    id: 1,
    name: 'Momo',
    imgSrc:
      'https://chandat.net/testx/wp-content/uploads/2018/09/Vi-MoMo-new.jpg',
  },
  {
    id: 2,
    name: 'Zalopay',
    imgSrc:
      'https://thuthuatfree.com/wp-content/uploads/2021/05/cach-su-dung-voucher-zalo-pay.jpg',
  },
];

const options = [
  {
    value: 1,
    label: '1 tháng',
  },
  { value: 2, label: '2 tháng' },
  { value: 3, label: '3 tháng' },
  { value: 4, label: '4 tháng' },
  { value: 5, label: '5 tháng' },
  { value: 6, label: '6 tháng' },
  { value: 7, label: '7 tháng' },
  { value: 8, label: '8 tháng' },
  { value: 9, label: '9 tháng' },
  { value: 10, label: '10 tháng' },
  { value: 11, label: '11 tháng' },
  { value: 12, label: '12 tháng' },
];

const listCoupon = [
  {
    code: 'giam25',
    value: 25000,
  },
  {
    code: 'giam30',
    value: 30000,
  },
  {
    code: 'giam15',
    value: 15000,
  },
];
