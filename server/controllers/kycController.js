import KYC from "../models/kycModel.js";

/* ===========================
   CREATE KYC
=========================== */
export const createKYC = async (req, res) => {
  try {
    const kycData = req.body;

    // Basic validation (extra safety)
    if (!kycData.fullName || !kycData.email || !kycData.idNumber) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing"
      });
    }

    // Check if KYC already exists
    const existingKYC = await KYC.findOne({
      $or: [
        { email: kycData.email },
        { idNumber: kycData.idNumber }
      ]
    });

    if (existingKYC) {
      return res.status(409).json({
        success: false,
        message: "KYC already exists for this user"
      });
    }

    const newKYC = new KYC(kycData);
    await newKYC.save();

    res.status(201).json({
      success: true,
      message: "KYC submitted successfully",
      data: newKYC
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create KYC",
      error: error.message

    });
    console.log(error);
  }
};


//get kyc id by user id

export const getUserKYC = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.user._id;

    const userKYC = await KYC.findOne({ user: userId });

    if (!userKYC) {
      return res.status(404).json({
        success: false,
        message: "KYC record not found for this user"
      });
    }

    return res.status(200).json({
      success: true,
      data: userKYC
    });

  } catch (error) {
    console.error("🔥 getUserKYC error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch KYC"
    });
  }
};



/* ===========================
   GET KYC BY ID
=========================== */
export const getKYCById = async (req, res) => {
  try {
    const { id } = req.params;

    const kyc = await KYC.findById(id);

    if (!kyc) {
      return res.status(404).json({
        success: false,
        message: "KYC record not found"
      });
    }

    res.status(200).json({
      success: true,
      data: kyc
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch KYC",
      error: error.message
    });
  }
};


/* ===========================
   GET ALL KYC
=========================== */
export const getAllKYC = async (req, res) => {
  try {
    const kycs = await KYC.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: kycs.length,
      data: kycs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch KYCs",
      error: error.message
    });
  }
};


/* ===========================
   DELETE KYC
=========================== */
export const deleteKYC = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedKYC = await KYC.findByIdAndDelete(id);

    if (!deletedKYC) {
      return res.status(404).json({
        success: false,
        message: "KYC record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "KYC deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete KYC",
      error: error.message
    });
  }
};


/* ===========================
   UPDATE KYC STATUS
=========================== */
export const updateKYCStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { kycStatus, rejectionReason } = req.body;

    if (!["approved", "rejected", "pending"].includes(kycStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid KYC status"
      });
    }

    const updatedKYC = await KYC.findByIdAndUpdate(
      id,
      {
        kycStatus,
        rejectionReason: kycStatus === "rejected" ? rejectionReason : ""
      },
      { new: true }
    );

    if (!updatedKYC) {
      return res.status(404).json({
        success: false,
        message: "KYC record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "KYC status updated successfully",
      data: updatedKYC
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update KYC status",
      error: error.message
    });
  }
};


/* ===========================
   GET KYC BY EMAIL
=========================== */
export const getKYCByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const kyc = await KYC.findOne({ email });

    if (!kyc) {
      return res.status(404).json({
        success: false,
        message: "No KYC found for this email"
      });
    }

    res.status(200).json({
      success: true,
      data: kyc
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch KYC",
      error: error.message
    });
  }
};
