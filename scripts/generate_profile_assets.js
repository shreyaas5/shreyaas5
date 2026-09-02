const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "assets");
const now = new Date();
const buildStamp = now.toISOString().replace("T", " ").slice(0, 16) + " UTC";

function writeAsset(name, content) {
  fs.mkdirSync(assetsDir, { recursive: true });
  fs.writeFileSync(path.join(assetsDir, name), content.trimStart());
}

function svg(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n${content}\n`;
}

writeAsset(
  "mission-control.svg",
  svg(`<svg width="1200" height="440" viewBox="0 0 1200 440" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Mission Control profile banner for Shreyaas Sachdeva</title>
  <desc id="desc">Animated GitHub profile banner styled as a space mission control interface.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#020403"/><stop offset="0.42" stop-color="#07130F"/><stop offset="0.72" stop-color="#190D08"/><stop offset="1" stop-color="#020403"/>
    </linearGradient>
    <radialGradient id="core" cx="50%" cy="50%" r="50%">
      <stop stop-color="#F7FFE2"/><stop offset="0.34" stop-color="#76F7BD"/><stop offset="0.72" stop-color="#17604D"/><stop offset="1" stop-color="#09231E"/>
    </radialGradient>
    <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
      <stop stop-color="#7DFCC3" stop-opacity="0"/><stop offset="0.5" stop-color="#7DFCC3" stop-opacity=".48"/><stop offset="1" stop-color="#7DFCC3" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
      <path d="M 34 0 L 0 0 0 34" fill="none" stroke="#B7F7D8" stroke-opacity=".075"/>
    </pattern>
    <filter id="hardGlow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
      .white { fill: #F4FFF8; } .green { fill: #7DFCC3; } .red { fill: #FF5A3D; } .gold { fill: #FFCF5A; } .muted { fill: #7EA390; }
      .panel { fill: #06100C; stroke: #7DFCC3; stroke-opacity: .42; }
      .thin { stroke: #7DFCC3; stroke-opacity: .35; }
      .scan { animation: scan 5s linear infinite; }
      .spin { transform-origin: 880px 218px; animation: spin 21s linear infinite; }
      .spinFast { transform-origin: 880px 218px; animation: spin 9s linear infinite reverse; }
      .spinSlow { transform-origin: 880px 218px; animation: spin 37s linear infinite; }
      .blink { animation: blink 1.05s steps(2, start) infinite; }
      .pulse { animation: pulse 2.2s ease-in-out infinite; }
      .dash { stroke-dasharray: 8 12; animation: dash 18s linear infinite; }
      .float { animation: float 7s ease-in-out infinite alternate; }
      .type1 { animation: reveal1 8s steps(34) infinite; }
      .type2 { animation: reveal2 8s steps(28) infinite; }
      .type3 { animation: reveal3 8s steps(39) infinite; }
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes scan { from { transform: translateY(-460px); } to { transform: translateY(460px); } }
      @keyframes blink { 0%, 48% { opacity: 1; } 49%, 100% { opacity: 0; } }
      @keyframes pulse { 0%, 100% { opacity: .42; } 50% { opacity: 1; } }
      @keyframes dash { to { stroke-dashoffset: -220; } }
      @keyframes float { from { transform: translateY(-8px); } to { transform: translateY(8px); } }
      @keyframes reveal1 { 0%, 8% { clip-path: inset(0 100% 0 0); } 25%, 100% { clip-path: inset(0 0 0 0); } }
      @keyframes reveal2 { 0%, 30% { clip-path: inset(0 100% 0 0); } 48%, 100% { clip-path: inset(0 0 0 0); } }
      @keyframes reveal3 { 0%, 52% { clip-path: inset(0 100% 0 0); } 78%, 100% { clip-path: inset(0 0 0 0); } }
    </style>
  </defs>
  <rect width="1200" height="440" fill="url(#bg)"/>
  <rect width="1200" height="440" fill="url(#grid)"/>
  <rect class="scan" width="1200" height="122" fill="url(#sweep)" opacity=".5"/>
  <path d="M-40 354 C198 254 346 398 522 282 C703 163 846 244 1240 106" stroke="#FF5A3D" stroke-opacity=".20" stroke-width="2"/>
  <path d="M-60 84 C160 178 318 34 492 108 C690 192 802 348 1260 254" stroke="#7DFCC3" stroke-opacity=".16" stroke-width="2"/>
  <path d="M0 405 H1200" stroke="#7DFCC3" stroke-opacity=".18"/>
  <g class="mono">
    <text x="52" y="54" font-size="13" letter-spacing="3" class="green">MISSION CONTROL // SHREYAAS5</text>
    <text x="52" y="120" font-size="52" font-weight="900" class="white">SHREYAAS.SYS</text>
    <text x="56" y="156" font-size="16" letter-spacing="2" class="gold">AUTONOMOUS INTELLIGENCE LAB</text>
    <text x="56" y="190" font-size="18" class="white type1">&gt; initializing multi-agent runtime...</text>
    <text x="56" y="222" font-size="18" class="white type2">&gt; locking onto orbit: systems</text>
    <text x="56" y="254" font-size="18" class="white type3">&gt; objective: ship weird useful software</text>
    <rect x="56" y="276" width="448" height="94" rx="10" class="panel"/>
    <text x="78" y="310" font-size="15" class="green">CLASSIFIED BUILD CHANNEL</text>
    <text x="78" y="338" font-size="14" class="muted">agents | devtools | simulations | automation</text>
    <text x="78" y="362" font-size="14" class="muted">asset build: ${buildStamp}</text>
    <rect x="455" y="335" width="12" height="22" fill="#7DFCC3" class="blink"/>
  </g>
  <g class="mono" transform="translate(558 54)">
    <rect width="210" height="316" rx="12" class="panel"/>
    <text x="22" y="36" font-size="12" letter-spacing="2" class="green">TELEMETRY</text>
    <text x="22" y="75" font-size="13" class="muted">AGENT CORE</text><rect x="22" y="88" width="164" height="10" fill="#142B23" rx="5"/><rect x="22" y="88" width="144" height="10" fill="#7DFCC3" rx="5" class="pulse"/>
    <text x="22" y="125" font-size="13" class="muted">SYSTEM DESIGN</text><rect x="22" y="138" width="164" height="10" fill="#142B23" rx="5"/><rect x="22" y="138" width="126" height="10" fill="#FFCF5A" rx="5" class="pulse"/>
    <text x="22" y="175" font-size="13" class="muted">ORBITAL IDEAS</text><rect x="22" y="188" width="164" height="10" fill="#142B23" rx="5"/><rect x="22" y="188" width="152" height="10" fill="#FF5A3D" rx="5" class="pulse"/>
    <text x="22" y="236" font-size="12" class="green">SIGNALS</text>
    <text x="22" y="260" font-size="13" class="white">01: online</text><text x="22" y="282" font-size="13" class="white">02: building</text><text x="22" y="304" font-size="13" class="white">03: unstable ideas welcome</text>
  </g>
  <g filter="url(#hardGlow)">
    <circle cx="880" cy="218" r="58" fill="url(#core)" class="float"/>
    <circle cx="880" cy="218" r="96" stroke="#7DFCC3" stroke-opacity=".35"/><circle cx="880" cy="218" r="134" stroke="#FFCF5A" stroke-opacity=".24"/><circle cx="880" cy="218" r="174" stroke="#FF5A3D" stroke-opacity=".18"/><circle cx="880" cy="218" r="205" stroke="#7DFCC3" stroke-opacity=".12" class="dash"/>
    <g class="spin"><circle cx="976" cy="218" r="7" fill="#7DFCC3"/><path d="M988 218 h44" stroke="#7DFCC3" stroke-opacity=".6"/></g>
    <g class="spinFast"><circle cx="880" cy="84" r="5" fill="#FFCF5A"/><circle cx="880" cy="352" r="4" fill="#FFCF5A"/></g>
    <g class="spinSlow"><circle cx="705" cy="218" r="8" fill="#FF5A3D"/><circle cx="1055" cy="218" r="5" fill="#FF5A3D"/></g>
  </g>
  <g class="mono">
    <line x1="880" y1="218" x2="1092" y2="118" class="thin"/><circle cx="1092" cy="118" r="5" fill="#7DFCC3" class="pulse"/><text x="1110" y="123" font-size="13" class="green">NODE AWAKE</text>
    <line x1="880" y1="218" x2="1084" y2="306" class="thin"/><circle cx="1084" cy="306" r="5" fill="#FFCF5A" class="pulse"/><text x="1102" y="311" font-size="13" class="gold">SIGNAL LOCK</text>
    <line x1="880" y1="218" x2="1008" y2="380" class="thin"/><circle cx="1008" cy="380" r="5" fill="#FF5A3D" class="pulse"/><text x="1026" y="385" font-size="13" class="red">BURN READY</text>
  </g>
</svg>`)
);

writeAsset(
  "mission-radar.svg",
  svg(`<svg width="720" height="380" viewBox="0 0 720 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Animated mission radar</title>
  <desc id="desc">A radar interface showing active engineering signals.</desc>
  <defs>
    <radialGradient id="fade" cx="50%" cy="50%" r="50%"><stop stop-color="#7DFCC3" stop-opacity=".26"/><stop offset=".58" stop-color="#7DFCC3" stop-opacity=".07"/><stop offset="1" stop-color="#7DFCC3" stop-opacity="0"/></radialGradient>
    <style>
      .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
      .ring { stroke:#7DFCC3; stroke-opacity:.26; fill:none; } .node { fill:#0B1511; stroke:#7DFCC3; stroke-opacity:.82; }
      .sweep { transform-origin:360px 190px; animation: spin 4.8s linear infinite; }
      .orbit { transform-origin:360px 190px; animation: spin 18s linear infinite; } .orbit2 { transform-origin:360px 190px; animation: spin 27s linear infinite reverse; }
      .pulse { animation:pulse 2s ease-in-out infinite; } .dash { stroke-dasharray:5 10; animation: dash 12s linear infinite; }
      @keyframes spin { to { transform: rotate(360deg); } } @keyframes pulse { 0%,100% { opacity:.45; } 50% { opacity:1; } } @keyframes dash { to { stroke-dashoffset:-160; } }
    </style>
  </defs>
  <rect width="720" height="380" rx="18" fill="#050706"/><rect x="18" y="18" width="684" height="344" rx="14" fill="#07110D" stroke="#7DFCC3" stroke-opacity=".32"/>
  <circle cx="360" cy="190" r="158" fill="url(#fade)"/><circle cx="360" cy="190" r="42" class="ring"/><circle cx="360" cy="190" r="82" class="ring"/><circle cx="360" cy="190" r="122" class="ring"/><circle cx="360" cy="190" r="158" class="ring dash"/>
  <line x1="202" y1="190" x2="518" y2="190" stroke="#7DFCC3" stroke-opacity=".2"/><line x1="360" y1="32" x2="360" y2="348" stroke="#7DFCC3" stroke-opacity=".2"/>
  <path class="sweep" d="M360 190 L360 32 A158 158 0 0 1 497 111 Z" fill="#7DFCC3" opacity=".20"/>
  <g class="orbit"><circle cx="482" cy="190" r="4" fill="#FFCF5A"/><circle cx="238" cy="190" r="3" fill="#FFCF5A"/></g><g class="orbit2"><circle cx="360" cy="68" r="4" fill="#FF5A3D"/><circle cx="360" cy="312" r="3" fill="#FF5A3D"/></g>
  <g class="mono" font-size="12" fill="#DFFFF0">
    <text x="36" y="50" fill="#7DFCC3" letter-spacing="2">SIGNAL MAP // ACTIVE LOCKS</text>
    <circle cx="286" cy="136" r="8" class="node pulse"/><text x="218" y="124">agents</text>
    <circle cx="472" cy="150" r="8" class="node pulse"/><text x="490" y="154">devtools</text>
    <circle cx="410" cy="264" r="8" class="node pulse"/><text x="428" y="269">systems</text>
    <circle cx="238" cy="238" r="8" class="node pulse"/><text x="152" y="243">astronomy</text>
    <circle cx="350" cy="190" r="7" fill="#F4FFF8"/><text x="374" y="195" fill="#7DFCC3">shreyaas5</text>
    <text x="36" y="332" fill="#7C9B8D">tracking ideas that turn into shipped experiments</text>
  </g>
</svg>`)
);

writeAsset(
  "stack-console.svg",
  svg(`<svg width="720" height="380" viewBox="0 0 720 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Engineering stack console</title>
  <desc id="desc">A terminal-like SVG showing Shreyaas Sachdeva's engineering stack and build focus.</desc>
  <defs>
    <style>
      .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
      .cursor { animation: blink 1s steps(2, start) infinite; } .meter { animation: pulse 2.4s ease-in-out infinite; }
      .line1 { animation: reveal1 7.5s steps(45) infinite; } .line2 { animation: reveal2 7.5s steps(46) infinite; } .line3 { animation: reveal3 7.5s steps(52) infinite; }
      @keyframes blink { 0%,48% { opacity:1; } 49%,100% { opacity:0; } } @keyframes pulse { 0%,100% { opacity:.68; } 50% { opacity:1; } }
      @keyframes reveal1 { 0%,8% { clip-path: inset(0 100% 0 0); } 30%,100% { clip-path: inset(0 0 0 0); } }
      @keyframes reveal2 { 0%,34% { clip-path: inset(0 100% 0 0); } 56%,100% { clip-path: inset(0 0 0 0); } }
      @keyframes reveal3 { 0%,60% { clip-path: inset(0 100% 0 0); } 86%,100% { clip-path: inset(0 0 0 0); } }
    </style>
  </defs>
  <rect width="720" height="380" rx="18" fill="#080A09"/><rect x="22" y="22" width="676" height="336" rx="12" fill="#0C120F" stroke="#7DFCC3" stroke-opacity=".38"/>
  <circle cx="50" cy="48" r="6" fill="#FF5A3D"/><circle cx="72" cy="48" r="6" fill="#FFCF5A"/><circle cx="94" cy="48" r="6" fill="#7DFCC3"/>
  <g class="mono">
    <text x="48" y="90" font-size="15" fill="#7DFCC3">$ ./launch_profile --callsign=shreyaas5 --mode=visual-overkill</text>
    <text x="48" y="126" font-size="15" fill="#EFFFF6" class="line1">&gt; loading modules: python cpp js react actions</text>
    <text x="48" y="158" font-size="15" fill="#EFFFF6" class="line2">&gt; target systems: agents, tools, simulations</text>
    <text x="48" y="190" font-size="15" fill="#EFFFF6" class="line3">&gt; output preference: shipped demos over empty flex</text>
    <text x="48" y="238" font-size="12" fill="#7C9B8D">BUILD PRESSURE</text><rect x="48" y="252" width="580" height="12" fill="#142B23" rx="6"/><rect x="48" y="252" width="498" height="12" fill="#7DFCC3" rx="6" class="meter"/>
    <text x="48" y="304" font-size="12" fill="#7C9B8D">CURRENT STATE</text>
    <text x="48" y="328" font-size="15" fill="#FFCF5A">online / curious / building / mildly dangerous to boring READMEs</text>
    <rect x="630" y="309" width="13" height="23" fill="#7DFCC3" class="cursor"/>
  </g>
</svg>`)
);

writeAsset(
  "signal-strip.svg",
  svg(`<svg width="1200" height="120" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Animated transmission strip</title>
  <desc id="desc">A thin animated transmission strip for the GitHub profile README.</desc>
  <defs>
    <linearGradient id="bar" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#7DFCC3" stop-opacity=".05"/><stop offset=".35" stop-color="#7DFCC3" stop-opacity=".38"/><stop offset=".65" stop-color="#FFCF5A" stop-opacity=".36"/><stop offset="1" stop-color="#FF5A3D" stop-opacity=".05"/></linearGradient>
    <style>
      .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
      .move { animation: move 6s linear infinite; } .blink { animation: blink 1.1s steps(2,start) infinite; }
      @keyframes move { from { transform: translateX(-220px); } to { transform: translateX(1220px); } }
      @keyframes blink { 0%,48% { opacity:1; } 49%,100% { opacity:.2; } }
    </style>
  </defs>
  <rect width="1200" height="120" rx="16" fill="#050706"/><rect x="18" y="18" width="1164" height="84" rx="10" fill="#08120E" stroke="#7DFCC3" stroke-opacity=".3"/>
  <rect y="53" width="1200" height="14" fill="url(#bar)"/><rect class="move" y="48" width="190" height="24" fill="#7DFCC3" opacity=".18"/>
  <g class="mono" font-size="15">
    <text x="44" y="48" fill="#7DFCC3">TRANSMISSION</text><text x="190" y="48" fill="#7C9B8D">github.com/shreyaas5</text>
    <text x="44" y="82" fill="#F4FFF8">agents // systems // astronomy // developer tools // experiments that actually run</text>
    <circle cx="1125" cy="60" r="7" fill="#FF5A3D" class="blink"/><text x="1142" y="65" fill="#FFCF5A">LIVE</text>
  </g>
</svg>`)
);
