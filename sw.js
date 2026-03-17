self.addEventListener('fetch', event => {

alert(event.request.clone())

})