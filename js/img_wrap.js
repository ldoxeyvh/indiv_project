function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}
console.log("JS is running")
let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; ++i) {
    wrapper = document.createElement('div');
    wrapper.className = "hover-wrapper";
    wrapper.style.backgroundColor = "#FFCF33";
    wrap(images[i], wrapper);
}
