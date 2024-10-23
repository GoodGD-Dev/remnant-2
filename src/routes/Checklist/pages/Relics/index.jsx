import DynamicChecklist from "../../../../components/DynamicChecklist";
import relicsData from "../../../../data/relics.json";

const Relics = () => {
  return (
    <div>
      <DynamicChecklist data={relicsData} />
    </div>
  );
};

export default Relics;
