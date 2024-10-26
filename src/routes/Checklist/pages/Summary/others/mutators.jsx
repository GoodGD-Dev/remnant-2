import { rangedCounts, meleeCounts } from "../../Mutators/index";

function MutatorsSummary() {
  return (
    <>
      <div>
        <h1>Contagem de Ranged</h1>
        <ul>
          {Object.entries(rangedCounts).map(([category, count]) => (
            <li key={category}>{`${category}: ${count}`}</li>
          ))}
        </ul>
        <h1>Contagem de Melee</h1>
        <ul>
          {Object.entries(meleeCounts).map(([category, count]) => (
            <li key={category}>{`${category}: ${count}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MutatorsSummary;
