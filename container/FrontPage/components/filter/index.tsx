import {useEffect} from "react";

const Filter = ({ label, isTrue } : { label: string, isTrue: string }) => {
  const active = isTrue === 'true';

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <label style={{ display: 'block' }}>
      <input
        type="checkBox"
        defaultChecked={active}
      />
      <span>
        {label}
      </span>
    </label>
  );
};

export default Filter;
