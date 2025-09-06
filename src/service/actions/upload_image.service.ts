"use server";

import axios from "axios";

const CLOUD_NAME = process.env.cloud_name;
const UPLOAD_PRESET = process.env.cloud_preset as string;

export const uploadImageToCloudinary = async (image: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    formData
  );

  if (response.statusText !== "OK") {
    throw new Error("Failed to upload image.");
  }

  return response.data.secure_url;
};
