export default function Hero(type) {
  let img1 = "/hero.png";
  let images = {
    rain: [
      "/rainy/r1.png",
      "/rainy/r2.png",
      "/rainy/r3.png",
      "/rainy/r4.png",
      "/rainy/r5.png",
    ],
    sunny: [
      "/sunny/s1.png",
      "/sunny/s2.png",
      "/sunny/s3.png",
      "/sunny/s4.png",
      "/sunny/s5.png",
    ],
    wind: [
      "/wind/w1.png",
      "/wind/w2.png",
      "/wind/w3.png",
      "/wind/w4.png",
      "/wind/w5.png",
    ],
    snow: [
      "/snow/s1.png",
      "/snow/s2.png",
      "/snow/s3.png",
      "/snow/s4.png",
      "/snow/s5.png",
    ],
  };
  let img = "";
  if (type === "r") {
    img = images.rain[Math.floor(Math.random()*5)];
  } else if (type === "s") {
    img = images.snow[2];
  } else if (type === "w") {
    img = images.wind[3];
  } else if (type === "sn") {
    img = images.sunny[4];
  } else img = img1;
  console.log("inside her0");
  console.log(img);
  return img;
}
