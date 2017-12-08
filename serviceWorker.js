console.log('self: ', self);

self.addEventListener('install', evt => {
    console.log('installed: ', evt)
});
self.addEventListener('activate', evt => {
    console.log('activated: ', evt)
});
self.addEventListener('fetch', evt => {
    console.log('fetch something: ', evt)
});