// ===== Vaathsalya V Portfolio - JavaScript =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded!');
    
    // Initialize all features
    initThemeToggle();
    initTerminal();
    initMobileMenu();
    initNavigation();
    initAnimations();
    initTypingEffect();
});

// ===== Theme Toggle =====
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const navbar = document.querySelector('.navbar');
    
    // Clear any inline styles on navbar
    if (navbar) {
        navbar.removeAttribute('style');
    }
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Clear inline styles to let CSS take over
            if (navbar) {
                navbar.removeAttribute('style');
            }
            
            // Add animation
            themeToggle.style.transform = 'scale(0.9) rotate(180deg)';
            setTimeout(function() {
                themeToggle.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    }
}

// ===== Terminal Commands =====
const commands = {
    help: `Available commands:
  about      - Learn about me
  skills     - View my technical skills
  experience - See my work experience
  projects   - View my projects
  contact    - Get my contact info
  education  - View my education
  social     - Get social media links
  clear      - Clear terminal
  hello      - Say hello!
  date       - Show current date`,

    about: `╔═══════════════════════════════════════════════════════╗
║  VAATHSALYA V - Full Stack Developer                  ║
╠═══════════════════════════════════════════════════════╣
║  Software Engineer with expertise in full-stack       ║
║  development, data-driven applications, and system    ║
║  automation. Proficient in Python, JavaScript, React, ║
║  Django, Flask, and SQL.                              ║
║                                                       ║
║  Currently working at Tessolve Semiconductor,         ║
║  building automation tools and monitoring systems.    ║
╚═══════════════════════════════════════════════════════╝`,

    skills: `╔═ LANGUAGES ════════════════════════════════════════════╗
║  Python • JavaScript • C++ • Java • Go                 ║
╠═ FRONTEND ═════════════════════════════════════════════╣
║  React.js • Tailwind CSS • HTML5 • CSS3                ║
╠═ BACKEND ══════════════════════════════════════════════╣
║  Django • Flask • FastAPI • Node.js • REST APIs        ║
╠═ DATABASES ════════════════════════════════════════════╣
║  PostgreSQL • MySQL • SQL Optimization                 ║
╚════════════════════════════════════════════════════════╝`,

    experience: `╔═ SOFTWARE ENGINEER TRAINEE ════════════════════════════╗
║  Tessolve Semiconductor | Nov 2025 - Present           ║
║  • RAM monitoring system with 95% accuracy             ║
║  • Reduced manual troubleshooting by 30%               ║
╠═ SOFTWARE ENGINEER INTERN ═════════════════════════════╣
║  Tessolve Semiconductor | Feb 2025 - Oct 2025          ║
║  • Chatbot handling 500+ queries daily                 ║
║  • Improved debugging efficiency by 35%                ║
╚════════════════════════════════════════════════════════╝`,

    projects: `╔═ RAM MONITORING SYSTEM ════════════════════════════════╗
║  Python • Flask • React • FastAPI                      ║
║  95% accuracy | 50% faster detection                   ║
╠═ CHATBOT APPLICATION ══════════════════════════════════╣
║  React • Flask • NLP                                   ║
║  1000+ queries/day | 99% uptime                        ║
╠═ BUS RESERVATION SYSTEM ═══════════════════════════════╣
║  PHP • MySQL • JavaScript                              ║
║  500+ passengers | 20% less errors                     ║
╚════════════════════════════════════════════════════════╝`,

    contact: `╔═ CONTACT INFORMATION ══════════════════════════════════╗
║  📧 Email:    vkvaathsalya@gmail.com                   ║
║  📱 Phone:    +91-6364024829                           ║
║  📍 Location: Bangalore, India                         ║
╚════════════════════════════════════════════════════════╝`,

    education: `╔═ EDUCATION ════════════════════════════════════════════╗
║  B.E. Information Science and Engineering              ║
║  Sahyadri College of Engineering | 2021 - 2025         ║
║  CGPA: 7.66                                            ║
╠════════════════════════════════════════════════════════╣
║  Pre-University College (Science)                      ║
║  Expert PU College | 2019 - 2021                       ║
║  Percentage: 94.6%                                     ║
╚════════════════════════════════════════════════════════╝`,

    social: `╔═ SOCIAL LINKS ═════════════════════════════════════════╗
║  GitHub:   github.com/Vaathsalya44                     ║
║  LinkedIn: linkedin.com/in/vaathsalya                  ║
║  Email:    vkvaathsalya@gmail.com                      ║
╚════════════════════════════════════════════════════════╝`,

    hello: `👋 Hello there! Thanks for checking out my portfolio!
   Feel free to explore using the commands above.
   Type 'help' to see all available commands.`,

    date: function() {
        return new Date().toString();
    }
};

// ===== Terminal Initialization =====
function initTerminal() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalHistory = document.querySelector('.terminal-history');
    const terminalBody = document.getElementById('terminal-output');
    
    if (!terminalInput) {
        console.error('Terminal input not found!');
        return;
    }
    
    if (!terminalHistory) {
        console.error('Terminal history not found!');
        return;
    }
    
    console.log('Terminal initialized successfully!');
    
    // Handle keyboard input
    terminalInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            const inputValue = terminalInput.value.trim().toLowerCase();
            
            if (inputValue === '') return;
            
            // Display the command
            const commandDiv = document.createElement('div');
            commandDiv.className = 'terminal-line';
            commandDiv.innerHTML = '<span class="terminal-prompt">visitor@vaathsalya:~$</span> <span class="terminal-command">' + inputValue + '</span>';
            terminalHistory.appendChild(commandDiv);
            
            // Process command
            let output = '';
            
            if (inputValue === 'clear') {
                terminalHistory.innerHTML = '';
                terminalInput.value = '';
                return;
            } else if (commands[inputValue]) {
                if (typeof commands[inputValue] === 'function') {
                    output = commands[inputValue]();
                } else {
                    output = commands[inputValue];
                }
            } else {
                output = 'Command not found: ' + inputValue + '\nType "help" for available commands.';
            }
            
            // Display output
            const outputDiv = document.createElement('div');
            outputDiv.className = 'terminal-line';
            outputDiv.innerHTML = '<pre class="terminal-output">' + output + '</pre>';
            terminalHistory.appendChild(outputDiv);
            
            // Clear input
            terminalInput.value = '';
            
            // Scroll to bottom
            if (terminalBody) {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        }
    });
    
    // Focus input when clicking anywhere in terminal
    const terminalWindow = document.querySelector('.terminal-window');
    if (terminalWindow) {
        terminalWindow.addEventListener('click', function() {
            terminalInput.focus();
        });
    }
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!toggle || !mobileMenu) return;
    
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// ===== Navigation =====
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Clear any inline styles on navbar
    if (navbar) {
        navbar.removeAttribute('style');
    }
    
    // Smooth scroll
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // Navbar scroll effect - uses class instead of inline styles
    window.addEventListener('scroll', function() {
        if (navbar) {
            if (window.pageYOffset > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// ===== Animations =====
function initAnimations() {
    const revealElements = document.querySelectorAll('.about-card, .skill-card, .project-card, .exp-card, .repo-card, .contact-card, .stat-card');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ===== Typing Effect =====
function initTypingEffect() {
    const heroRole = document.querySelector('.hero-role');
    if (!heroRole) return;
    
    const roles = ['Full Stack Developer', 'Python Developer', 'React Developer', 'Software Engineer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            heroRole.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroRole.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }
        
        setTimeout(type, speed);
    }
    
    setTimeout(type, 1500);
}

// Console welcome message
console.log('%c💻 Vaathsalya V - Full Stack Developer', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
console.log('%c🚀 Building scalable solutions', 'font-size: 14px; color: #a855f7;');
