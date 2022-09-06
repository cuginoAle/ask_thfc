import newRequest from './events/newRequest';
import pageView from './events/pageView';
import searchBox from './events/searchBox';
import getPageData from './utils/getPageData';

declare global {
  interface Window {
    GTM_ID: string;
    dataLayer: any[];
  }
}

// The GTM unique ID to use
const GTM_ID_DEV = 'GTM-NZXZZXN';
const GTM_ID_PROD = 'GTM-KFLTKXP';

const GTM_ID = process.env.NODE_ENV === 'production' ? GTM_ID_PROD : GTM_ID_DEV;

// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s) as HTMLScriptElement,
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  j.onload = () => {
    // logInfo("GTM loaded");
    if (document.readyState === 'complete') {
      __init__();
    } else {
      window.addEventListener('load', __init__);
    }
  };
  f.parentNode && f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', GTM_ID);
// End Google Tag Manager

// init function to be called when the page is loaded
function __init__() {
  const pageData = getPageData();

  pageView(pageData);
  searchBox(pageData);
  newRequest(pageData);

  // This is not needed for now
  // outboundLink(pageData);
}
