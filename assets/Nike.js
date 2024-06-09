const iniSlider=()=>{
    const imageList=document.querySelector(".slider-warpper .image-list");
    const sliderButtons=document.querySelectorAll(".slider-warpper .slider-button");
    sliderButtons.forEach(button => {
        button.addEventListener("click",()=>{
            const direction =button.id === "prev-slide" ? -1 : 1;
            const scrollAmount =imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior:"smooth" });
        });
    });
}
window.addEventListener("load",iniSlider);