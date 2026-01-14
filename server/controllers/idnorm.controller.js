import axios from "axios";
import KYC from "../models/kycModel.js";

export const createIdNormSession = async (req, res) => {
  try {
    const { kycId } = req.body; // KYC document ID
    const callbackUrl = `${process.env.FRONTEND_URL}/homepage`; // where user will return
    const configId = process.env.IDNORM_FLOW_ID; // IDNorm flow you configured

    const kyc = await KYC.findById(kycId);
    if (!kyc) return res.status(404).json({ success: false, message: "KYC not found" });

    const response = await axios.post(
      "https://api.idnorm.com/api/v1/create_session",
      {
        configId,
        callbackUrl,
        externalUserId: kyc.user.toString() // link session to your user
      },
      {
        headers: {
          "Idnorm-License-Key": process.env.IDNORM_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    // Save session info to KYC document
    kyc.idnormSessionId = response.data.sessionId;
    kyc.verificationStatus = "pending";
    await kyc.save();

    return res.status(201).json({
      success: true,
      redirectUrl: response.data.verificationUrl
    });

  } catch (error) {
    console.error("IDNorm session creation error:", error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Failed to create IDNorm session" });
  }
};
