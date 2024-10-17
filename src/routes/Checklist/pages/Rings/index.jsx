import { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import ringsData from '../../../../data/rings.json';

const rings = [ringsData];

const gameBase = rings.find(ring => ring["Game Base"])?.["Game Base"] || [];
const awakenedKing = rings.find(ring => ring["The Awakened King"])?.["The Awakened King"] || [];
const forgottenKingdom = rings.find(ring => ring["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
const darkHorizon = rings.find(ring => ring["The Dark Horizon"])?.["The Dark Horizon"] || [];


const Rings = () => {
  const [content, setContent] = useState('tap1');

  const menuItems = useMemo(() => [
    { label: `Game Base (${gameBase.length})`, value: 'tap1' },
    { label: `The Awakened King (${awakenedKing.length})`, value: 'tap2' },
    { label: `The Forgotten Kingdom (${forgottenKingdom.length})`, value: 'tap3' },
    { label: `The Dark Horizon (${darkHorizon.length})`, value: 'tap4' },
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

export default Rings;
