import { type WarframeComponent, type WarframeItem } from "./types";
import { Card } from "flowbite-react";
import { FaLock } from "react-icons/fa";

const PrimeItem: React.FC<WarframeItem> = ({ name, wikiaThumbnail, components, vaulted }) => {
  return (
    <Card className="max-w-sm" imgAlt={name} imgSrc={wikiaThumbnail}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name} {vaulted && <FaLock />}
      </h5>

      {components &&
        components
          .filter((component: WarframeComponent) => !component.name.includes("Orokin"))
          .map((component: WarframeComponent, i) => (
            <p key={i} className="font-normal text-gray-700 dark:text-gray-400">
              {component.name}
              {component.itemCount > 1 && ` - ${component.itemCount}`}
            </p>
          ))}
    </Card>
  );
};

export default PrimeItem;
