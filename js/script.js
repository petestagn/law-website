const pracInfo = document.querySelector(".practice-info");
const practice = document.querySelector(".practice");

let infoOptions = {
    threshold: .9
};

const infoObserver = new IntersectionObserver((entries, infoObserver) => {
    entries.forEach(entry => {
       if(entry.isIntersecting) {
        pracInfo.classList.add("opacity");
       }
    })
}, infoOptions)

infoObserver.observe(practice);





const vision = document.querySelector(".vision");


let options = {
    threshold: .6
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("in-out");
        }
    })
}, options)

observer.observe(vision);



