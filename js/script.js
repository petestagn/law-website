

const practice = document.querySelector('.practice-info');

let pracOptions = {
    threshold: .6
};

let pracFunction = (entries, pracObserver) => {
    entries.forEach((entry) => {
        console.log(entry);
    })
}

let pracObserver = new IntersectionObserver(pracFunction, pracOptions);

