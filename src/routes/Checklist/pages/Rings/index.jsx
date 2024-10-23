import DynamicChecklist from "../../../../components/DynamicChecklist";
import ringsData from "../../../../data/rings.json";

const Rings = () => {
  return (
    <div>
      <DynamicChecklist data={ringsData} />
    </div>
  );
};

export default Rings;
