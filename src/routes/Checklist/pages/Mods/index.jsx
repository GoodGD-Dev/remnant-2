import React, { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';

const Mods = () => {
  const [content, setContent] = useState('tap1');

  const menuItems = useMemo(() => [
    { label: 'Tap 1', value: 'tap1' },
    {
      label: 'Tap 2',
      subOptions: [
        { label: 'test', value: 'sub1' },
        { label: 'St', value: 'sub2' }
      ]
    },
    { label: 'Tap 3', value: 'tap3' },
  ], []);


  const contentMap = {
    tap1: <div>Content for tab1</div>,
    sub1: <div>Content for Sub-option 1 under Tap 2</div>,
    sub2: <div>Content for Sub-option 2 under Tap 2</div>,
    tap3: <div>Principal Content for Tap 3</div>
  };

  return (
    <div className="d-flex">
      <Sidebar menuItems={menuItems} setContent={setContent} />
      <div className="p-4">
        {contentMap[content] || <div>Content not found</div>}
      </div>
    </div>
  );
};

export default Mods;