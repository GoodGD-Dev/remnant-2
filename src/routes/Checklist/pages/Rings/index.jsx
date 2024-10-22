import ringsData from "../../../../data/rings.json";
import DynamicChecklist from "../../../../components/DynamicChecklist";

const Rings = () => {
  return (
    <div>
      <DynamicChecklist data={ringsData} />
    </div>
  );
};

export default Rings;
