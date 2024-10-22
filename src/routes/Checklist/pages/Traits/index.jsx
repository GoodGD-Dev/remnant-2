import traitsData from "../../../../data/traits.json";
import DynamicChecklist from "../../../../components/DynamicChecklist";

const Traits = () => {
  return (
    <div>
      <DynamicChecklist data={traitsData} />
    </div>
  );
};

export default Traits;
