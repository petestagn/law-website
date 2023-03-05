

const practice = document.querySelector('.practice');

const practiceInfo = document.querySelector('.practice-info')

options = {
    threshold: .5
}

const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
           if(entry.isIntersecting) {
            practiceInfo.classList.add('fadeIn');
           }
        // console.log(entry);
        })
    }, options);

observer.observe(practice);


