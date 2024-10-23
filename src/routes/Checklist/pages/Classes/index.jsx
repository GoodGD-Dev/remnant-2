import DynamicChecklist from "../../../../components/DynamicChecklist";
import classesData from "../../../../data/classes.json";

const Classes = () => {
  return (
    <div>
      <DynamicChecklist data={classesData} />
    </div>
  );
};

export default Classes;
