import { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import weaponsData from '../../../../data/weapons.json';

const weapons = [weaponsData];

const handGuns = weapons.find(weapon => weapon["Hand Guns"])?.["Hand Guns"] || [];
  const hgGameBase = handGuns.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const hgAwakenedKing = handGuns.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const hgForgottenKingdom = handGuns.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const hgDarkHorizon = handGuns.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const specialHandGuns = weapons.find(weapon => weapon["Special Hand Guns"])?.["Special Hand Guns"] || [];
  const shgGameBase = specialHandGuns.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const shgAwakenedKing = specialHandGuns.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const shgForgottenKingdom = specialHandGuns.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const shgDarkHorizon = specialHandGuns.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const longGuns = weapons.find(weapon => weapon["Long Guns"])?.["Long Guns"] || [];
  const lgGameBase = longGuns.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const lgAwakenedKing = longGuns.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const lgForgottenKingdom = longGuns.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const lgDarkHorizon = longGuns.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const specialLongGuns = weapons.find(weapon => weapon["Special Long Guns"])?.["Special Long Guns"] || [];
  const slGameBase = specialLongGuns.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const slAwakenedKing = specialLongGuns.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const slForgottenKingdom = specialLongGuns.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const slDarkHorizon = specialLongGuns.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const meleeWeapons = weapons.find(weapon => weapon["Melee Weapons"])?.["Melee Weapons"] || [];
  const mwGameBase = meleeWeapons.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const mwAwakenedKing = meleeWeapons.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const mwForgottenKingdom = meleeWeapons.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const mwDarkHorizon = meleeWeapons.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const specialMeleeWeapons = weapons.find(weapon => weapon["Special Melee Weapons"])?.["Special Melee Weapons"] || [];
  const smGameBase = specialMeleeWeapons.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const smAwakenedKing = specialMeleeWeapons.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const smForgottenKingdom = specialMeleeWeapons.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const smDarkHorizon = specialMeleeWeapons.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const corruptedHandGuns = weapons.find(weapon => weapon["Corrupted Hand Guns"])?.["Corrupted Hand Guns"] || [];
  const chGameBase = corruptedHandGuns.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const chAwakenedKing = corruptedHandGuns.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const chForgottenKingdom = corruptedHandGuns.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const chDarkHorizon = corruptedHandGuns.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const corruptedLongGuns = weapons.find(weapon => weapon["Corrupted Long Guns"])?.["Corrupted Long Guns"] || [];
  const clGameBase = corruptedLongGuns.find(weapon => weapon["Game Base"])?.["Game Base"] || [];
  const clAwakenedKing = corruptedLongGuns.find(weapon => weapon["The Awakened King"])?.["The Awakened King"] || [];
  const clForgottenKingdom = corruptedLongGuns.find(weapon => weapon["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
  const clDarkHorizon = corruptedLongGuns.find(weapon => weapon["The Dark Horizon"])?.["The Dark Horizon"] || [];

const Weapons = () => {
  const [content, setContent] = useState('tap1');

  const menuItems = useMemo(() => [
    {
      label: 'Game Base',
      subOptions: [
        { label: `Long Guns (${lgGameBase.length})`, value: 'sub1' },
        { label: `Special Long Guns (${slGameBase.length})`, value: 'sub2' },
        { label: `Corrupted Long Guns (${clGameBase.length})`, value: 'sub3' },
        { label: `Melee Weapons (${mwGameBase.length})`, value: 'sub4' },
        { label: `Special Melee Weapons (${smGameBase.length})`, value: 'sub5' },
        { label: `Hand Guns (${hgGameBase.length})`, value: 'sub6' },
        { label: `Special Hand Guns (${shgGameBase.length})`, value: 'sub7' },
        { label: `Corrupted Hand Guns (${chGameBase.length})`, value: 'sub8' }
      ]
    },
    {
      label: 'The Awakened King',
      subOptions: [
        { label: `Long Guns (${lgAwakenedKing.length})`, value: 'sub9' },
        { label: `Special Long Guns (${slAwakenedKing.length})`, value: 'sub10' },
        { label: `Corrupted Long Guns (${clAwakenedKing.length})`, value: 'sub11' },
        { label: `Melee Weapons (${mwAwakenedKing.length})`, value: 'sub12' },
        { label: `Special Melee Weapons (${smAwakenedKing.length})`, value: 'sub13' },
        { label: `Hand Guns (${hgAwakenedKing.length})`, value: 'sub14' },
        { label: `Special Hand Guns (${shgAwakenedKing.length})`, value: 'sub15' },
        { label: `Corrupted Hand Guns (${chAwakenedKing.length})`, value: 'sub16' }
      ]
    },
    {
      label: 'The Forgotten Kingdom',
      subOptions: [
        { label: `Long Guns (${lgForgottenKingdom.length})`, value: 'sub17' },
        { label: `Special Long Guns (${slForgottenKingdom.length})`, value: 'sub18' },
        { label: `Corrupted Long Guns (${clForgottenKingdom.length})`, value: 'sub19' },
        { label: `Melee Weapons (${mwForgottenKingdom.length})`, value: 'sub20' },
        { label: `Special Melee Weapons (${smForgottenKingdom.length})`, value: 'sub21' },
        { label: `Hand Guns (${hgForgottenKingdom.length})`, value: 'sub22' },
        { label: `Special Hand Guns (${shgForgottenKingdom.length})`, value: 'sub23' },
        { label: `Corrupted Hand Guns (${chForgottenKingdom.length})`, value: 'sub24' }
      ]
    },
    {
      label: 'The Dark Horizon',
      subOptions: [
        { label: `Long Guns (${lgDarkHorizon.length})`, value: 'sub25' },
        { label: `Special Long Guns (${slDarkHorizon.length})`, value: 'sub26' },
        { label: `Corrupted Long Guns (${clDarkHorizon.length})`, value: 'sub27' },
        { label: `Melee Weapons (${mwDarkHorizon.length})`, value: 'sub28' },
        { label: `Special Melee Weapons (${smDarkHorizon.length})`, value: 'sub29' },
        { label: `Hand Guns (${hgDarkHorizon.length})`, value: 'sub30' },
        { label: `Special Hand Guns (${shgDarkHorizon.length})`, value: 'sub31' },
        { label: `Corrupted Hand Guns (${chDarkHorizon.length})`, value: 'sub32' }
      ]
    },
  ], []);


  const contentMap = {
    tap1: <div>test</div>,
    sub1: <GameChecklist items={lgGameBase} />,
    sub2: <GameChecklist items={slGameBase} />,
    sub3: <GameChecklist items={clGameBase} />,
    sub4: <GameChecklist items={mwGameBase} />,
    sub5: <GameChecklist items={smGameBase} />,
    sub6: <GameChecklist items={hgGameBase} />,
    sub7: <GameChecklist items={shgGameBase} />,
    sub8: <GameChecklist items={chGameBase} />,
    sub9: <GameChecklist items={lgAwakenedKing} />,
    sub10: <GameChecklist items={slAwakenedKing} />,
    sub11: <GameChecklist items={clAwakenedKing} />,
    sub12: <GameChecklist items={mwAwakenedKing} />,
    sub13: <GameChecklist items={smAwakenedKing} />,
    sub14: <GameChecklist items={hgAwakenedKing} />,
    sub15: <GameChecklist items={shgAwakenedKing} />,
    sub16: <GameChecklist items={chAwakenedKing} />,
    sub17: <GameChecklist items={lgForgottenKingdom} />,
    sub18: <GameChecklist items={slForgottenKingdom} />,
    sub19: <GameChecklist items={clForgottenKingdom} />,
    sub20: <GameChecklist items={mwForgottenKingdom} />,
    sub21: <GameChecklist items={smForgottenKingdom} />,
    sub22: <GameChecklist items={hgForgottenKingdom} />,
    sub23: <GameChecklist items={shgForgottenKingdom} />,
    sub24: <GameChecklist items={chForgottenKingdom} />,
    sub25: <GameChecklist items={lgDarkHorizon} />,
    sub26: <GameChecklist items={slDarkHorizon} />,
    sub27: <GameChecklist items={clDarkHorizon} />,
    sub28: <GameChecklist items={mwDarkHorizon} />,
    sub29: <GameChecklist items={smDarkHorizon} />,
    sub30: <GameChecklist items={hgDarkHorizon} />,
    sub31: <GameChecklist items={shgDarkHorizon} />,
    sub32: <GameChecklist items={chDarkHorizon} />
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

export default Weapons;
