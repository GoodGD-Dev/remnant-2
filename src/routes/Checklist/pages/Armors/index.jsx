import { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import armorsData from '../../../../data/armors.json';

const armors = [armorsData];

const gameBase = armors.find(armor => armor["Game Base"])?.["Game Base"] || [];
  const gbLight = gameBase.find(light => light["Light Armor Set"])?.["Light Armor Set"] || [];
  const gbMedium = gameBase.find(medium => medium["Medium Armor Set"])?.["Medium Armor Set"] || [];
  const gbHeavy = gameBase.find(heavy => heavy["Heavy Armor Set"])?.["Heavy Armor Set"] || [];
  const gbUltra = gameBase.find(ultra => ultra["Ultra Armor Set"])?.["Ultra Armor Set"] || [];

const awakenedKing = armors.find(armor => armor["The Awakened King"])?.["The Awakened King"] || [];
  const akLight = awakenedKing.find(light => light["Light Armor Set"])?.["Light Armor Set"] || [];
  const akMedium = awakenedKing.find(medium => medium["Medium Armor Set"])?.["Medium Armor Set"] || [];
  const akHeavy = awakenedKing.find(heavy => heavy["Heavy Armor Set"])?.["Heavy Armor Set"] || [];
  const akUltra = awakenedKing.find(ultra => ultra["Ultra Armor Set"])?.["Ultra Armor Set"] || [];

const forgottenKingdom = armors.find(armor => armor["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];

const darkHorizon = armors.find(armor => armor["The Dark Horizon"])?.["The Dark Horizon"] || [];


const Armors = () => {
  const [content, setContent] = useState('sub1');

  const menuItems = useMemo(() => [
    {
      label: 'Game Base',
      subOptions: [
        { label: `Light Armor (${gbLight.length})`, value: 'sub1' },
        { label: `Medium Armor (${gbMedium.length})`, value: 'sub2' },
        { label: `Heavy Armor (${gbHeavy.length})`, value: 'sub3' },
        { label: `Ultra Armor (${gbUltra.length})`, value: 'sub4' }
      ]
    },
    {
      label: 'The Awakened King',
      subOptions: [
        { label: `Light Armor (${akLight.length})`, value: 'sub5' },
        { label: `Medium Armor (${akMedium.length})`, value: 'sub6' },
        { label: `Heavy Armor (${akHeavy.length})`, value: 'sub7' },
        { label: `Ultra Armor (${akUltra.length})`, value: 'sub8' }
      ]
    },
  ], []);


  const contentMap = {
    sub1: <GameChecklist items={gbLight} />,
    sub2: <GameChecklist items={gbMedium} />,
    sub3: <GameChecklist items={gbHeavy} />,
    sub4: <GameChecklist items={gbUltra} />,
    sub5: <GameChecklist items={akLight} />,
    sub6: <GameChecklist items={akMedium} />,
    sub7: <GameChecklist items={akHeavy} />,
    sub8: <GameChecklist items={akUltra} />,
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

export default Armors;
