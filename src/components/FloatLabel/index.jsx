import './style.less';

const FloatLabel = (props) => {
  const { children, label } = props;

  return (
    <div className="float-label">
      {children}
      <label className="label label-float">{label}</label>
    </div>
  );
};

export default FloatLabel;
