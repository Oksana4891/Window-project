const gallery = [
  {
    preview: 'images/our_works/1.png',
    original: 'images/our_works/big_img/1.png',
    description: 'work1',
  },
  {
    preview: 'images/our_works/2.png',
    original: 'images/our_works/big_img/2.png',
    description: 'work2',
  },
  {
    preview: 'images/our_works/3.png',
    original: 'images/our_works/big_img/3.png',
    description: 'work3',
  },
  {
    preview: 'images/our_works/4.png',
    original: 'images/our_works/big_img/4.png',
    description: 'work4',
  },
  {
    preview: 'images/our_works/5.png',
    original: 'images/our_works/big_img/5.png',
    description: 'work5',
  },
  {
    preview: 'images/our_works/6.png',
    original: 'images/our_works/big_img/6.png',
    description: 'work6',
  },
  {
    preview: 'images/our_works/7.png',
    original: 'images/our_works/big_img/7.png',
    description: 'work7',
  },
  {
    preview: 'images/our_works/8.png',
    original: 'images/our_works/big_img/8.png',
    description: 'work8',
  },
];

function createGallery(galleryListSelector, modalSelector, bigImageSelector, closeButtonSelector, rightButtonSelector, leftButtonSelector) {
  const galleryList = document.querySelector(galleryListSelector),
    imgModal = document.querySelector(modalSelector),
    bigImage = document.querySelector(bigImageSelector),
    closeButton = document.querySelector(closeButtonSelector),
    rightButton = document.querySelector(rightButtonSelector),
    leftButton = document.querySelector(leftButtonSelector);

  // ----------------Create Gallery
  galleryList.insertAdjacentHTML('beforeend', createGalleryList(gallery));

  function createGalleryList(gallery) {
    return gallery.map(item => createGalleryItem(item)).join('');
  }

  function createGalleryItem({ preview, original, description }) {
    const galleryItem = `
    <li class="gallery__item js-gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
    `;
    return galleryItem;
  }
  // ------------------/


  // Open Modal

  galleryList.addEventListener('click', handleOpenModal);

  function handleOpenModal(event) {
    event.preventDefault();
    if (event.target.matches('img')) {
      imgModal.classList.add('is-open');
      imgModal.classList.add('faded');
      document.body.style.overflow="hidden";
      bigImage.alt = event.target.alt;
      bigImage.src = event.target.dataset.source;
      window.addEventListener('keydown', handleCloseModal);
      imgModal.addEventListener('click', handleCloseModal);
      closeButton.addEventListener('click', handleCloseModal);
      window.addEventListener('keydown', handleScrollImg);
      rightButton.addEventListener('click', handleScrollImg);
      leftButton.addEventListener('click', handleScrollImg);
    } else {
      return;
    }
  }

  function handleCloseModal(event) {
    if (event.target === event.currentTarget || event.code === 'Escape') {
      imgModal.classList.remove('is-open');
      imgModal.classList.remove('faded');
      document.body.style.overflow="visible";
      bigImage.alt = '';
      bigImage.src = '';
      window.removeEventListener('keydown', handleCloseModal);
      window.removeEventListener('keydown', handleScrollImg);
    }
  }

  function handleScrollImg(event) {
    let indexImg; 
    gallery.forEach((elem, i) => {
      if (elem.description == bigImage.alt) {
        indexImg = i;  
      }
    });
    if (event.code === 'ArrowRight' || event.target === rightButton) {
      if (indexImg >= gallery.length - 1) {
        return;
      }
      bigImage.alt = gallery[indexImg + 1].description;
      bigImage.src = gallery[indexImg + 1].original;   

    }
    if (event.code === 'ArrowLeft' || event.target === leftButton) {
      if (indexImg === 0) {
        return
      }
      bigImage.alt = gallery[indexImg - 1].description;
      bigImage.src = gallery[indexImg - 1].original;
    }
  }

}

createGallery('.js-gallery', '.js-works_modal', '.js-modal_img', '.modal_button-close', '.modal_button-right', '.modal_button-left');
