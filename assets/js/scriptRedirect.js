
        // Inicializar animações
        AOS.init();
        feather.replace();
        
        // Criar efeito de confetti
        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe'];
            const container = document.getElementById('confetti-container');
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animation = `confetti ${Math.random() * 3 + 2}s linear forwards`;
                confetti.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(confetti);
            }
        }

        document.addEventListener("click", function () {
            createConfetti();
        });
        
        // Executar quando a página carregar
        document.addEventListener('DOMContentLoaded', function() {
            createConfetti();
        });
    
        setInterval(function () {
            createConfetti();
        }, 1000);