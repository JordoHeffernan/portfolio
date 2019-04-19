'use strict';

const portfolio = (function () {

  function getIdFromElement(item) {
    const id = $(item).siblings('.project-description');
    return id;
  }

  function handleProjectItemClick() {
    $('.projects').on('click', '.project-item img', event => {
      event.preventDefault();
      const details = getIdFromElement(event.currentTarget);
      details.toggleClass('hide');
    });
  }

  function bindEventListeners() {
    handleProjectItemClick();
  }

  return {
    bindEventListeners: bindEventListeners
  };

}())