import { useEffect, useState } from "react";
import type { WarframeItem, WeaponType } from "./types";
import PrimeItem from "./PrimeItem";

type WeaponProps = {
  weaponType: WeaponType;
};

const Weapons: React.FC<WeaponProps> = ({ weaponType }) => {
  const [weapons, setWeapons] = useState<WarframeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/WFCD/warframe-items/master/data/json/${weaponType}.json`);
        const data: WarframeItem[] = await res.json();
        setWeapons(data.filter((item) => item.isPrime));
      } catch (err) {
        console.error("Failed to fetch weapons", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeapons();
  }, [weaponType]);

  if (loading) return <p>Loading prime weapons...</p>;

  return (
    <div className="flex flex-col w-full justify-between">
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
        {weapons.map((item, i) => (
          <PrimeItem key={i} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Weapons;
