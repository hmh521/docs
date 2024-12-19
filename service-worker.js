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
    "revision": "6c1e011ad0679ee70812b1551dfbc384"
  },
  {
    "url": "about/about.html",
    "revision": "a8aff28aa305ce3edd36b6dbf36ba927"
  },
  {
    "url": "assets/about/background.png",
    "revision": "8033ca5a3c425d590b5db864613fe15c"
  },
  {
    "url": "assets/aggregate/aggregate.png",
    "revision": "cd62678e58211ffc3edb8ab129d09398"
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
    "url": "assets/img/aggregate.cd62678e.png",
    "revision": "cd62678e58211ffc3edb8ab129d09398"
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
    "url": "assets/img/compare.2bcbf175.png",
    "revision": "2bcbf17538351703b80979d95dba3623"
  },
  {
    "url": "assets/img/expire.0a9f5144.png",
    "revision": "0a9f51449812077c8467e64fe56c6b32"
  },
  {
    "url": "assets/img/heap.1382fc00.png",
    "revision": "1382fc00aa2d3c660588e12a35dc66e4"
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
    "url": "assets/img/Monitor.f415c42e.png",
    "revision": "f415c42e006b1f80a3e62d6285454630"
  },
  {
    "url": "assets/img/page.f2becc6a.png",
    "revision": "f2becc6a84289b96dae8e17363a76424"
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
    "url": "assets/img/threadState.cf89efd0.png",
    "revision": "cf89efd02749f32b99e23c036b5b5adb"
  },
  {
    "url": "assets/js/1.3a8374e6.js",
    "revision": "49c22e5eb99fc9ee379d9e7678572bb6"
  },
  {
    "url": "assets/js/11.1265b5f0.js",
    "revision": "1738d20ec3ea8ccfa7b29d4dc798b528"
  },
  {
    "url": "assets/js/12.54e0ed27.js",
    "revision": "a389553766b70fb0a3f781ba1ed12b2c"
  },
  {
    "url": "assets/js/13.5d7b1694.js",
    "revision": "3f85879ca474bff4efb1320e9c7b1afb"
  },
  {
    "url": "assets/js/14.0fe1e3ae.js",
    "revision": "faf68ce19b03e2abb722d2c208512186"
  },
  {
    "url": "assets/js/15.eba1568d.js",
    "revision": "cf6f23d2dffe8a83bf3d68a803616cfa"
  },
  {
    "url": "assets/js/16.78b9404e.js",
    "revision": "1ce754d5c1be345a8d414c268d682d42"
  },
  {
    "url": "assets/js/17.6ab60dbd.js",
    "revision": "29d056615753606d823affa2b328a452"
  },
  {
    "url": "assets/js/18.8a31c3b4.js",
    "revision": "088c1e5ffc70ec6b124b6a8a4ce5a6dd"
  },
  {
    "url": "assets/js/19.8952cbc3.js",
    "revision": "bf2ff7779c91b97ee2235bea390c722d"
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
    "url": "assets/js/21.11541702.js",
    "revision": "1e8c578c65d93d610aa01641e4a223c1"
  },
  {
    "url": "assets/js/22.15b12c38.js",
    "revision": "145e9b77b28588d53c5e817eaf8704a4"
  },
  {
    "url": "assets/js/23.152108a2.js",
    "revision": "c07a81e2d14a6890caa77f980537d7c5"
  },
  {
    "url": "assets/js/24.8d878e40.js",
    "revision": "755bd7ac7c9a51bdc5d16bc2e53522d2"
  },
  {
    "url": "assets/js/25.823137af.js",
    "revision": "20d4ddcdc9fb55134bc42b5b83253bfc"
  },
  {
    "url": "assets/js/26.f23185c9.js",
    "revision": "157a2ae5e659f575f9012bec86a1efe3"
  },
  {
    "url": "assets/js/27.43be4522.js",
    "revision": "a8ddc2be1d82eb584e389007e726a621"
  },
  {
    "url": "assets/js/28.74ed9ffb.js",
    "revision": "eb41523fd4fa404bc472988c53a560eb"
  },
  {
    "url": "assets/js/29.375d247b.js",
    "revision": "5620987e99ba339c4c32ced3645040de"
  },
  {
    "url": "assets/js/3.9e2336a3.js",
    "revision": "bb513edd1e1a0197c1a1e70d742cc96d"
  },
  {
    "url": "assets/js/30.f0afd84f.js",
    "revision": "2738ae724cce3e01a948ca0e37c4f12d"
  },
  {
    "url": "assets/js/31.6ae0e49e.js",
    "revision": "e880c5862746703ac8e0e1b1a530206a"
  },
  {
    "url": "assets/js/32.d4e12b03.js",
    "revision": "b8ba0833baa061c802af164c0d667682"
  },
  {
    "url": "assets/js/33.75ea2804.js",
    "revision": "300ae0fd5acd61aa0110e0900e9d68e7"
  },
  {
    "url": "assets/js/34.5890d495.js",
    "revision": "8c357f5e002cc6da8fa18b35dae39532"
  },
  {
    "url": "assets/js/35.ca26b966.js",
    "revision": "cb6f1d902360eec2fc4bf74dc26d9250"
  },
  {
    "url": "assets/js/36.e127d760.js",
    "revision": "7c1e7814eca83012edf72d2d2a2cb755"
  },
  {
    "url": "assets/js/37.97de2b13.js",
    "revision": "69c856fc063bc6186be823cd815fdf38"
  },
  {
    "url": "assets/js/38.5db24d98.js",
    "revision": "0afcfa9efbe91a50d192c7f1e6fc8050"
  },
  {
    "url": "assets/js/39.d9d174e0.js",
    "revision": "004cefe01f01d705a185b8fd85763c11"
  },
  {
    "url": "assets/js/4.e7d0eacc.js",
    "revision": "9cf7388261cc63baa9b5371286eb9621"
  },
  {
    "url": "assets/js/40.aba65f1e.js",
    "revision": "9cffc1b96e3e3997109b831cfc1ad0b9"
  },
  {
    "url": "assets/js/41.efe6c0c2.js",
    "revision": "d551592ce3ff178efbe402b6819742d1"
  },
  {
    "url": "assets/js/42.7803e2c3.js",
    "revision": "fd44032a1d05ca50ee36819f63bc31c0"
  },
  {
    "url": "assets/js/43.c81a9343.js",
    "revision": "e0636024634318e7798f70625f6f8507"
  },
  {
    "url": "assets/js/44.560a8b57.js",
    "revision": "f04f68cd88d77133615265cb55e09673"
  },
  {
    "url": "assets/js/45.799166cd.js",
    "revision": "256d31a7ff126d4e46da7b8de4dd6041"
  },
  {
    "url": "assets/js/46.61a082bf.js",
    "revision": "b4b7b5053d6a4ddb6a370add72aa6b49"
  },
  {
    "url": "assets/js/47.8989967c.js",
    "revision": "5f69d039f33066619226f6558650ebb5"
  },
  {
    "url": "assets/js/48.c4f46e16.js",
    "revision": "586e52143b69109c7f0d9030cbcc91cc"
  },
  {
    "url": "assets/js/49.3ebd371b.js",
    "revision": "9a43aa077dca6a395785514e1ba25ced"
  },
  {
    "url": "assets/js/5.947449fc.js",
    "revision": "98dd42490941bfc0d14eda9b7acf47a6"
  },
  {
    "url": "assets/js/50.0b88538c.js",
    "revision": "48b1bed4ffafde8718468896884ee315"
  },
  {
    "url": "assets/js/51.c8efff9d.js",
    "revision": "c9ed6d9f5bc12614b7d50d3cc9e614e6"
  },
  {
    "url": "assets/js/52.d2410e99.js",
    "revision": "801343d73dcb1c768792d05fbf164bba"
  },
  {
    "url": "assets/js/53.8168a589.js",
    "revision": "9bc6b63488ccc8440a2c138c9ac0960a"
  },
  {
    "url": "assets/js/54.9069084d.js",
    "revision": "61a5b6827cfa65a49a45848b5359d934"
  },
  {
    "url": "assets/js/55.bfe16c8a.js",
    "revision": "f1c64b0ca9c495872c75b2c7937bc07f"
  },
  {
    "url": "assets/js/6.15ee44d5.js",
    "revision": "0bdedd313dc1fe446cad2e41a06a270f"
  },
  {
    "url": "assets/js/7.6855d7f5.js",
    "revision": "ee525e19fc107e5b0bbcba04bf363668"
  },
  {
    "url": "assets/js/8.c7e6bb89.js",
    "revision": "83b8b7e8787dc0330990cfe6de370656"
  },
  {
    "url": "assets/js/app.c2492ba0.js",
    "revision": "24426abd83cde6fefd65f44a851b0bb7"
  },
  {
    "url": "assets/js/vendors~docsearch.94c2c2a5.js",
    "revision": "6668cc41e46fdba935cc22374bcc583d"
  },
  {
    "url": "assets/jvm/compare.png",
    "revision": "2bcbf17538351703b80979d95dba3623"
  },
  {
    "url": "assets/jvm/heap.png",
    "revision": "1382fc00aa2d3c660588e12a35dc66e4"
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
    "url": "assets/thread/Monitor.png",
    "revision": "f415c42e006b1f80a3e62d6285454630"
  },
  {
    "url": "assets/thread/page.png",
    "revision": "f2becc6a84289b96dae8e17363a76424"
  },
  {
    "url": "assets/thread/threadState.png",
    "revision": "cf89efd02749f32b99e23c036b5b5adb"
  },
  {
    "url": "backend/JavaSE/index.html",
    "revision": "900a444761e82b5b37079e43b2e3296c"
  },
  {
    "url": "commonproblem/git/index.html",
    "revision": "c153eb2f227c24116761c7c59b4dfb38"
  },
  {
    "url": "commonproblem/java/index.html",
    "revision": "44faa0239ba52e540224d810b2637fe6"
  },
  {
    "url": "commonproblem/mysql/index.html",
    "revision": "2098f310570688d45a6ba647ea3336c5"
  },
  {
    "url": "commonproblem/vue/index.html",
    "revision": "4ec759be6736f8a71de0875b0869fdd2"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "84711a4ccb3bd044da036ef090a6b758"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "bce54f70826f428604a71d0fa5aa5cb0"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "4e45e4bb59f4366fe522d5c1e7fecce6"
  },
  {
    "url": "devops/linux/index.html",
    "revision": "816be2124a343a802540dcf8fd421122"
  },
  {
    "url": "frame/spring/index.html",
    "revision": "00ba3bc8877eb92f988f4e6e08b912ce"
  },
  {
    "url": "frame/springboot/index.html",
    "revision": "2d6401f8914ad5ee824c63aa96ef96aa"
  },
  {
    "url": "frame/springcloud/index.html",
    "revision": "927633c9285143a2d614b2a89599ac10"
  },
  {
    "url": "frame/springmvc/index.html",
    "revision": "e451b8dcf0f3b102f7394c1de4fab034"
  },
  {
    "url": "frame/springsecurity/index.html",
    "revision": "720f8a09339ee13db545a238fda156bd"
  },
  {
    "url": "frontend/ES6/index.html",
    "revision": "6fd4e1f0bba7341e01e1ed55fe24ad8e"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "3aa012fe7bc74b7ff25f6720e4017e4a"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "9f591785922904448c0e6d7bfbf9ed11"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "586c1170609b8139f50094d98614e99c"
  },
  {
    "url": "index.html",
    "revision": "9acffff4882eba443adc6c9054bc7bc3"
  },
  {
    "url": "interview/aggregate/index.html",
    "revision": "5cd8e36b802a36fbf88022d911010357"
  },
  {
    "url": "interview/jvm/index.html",
    "revision": "45b77a5a23d54f89fdf3a1ca68dff5ac"
  },
  {
    "url": "interview/mybatis/index.html",
    "revision": "1430e3863b090cfbd112403be75da3a2"
  },
  {
    "url": "interview/mysql/index.html",
    "revision": "a8024738d23a8aa1629f424f30a0f336"
  },
  {
    "url": "interview/redis/index.html",
    "revision": "76bc2fbcc60ef7c130609303be5a6a72"
  },
  {
    "url": "interview/spring/index.html",
    "revision": "313f2f63911ea5724054f4fa75b986c9"
  },
  {
    "url": "interview/springcloud/index.html",
    "revision": "862c536a8ca3c0287db1a05ae807139c"
  },
  {
    "url": "interview/thread/index.html",
    "revision": "65408ba0d6c1a637854297869d490f16"
  },
  {
    "url": "virtualMachine/jvm/index.html",
    "revision": "839f8685e3abca4b7efae0f91b3740d3"
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
