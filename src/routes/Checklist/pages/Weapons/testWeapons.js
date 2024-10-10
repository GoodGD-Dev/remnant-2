import weaponsData from '../../../../data/checklistdata.json' assert { type: 'json' };

// Função para separar as categorias e subcategorias, incluindo os objetos dentro delas
function separateWeapons(data) {
  const separatedData = {};

  data.Weapons.forEach(category => {
    for (const mainCategory in category) {
      // Inicializa o array da categoria principal no objeto separatedData
      separatedData[mainCategory] = {};

      // Verifica se a categoria contém subcategorias
      if (Array.isArray(category[mainCategory])) {
        category[mainCategory].forEach(subCategory => {
          for (const subCatName in subCategory) {
            // Salva os objetos dentro de cada subcategoria
            separatedData[mainCategory][subCatName] = subCategory[subCatName];
          }
        });
      }
    }
  });

  return separatedData;
}

// Chamar a função para separar e obter os dados
const separatedData = separateWeapons(weaponsData);

// Exemplo de exibição dos dados
Object.keys(separatedData).forEach(mainCategory => {
  console.log(`\nCategory: ${mainCategory}`);

  Object.keys(separatedData[mainCategory]).forEach(subCatName => {
    console.log(`  Subcategory: ${subCatName}`);

    // Exibe os objetos/armas dentro da subcategoria
    if (separatedData[mainCategory][subCatName].length > 0) {
      console.log(`    Weapons:`, separatedData[mainCategory][subCatName]);
    } else {
      console.log(`    No weapons found in ${subCatName}.`);
    }
  });
});

export default separateWeapons;
