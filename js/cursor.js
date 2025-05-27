const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 30)+"px; left: "+(e.pageX - 32)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

function showIframe(iframeNumber) {
    // Hide all iframes
    document.getElementById('iframe1').style.display = 'none';
    document.getElementById('iframe2').style.display = 'none';
    var button1 = document.getElementById('btn1');
    var button2 = document.getElementById('btn2');
    
    // Show the selected iframe
    document.getElementById('iframe' + iframeNumber).style.display = 'flex';
    if (iframeNumber==1) {
        document.getElementById('btn1').classList.add('active');
        document.getElementById('btn2').classList.remove('active');
    } else {
        document.getElementById('btn2').classList.add('active');
        document.getElementById('btn1').classList.remove('active');   
    }
}

function toggleMenu(element) {
    element.classList.toggle('active');
    // Add logic to toggle your menu visibility here
  }

//Slideshow on Project Page
let slideIndex = 0;
  let isScrolling = false;

  function showSlides(index) {
    if (isScrolling) return;
    isScrolling = true;

    const slides = document.getElementsByClassName("mySlides");
    const bars = document.querySelectorAll(".bar");

    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    bars.forEach(bar => {
      bar.classList.remove("active-bar");
    });

    if (bars[slideIndex]) {
      bars[slideIndex].classList.add("active-bar");
    }

    setTimeout(() => {
      isScrolling = false;
    }, 300); // Reduced to 300ms for snappier feel
  }

  function currentSlide(index) {
    showSlides(index - 1);
  }

  // Initialize first slide when page loads
  document.addEventListener("DOMContentLoaded", () => {
    showSlides(0);
  });
  
  // Automatic slide change on scroll
  window.addEventListener("wheel", function (e) {
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal scrolling
      if (deltaX > 0) {
        showSlides(slideIndex + 1);
      } else if (deltaX < 0) {
        showSlides(slideIndex - 1);
      }
    }
  });

//submit form
function submitForm() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // Validate form inputs
    if (name === "" || subject == "" ||email === "" || message === "") {
      alert("All fields are required");
      return;
    }
  
    // Add your additional validation logic here
  
    // Display submitted data (for demonstration purposes)
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  
    // You can add an AJAX request here to send data to the server
  
    // Clear the form
    document.getElementById("contactForm").reset();
  }

function getCurrentSectionId() {
    var scrollPosition = window.scrollY;

    // Iterate through sections to find the one currently in view
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            return section.id;
        }
    }

    // If no section is in view, return null or handle accordingly
    return null;
}

var oldScrollY = window.scrollY;

var targetSection;

function scroll(e) {
    if(oldScrollY < window.scrollY){
        targetSection = document.getElementById('section2');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        targetSection = document.getElementById('section1');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    oldScrollY = window.scrollY;
}


