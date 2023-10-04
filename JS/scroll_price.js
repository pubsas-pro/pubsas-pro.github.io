const images = document.querySelector('.cabeza_figura');

function triggerAnimaton(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img');

        //false
        image.classList.toggle('unset', entry.isIntersecting);
    });
}

const options ={
    root: null,
    rootMargin: "0px",
    threshold: 1
}

const observer = new IntersectionObserver(triggerAnimaton, options);

images.forEach(image =>{
    observer.observe(image);
})