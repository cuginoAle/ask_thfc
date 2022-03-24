var $416cd8f1c0193c00$export$2e2bcd8739ae039 = (data)=>{
    console.log(data);
    window.dataLayer.push(data);
};


var $b7582d3f8e41c845$export$2e2bcd8739ae039 = (data)=>{
    document.documentElement.addEventListener("click", (e)=>{
        const el = e.target;
        const anchor = el.closest("a");
        if (!anchor) return;
        if (anchor.closest("a").origin !== location.origin) $416cd8f1c0193c00$export$2e2bcd8739ae039({
            ...data,
            event: "link_clicked"
        });
    });
};



var $77dc936101551cde$export$2e2bcd8739ae039 = (data)=>{
    $416cd8f1c0193c00$export$2e2bcd8739ae039({
        ...data,
        event: "page_viewed"
    });
};



const $6f0a4854ef98d5af$var$debounce = (callback, wait)=>{
    let timeoutId = null;
    return (...args)=>{
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(()=>{
            callback.apply(null, args);
        }, wait);
    };
};
var $6f0a4854ef98d5af$export$2e2bcd8739ae039 = $6f0a4854ef98d5af$var$debounce;


var $36779ff9cc53e47d$export$2e2bcd8739ae039 = (data)=>{
    const searchBox = document.getElementById("query");
    const suggestions = document.querySelector("span.algolia-autocomplete");
    if (!searchBox || !suggestions) return;
    const form = searchBox.closest("form");
    form.addEventListener("submit", (e)=>{
        $416cd8f1c0193c00$export$2e2bcd8739ae039({
            ...data,
            search_keyword: searchBox.value,
            search_type: "site_search",
            event: "content_searched"
        });
    });
    // Options for the observer (which mutations to observe)
    const config = {
        attributes: true,
        childList: false,
        subtree: false
    };
    // let's not fire the event too often
    const debouncedTeacker = $6f0a4854ef98d5af$export$2e2bcd8739ae039($416cd8f1c0193c00$export$2e2bcd8739ae039, 500);
    // Callback function to execute when mutations are observed
    const callback = function(mutationsList) {
        for (const mutation of mutationsList)if (mutation.type === "attributes" && mutation.attributeName === "style") {
            const showSuggestions = suggestions.style.display !== "none";
            if (showSuggestions) debouncedTeacker({
                ...data,
                search_keyword: searchBox.value,
                search_type: "site_search",
                event: "content_searched"
            });
        }
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(suggestions, config);
// // // Later, you can stop observing
// // observer.disconnect();
};


const $6e9626a2f720303e$var$baseData = {
    crn: null,
    customer_id: null,
    page_language: navigator.language.split("-")[0],
    login_status: "guest"
};
var $6e9626a2f720303e$export$2e2bcd8739ae039 = ()=>{
    const dataDiv = document.querySelector("#__za_data__");
    const data = Array.from(dataDiv.children).reduce((acc, el)=>{
        const element = el;
        const value = element.innerText;
        if (value) acc[el.id] = value;
        return acc;
    }, {
    });
    const { __user_name__: __user_name__ , ...rest } = data;
    return {
        ...$6e9626a2f720303e$var$baseData,
        login_status: __user_name__ ? "logged_in" : "guest"
    };
};


const $e0f8e7cf88064837$var$error = "color: #ff0909; font-size: 14px; font-weight:bold";
const $e0f8e7cf88064837$var$info = "color: #00a0ff; font-size: 14px; font-weight:bold";
const $e0f8e7cf88064837$export$58da9968c3170cb1 = (...msg)=>console.warn(`%c${msg.join("\n")}`, $e0f8e7cf88064837$var$error)
;
const $e0f8e7cf88064837$export$89c0607256d35f0a = (...msg)=>console.info(`%c${msg.join("\n")}`, $e0f8e7cf88064837$var$info)
;


// Google Tag Manager
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
    });
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    j.onload = ()=>{
        $e0f8e7cf88064837$export$89c0607256d35f0a("GTM loaded");
        if (document.readyState === "complete") $882b6d93070905b3$var$__init__();
        else window.addEventListener("load", $882b6d93070905b3$var$__init__);
    };
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", window.GTM_ID);
// End Google Tag Manager
// init function to be called when the page is loaded
function $882b6d93070905b3$var$__init__() {
    const pageData = $6e9626a2f720303e$export$2e2bcd8739ae039();
    $77dc936101551cde$export$2e2bcd8739ae039(pageData);
    $36779ff9cc53e47d$export$2e2bcd8739ae039(pageData);
    $b7582d3f8e41c845$export$2e2bcd8739ae039(pageData);
}


//# sourceMappingURL=main.js.map
