import { Directive } from 'vue';

export const clickOutside: Directive = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  beforeUnmount(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};