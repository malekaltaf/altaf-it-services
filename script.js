// ═══════════════════════════════════════════════
//  CATALOG DATA — local images from category/
// ═══════════════════════════════════════════════
const catalogData = {
  "Cables": {
    desc: "Power, data & display cables for every IT setup",
    items: [
      { title: "3-Pin Power Cord",       desc: "Standard IEC C13 power cord for desktop PCs & monitors",    img: "category/cables/3pin_powercord.jpg" },
      { title: "4-Pin to SATA Adapter",  desc: "Molex 4-pin to SATA power converter for older drives",       img: "category/cables/4pin_to_sata.jpg" },
      { title: "External HDD Cable",     desc: "USB 3.0 data & power cable for portable hard drives",        img: "category/cables/external_hdd_cable.jpg" },
      { title: "HDMI Cable",             desc: "High-definition audio/video cable for monitors & TVs",        img: "category/cables/hdmi.jpg" },
      { title: "Power Strip",            desc: "Multi-outlet surge-protected power extension board",          img: "category/cables/power_strip1.jpg" },
      { title: "Round Power Strip",      desc: "Compact circular multi-socket power strip",                   img: "category/cables/round_powerstrip.jpg" },
      { title: "SATA Data Cable",        desc: "7-pin SATA III cable for HDD & SSD connectivity",            img: "category/cables/sata.jpg" },
      { title: "USB Extension Cable",    desc: "Male-to-female USB 2.0 extension for peripherals",           img: "category/cables/usb_extention.jpg" },
      { title: "USB to LAN Adapter",     desc: "USB 3.0 to RJ45 Gigabit Ethernet network adapter",           img: "category/cables/usb_to_lan.jpg" },
      { title: "VGA Cable (White)",      desc: "15-pin VGA cable for monitors & projector connectivity",      img: "category/cables/vga.jpg" },
      { title: "VGA Cable (Black)",      desc: "Heavy-duty black VGA cable for commercial displays",          img: "category/cables/vga_black.jpg" }
    ]
  },
  "Desktop": {
    desc: "Refurbished & enterprise desktops ready for corporate deployment",
    items: [
      { title: "Desktop PC — Unit 1",    desc: "Refurbished office desktop ready for corporate deployment",   img: "category/desktop/desktop1.jpg" },
      { title: "Desktop PC — Unit 2",    desc: "High-performance desktop for everyday business tasks",        img: "category/desktop/desktop2.jpg" },
      { title: "Desktop PC — Unit 3",    desc: "Compact form-factor desktop with modern internals",           img: "category/desktop/desktop3.jpg" },
      { title: "Desktop PC — Unit 4",    desc: "Multi-core workstation desktop for demanding workflows",      img: "category/desktop/desktop4.jpg" },
      { title: "Desktop PC — Unit 5",    desc: "Tower PC fully tested & prepped for office use",              img: "category/desktop/desktop5.jpg" },
      { title: "Desktop PC — Unit 6",    desc: "Reliable desktop system with full AMC support",               img: "category/desktop/desktop6.jpg" },
      { title: "Desktop PC — Unit 7",    desc: "Enterprise-grade desktop sourced from verified vendors",      img: "category/desktop/desktop7.jpg" },
      { title: "LCD Monitor",            desc: "Full-HD flat-panel monitor with ergonomic stand",              img: "category/desktop/moniter1.jpg" },
      { title: "Dell OptiPlex — Unit 1", desc: "Dell OptiPlex SFF desktop ideal for office environments",    img: "category/desktop/optiplex1.jpg" },
      { title: "Dell OptiPlex — Unit 2", desc: "Dell OptiPlex with Core i5/i7 configuration",                img: "category/desktop/optiplex2.jpg" },
      { title: "Dell OptiPlex — Unit 3", desc: "Compact OptiPlex mini PC for space-saving deployments",      img: "category/desktop/optiplex3.jpg" },
      { title: "Dell OptiPlex — Unit 4", desc: "OptiPlex tower with expandable storage options",              img: "category/desktop/optiplex4.jpg" }
    ]
  },
  "Laptop": {
    desc: "Business laptops & Chromebooks for mobile productivity",
    items: [
      { title: "Chromebook — Unit 1",    desc: "Fast-booting Google Chromebook for cloud & web workloads",   img: "category/laptop/chromebook1.jpg" },
      { title: "Chromebook — Unit 2",    desc: "Lightweight Chromebook with long battery life",               img: "category/laptop/chromebook2.jpg" },
      { title: "Laptop — Unit 1",        desc: "Business-grade laptop with SSD & Full HD display",            img: "category/laptop/laptop1.jpg" },
      { title: "Laptop — Unit 2",        desc: "Slim executive notebook with biometric security",             img: "category/laptop/laptop2.jpg" }
    ]
  },
  "Network": {
    desc: "Routers, extenders & dongles for reliable connectivity",
    items: [
      { title: "Wi-Fi Range Extender",   desc: "Dual-band wireless signal booster for large offices",         img: "category/network/extender_2.jpg" },
      { title: "Wireless Router",        desc: "High-speed Wi-Fi router with multi-device support",           img: "category/network/router.jpg" },
      { title: "Router & Cable Box Set", desc: "Complete ISP gateway & modem combo for office setups",        img: "category/network/router_cable_box.jpg" },
      { title: "Router + Extender Kit",  desc: "Mesh-ready router bundled with range extender",               img: "category/network/router_extender.jpg" },
      { title: "USB Wi-Fi Dongle",       desc: "Plug-and-play wireless USB adapter for desktops & laptops",   img: "category/network/usb_dongle.jpg" }
    ]
  },
  "PC Build": {
    desc: "Curated component bundles for custom PC assembly",
    items: [
      { title: "PC Parts Bundle — 1",    desc: "Curated component set for custom PC assembly",                img: "category/pc build/pcparts1.jpg" },
      { title: "PC Parts Bundle — 2",    desc: "Mid-range build parts: CPU, RAM, motherboard",               img: "category/pc build/pcparts2.jpg" },
      { title: "PC Parts Bundle — 3",    desc: "High-performance parts for workstation-class builds",         img: "category/pc build/pcparts3.jpg" },
      { title: "PC Parts Bundle — 4",    desc: "Storage & GPU upgrade kit for existing desktops",            img: "category/pc build/pcparts4.jpg" },
      { title: "PC Parts Bundle — 5",    desc: "Complete build kit — from PSU to case & cooling",             img: "category/pc build/pcparts5.jpg" }
    ]
  },
  "Peripherals": {
    desc: "Keyboards, mice, deskpads & accessories for ergonomic workspaces",
    items: [
      { title: "Desk Pad / Mouse Mat",   desc: "Large extended desk pad for keyboard & mouse comfort",        img: "category/peripherials/deskpad.jpg" },
      { title: "Keyboard — Unit 1",      desc: "Wired USB keyboard for reliable office typing",               img: "category/peripherials/keyboard1.jpg" },
      { title: "Keyboard — Unit 2",      desc: "Slim compact keyboard with quiet membrane keys",              img: "category/peripherials/keyboard2.jpg" },
      { title: "Keyboard — Unit 3",      desc: "Wireless keyboard with multi-device Bluetooth pairing",       img: "category/peripherials/keyboard3.jpg" },
      { title: "Keyboard — Unit 4",      desc: "Ergonomic keyboard with palm rest & multimedia keys",         img: "category/peripherials/keyboard4.jpg" },
      { title: "Mouse — Unit 1",         desc: "Optical USB mouse for accurate everyday computing",           img: "category/peripherials/mouse1.jpg" },
      { title: "Mouse — Unit 2",         desc: "Wireless ergonomic mouse with adjustable DPI",               img: "category/peripherials/mouse2.jpg" },
      { title: "Mouse — Unit 3",         desc: "Silent-click travel mouse with USB nano-receiver",            img: "category/peripherials/mouse3.jpg" }
    ]
  },
  "RAM": {
    desc: "DDR4 & DDR5 memory modules for desktops and servers",
    items: [
      { title: "RAM Module — Unit 1",    desc: "DDR4 desktop memory module for fast multitasking",            img: "category/ram/ram1.jpg" },
      { title: "RAM Module — Unit 2",    desc: "High-frequency RAM with heat-spreader for performance PCs",  img: "category/ram/ram2.jpg" },
      { title: "RAM Module — Unit 3",    desc: "Server-grade ECC memory for reliable uptime",                 img: "category/ram/ram3.jpg" }
    ]
  },
  "Storage": {
    desc: "HDDs, SSDs & optical drives for every capacity need",
    items: [
      { title: "Optical CD/DVD Drive",   desc: "Internal SATA DVD-RW drive for legacy system compatibility", img: "category/storage/cd_drive.jpg" },
      { title: "Hard Disk Drive — 1",    desc: "3.5\" desktop HDD for bulk data storage & backups",          img: "category/storage/hdd1.jpg" },
      { title: "Hard Disk Drive — 2",    desc: "High-capacity HDD suitable for NAS & RAID arrays",           img: "category/storage/hdd2.jpg" },
      { title: "Hard Disk Drive — 3",    desc: "Enterprise HDD with 24/7 continuous operation rating",       img: "category/storage/hdd3.jpg" }
    ]
  },
  "Tools": {
    desc: "Technician essentials — blowers, paste, ties & full toolkits",
    items: [
      { title: "Cable Ties / Zip Ties",  desc: "Nylon cable management ties for neat rack installations",    img: "category/tools/cabletie.jpg" },
      { title: "PC Air Blower",          desc: "Electric ESD-safe blower for dust removal from components",  img: "category/tools/pc_blower.jpg" },
      { title: "Thermal Paste",          desc: "High-conductivity compound for CPU/GPU heat transfer",        img: "category/tools/therman_paste.jpg" },
      { title: "IT Technician Toolbox",  desc: "Complete field service toolkit for on-site IT repairs",       img: "category/tools/toolbox.jpg" },
      { title: "UPS — Power Backup",     desc: "Uninterruptible power supply for zero-downtime protection",  img: "category/tools/ups.jpg" }
    ]
  }
};

// ═══════════════════════════════════════════════
//  DOM REFS
// ═══════════════════════════════════════════════
const preloader     = document.getElementById('preloader');
const preloaderBar  = document.getElementById('preloaderBar');
const preloaderLbl  = document.getElementById('preloaderLabel');
const appRoot       = document.getElementById('appRoot');
const navWrapper    = document.getElementById('navWrapper');
const cardGrid      = document.getElementById('cardGrid');
const sectionTitle  = document.getElementById('sectionTitle');
const sectionCount  = document.getElementById('sectionCount');
const sectionDesc   = document.getElementById('sectionDesc');
const pills         = document.querySelectorAll('.pill');

// ═══════════════════════════════════════════════
//  PRELOADER
// ═══════════════════════════════════════════════
function runPreloader() {
  const steps = [
    { pct: 30,  label: 'Loading catalog…',    delay: 200  },
    { pct: 65,  label: 'Mapping categories…', delay: 600  },
    { pct: 88,  label: 'Preparing images…',   delay: 1000 },
    { pct: 100, label: 'Ready!',              delay: 1400 }
  ];

  steps.forEach(({ pct, label, delay }) => {
    setTimeout(() => {
      preloaderBar.style.width = pct + '%';
      preloaderLbl.textContent = label;
    }, delay);
  });

  setTimeout(() => {
    preloader.classList.add('fade-out');
    appRoot.classList.remove('app-hidden');
    // Small tick to trigger CSS transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => appRoot.classList.add('app-visible'));
    });
    // Render the default (first active) category
    const activePill = document.querySelector('.pill.active');
    renderCards(activePill ? activePill.getAttribute('data-category') : 'Cables');
  }, 1900);
}

// ═══════════════════════════════════════════════
//  SVG FALLBACK
// ═══════════════════════════════════════════════
function getFallbackSVG(title, category) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#001f3f"/>
        <stop offset="100%" stop-color="#003a6b"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#g)"/>
    <text x="50%" y="44%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="system-ui" font-size="22" font-weight="700">${title}</text>
    <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#00c6ff" font-family="system-ui" font-size="14" opacity="0.8">${category.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ═══════════════════════════════════════════════
//  RENDER CARDS
// ═══════════════════════════════════════════════
function renderCards(category) {
  // Match key case-insensitively
  const matchedKey = Object.keys(catalogData).find(
    k => k.toLowerCase() === (category || '').toLowerCase()
  ) || category;

  const cat = catalogData[matchedKey];
  const items = cat ? cat.items : [];

  // Update section header
  sectionTitle.textContent = matchedKey;
  sectionCount.textContent = items.length + ' item' + (items.length !== 1 ? 's' : '');
  sectionDesc.textContent  = cat ? cat.desc : '';

  // Clear grid
  cardGrid.innerHTML = '';

  if (!items.length) {
    cardGrid.innerHTML = '<p class="grid-empty">No items found for this category.</p>';
    return;
  }

  items.forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.style.animationDelay = `${i * 60}ms`;

    const fallback = getFallbackSVG(item.title, matchedKey);

    card.innerHTML = `
      <span class="card-badge">${matchedKey}</span>
      <img
        src="${item.img}"
        alt="${item.title}"
        class="card-img"
        loading="lazy"
        onerror="this.onerror=null;this.src='${fallback}';"
      />
      <div class="card-overlay">
        <h2 class="card-title">${item.title}</h2>
        <p class="card-desc">${item.desc}</p>
      </div>
    `;

    cardGrid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════
//  PILL CLICK HANDLER
// ═══════════════════════════════════════════════
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    renderCards(pill.getAttribute('data-category'));

    // Smooth scroll to catalog
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ═══════════════════════════════════════════════
//  STICKY NAV SHADOW ON SCROLL
// ═══════════════════════════════════════════════
window.addEventListener('scroll', () => {
  navWrapper.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ═══════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════
runPreloader();