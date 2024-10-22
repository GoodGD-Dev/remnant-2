import modsData from "../../../../data/mods.json";
import DynamicChecklist from "../../../../components/DynamicChecklist";

const Mods = () => {
  return (
    <div>
      <DynamicChecklist data={modsData} />
    </div>
  );
};

export default Mods;
