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
    "revision": "19b9bc9be8bdc1fdffb0c957403af058"
  },
  {
    "url": "about/index.html",
    "revision": "86e3f1e126de73e94848a137a1f1fbf7"
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
    "url": "assets/js/1.091d366e.js",
    "revision": "d2dca55eaa834e154ae2c4b86f3f6e1d"
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
    "url": "assets/js/14.c7824965.js",
    "revision": "4a804ea6385d5a7e0869ddd1ef0a0232"
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
    "url": "assets/js/20.b2f0e760.js",
    "revision": "16d1cfe36f5f413b0e570cd9c34d9c32"
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
    "url": "assets/js/24.af1aada0.js",
    "revision": "372565552755d2c978bbe918dd441fd1"
  },
  {
    "url": "assets/js/25.3b7c33d5.js",
    "revision": "9576342b413d7e4ddbab8dab8e9060b4"
  },
  {
    "url": "assets/js/26.c94433b8.js",
    "revision": "9de21e502d275fc7a98bb28e048f78e8"
  },
  {
    "url": "assets/js/27.df7fa638.js",
    "revision": "3b3f2a3243f9f05a100f3fb0b2fbffb4"
  },
  {
    "url": "assets/js/28.dc858a37.js",
    "revision": "774854ea22455c7791e84c88e92651f4"
  },
  {
    "url": "assets/js/29.fc068ba5.js",
    "revision": "0bc3ed2d1c34fb7f042c7146e56cb921"
  },
  {
    "url": "assets/js/3.68dc7220.js",
    "revision": "07d02e8bc3e258e8a46e313ec5cb8336"
  },
  {
    "url": "assets/js/30.0a18aa21.js",
    "revision": "fe37b47fe55f5297a8bab73cc394e25a"
  },
  {
    "url": "assets/js/31.6ffc9a7b.js",
    "revision": "63236fc432f769349302563842ee0cd5"
  },
  {
    "url": "assets/js/32.85bd455f.js",
    "revision": "2727d3642d01885e4ea8f37f2790eb38"
  },
  {
    "url": "assets/js/33.42c5a075.js",
    "revision": "a4309d4aa1021bc09b4cbe7e8c68fe38"
  },
  {
    "url": "assets/js/34.11a3c81d.js",
    "revision": "eb39394095613b19c4d6d1f13dd1420e"
  },
  {
    "url": "assets/js/4.1d870e6d.js",
    "revision": "c18b78dd54e46943f8fb60aa54647769"
  },
  {
    "url": "assets/js/5.6c0f87af.js",
    "revision": "1041e877a88bd91354cd8223b3609569"
  },
  {
    "url": "assets/js/6.e8d2d40a.js",
    "revision": "ac34b7d194f57e2f2b2373389b1bdf6d"
  },
  {
    "url": "assets/js/7.0c9a4ee4.js",
    "revision": "ffa612ee0b64af706eae181ff0ef1a78"
  },
  {
    "url": "assets/js/8.32c8c418.js",
    "revision": "881a6fc952385fe4f28f5fdac15ea4ae"
  },
  {
    "url": "assets/js/app.db7cbce1.js",
    "revision": "99cc0cf74f07b813eb5c8c7e69f16007"
  },
  {
    "url": "assets/js/vendors~docsearch.f37ba6b6.js",
    "revision": "653e06600820251b24fe712544f5acf4"
  },
  {
    "url": "backend/JavaSE/index.html",
    "revision": "f83a284a913227037192a0379509e306"
  },
  {
    "url": "commonproblem/vue/index.html",
    "revision": "62913ab7c58c1be2b93a2a215db03ae1"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "56b9bdfaf2677b673613a8dc297a1a58"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "697e9bd5958ba249000b4bf5bd2af086"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "6f9619f85048387a5b120d060f2295df"
  },
  {
    "url": "index.html",
    "revision": "ea675376fdaa83dbd8b6f572e94269de"
  },
  {
    "url": "interview/redis/index.html",
    "revision": "34feb52f14ab308861e98c98252be7dd"
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
