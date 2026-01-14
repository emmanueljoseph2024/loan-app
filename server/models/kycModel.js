import mongoose from "mongoose";

const KYCSchema = new mongoose.Schema(
  {
    user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Signup",
  required: true,
  unique: true
}
,
    /* =======================
       Personal Information
    ======================= */
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    dob: {
      type: Date,
      required: true
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true
    },

    nationality: {
      type: String,
      required: true,
      trim: true
    },

    /* =======================
       Identification
    ======================= */
    idType: {
      type: String,
      enum: ["passport", "nationalID", "driverLicense"],
      required: true
    },

    idNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    idPhoto: {
      type: String, // file URL
      required: true
    },

    selfie: {
      type: String, // file URL
      required: true
    },

    /* =======================
       Contact Information
    ======================= */
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },

    phone: {
      type: String,
      required: true,
      trim: true
    },

    address: {
      type: String,
      required: true,
      trim: true
    },

    proofOfAddress: {
      type: String, // file URL
      required: true
    },

    /* =======================
       Financial Information
    ======================= */
    employmentStatus: {
      type: String,
      enum: ["employed", "selfEmployed", "student", "unemployed"],
      required: true
    },

    monthlyIncome: {
      type: Number,
      required: true
    },

    employer: {
      type: String,
      trim: true
    },

    jobTitle: {
      type: String,
      trim: true
    },

    sourceOfFunds: {
      type: String,
      trim: true
    },

    /* =======================
       Consents & Agreements
    ======================= */
    consentCreditCheck: {
      type: Boolean,
      required: true
    },

    agreeTerms: {
      type: Boolean,
      required: true
    },

    /* =======================
       KYC Status Tracking
    ======================= */
    kycStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    },

    rejectionReason: {
      type: String
    },

/* =======================
   Identity Verification (ID Norm)
======================= */
verificationProvider: {
  type: String,
  enum: ["idnorm"],
  default: "idnorm"
},

idnormSessionId: {
  type: String,
  index: true
},

verificationStatus: {
  type: String,
  enum: [
    "not_started",
    "pending",
    "verified",
    "failed"
  ],
  default: "pending"
},

verificationStartedAt: {
  type: Date,
  default: null
},

verificationCompletedAt: {
  type: Date,
  default: null
},

verificationFailureReason: {
  type: String,
  default: null
},

// Stores full webhook payload from ID Norm (MongoDB-friendly)
verificationRawResponse: {
  type: mongoose.Schema.Types.Mixed,
  default: null
},
verificationResult:{
  type: Object,
  default:null
}
,
/* =======================
   Admin Review & Override
======================= */
adminReviewed: {
  type: Boolean,
  default: false
},

adminReviewedBy: {
  type: String, // admin email or ID
  default: null
},

adminReviewedAt: {
  type: Date,
  default: null
},

adminDecision: {
  type: String,
  enum: ["approved", "rejected"],
  default: null
},

adminComment: {
  type: String,
  default: null
}

  },
  {
    timestamps: true
  }
);

export default mongoose.model("KYC", KYCSchema);
