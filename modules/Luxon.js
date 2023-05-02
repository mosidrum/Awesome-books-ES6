import { DateTime } from "https://cdn.skypack.dev/luxon@1.25.0";

export const Date = () => {
  const now = DateTime.local();
  const showDate = document.querySelector('.date')
  showDate.textContent = now;
}