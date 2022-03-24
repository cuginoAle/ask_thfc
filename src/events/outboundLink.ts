import { BASE_DATA } from "../utils/getPageData";
import tracker from "../utils/tracker";

export default (data: BASE_DATA) => {
  document.documentElement.addEventListener("click", (e) => {
    const anchor = e.target as HTMLAnchorElement;
    if (anchor.closest("a").origin !== location.origin) {
      tracker({
        ...data,
        event: "link_clicked",
      });
    }
  });
};
