import { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import amuletsData from '../../../../data/amulets.json';

const amulets = [amuletsData];

const gameBase = amulets.find(amulet => amulet["Game Base"])?.["Game Base"] || [];
const awakenedKing = amulets.find(amulet => amulet["The Awakened King"])?.["The Awakened King"] || [];
const forgottenKingdom = amulets.find(amulet => amulet["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
const darkHorizon = amulets.find(amulet => amulet["The Dark Horizon"])?.["The Dark Horizon"] || [];


const Amulets = () => {
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

export default Amulets;
