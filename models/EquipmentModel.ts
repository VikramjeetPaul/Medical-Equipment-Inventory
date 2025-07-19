import mongoose, { Schema } from "mongoose";

const EquipmentSchema = new Schema({
  serialNumber: String,
  productName: String,
  fdaApprovalNumber: String,
  shortDescription: String,
  manufacturer: String,
  barcodeNumber: String,
  itemValue: Number,
  quantity: Number,
  totalValue: Number,
});

export default mongoose.models.Equipment ||
  mongoose.model("Equipment", EquipmentSchema);