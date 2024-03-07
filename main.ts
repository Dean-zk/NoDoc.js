const $ = (type: string, name: string, userValue?: string) => {
  let dom: any;
  const GET_ELEMENT_BY_ID = ">@";
  const GET_ELEMENT_BY_CLASS = ">->";
  const GET_ELEMENT_BY_TAG = ">#";
  const GET_ELEMENT_BY_NAME = ">>";
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

const $_ = (type: string, name: string, userValue?: string, attributeValue: string = "hold") => {
  //=======Query commands===========
  const SELECT_ONE = ">>";
  const SELECT_ALL = ">*";
  const SELECT_ATTRIBUTE = "|>";
  const INNER_TEXT = ">T<";
  const TEXT_CONTENT = ">C<";
  const VALUE = ">v";
  const SET_ATTRIBUTE = "-<";
  const GET_ATTRIBUTE = ">-";
  //=================================
  let dom: any;
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
        dom.forEach(element => {
          if (element instanceof HTMLElement) {
            element.innerHTML = userValue;
          }
        });
      }
      return dom;
    case SELECT_ATTRIBUTE:
      dom = document.querySelector(`[${name}="${attributeValue}"]`);
      if (dom && userValue !== undefined) {
        dom.innerHTML = userValue;
      }
      return dom;
    case INNER_TEXT:
      dom = document.querySelector(name);
      if (dom && userValue !== undefined) {
        (dom as any).innerText = userValue;
      }
      return (dom as any)?.innerText;
    case TEXT_CONTENT:
      dom = document.querySelector(name);
      if (dom && userValue !== undefined) {
        if (dom instanceof HTMLElement) {
          dom.textContent = userValue;
        }
      }
      return dom?.textContent;
    case VALUE:
      dom = document.querySelector(name) as HTMLInputElement;
      if (dom && userValue !== undefined) {
        dom.value = userValue;
      }
      return dom?.value;
    case SET_ATTRIBUTE:
      dom = document.querySelector(name);
      if (dom && userValue !== undefined) {
        dom.setAttribute(attributeValue, userValue);
      }
      return dom;
    case GET_ATTRIBUTE:
      dom = document.querySelector(name);
      const customDomValue = dom?.getAttribute(attributeValue);
      return customDomValue;
  }
};

