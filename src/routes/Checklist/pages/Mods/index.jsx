import React, { useState } from 'react';
import Sidebar from '../../../../components/Sidebar';
import FourCards from '../../../../components/FourCards';

const Mods = () => {
  const [content, setContent] = useState('tap1');

  const menuItems = [
    { label: 'Tap 1', value: 'tap1' },
    { 
      label: 'Tap 2', 
      subOptions: [
        { label: 'test', value: 'sub1' },
        { label: 'St', value: 'sub2' }
      ]
    },
    { label: 'Tap 3', value: 'tap3' },
  ];

  const renderContent = () => {
    switch (content) {
      case 'tap1':
        return (
          <FourCards 
            cards={[
              { title: 'Card 1', description: 'Description for card 1', image: 'https://via.placeholder.com/150', link: '#' },
              { title: 'Card 2', description: 'Description for card 2', image: 'https://via.placeholder.com/150', link: '#' },
              { title: 'Card 3', description: 'Description for card 3', image: 'https://via.placeholder.com/150', link: '#' },
              { title: 'Card 4', description: 'Description for card 4', image: 'https://via.placeholder.com/150', link: '#' },
              { title: 'Card 5', description: 'Description for card 5', image: 'https://via.placeholder.com/150', link: '#' },
            ]}
          />
        );
      case 'sub1':
        return <div>Content for Sub-option 1 under Tap 2</div>;
      case 'sub2':
        return <div>Content for Sub-option 2 under Tap 2</div>;
      case 'tap3':
        return <div>Principal Content for Tap 3</div>;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar menuItems={menuItems} setContent={setContent} />
      <div className="p-4" style={{ flexGrow: 1 }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Mods;
