"use server";

import axios from "axios";

const CLOUD_NAME = process.env.cloud_name;

type TType = "image" | "pdf";

export const uploadFileToCloudinary = async (
  image: File,
  type: TType
): Promise<string> => {
  const UPLOAD_PRESET_IMAGE = process.env.cloud_preset_image as string;
  const UPLOAD_PRESET_PDF = process.env.cloud_preset_pdf as string;

  const preset = type === "image" ? UPLOAD_PRESET_IMAGE : UPLOAD_PRESET_PDF;
  const resourceType = type === "image" ? "image" : "raw";

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", preset);

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`,
    formData
  );

  if (response.status !== 200) {
    throw new Error(`Failed to upload ${type}.`);
  }

  return response.data.secure_url;
};
