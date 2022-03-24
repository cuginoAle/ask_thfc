import { BASE_DATA } from "../utils/getPageData";
import tracker from "../utils/tracker";

export default (data: BASE_DATA) => {
  tracker({
    ...data,
    event: "page_viewed",
  });
};
