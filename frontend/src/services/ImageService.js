const { default: Axios } = require("axios");
const cloudinary_api = "https://api.cloudinary.com/v1_1/ravikanth/image/upload";
class ImageService {
  uploadImage = (images) => {
    let urls = [];
    console.log(images);

    Array.from(images).forEach(async (image) => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "ah8lqovg");
      const res = await Axios.post(cloudinary_api, data);
      urls.push(res.data.secure_url.substring(50));
    });

    return urls;
  };
}
export default new ImageService();
