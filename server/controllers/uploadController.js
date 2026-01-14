import cloudinary from "../config/cloudinary.config.js";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Empty file" });

    const result = await cloudinary.uploader.upload(req.file.path);

    return res.status(200).json({ 
      message: "File uploaded", 
      url: result.secure_url // <- string URL
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Upload failed" });
  }
};
