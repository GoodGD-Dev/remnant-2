import relicsData from "../../../../data/relics.json";
import DynamicChecklist from "../../../../components/DynamicChecklist";

const Relics = () => {
  return (
    <div>
      <DynamicChecklist data={relicsData} />
    </div>
  );
};

export default Relics;
