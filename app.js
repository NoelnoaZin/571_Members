// 571 / STEPINTER — shared JS
// Default members (mirrors src/data/members.ts)
const DEFAULT_MEMBERS = [
  { name: "Zino Sabudbob",   role: "Founder",        facebookLink: "https://facebook.com/alex.carter",   status: "online",  category: "Founder" },
  { name: "Jamie Lee",       role: "Squad Leader",   facebookLink: "https://facebook.com/jamie.lee",     status: "online",  category: "Leader"  },
  { name: "Morgan Diaz",     role: "Strategy Lead",  facebookLink: "https://facebook.com/morgan.diaz",   status: "offline", category: "Leader"  },
  { name: "Riley Kim",       role: "Sniper",         facebookLink: "https://facebook.com/riley.kim",     status: "online",  category: "Member"  },
  { name: "Taylor Brooks",   role: "Assault",        facebookLink: "https://facebook.com/taylor.brooks", status: "offline", category: "Member"  },
  { name: "Jordan Patel",    role: "Support",        facebookLink: "https://facebook.com/jordan.patel",  status: "online",  category: "Member"  },
  { name: "Casey Nguyen",    role: "Recon",          facebookLink: "https://facebook.com/casey.nguyen",  status: "online",  category: "Member"  },
  { name: "Sam Rivera",      role: "Flex",           facebookLink: "https://facebook.com/sam.rivera",    status: "offline", category: "Member"  },
];

const STORAGE_KEY = "stepinter:members:v1";
const ADMIN_PASSWORD = "571stepinter";
const ADMIN_SESSION_KEY = "stepinter:admin:unlocked:v1";
const DEFAULT_AVATAR = "assets/default-avatar.png";

function loadMembers(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){ const v = JSON.parse(raw); if(Array.isArray(v)) return v; }
  }catch(e){}
  return DEFAULT_MEMBERS.slice();
}
function saveMembers(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
function resetMembers(){
  localStorage.removeItem(STORAGE_KEY);
}

// SVG icons
const ICONS = {
  facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  youtube:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 6.5a3 3 0 0 0-2.1-2.1C18.6 4 12 4 12 4s-6.6 0-8.4.4A3 3 0 0 0 1.5 6.5 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C5.4 20 12 20 12 20s6.6 0 8.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.5z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>',
  msg:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  arrow:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  search:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  vol:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  play:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  pause:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  mute:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>',
  lock:     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  upload:   '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  trash:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  plus:     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  save:     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  reset:    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
  x:        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="6"/></svg>',
  shield:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
};

// Navbar (auto-injected on every page)
function buildNavbar(active){
  const unlocked = sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
  const links = [
    {href:"index.html", label:"Home", key:"home"},
    {href:"members.html", label:"Members", key:"members"},
    {href:"about.html", label:"About", key:"about"},
    {href:"gallery.html", label:"Gallery", key:"gallery"},
  ];
  if(unlocked) links.push({href:"admin.html", label:"Admin", key:"admin"});
  const linksHtml = links.map(l => `<li><a href="${l.href}" class="${l.key===active?'active':''}">${l.label}</a></li>`).join("");
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a class="brand glass" href="index.html">
          <span class="brand-logo"><img src="assets/logo.png" alt="571 / STEPINTER logo"/></span>
          <span class="brand-name">STEPINTER</span>
        </a>
        <ul class="nav-links glass">${linksHtml}</ul>
        <div class="music glass">
          <button id="musicPlayBtn" aria-label="Play music">${ICONS.play}</button>
          <button id="musicPauseBtn" aria-label="Pause music" disabled>${ICONS.pause}</button>
          <input id="musicVol" type="range" min="0" max="1" step="0.01" value="0.5" aria-label="Volume"/>
        </div>
      </div>
    </nav>
  `;
}

const YT_VIDEO_ID = "5i0GKTp8c1Q";
let _ytPlayer = null;
let _ytReady = false;

function loadYouTubeApi(){
  if(window.YT && window.YT.Player){
    _ytReady = true;
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.onYouTubeIframeAPIReady = () => {
      _ytReady = true;
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
  });
}

function createYouTubePlayer(volume){
  if(_ytPlayer) return Promise.resolve(_ytPlayer);
  return loadYouTubeApi().then(() => new Promise((resolve) => {
    const wrapper = document.getElementById("musicPlayer") || document.createElement("div");
    wrapper.id = "musicPlayer";
    wrapper.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;visibility:hidden;";
    wrapper.innerHTML = '<div id="musicFrame"></div>';
    document.body.appendChild(wrapper);

    _ytPlayer = new YT.Player("musicFrame", {
      height: "0",
      width: "0",
      videoId: YT_VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: YT_VIDEO_ID,
        modestbranding: 1,
        rel: 0,
        disablekb: 1,
      },
      events: {
        onReady: (event) => {
          event.target.setVolume(Math.round(volume * 100));
          resolve(_ytPlayer);
        }
      }
    });
  }));
}

function initNavbar(active){
  document.getElementById("nav-root").innerHTML = buildNavbar(active);
  const playBtn = document.getElementById("musicPlayBtn");
  const pauseBtn = document.getElementById("musicPauseBtn");
  const vol = document.getElementById("musicVol");
  let playing = false;

  async function ensurePlayer(){
    return await createYouTubePlayer(parseFloat(vol.value));
  }

  playBtn.addEventListener("click", async () => {
    const player = await ensurePlayer();
    player.playVideo();
    playing = true;
    playBtn.disabled = true;
    pauseBtn.disabled = false;
  });

  pauseBtn.addEventListener("click", () => {
    if(!_ytPlayer) return;
    _ytPlayer.pauseVideo();
    playing = false;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
  });

  vol.addEventListener("input", () => {
    const volume = Math.round(parseFloat(vol.value) * 100);
    if(_ytPlayer && _ytReady){
      _ytPlayer.setVolume(volume);
    }
  });

  // Secret shortcut: Ctrl+Shift+A → admin login
  document.addEventListener("keydown", (e) => {
    if(e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")){
      e.preventDefault();
      window.location.href = "admin.html";
    }
  });
}

// Particles
function initParticles(canvasId, density){
  const canvas = document.getElementById(canvasId);
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let w=0,h=0; const dpr = Math.min(window.devicePixelRatio||1, 2);
  function resize(){
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w*dpr; canvas.height = h*dpr;
    ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr, dpr);
  }
  resize(); window.addEventListener("resize", resize);
  const parts = Array.from({length:density}, () => ({
    x: Math.random()*w, y: Math.random()*h,
    r: Math.random()*1.6 + 0.4,
    vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25,
    a: Math.random()*0.6 + 0.2,
  }));
  function tick(){
    ctx.clearRect(0,0,w,h);
    for(const p of parts){
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>w) p.vx*=-1;
      if(p.y<0||p.y>h) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(255,200,110,${p.a})`;
      ctx.shadowColor = "rgba(240,170,70,0.8)"; ctx.shadowBlur = 8;
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();
}

// Toast
function toast(msg){
  let t = document.querySelector(".toast");
  if(!t){ t = document.createElement("div"); t.className="toast"; document.body.appendChild(t); }
  t.textContent = msg;
  requestAnimationFrame(()=>t.classList.add("show"));
  clearTimeout(t._h);
  t._h = setTimeout(()=>t.classList.remove("show"), 2400);
}

// Render member card HTML
function renderMemberCard(m, featured){
  const av = m.avatar || DEFAULT_AVATAR;
  const containClass = m.avatar ? "" : "contain";
  return `
    <div class="card glass">
      <div class="avatar ${featured?'large':''}">
        <img src="${av}" alt="${escapeHtml(m.name)}" class="${containClass}"/>
        <span class="dot ${m.status}"></span>
      </div>
      <div class="card-info">
        <h3>${escapeHtml(m.name)}</h3>
        <div class="role">${escapeHtml(m.role)}</div>
        <span class="badge">${escapeHtml(m.category)}</span>
      </div>
      <a class="fb" href="${escapeAttr(m.facebookLink)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(m.name)} on Facebook">${ICONS.facebook}</a>
    </div>
  `;
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function escapeAttr(s){ return escapeHtml(s); }
