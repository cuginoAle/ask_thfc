import { BASE_DATA } from "../utils/getPageData";
import tracker from "../utils/tracker";

import debounce from "../utils/debounce";

export default (data: BASE_DATA) => {
  const searchBox = document.getElementById("query") as HTMLInputElement;

  if (searchBox) {
    const form = searchBox.closest("form");

    form.addEventListener("submit", (e) => {
      tracker({
        ...data,
        search_keyword: searchBox.value,
        search_type: "site_search",
        event: "content_searched",
      });
    });
  }

  const suggestions: HTMLElement = document.querySelector(
    "span.algolia-autocomplete"
  );

  if (!suggestions) return;

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: false, subtree: false };

  // let's not fire the event too often
  const debouncedTeacker = debounce(tracker, 500);

  // Callback function to execute when mutations are observed
  const callback = function (mutationsList) {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        const showSuggestions = suggestions.style.display !== "none";

        if (showSuggestions) {
          debouncedTeacker({
            ...data,
            search_keyword: searchBox.value,
            search_type: "site_search",
            event: "content_searched",
          });
        }
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(suggestions, config);

  // // Later, you can stop observing
  // observer.disconnect();
};
