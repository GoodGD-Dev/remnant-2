import {
  gbCounts,
  akCounts,
  fkCounts,
  dhCounts,
  duCounts,
  getTotalCount,
} from "../Armors/armorsSets";

function ArmorsSummary() {
  return (
    <>
      <div>
        <h1>Contagem de Armors</h1>
        <ul>
          <li>
            Game Base {getTotalCount(gbCounts)}
            <ul>
              <li>Light Armors {gbCounts.Light}</li>
              <li>Medium Armors {gbCounts.Medium}</li>
              <li>Heavy Armors {gbCounts.Heavy}</li>
              <li>Ultra Armors {gbCounts.Ultra}</li>
              <li>Heads {gbCounts.Head}</li>
            </ul>
          </li>
          <li>
            The Awakened King {getTotalCount(akCounts)}
            <ul>
              <li>Light Armors {akCounts.Light}</li>
              <li>Medium Armors {akCounts.Medium}</li>
              <li>Heavy Armors {akCounts.Heavy}</li>
              <li>Ultra Armors {akCounts.Ultra}</li>
              <li>Heads {akCounts.Head}</li>
            </ul>
          </li>
          <li>
            The Forgotten Kingdom {getTotalCount(fkCounts)}
            <ul>
              <li>Light Armors {fkCounts.Light}</li>
              <li>Medium Armors {fkCounts.Medium}</li>
              <li>Heavy Armors {fkCounts.Heavy}</li>
              <li>Ultra Armors {fkCounts.Ultra}</li>
              <li>Heads {fkCounts.Head}</li>
            </ul>
          </li>
          <li>
            The Dark Horizon {getTotalCount(dhCounts)}
            <ul>
              <li>Light Armors {dhCounts.Light}</li>
              <li>Medium Armors {dhCounts.Medium}</li>
              <li>Heavy Armors {dhCounts.Heavy}</li>
              <li>Ultra Armors {dhCounts.Ultra}</li>
              <li>Heads {dhCounts.Head}</li>
            </ul>
          </li>
          <li>
            Delux/Ultimate Edition {getTotalCount(duCounts)}
            <ul>
              <li>Light Armors {duCounts.Light}</li>
              <li>Medium Armors {duCounts.Medium}</li>
              <li>Heavy Armors {duCounts.Heavy}</li>
              <li>Ultra Armors {duCounts.Ultra}</li>
              <li>Heads {duCounts.Head}</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ArmorsSummary;
