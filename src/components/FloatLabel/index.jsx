import { useState } from 'react';

import './style.less';

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, input } = props;

  const labelClass =
    focus || (input && input.length !== 0) ? 'label label-float' : 'label';
  const labelSize = focus || (input && input.length !== 0) ? '10px' : '14px';

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass} style={{ fontSize: labelSize }}>
        {label}
      </label>
    </div>
  );
};

export default FloatLabel;
