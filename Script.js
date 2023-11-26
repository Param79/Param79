/*-------download CV-------*/
document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace the URL with the path to your CV file
    var cvUrl = "path_to_cv.pdf";
  
    // Create a temporary link element
    var link = document.createElement("a");
    link.href = cvUrl;
  
    // Set the link to download the file and give it a name
    link.download = "Web_Developer_CV.pdf";
  
    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();
  
    // Remove the link from the document
    document.body.removeChild(link);
  });

/*---------More button-------*/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}  

/*----------slide-show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}-----*/