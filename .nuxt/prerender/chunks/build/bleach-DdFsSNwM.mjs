import { defineComponent, ref, unref, useSSRContext } from 'file://D:/eori-main-main/node_modules/vue/index.mjs';
import { u as useSeoMeta, _ as _imports_0 } from './server.mjs';
import { ssrRenderAttr, ssrRenderClass } from 'file://D:/eori-main-main/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_6 } from './KMVxGyr39w-B9j0UTQ9.mjs';
import 'file://D:/eori-main-main/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/eori-main-main/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/eori-main-main/node_modules/h3/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/devalue/index.js';
import 'file://D:/eori-main-main/node_modules/ufo/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://D:/eori-main-main/node_modules/destr/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/eori-main-main/node_modules/hookable/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/klona/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/scule/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/defu/dist/defu.mjs';
import 'file://D:/eori-main-main/node_modules/ohash/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/unstorage/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/eori-main-main/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://D:/eori-main-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/eori-main-main/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/eori-main-main/node_modules/pathe/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://D:/eori-main-main/node_modules/unhead/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/unctx/dist/index.mjs';
import 'file://D:/eori-main-main/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/eori-main-main/node_modules/vue3-smooth-scroll/dist/vue-smooth-scroll.min.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bleach",
  __ssrInlineRender: true,
  setup(__props) {
    const showMenu = ref(false);
    useSeoMeta({
      title: "Eori \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u043C\u0438 \u0438\u0437 \u043C\u0438\u0440\u0430 \u0430\u043D\u0438\u043C\u0435",
      ogTitle: "Eori \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u043C\u0438 \u0438\u0437 \u043C\u0438\u0440\u0430 \u0430\u043D\u0438\u043C\u0435",
      description: "\u0421\u043B\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0441\u0432\u0435\u0436\u0438\u043C\u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u043C\u0438 \u0438\u0437 \u043C\u0438\u0440\u0430 \u0430\u043D\u0438\u043C\u0435: \u043E\u0431\u0437\u043E\u0440\u044B \u043D\u043E\u0432\u0438\u043D\u043E\u043A, \u043B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u0438\u0433\u0440\u044B, \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0438 \u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u0440\u0435\u043B\u0438\u0437\u044B. \u0412\u0441\u0451, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0444\u0430\u043D\u0430\u0442\u0430\u043C \u0430\u043D\u0438\u043C\u0435!",
      ogDescription: "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u043E \u0441\u0430\u043C\u044B\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u0445 \u0430\u043D\u0438\u043C\u0435, \u043D\u043E\u0432\u0438\u043D\u043A\u0430\u0445 \u0438\u0433\u0440 \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0430\u043D\u0438\u043C\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445. \u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0431\u0437\u043E\u0440\u044B, \u0441\u043B\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438 \u0438 \u0431\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435!",
      ogImage: "https://example.com/image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="banner-1"><nav class="container px-6 mx-auto md:flex md:justify-between md:items-center"><div class="flex items-center justify-between"><div class="relative w-16 h-16"><img class="rounded-full border border-gray-100 shadow-sm"${ssrRenderAttr("src", _imports_0)} alt="user image"></div><div class="flex md:hidden"><button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"><svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg></button></div></div><ul class="${ssrRenderClass([unref(showMenu) ? "flex" : "hidden", "flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"])}"><li class="menu-button"><a href="/">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a></li><li class="menu-button"><a href="/games">\u0418\u0433\u0440\u044B</a></li><li class="menu-button"><a href="/information">\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</a></li><li class="menu-button"><a href="/about">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B </a></li></ul></nav></div><div class="banner-2 space-y-10 pb-20" id="work"><h4 class="project-title item">\u0422\u0438\u0437\u0435\u0440 \xABBleach: \u0422\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u043D\u044F\u044F \u0432\u043E\u0439\u043D\u0430 \u043A\u0440\u043E\u0432\u0438 \u2013 \u0411\u0435\u0434\u0441\u0442\u0432\u0438\u0435\xBB \u2014 \u0444\u0438\u043D\u0430\u043B\u0430 \u0430\u043D\u0438\u043C\u0435</h4><div class="card-image bg-green-100"><img class="object-cover w-full h-72 md:h-96"${ssrRenderAttr("src", _imports_6)}></div><h4 class="font-work_sans text-black font-bold text-2xl tracking-wider">\xAB\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\xBB \u043E\u043A\u043E\u043D\u0447\u0435\u043D, \u0432\u043F\u0435\u0440\u0435\u0434\u0438 \xAB\u0411\u0435\u0434\u0441\u0442\u0432\u0438\u0435\xBB: Pierrot (\xAB\u041D\u0430\u0440\u0443\u0442\u043E\xBB) \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0430 \u043F\u043E\u043A\u0430\u0437 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0438 \u0430\u043D\u043E\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043B\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0430\u043D\u0438\u043C\u0435 \xABBleach: \u0422\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u043D\u044F\u044F \u0432\u043E\u0439\u043D\u0430 \u043A\u0440\u043E\u0432\u0438\xBB, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043D\u0433\u0438 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044F. \u041F\u043E\u043A\u0430 \u0435\u0441\u0442\u044C \u043B\u0438\u0448\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0442\u0438\u0437\u0435\u0440. \u041A\u0432\u0438\u043D\u0441\u0438 \u043F\u043E\u0434 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0438\u043C\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u042F\u0445\u0432\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442 \u0441\u0432\u043E\u0439 \u043F\u043E\u0445\u043E\u0434 \u043F\u0440\u043E\u0442\u0438\u0432 \u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0434\u0443\u0448, \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u041A\u0443\u0440\u043E\u0441\u0430\u043A\u0438 \u0418\u0447\u0438\u0433\u043E. \u041D\u0430\u043F\u043E\u043C\u043D\u0438\u043C, \u0441\u0435\u0440\u0438\u0430\u043B \u0434\u0435\u0431\u044E\u0442\u0438\u0440\u043E\u0432\u0430\u043B \u0432 2004 \u0433\u043E\u0434\u0443 \u0438 \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0430\u043B\u0441\u044F \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0432\u043E\u0441\u0435\u043C\u044C \u043B\u0435\u0442 \u0434\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F, \u0447\u0442\u043E\u0431\u044B \u0432\u0441\u0435 \u0436\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 2022 \u0433\u043E\u0434\u0443 \u0441 \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0430\u0440\u043A\u043E\u0439.</h4></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bleach.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bleach-DdFsSNwM.mjs.map
