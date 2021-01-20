'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "56ae27f6a805d4705a970140d6007c26",
"assets/assets/fonts/Abside-Oblique.otf": "9c909b9c6ba6c8b889e42fca59af391a",
"assets/assets/fonts/Abside-Regular.otf": "13b2c182b9324470d0063f1f75bf21b7",
"assets/assets/fonts/arial.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/assets/fonts/Gotham-Bold.otf": "9c35bf87f23c8cca614720126fe0baa0",
"assets/assets/fonts/Gotham-Light.otf": "f76e3adf545b3299f643fd7642800351",
"assets/assets/fonts/iCiel-Medium.ttf": "022af2f62a7c0af68de51fa2cbf218e2",
"assets/assets/img/allyoucaneat_icon.svg": "0c62ce7265cafc058beecde48f771998",
"assets/assets/img/appStore.png": "77ca8b6daef7f3a2c81f8266a17cd96a",
"assets/assets/img/favicon.ico": "f9058b03704b1a2d33c80a3c09d34836",
"assets/assets/img/flecha.PNG": "e6cc3606ec4eb5189b1eb7ffa730f90c",
"assets/assets/img/imagen1.PNG": "646c4b3e2e2aedfd535f3f98457bc97f",
"assets/assets/img/imagen2.PNG": "7dd9d10602e15e4eac63a8474ea41d9f",
"assets/assets/img/imagen3.PNG": "d38ed6cea3e067bffbba8d680c86058e",
"assets/assets/img/imagen4.PNG": "62504994ec03f4b7f786a43ce82324f3",
"assets/assets/img/imagen5.PNG": "260b17f04bf51ae112a6ca4ec2fe143f",
"assets/assets/img/imagen6.PNG": "c1f8b9e90712a99977244bb5ff4fa900",
"assets/assets/img/logo.png": "e7c04a60b2e896042989cad428ad2777",
"assets/assets/img/logo1.PNG": "2e9a50af671820ec551cfb1a35c57ccd",
"assets/assets/img/logo2.PNG": "6ab062bc29332813772ebf411627f6da",
"assets/assets/img/logo3.PNG": "e9fe708c57a03f0c4ef62874d21fc6e3",
"assets/assets/img/logo4.PNG": "0101d0077bd1c357f918dfb64c6eaa65",
"assets/assets/img/logo5.PNG": "df03d47201186faa46f7ca02128263d3",
"assets/assets/img/logo6.PNG": "bd6d0d3f9f4d29a1f3fb1476fc75c07d",
"assets/assets/img/logo7.PNG": "9c8e9b2969680f9c1df59d176e4d93d0",
"assets/assets/img/logo8.PNG": "431cb4054c0e9d5c989ff9351c246527",
"assets/assets/img/logoAnterior.png": "9c0d64dbcce20638d2e39bbefe98ad09",
"assets/assets/img/logoBlanco.png": "473909ea92b5ce6a1edc0f2541fb76cd",
"assets/assets/img/logoKeTiene.svg": "9a7af2f9ff994830130dd5f6611a5606",
"assets/assets/img/logoketienenuevo.7z": "fcf3b5dc1537ea782cdbe311cc52ceff",
"assets/assets/img/logoketienenuevo.svg": "a6476ea7080d2c5ea701911d0c235269",
"assets/assets/img/Min.png": "e7afb68a10b1255e309456a30c94280f",
"assets/assets/img/nuevaPromo.png": "3f3a572e4a22c51ba9a0e8e0ae03b26a",
"assets/assets/img/placeholder.svg": "fc2e7a31679e96b6b3fa0e8829d857aa",
"assets/assets/img/promo.png": "a734a8eacae375ae810f2f67e87865ae",
"assets/assets/img/qr.PNG": "d923182444e804d918f51990c0b7d4ce",
"assets/assets/img/todosLogos.PNG": "3eb70c33fea4ad1b8fcfc25aa04b6588",
"assets/FontManifest.json": "fa06ba666de1dd15ee5a5013348840ab",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "92a48d45ffa246081f332745ca49ef40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_google_maps/assets/images/marker_a.png": "9b687e681fcc41298dfab9c1304b66d0",
"assets/packages/flutter_google_maps/assets/images/marker_b.png": "bb8df73622307b582f89602743f4f02f",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3e722fd57a6db80ee119f0e2c230ccff",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "13c345bfb5f167eed55349bb4562255f",
"/": "13c345bfb5f167eed55349bb4562255f",
"main.dart.js": "ad3d7a551591a1f8bd8928b386506b23",
"manifest.json": "ab447bcec9653ab7d27ccf290c984da9",
"version.json": "5bebcf94462ae6b9e672a41f5d32565e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
