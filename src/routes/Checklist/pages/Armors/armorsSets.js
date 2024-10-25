import armorsData from "../../../../data/armors.json";

const armors = [armorsData];

const gameBase = armors.find((armor) => armor["Game Base"])?.["Game Base"] || [];
const gbLight = gameBase.find((light) => light["Light Armor Set"])?.["Light Armor Set"] || [];
const gbMedium = gameBase.find((medium) => medium["Medium Armor Set"])?.["Medium Armor Set"] || [];
const gbHeavy = gameBase.find((heavy) => heavy["Heavy Armor Set"])?.["Heavy Armor Set"] || [];
const gbUltra = gameBase.find((ultra) => ultra["Ultra Armor Set"])?.["Ultra Armor Set"] || [];

const awakenedKing = armors.find((armor) => armor["The Awakened King"])?.["The Awakened King"] || [];
const akLight = awakenedKing.find((light) => light["Light Armor Set"])?.["Light Armor Set"] || [];
const akMedium = awakenedKing.find((medium) => medium["Medium Armor Set"])?.["Medium Armor Set"] || [];
const akHeavy = awakenedKing.find((heavy) => heavy["Heavy Armor Set"])?.["Heavy Armor Set"] || [];
const akUltra = awakenedKing.find((ultra) => ultra["Ultra Armor Set"])?.["Ultra Armor Set"] || [];

const forgottenKingdom = armors.find((armor) => armor["The Forgotten Kingdom"])?.["The Forgotten Kingdom"] || [];
const fkLight = forgottenKingdom.find((light) => light["Light Armor Set"])?.["Light Armor Set"] || [];
const fkMedium = forgottenKingdom.find((medium) => medium["Medium Armor Set"])?.["Medium Armor Set"] || [];
const fkHeavy = forgottenKingdom.find((heavy) => heavy["Heavy Armor Set"])?.["Heavy Armor Set"] || [];
const fkUltra = forgottenKingdom.find((ultra) => ultra["Ultra Armor Set"])?.["Ultra Armor Set"] || [];

const darkHorizon = armors.find((armor) => armor["The Dark Horizon"])?.["The Dark Horizon"] || [];
const dhLight = darkHorizon.find((light) => light["Light Armor Set"])?.["Light Armor Set"] || [];
const dhMedium = darkHorizon.find((medium) => medium["Medium Armor Set"])?.["Medium Armor Set"] || [];
const dhHeavy = darkHorizon.find((heavy) => heavy["Heavy Armor Set"])?.["Heavy Armor Set"] || [];
const dhUltra = darkHorizon.find((ultra) => ultra["Ultra Armor Set"])?.["Ultra Armor Set"] || [];

export {
  armors, gbLight, gbMedium, gbHeavy, gbUltra, akLight, akMedium, akHeavy,
  akUltra, fkLight, fkMedium, fkHeavy, fkUltra, dhLight, dhMedium, dhHeavy,
  dhUltra
};
