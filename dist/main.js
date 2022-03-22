var $77dc936101551cde$export$2e2bcd8739ae039 = ({ __user_name__: __user_name__ , ...rest })=>{
    window.dataLayer.push({
        event: "page_viewed",
        login_status: __user_name__ ? "logged_in" : "guest",
        ...rest
    });
};


const $6e9626a2f720303e$var$dataKeys = [
    "user-name"
];
const $6e9626a2f720303e$var$baseData = {
    crn: null,
    customer_id: null,
    page_language: navigator.language.split("-")[0]
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
    return {
        ...$6e9626a2f720303e$var$baseData,
        ...data
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
    $77dc936101551cde$export$2e2bcd8739ae039($6e9626a2f720303e$export$2e2bcd8739ae039());
}


//# sourceMappingURL=main.js.map
