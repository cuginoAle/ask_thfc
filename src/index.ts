import pageView from "./events/pageView";
import searchBox from "./events/searchBox";
import getPageData from "./utils/getPageData";
import { logError, logInfo } from "./utils/logger";
declare global {
  interface Window {
    GTM_ID: string;
    dataLayer: any[];
  }
}

// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s) as HTMLScriptElement,
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  j.onload = () => {
    logInfo("GTM loaded");
    if (document.readyState === "complete") {
      __init__();
    } else {
      window.addEventListener("load", __init__);
    }
  };
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", window.GTM_ID);
// End Google Tag Manager

// init function to be called when the page is loaded
function __init__() {
  const pageData = getPageData();

  pageView(pageData);
  searchBox(pageData);
}
