import { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import traitsData from '../../../../data/traits.json';

const traits = [traitsData];

const coreTraits = traits.find(trait => trait["core"])?.["core"] || [];
const archetypeTraits = traits.find(trait => trait["archetype"])?.["archetype"] || [];
const othersTraits = traits.find(trait => trait["others"])?.["others"] || [];




const Traits = () => {
  const [content, setContent] = useState('tap1');

  const menuItems = useMemo(() => [
    { label: `Core Traits (${coreTraits.length})`, value: 'tap1' },
    { label: `Archetype Traits (${archetypeTraits.length})`, value: 'tap2' },
    { label: `Others Traits (${othersTraits.length})`, value: 'tap3' }
  ], []);


  const contentMap = {
    tap1: <GameChecklist items={coreTraits} />,
    tap2: <GameChecklist items={archetypeTraits} />,
    tap3: <GameChecklist items={othersTraits} />,
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

export default Traits;
