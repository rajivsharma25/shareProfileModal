const modalJS = document.querySelector(".modal");
const overlayJS = document.querySelector(".overlay");

//modal opening function

const openModal = ()=>{
    console.log("modal open ho rha hai");
    let list1 = modalJS.classList; //sare uske class select ho gye
    list1.add("active");
    let list2 = overlayJS.classList;
    list2.add("overlayactive");
};

//modal closing function

const closeModal = () =>{
    modalJS.classList.remove("active");
    overlayJS.classList.remove("overlayactive");
};

