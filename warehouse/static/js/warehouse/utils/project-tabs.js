export default () => {
  const tabContent = ".-js-vertical-tab-content";
  const tabButtons = ".-js-vertical-tab, .-js-vertical-tab-mobile-heading";
  const activeClass = "vertical-tabs__tab--is-active";

  let tabs = document.querySelectorAll(tabContent);

  // is there a better way to do this? Or will the `warehouse/index.js` be
  // loaded on every page?
  if (tabs.length == 0) return;


  // reveals the hash content, hides all other content
  const toggleTab = (tab) => {
    var content = tab.nextElementSibling;
    if (`#${content.id}` === location.hash) {
      tab.classList.add(activeClass);
      content.style.display = "block";
    } else {
      tab.classList.remove(activeClass);
      content.style.display = "none";
    }
  };

  // the query could be done outside of this function call, so it doesn"t
  // need to be queried everytime there"s a click, but I worry about unforseen
  // mutations in the DOM
  const setTab = (tab, event) => {
    event.preventDefault();
    history.pushState(null, "", tab.href);
    for (tab of document.querySelectorAll(tabButtons)) {
      toggleTab(tab);
    }
  };

  for (let tab of tabs) {
    tab.addEventListener("click", setTab.bind(null, tab), false);
  }

  // sets the default tab up on page load
  var initialContent = document.getElementById(location.hash);
  if (initialContent && initialContent.previousElementSibling.href.includes(location.hash)) {
    toggleTab(initialContent.previousElementSibling);
  } else {
    toggleTab(tabs[0]);
  }

  // I'm not sure if this is needed?
  window.addEventListener("hashchange", () => {
    var element = document.getElementById(location.hash);
    if (element) toggleTab(element);
  }, false);
};