module.exports = async () => {
  const cloudinary = require("cloudinary").v2;
  cloudinary.config({cloud_name: "firefly-web-services"});
  const heroUrl = await cloudinary.url("Firefly Web Services/romain-briaux-yD3PXDV7Sjc-unsplash", {
    effect: "auto_contrast",
    fetch_format: "auto",
    opacity: 50
  });
  
  return ({ "heroUrl": heroUrl});
};