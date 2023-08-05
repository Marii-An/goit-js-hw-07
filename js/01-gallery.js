import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".js-gallery");

const markup = galleryItems
  .map(
    ({
      preview,
      description,
      original,
    }) => `<li class="gallery__item js-target js-target">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image js-target"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
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

  const instance = basicLightbox.create(
    `
<div>
  <img
    class="gallery__link"
    width="800px"
    src="${currentItem.original}"
    alt="${currentItem.description}"
  />
</div>
`
  );

  instance.show();

  document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
