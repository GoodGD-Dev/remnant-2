import React, { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import modsData from '../../../../data/mods.json';

const mods = [modsData];

const gameBase = mods.find(mod => mod["Game Base"])?.["Game Base"] || [];
const awakenedKing = mods.find(mod => mod["The Awakened King"])?.["The Awakened King"] || [];
const forgottenKingdom = mods.find(mod => mod["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
const darkHorizon = mods.find(mod => mod["The Dark Horizon"])?.["The Dark Horizon"] || [];


const Mods = () => {
  const [content, setContent] = useState('tap1');

  const menuItems = useMemo(() => [
    { label: 'Game Base', value: 'tap1' },
    { label: 'The Awakened King', value: 'tap2' },
    { label: 'The Forgotten Kingdom', value: 'tap3' },
    { label: 'The Dark Horizon', value: 'tap4' },
  ], []);


  const contentMap = {
    tap1: <GameChecklist items={gameBase} />,
    tap2: <GameChecklist items={awakenedKing} />,
    tap3: <GameChecklist items={forgottenKingdom} />,
    tap4: <GameChecklist items={darkHorizon} />,
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
