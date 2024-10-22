/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b39a110634d1d0cd771efa76d919a763"
  },
  {
    "url": "about/index.html",
    "revision": "3222dfa097d2af39b2d6ca41f8042690"
  },
  {
    "url": "assets/css/0.styles.25c602b9.css",
    "revision": "3bf5946d86599f9c95e235fcbd3d7da8"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "82d53b6b8ab0b818fc5fcffa8064e3e3"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "b46075e7baf33dc1ee62dfe92d79c458"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "76f793efcdef9cb52d0dfba118c31ab8"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "bf471d96e89ba75970dc27340d114d11"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "bb2eddee1521a55d051b2b5cb01be028"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "d8610ab260eefe99ccc76a5d9ed85891"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "a3c5c1b0b3ed56b29d1a7db646f37c68"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.35dbbb74.js",
    "revision": "9dbb7871681d9ace32edce89612eb4b0"
  },
  {
    "url": "assets/js/11.08461d35.js",
    "revision": "b14c665f61b0ced66fad3771dda7301a"
  },
  {
    "url": "assets/js/12.54e0ed27.js",
    "revision": "a389553766b70fb0a3f781ba1ed12b2c"
  },
  {
    "url": "assets/js/13.cfdaed8b.js",
    "revision": "5cd35e7a3ffde8dfdc78a6990798a884"
  },
  {
    "url": "assets/js/14.14bd322d.js",
    "revision": "255f00fe048699420b66559e64b8db78"
  },
  {
    "url": "assets/js/15.de830c6e.js",
    "revision": "08eec493f359d14d8fdf29e2fa88b2b1"
  },
  {
    "url": "assets/js/16.78b9404e.js",
    "revision": "1ce754d5c1be345a8d414c268d682d42"
  },
  {
    "url": "assets/js/17.841a8381.js",
    "revision": "bfe0ae3674313d7a7fc9356d05ebb776"
  },
  {
    "url": "assets/js/18.8a31c3b4.js",
    "revision": "088c1e5ffc70ec6b124b6a8a4ce5a6dd"
  },
  {
    "url": "assets/js/19.21d98f8a.js",
    "revision": "cebaf34f5533dd4f2ccdaf93b0cdb809"
  },
  {
    "url": "assets/js/2.2f2477cb.js",
    "revision": "bb6367bd92fc1445510b2075e6effc26"
  },
  {
    "url": "assets/js/20.ecdb6642.js",
    "revision": "0a9ef71cf561065e7f65db57c87cad33"
  },
  {
    "url": "assets/js/21.c4e6638f.js",
    "revision": "dfcc5fa405a6217ee63f89989b7b2ea3"
  },
  {
    "url": "assets/js/22.8b5b3189.js",
    "revision": "2738849e30549cd57bc37fd97e0e32dc"
  },
  {
    "url": "assets/js/23.80480b98.js",
    "revision": "72dec040cd1f67f93796e84091f645fd"
  },
  {
    "url": "assets/js/24.1d2bceb4.js",
    "revision": "9591fd53f7cb97671cddf01b3fcce9ad"
  },
  {
    "url": "assets/js/25.5083676f.js",
    "revision": "941b684b847ae3eb9a022366b6cfb693"
  },
  {
    "url": "assets/js/26.3d949f40.js",
    "revision": "97c23fc993076dfefc2c893230c301b1"
  },
  {
    "url": "assets/js/27.cc7b48ec.js",
    "revision": "5d80a1434438dde9be3fb9dfdfaebb82"
  },
  {
    "url": "assets/js/28.c5f6cc71.js",
    "revision": "889cd4e1a480df333bc63ae94af3d36a"
  },
  {
    "url": "assets/js/29.781bdb4e.js",
    "revision": "d0e866548451596b5e18b6768e387975"
  },
  {
    "url": "assets/js/3.68dc7220.js",
    "revision": "07d02e8bc3e258e8a46e313ec5cb8336"
  },
  {
    "url": "assets/js/30.46863e97.js",
    "revision": "af6181c30455bde455a41439504b19ae"
  },
  {
    "url": "assets/js/31.d81611c6.js",
    "revision": "22ec7b951b1ec59d11ca53adfdeeade7"
  },
  {
    "url": "assets/js/32.aab0af95.js",
    "revision": "246988cc9ff65cc2980798e757ecf03e"
  },
  {
    "url": "assets/js/33.2791ef14.js",
    "revision": "6eba10b66624924dc58d56deeb423c40"
  },
  {
    "url": "assets/js/34.ce37b9eb.js",
    "revision": "b7089581b2f0dc1cbf2335963199d91a"
  },
  {
    "url": "assets/js/35.7ea78f8d.js",
    "revision": "4f86f64eb163b1f5587213a35494882d"
  },
  {
    "url": "assets/js/4.95b42c0e.js",
    "revision": "804fde2726fc041f8f1f7efd5746e517"
  },
  {
    "url": "assets/js/5.7764bb13.js",
    "revision": "487806e195cb0beb2df064904bd40d2e"
  },
  {
    "url": "assets/js/6.3169333c.js",
    "revision": "91be869bf33257c18432f3b577b4909c"
  },
  {
    "url": "assets/js/7.de3e609b.js",
    "revision": "04a27fbd36ff5e245e7acd5c1c42fa35"
  },
  {
    "url": "assets/js/8.7d7f2f73.js",
    "revision": "d509297e381b2de21c187b97bcd37186"
  },
  {
    "url": "assets/js/app.52f490c3.js",
    "revision": "fe9783e7c3bf329f64824bc7682c9398"
  },
  {
    "url": "assets/js/vendors~docsearch.0ae6e530.js",
    "revision": "b8618e7939734eaaffb3e3da0c6ba5ef"
  },
  {
    "url": "assets/mysql/explain.png",
    "revision": "b822b03cf9a45600940c184fcc5a7ab4"
  },
  {
    "url": "backend/JavaSE/index.html",
    "revision": "486d6759123b19f199280814b74b58c5"
  },
  {
    "url": "commonproblem/vue/index.html",
    "revision": "2bb51d3a6ebbc36ebbe867cecd72fc22"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "9d3cdb964ebb4e79ef2bda6e72f68d22"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "865f36af37f6a113efe5d9aa3b2b5389"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "8945206e8a24b7545c5fa48144befcf9"
  },
  {
    "url": "index.html",
    "revision": "94d08784a57f1c4189e0a5ddd6687748"
  },
  {
    "url": "interview/mysql/index.html",
    "revision": "6108df2ef21ca544bd066d9692cf5e3b"
  },
  {
    "url": "interview/redis/index.html",
    "revision": "a8f4eba09fe8f89420f056e30dd491dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
