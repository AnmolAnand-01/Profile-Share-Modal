const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};


// const link='https://www.linkedin.com/in/anmol-anand-7195811b2/';
// const msg=encodeURIComponent('Hi there');

// const fb=document.querySelector('#facebook');
// fb.href=`https://www.facebook.com/share.php?u=${link}`;

// const twitter=document.querySelector('#twitter');
// twitter.href=`http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

// const whatsapp=document.querySelector('#whatsapp');
// whatsapp.href="whatsapp://send?text=Your message here";

// const telegram=document.querySelector('#telegram');
// telegram.href=`https://telegram.me/share/url?url=${link}&text=${msg}`;