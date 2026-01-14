import axios from "axios";

const IDNORM_BASE_URL = "https://api.idnorm.com/api/v1";

export const getFlows = async () => {
  const res = await axios.get(`${IDNORM_BASE_URL}/configurations`, {
    headers: {
      "Idnorm-License-Key": process.env.IDNORM_API_KEY
    }
  });

  return res.data.configurations;
};

export const createVerificationSession = async (flowId) => {
  const res = await axios.post(
    `${IDNORM_BASE_URL}/create_session`,
    { config_id: flowId },
    {
      headers: {
        "Idnorm-License-Key": process.env.IDNORM_API_KEY,
        "Content-Type": "application/json"
      }
    }
  );

  return res.data;
};
