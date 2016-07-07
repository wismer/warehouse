export default () => {
  const togglePanelDisplay = (display, event) => {
    event.preventDefault();
    var elements = document.querySelectorAll('.-js-dark-overlay, .-js-filter-panel');
    for (var el of elements) {
      el.style.display = display
    }
  }

  const toggleEvent = (element, display) => {
    element.addEventListener('click', togglePanelDisplay.bind(null, display), false);
  }

  var showPanel = document.querySelector('.-js-add-filter');
  var hidePanel = document.querySelector('.-js-close-panel');

  toggleEvent(showPanel, 'block');
  toggleEvent(hidePanel, 'none');
};