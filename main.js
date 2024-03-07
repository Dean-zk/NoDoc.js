var $ = function (type, name, userValue) {
    var dom;
    var GET_ELEMENT_BY_ID = ">@";
    var GET_ELEMENT_BY_CLASS = ">->";
    var GET_ELEMENT_BY_TAG = ">#";
    var GET_ELEMENT_BY_NAME = ">>";
    switch (type) {
        case GET_ELEMENT_BY_ID:
            dom = document.getElementById(name);
            if (dom && userValue !== undefined) {
                dom.innerHTML = userValue;
            }
            return dom;
        case GET_ELEMENT_BY_CLASS:
            dom = document.getElementsByClassName(name);
            if (dom && userValue !== undefined) {
                dom.innerHTML = userValue;
            }
            return dom;
        case GET_ELEMENT_BY_TAG:
            dom = document.getElementsByTagName(name);
            if (dom && userValue !== undefined) {
                dom.innerHTML = userValue;
            }
            return dom;
        case GET_ELEMENT_BY_NAME:
            dom = document.getElementsByName(name);
            if (dom && userValue !== undefined) {
                dom.innerHTML = userValue;
            }
            return dom;
    }
};
var $_ = function (type, name, userValue, attributeValue) {
    if (attributeValue === void 0) { attributeValue = "hold"; }
    //=======Query commands===========
    var SELECT_ONE = ">>";
    var SELECT_ALL = ">*";
    var SELECT_ATTRIBUTE = "|>";
    var INNER_TEXT = ">T<";
    var TEXT_CONTENT = ">C<";
    var VALUE = ">v";
    var SET_ATTRIBUTE = "-<";
    var GET_ATTRIBUTE = ">-";
    //=================================
    var dom;
    switch (type) {
        case SELECT_ONE:
            dom = document.querySelector(name);
            if (dom && userValue !== undefined) {
                dom.innerHTML = userValue;
            }
            return dom;
        case SELECT_ALL:
            dom = document.querySelectorAll(name);
            if (dom && userValue !== undefined) {
                dom.forEach(function (element) {
                    if (element instanceof HTMLElement) {
                        element.innerHTML = userValue;
                    }
                });
            }
            return dom;
        case SELECT_ATTRIBUTE:
            dom = document.querySelector("[".concat(name, "=\"").concat(attributeValue, "\"]"));
            if (dom && userValue !== undefined) {
                dom.innerHTML = userValue;
            }
            return dom;
        case INNER_TEXT:
            dom = document.querySelector(name);
            if (dom && userValue !== undefined) {
                dom.innerText = userValue;
            }
            return dom === null || dom === void 0 ? void 0 : dom.innerText;
        case TEXT_CONTENT:
            dom = document.querySelector(name);
            if (dom && userValue !== undefined) {
                if (dom instanceof HTMLElement) {
                    dom.textContent = userValue;
                }
            }
            return dom === null || dom === void 0 ? void 0 : dom.textContent;
        case VALUE:
            dom = document.querySelector(name);
            if (dom && userValue !== undefined) {
                dom.value = userValue;
            }
            return dom === null || dom === void 0 ? void 0 : dom.value;
        case SET_ATTRIBUTE:
            dom = document.querySelector(name);
            if (dom && userValue !== undefined) {
                dom.setAttribute(attributeValue, userValue);
            }
            return dom;
        case GET_ATTRIBUTE:
            dom = document.querySelector(name);
            var customDomValue = dom === null || dom === void 0 ? void 0 : dom.getAttribute(attributeValue);
            return customDomValue;
    }
};
