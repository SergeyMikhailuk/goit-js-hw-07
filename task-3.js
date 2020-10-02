const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");
galleryRef.style.display = "flex";
galleryRef.style.listStyle = "none";

function createImg(img) {
  const itemRef = document.createElement("li");
  const imgRef = document.createElement("img");
  imgRef.src = img.url;
  imgRef.height = 200;
  imgRef.alt = img.alt;
  itemRef.appendChild(imgRef);
  return itemRef;
}

const listItems = images.map((item) => createImg(item));
galleryRef.append(...listItems);
