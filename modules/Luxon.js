/* eslint-disable import/prefer-default-export */
import { DateTime } from 'https://cdn.skypack.dev/pin/luxon@v1.25.0-eJ0huVGu0UHPYM5jmyYv/mode=imports/optimized/luxon.js';

export const Date = () => {
  const now = DateTime.local();
  const showDate = document.querySelector('.date');
  showDate.textContent = now;
};
