export type WarframeItem = {
  name: string;
  uniqueName: string;
  description?: string;
  isPrime?: boolean;
  wikiaThumbnail?: string;
  components?: WarframeComponent[];
  vaulted: boolean;
};

export type WarframeComponent = {
  name: string;
  itemCount: number;
};

export type WeaponType = "Primary" | "Secondary" | "Melee";
