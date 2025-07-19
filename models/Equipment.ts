import mongoose, { Schema, model, models, Document } from "mongoose";

export interface EquipmentDocument extends Document {
  serialNumber: string;
  productName: string;
  fdaApprovalNumber?: string;
  shortDescription?: string;
  manufacturer?: string;
  barcodeNumber?: string;
  itemValue?: number;
  quantity?: number;
  totalValue?: number;
}

const EquipmentSchema = new Schema<EquipmentDocument>(
  {
    serialNumber: { type: String, required: true },
    productName: { type: String, required: true },
    fdaApprovalNumber: { type: String },
    shortDescription: { type: String },
    manufacturer: { type: String },
    barcodeNumber: { type: String },
    itemValue: { type: Number },
    quantity: { type: Number },
    totalValue: { type: Number },
  },
  { timestamps: true }
);

const Equipment = models.Equipment || model<EquipmentDocument>("Equipment", EquipmentSchema);

export default Equipment;
