import { useState, useMemo } from "react";
import GameChecklist from "../GameChecklist";
import Sidebar from "../Sidebar";

const DynamicChecklist = ({ data }) => {
  const [content, setContent] = useState("tap0");

  // Extrair automaticamente todas as categorias do JSON
  const categories = useMemo(() => {
    return Object.keys(data[0] || {}).map((category, index) => ({
      label: `${category} (${data[0][category]?.length || 0})`,
      value: `tap${index}`,
      items: data[0][category] || [],
    }));
  }, [data]);

  // Criar dinamicamente o mapeamento de conteúdo baseado nas categorias
  const contentMap = useMemo(() => {
    return categories.reduce((map, category, index) => {
      map[`tap${index}`] = <GameChecklist items={category.items} />;
      return map;
    }, {});
  }, [categories]);

  return (
    <div className="d-flex">
      <Sidebar
        menuItems={categories.map((category) => ({
          label: category.label,
          value: category.value,
        }))}
        setContent={setContent}
      />
      <div className="p-4">
        {contentMap[content] || <div>Content not found</div>}
      </div>
    </div>
  );
};

export default DynamicChecklist;
