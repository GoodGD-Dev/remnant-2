import { weaponCounts } from "../../Weapons/index";
function WeaponsSummary() {
  return (
    <div>
      <h1>Contagem de Armas</h1>
      <ul>
        {Object.entries(weaponCounts).map(([category, counts]) => (
          <li key={category}>
            {category}:
            <ul>
              {Object.entries(counts).map(([gameName, count]) => (
                <li key={gameName}>
                  {gameName}: {count} itens
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeaponsSummary;
