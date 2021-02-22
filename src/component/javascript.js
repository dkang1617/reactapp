// from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validate() {
    const regexCom  = /\S+@\S+\.com$/;
	const regexEdu  = /\S+@\S+\.edu$/;
    var email = document.getElementById("email");
    var result = document.getElementById("result");
    if(regexEdu.test(email.value.toLowerCase()) == true || regexCom.test(email.value.toLowerCase()) == true) {
		result.innerHTML = "Valid Email."; 
    }
    else {
		result.innerHTML = "Invalid Email.";
    }
}


// from <!-- https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/?fbclid=IwAR3WwFPjqCkzBar8s5g4jMOVHbRBhJwaHMIQ8vJv92VPTAIsk8_wSX4cWYQ-->
var topBtn = document.querySelector(".topBtn");
var rootElement = document.documentElement;
function handleScroll() {
	var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
	if ((rootElement.scrollTop / scrollTotal ) > 0.25 ) {
		topBtn.classList.add("showBtn");
	} else {
		topBtn.classList.remove("showBtn");
	}
}
function toTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}
topBtn.addEventListener("click", toTop);
document.addEventListener("scroll", handleScroll);



// https://www.w3schools.com/howto/howto_css_modal_images.asp
var modal = document.getElementById("myModal");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var modalImg = document.getElementById("modalImg");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
