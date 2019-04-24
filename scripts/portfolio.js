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



  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('projects').scrollLeft -= (delta * 40); // Multiplied by 40
    e.preventDefault();
  }
  if (document.getElementById('projects').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('projects').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.getElementById('projects').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementById('projects').attachEvent("onmousewheel", scrollHorizontally);
  }

  function bindEventListeners() {
    handleProjectItemClick();
    scrollHorizontally();
  }

  return {
    bindEventListeners: bindEventListeners,

  };

}())