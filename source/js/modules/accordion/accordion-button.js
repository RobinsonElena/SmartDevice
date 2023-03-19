const initAccordionButton = () => {
  if (accordionButton && accordionElement && parent) {
    accordionButton.addEventListener('click', accordionButtonClickHandler);
  }
};

const parent = document.querySelector('[data-accordion="parent"]');
const accordionElement = parent.querySelector('[data-accordion="element"]');
const accordionButton = parent.querySelector('[data-accordion="button"]');

const accordionButtonClickHandler = () => {
  if (!accordionElement.classList.contains('is-active')) {
    accordionButton.textContent = 'Свернуть';
  } else {
    accordionButton.textContent = 'Подробнее';
  }
};

export {initAccordionButton};
