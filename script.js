/* =================================
   SANIKA PHULKALA JAVASCRIPT
================================= */


/* =================================
   WHATSAPP ORDER
================================= */

/*
   IMPORTANT:

   India WhatsApp number format:

   91 + 10 digit mobile number

   Example:

   919876543210
*/


const whatsappNumber = "919167607487";


function orderOnWhatsApp(productName) {

    const message =

        `Hello Sanika Phulkala 🌸

मला तुमच्या handmade flowers / decoration बद्दल माहिती हवी आहे.

कृपया उपलब्ध products, price आणि order details कळवा. 😊

Thank you! 🌸`;

    const whatsappURL =

        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(

        whatsappURL,

        "_blank"

    );

}


/* =================================
   MOBILE MENU
================================= */


const menuBtn =

    document.getElementById("menuBtn");


const navbar =

    document.getElementById("navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener(

        "click",

        function () {

            navbar.classList.toggle("active");

        }

    );

}


/* =================================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
================================= */


const navLinks =

    document.querySelectorAll("#navbar a");


navLinks.forEach(

    function (link) {

        link.addEventListener(

            "click",

            function () {

                navbar.classList.remove("active");

            }

        );

    }

);


/* =================================
   SCROLL REVEAL ANIMATION
================================= */


const animatedElements =

    document.querySelectorAll(

        ".product-card, .feature-card, .gallery-item, .contact-card, .delivery-card"

    );


const observer =

    new IntersectionObserver(

        function (entries) {

            entries.forEach(

                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =

                            "translateY(0)";


                        observer.unobserve(

                            entry.target

                        );

                    }

                }

            );

        },

        {

            threshold: 0.15

        }

    );


animatedElements.forEach(

    function (element) {

        element.style.opacity = "0";

        element.style.transform =

            "translateY(25px)";


        element.style.transition =

            "opacity 0.6s ease, transform 0.6s ease";


        observer.observe(

            element

        );

    }

);


/* =================================
   ACTIVE NAVIGATION
================================= */


const sections =

    document.querySelectorAll("section[id]");


window.addEventListener(

    "scroll",

    function () {

        let currentSection = "";


        sections.forEach(

            function (section) {

                const sectionTop =

                    section.offsetTop - 150;


                const sectionHeight =

                    section.offsetHeight;


                if (

                    window.scrollY >= sectionTop &&

                    window.scrollY <

                    sectionTop + sectionHeight

                ) {

                    currentSection =

                        section.getAttribute("id");

                }

            }

        );


        navLinks.forEach(

            function (link) {

                link.classList.remove(

                    "active-link"

                );


                if (

                    link.getAttribute("href") ===

                    "#" + currentSection

                ) {

                    link.classList.add(

                        "active-link"

                    );

                }

            }

        );

    }

);


/* =================================
   HEADER SCROLL EFFECT
================================= */


const header =

    document.querySelector(".header");


window.addEventListener(

    "scroll",

    function () {

        if (window.scrollY > 50) {

            header.classList.add(

                "scrolled"

            );

        }

        else {

            header.classList.remove(

                "scrolled"

            );

        }

    }

);


/* =================================
   CURRENT YEAR
================================= */


console.log(

    "🌸 Sanika Phulkala Website Loaded Successfully 🌸"

);