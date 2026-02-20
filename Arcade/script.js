// ===== ARCADE CUBA - SCRIPT COMPLETO =====
(function() {
    'use strict';

    // ===== DATOS PARA VISTA PREVIA =====
    const juegosDestacados = [
        "God of War Ragnarok", "Cyberpunk 2077", "Forza Horizon 5", 
        "Call of Duty Warzone", "League of Legends", "Minecraft",
        "EA Sports FC 24", "GTA V"
    ];
    
    const productosDestacados = [
        { nombre: "Baguette de Jamón y Queso", precio: 1690 },
        { nombre: "Pizza Napolitana", precio: 870 },
        { nombre: "Batido de Vainilla", precio: 1480 },
        { nombre: "Redbull", precio: 850 },
        { nombre: "Helado de Caramelo", precio: 530 },
        { nombre: "Café con leche", precio: 480 }
    ];

    // ===== HEADER SCROLL =====
    function setupHeader() {
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ===== MENÚ MÓVIL =====
    function setupMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            });
            
            // Cerrar menú al hacer click en un enlace
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            });
        }
    }

    // ===== SMOOTH SCROLL =====
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // ===== CARGAR VISTA PREVIA DE JUEGOS =====
    function cargarJuegosDestacados() {
        const grid = document.getElementById('juegosDestacados');
        if (!grid) return;
        
        let html = '';
        juegosDestacados.forEach(juego => {
            html += `
                <div class="juego-card">
                    <div class="juego-header">
                        <i class="fas fa-gamepad juego-plataforma" style="color: var(--primary);"></i>
                        <h3 class="juego-nombre">${juego}</h3>
                    </div>
                </div>
            `;
        });
        
        grid.innerHTML = html;
    }

    // ===== CARGAR VISTA PREVIA DE PRODUCTOS =====
    function cargarProductosDestacados() {
        const grid = document.getElementById('productosDestacados');
        if (!grid) return;
        
        let html = '';
        productosDestacados.forEach(producto => {
            html += `
                <div class="producto-card">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <p class="producto-descripcion">Producto destacado de nuestra sección gastronómica</p>
                    <div class="producto-footer">
                        <span class="producto-precio">₡${producto.precio.toLocaleString()}</span>
                        <button class="btn-agregar" onclick="alert('Producto agregado a tu pedido')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        grid.innerHTML = html;
    }

    // ===== SIMULADOR VIP =====
    function setupVipSimulador() {
        const horasRange = document.getElementById('horasRange');
        const horasValue = document.getElementById('horasValue');
        const resultadoDiv = document.getElementById('simuladorResultado');
        
        if (!horasRange || !horasValue || !resultadoDiv) return;
        
        function actualizarNivel(horas) {
            horasValue.textContent = horas + ' horas';
            
            let nivel = '', descuento = '', beneficios = [], colorClass = '';
            
            if (horas < 40) {
                nivel = 'NOVATO';
                descuento = 'Sin descuento';
                beneficios = ['Nivel inicial'];
                colorClass = 'novato';
            } else if (horas <= 59) {
                nivel = 'VIP PRO';
                descuento = '20% DESCUENTO';
                beneficios = ['2h gratis para amigo'];
                colorClass = 'pro';
            } else if (horas <= 79) {
                nivel = 'VIP ÉLITE';
                descuento = '30% DESCUENTO';
                beneficios = ['4h gratis para amigo', 'Comida gratis'];
                colorClass = 'elite';
            } else {
                nivel = 'VIP LEYENDA';
                descuento = '50% DESCUENTO';
                beneficios = ['6h gratis para amigo', 'Comida gratis', 'Torneos gratis'];
                colorClass = 'leyenda';
            }
            
            let html = `
                <div class="nivel-obtenido ${colorClass}">${nivel}</div>
                <div style="font-size: 1.8rem; font-weight: 900; margin: 10px 0; color: #ffd700;">${descuento}</div>
            `;
            
            if (beneficios.length > 0) {
                html += '<div class="beneficio-preview" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 15px;">';
                beneficios.forEach(b => {
                    html += `<span style="padding: 5px 15px; background: rgba(255,215,0,0.1); border: 1px solid #ffd700; border-radius: 50px; font-size: 0.9rem;">${b}</span>`;
                });
                html += '</div>';
            }
            
            resultadoDiv.innerHTML = html;
        }
        
        actualizarNivel(parseInt(horasRange.value));
        horasRange.addEventListener('input', (e) => actualizarNivel(parseInt(e.target.value)));
    }

    // ===== REGISTRO VIP =====
    function setupVipRegistro() {
        const form = document.getElementById('vipFormRegistro');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Recoger datos del formulario
                const inputs = form.querySelectorAll('input');
                const datos = [];
                inputs.forEach(input => datos.push(input.value));
                
                // Aquí iría la lógica para enviar los datos a tu WhatsApp/Email
                console.log('Registro VIP:', datos);
                
                alert('✅ ¡Registro exitoso! Te contactaremos pronto por WhatsApp.');
                form.reset();
            });
        }
    }

    // ===== BÚSQUEDA EN DESTACADOS =====
    function setupBusquedaDestacados() {
        const searchInput = document.getElementById('searchGames');
        const grid = document.getElementById('juegosDestacados');
        const totalCount = document.getElementById('totalGamesCount');
        
        if (!searchInput || !grid) return;
        
        searchInput.addEventListener('input', (e) => {
            const termino = e.target.value.toLowerCase();
            
            if (termino === '') {
                cargarJuegosDestacados();
                if (totalCount) totalCount.textContent = '8';
                return;
            }
            
            const filtrados = juegosDestacados.filter(juego => 
                juego.toLowerCase().includes(termino)
            );
            
            if (filtrados.length === 0) {
                grid.innerHTML = '<p style="text-align: center; color: var(--text-dim); grid-column: 1/-1;">No hay coincidencias</p>';
                if (totalCount) totalCount.textContent = '0';
                return;
            }
            
            let html = '';
            filtrados.forEach(juego => {
                html += `
                    <div class="juego-card">
                        <div class="juego-header">
                            <i class="fas fa-gamepad juego-plataforma" style="color: var(--primary);"></i>
                            <h3 class="juego-nombre">${juego}</h3>
                        </div>
                    </div>
                `;
            });
            grid.innerHTML = html;
            if (totalCount) totalCount.textContent = filtrados.length;
        });
    }

    // ===== INICIALIZAR =====
    function init() {
        console.log('🎮 Arcade Cuba - Inicializando...');
        
        setupHeader();
        setupMobileMenu();
        setupSmoothScroll();
        cargarJuegosDestacados();
        cargarProductosDestacados();
        setupVipSimulador();
        setupVipRegistro();
        setupBusquedaDestacados();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
