import __nuxt_component_0$4 from './index-1YXbR_pY.mjs';
import * as e$1 from 'vue';
import { defineComponent, ref, computed, onMounted, onUnmounted, h as h$1, Fragment, watchEffect, watch, provide, unref, inject, getCurrentInstance, Teleport, reactive, nextTick, normalizeClass, toRef, useSSRContext, mergeProps, isRef, cloneVNode, useAttrs, toValue, useId, withCtx, createVNode, shallowRef, resolveDynamicComponent, renderSlot, createTextVNode, openBlock, createBlock, toDisplayString, withDirectives, vModelText, resolveComponent, createCommentVNode, renderList, Transition } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuth, a as useCookie } from './useAuth-6QbkkPW4.mjs';
import { m as mergeConfig, j as appConfig, t as twMerge, u as useHead, f as useAppConfig, i as get, o as omit, h as _export_sfc, _ as __nuxt_component_1$2, c as useState, b as useNuxtApp, n as navigateTo, g as useRuntimeConfig } from './server.mjs';
import { twJoin } from 'tailwind-merge';
import { e as defu, x as isEqual, y as encodeParam, z as diff, h as hasProtocol, A as withLeadingSlash, j as joinURL, B as parseURL, C as encodePath } from '../_/nitro.mjs';
import { defineStore, storeToRefs } from 'pinia';
import { useDebounceFn } from '@vueuse/core';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vercel/analytics/nuxt';
import 'node:http';
import 'node:https';
import 'consola/core';
import 'mongoose';
import '@iconify/utils';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: undefined,
    required: false
  },
  href: {
    type: [String, Object],
    default: undefined,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: undefined,
    required: false
  },
  rel: {
    type: String,
    default: undefined,
    required: false
  },
  noRel: {
    type: Boolean,
    default: undefined,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: undefined,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: undefined,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: undefined,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: undefined,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: undefined,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: undefined,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: undefined,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: undefined,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$e = {
  __name: "FilterResults",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    const isUserLoggedIn = computed(() => user.value !== null);
    const selectedMode = ref("all");
    const filterOptions = [
      {
        label: "All Results (25)",
        value: "all",
        icon: "heroicons:list-bullet-20-solid"
      },
      {
        label: "Best Results (18)",
        value: "best",
        icon: "heroicons:star-20-solid"
      },
      {
        label: "Extended Results (7)",
        value: "extended",
        icon: "heroicons:plus-circle-20-solid"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      if (unref(isUserLoggedIn)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-container" }, _attrs))} data-v-1841fa71><div class="filter-options" data-v-1841fa71><div class="filter-header" data-v-1841fa71>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mage:filter",
          class: "filter-icon"
        }, null, _parent));
        _push(`<span class="filter-title" data-v-1841fa71>Filter Results</span></div><div class="filter-buttons" data-v-1841fa71><!--[-->`);
        ssrRenderList(filterOptions, (option) => {
          _push(`<button class="${ssrRenderClass([["filter-button", { active: unref(selectedMode) === option.value }], "text-black hover:text-white"])}" data-v-1841fa71>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: option.icon,
            class: "button-icon"
          }, null, _parent));
          _push(` ${ssrInterpolate(option.label)}</button>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterResults.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : undefined;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-1841fa71"]]);
const _sfc_main$d = {
  __name: "HistoryResults",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    const results = ref([]);
    const isLoading = ref(false);
    computed(() => !!user.value);
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k2 = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      const i2 = Math.floor(Math.log(bytes) / Math.log(k2));
      return parseFloat((bytes / Math.pow(k2, i2)).toFixed(2)) + " " + sizes[i2];
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      _push(`<!--[-->`);
      if (unref(user)) {
        _push(`<div class="flex items-center space-x-2 transition-all mt-4 text-lg" data-v-9231b78a>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "iconamoon:history-fill",
          size: "20"
        }, null, _parent));
        _push(`<span data-v-9231b78a>History</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="history-list" data-v-9231b78a>`);
      if (unref(isLoading)) {
        _push(`<div class="text-center text-gray-500 text-xl mt-8" data-v-9231b78a><div class="flex items-center justify-center gap-2" data-v-9231b78a><span data-v-9231b78a>Loading</span><div class="loading-dots" data-v-9231b78a><span class="dot" data-v-9231b78a>.</span><span class="dot" data-v-9231b78a>.</span><span class="dot" data-v-9231b78a>.</span></div></div></div>`);
      } else {
        _push(`<ul class="space-y-4 mt-6" data-v-9231b78a><!--[-->`);
        ssrRenderList(unref(results), (scan, index) => {
          _push(`<li class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100" data-v-9231b78a><div class="flex justify-between items-center font-sans relative" data-v-9231b78a><div data-v-9231b78a><p class="text-lg font-semibold flex items-center gap-2 text-gray-500" data-v-9231b78a>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:file",
            size: "20",
            class: "text-blue-500"
          }, null, _parent));
          _push(` ${ssrInterpolate(scan.filename)}</p><p class="text-sm text-gray-500 mt-1" data-v-9231b78a>${ssrInterpolate(scan.fileType)} \u2022 ${ssrInterpolate(formatFileSize(scan.fileSize))}</p><p class="text-sm text-gray-500 mt-1 flex items-center gap-2" data-v-9231b78a>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:clock",
            size: "16",
            class: "text-gray-400"
          }, null, _parent));
          _push(` ${ssrInterpolate(formatDate(scan.scannedAt))}</p></div><button class="absolute bottom-12 right-0 transition-colors duration-200" title="Download scan details" data-v-9231b78a>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "fluent:arrow-download-32-filled",
            size: "25",
            class: "text-blue-500"
          }, null, _parent));
          _push(`</button></div></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HistoryResults.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : undefined;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-9231b78a"]]);
function d$6(u2, e2, r2) {
  let i2 = ref(r2 == null ? undefined : r2.value), f2 = computed(() => u2.value !== undefined);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? undefined : e2(t2);
  }];
}
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$4() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$4(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$4();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0) for (let r2 of a2.splice(t2, 1)) r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0)) e2();
  } };
  return s3;
}
var r$2;
let n$4 = Symbol("headlessui.useid"), o$3 = 0;
const i$6 = (r$2 = e$1.useId) != null ? r$2 : function() {
  return e$1.inject(n$4, () => `${++o$3}`)();
};
function s$5(t2) {
  e$1.provide(n$4, t2);
}
function o$2(e2) {
  var l2;
  if (e2 == null || e2.value == null) return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$7(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$7), t2;
}
var i$5 = Object.defineProperty;
var d$5 = (t2, e2, r2) => e2 in t2 ? i$5(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$5(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$4 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$3 = new s$4();
function i$4(r2) {
  if (c$3.isServer) return null;
  if (r2 instanceof Node) return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$2(r2);
    if (n2) return n2.ownerDocument;
  }
  return undefined;
}
let c$2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$4 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$4 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$4(e2 = (undefined).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$2)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$4(e2)) == null ? undefined : t2.body) ? false : u$7(r2, { [0]() {
    return e2.matches(c$2);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$2)) return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function _(e2) {
  let r2 = i$4(e2);
  nextTick(() => {
    r2 && !w$4(r2.activeElement, 0) && S$1(e2);
  });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? undefined : e2.matches) == null ? undefined : r2.call(e2, H$2)) != null ? t2 : false;
}
function O$1(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null) return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v$1(e2, r2) {
  return P(E$4(), r2, { relativeTo: e2 });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : undefined : e2 == null ? undefined : e2.ownerDocument) != null ? m2 : undefined, n2 = Array.isArray(e2) ? t2 ? O$1(e2) : e2 : E$4(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8) return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0) return 0;
    let s3 = p2 + a2;
    if (r2 & 16) s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0) return 3;
      if (s3 >= d2) return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((undefined).navigator.platform) || /Mac/gi.test((undefined).navigator.platform) && (undefined).navigator.maxTouchPoints > 0;
}
function i$3() {
  return /Android/gi.test((undefined).navigator.userAgent);
}
function n$2() {
  return t$3() || i$3();
}
function u$6(e2, t2, n2) {
  c$3.isServer || watchEffect((o2) => {
    (undefined).addEventListener(e2, t2, n2), o2(() => (undefined).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$3.isServer || watchEffect((o2) => {
    (undefined).addEventListener(e2, n2, t2), o2(() => (undefined).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented) return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2)) return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null) continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$2(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$6("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? undefined : r2.call(e2)) == null ? undefined : t2[0]) || e2.target);
  }, true), u$6("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? undefined : r2.call(e2)) == null ? undefined : t2[0]) || e2.target);
  }, true), u$6("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$6("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (undefined).document.activeElement instanceof HTMLIFrameElement ? (undefined).document.activeElement : null), true);
}
function r$1(t2, e2) {
  if (t2) return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button") return "button";
}
function s$3(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$2(e2) && o$2(e2) instanceof HTMLButtonElement && !((u2 = o$2(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$5() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function i$2({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== undefined && !o2.value) return;
    let l2 = i$4(e2);
    if (!l2) return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); ) d2(n2.currentNode);
  });
}
var N$3 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$3 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$3({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$7(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? undefined : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, undefined])));
  for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
    let a2 = e2[i2];
    for (let d2 of a2) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d2(n2, ...l2);
    }
  } });
  return t2;
}
function E$3(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2) t2[e2] === undefined && delete t2[e2];
  return t2;
}
function T$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2) o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$4 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$4 || {});
let f$2 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : undefined, hidden: (e2 & 4) === 4 ? true : undefined, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$3({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$2(o2) {
  provide(n$1, o2);
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
let t$1 = [];
function u$3(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f$1(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0) return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e2 = s3 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s3 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u$3(l2);
  }
}
function p$1(i2) {
  var t2, r2;
  let s3 = (t2 = i2 == null ? undefined : i2.form) != null ? t2 : i2.closest("form");
  if (s3) {
    for (let n2 of s3.elements) if (n2 !== i2 && (n2.tagName === "INPUT" && n2.type === "submit" || n2.tagName === "BUTTON" && n2.type === "submit" || n2.nodeName === "INPUT" && n2.type === "image")) {
      n2.click();
      return;
    }
    (r2 = s3.requestSubmit) == null || r2.call(s3);
  }
}
function E$2(n2, e2, o2, r2) {
  c$3.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : undefined, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$4 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$4 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2) return /* @__PURE__ */ new Set();
  if (typeof t2 == "function") return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$2(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$2 || {});
let ue$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r2, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$4(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$1({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$2(o2);
    if (!T2) return;
    ((w2) => w2())(() => {
      u$7(f2.value, { [d$4.Forwards]: () => {
        P(T2, N$4.First, { skipElements: [u2.relatedTarget] });
      }, [d$4.Backwards]: () => {
        P(T2, N$4.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value) return;
    let T2 = B(t2.containers);
    o$2(o2) instanceof HTMLElement && T2.add(o$2(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s3.value ? P(o$2(o2), u$7(f2.value, { [d$4.Forwards]: () => N$4.Next, [d$4.Backwards]: () => N$4.Previous }) | N$4.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable }), A$3({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable })]);
  };
} }), { features: A$2 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$4(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $$1({ ownerDocument: t2 }, n2) {
  let r2 = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? undefined : l2.activeElement) === ((o2 = t2.value) == null ? undefined : o2.body) && S$1(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r2());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? undefined : m2[s3]) === a2) || !l2.value) return;
      let f2 = o$2(n2);
      f2 && t$4(() => {
        var F2, H2;
        if (!i2.value) return;
        let a2 = o$2(r2), s3 = (F2 = t2.value) == null ? undefined : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$4.First | N$4.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? undefined : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$2((i2 = t2.value) == null ? undefined : i2.defaultView, "focus", (e2) => {
    if (!o2.value) return;
    let m2 = B(r2);
    o$2(n2) instanceof HTMLElement && m2.add(o$2(n2));
    let f2 = l2.value;
    if (!f2) return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r2 of t2) if (r2.contains(n2)) return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$3(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r2[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : undefined).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s3;
      if ((undefined).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$4();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s3 = (undefined).scrollY) != null ? s3 : (undefined).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !a2(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (a2(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && a2(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (undefined).scrollY) != null ? e2 : (undefined).pageYOffset;
        o2 !== t2 && (undefined).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a$2 = a$3(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$4(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r2 }) => r2 == null ? undefined : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? undefined : r2(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a$2.subscribe(() => {
  let e2 = a$2.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a$2.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$2.dispatch("TEARDOWN", t2);
  }
});
function d$3(t2, a2, n2) {
  let i2 = m$2(a$2), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : undefined;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a2], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2) return;
    a$2.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a$2.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E$1(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value) return;
    let e2 = o$2(d2);
    if (!e2) return;
    o2(function() {
      var u2;
      if (!e2) return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1) return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$4(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
    for (let e2 of (l2 = r2 == null ? undefined : r2.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== (undefined).body && e2 !== (undefined).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$2(t2)) || e2.contains((a2 = (f2 = o$2(t2)) == null ? undefined : f2.getRootNode()) == null ? undefined : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$2, { features: u$4.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$3({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null) throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : undefined);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$6()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$3({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$4(e2);
  if (!t2) {
    if (e2 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2) return l2;
  let r2 = t2.createElement("div");
  return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
}
const f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r2 = ref(null), i2 = computed(() => i$4(r2)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d$2, null), g2 = false, b2 = getCurrentInstance();
  return watch(r2, () => {
    if (g2 || !v2) return;
    let a2 = o$2(r2);
    a2 && (onUnmounted(v2.register(a2), b2), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? undefined : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null) return null;
    let a2 = { ref: r2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A$3({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$2 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$2, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
  }
  function r2(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r2, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$2, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? undefined : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r2 = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r2), () => {
    let { target: i2, ...o2 } = e2;
    return A$3({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A$1 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A$1 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p2, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$6()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A$1 && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E2 = computed(() => i$4(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A$1 || S2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A$1 ? undefined : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z2 } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h2.panelRef.value) != null ? e2 : m2.value;
  })] }), ee2 = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te2 = computed(() => N2 || U2.value ? false : k$1.value), le = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E2.value) == null ? undefined : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$2(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E$1(le, te2);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E2.value) == null ? undefined : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$2(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E$1(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog") return u$7(e2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h2 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h2.close(), nextTick(() => a2 == null ? undefined : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$2((W2 = E2.value) == null ? undefined : W2.defaultView, "keydown", (e2) => {
    ie.value && (e2.defaultPrevented || e2.key === o$1.Escape && (e2.preventDefault(), e2.stopPropagation(), h2.close()));
  });
  let ue2 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$3(E2, ue2, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0) return;
    let a2 = o$2(m2);
    if (!a2) return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : undefined, "aria-labelledby": M2.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1($, () => h$1(z, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue$1, { initialFocus: a2, containers: B2, features: k$1.value ? u$7(ee2.value, { parent: ue$1.features.RestoreFocus, leaf: ue$1.features.All & ~ue$1.features.FocusLock }) : ue$1.features.None }, () => h$1(X, {}, () => A$3({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h$1(Z2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p2 = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$6()}`, s3 = T("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r2 } = t2;
    return A$3({ ourProps: { id: p2, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${i$6()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1($, () => A$3({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${i$6()}`, n2 = T("DialogPanel");
  p2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$3({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p2 = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$6()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(p2), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$3({ ourProps: { id: p2 }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
let a$1 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement)) return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a$1.test(l2) && (l2 = l2.replace(a$1, "")), l2;
}
function g$2(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string") return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (undefined).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0) return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$2(a2);
    if (!e2) return "";
    let l2 = e2.innerText;
    if (t2.value === l2) return r2.value;
    let u2 = g$2(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
var Z = ((i2) => (i2[i2.Open = 0] = "Open", i2[i2.Closed = 1] = "Closed", i2))(Z || {}), ee = ((i2) => (i2[i2.Pointer = 0] = "Pointer", i2[i2.Other = 1] = "Other", i2))(ee || {});
function te(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let A = Symbol("MenuContext");
function O(o2) {
  let M2 = inject(A, null);
  if (M2 === null) {
    let i2 = new Error(`<${o2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i2, O), i2;
  }
  return M2;
}
let ge$1 = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(o2, { slots: M2, attrs: i2 }) {
  let I2 = ref(1), p2 = ref(null), e2 = ref(null), r2 = ref([]), f2 = ref(""), d2 = ref(null), g2 = ref(1);
  function b2(t2 = (a2) => a2) {
    let a2 = d2.value !== null ? r2.value[d2.value] : null, n2 = O$1(t2(r2.value.slice()), (v2) => o$2(v2.dataRef.domRef)), s3 = a2 ? n2.indexOf(a2) : null;
    return s3 === -1 && (s3 = null), { items: n2, activeItemIndex: s3 };
  }
  let l2 = { menuState: I2, buttonRef: p2, itemsRef: e2, items: r2, searchQuery: f2, activeItemIndex: d2, activationTrigger: g2, closeMenu: () => {
    I2.value = 1, d2.value = null;
  }, openMenu: () => I2.value = 0, goToItem(t2, a2, n2) {
    let s3 = b2(), v2 = f$1(t2 === c$1.Specific ? { focus: c$1.Specific, id: a2 } : { focus: t2 }, { resolveItems: () => s3.items, resolveActiveIndex: () => s3.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.disabled });
    f2.value = "", d2.value = v2, g2.value = n2 != null ? n2 : 1, r2.value = s3.items;
  }, search(t2) {
    let n2 = f2.value !== "" ? 0 : 1;
    f2.value += t2.toLowerCase();
    let v2 = (d2.value !== null ? r2.value.slice(d2.value + n2).concat(r2.value.slice(0, d2.value + n2)) : r2.value).find((h2) => h2.dataRef.textValue.startsWith(f2.value) && !h2.dataRef.disabled), u2 = v2 ? r2.value.indexOf(v2) : -1;
    u2 === -1 || u2 === d2.value || (d2.value = u2, g2.value = 1);
  }, clearSearch() {
    f2.value = "";
  }, registerItem(t2, a2) {
    let n2 = b2((s3) => [...s3, { id: t2, dataRef: a2 }]);
    r2.value = n2.items, d2.value = n2.activeItemIndex, g2.value = 1;
  }, unregisterItem(t2) {
    let a2 = b2((n2) => {
      let s3 = n2.findIndex((v2) => v2.id === t2);
      return s3 !== -1 && n2.splice(s3, 1), n2;
    });
    r2.value = a2.items, d2.value = a2.activeItemIndex, g2.value = 1;
  } };
  return w$2([p2, e2], (t2, a2) => {
    var n2;
    l2.closeMenu(), w$4(a2, h.Loose) || (t2.preventDefault(), (n2 = o$2(p2)) == null || n2.focus());
  }, computed(() => I2.value === 0)), provide(A, l2), t$2(computed(() => u$7(I2.value, { [0]: i$1.Open, [1]: i$1.Closed }))), () => {
    let t2 = { open: I2.value === 0, close: l2.closeMenu };
    return A$3({ ourProps: {}, theirProps: o2, slot: t2, slots: M2, attrs: i2, name: "Menu" });
  };
} }), Se$1 = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: M2, slots: i2, expose: I2 }) {
  var b2;
  let p2 = (b2 = o2.id) != null ? b2 : `headlessui-menu-button-${i$6()}`, e2 = O("MenuButton");
  I2({ el: e2.buttonRef, $el: e2.buttonRef });
  function r2(l2) {
    switch (l2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(c$1.First);
        });
        break;
      case o$1.ArrowUp:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$2(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(c$1.Last);
        });
        break;
    }
  }
  function f2(l2) {
    switch (l2.key) {
      case o$1.Space:
        l2.preventDefault();
        break;
    }
  }
  function d2(l2) {
    o2.disabled || (e2.menuState.value === 0 ? (e2.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o$2(e2.buttonRef)) == null ? undefined : t2.focus({ preventScroll: true });
    })) : (l2.preventDefault(), e2.openMenu(), te(() => {
      var t2;
      return (t2 = o$2(e2.itemsRef)) == null ? undefined : t2.focus({ preventScroll: true });
    })));
  }
  let g2 = s$3(computed(() => ({ as: o2.as, type: M2.type })), e2.buttonRef);
  return () => {
    var n2;
    let l2 = { open: e2.menuState.value === 0 }, { ...t2 } = o2, a2 = { ref: e2.buttonRef, id: p2, type: g2.value, "aria-haspopup": "menu", "aria-controls": (n2 = o$2(e2.itemsRef)) == null ? undefined : n2.id, "aria-expanded": e2.menuState.value === 0, onKeydown: r2, onKeyup: f2, onClick: d2 };
    return A$3({ ourProps: a2, theirProps: t2, slot: l2, attrs: M2, slots: i2, name: "MenuButton" });
  };
} }), Me = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: M2, slots: i2, expose: I2 }) {
  var l2;
  let p2 = (l2 = o2.id) != null ? l2 : `headlessui-menu-items-${i$6()}`, e2 = O("MenuItems"), r2 = ref(null);
  I2({ el: e2.itemsRef, $el: e2.itemsRef }), i$2({ container: computed(() => o$2(e2.itemsRef)), enabled: computed(() => e2.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function f2(t2) {
    var a2;
    switch (r2.value && clearTimeout(r2.value), t2.key) {
      case o$1.Space:
        if (e2.searchQuery.value !== "") return t2.preventDefault(), t2.stopPropagation(), e2.search(t2.key);
      case o$1.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e2.activeItemIndex.value !== null) {
          let s3 = e2.items.value[e2.activeItemIndex.value];
          (a2 = o$2(s3.dataRef.domRef)) == null || a2.click();
        }
        e2.closeMenu(), _(o$2(e2.buttonRef));
        break;
      case o$1.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Next);
      case o$1.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.First);
      case o$1.End:
      case o$1.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Last);
      case o$1.Escape:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => {
          var n2;
          return (n2 = o$2(e2.buttonRef)) == null ? undefined : n2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => v$1(o$2(e2.buttonRef), t2.shiftKey ? N$4.Previous : N$4.Next));
        break;
      default:
        t2.key.length === 1 && (e2.search(t2.key), r2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  function d2(t2) {
    switch (t2.key) {
      case o$1.Space:
        t2.preventDefault();
        break;
    }
  }
  let g2 = l$2(), b2 = computed(() => g2 !== null ? (g2.value & i$1.Open) === i$1.Open : e2.menuState.value === 0);
  return () => {
    var s3, v2;
    let t2 = { open: e2.menuState.value === 0 }, { ...a2 } = o2, n2 = { "aria-activedescendant": e2.activeItemIndex.value === null || (s3 = e2.items.value[e2.activeItemIndex.value]) == null ? undefined : s3.id, "aria-labelledby": (v2 = o$2(e2.buttonRef)) == null ? undefined : v2.id, id: p2, onKeydown: f2, onKeyup: d2, role: "menu", tabIndex: 0, ref: e2.itemsRef };
    return A$3({ ourProps: n2, theirProps: a2, slot: t2, attrs: M2, slots: i2, features: N$3.RenderStrategy | N$3.Static, visible: b2.value, name: "MenuItems" });
  };
} }), be = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: M2, attrs: i2, expose: I2 }) {
  var v2;
  let p$12 = (v2 = o2.id) != null ? v2 : `headlessui-menu-item-${i$6()}`, e2 = O("MenuItem"), r2 = ref(null);
  I2({ el: r2, $el: r2 });
  let f2 = computed(() => e2.activeItemIndex.value !== null ? e2.items.value[e2.activeItemIndex.value].id === p$12 : false), d2 = p(r2), g2 = computed(() => ({ disabled: o2.disabled, get textValue() {
    return d2();
  }, domRef: r2 }));
  onMounted(() => e2.registerItem(p$12, g2)), onUnmounted(() => e2.unregisterItem(p$12)), watchEffect(() => {
    e2.menuState.value === 0 && f2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var u2, h2;
      return (h2 = (u2 = o$2(r2)) == null ? undefined : u2.scrollIntoView) == null ? undefined : h2.call(u2, { block: "nearest" });
    });
  });
  function b2(u2) {
    if (o2.disabled) return u2.preventDefault();
    e2.closeMenu(), _(o$2(e2.buttonRef));
  }
  function l2() {
    if (o2.disabled) return e2.goToItem(c$1.Nothing);
    e2.goToItem(c$1.Specific, p$12);
  }
  let t2 = u$5();
  function a2(u2) {
    t2.update(u2);
  }
  function n2(u2) {
    t2.wasMoved(u2) && (o2.disabled || f2.value || e2.goToItem(c$1.Specific, p$12, 0));
  }
  function s3(u2) {
    t2.wasMoved(u2) && (o2.disabled || f2.value && e2.goToItem(c$1.Nothing));
  }
  return () => {
    let { disabled: u2, ...h2 } = o2, C2 = { active: f2.value, disabled: u2, close: e2.closeMenu };
    return A$3({ ourProps: { id: p$12, ref: r2, role: "menuitem", tabIndex: u2 === true ? undefined : -1, "aria-disabled": u2 === true ? true : undefined, onClick: b2, onFocus: l2, onPointerenter: a2, onMouseenter: a2, onPointermove: n2, onMousemove: n2, onPointerleave: s3, onMouseleave: s3 }, theirProps: { ...i2, ...h2 }, slot: C2, attrs: i2, slots: M2, name: "MenuItem" });
  };
} });
let a = Symbol("LabelContext");
function d$1() {
  let t2 = inject(a, null);
  if (t2 === null) {
    let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n2, d$1), n2;
  }
  return t2;
}
function E({ slot: t2 = {}, name: n2 = "Label", props: i2 = {} } = {}) {
  let e2 = ref([]);
  function o2(r2) {
    return e2.value.push(r2), () => {
      let l2 = e2.value.indexOf(r2);
      l2 !== -1 && e2.value.splice(l2, 1);
    };
  }
  return provide(a, { register: o2, slot: t2, name: n2, props: i2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : undefined);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { slots: n2, attrs: i2 }) {
  var r2;
  let e2 = (r2 = t2.id) != null ? r2 : `headlessui-label-${i$6()}`, o2 = d$1();
  return onMounted(() => onUnmounted(o2.register(e2))), () => {
    let { name: l2 = "Label", slot: p2 = {}, props: c2 = {} } = o2, { passive: f2, ...s3 } = t2, u2 = { ...Object.entries(c2).reduce((b2, [g2, m2]) => Object.assign(b2, { [g2]: unref(m2) }), {}), id: e2 };
    return f2 && (delete u2.onClick, delete u2.htmlFor, delete s3.onClick), A$3({ ourProps: u2, theirProps: s3, slot: p2, attrs: i2, slots: n2, name: l2 });
  };
} });
let C = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l2, { slots: c2, attrs: i2 }) {
  let r2 = ref(null), f2 = E({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var t2;
    return (t2 = r2.value) == null ? undefined : t2.id;
  }), onClick(t2) {
    r2.value && (t2.currentTarget.tagName === "LABEL" && t2.preventDefault(), r2.value.click(), r2.value.focus({ preventScroll: true }));
  } } }), p2 = k({ name: "SwitchDescription" });
  return provide(C, { switchRef: r2, labelledby: f2, describedby: p2 }), () => A$3({ theirProps: l2, ourProps: {}, slot: {}, slots: c2, attrs: i2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: undefined }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l2, { emit: c2, attrs: i2, slots: r2, expose: f2 }) {
  var h2;
  let p2 = (h2 = l2.id) != null ? h2 : `headlessui-switch-${i$6()}`, n2 = inject(C, null), [t2, s3] = d$6(computed(() => l2.modelValue), (e2) => c2("update:modelValue", e2), computed(() => l2.defaultChecked));
  function m2() {
    s3(!t2.value);
  }
  let E2 = ref(null), o2 = n2 === null ? E2 : n2.switchRef, L2 = s$3(computed(() => ({ as: l2.as, type: i2.type })), o2);
  f2({ el: o2, $el: o2 });
  function D(e2) {
    e2.preventDefault(), m2();
  }
  function R2(e2) {
    e2.key === o$1.Space ? (e2.preventDefault(), m2()) : e2.key === o$1.Enter && p$1(e2.currentTarget);
  }
  function x2(e2) {
    e2.preventDefault();
  }
  let d2 = computed(() => {
    var e2, a2;
    return (a2 = (e2 = o$2(o2)) == null ? undefined : e2.closest) == null ? undefined : a2.call(e2, "form");
  });
  return onMounted(() => {
    watch([d2], () => {
      if (!d2.value || l2.defaultChecked === undefined) return;
      function e2() {
        s3(l2.defaultChecked);
      }
      return d2.value.addEventListener("reset", e2), () => {
        var a2;
        (a2 = d2.value) == null || a2.removeEventListener("reset", e2);
      };
    }, { immediate: true });
  }), () => {
    let { name: e2, value: a2, form: K, tabIndex: y2, ...b2 } = l2, T2 = { checked: t2.value }, B2 = { id: p2, ref: o2, role: "switch", type: L2.value, tabIndex: y2 === -1 ? 0 : y2, "aria-checked": t2.value, "aria-labelledby": n2 == null ? undefined : n2.labelledby.value, "aria-describedby": n2 == null ? undefined : n2.describedby.value, onClick: D, onKeyup: R2, onKeypress: x2 };
    return h$1(Fragment, [e2 != null && t2.value != null ? h$1(f$2, E$3({ features: u$4.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t2.value, form: K, disabled: b2.disabled, name: e2, value: a2 })) : null, A$3({ ourProps: B2, theirProps: { ...i2, ...T$1(b2, ["modelValue", "defaultChecked"]) }, slot: T2, attrs: i2, slots: r2, name: "Switch" })]);
  };
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called) return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$4();
  if (!e2) return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$4(), o2 = l$12 !== undefined ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$7(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n2);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r2() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2()) return () => h$1(Se, { ...e2, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = i$6(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$7(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z2 = g(e2.leaveFrom), ee2 = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$2(d2);
        if (o2 instanceof Comment && o2.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te2(o2) {
    let E2 = I2.value && !A2.value, p2 = o$2(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r2(), v2.value || f2(), o2(v2.value ? L$1(p2, j2, M2, X, _2, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p2, Y, Z2, ee2, _2, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te2(p2), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$2(computed(() => u$7(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V, enterTo: Ce, entered: ye, leave: be2, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$3.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return A$3({ theirProps: re, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$3({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? undefined : _ui.strategy) || ((_a = appConfig2.ui) == null ? undefined : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    "xs": "h-6 w-6 text-xs",
    "sm": "h-8 w-8 text-sm",
    "md": "h-10 w-10 text-base",
    "lg": "h-12 w-12 text-lg",
    "xl": "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      "xs": "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      "sm": "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      "md": "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      "lg": "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      "xl": "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      "xs": "h-3 w-3",
      "sm": "h-4 w-4",
      "md": "h-5 w-5",
      "lg": "h-6 w-6",
      "xl": "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    "xs": "p-1.5",
    "sm": "p-1.5",
    "md": "p-2",
    "lg": "p-2.5",
    "xl": "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const arrow$1 = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const dropdown = {
  wrapper: "relative inline-flex text-left rtl:text-right",
  container: "z-20 group",
  trigger: "inline-flex w-full",
  width: "w-48",
  height: "",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  divide: "divide-y divide-gray-200 dark:divide-gray-700",
  padding: "p-1",
  item: {
    base: "group flex items-center gap-1.5 w-full",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    active: "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",
    inactive: "text-gray-700 dark:text-gray-200",
    disabled: "cursor-not-allowed opacity-50",
    icon: {
      base: "flex-shrink-0 w-5 h-5",
      active: "text-gray-500 dark:text-gray-400",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    label: "truncate",
    shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition duration-100 ease-out",
    enterFromClass: "transform scale-95 opacity-0",
    enterToClass: "transform scale-100 opacity-100",
    leaveActiveClass: "transition duration-75 ease-in",
    leaveFromClass: "transform scale-100 opacity-100",
    leaveToClass: "transform scale-95 opacity-0"
  },
  popper: {
    placement: "bottom-end",
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
const inputMenu = {
  container: "z-20 group",
  trigger: "flex items-center w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid",
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
({
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty",
    searchablePlaceholder: {
      label: "Search..."
    },
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
});
const toggle = {
  base: "relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
  rounded: "rounded-full",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  active: "bg-{color}-500 dark:bg-{color}-400",
  inactive: "bg-gray-200 dark:bg-gray-700",
  size: {
    "2xs": "h-3 w-5",
    "xs": "h-3.5 w-6",
    "sm": "h-4 w-7",
    "md": "h-5 w-9",
    "lg": "h-6 w-11",
    "xl": "h-7 w-[3.25rem]",
    "2xl": "h-8 w-[3.75rem]"
  },
  container: {
    base: "pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",
    active: {
      "2xs": "translate-x-2 rtl:-translate-x-2",
      "xs": "translate-x-2.5 rtl:-translate-x-2.5",
      "sm": "translate-x-3 rtl:-translate-x-3",
      "md": "translate-x-4 rtl:-translate-x-4",
      "lg": "translate-x-5 rtl:-translate-x-5",
      "xl": "translate-x-6 rtl:-translate-x-6",
      "2xl": "translate-x-7 rtl:-translate-x-7"
    },
    inactive: "translate-x-0 rtl:-translate-x-0",
    size: {
      "2xs": "h-2 w-2",
      "xs": "h-2.5 w-2.5",
      "sm": "h-3 w-3",
      "md": "h-4 w-4",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6",
      "2xl": "h-7 w-7"
    }
  },
  icon: {
    base: "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",
    active: "opacity-100 ease-in duration-200",
    inactive: "opacity-0 ease-out duration-100",
    size: {
      "2xs": "h-2 w-2",
      "xs": "h-2 w-2",
      "sm": "h-2 w-2",
      "md": "h-3 w-3",
      "lg": "h-4 w-4",
      "xl": "h-5 w-5",
      "2xl": "h-6 w-6"
    },
    on: "text-{color}-500 dark:text-{color}-400",
    off: "text-gray-400 dark:text-gray-500",
    loading: "animate-spin text-{color}-500 dark:text-{color}-400"
  },
  default: {
    onIcon: null,
    offIcon: null,
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    color: "primary",
    size: "md"
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const config$5 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$c = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$5, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear", "class"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass, {
                      class: _ctx.transitionClass.enterFrom
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear", "class"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition, {
                class: _ctx.ui.overlay.transition.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear", "class"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass, {
                    class: _ctx.transitionClass.enterFrom
                  }), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear", "class"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : undefined;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$b = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false,
      default: null
    }
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$4;
  _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$props, _attrs), null, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$6]]);
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$a = defineComponent({
  components: {
    UIcon: __nuxt_component_0$3
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$4.default.icon
    },
    size: {
      type: String,
      default: () => config$4.default.size,
      validator(value) {
        return Object.keys(config$4.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$4.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$4.default.chipPosition,
      validator(value) {
        return Object.keys(config$4.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$4);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$3;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$5]]);
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main$9 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config$3.default.size,
      validator(value) {
        return Object.keys(config$3.size).includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config$3);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : undefined;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
function getWindow(node) {
  if (node == null) {
    return undefined;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || undefined : undefined;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = (undefined).userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return (undefined).userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === undefined) {
    includeScale = false;
  }
  if (isFixedStrategy === undefined) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : undefined, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || (undefined).document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === undefined) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === undefined) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? undefined : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = undefined;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? undefined : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === undefined) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === undefined ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === undefined ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === undefined ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === undefined ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === undefined ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === undefined ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === undefined ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === undefined) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === undefined ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === undefined ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference2, popper2, options) {
    if (options === undefined) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === undefined ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === undefined ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === undefined ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === undefined ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === undefined ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === undefined ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = undefined;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === undefined ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === undefined ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === undefined ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$1,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === undefined) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === undefined ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === undefined ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === undefined ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === undefined ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === undefined ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === undefined ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === undefined ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === undefined ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === undefined ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? undefined : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? undefined : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === undefined ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrowModifier = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
popperGenerator({
  defaultModifiers: [...defaultModifiers, offset$1, flip$1, preventOverflow$1, computeStyles$1, eventListeners, arrowModifier]
});
function usePopper({
  locked = false,
  overflowPadding = 8,
  offsetDistance = 8,
  offsetSkid = 0,
  gpuAcceleration = true,
  adaptive = true,
  scroll = true,
  resize = true,
  arrow: arrow2 = false,
  placement,
  strategy
}, virtualReference) {
  const reference2 = ref(null);
  const popper2 = ref(null);
  const instance = ref(null);
  return [reference2, popper2, instance];
}
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.dropdown, dropdown);
const _sfc_main$8 = defineComponent({
  components: {
    HMenu: ge$1,
    HMenuButton: Se$1,
    HMenuItems: Me,
    HMenuItem: be,
    UIcon: __nuxt_component_0$3,
    UAvatar: __nuxt_component_2$1,
    UKbd: __nuxt_component_3
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    openDelay: {
      type: Number,
      default: () => config$2.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$2.default.closeDelay
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("dropdown", toRef(props, "ui"), config$2, toRef(props, "class"));
    const popper2 = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper2.value);
    const menuApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a = props.popper) == null ? undefined : _a.offsetDistance) || ((_b = ui.value.popper) == null ? undefined : _b.offsetDistance) || 8;
      const placement = (_c = popper2.value.placement) == null ? undefined : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart(event) {
      if (!event.cancelable || !menuApi.value || props.mode === "click") {
        return;
      }
      if (menuApi.value.menuState === 0) {
        menuApi.value.closeMenu();
      } else {
        menuApi.value.openMenu();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (menuApi.value.menuState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        if (menuApi.value.openMenu) {
          menuApi.value.openMenu();
        }
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (menuApi.value.menuState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        if (menuApi.value.closeMenu) {
          menuApi.value.closeMenu();
        }
        closeTimeout = null;
      }, props.closeDelay);
    }
    function onClick(e2, item, { href, navigate, close, isExternal }) {
      if (item.click) {
        item.click(e2);
      }
      if (href && !isExternal) {
        navigate(e2);
        close();
      }
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!menuApi.value) return;
      if (oldValue === undefined || newValue === oldValue) return;
      if (newValue) {
        menuApi.value.openMenu();
      } else {
        menuApi.value.closeMenu();
      }
    });
    watch(() => {
      var _a;
      return (_a = menuApi.value) == null ? undefined : _a.menuState;
    }, (newValue, oldValue) => {
      if (oldValue === undefined || newValue === oldValue) return;
      emit("update:open", newValue === 0);
    });
    const NuxtLink = __nuxt_component_1$2;
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave,
      onClick,
      getNuxtLinkProps,
      twMerge,
      twJoin,
      NuxtLink
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HMenu = resolveComponent("HMenu");
  const _component_HMenuButton = resolveComponent("HMenuButton");
  const _component_HMenuItems = resolveComponent("HMenuItems");
  const _component_NuxtLink = __nuxt_component_1$2;
  const _component_HMenuItem = resolveComponent("HMenuItem");
  const _component_UIcon = __nuxt_component_0$3;
  const _component_UAvatar = __nuxt_component_2$1;
  const _component_UKbd = __nuxt_component_3;
  _push(ssrRenderComponent(_component_HMenu, mergeProps({
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HMenuButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (open && _ctx.items.length) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HMenuItems, {
            class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
            static: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (subItems, index) => {
                  _push3(`<div class="${ssrRenderClass(_ctx.ui.padding)}"${_scopeId2}><!--[-->`);
                  ssrRenderList(subItems, (item, subIndex) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({
                      key: subIndex,
                      ref_for: true
                    }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                      default: withCtx(({ href, target, rel, navigate, isExternal, isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_HMenuItem, {
                            disabled: item.disabled
                          }, {
                            default: withCtx(({ active, disabled: itemDisabled, close }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : undefined,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a;
                                        if (item.icon) {
                                          _push6(ssrRenderComponent(_component_UIcon, {
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, _parent6, _scopeId5));
                                        } else if (item.avatar) {
                                          _push6(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.item.label, item.labelClass))}"${_scopeId5}>${ssrInterpolate(item.label)}</span>`);
                                        if ((_a = item.shortcuts) == null ? undefined : _a.length) {
                                          _push6(`<span class="${ssrRenderClass(_ctx.ui.item.shortcuts)}"${_scopeId5}><!--[-->`);
                                          ssrRenderList(item.shortcuts, (shortcut) => {
                                            _push6(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                                              default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`${ssrInterpolate(shortcut)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          });
                                          _push6(`<!--]--></span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      }, _push6, _parent6, _scopeId5);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                              key: 1,
                                              ref_for: true
                                            }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString(item.label), 3),
                                            ((_a = item.shortcuts) == null ? undefined : _a.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                    href: !itemDisabled ? href : undefined,
                                    rel,
                                    target,
                                    class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                    onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a;
                                        return [
                                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                            key: 0,
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                            key: 1,
                                            ref_for: true
                                          }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, 16, ["class"])) : createCommentVNode("", true),
                                          createVNode("span", {
                                            class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                          }, toDisplayString(item.label), 3),
                                          ((_a = item.shortcuts) == null ? undefined : _a.length) ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: _ctx.ui.item.shortcuts
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                              return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(shortcut), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ], 2)) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : undefined,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                          key: 1,
                                          ref_for: true
                                        }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString(item.label), 3),
                                        ((_a = item.shortcuts) == null ? undefined : _a.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: _ctx.ui.padding
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                        return openBlock(), createBlock(_component_NuxtLink, mergeProps({
                          key: subIndex,
                          ref_for: true
                        }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                          default: withCtx(({ href, target, rel, navigate, isExternal, isActive }) => [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : undefined,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                          key: 1,
                                          ref_for: true
                                        }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString(item.label), 3),
                                        ((_a = item.shortcuts) == null ? undefined : _a.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ]),
                          _: 2
                        }, 1040);
                      }), 128))
                    ], 2);
                  }), 128))
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HMenuButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstartPassive: _ctx.onTouchStart
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]),
          open && _ctx.items.length ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseenter: _ctx.onMouseEnter
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HMenuItems, {
                    class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: _ctx.ui.padding
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                            return openBlock(), createBlock(_component_NuxtLink, mergeProps({
                              key: subIndex,
                              ref_for: true
                            }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                              default: withCtx(({ href, target, rel, navigate, isExternal, isActive }) => [
                                createVNode(_component_HMenuItem, {
                                  disabled: item.disabled
                                }, {
                                  default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                    (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                      href: !itemDisabled ? href : undefined,
                                      rel,
                                      target,
                                      class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                      onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                              key: 1,
                                              ref_for: true
                                            }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString(item.label), 3),
                                            ((_a = item.shortcuts) == null ? undefined : _a.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                  ]),
                                  _: 2
                                }, 1032, ["disabled"])
                              ]),
                              _: 2
                            }, 1040);
                          }), 128))
                        ], 2);
                      }), 128))
                    ]),
                    _: 3
                  }, 8, ["class"])
                ])
              ]),
              _: 3
            }, 16)
          ], 46, ["onMouseenter"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Dropdown.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$7 = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: undefined
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: [Boolean, String],
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: undefined
    }
  },
  setup(props) {
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q2) => {
        if (q2.type === "added") {
          filtered.push(q2.key);
        }
        return filtered;
      }, []);
      return isEqual(item1, item2, { excludeKeys: (key) => diffedKeys.includes(key) });
    }
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(route.query, $route.query)) return props.inactiveClass;
      } else if (props.exactQuery === true) {
        if (!isEqual(route.query, $route.query)) return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_1$2;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : undefined,
            "aria-disabled": _ctx.disabled ? "true" : undefined,
            role: _ctx.disabled ? "link" : undefined,
            rel,
            target,
            class: _ctx.active !== undefined ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
            tabindex: _ctx.disabled ? -1 : undefined
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== undefined ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : undefined,
              "aria-disabled": _ctx.disabled ? "true" : undefined,
              role: _ctx.disabled ? "link" : undefined,
              rel,
              target,
              class: _ctx.active !== undefined ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              tabindex: _ctx.disabled ? -1 : undefined,
              onClick: (e2) => !isExternal && !_ctx.disabled && navigate(e2)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== undefined ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "tabindex", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? undefined : groupContext.value.children.indexOf(instance));
  return {
    size: computed(() => {
      var _a;
      if (!(groupContext == null ? undefined : groupContext.value)) return props.size;
      return (_a = groupContext == null ? undefined : groupContext.value.size) != null ? _a : ui.value.default.size;
    }),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1) return ui.value.rounded;
      if (groupContext.value.children.length === 1) return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0) return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1) return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$6 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$3,
    ULink: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$1.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$1);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? undefined : _a[props.color]) == null ? undefined : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? undefined : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UIcon = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const useThemeStore = defineStore("theme", {
  state: () => ({
    appearance: "dark"
  }),
  actions: {
    setTheme(theme) {
      const colorMode = useColorMode();
      colorMode.preference = theme;
      this.appearance = theme;
    },
    darkTheme() {
      this.setTheme("dark");
    },
    lightTheme() {
      this.setTheme("light");
    },
    systemTheme() {
      this.setTheme("system");
    }
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ThemeDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    storeToRefs(themeStore);
    const { setTheme } = themeStore;
    const selectedMode = ref("Light");
    const items = [
      [
        {
          label: "Light",
          click: () => {
            selectedMode.value = "Light";
            setTheme("light");
          }
        },
        {
          label: "Dark",
          click: () => {
            selectedMode.value = "Dark";
            setTheme("dark");
          }
        },
        {
          label: "System",
          click: () => {
            selectedMode.value = "System";
            setTheme("system");
          }
        }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDropdown = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UDropdown, mergeProps({
        items,
        mode: "click",
        popper: { placement: "bottom-end" }
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "blue",
              label: unref(selectedMode),
              "trailing-icon": "i-heroicons-chevron-down-20-solid"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "blue",
                label: unref(selectedMode),
                "trailing-icon": "i-heroicons-chevron-down-20-solid"
              }, null, 8, ["label"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeDropdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const useDeleteUserAccount = async (username, email) => {
  try {
    const deleteUser = await $fetch("/api/deleteUser", {
      method: "DELETE",
      body: { username, email }
    });
    return deleteUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const confirmDeleteAccount = "delete my account";
const _sfc_main$4 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const modalDeleteAccount = ref(false);
    const confirmText = ref("");
    const isOpen = ref(false);
    ref(false);
    const isExportModalOpen = ref(false);
    const { logout, user, email } = useAuth();
    const deleteUser = useDeleteUserAccount;
    const isUserSettings = ref(false);
    const currentUser = computed(() => {
      var _a;
      return ((_a = user.value) == null ? undefined : _a.username) || "Guest";
    });
    const isSidePanel = ref(false);
    const resetConfirmDeleteAccount = () => {
      modalDeleteAccount.value = false;
      confirmText.value = "";
    };
    const handleDeleteAccount = async () => {
      try {
        if (confirmText.value === confirmDeleteAccount) {
          await deleteUser(currentUser.value, user.value.email);
        }
        logout();
        navigateTo("/register");
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    };
    const handleLogout = async () => {
      try {
        const userCookie = useCookie("user");
        const tokenCookie = useCookie("token");
        userCookie.value = null;
        tokenCookie.value = null;
        await logout();
        user.value = null;
        navigateTo("/login");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };
    const handleExportData = () => {
      console.log("Exporting data...");
      isExportModalOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      const _component_FilterResults = __nuxt_component_1$1;
      const _component_HistoryResults = __nuxt_component_2$2;
      const _component_UModal = __nuxt_component_3$1;
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_ThemeDropdown = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-a95f810c>`);
      if (isSidePanel.value) {
        _push(`<aside class="fixed h-full w-full md:w-80 md:fixed md:h-full border-r border-gray-800/30 flex flex-col z-10 bg-gray-900 text-white" data-v-a95f810c><div class="p-4 border-b border-gray-800/30" data-v-a95f810c><div class="flex items-center justify-between" data-v-a95f810c><h1 class="flex items-center text-4xl font-kanit" data-v-a95f810c>codepeak</h1><button class="transition-all duration-300 bg-transparent rounded-xl w-10 h-10 flex items-center justify-center md:hidden" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "formkit:close",
          size: "30"
        }, null, _parent));
        _push(`</button>`);
        if (isSidePanel.value) {
          _push(`<button class="hidden md:flex transition-all duration-300 rounded-xl items-center justify-center sidebar-btn p-1 translate-y-0" data-v-a95f810c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "fluent:panel-left-16-regular",
            size: "35"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex-1 overflow-y-auto p-4" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_FilterResults, null, null, _parent));
        _push(ssrRenderComponent(_component_HistoryResults, null, null, _parent));
        _push(`</div><div class="p-4 border-t border-gray-800/30" data-v-a95f810c><div style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="custom-modal p-2 mb-2" data-v-a95f810c><ul data-v-a95f810c><li class="cursor-pointer p-2 hover:bg-gray-600 flex items-center gap-3 rounded-xl" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mingcute:settings-3-fill",
          size: "30"
        }, null, _parent));
        _push(`Settings </li><li class="cursor-pointer p-2 hover:bg-gray-600 flex items-center gap-2 rounded-xl" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "tabler:logout",
          size: "30"
        }, null, _parent));
        _push(`Log out </li></ul></div><button class="profile-btn flex items-center gap-1 hover:bg-gray-600 hover:text-[#f5f5f5] w-full p-2 rounded-xl transition-all duration-300" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lets-icons:user-cicrle-duotone",
          size: "40"
        }, null, _parent));
        _push(`<p class="text-md" data-v-a95f810c>${ssrInterpolate(currentUser.value)}</p></button></div></aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ hidden: isSidePanel.value }, "block md:hidden cursor-pointer fixed top-4 left-4 z-50"])}" data-v-a95f810c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "tabler:menu-3",
        size: "40"
      }, null, _parent));
      _push(`</div>`);
      if (!isSidePanel.value) {
        _push(`<div class="minimal-sidebar hidden bg-gray-900 md:flex fixed top-0 left-0 w-20 h-screen p-4 flex-col justify-between items-center shadow-lg z-20" data-v-a95f810c><div class="flex flex-col items-center gap-6" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "game-icons:mountaintop",
          size: "40"
        }, null, _parent));
        _push(`<button class="transition-all duration-300 flex items-center justify-center sidebar-btn p-1 rounded-lg" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "fluent:panel-left-16-regular",
          size: "40"
        }, null, _parent));
        _push(`</button><div class="transition-all duration-300 flex items-center justify-center sidebar-btn p-1 rounded-lg" data-v-a95f810c></div></div><button class="transition-all duration-300 flex items-center justify-center sidebar-btn p-1 rounded-lg" data-v-a95f810c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lets-icons:user-cicrle-duotone",
          size: "40"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isUserSettings.value,
        "onUpdate:modelValue": ($event) => isUserSettings.value = $event,
        ui: {
          base: "text-black rounded-xl p-6 font-sans",
          width: "w-full md:w-[400px]",
          height: "h-auto",
          padding: "p-6",
          background: "bg-[#f0f0f0]"
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-2xl mb-4 flex items-center gap-3" data-v-a95f810c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mingcute:settings-7-line",
              size: "28"
            }, null, _parent2, _scopeId));
            _push2(` Settings </h2>`);
            if (!unref(user)) {
              _push2(`<div class="flex flex-col gap-4 p-6 font-kanit" data-v-a95f810c${_scopeId}><h2 class="text-xl text-gray-900 dark:text-gray-100" data-v-a95f810c${_scopeId}>Attention</h2><p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed" data-v-a95f810c${_scopeId}> To save changes, please log in or register. </p><div class="flex flex-col sm:flex-row gap-3" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/login",
                class: "flex-1 text-center py-2 px-4 rounded-lg border text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out flex items-center justify-center"
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:login",
                      size: "16",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Log In `);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "mdi:login",
                        size: "16",
                        class: "mr-2"
                      }),
                      createTextVNode(" Log In ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/register",
                class: "flex-1 text-center py-2 px-4 rounded-lg border dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out flex items-center justify-center"
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:account-plus",
                      size: "16",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Sign Up `);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "mdi:account-plus",
                        size: "16",
                        class: "mr-2"
                      }),
                      createTextVNode(" Sign Up ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between pt-4" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2 text-gray-700 dark:text-gray-300" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ix:light-dark",
                size: "20",
                class: "text-gray-500 dark:text-gray-400"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm" data-v-a95f810c${_scopeId}>Theme</span></div>`);
              _push2(ssrRenderComponent(_component_ThemeDropdown, null, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div data-v-a95f810c${_scopeId}><div class="space-y-4 text-base" data-v-a95f810c${_scopeId}><div class="flex justify-between items-center border-b border-black py-3 pt-2" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "wpf:sun",
                size: "22"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a95f810c${_scopeId}>Theme</span></div>`);
              _push2(ssrRenderComponent(_component_ThemeDropdown, null, null, _parent2, _scopeId));
              _push2(`</div><div class="flex justify-between items-center border-b border-black py-3 pt-2" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:user",
                size: "22"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a95f810c${_scopeId}>User</span></div><span data-v-a95f810c${_scopeId}>${ssrInterpolate(currentUser.value)}</span></div><div class="flex justify-between items-center border-b border-black py-3 pt-2" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:twotone-alternate-email",
                size: "22"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a95f810c${_scopeId}>Email</span></div><span class="truncate" data-v-a95f810c${_scopeId}>${ssrInterpolate(unref(email))}</span></div><div class="flex justify-between items-center border-b border-black py-3 pt-2" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "streamline:database-solid",
                size: "20"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a95f810c${_scopeId}>Export Data</span></div><button class="bg-[#111827] text-white py-1 px-3 rounded-lg transition-all" data-v-a95f810c${_scopeId}> Export </button></div><div class="flex justify-between items-center border-b border-black py-3 pt-2" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "streamline:database-remove-solid",
                size: "22"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a95f810c${_scopeId}>Delete data</span></div><button class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition-all" data-v-a95f810c${_scopeId}> Delete </button></div></div><div class="flex justify-between items-center border-b border-black py-3 pt-4" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "akar-icons:door",
                size: "22"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a95f810c${_scopeId}>Logout</span></div><button class="bg-gray-300 text-black py-1 px-3 rounded-lg hover:bg-gray-400 transition-all" data-v-a95f810c${_scopeId}> Logout </button></div><div class="flex justify-between items-center py-3 pt-4" data-v-a95f810c${_scopeId}><div class="flex items-center gap-2" data-v-a95f810c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "icon-park-solid:people-delete-one",
                size: "22"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-a95f810c${_scopeId}>Delete Account</span></div><button class="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-all" data-v-a95f810c${_scopeId}> Delete </button></div></div>`);
            }
          } else {
            return [
              createVNode("h2", { class: "text-2xl mb-4 flex items-center gap-3" }, [
                createVNode(_component_Icon, {
                  name: "mingcute:settings-7-line",
                  size: "28"
                }),
                createTextVNode(" Settings ")
              ]),
              !unref(user) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col gap-4 p-6 font-kanit"
              }, [
                createVNode("h2", { class: "text-xl text-gray-900 dark:text-gray-100" }, "Attention"),
                createVNode("p", { class: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed" }, " To save changes, please log in or register. "),
                createVNode("div", { class: "flex flex-col sm:flex-row gap-3" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/login",
                    class: "flex-1 text-center py-2 px-4 rounded-lg border text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out flex items-center justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mdi:login",
                        size: "16",
                        class: "mr-2"
                      }),
                      createTextVNode(" Log In ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "/register",
                    class: "flex-1 text-center py-2 px-4 rounded-lg border dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out flex items-center justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mdi:account-plus",
                        size: "16",
                        class: "mr-2"
                      }),
                      createTextVNode(" Sign Up ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between pt-4" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-gray-700 dark:text-gray-300" }, [
                    createVNode(_component_Icon, {
                      name: "ix:light-dark",
                      size: "20",
                      class: "text-gray-500 dark:text-gray-400"
                    }),
                    createVNode("span", { class: "text-sm" }, "Theme")
                  ]),
                  createVNode(_component_ThemeDropdown)
                ])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "space-y-4 text-base" }, [
                  createVNode("div", { class: "flex justify-between items-center border-b border-black py-3 pt-2" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "wpf:sun",
                        size: "22"
                      }),
                      createVNode("span", null, "Theme")
                    ]),
                    createVNode(_component_ThemeDropdown)
                  ]),
                  createVNode("div", { class: "flex justify-between items-center border-b border-black py-3 pt-2" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "mdi:user",
                        size: "22"
                      }),
                      createVNode("span", null, "User")
                    ]),
                    createVNode("span", null, toDisplayString(currentUser.value), 1)
                  ]),
                  createVNode("div", { class: "flex justify-between items-center border-b border-black py-3 pt-2" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "ic:twotone-alternate-email",
                        size: "22"
                      }),
                      createVNode("span", null, "Email")
                    ]),
                    createVNode("span", { class: "truncate" }, toDisplayString(unref(email)), 1)
                  ]),
                  createVNode("div", { class: "flex justify-between items-center border-b border-black py-3 pt-2" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "streamline:database-solid",
                        size: "20"
                      }),
                      createVNode("span", null, "Export Data")
                    ]),
                    createVNode("button", {
                      class: "bg-[#111827] text-white py-1 px-3 rounded-lg transition-all",
                      onClick: ($event) => isExportModalOpen.value = true
                    }, " Export ", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center border-b border-black py-3 pt-2" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_Icon, {
                        name: "streamline:database-remove-solid",
                        size: "22"
                      }),
                      createVNode("span", null, "Delete data")
                    ]),
                    createVNode("button", {
                      class: "bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition-all",
                      onClick: _ctx.handleDeleteData
                    }, " Delete ", 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex justify-between items-center border-b border-black py-3 pt-4" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "akar-icons:door",
                      size: "22"
                    }),
                    createVNode("span", null, "Logout")
                  ]),
                  createVNode("button", {
                    class: "bg-gray-300 text-black py-1 px-3 rounded-lg hover:bg-gray-400 transition-all",
                    onClick: handleLogout
                  }, " Logout ")
                ]),
                createVNode("div", { class: "flex justify-between items-center py-3 pt-4" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "icon-park-solid:people-delete-one",
                      size: "22"
                    }),
                    createVNode("span", null, "Delete Account")
                  ]),
                  createVNode("button", {
                    class: "bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-all",
                    onClick: ($event) => modalDeleteAccount.value = !modalDeleteAccount.value
                  }, " Delete ", 8, ["onClick"])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isExportModalOpen.value,
        "onUpdate:modelValue": ($event) => isExportModalOpen.value = $event,
        ui: {
          base: "text-black rounded-xl p-6 font-sans",
          width: "w-full md:w-[400px]",
          height: "h-auto",
          padding: "p-6",
          background: "bg-[#f0f0f0]"
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-2xl mb-4 flex items-center gap-3" data-v-a95f810c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:database-arrow-down",
              size: "28"
            }, null, _parent2, _scopeId));
            _push2(` Export Data </h2><div class="space-y-4" data-v-a95f810c${_scopeId}><p class="text-gray-600" data-v-a95f810c${_scopeId}> Choose the format and options for exporting your data: </p><div class="flex flex-col gap-2" data-v-a95f810c${_scopeId}><label class="flex items-center gap-2" data-v-a95f810c${_scopeId}><input type="radio" name="export-format" value="json" checked data-v-a95f810c${_scopeId}><span data-v-a95f810c${_scopeId}>JSON</span></label><label class="flex items-center gap-2" data-v-a95f810c${_scopeId}><input type="radio" name="export-format" value="csv" data-v-a95f810c${_scopeId}><span data-v-a95f810c${_scopeId}>CSV</span></label><label class="flex items-center gap-2" data-v-a95f810c${_scopeId}><input type="radio" name="export-format" value="excel" data-v-a95f810c${_scopeId}><span data-v-a95f810c${_scopeId}>Excel</span></label></div><div class="flex flex-col gap-2" data-v-a95f810c${_scopeId}><label class="flex items-center gap-2" data-v-a95f810c${_scopeId}><input type="checkbox" name="include-metadata" data-v-a95f810c${_scopeId}><span data-v-a95f810c${_scopeId}>Include metadata</span></label><label class="flex items-center gap-2" data-v-a95f810c${_scopeId}><input type="checkbox" name="compress-files" data-v-a95f810c${_scopeId}><span data-v-a95f810c${_scopeId}>Compress files (ZIP)</span></label></div><div class="flex justify-end gap-3 mt-6" data-v-a95f810c${_scopeId}><button class="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-all" data-v-a95f810c${_scopeId}> Cancel </button><button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all" data-v-a95f810c${_scopeId}> Export </button></div></div>`);
          } else {
            return [
              createVNode("h2", { class: "text-2xl mb-4 flex items-center gap-3" }, [
                createVNode(_component_Icon, {
                  name: "mdi:database-arrow-down",
                  size: "28"
                }),
                createTextVNode(" Export Data ")
              ]),
              createVNode("div", { class: "space-y-4" }, [
                createVNode("p", { class: "text-gray-600" }, " Choose the format and options for exporting your data: "),
                createVNode("div", { class: "flex flex-col gap-2" }, [
                  createVNode("label", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "radio",
                      name: "export-format",
                      value: "json",
                      checked: ""
                    }),
                    createVNode("span", null, "JSON")
                  ]),
                  createVNode("label", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "radio",
                      name: "export-format",
                      value: "csv"
                    }),
                    createVNode("span", null, "CSV")
                  ]),
                  createVNode("label", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "radio",
                      name: "export-format",
                      value: "excel"
                    }),
                    createVNode("span", null, "Excel")
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-2" }, [
                  createVNode("label", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      name: "include-metadata"
                    }),
                    createVNode("span", null, "Include metadata")
                  ]),
                  createVNode("label", { class: "flex items-center gap-2" }, [
                    createVNode("input", {
                      type: "checkbox",
                      name: "compress-files"
                    }),
                    createVNode("span", null, "Compress files (ZIP)")
                  ])
                ]),
                createVNode("div", { class: "flex justify-end gap-3 mt-6" }, [
                  createVNode("button", {
                    class: "bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-all",
                    onClick: ($event) => isExportModalOpen.value = false
                  }, " Cancel ", 8, ["onClick"]),
                  createVNode("button", {
                    class: "bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all",
                    onClick: handleExportData
                  }, " Export ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: modalDeleteAccount.value,
        "onUpdate:modelValue": ($event) => modalDeleteAccount.value = $event,
        ui: {
          base: "text-black rounded-xl p-6 font-sans",
          width: "w-full md:w-[400px]",
          height: "h-auto",
          padding: "p-6",
          background: "bg-[#f0f0f0]"
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-gray-600" data-v-a95f810c${_scopeId}><h2 class="text-center text-2xl mb-4" data-v-a95f810c${_scopeId}>Confirm Account Deletion</h2><p class="text-gray-600 mb-4 font-sans p-0" data-v-a95f810c${_scopeId}> To permanently delete your account, please type <br data-v-a95f810c${_scopeId}><span class="font-bold" data-v-a95f810c${_scopeId}>&quot;delete my account&quot;</span> in the input below. </p><input${ssrRenderAttr("value", confirmText.value)} type="text" class="w-full border rounded-md p-2 text-center" placeholder="Type here..." data-v-a95f810c${_scopeId}><div class="flex justify-end gap-3 mt-6" data-v-a95f810c${_scopeId}><button class="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-all" data-v-a95f810c${_scopeId}> Cancel </button><button${ssrIncludeBooleanAttr(confirmText.value !== "delete my account") ? " disabled" : ""} class="${ssrRenderClass([{
              "bg-red-600 opacity-100 hover:bg-red-700": confirmText.value === "delete my account",
              "opacity-50 cursor-not-allowed": confirmText.value !== "delete my account"
            }, "bg-gray-400 text-white py-2 px-4 rounded-lg transition-all"])}" data-v-a95f810c${_scopeId}> Delete Account </button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-gray-600" }, [
                createVNode("h2", { class: "text-center text-2xl mb-4" }, "Confirm Account Deletion"),
                createVNode("p", { class: "text-gray-600 mb-4 font-sans p-0" }, [
                  createTextVNode(" To permanently delete your account, please type "),
                  createVNode("br"),
                  createVNode("span", { class: "font-bold" }, '"delete my account"'),
                  createTextVNode(" in the input below. ")
                ]),
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => confirmText.value = $event,
                  type: "text",
                  class: "w-full border rounded-md p-2 text-center",
                  placeholder: "Type here..."
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, confirmText.value]
                ]),
                createVNode("div", { class: "flex justify-end gap-3 mt-6" }, [
                  createVNode("button", {
                    class: "bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-all",
                    onClick: resetConfirmDeleteAccount
                  }, " Cancel "),
                  createVNode("button", {
                    class: ["bg-gray-400 text-white py-2 px-4 rounded-lg transition-all", {
                      "bg-red-600 opacity-100 hover:bg-red-700": confirmText.value === "delete my account",
                      "opacity-50 cursor-not-allowed": confirmText.value !== "delete my account"
                    }],
                    disabled: confirmText.value !== "delete my account",
                    onClick: handleDeleteAccount
                  }, " Delete Account ", 10, ["disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a95f810c"]]);
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", undefined);
  const formGroup = inject("form-group", undefined);
  const formInputs = inject("form-inputs", undefined);
  if (formGroup) {
    if (!bind || (inputProps == null ? undefined : inputProps.legend)) {
      formGroup.inputId.value = undefined;
    } else if (inputProps == null ? undefined : inputProps.id) {
      formGroup.inputId.value = inputProps == null ? undefined : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup.name.value] = formGroup.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? undefined : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? undefined : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? undefined : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? undefined : formGroup.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a;
      return (_a = inputProps == null ? undefined : inputProps.id) != null ? _a : formGroup == null ? undefined : formGroup.inputId.value;
    }),
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? undefined : inputProps.name) != null ? _a : formGroup == null ? undefined : formGroup.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup == null ? undefined : formGroup.size.value] ? formGroup == null ? undefined : formGroup.size.value : null;
      return (_b = (_a2 = inputProps == null ? undefined : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2.default) == null ? undefined : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? undefined : formGroup.error) == null ? undefined : _a.value) ? "red" : inputProps == null ? undefined : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.toggle, toggle);
const _sfc_main$3 = defineComponent({
  components: {
    HSwitch: ue,
    UIcon: __nuxt_component_0$3
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: String,
      default: () => config.default.onIcon
    },
    offIcon: {
      type: String,
      default: () => config.default.offIcon
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("toggle", toRef(props, "ui"), config);
    const { emitFormChange, color, inputId, name } = useFormGroup(props);
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        emit("change", value);
        emitFormChange();
      }
    });
    const switchClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.rounded,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && (active.value ? ui.value.active : ui.value.inactive).replaceAll("{color}", color.value)
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container.size[props.size],
        active.value ? ui.value.container.active[props.size] : ui.value.container.inactive
      );
    });
    const onIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.on.replaceAll("{color}", color.value)
      );
    });
    const offIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.off.replaceAll("{color}", color.value)
      );
    });
    const loadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.size[props.size],
        color.value && ui.value.icon.loading.replaceAll("{color}", color.value)
      );
    });
    s$5(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      active,
      switchClass,
      containerClass,
      onIconClass,
      offIconClass,
      loadingIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HSwitch = resolveComponent("HSwitch");
  const _component_UIcon = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_HSwitch, mergeProps({
    id: _ctx.inputId,
    modelValue: _ctx.active,
    "onUpdate:modelValue": ($event) => _ctx.active = $event,
    name: _ctx.name,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.switchClass
  }, _ctx.attrs, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass(_ctx.containerClass)}"${_scopeId}>`);
        if (_ctx.loading) {
          _push2(`<span class="${ssrRenderClass([_ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.loadingIcon,
            class: _ctx.loadingIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.onIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.onIcon,
            class: _ctx.onIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.loading && _ctx.offIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.offIcon,
            class: _ctx.offIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", { class: _ctx.containerClass }, [
            _ctx.loading ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.loadingIcon,
                class: _ctx.loadingIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.onIcon ? (openBlock(), createBlock("span", {
              key: 1,
              class: [_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.onIcon,
                class: _ctx.onIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            !_ctx.loading && _ctx.offIcon ? (openBlock(), createBlock("span", {
              key: 2,
              class: [_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.offIcon,
                class: _ctx.offIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Toggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Loader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DotLottieVue), mergeProps({
        class: "text-white",
        autoplay: "",
        loop: "",
        src: "https://lottie.host/4978a09c-6a8e-4af4-befc-dced3a7b4de3/ne9EcNiBtZ.lottie"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r2) => r2.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : undefined
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_2, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === undefined || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d2 = Number.parseInt(density.replace("x", ""));
    if (d2) {
      densities.add(d2);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e2) => e2)) {
      const s3 = entry.split(":");
      if (s3.length !== 2) {
        sizes["1px"] = s3[0].trim();
      } else {
        sizes[s3[0].trim()] = s3[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d2) => d2 === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? undefined : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? undefined : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? undefined : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? undefined : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? undefined : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === undefined) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : undefined;
      if (variant === undefined) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? undefined : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? undefined : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v2) => `${v2.media ? v2.media + " " : ""}${v2.size}`).join(", ") : undefined;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v2) => `${v2.src} ${v2.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? undefined : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return undefined;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return undefined;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : undefined,
      height: variant._cHeight ? variant._cHeight * density : undefined
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i2 = sizeVariants.length - 1; i2 >= 0; i2--) {
    const sizeVariant = sizeVariants[i2];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i2, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i2 = 0; i2 < sizeVariants.length; i2++) {
    sizeVariants[i2].media = ((_a = sizeVariants[i2 + 1]) == null ? undefined : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i2 = srcsetVariants.length - 1; i2 >= 0; i2--) {
    const sizeVariant = srcsetVariants[i2];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i2, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$1Z0vcPZua8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$1Z0vcPZua8, defaults: {} }
};
const useImage = () => {
  const config2 = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config2.app.baseURL
    },
    runtimeConfig: config2
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || undefined,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v2) => v2);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: props.placeholder && !placeholderLoaded.value ? props.placeholderClass : undefined
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    useHead({
      title: "CodePeak",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/logo.svg"
        }
      ]
    });
    ref(false);
    const isDragging = ref(false);
    const uploadedImage = ref(null);
    const isLoading = ref(false);
    const classificationResult = ref(null);
    const showBestResultOnly = ref(false);
    const isScanSaved = ref(false);
    ref(null);
    const filteredClassificationResult = computed(() => {
      if (!classificationResult.value) return null;
      if (showBestResultOnly.value) {
        const bestResult = classificationResult.value.reduce(
          (max2, current) => current.score > max2.score ? current : max2
        );
        return [bestResult];
      } else {
        return [...classificationResult.value].sort((a2, b2) => b2.score - a2.score);
      }
    });
    const isMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$4;
      const _component_UToggle = __nuxt_component_2;
      const _component_Loader = _sfc_main$2;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex overflow-hidden transition-all duration-300" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
      _push(`<main class="flex-1 relative h-screen overflow-hidden"><div class="absolute inset-0 overflow-y-auto p-6"><div class="flex flex-col items-center justify-center min-h-full"><div style="${ssrRenderStyle(!unref(uploadedImage) ? null : { display: "none" })}" class="fixed text-center flex flex-col items-center justify-center"><div class="flex gap-2 items-center text-4xl">`);
      _push(ssrRenderComponent(_component_Icon, { name: "game-icons:mountaintop" }, null, _parent));
      _push(`<h1>codepeak</h1></div><p class="text-md mt-4">Upload an image to classify it.</p>`);
      if (!unref(uploadedImage) && !unref(isLoading)) {
        _push(`<div class="${ssrRenderClass([
          "md:w-auto md:p-4 h-40 flex items-center justify-center text-xl mt-6 p-8 border-2 border-dashed rounded-lg text-center transition-all duration-3000 text-white",
          unref(isDragging) ? "border-blue-500 bg-blue-500/10" : "border-gray-700 bg-gray-800"
        ])}"><input type="file" accept="image/*" class="hidden" id="fileInput"><label for="fileInput" class="cursor-pointer text-sm md:text-xl whitespace-nowrap"><p class="${ssrRenderClass([unref(isDragging) ? "text-black" : "text-white", "drag-n-drop-text"])}"> Drag &amp; drop an image or <span class="text-blue-500">click to upload</span>. </p></label></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(uploadedImage)) {
        _push(`<div class="flex items-center relative left-0 mt-4 gap-2 p-2 xl:mr-0"><span class="text-xs text-gray-400">Extended Results</span>`);
        _push(ssrRenderComponent(_component_UToggle, {
          modelValue: unref(showBestResultOnly),
          "onUpdate:modelValue": ($event) => isRef(showBestResultOnly) ? showBestResultOnly.value = $event : null,
          label: unref(showBestResultOnly) ? "Show all results" : "Show best result",
          color: "blue",
          class: "bg-blue-500"
        }, null, _parent));
        _push(`<span class="text-xs text-gray-400">Best result</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(isLoading)) {
        _push(`<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">`);
        _push(ssrRenderComponent(_component_Loader, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(classificationResult)) {
        _push(`<div class="mx-auto mt-6 w-full md:w-[410px] xl:w-[700px] fade-in relative"><div class="max-h-[60vh] overflow-hidden relative"><div class="relative">`);
        if (unref(uploadedImage)) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: unref(uploadedImage),
            alt: "Uploaded image",
            class: "mb-4 response-image mx-auto rounded-lg"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(classificationResult)) {
          _push(`<div class="absolute bottom-6 right-2 flex flex-col items-end"><button class="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-all duration-300">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "iconamoon:menu-kebab-horizontal-bold",
            size: "20",
            class: "text-white"
          }, null, _parent));
          _push(`</button>`);
          if (unref(isMenuOpen)) {
            _push(`<div class="mt-2 py-1 w-28 rounded-lg shadow-lg bg-gray-800/90 backdrop-blur-sm"><button class="w-full px-4 py-2 text-sm text-white hover:bg-gray-700/50 flex items-center gap-2 transition-colors duration-200">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "icon-park-outline:download-one",
              size: "16"
            }, null, _parent));
            _push(` Save </button><button class="w-full px-4 py-2 text-sm text-white hover:bg-gray-700/50 flex items-center gap-2 transition-colors duration-200">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:restart-alt",
              size: "16"
            }, null, _parent));
            _push(` Reset </button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><ul>`);
        if (unref(filteredClassificationResult) && unref(filteredClassificationResult).length) {
          _push(`<!--[-->`);
          ssrRenderList(unref(filteredClassificationResult), (item, idx) => {
            _push(`<li class="mt-2"><div class="flex items-center justify-between"><span class="${ssrRenderClass(unref(showBestResultOnly) ? "text-xl" : "")}">${ssrInterpolate(item.label.split(" ").map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1)
            ).join(" "))}</span></div>`);
            if (!unref(showBestResultOnly)) {
              _push(`<div class="w-full bg-gray-700 rounded-full h-2 mt-1"><div class="bg-blue-500 h-2 rounded-full progress-bar" style="${ssrRenderStyle({ width: `${Math.round(item.score * 100)}%` })}"></div></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</li>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul><div class="flex items-center gap-4">`);
        if (unref(isScanSaved)) {
          _push(`<p class="mt-4 text-green-500"> Scan saved successfully! </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(classificationResult)) {
        _push(`<p class="mt-6 text-[9px] md:text-xs text-gray-400 text-center transition-all duration-300 whitespace-normal mb-6" style="${ssrRenderStyle({ "white-space": "pre-line" })}"> The model can be wrong, especially with low photo quality or unusual objects. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CLOLAtsC.mjs.map
