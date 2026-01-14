// utils/uploadToCloudinary.js
import api from "./axiosConfig";

export const uploadToCloudinary = async (file) => {
  if (!file) return null;

  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post(
    "/api/v1/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  return response.data.url; // <-- STRING URL
};
