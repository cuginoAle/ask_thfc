var $416cd8f1c0193c00$export$2e2bcd8739ae039 = (data)=>{
    window.dataLayer.push(data);
};


var $ce6c689b1411fd2a$export$2e2bcd8739ae039 = (data)=>{
    const form = document.getElementById("new_request");
    if (!form) return;
    const submitButton = form.querySelector("input[type='submit']");
    if (submitButton) form.addEventListener("submit", (e)=>{
        $416cd8f1c0193c00$export$2e2bcd8739ae039({
            ...data,
            event: "contact_enquired"
        });
    });
};



var $77dc936101551cde$export$2e2bcd8739ae039 = (data)=>{
    $416cd8f1c0193c00$export$2e2bcd8739ae039({
        ...data,
        event: "page_viewed"
    });
};



var $36779ff9cc53e47d$export$2e2bcd8739ae039 = (data)=>{
    const searchBox = document.getElementById("query");
    if (searchBox) {
        const form = searchBox.closest("form");
        form.addEventListener("submit", (e)=>{
            $416cd8f1c0193c00$export$2e2bcd8739ae039({
                ...data,
                search_keyword: searchBox.value,
                search_type: "site_search",
                event: "content_searched"
            });
        });
    }
};


const $6e9626a2f720303e$var$baseData = {
    crn: null,
    customer_id: null,
    page_language: document.documentElement.lang.split("-")[0],
    login_status: "guest"
};
var $6e9626a2f720303e$export$2e2bcd8739ae039 = ()=>{
    const dataDiv = document.querySelector("#__za_data__");
    const data = Array.from(dataDiv.children).reduce((acc, el)=>{
        const element = el;
        const value = element.innerText;
        if (value) acc[el.id] = value;
        return acc;
    }, {});
    const { __user_name__: __user_name__ , ...rest } = data;
    return {
        ...$6e9626a2f720303e$var$baseData,
        login_status: __user_name__ ? "logged_in" : "guest"
    };
};


// The GTM unique ID to use
const $882b6d93070905b3$var$GTM_ID_DEV = "GTM-NZXZZXN";
const $882b6d93070905b3$var$GTM_ID_PROD = "GTM-KFLTKXP";
const $882b6d93070905b3$var$GTM_ID = $882b6d93070905b3$var$GTM_ID_PROD;
console.log("process.env.NODE_ENV", "production");
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
        // logInfo("GTM loaded");
        if (document.readyState === "complete") $882b6d93070905b3$var$__init__();
        else window.addEventListener("load", $882b6d93070905b3$var$__init__);
    };
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", $882b6d93070905b3$var$GTM_ID);
// End Google Tag Manager
// init function to be called when the page is loaded
function $882b6d93070905b3$var$__init__() {
    const pageData = $6e9626a2f720303e$export$2e2bcd8739ae039();
    $77dc936101551cde$export$2e2bcd8739ae039(pageData);
    $36779ff9cc53e47d$export$2e2bcd8739ae039(pageData);
    $ce6c689b1411fd2a$export$2e2bcd8739ae039(pageData);
// This is not needed for now
// outboundLink(pageData);
}


//# sourceMappingURL=script.js.map
