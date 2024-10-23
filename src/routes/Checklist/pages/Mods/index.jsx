import DynamicChecklist from "../../../../components/DynamicChecklist";
import modsData from "../../../../data/mods.json";

const Mods = () => {
  return (
    <div>
      <DynamicChecklist data={modsData} />
    </div>
  );
};

export default Mods;
