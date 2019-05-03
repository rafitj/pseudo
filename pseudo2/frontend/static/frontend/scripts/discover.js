/**
 * Inspired by Search from sandeep virk
 * https://dribbble.com/shots/1992789-Search
 */

const body = document.querySelector('body');
const searchElement = document.querySelector('[data-search]');
const searchInputElement = searchElement.querySelector('[data-search-input]');
const searchControlElement = searchElement.querySelector('[data-search-control]');
const searchOpenClass = 'is-Search-open';


searchControlElement.addEventListener('click', () => {
  searchInputElement.value = '';
  searchInputElement.focus();
});
