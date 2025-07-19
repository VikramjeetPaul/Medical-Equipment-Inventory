export interface ResourceWrapper {
  serialNumber: string;
  productName: string;
  fdaApprovalNumber?: string;
  shortDescription?: string;
  manufacturer?: string;
  barcodeNumber?: string;
  itemValue: number;
  quantity: number;
  totalValue: number;
}
