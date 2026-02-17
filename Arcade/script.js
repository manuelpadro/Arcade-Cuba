// ===== ARCADE CUBA - SCRIPT COMPLETO =====
(function() {
    'use strict';

    // ===== TUS DATOS =====
    const TU_WHATSAPP = '5358873126'; // Sin el + para el enlace
    const TU_EMAIL = 'manuelpadro02@gmail.com';

    // ===== DATOS DE JUEGOS POR PLATAFORMA =====
    const juegosData = {
        steam: [
            "Ace Combat 7", "Age of Empires 3", "Age of Empires 4", "Aimlabs", "Albion Online",
            "Alien Swarm: RD", "Aliens: Fireteam Elite", "Apex Legends", "Arena Breakout",
            "Arma Reforger", "Assetto Corsa", "Asphalt Legends", "Baldur Gate 3 *",
            "Battlefield 1 *", "Battlefield V *", "Battlefield 6 *", "Battlefield 2042 *",
            "Black Desert", "Black Myth: Wukong", "BloodStrike", "Borderlands 2", "Brawlhalla",
            "Call of Duty: Black Ops 7 *", "Call of Duty: Black Ops III", "Call of Duty: WWII",
            "Call of Duty: Warzone", "Century: Age of Ashes", "Chivalry 2 *", "Combat Master",
            "Company of Heroes", "Company of Heroes LE", "Company of Heroes 2", "Company of Heroes 3",
            "Company of Heroes BM", "Counter-Strike 2", "Crossout", "Dark and Darker", "Darkest Day",
            "Dead by Daylight", "Deadlock", "Delta Force + DLC", "Destiny 2", "Dota 2",
            "Dragon Ball: GS eFootball", "Elden Ring Nightreign", "Eternal Return", "Escape from Tarkov *",
            "EVE Online", "Fallout Shelter", "Farlight 84", "Final Fantasy XIV Online", "Forza Horizon 5",
            "FragPunk", "GoT Kingsroad", "Gears of Wars 5", "Halo Infinite", "Halo: TMCC",
            "HELLDIVERS 2", "Killing Floor 2", "Killing Floor 3 *", "Left 4 Dead 2", "Lost Ark",
            "Magic: The Gathering Arena", "Marvel Rivals", "Marvel Snap", "Mecha Break",
            "Monster Hunters Wilds", "Monster Hunters World *", "Once Human", "One-armed robber",
            "Overwatch 2", "Paladins", "Palia", "Path of Exile", "Polygon", "Portal 2",
            "Project Playtime", "PUBG: Battlegrounds", "Rainbow Six Siege X", "Rematch", "R.E.P.O.",
            "Risk: Global Domination", "Runescape", "Rust *", "Sea of Thieves", "Sky: Niños de la Luz",
            "Smite 2", "Sniper Elite 5", "Sniper Ghost Warrior 3", "Splitgate 2", "Stalcraft X",
            "Stumble Guys", "Star Wars: Battlefront 2 *", "Steel Hunters", "Stellaris *", "Stormgate",
            "Strinova", "Supervive", "Team Fortress 2", "Tekken 8 *", "Terraria *", "The Finals",
            "The Isle *", "The Hunter: CotW", "The Sims 4", "Throne and Liberty", "Thunder Tier One",
            "V Rising *", "Vampire The Masquerade", "War Thunder", "Warframe", "Warhammer 40K: DoW III",
            "Warhammer 40K: SM 2", "Warhammer 40K: RoW", "Warhaven", "Warlander", "Wires and Whiskers",
            "World of Tanks", "World of Warships"
        ],
        
        ps5: [
            "A Way Out", "Apex Legends", "Asphalt Legends Unite", "Astro Playroom", "Balatro",
            "Battlefield 6", "Brawlhalla", "Brothers Remake", "Call of Duty Black Ops 3",
            "Call of Duty Black Ops 7", "Call of Duty Warzone", "Century: Age of Ashes", "Crossout",
            "Dirt 5", "Disney SpeedStorm", "EA FC 26", "F1 24", "Fall Guys", "Fortnite",
            "God of War Ragnarok", "GTA V Online", "Helldivers II", "Hot Wheels Unleashed 2",
            "It Takes Two", "Jusant", "Mortal Kombat 1", "NBA 2K25", "Overcooked 2", "Party Animals",
            "PayDay 3", "PUBG Battlegrounds", "Rocket League", "Sky: Niños de la Luz", "Split Fiction",
            "Star Wars Jedi Survivor", "Star Wars Battlefront 2", "Super Animal Royale", "Tekken 8",
            "The Dark Pictures: HoA", "Titanfall 2", "Trine 5", "Unravel Two", "UFC 5", "Valorant", "Warlord"
        ],
        
        vr: [
            "Walkabout Mini Golf", "Wander", "Wands Alliances", "War of Wizards", "Warplanes Battles Over Pacific",
            "Acron Attack of squirrels", "All in One Sports VR", "All in One Summer Sports", "Angry Birds",
            "Arizona Sunshine 1", "Asgard Wrath 2", "Assassins Creed Nexus", "Attack on Titan VR",
            "Band Space", "Batman Arkham Shadow", "Battle Talent", "Beat Saber", "Blaston", "Bogo",
            "Brink Traveler", "Broken Edge", "Carve Snowboarding", "Cookout", "Contractors Creed",
            "Crisis Brigade 2", "Deadhook", "Death Lap", "Divine Duel", "Do U Copy", "Dragon Fist Kung Fu",
            "Drunkin Bar Fight", "Eleven Table Tennis", "Elixir", "Elven Assassin", "Epic Roller Coaster",
            "Final Space", "Five Nights At Freddys 1 & 2", "Fruit Ninja 2", "Gods of Gravity", "Gorilla Tag",
            "Green Hell", "Guardians Frontline", "Gunradiers", "Hitman 3 Reloaded", "Hyperdash", "I Am a Cat",
            "I Am a Security", "Into Black", "Iron Man", "Ironlights", "Job Simulator", "Just Dance VR",
            "Kizuna AI", "Madison", "Max Mustard", "Metal Hellsinger", "Metro Awakening", "Mission ISS",
            "Moss Book 1", "Moss Book 2", "Ocean Craft", "Ocean Rift", "OnShape", "Pistol Whip",
            "Population One", "Project Terminus", "Red Matter 2", "Resident Evil 4", "Roblox",
            "Rooms of Realities", "Skydances Behemot", "Skyworld Kingdom Brawl", "Sniper Elite: Winter Warrior",
            "Soul Covenant", "Space Slurpies", "Stilt", "Superhot VR", "Survival Nation", "Sweet Escape VR",
            "The Climb 2", "Toss", "Ultimechs", "Void Racer Extreme", "Vox Machine"
        ],
        
        epic: ["Dauntless", "FallGuys", "Forgotten Playland", "Fortnite", "Hell Let Loose", "Rocket League", "World War Z"],
        bnet: ["Diablo III", "Diablo Immortal", "Hearthstone", "Heroes of Storm", "Starcraft", "Starcraft 2", "World of Warcraft"],
        riot: ["2XKO", "League of Legends", "Legends of Runeterra", "Teamfight Tactics", "Valorant"],
        
        lan: [
            "Age of Empires II HD", "Age of Empires III", "Age of Mythology", "Air Conflicts",
            "Battlefield 3", "Battlefield 4", "Blur", "Borderlands 3", "Call of Duty 1",
            "Call of Duty 4 MW (2007)", "Call of Duty 5 WoW", "Call of Juarez BIB", "Civilization VI",
            "Company of Heroes", "Counter-Strike 1.6", "Counter-Strike GO", "Dark Sector", "Empire Earth II",
            "Flat Out 2", "God Mode", "Half Life 2 Deathmatch", "Imperium III", "Killing Floor 2",
            "Minecraft", "Pay Day 2", "Pretorians", "Rainbow Six Siege", "Red Alert 2", "Red Alert 3 Complete Ed.",
            "Sniper Ghost Warrior 2", "Split Second", "Star Craft", "S.T.A.L.K.E.R Call of Pripyat",
            "The Forest", "Tiny Tina's Wonderlands", "WarCraft III Complete Ed.", "World in Conflict SA"
        ],
        
        single: [
            "Balatro", "Call of Duty MW (2019)", "Call of Duty MW 2 (2022)", "Call of Duty MW3 (2023)",
            "Call of Duty Black Ops 6", "Clair Obscure Exp. 33", "Cyberpunk 2077", "FrostPunk 2",
            "GTA 5", "Hades II", "Hogwarts Legacy", "Hollow Knight: Silksong", "Horizon Forbidden West",
            "Indiana Jones (2025)", "InZOI", "Kingdom Come Del. II", "Manor Lords", "MGS Snake Eater (2025)",
            "Red Dead Redemption II", "Silent Hill 2 Remake", "STALKER 2 Heart of Chernobyl",
            "The Last of Us Part 1 Remast.", "The Last of Us Part 2 Remast.", "Tiny Glade", "Uncharted 4 Collection"
        ],
        
        switch: [
            "Animal Crossing NH", "Bayonetta 3", "Fire Emblem: T.Thouses", "Kirby and the Forgotten Land",
            "Mario Kart 8 Deluxe", "Mario Party Superstars", "Metroid Dread", "Pokémon Legends: Arceus",
            "Pokémon Sword and Shield", "Super Mario Bros: Wonder", "Super Mario Odyssey",
            "Super Smash Bros Ultimate", "The Legend of Zelda: Breath of the Wild",
            "The Legend of Zelda: Echoes of Wisdom", "The Legend of Zelda: Tears of the Kingdom"
        ],
        
        android: ["Free Fire", "Call of Duty Mobile", "PUBG Mobile"],
        
        otros: [
            "Game of Thrones (Board)", "Among Us", "ARK Survival Ascended", "Baldurs Gate 3", "Barotrauma",
            "Bodycam", "Call of Duty Black Ops 2", "Call of Duty MW3 (2011)", "Commandos: Origins",
            "Content Warning", "Corepunk", "Diablo IV", "Dragon Ball S, ZERO", "Dying Light: The Beast",
            "Elden Ring: Solt (DLC)", "Empire of the Ants", "Gang Beast", "Genshin Impact",
            "Ghost of Tsushima", "Ghost of Yótei", "Green Hell", "Grounded 2", "Hollow Knight Silksong (Coop)",
            "Honkai Star Rail", "Jump Space", "Left 4 Dead 2", "Lens Island", "Lethal Company",
            "Minecraft", "Northgard", "PayDay 3", "Peak", "Poker Star", "Raft", "Ready or Not",
            "Roblox", "Rust", "Satisfactory", "Schedule", "Serious Sam SM", "Sid Meiers: Civilization VI",
            "Sins of Solar Empire II", "Sons of The Forest", "Stardew Valley", "StickFight",
            "Stranded Deep", "The Forest", "The Scouring", "The Survivalist", "The Forever Winter",
            "Trine 4", "V Rising", "Valheim", "Wartales", "WoW (Firestorm)", "Zenless Zone Zero"
        ]
    };

    // ===== MAPEO DE ICONOS =====
    const platformIcons = {
        steam: 'fab fa-steam',
        ps5: 'fab fa-playstation',
        vr: 'fas fa-vr-cardboard',
        epic: 'fab fa-epic-games',
        bnet: 'fas fa-globe',
        riot: 'fas fa-fist-raised',
        lan: 'fas fa-network-wired',
        single: 'fas fa-user',
        switch: 'fas fa-gamepad',
        android: 'fas fa-mobile-alt',
        otros: 'fas fa-server'
    };

    // ===== DATOS DEL MENÚ GASTRONÓMICO =====
    const menuData = {
        baguettes: [
            { nombre: "Baguette de Atún", descripcion: "Pan Baguette con atún, mayonesa y pepinillo", precio: 1580 },
            { nombre: "Baguette de Jamón y Queso", descripcion: "Pan Baguette con jamón, queso y pepinillo", precio: 1690 },
            { nombre: "Picadera de Jamón y Queso", descripcion: "Ración de seis rollitos de jamón, queso y aceitunas", precio: 1530 }
        ],
        pizzas: [
            { nombre: "Pizza Napolitana (20cm)", descripcion: "Pizza de queso, tomate y albahaca", precio: 870 },
            { nombre: "Pizza de Jamón y Queso (20cm)", descripcion: "Pizza de queso, tomate y jamón", precio: 980 }
        ],
        postres: [
            { nombre: "Dulce de la Casa", descripcion: "Cuña de postre casero", precio: 890 },
            { nombre: "Helado de Vainilla", descripcion: "Dos bolas de helado de vainilla", precio: 530 },
            { nombre: "Helado de Caramelo", descripcion: "Dos bolas de helado de caramelo", precio: 530 }
        ],
        batidos: [
            { nombre: "Batido de Vainilla", descripcion: "Batido cremoso de helado de vainilla", precio: 1480 },
            { nombre: "Batido de Caramelo", descripcion: "Batido cremoso de helado de caramelo", precio: 1480 }
        ],
        snacks: [
            { nombre: "Ruffles", descripcion: "Papas fritas 28g", precio: 550 },
            { nombre: "Fritos", descripcion: "Snacks de maíz 28g", precio: 550 }
        ],
        confituras: [
            { nombre: "Souffle", descripcion: "Snack dulce", precio: 430 },
            { nombre: "Arno", descripcion: "Snack", precio: 390 },
            { nombre: "Reak", descripcion: "Snack", precio: 360 }
        ],
        liquidos: [
            { nombre: "Agua Natural", descripcion: "Agua embotellada", precio: 440 },
            { nombre: "Malta", descripcion: "Bebida de malta", precio: 630 },
            { nombre: "Floridita Cola", descripcion: "Gaseosa sabor cola", precio: 580 },
            { nombre: "Floridita Piña", descripcion: "Gaseosa sabor piña", precio: 580 },
            { nombre: "Floridita Limón", descripcion: "Gaseosa sabor limón", precio: 580 },
            { nombre: "Linx", descripcion: "Bebida energizante", precio: 630 },
            { nombre: "Redbull", descripcion: "Bebida energizante", precio: 850 },
            { nombre: "Jugo de cajita", descripcion: "Varios sabores de jugos", precio: 410 }
        ],
        cervezas: [
            { nombre: "Cerveza Cristal", descripcion: "Botella de cerveza", precio: 710 },
            { nombre: "Cerveza Presidente", descripcion: "Botella de cerveza", precio: 630 }
        ],
        cafes: [
            { nombre: "Café Expreso", descripcion: "Café puro", precio: 270 },
            { nombre: "Café Cortado", descripcion: "Café con un toque de leche", precio: 380 },
            { nombre: "Café con leche", descripcion: "Café con leche", precio: 480 },
            { nombre: "Frapuccino", descripcion: "Café frío batido", precio: 1250 }
        ],
        agregos: [
            { nombre: "Queso", descripcion: "Porción extra de queso", precio: 200 },
            { nombre: "Jamón", descripcion: "Porción extra de jamón", precio: 170 },
            { nombre: "Aceitunas", descripcion: "Porción de aceitunas", precio: 180 }
        ]
    };

    // ===== ESTADO ACTUAL =====
    let currentPlatform = 'steam';
    let currentSearch = '';
    let allGames = [];

    // ===== PREPARAR TODOS LOS JUEGOS =====
    function prepareAllGames() {
        const games = [];
        for (const [platform, juegos] of Object.entries(juegosData)) {
            juegos.forEach(juego => {
                games.push({
                    nombre: juego.replace(' *', ''),
                    nombreOriginal: juego,
                    plataforma: platform,
                    requiereBiblio: juego.includes('*')
                });
            });
        }
        allGames = games;
        return games;
    }

    // ===== ACTUALIZAR CONTADORES =====
    function updateTabCounts() {
        for (const [platform, juegos] of Object.entries(juegosData)) {
            const countElement = document.getElementById(`count-${platform}`);
            if (countElement) {
                countElement.textContent = juegos.length;
            }
        }
    }

    // ===== RENDERIZAR JUEGOS =====
    function renderGames() {
        const grid = document.getElementById('juegosGrid');
        const totalCount = document.getElementById('totalGamesCount');
        const noResults = document.getElementById('noResults');
        
        if (!grid) return;
        
        let filtered = allGames;
        
        if (currentPlatform !== 'todos') {
            filtered = filtered.filter(g => g.plataforma === currentPlatform);
        }
        
        if (currentSearch) {
            filtered = filtered.filter(g => 
                g.nombre.toLowerCase().includes(currentSearch.toLowerCase())
            );
        }
        
        if (totalCount) totalCount.textContent = filtered.length;
        if (noResults) noResults.style.display = filtered.length === 0 ? 'block' : 'none';
        
        if (filtered.length === 0) {
            grid.innerHTML = '';
            return;
        }
        
        let html = '';
        filtered.forEach(juego => {
            const iconClass = platformIcons[juego.plataforma] || 'fas fa-gamepad';
            html += `
                <div class="juego-card ${juego.requiereBiblio ? 'requiere-biblio' : ''}" data-plataforma="${juego.plataforma}">
                    <div class="juego-header">
                        <i class="${iconClass} juego-plataforma"></i>
                        <h3 class="juego-nombre">${juego.nombre}</h3>
                    </div>
                    ${juego.requiereBiblio ? '<div class="juego-badge"><i class="fas fa-exclamation-triangle"></i> Requiere biblioteca</div>' : ''}
                </div>
            `;
        });
        
        grid.innerHTML = html;
    }

    // ===== CONFIGURAR PESTAÑAS =====
    function setupTabs() {
        const tabs = document.querySelectorAll('.platform-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentPlatform = tab.dataset.platform;
                renderGames();
            });
        });
    }

    // ===== CONFIGURAR BÚSQUEDA =====
    function setupSearch() {
        const searchInput = document.getElementById('searchGames');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value;
                renderGames();
            });
        }
    }

    // ===== MENÚ GASTRONÓMICO =====
    function setupMenuGastronomico() {
        const tabs = document.querySelectorAll('.gastro-tab');
        const grid = document.getElementById('gastroGrid');
        
        if (!tabs.length || !grid) return;
        
        let categoriaActual = 'baguettes';
        
        function renderizarCategoria(categoria) {
            const productos = menuData[categoria] || [];
            
            if (productos.length === 0) {
                grid.innerHTML = '<p style="text-align: center; color: var(--text-dim);">No hay productos</p>';
                return;
            }
            
            let html = '';
            productos.forEach(producto => {
                html += `
                    <div class="producto-card">
                        <h3 class="producto-nombre">${producto.nombre}</h3>
                        <p class="producto-descripcion">${producto.descripcion}</p>
                        <div class="producto-footer">
                            <span class="producto-precio">₡${producto.precio.toLocaleString()}</span>
                            <button class="btn-agregar" onclick="agregarPedido('${producto.nombre}', ${producto.precio})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
            });
            
            grid.innerHTML = html;
        }
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                categoriaActual = tab.dataset.categoria;
                renderizarCategoria(categoriaActual);
            });
        });
        
        renderizarCategoria('baguettes');
    }

    window.agregarPedido = function(nombre, precio) {
        alert(`🍔 Agregado: ${nombre} - ₡${precio.toLocaleString()}`);
    };

    // ===== HEADER SCROLL =====
    function setupHeader() {
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 100);
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
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });
        }
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
                beneficios = ['4h gratis', 'Comida gratis'];
                colorClass = 'elite';
            } else {
                nivel = 'VIP LEYENDA';
                descuento = '50% DESCUENTO';
                beneficios = ['6h gratis', 'Comida gratis', 'Torneos gratis'];
                colorClass = 'leyenda';
            }
            
            let html = `
                <div class="nivel-obtenido ${colorClass}">${nivel}</div>
                <div style="font-size:1.8rem; color:#ffd700;">${descuento}</div>
                <div class="beneficio-preview">
            `;
            
            beneficios.forEach(b => html += `<span class="beneficio-tag">${b}</span>`);
            html += '</div>';
            
            resultadoDiv.innerHTML = html;
        }
        
        actualizarNivel(parseInt(horasRange.value));
        horasRange.addEventListener('input', (e) => actualizarNivel(parseInt(e.target.value)));
    }

    // ===== REGISTRO VIP CON ENVÍO A TI (WhatsApp + Email) =====
    function setupVipRegistro() {
        const form = document.getElementById('vipFormRegistro');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Recoger datos del formulario
            const inputs = form.querySelectorAll('input, select');
            let nombre = '', email = '', whatsapp = '', comoConocio = '';
            
            inputs.forEach(input => {
                const placeholder = input.placeholder?.toLowerCase() || '';
                if (placeholder.includes('nombre')) nombre = input.value;
                else if (placeholder.includes('email')) email = input.value;
                else if (placeholder.includes('whatsapp') || placeholder.includes('tel')) whatsapp = input.value;
                else if (input.tagName === 'SELECT') comoConocio = input.value;
            });
            
            // Si no encuentra por placeholder, intenta por orden
            if (!nombre && inputs[0]) nombre = inputs[0].value;
            if (!email && inputs[1]) email = inputs[1].value;
            if (!whatsapp && inputs[2]) whatsapp = inputs[2].value;
            if (!comoConocio && inputs[3]) comoConocio = inputs[3].value;
            
            const fecha = new Date().toLocaleString();
            
            // 1️⃣ Mensaje para el cliente (solo confirmación)
            alert('✅ ¡Registro exitoso! Bienvenido al Programa VIP');
            
            // 2️⃣ ENVÍO A TI POR WHATSAPP
            const mensajeWhatsApp = `🎮 *NUEVO REGISTRO VIP* 🎮%0A%0A👤 *Nombre:* ${nombre}%0A📧 *Email:* ${email}%0A📱 *WhatsApp:* ${whatsapp}%0A📝 *Cómo nos conoció:* ${comoConocio || 'No especificado'}%0A📅 *Fecha:* ${fecha}`;
            
            window.open(`https://wa.me/${TU_WHATSAPP}?text=${mensajeWhatsApp}`, '_blank');
            
            // 3️⃣ ENVÍO A TI POR EMAIL (usando FormSubmit)
            const emailContent = `
                Nombre: ${nombre}
                Email: ${email}
                WhatsApp: ${whatsapp}
                Cómo nos conoció: ${comoConocio || 'No especificado'}
                Fecha: ${fecha}
            `;
            
            // Crear un enlace mailto
            window.open(`mailto:${TU_EMAIL}?subject=🎮 Nuevo Registro VIP&body=${encodeURIComponent(emailContent)}`, '_blank');
            
            // 4️⃣ Guardar copia local (respaldo)
            guardarRegistroLocal(nombre, email, whatsapp, comoConocio, fecha);
            
            // Limpiar formulario
            form.reset();
        });
    }

    // ===== GUARDAR REGISTRO LOCALMENTE =====
    function guardarRegistroLocal(nombre, email, whatsapp, comoConocio, fecha) {
        let registros = JSON.parse(localStorage.getItem('vipRegistros') || '[]');
        registros.push({ nombre, email, whatsapp, comoConocio, fecha });
        localStorage.setItem('vipRegistros', JSON.stringify(registros));
        console.log('📝 Registro guardado localmente');
    }

    // ===== EXPORTAR TODOS LOS REGISTROS A EXCEL (para ti) =====
    window.exportarRegistrosVIP = function() {
        const registros = JSON.parse(localStorage.getItem('vipRegistros') || '[]');
        
        if (registros.length === 0) {
            alert('No hay registros para exportar');
            return;
        }
        
        let csv = 'Nombre,Email,WhatsApp,Cómo nos conoció,Fecha\n';
        registros.forEach(r => {
            csv += `${r.nombre},${r.email},${r.whatsapp},${r.comoConocio || ''},${r.fecha}\n`;
        });
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `todos_registros_vip_${new Date().toISOString().slice(0,10)}.csv`;
        a.click();
        
        alert(`✅ Exportados ${registros.length} registros a Excel`);
    };

    // ===== INICIALIZAR =====
    function init() {
        console.log('🎮 Arcade Cuba - Inicializando...');
        console.log('📱 WhatsApp configurado: +' + TU_WHATSAPP);
        console.log('📧 Email configurado: ' + TU_EMAIL);
        
        prepareAllGames();
        updateTabCounts();
        renderGames();
        
        setupTabs();
        setupSearch();
        setupHeader();
        setupMobileMenu();
        setupMenuGastronomico();
        setupVipSimulador();
        setupVipRegistro();
        
        // Añadir botón invisible para exportar (opcional)
        console.log('💡 Para exportar registros, usa: exportarRegistrosVIP() en la consola');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();