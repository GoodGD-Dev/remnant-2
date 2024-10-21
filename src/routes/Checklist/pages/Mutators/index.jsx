import { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import mutatorsData from '../../../../data/mutators.json';

const mutators = [mutatorsData];

const ranged = mutators.find(mutator => mutator["Ranged"])?.["Ranged"] || [];
  const rangedGameBase = ranged.find(mutator => mutator["Game Base"])?.["Game Base"] || [];
  const rangedAwakenedKing = ranged.find(mutator => mutator["The Awakened King"])?.["The Awakened King"] || [];
  const rangedForgottenKingdom = ranged.find(mutator => mutator["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const rangedDarkHorizon = ranged.find(mutator => mutator["The Dark Horizon"])?.["The Dark Horizon"] || [];

const melee = mutators.find(mutator => mutator["Melee"])?.["Melee"] || [];
  const meleeGameBase = melee.find(mutator => mutator["Game Base"])?.["Game Base"] || [];
  const meleeAwakenedKing = melee.find(mutator => mutator["The Awakened King"])?.["The Awakened King"] || [];
  const meleeForgottenKingdom = melee.find(mutator => mutator["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const meleeDarkHorizon = melee.find(mutator => mutator["The Dark Horizon"])?.["The Dark Horizon"] || [];


const Mutators = () => {
  const [content, setContent] = useState('sub1');

  const menuItems = useMemo(() => [
    {
      label: 'Game Base',
      subOptions: [
        { label: `Ranged (${rangedGameBase.length})`, value: 'sub1' },
        { label: `Melee (${meleeGameBase.length})`, value: 'sub2' }
      ]
    },
    {
      label: 'The Awakened King',
      subOptions: [
        { label: `Ranged (${rangedAwakenedKing.length})`, value: 'sub3' },
        { label: `Melee (${meleeAwakenedKing.length})`, value: 'sub4' }
      ]
    },
    {
      label: 'The Forgotten Kingdom',
      subOptions: [
        { label: `Ranged (${rangedForgottenKingdom.length})`, value: 'sub5' },
        { label: `Melee (${meleeForgottenKingdom.length})`, value: 'sub6' }
      ]
    },
    {
      label: 'The Dark Horizon',
      subOptions: [
        { label: `Ranged (${rangedDarkHorizon.length})`, value: 'sub7' },
        { label: `Melee (${meleeDarkHorizon.length})`, value: 'sub8' }
      ]
    },
  ], []);


  const contentMap = {
    sub1: <GameChecklist items={rangedGameBase} />,
    sub2: <GameChecklist items={meleeGameBase} />,
    sub3: <GameChecklist items={rangedAwakenedKing} />,
    sub4: <GameChecklist items={meleeAwakenedKing} />,
    sub5: <GameChecklist items={rangedForgottenKingdom} />,
    sub6: <GameChecklist items={meleeForgottenKingdom} />,
    sub7: <GameChecklist items={rangedDarkHorizon} />,
    sub8: <GameChecklist items={meleeDarkHorizon} />
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

export default Mutators;
