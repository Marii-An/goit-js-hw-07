import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".js-gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) => `<li class="js-target">
    <img class="gallery__item gallery__image js-target" src="${preview}" alt="${description}" data-source="${original}">
</li >`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("js-target")) {
    return;
  }

  const bigImg =
    event.target.dataset.source ??
    event.target.closest(".js-target").dataset.source;

  const currentItem = galleryItems.find(({ original }) => original === bigImg);
  console.log(currentItem);

  const instance = basicLightbox.create(
    `
<div>
  <img
    class="gallery__link"
    src="${currentItem.original}"
    alt="${currentItem.description}"
  />
</div>
`
  );

  console.log(instance);
  instance.show();
}
