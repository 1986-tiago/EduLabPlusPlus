
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = this.getAttribute("href");
        });
    });

    // Efeito de fade-in nas seções
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));

    // Exibir uma frase aleatória sobre educação
    const quotes = [
        // Frases originais
        '"Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo." - Paulo Freire',
        '"Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção." - Paulo Freire',
        '"A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original." - Albert Einstein',
        '"A educação é a arma mais poderosa que você pode usar para mudar o mundo." - Nelson Mandela',
        '"O conhecimento fala, mas a sabedoria escuta." - Jimi Hendrix',
        '"A tarefa essencial do professor é despertar a alegria de trabalhar e de conhecer." - Albert Einstein',
        '"A leitura de um bom livro é um diálogo incessante: o livro fala e a alma responde." - André Maurois',
        '"O verdadeiro sinal de inteligência não é o conhecimento, mas a imaginação." - Albert Einstein',
        '"Aprender é a única coisa de que a mente nunca se cansa, nunca tem medo e nunca se arrepende." - Leonardo da Vinci',
        '"A educação é o grande motor do desenvolvimento pessoal." - Nelson Mandela',
      
        // Frases adicionais
        '"Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda." - Paulo Freire',
        '"Educar é semear com sabedoria e colher com paciência." - Augusto Cury',
        '"Educar é mostrar a vida a quem ainda não a viu." - Rubem Alves',
        '"Não há salvação fora da educação." - Darcy Ribeiro',
        '"Uma criança, um professor, um livro e um lápis podem mudar o mundo." - Malala Yousafzai',
        '"Educação não é preparação para a vida; educação é a própria vida." - John Dewey',
        '"Se você acha que a educação é cara, experimente a ignorância." - Derek Bok',
        '"O homem que não lê bons livros não tem vantagem sobre o homem que não sabe ler." - Mark Twain',
        '"A educação tem raízes amargas, mas os seus frutos são doces." - Aristóteles',
        '"Livros não mudam o mundo, quem muda o mundo são as pessoas. Os livros só mudam as pessoas." - Mário Quintana'
      ];
      

    document.getElementById("quote-text").innerText = quotes[Math.floor(Math.random() * quotes.length)];
});
