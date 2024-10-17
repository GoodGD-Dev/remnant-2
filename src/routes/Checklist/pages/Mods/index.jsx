import React, { useState, useMemo } from 'react';
import Sidebar from '../../../../components/Sidebar';
import GameChecklist from '../../../../components/GameChecklist';
import modsData from '../../../../data/mods.json';

const mods = [modsData];

const tests = [
      {
        "Game": [
          {
            "nome": "Harvester Bots",
            "descricao": "Releases 5 Harvester Bots for 30s that seek an enemy to siphon, granting allies within 30m a stack of DRAIN. Gain 1% of base damage dealt as Lifesteal per stack. Max 5 stacks.",
            "link": "https://remnant2.wiki.fextralife.com/Harvester+Bots",
            "imagem": "https://remnant2.wiki.fextralife.com/file/Remnant-2/harvester_bots_weapon_mod_remnant2_the_dark_horizon_wiki_guide_250px.png"
          },
          {
            "nome": "Shielding Shot",
            "descricao": "Launches a payload that bursts on contact with allies, applying a SHIELD for 25% of their Max Health for 15s. Max 50% SHIELD. When no ally is struck, payload lays dormant until an ally gets  close. Dormant payload lasts 30s and slowly loses Shield potency over time",
            "link": "https://remnant2.wiki.fextralife.com/Shielding+Shot",
            "imagem": "https://remnant2.wiki.fextralife.com/file/Remnant-2/shielding_shot_weapon_mod_remnant2_the_dark_horizon_wiki_guide_250px.png"
          },
          {
            "nome": "Voidlight",
            "descricao": "Launches a projectile that releases a Voidlight which remains dormant for 10s. While active, absorbs other damage sources. After expiration, explodes and fires up to 5 projectiles which hone in on enemies within 15m. Projectiles deal 250 Mod Damage split among enemies hit, dealing an additional 150 per 100 Base Damage absorbed. Max 5x.",
            "link": "https://remnant2.wiki.fextralife.com/Voidlight",
            "imagem": "https://remnant2.wiki.fextralife.com/file/Remnant-2/voidlight_weapon_mod_remnant2_the_dark_horizon_wiki_guide_250px.png"
          }
        ]
      },
      {
        "Game Base": [
          {
            "nome": "Astral Burst",
            "descricao": "Fires a short range burst of 7 star fragments which deal 35 damage each. Fragments bounce off walls up to 3 times, dealing 35% additional damage per bounce. Weakspot hits deal reduced damage. ",
            "link": "https://remnant2.wiki.fextralife.com/Astral+Burst",
            "imagem": "https://remnant2.wiki.fextralife.com/file/Remnant-2/astral_burst_weapon_mod_remnant2_wiki_guide_250px.png"
          },
          {
            "nome": "Blood Draw",
            "descricao": "Shoots out razor-sharp Chain Shards which impale up to 5 targets within 15m, dealing 10 damage. On hit, chains are pulled towards the caster, dealing 250 damage split equally among enemies and applying 275 BLEEDING damage over 15s. ",
            "link": "https://remnant2.wiki.fextralife.com/Blood+Draw",
            "imagem": "https://remnant2.wiki.fextralife.com/file/Remnant-2/blood_draw_weapon_mod_remnant2_wiki_guide_250px.png"
          },
          {
            "nome": "Bore",
            "descricao": "Fires a drill projectile which bores into enemies on contact, dealing 80 damage. After fully burrowing into an enemy, creates a Weakspot which grants 165% of normal Weakspot Damage on hit. If attached to an existing Weakspot, Ranged Crit Chance is increased by 15% when attacking the drill. Lasts 10s. ",
            "link": "https://remnant2.wiki.fextralife.com/Bore",
            "imagem": "https://remnant2.wiki.fextralife.com/file/Remnant-2/bore_weapon_mod_remnant2_wiki_guide_250px.png"
          }
        ]
      }
]

const gameBase = tests.find(mod => mod["Game Base"])?.["Game Base"] || [];
const gameItems = tests.find(mod => mod["Game"])?.["Game"] || [];
const exemplo = mods.find(mod => mod["The Dark Horizon"])?.["The Dark Horizon"] || [];

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
    tap1: <GameChecklist items={gameItems} />,
    sub1: <GameChecklist items={gameBase} />,
    sub2: <GameChecklist items={exemplo} />,
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
