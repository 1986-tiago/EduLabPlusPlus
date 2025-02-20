document.addEventListener("DOMContentLoaded", function () {
    // Adiciona efeito de rolagem suave para os links da navbar
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Pequena animação na seção de categorias ao rolar a página
    window.addEventListener("scroll", function () {
        let categories = document.querySelectorAll(".category");
        categories.forEach(category => {
            let position = category.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                category.style.opacity = "1";
                category.style.transform = "translateY(0)";
            }
        });
    });
});
