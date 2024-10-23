import DynamicChecklist from "../../../../components/DynamicChecklist";
import amuletsData from "../../../../data/amulets.json";

const Amulets = () => {
  return (
    <div>
      <DynamicChecklist data={amuletsData} />
    </div>
  );
};

export default Amulets;
