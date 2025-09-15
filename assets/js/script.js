        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        // Initialize Feather Icons
        feather.replace();
        
        // Countdown Timer
        function updateCountdown() {
            const countdownDate = new Date("Sep 29, 2025 08:00:00").getTime();
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
            
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
            }
        }
        
        updateCountdown();
        const countdownTimer = setInterval(updateCountdown, 1000);
        
        // Robotic Arm Animation
        const roboticArm = document.getElementById('roboticArm');
        
        roboticArm.addEventListener('mouseenter', () => {
            gsap.to(".arm-1", { rotation: 15, duration: 0.5 });
            gsap.to(".arm-2", { rotation: -10, duration: 0.5, delay: 0.1 });
            gsap.to(".claw-base", { rotation: 5, duration: 0.5, delay: 0.2 });
            gsap.to(".claw-finger-1", { rotation: -30, duration: 0.3, delay: 0.3 });
            gsap.to(".claw-finger-2", { rotation: 0, duration: 0.3, delay: 0.3 });
            gsap.to(".claw-finger-3", { rotation: 30, duration: 0.3, delay: 0.3 });
        });
        
        roboticArm.addEventListener('mouseleave', () => {
            gsap.to(".arm-1", { rotation: -15, duration: 0.5 });
            gsap.to(".arm-2", { rotation: 10, duration: 0.5, delay: 0.1 });
            gsap.to(".claw-base", { rotation: 0, duration: 0.5, delay: 0.2 });
            gsap.to(".claw-finger-1", { rotation: -20, duration: 0.3, delay: 0.3 });
            gsap.to(".claw-finger-2", { rotation: 0, duration: 0.3, delay: 0.3 });
            gsap.to(".claw-finger-3", { rotation: 20, duration: 0.3, delay: 0.3 });
        });
        
        // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('i');
                
                if (answer.classList.contains('hidden')) {
                    answer.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    answer.classList.add('hidden');
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });
        
        // Random LED colors
        setInterval(() => {
            const colors = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            document.querySelectorAll('.led-light').forEach(led => {
                led.style.backgroundColor = randomColor;
                led.style.boxShadow = `0 0 10px 2px ${randomColor}`;
            });
        }, 2000);

        function liberafaq(faqDoc){
            document.getElementById(faqDoc).classList.toggle('hidden');
        }