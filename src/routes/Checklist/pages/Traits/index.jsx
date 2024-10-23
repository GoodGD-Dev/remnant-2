import DynamicChecklist from "../../../../components/DynamicChecklist";
import traitsData from "../../../../data/traits.json";

const Traits = () => {
  return (
    <div>
      <DynamicChecklist data={traitsData} />
    </div>
  );
};

export default Traits;
