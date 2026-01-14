import axios from "axios";

export const startIdNormVerification = async (kycId) => {
  const res = await axios.post(
    "http://localhost:8000/api/v1/idnorm/start",
    {
      kycId,
      flowId: "YOUR_FLOW_ID_HERE"
    }
  );

  return res.data;
};
