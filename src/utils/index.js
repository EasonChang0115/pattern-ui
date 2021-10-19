import { getCurrentInstance } from 'vue';
/* istanbul ignore next */
const trim = function(s) {
  return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
const camelize = function(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

export function useGlobalConfig() {
  const vm = getCurrentInstance();
  if ('$ELEMENT' in vm.proxy) {
    return vm.proxy.$ELEMENT;
  }
  return {};
};

/* istanbul ignore next */
export const on = function(
  element,
  event,
  handler,
  useCapture
) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};

/* istanbul ignore next */
export const off = function(
  element,
  event,
  handler,
  useCapture
) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};

/* istanbul ignore next */
export const once = function(
  el,
  event,
  fn
) {
  const listener = function(...args) {
    if (fn) {
      fn.apply(this, args);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) { throw new Error('className should not contain space.'); }
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (` ${el.className} `).indexOf(` ${cls} `) > -1;
  }
}

/* istanbul ignore next */
export function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ` ${el.className} `;

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

/* istanbul ignore next */
// Here I want to use the type CSSStyleDeclaration, but the definition for CSSStyleDeclaration
// has { [index: number]: string } in its type annotation, which does not satisfy the method
// camelize(s: string)
// Same as the return type
export const getStyle = function(
  element,
  styleName
) {
  if (!element || !styleName) return null;
  styleName = camelize(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const style = element.style[styleName];
    if (style) return style;
    const computed = document.defaultView.getComputedStyle(element, '');
    return computed ? computed[styleName] : '';
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
export function setStyle(
  element,
  styleName,
  value
) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    Object.keys(styleName).forEach(prop => {
      setStyle(element, prop, styleName[prop]);
    });
  } else {
    styleName = camelize(styleName);
    element.style[styleName] = value;
  }
}

export function removeStyle(element, style) {
  if (!element || !style) return;

  if (typeof style === 'object') {
    Object.keys(style).forEach(prop => {
      setStyle(element, prop, '');
    });
  } else {
    setStyle(element, style, '');
  }
}

export const isScroll = (el, isVertical) => {
  const determinedDirection = isVertical === null || isVertical === undefined;
  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x');

  return overflow.match(/(scroll|auto)/);
};

export const getScrollContainer = (el, isVertical) => {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, isVertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};

export const isInContainer = (el, container) => {
  if (!el || !container) return false;

  const elRect = el.getBoundingClientRect();
  let containerRect = null;

  if (
    [window, document, document.documentElement, null, undefined].includes(
      container
    )
  ) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }
  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  );
};

export const getOffsetTop = (el) => {
  let offset = 0;
  let parent = el;

  while (parent) {
    offset += parent.offsetTop;
    parent = parent.offsetParent;
  }

  return offset;
};
