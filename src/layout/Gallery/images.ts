const files = ["18.webp","23.webp","05.webp","15.webp","02.webp","07.webp","17.webp","13.webp","03.webp","08.webp","12.webp","10.webp","04.webp","19.webp","20.webp","22.webp","06.webp","14.webp","21.webp","11.webp","16.webp","09.webp"];
export const images = files.map((file) => `/resized_img_640x960/${file}`);
export const resizedImages = files.map((file) => `/resized_img_320x480/${file}`);
