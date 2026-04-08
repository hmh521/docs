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
    "revision": "5ca5bee7451ef6b27c3744a9cdf2c565"
  },
  {
    "url": "about/about.html",
    "revision": "80e2f01d7ee1afb6ce9b2730d803b8ce"
  },
  {
    "url": "assets/about/background.png",
    "revision": "8033ca5a3c425d590b5db864613fe15c"
  },
  {
    "url": "assets/about/file-20260408213912181.png",
    "revision": "546522ad6d732ab717f82a1be4735c3a"
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
    "url": "assets/js/12.c535e2f7.js",
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
    "url": "assets/js/16.7cfafaf7.js",
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
    "url": "assets/js/19.1d127228.js",
    "revision": "026fce7bbc3e318a2374bab7723bb283"
  },
  {
    "url": "assets/js/2.ee88e806.js",
    "revision": "bb6367bd92fc1445510b2075e6effc26"
  },
  {
    "url": "assets/js/20.8bc8271e.js",
    "revision": "d1763da0fd53d85626b782e8b64196a7"
  },
  {
    "url": "assets/js/21.4412d4ff.js",
    "revision": "0dd5c006be32efb43b0fc1f36905b120"
  },
  {
    "url": "assets/js/22.81682074.js",
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
    "url": "assets/js/25.184d9e8e.js",
    "revision": "42908d65a951332300ebbc9f0ecfd9e8"
  },
  {
    "url": "assets/js/26.e445a8df.js",
    "revision": "f257402b72a5eb6c8fb7b955faf7ae94"
  },
  {
    "url": "assets/js/27.43be4522.js",
    "revision": "a8ddc2be1d82eb584e389007e726a621"
  },
  {
    "url": "assets/js/28.e130eab0.js",
    "revision": "ef855f10c313fffdc849f8c88d626bbc"
  },
  {
    "url": "assets/js/29.63129d11.js",
    "revision": "9aaae70c637884f298e012ab79f118a5"
  },
  {
    "url": "assets/js/3.9e2336a3.js",
    "revision": "bb513edd1e1a0197c1a1e70d742cc96d"
  },
  {
    "url": "assets/js/30.b44b2f86.js",
    "revision": "d8eeb1816ad034c4d4fe208bca6a8fcd"
  },
  {
    "url": "assets/js/31.17d47127.js",
    "revision": "e880c5862746703ac8e0e1b1a530206a"
  },
  {
    "url": "assets/js/32.7d7acb27.js",
    "revision": "b8ba0833baa061c802af164c0d667682"
  },
  {
    "url": "assets/js/33.889f99da.js",
    "revision": "2dc8a21467cf02a52de6e27990eb350b"
  },
  {
    "url": "assets/js/34.c3190266.js",
    "revision": "e10b6a265fa586051ad81fbfb9d8fca2"
  },
  {
    "url": "assets/js/35.c97b61a9.js",
    "revision": "33e4c3b0229c695dfc30fea2b3294a63"
  },
  {
    "url": "assets/js/36.abfcda2c.js",
    "revision": "00fe8159e7efb1c2c0e686f6b2cf28c7"
  },
  {
    "url": "assets/js/37.2377ea84.js",
    "revision": "02c2c5021c379bfffe4ecc3895e17a48"
  },
  {
    "url": "assets/js/38.1c9e0c37.js",
    "revision": "19cb5947e8e241477b5317e1ce8731a2"
  },
  {
    "url": "assets/js/39.820ec325.js",
    "revision": "8681f5fb8ecc82aa90c1b257ea9883ca"
  },
  {
    "url": "assets/js/4.e7d0eacc.js",
    "revision": "9cf7388261cc63baa9b5371286eb9621"
  },
  {
    "url": "assets/js/40.ac315f58.js",
    "revision": "9738b4ba4e05fa4752845debaa96ec2b"
  },
  {
    "url": "assets/js/41.94900ae1.js",
    "revision": "35bf3a957116161358e45f144e47714b"
  },
  {
    "url": "assets/js/42.522f79bb.js",
    "revision": "c7096ed2ef4deff1b8f6b36bde9af1fc"
  },
  {
    "url": "assets/js/43.f19a942b.js",
    "revision": "0ec2ab84badcfbf62b2c2b6f0576fa68"
  },
  {
    "url": "assets/js/44.3a8b21d7.js",
    "revision": "c08f6407ab7162ca2bb0fa1f1186dd12"
  },
  {
    "url": "assets/js/45.cd3d89a8.js",
    "revision": "f71bed3a2d4d31ffcd449c556c2803ef"
  },
  {
    "url": "assets/js/46.bd83e479.js",
    "revision": "e5a3cd4f277f9346909496a14151929c"
  },
  {
    "url": "assets/js/47.cf7d5608.js",
    "revision": "2e23ebf2b1d6f32f95a0e168c5c54b6e"
  },
  {
    "url": "assets/js/48.38683ee8.js",
    "revision": "508d86bc9ab8a22c51417b05f4ca26b2"
  },
  {
    "url": "assets/js/49.6eeb191a.js",
    "revision": "e102c444c4c538aa01ba12f9e5d52c66"
  },
  {
    "url": "assets/js/5.947449fc.js",
    "revision": "98dd42490941bfc0d14eda9b7acf47a6"
  },
  {
    "url": "assets/js/50.06a8ec4c.js",
    "revision": "e003057db5a307147b3ba0e200077ce6"
  },
  {
    "url": "assets/js/51.f63c5874.js",
    "revision": "c9ea7055691eb2d040ceddb3e8c0d1b8"
  },
  {
    "url": "assets/js/52.fa56a4f6.js",
    "revision": "6a7e5c49f710044a9ad0ce50b78fb399"
  },
  {
    "url": "assets/js/53.74af9e4b.js",
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
    "url": "assets/js/app.d181bdcf.js",
    "revision": "a1c1fa375d891d02ab37c8e7380d6351"
  },
  {
    "url": "assets/js/vendors~docsearch.73ca700c.js",
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
    "revision": "b6580f0602f5f4a4d98e62fd99c56741"
  },
  {
    "url": "commonproblem/git/index.html",
    "revision": "9bd306ba6578a4aa09cfd5303bf2c363"
  },
  {
    "url": "commonproblem/java/index.html",
    "revision": "86fdc0697f334ff8ce34b2e31d3bd919"
  },
  {
    "url": "commonproblem/mysql/index.html",
    "revision": "bf6fcd55493bd34e2598a0e986a11e3a"
  },
  {
    "url": "commonproblem/vue/index.html",
    "revision": "a7ccecc04a7ee5b20707291352d37a1c"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "7fec97bfd4d6cad4ca08280738f3475c"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "db540f08f5e68c4ad3995c3938de0978"
  },
  {
    "url": "devops/docker/index.html",
    "revision": "ce27e1ae664db1b9788d2c2b28c04768"
  },
  {
    "url": "devops/linux/index.html",
    "revision": "e58ce941d48f68972bed6a1f4d9bb651"
  },
  {
    "url": "frame/spring/index.html",
    "revision": "f7c4a60844d02fbb121c48f959f5d816"
  },
  {
    "url": "frame/springboot/index.html",
    "revision": "79d5f3b3c24d3939d658043854becd57"
  },
  {
    "url": "frame/springcloud/index.html",
    "revision": "821b455571994d3b8fedb5ba76aa3606"
  },
  {
    "url": "frame/springmvc/index.html",
    "revision": "134c6ad1620100ec7b4e4215d08043b6"
  },
  {
    "url": "frame/springsecurity/index.html",
    "revision": "bb43a6a898b6b757d0c68abfb118079e"
  },
  {
    "url": "frontend/ES6/index.html",
    "revision": "d9bbe9fb5cd432a33fc2f09ed957d9b5"
  },
  {
    "url": "frontend/html/index.html",
    "revision": "2e197d5b8fc6f91de0aa5cba235461d1"
  },
  {
    "url": "frontend/js/index.html",
    "revision": "02a0fc1990d7e0c08661b59949f96d31"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "db9c7f1f387bf30b824135ffc894e192"
  },
  {
    "url": "index.html",
    "revision": "a427669f6ac164e01e42b6384a6875a5"
  },
  {
    "url": "interview/aggregate/index.html",
    "revision": "0def343713ab338c622359815f69c964"
  },
  {
    "url": "interview/jvm/index.html",
    "revision": "e81269b9481102417b494d63ad4d72e5"
  },
  {
    "url": "interview/mybatis/index.html",
    "revision": "6ebd5cf3bb8ae5a9cf4967edd0ebdd62"
  },
  {
    "url": "interview/mysql/index.html",
    "revision": "cb2e2b3fa6e598a41e9d847cbaad7e9d"
  },
  {
    "url": "interview/redis/index.html",
    "revision": "bd18f44105eca8e11e62e5eef318cf7d"
  },
  {
    "url": "interview/spring/index.html",
    "revision": "b45427395407ce3fd958d76da16eb8b4"
  },
  {
    "url": "interview/springcloud/index.html",
    "revision": "8c566a0e6d030c81a672f7c1fce2486c"
  },
  {
    "url": "interview/thread/index.html",
    "revision": "5739c88323fdfd995886e65651840a90"
  },
  {
    "url": "virtualMachine/jvm/index.html",
    "revision": "321d68feb23e6ed6cd7053021f93873d"
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
