import { BASE_DATA } from "../utils/getPageData";
import tracker from "../utils/tracker";

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
};
