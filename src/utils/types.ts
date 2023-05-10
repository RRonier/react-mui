export interface Stocks {
  currency: string;
  value: string;
  informationText?: string;
  rate?: string;
}

export interface DocumentsData {
  name: string;
  status: "signed" | "rejected" | "pending";
}

export interface ActivityCardProps {
  sx: Object;
  name: string;
  price: string;
  store: string;
  ammount: string;
  elapsedTime: string;
  customKey?: number;
}

export type NavbarColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "default"
  | "transparent";
