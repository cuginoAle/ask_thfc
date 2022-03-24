import { BASE_DATA } from "../utils/getPageData";
import tracker from "../utils/tracker";

export default (data: BASE_DATA) => {
  document.documentElement.addEventListener("click", (e) => {
    const el = e.target as HTMLAnchorElement;
    const anchor = el.closest("a");

    if (!anchor) return;

    if (anchor.closest("a").origin !== location.origin) {
      tracker({
        ...data,
        event: "link_clicked",
      });
    }
  });
};
