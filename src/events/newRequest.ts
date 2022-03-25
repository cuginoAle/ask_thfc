import { BASE_DATA } from "../utils/getPageData";
import tracker from "../utils/tracker";

export default (data: BASE_DATA) => {
  const form = document.getElementById("new_request") as HTMLFormElement;

  if (!form) return;

  const submitButton = form.querySelector(
    "input[type='submit']"
  ) as HTMLButtonElement;

  if (submitButton) {
    form.addEventListener("submit", (e) => {
      tracker({
        ...data,
        event: "contact_enquired",
      });
    });
  }
};
