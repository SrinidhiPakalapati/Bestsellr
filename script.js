function initializeFAQ() {
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq => {
        faq.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
}

initializeFAQ();