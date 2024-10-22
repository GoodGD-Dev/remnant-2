import classesData from "../../../../data/classes.json";
import DynamicChecklist from "../../../../components/DynamicChecklist";

const Classes = () => {
  return (
    <div>
      <DynamicChecklist data={classesData} />
    </div>
  );
};

export default Classes;
