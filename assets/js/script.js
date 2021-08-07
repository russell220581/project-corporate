const headerArea = document.querySelector('.header-area');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('section');

// Get the offset position of the navbar
const sticky = headerArea.offsetTop;

// Mobile Menu Toggle
const closeMenu = () => {
    headerArea.classList.remove("open");
    document.body.classList.remove("stop-scroll");
}

mobileMenu.addEventListener('click', () => {
    if (!headerArea.classList.contains("open")) {
        headerArea.classList.add("open");
        document.body.classList.add("stop-scroll");
    } else {
        closeMenu();
    }
});

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {        
        closeMenu();
    });
});

// Add the sticky class to the header when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
const stickyMenu = () => {
	if (window.pageYOffset > sticky) {
    	headerArea.classList.add("sticky");
  	} else {
    	headerArea.classList.remove("sticky");
  	}
}

/* Navbar Menu Link Active */
const menuLinkActive = () => {    
    sections.forEach(section => {
        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - 100;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navbarLinks.forEach(element => {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');                    
                }
                
                document.querySelector('.header-area .menu ul li a[href*=' + id + ']').classList.add('active');
            });
        }

    });

    
}


/* Sticky Menu On Scroll */
window.onscroll = () => {
    stickyMenu();
    //menuLinkActive();
}
