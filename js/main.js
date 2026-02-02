document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-content .gsap-reveal", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out"
    });

    gsap.utils.toArray(".gsap-scroll").forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 30,
            opacity: 0,
           ease: "power2.out"
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    console.log('Property Hub Kenya - Animations Loaded with GSAP');
});