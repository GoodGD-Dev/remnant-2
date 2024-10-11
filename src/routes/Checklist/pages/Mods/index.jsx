import React, { useState } from 'react';
import Sidebar from '../../../../components/Sidebar';

const Mods = () => {
  const [content, setContent] = useState('tap1');  // Estado que controla o conteúdo exibido

  // Defina as opções do menu e subopções dinamicamente
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

  // Função para renderizar o conteúdo com base na seleção
  const renderContent = () => {
    switch (content) {
      case 'tap1':
        return <div>Principal Content for Tap 1</div>;
      case 'sub1':
        return <div>Content for Sub-option 1 under Tap 2</div>;
      case 'sub2':
        return <div>Content for Sub-option 2 under Tap 2</div>;
      case 'tap3':
        return <div>Principal Content for Tap 3</div>;
      default:
        return <div>Principal Content for Tap 1</div>;
    }
  };

  return (
    <div className="d-flex">
      {/* Passa o menuItems e setContent como props */}
      <Sidebar menuItems={menuItems} setContent={setContent} />
      <div className="p-4" style={{ flexGrow: 1 }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Mods;
