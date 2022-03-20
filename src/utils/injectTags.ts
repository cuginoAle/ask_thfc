import { logError } from "./logger";

const injectScripts = (src: string, cb?: () => null) => {
  // injecting the script
  const script = document.createElement("script");
  script.setAttribute("src", src);

  script.onerror = function handleScriptError() {
    logError("error loading script");
  };

  script.onload = cb;

  document.head.appendChild(script);
};

const injectStyles = (href) => {
  // injecting custom CSS
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", href);
  document.head.appendChild(link);
};

export { injectScripts, injectStyles };
