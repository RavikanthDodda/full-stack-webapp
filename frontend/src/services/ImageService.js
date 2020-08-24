const { default: Axios } = require("axios");
const cloudinary_api = "https://api.cloudinary.com/v1_1/ravikanth/image/upload";
class ImageService {
  uploadImage = async (images) => {
    let urls = [];
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      const data = new FormData();
      data.append("file", images[i]);
      data.append("upload_preset", "ah8lqovg");
      const res = await Axios.post(cloudinary_api, data);
      urls.push(res.data.secure_url.substring(50));
    }

    console.log(urls);
    return urls;
  };
}
export default new ImageService();
