import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

cloudinary.config(cloudinaryConfig);

const signUploadToken = async ()=>{
  const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder: "uploads", expires_at: timestamp + 120 }, // Expires in 120 seconds
      process.env.CLOUDINARY_API_SECRET
    );

    return { signature, timestamp };
}

export { cloudinary, signUploadToken };
