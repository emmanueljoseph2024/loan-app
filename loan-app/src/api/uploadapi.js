import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1";

/**
 * Uploads a file (image or document) to Cloudinary via backend
 * @param {File} file - The file selected from input
 * @param {string} fieldName - Field name (idPhoto, selfie, proofOfAddress)
 * @returns {string} Cloudinary secure URL
 */
export const uploadFile = async (file, fieldName) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fieldName", fieldName);

    const response = await axios.post(
      `${API_BASE_URL}/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    return response.data.url;
  } catch (error) {
    console.error("File upload error:", error);
    throw new Error("File upload failed");
  }
};
