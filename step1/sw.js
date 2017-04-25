importScripts('sw-lib.v0.0.18.min.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use sw-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/0.js",
    "revision": "53d83b4f8c65da73f727d29033bb9c7e"
  },
  {
    "url": "/1.js",
    "revision": "eed8c4418cb39929f2531869312e0a9e"
  },
  {
    "url": "/app.js",
    "revision": "29b82d0407eb0b52201fa9c7e44d1b96"
  }
];

const swlib = new self.goog.SWLib({});
swlib.precache(fileManifest);
