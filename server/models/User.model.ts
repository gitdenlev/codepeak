import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

// Interface for scan results
interface IScanResult {
  filename: string;
  fileType: string;
  fileSize: number;
  scannedAt: Date;
  tag: "extended" | "best";
  classificationResults: { label: string; confidence: number }[];
  processingTime: number;
  resolution: { width: number; height: number };
  readonly modelVersion: "ResNet-50";
}

// User interface
interface IUser {
  username: string;
  email: string;
  password: string;
  scans: IScanResult[]; // Масив результатів сканування
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Scan result schema
const scanResultSchema = new Schema<IScanResult>(
  {
    filename: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: Number, required: true },
    scannedAt: { type: Date, default: Date.now },
    tag: { type: String, enum: ["extended", "best"], required: true },
    classificationResults: [
      {
        label: { type: String, required: true },
        confidence: { type: Number, required: true },
      },
    ],
    processingTime: { type: Number, required: true },
    resolution: {
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
    modelVersion: { type: String, default: "ResNet-50", immutable: true },
  },
  { _id: false }
);

// Schema for user
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters long"],
    },
    scans: [scanResultSchema],
  },
  {
    timestamps: true,
  }
);

// Hashing password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    return false;
  }
};

// Create model
const User = model<IUser>("User", userSchema);

export default User;