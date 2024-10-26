import armorsData from "../../../../data/armors.json";

const armors = [armorsData];

// Função auxiliar para extrair conjuntos de armadura
const getArmorSet = (category, type) =>
  armors.find((armor) => armor[category])?.[category]
    .find((item) => item[type])?.[type] || [];

// Categorias de armaduras agrupadas
const gb = {
  Light: getArmorSet("Game Base", "Light Armor Set"),
  Medium: getArmorSet("Game Base", "Medium Armor Set"),
  Heavy: getArmorSet("Game Base", "Heavy Armor Set"),
  Ultra: getArmorSet("Game Base", "Ultra Armor Set"),
};

const ak = {
  Light: getArmorSet("The Awakened King", "Light Armor Set"),
  Medium: getArmorSet("The Awakened King", "Medium Armor Set"),
  Heavy: getArmorSet("The Awakened King", "Heavy Armor Set"),
  Ultra: getArmorSet("The Awakened King", "Ultra Armor Set"),
};

const fk = {
  Light: getArmorSet("The Forgotten Kingdom", "Light Armor Set"),
  Medium: getArmorSet("The Forgotten Kingdom", "Medium Armor Set"),
  Heavy: getArmorSet("The Forgotten Kingdom", "Heavy Armor Set"),
  Ultra: getArmorSet("The Forgotten Kingdom", "Ultra Armor Set"),
};

const dh = {
  Light: getArmorSet("The Dark Horizon", "Light Armor Set"),
  Medium: getArmorSet("The Dark Horizon", "Medium Armor Set"),
  Heavy: getArmorSet("The Dark Horizon", "Heavy Armor Set"),
  Ultra: getArmorSet("The Dark Horizon", "Ultra Armor Set"),
};

// Exporta apenas os objetos agrupados
export { gb, ak, fk, dh };
