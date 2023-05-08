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
