import { useState } from 'react';

import './style.less';

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, input } = props;

  const labelClass =
    focus || (input && input.length !== 0) ? 'label label-float' : 'label';

  return (
    <div className="float-label" onFocus={() => setFocus(true)}>
      {children}
      <label className={labelClass}>{focus && label}</label>
    </div>
  );
};

export default FloatLabel;
