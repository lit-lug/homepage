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
    "revision": "056e06ee85cd49434a7cd059af8d2485"
  },
  {
    "url": "archives/index.html",
    "revision": "c913bf27422c94a39438c6d541a15caf"
  },
  {
    "url": "assets/css/0.styles.4346b530.css",
    "revision": "a9fc191528ac4a07046fd3bb5982f237"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4ded560c.js",
    "revision": "d6b22c399c8e2ffc48e8130088ea3212"
  },
  {
    "url": "assets/js/11.9e6b244e.js",
    "revision": "c0dbb866d7a073008919be934db35040"
  },
  {
    "url": "assets/js/12.60241502.js",
    "revision": "a480d7b794d18f68fa280b13c7ecd060"
  },
  {
    "url": "assets/js/13.d1905145.js",
    "revision": "67415c2c04031d4ad2171db60085f715"
  },
  {
    "url": "assets/js/14.1627631d.js",
    "revision": "3692464a9166ca5fb820e7c463cf6641"
  },
  {
    "url": "assets/js/15.347fe2fe.js",
    "revision": "586ea2ca810c809e257c34f0dd747c0e"
  },
  {
    "url": "assets/js/16.6af0718c.js",
    "revision": "4567ce101e5ac51b6c48dfe8cd3e521e"
  },
  {
    "url": "assets/js/17.00fdd854.js",
    "revision": "8e684c167f20a20d71b0481c7d010ef3"
  },
  {
    "url": "assets/js/18.0ef0c3e5.js",
    "revision": "e945850272cdb62b0ddc0780e47a5d9a"
  },
  {
    "url": "assets/js/19.500f8929.js",
    "revision": "5873a822b1f769898ff50bfce6393091"
  },
  {
    "url": "assets/js/2.efe0c9c4.js",
    "revision": "2a5b1f0ae5008b6f9840aba03b4ea512"
  },
  {
    "url": "assets/js/20.da5a7f33.js",
    "revision": "f05866b031e0e2e0ceba149baca724cc"
  },
  {
    "url": "assets/js/21.540d9131.js",
    "revision": "711f5222fee9d72a71c86b907e19116b"
  },
  {
    "url": "assets/js/22.1e72f334.js",
    "revision": "ddf83e1c97e6b6c6946fcdff33d08a54"
  },
  {
    "url": "assets/js/23.dac016bc.js",
    "revision": "3cdcc3efff6ce75ee22c47414876a903"
  },
  {
    "url": "assets/js/24.78d6507b.js",
    "revision": "daa2e7e604c3e1260a00d64ab8525178"
  },
  {
    "url": "assets/js/25.192144d1.js",
    "revision": "ceb9fa111e3034a1edc387db58c6b603"
  },
  {
    "url": "assets/js/26.93f76f64.js",
    "revision": "1481880c747effa4fc3cdf3f05caf7dc"
  },
  {
    "url": "assets/js/27.97899f5d.js",
    "revision": "f9aede3758f1790f71e2d4fe284275ef"
  },
  {
    "url": "assets/js/28.d24ce5b0.js",
    "revision": "19e5a312b28c3b4830fe01f17c7dac49"
  },
  {
    "url": "assets/js/29.39513b35.js",
    "revision": "f48e0dde0a00a72fb529bab0dc2d6981"
  },
  {
    "url": "assets/js/3.357157f6.js",
    "revision": "d930f84fb6d1755549ff214dbbbc5735"
  },
  {
    "url": "assets/js/30.32db246e.js",
    "revision": "d63c5b07664ee255d122cea4ac88c1a2"
  },
  {
    "url": "assets/js/31.6c404410.js",
    "revision": "a40737c2542aeb681d607a64684a4f68"
  },
  {
    "url": "assets/js/32.0c968a1c.js",
    "revision": "1d87f45ebe733bd67cc84e1a8742c7ba"
  },
  {
    "url": "assets/js/4.209f699a.js",
    "revision": "661b08b9c5f070ee232d6a2b751fb555"
  },
  {
    "url": "assets/js/5.1ee6cfff.js",
    "revision": "ea925f1853f888b565f5428170d682f6"
  },
  {
    "url": "assets/js/6.e704bee2.js",
    "revision": "ab7621cb478ab1910dc9173c19098ea4"
  },
  {
    "url": "assets/js/7.a60e5423.js",
    "revision": "2c1e89c25f2618b728f1c0f5f7268a62"
  },
  {
    "url": "assets/js/8.e6dd431b.js",
    "revision": "9f0f4569749a48fef0d03f3fd87e7615"
  },
  {
    "url": "assets/js/9.ffcf4554.js",
    "revision": "78c84f1f45a87fb379e6a564192e8780"
  },
  {
    "url": "assets/js/app.eb45f07c.js",
    "revision": "b4601fde9b9bbdde07e89c2400130c40"
  },
  {
    "url": "categories/index.html",
    "revision": "38b4399650286c921802ec46be29809b"
  },
  {
    "url": "image/bg1.jpg",
    "revision": "2de388ffddaf308f2091da89d748b3a3"
  },
  {
    "url": "image/bg2.jpg",
    "revision": "dcdde6e6acdb4497619842428cd963fd"
  },
  {
    "url": "img/128x128.png",
    "revision": "8e6d03923ef866aebcdbf711e7289487"
  },
  {
    "url": "img/256x256.png",
    "revision": "920fd0383a91247283f0ec81bfe918d5"
  },
  {
    "url": "img/32x32.png",
    "revision": "e542f5a5b16d86595bdf51220f2b99de"
  },
  {
    "url": "img/512x512.png",
    "revision": "cd9b438c55b77df92bca09605c9672be"
  },
  {
    "url": "img/64x64.png",
    "revision": "baaaa2fe5471bdcdee3a4daa85fb9f04"
  },
  {
    "url": "img/logo.png",
    "revision": "19898783a19f03d68b42f3522134d9d2"
  },
  {
    "url": "index.html",
    "revision": "3d724eb6abb23fae3648d9d734842360"
  },
  {
    "url": "pages/0fc1d2/index.html",
    "revision": "5d992e29e5296a077d7c22bca04effff"
  },
  {
    "url": "pages/131438/index.html",
    "revision": "068de117f2423eecd65d803f48908376"
  },
  {
    "url": "pages/2b8e22/index.html",
    "revision": "21a38266f620deeb4e123301564de4be"
  },
  {
    "url": "pages/41b6cc/index.html",
    "revision": "347847a912703c6071d45a4b90c0814b"
  },
  {
    "url": "pages/54e58e/index.html",
    "revision": "c31593be8bac9f935f098e8d4ae01f66"
  },
  {
    "url": "pages/951535/index.html",
    "revision": "7be530c4b65c8ece4fbb9e5df78e9a42"
  },
  {
    "url": "pages/9a27d2/index.html",
    "revision": "5569d18a368739358f50b84fcb791927"
  },
  {
    "url": "pages/a91214/index.html",
    "revision": "6d3a01123466072391f908ca2aba938a"
  },
  {
    "url": "pages/aa917b/index.html",
    "revision": "d5f010fda037e7847766b23b7d30c0c5"
  },
  {
    "url": "pages/about/index.html",
    "revision": "f78bcb16745c1c2567b59f2d62018ba9"
  },
  {
    "url": "pages/b870ed/index.html",
    "revision": "e913ba0a11f463227cc3984074d7b84d"
  },
  {
    "url": "pages/b9b976/index.html",
    "revision": "7813b7ca19ea3791ec17f85db472e3ea"
  },
  {
    "url": "pages/bbca02/index.html",
    "revision": "491de5bba5d7cbe130b6a1cfbe05deef"
  },
  {
    "url": "pages/c7906c/index.html",
    "revision": "25921c9e24809a33c0ebaa176239eb9c"
  },
  {
    "url": "pages/ca447e/index.html",
    "revision": "68d9f1e4582bd5b1610d4cc167d93247"
  },
  {
    "url": "pages/cd8123/index.html",
    "revision": "9b40c40eb14f6554fab81af8b677420b"
  },
  {
    "url": "pages/contact/index.html",
    "revision": "9d44281ba390c02c7e612df96954fcb7"
  },
  {
    "url": "pages/eb5b06/index.html",
    "revision": "99d96be6ac4d40a1f5965356c923c397"
  },
  {
    "url": "pages/faf39d/index.html",
    "revision": "52977e6a9d01cbd63c0a6ebd91410158"
  },
  {
    "url": "pages/joinus/index.html",
    "revision": "edeaa2acdba7667119c57a33bf0cec06"
  },
  {
    "url": "pages/zhaoxin/index.html",
    "revision": "b2bf3cc35cf683a2129713d0243ff9c7"
  },
  {
    "url": "tags/index.html",
    "revision": "92e04e4ff8ebfa31b41aea49f2dd545e"
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
