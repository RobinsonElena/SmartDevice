import {Accordions} from './accordions';
import {initAccordionButton} from './accordion-button';
let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  initAccordionButton();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};
