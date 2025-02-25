import { computed, ref } from 'vue';
import { k as klona, D as parse, E as getRequestHeader, F as destr, x as isEqual, s as setCookie, G as getCookie, H as deleteCookie } from '../_/nitro.mjs';
import { c as useState, b as useNuxtApp, n as navigateTo } from './server.mjs';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? undefined : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2, _b;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  (_a2 = opts.filter) != null ? _a2 : opts.filter = (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== undefined) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== undefined && delay <= 0;
  const cookieValue = klona(hasExpired ? undefined : (_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? undefined : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== undefined) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== undefined) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useAuth = () => {
  const token = useCookie("token");
  const user = useState("user", () => {
    const userCookie = useCookie("user");
    try {
      const parsedUser = userCookie.value ? JSON.parse(userCookie.value) : null;
      console.log("User restored from cookie:", parsedUser);
      return parsedUser;
    } catch (error) {
      console.error("Failed to parse user cookie:", error);
      return null;
    }
  });
  const login = async (credentials) => {
    try {
      const response = await $fetch(
        "/api/login",
        {
          method: "POST",
          body: credentials
        }
      );
      if (response.token) {
        token.value = response.token;
        user.value = response.user;
        const userCookie = useCookie("user", {
          maxAge: 60 * 60 * 24 * 7,
          // 1 тиждень
          path: "/",
          // Діє для всіх шляхів
          secure: true
          // Використовується HTTPS у продакшені
        });
        userCookie.value = JSON.stringify(response.user);
        console.log("User saved to cookie:", userCookie.value);
        await navigateTo("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };
  const logout = async () => {
    token.value = null;
    user.value = null;
    const userCookie = useCookie("user");
    userCookie.value = null;
    await navigateTo("/login");
  };
  return {
    token,
    user,
    email: computed(() => {
      var _a;
      return user.value ? (_a = user.value) == null ? undefined : _a.email : null;
    }),
    login,
    logout
  };
};

export { useCookie as a, useAuth as u };
//# sourceMappingURL=useAuth-6QbkkPW4.mjs.map
