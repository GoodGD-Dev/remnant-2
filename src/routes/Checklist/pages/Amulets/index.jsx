import amuletsData from "../../../../data/amulets.json";
import DynamicChecklist from "../../../../components/DynamicChecklist";

const Amulets = () => {
  return (
    <div>
      <DynamicChecklist data={amuletsData} />
    </div>
  );
};

export default Amulets;
