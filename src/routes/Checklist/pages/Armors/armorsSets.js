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
  Head: getArmorSet("Game Base", "Head"),
};

const ak = {
  Light: getArmorSet("The Awakened King", "Light Armor Set"),
  Medium: getArmorSet("The Awakened King", "Medium Armor Set"),
  Heavy: getArmorSet("The Awakened King", "Heavy Armor Set"),
  Ultra: getArmorSet("The Awakened King", "Ultra Armor Set"),
  Head: getArmorSet("The Awakened King", "Head"),
};

const fk = {
  Light: getArmorSet("The Forgotten Kingdom", "Light Armor Set"),
  Medium: getArmorSet("The Forgotten Kingdom", "Medium Armor Set"),
  Heavy: getArmorSet("The Forgotten Kingdom", "Heavy Armor Set"),
  Ultra: getArmorSet("The Forgotten Kingdom", "Ultra Armor Set"),
  Head: getArmorSet("The Forgotten Kingdom", "Head"),
};

const dh = {
  Light: getArmorSet("The Dark Horizon", "Light Armor Set"),
  Medium: getArmorSet("The Dark Horizon", "Medium Armor Set"),
  Heavy: getArmorSet("The Dark Horizon", "Heavy Armor Set"),
  Ultra: getArmorSet("The Dark Horizon", "Ultra Armor Set"),
  Head: getArmorSet("The Dark Horizon", "Head"),
};

const du = {
  Light: getArmorSet("Deluxe/Ultimate Edition", "Light Armor Set"),
  Medium: getArmorSet("Deluxe/Ultimate Edition", "Medium Armor Set"),
  Heavy: getArmorSet("Deluxe/Ultimate Edition", "Heavy Armor Set"),
  Ultra: getArmorSet("Deluxe/Ultimate Edition", "Ultra Armor Set"),
  Head: getArmorSet("Deluxe/Ultimate Edition", "Head"),
};

// Função para contar itens em cada tipo de armadura
const countItems = (armorCategory) => {
  return Object.keys(armorCategory).reduce((counts, type) => {
    counts[type] = armorCategory[type].length;
    return counts;
  }, {});
};

// Contagens para cada categoria de armaduras
const gbCounts = countItems(gb);
const akCounts = countItems(ak);
const fkCounts = countItems(fk);
const dhCounts = countItems(dh);
const duCounts = countItems(du);

// Função para somar o total de itens em cada categoria
const getTotalCount = (counts) => {
  return Object.values(counts).reduce((acc, count) => acc + count, 0);
};

// Função para contar os itens de checkedItems em cada tipo de armadura
const countCheckedItems = (armorCategory, checkedItems) => {
  return Object.keys(armorCategory).reduce((counts, type) => {
    counts[type] = armorCategory[type].filter(item => checkedItems[item]).length;
    return counts;
  }, {});
};

// Exemplo de uso com os dados de checkedItems armazenados no navegador
const checkedItems = JSON.parse(localStorage.getItem("checkedItems"));

// Contagens para cada categoria de armaduras com itens marcados em checkedItems
const gbCheckedCounts = countCheckedItems(gb, checkedItems);
const akCheckedCounts = countCheckedItems(ak, checkedItems);
const fkCheckedCounts = countCheckedItems(fk, checkedItems);
const dhCheckedCounts = countCheckedItems(dh, checkedItems);
const duCheckedCounts = countCheckedItems(du, checkedItems);

// Exportando as contagens de itens totais e itens verificados
export {
  gb, ak, fk, dh, du,
  gbCounts, akCounts, fkCounts, dhCounts, duCounts,
  gbCheckedCounts, akCheckedCounts, fkCheckedCounts, dhCheckedCounts, duCheckedCounts,
  getTotalCount
};
