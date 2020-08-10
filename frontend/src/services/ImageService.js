const { default: Axios } = require("axios");

const uploadImage = (images) => {
  let urls = [];
  const cloudinary_api =
    "https://api.cloudinary.com/v1_1/ravikanth/image/upload";
  console.log(images);

  Array.from(images).forEach(async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ah8lqovg");
    await Axios.post(cloudinary_api, data).then((res) => {
      urls.push(res.data.secure_url.substring(50));
    });
  });
  console.log(urls);

  return urls;
};

export default uploadImage;
