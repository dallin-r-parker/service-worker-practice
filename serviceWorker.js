// self.addEventListener('install', evt => {
//     console.log('installed: ', evt)
// });
// self.addEventListener('activate', evt => {
//     console.log('activated: ', evt)
// });



self.addEventListener('fetch', evt => {
    const { url } = evt.request
    console.log('url: ', url);
});