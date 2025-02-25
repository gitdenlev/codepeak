import __nuxt_component_0 from './index-1YXbR_pY.mjs';
import { u as useHead, _ as __nuxt_component_1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'consola/core';
import 'mongoose';
import '@iconify/utils';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@vercel/analytics/nuxt';

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "CodePeak - Create Account",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/logo.svg"
        }
      ]
    });
    const isShowPassword = ref(false);
    const handleShowPassword = () => {
      isShowPassword.value = !isShowPassword.value;
    };
    const username = ref("");
    const userEmail = ref("");
    const userPassword = ref("");
    const isCreated = ref("");
    const isError = ref("");
    const isLoading = ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto mt-40 p-4 flex flex-col items-center" }, _attrs))}><div class="mb-8 flex gap-2 items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "game-icons:mountaintop",
        size: "40"
      }, null, _parent));
      _push(`<h1 class="text-2xl">codepeak</h1></div><form class="w-full max-w-md"><div class="flex flex-col gap-4 items-center"><div class="relative w-2/3 text-black/70"><input${ssrRenderAttr("value", unref(username))} type="text" placeholder="Username" required class="font-sans placeholder:font-kanit pl-10 pr-4 py-2 rounded-md border-none outline-none border-gray-300 w-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:user",
        size: "20",
        class: "absolute left-3 top-1/2 -translate-y-1/2"
      }, null, _parent));
      _push(`</div><div class="relative w-2/3 text-black/70"><input${ssrRenderAttr("value", unref(userEmail))} type="email" placeholder="Email address" required class="font-sans placeholder:font-kanit pl-10 pr-4 py-2 rounded-md border-none outline-none border-gray-300 w-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:twotone-alternate-email",
        size: "20",
        class: "absolute left-3 top-1/2 -translate-y-1/2"
      }, null, _parent));
      _push(`</div><div class="relative w-2/3 text-black/70"><input${ssrRenderAttr("type", unref(isShowPassword) ? "text" : "password")}${ssrRenderDynamicModel(unref(isShowPassword) ? "text" : "password", unref(userPassword), null)} placeholder="Password" required class="font-sans placeholder:font-kanit pl-10 pr-4 py-2 rounded-md border-none outline-none border-gray-300 w-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:password",
        size: "20",
        class: "absolute left-3 top-1/2 -translate-y-1/2"
      }, null, _parent));
      if (unref(userPassword).length > 0) {
        _push(ssrRenderComponent(_component_Icon, {
          onClick: handleShowPassword,
          name: unref(isShowPassword) ? "lucide:eye" : "basil:eye-closed-outline",
          size: "25",
          class: "cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} class="border-none outline-none bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 w-2/3">`);
      if (unref(isLoading)) {
        _push(`<span>Loading...</span>`);
      } else {
        _push(`<span>Create Account</span>`);
      }
      _push(`</button>`);
      if (unref(isCreated)) {
        _push(`<p class="text-green-500 mt-2">${ssrInterpolate(unref(isCreated))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isError)) {
        _push(`<p class="text-red-500 mt-2">${ssrInterpolate(unref(isError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form><div class="text-center mt-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-blue-500 underline hover:text-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Already have an account? Log in here `);
          } else {
            return [
              createTextVNode(" Already have an account? Log in here ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BOaJcPU3.mjs.map
