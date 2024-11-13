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
    "revision": "793edd765dbbef10b9caace17f01662e"
  },
  {
    "url": "about/about.html",
    "revision": "576b45f816fa9b2f0a1d363bab5bbbe2"
  },
  {
    "url": "assets/about/background.png",
    "revision": "8033ca5a3c425d590b5db864613fe15c"
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
    "url": "assets/img/3cache.1b5040c7.png",
    "revision": "1b5040c7c542a3e2db236e609e644ca7"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "d8610ab260eefe99ccc76a5d9ed85891"
  },
  {
    "url": "assets/img/background.8033ca5a.png",
    "revision": "8033ca5a3c425d590b5db864613fe15c"
  },
  {
    "url": "assets/img/bulong.d6812e4d.png",
    "revision": "d6812e4d078af2f4b7cd9cba693d1d41"
  },
  {
    "url": "assets/img/expire.0a9f5144.png",
    "revision": "0a9f51449812077c8467e64fe56c6b32"
  },
  {
    "url": "assets/img/lock.50e53bf5.png",
    "revision": "50e53bf57d51346486abb4fb0f27b0eb"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "a3c5c1b0b3ed56b29d1a7db646f37c68"
  },
  {
    "url": "assets/img/RDB.3c22e3e2.png",
    "revision": "3c22e3e2e1b1efd797dd19877e680d99"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/springmvc.10c72d1f.png",
    "revision": "10c72d1fb562815c9ea8de4341d3995e"
  },
  {
    "url": "assets/js/1.b6b26a88.js",
    "revision": "9ced69c953a748d8fa6682df7b44ff91"
  },
  {
    "url": "assets/js/11.4b763a84.js",
    "revision": "5546ec7a01bdabe9ba152fff395b9e98"
  },
  {
    "url": "assets/js/12.54e0ed27.js",
    "revision": "a389553766b70fb0a3f781ba1ed12b2c"
  },
  {
    "url": "assets/js/13.aebd4313.js",
    "revision": "1a30ede1cddb4c0754ef17af0b87a201"
  },
  {
    "url": "assets/js/14.ea4eb594.js",
    "revision": "bc12552f6c84debca9c22452b342087a"
  },
  {
    "url": "assets/js/15.23d43589.js",
    "revision": "b21f3f0fbe5e3b928d98eed054a15eed"
  },
  {
    "url": "assets/js/16.78b9404e.js",
    "revision": "1ce754d5c1be345a8d414c268d682d42"
  },
  {
    "url": "assets/js/17.bf14eca0.js",
    "revision": "4cb95c041c99172ea83d66fec6749182"
  },
  {
    "url": "assets/js/18.8a31c3b4.js",
    "revision": "088c1e5ffc70ec6b124b6a8a4ce5a6dd"
  },
  {
    "url": "assets/js/19.e62811cb.js",
    "revision": "5ecc84c2ada16725871dffb665281072"
  },
  {
    "url": "assets/js/2.2f2477cb.js",
    "revision": "bb6367bd92fc1445510b2075e6effc26"
  },
  {
    "url": "assets/js/20.8bc8271e.js",
    "revision": "d1763da0fd53d85626b782e8b64196a7"
  },
  {
    "url": "assets/js/21.73dc7f87.js",
    "revision": "262aa89d009abe584a2789a2aa9dde43"
  },
  {
    "url": "assets/js/22.a95723d8.js",
    "revision": "a1151839c22f761802665fcd47b3e455"
  },
  {
    "url": "assets/js/23.ba65d24d.js",
    "revision": "491ab96600edc00cde9ad32b5035dbfd"
  },
  {
    "url": "assets/js/24.708f65af.js",
    "revision": "2c4a918aa892c4afd9e08c3be98b6b76"
  },
  {
    "url": "assets/js/25.2da0c755.js",
    "revision": "f90f3e8935725bcdacdbc8608686f081"
  },
  {
    "url": "assets/js/26.e21e7045.js",
    "revision": "b726cdb7866f40bc9b3be819c16f7d23"
  },
  {
    "url": "assets/js/27.e1dd956c.js",
    "revision": "6eea328d991537cfe728ebe9736cb6b0"
  },
  {
    "url": "assets/js/28.c4f0a85a.js",
    "revision": "147fcc85b602c12d883fa50aed6964d8"
  },
  {
    "url": "assets/js/29.f1a064af.js",
    "revision": "8bfa95a781fbe8dc0d16e42cbfd07451"
  },
  {
    "url": "assets/js/3.d6c452b2.js",
    "revision": "6ff62b49c989212e84198469cc7f428d"
  },
  {
    "url": "assets/js/30.250201dd.js",
    "revision": "a9338f865ab7224998680b74f55b5e0f"
  },
  {
    "url": "assets/js/31.c01b0dac.js",
    "revision": "e3d1d530d4b1f696b54ce16b83153ab7"
  },
  {
    "url": "assets/js/32.0d724187.js",
    "revision": "a832cac8a132baf474e1cde122e6f5ea"
  },
  {
    "url": "assets/js/33.759d70b4.js",
    "revision": "fcbb824b539d1d0499305f4721409940"
  },
  {
    "url": "assets/js/34.37f05def.js",
    "revision": "5c0144755ea0b4d5f4e7604a26347546"
  },
  {
    "url": "assets/js/35.c5cd19dd.js",
    "revision": "e80383601c32d7da6aed7d53d0d1a254"
  },
  {
    "url": "assets/js/36.c3f658a9.js",
    "revision": "bc51f8f4669681f79ac62e6116b93422"
  },
  {
    "url": "assets/js/37.5ba1a4d8.js",
    "revision": "8b0888d2d6eb712f00037bf41c7576b4"
  },
  {
    "url": "assets/js/38.3b8784b8.js",
    "revision": "1b3c3cfd691f33372debab0bb9876aaa"
  },
  {
    "url": "assets/js/39.8b37cfa5.js",
    "revision": "7d7b51733107d7c785bc9e7f96940134"
  },
  {
    "url": "assets/js/4.5017d5ec.js",
    "revision": "0577410abb318c38ab290b8dd6ab007d"
  },
  {
    "url": "assets/js/40.098befe0.js",
    "revision": "5f09268926985b953fea89be78618041"
  },
  {
    "url": "assets/js/41.f73fd242.js",
    "revision": "76662907677a3d22d7f4f2e397aefae7"
  },
  {
    "url": "assets/js/42.ee73ff46.js",
    "revision": "01de9d615a678c3dc901edbf16af7fee"
  },
  {
    "url": "assets/js/43.b7eec82a.js",
    "revision": "75a751299d66f6779e9c0ef804eaaf7a"
  },
  {
    "url": "assets/js/44.18aa684f.js",
    "revision": "72c6f880f7b5368f96481ca46c3cf49d"
  },
  {
    "url": "assets/js/45.4887e45c.js",
    "revision": "0343757699763815f691badbdffe1268"
  },
  {
    "url": "assets/js/46.0533b46e.js",
    "revision": "9e5d3a202009e9ca88a64ae56495b4f3"
  },
  {
    "url": "assets/js/47.83163316.js",
    "revision": "fd35719aaa6cfea0d2cf4d5263553ea8"
  },
  {
    "url": "assets/js/48.ef62ac34.js",
    "revision": "d5454baf826b5527a5cab9b8895ebbe5"
  },
  {
    "url": "assets/js/49.85a1013e.js",
    "revision": "804e4282688c93e87328ce21200a68cd"
  },
  {
    "url": "assets/js/5.d9b4512a.js",
    "revision": "3b00b55e793287e8576124f10812ed2b"
  },
  {
    "url": "assets/js/50.453f3daf.js",
    "revision": "aac608da8a63cb650ad9276318ffc935"
  },
  {
    "url": "assets/js/51.32d4e174.js",
    "revision": "945d13deaa50406e4d5d78a490ae900c"
  },
  {
    "url": "assets/js/52.dbbb500e.js",
    "revision": "bdd2efd7edd27387633de83ae94c6c7f"
  },
  {
    "url": "assets/js/6.1886fb07.js",
    "revision": "9df1e4a75f0bd0faf782654cecbed81d"
  },
  {
    "url": "assets/js/7.8d75b38e.js",
    "revision": "fe78797db74fdb3edcf212a0fbeb5d92"
  },
  {
    "url": "assets/js/8.91926adb.js",
    "revision": "35ba14c48c0f4a7d669a45cb4f63c56b"
  },
  {
    "url": "assets/js/app.f27edb0d.js",
    "revision": "7465176fd6aa80bbce434483d936edd6"
  },
  {
    "url": "assets/js/vendors~docsearch.edcc4ef3.js",
    "revision": "ff70edbc96d521e87a197fc5e07a8ebb"
  },
  {
    "url": "assets/mysql/explain.png",
    "revision": "b822b03cf9a45600940c184fcc5a7ab4"
  },
  {
    "url": "assets/redis/bulong.png",
    "revision": "d6812e4d078af2f4b7cd9cba693d1d41"
  },
  {
    "url": "assets/redis/expire.png",
    "revision": "0a9f51449812077c8467e64fe56c6b32"
  },
  {
    "url": "assets/redis/lock.png",
    "revision": "50e53bf57d51346486abb4fb0f27b0eb"
  },
  {
    "url": "assets/redis/RDB.png",
    "revision": "3c22e3e2e1b1efd797dd19877e680d99"
  },
  {
    "url": "assets/spring/3cache.png",
    "revision": "1b5040c7c542a3e2db236e609e644ca7"
  },
  {
    "url": "assets/spring/springmvc.png",
    "revision": "10c72d1fb562815c9ea8de4341d3995e"
  },
  {
    "url": "backend/JavaSE/index.html",
    "revision": "a1bd68bb5f80043980648498e31daad5"
  },
  {
    "url": "commonproblem/git/index.html",
    "revision": "85490ba03b516dddb11d13a19e1aa621"
  },
  {
    "url": "commonproblem/java/index.html",
    "revision": "fb3c0c54a8e9261eb95d2194925ae6a6"
  },
  {
    "url": "commonproblem/mysql/index.html",
    "revision": "657dfc5aeffe54a9a53dc79d803416c0"
  },
  {
    "url": "commonproblem/vue/index.html",
    "revision": "2456eb4564739acbadf81dc60304f753"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "8c897884175c42c4546bb6d444504b56"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "8727386c55913cbe93cda7e0ba6f888f"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "338cb9751fa0577ee9c1bcb6dd499f90"
  },
  {
    "url": "devops/linux/index.html",
    "revision": "c4028cd69378dc9ada275ba7a850ad95"
  },
  {
    "url": "frame/spring/index.html",
    "revision": "01ead235d8b4a8beea8252521a59e196"
  },
  {
    "url": "frame/springboot/index.html",
    "revision": "2ce5735bdcccbee269b8ef24caaa713b"
  },
  {
    "url": "frame/springcloud/index.html",
    "revision": "4d678028e998b862fc585dd88f9ec1e6"
  },
  {
    "url": "frame/springmvc/index.html",
    "revision": "0e04cc114ef7044f12df85a128d15ad0"
  },
  {
    "url": "frame/springsecurity/index.html",
    "revision": "af68db6e0b245d63c5aaafc9514f53b2"
  },
  {
    "url": "frontend/ES6/index.html",
    "revision": "87d706bee99284420c7b3806645d4ef2"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "4235cfbd56c29796cc157a79e703e5b2"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "939c694ee197e0f3e16d300242766e28"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "95b3cd2b782a8ba254d1bb9569f3fa5b"
  },
  {
    "url": "index.html",
    "revision": "8bcf12a88c0dc5869078c4674c90b551"
  },
  {
    "url": "interview/mybatis/index.html",
    "revision": "60029ae88c2de01cca5db701f81be5c6"
  },
  {
    "url": "interview/mysql/index.html",
    "revision": "144c7ae7541daf589aace05f8a8ea8fc"
  },
  {
    "url": "interview/redis/index.html",
    "revision": "7af38b9c36c38fed221f7d1b21b48e0b"
  },
  {
    "url": "interview/spring/index.html",
    "revision": "ec4809de226a59ef203db8a422ae9b85"
  },
  {
    "url": "interview/springcloud/index.html",
    "revision": "dd088e91ec7a21066eefbb9a1f2ec3ce"
  },
  {
    "url": "virtualMachine/jvm/index.html",
    "revision": "20bc5d2db9151807f2735b5ec3ac3b27"
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
