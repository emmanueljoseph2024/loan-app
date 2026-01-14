export const uploadFile = async (file, fieldName) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fieldName", fieldName);

  const res = await fetch("http://localhost:8000/api/v1/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  if (!data.success) throw new Error("Upload failed");

  return data.url;
};
