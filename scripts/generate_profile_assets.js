const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "assets");
const buildStamp = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";

function writeAsset(name, content) {
  fs.mkdirSync(assetsDir, { recursive: true });
  fs.writeFileSync(path.join(assetsDir, name), content.trimStart());
}

function svg(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n${content}\n`;
}

const css = `
  .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; }
  .sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  .bg { fill: #0d1117; }
  .panel { fill: #161b22; stroke: #30363d; }
  .panel2 { fill: #0d1117; stroke: #30363d; }
  .text { fill: #f0f6fc; }
  .muted { fill: #8b949e; }
  .green { fill: #3fb950; }
  .blue { fill: #58a6ff; }
  .orange { fill: #d29922; }
  .purple { fill: #bc8cff; }
  .red { fill: #f85149; }
  .line { stroke: #30363d; }
  .pulse { animation: pulse 2.4s ease-in-out infinite; }
  .blink { animation: blink 1s steps(2,start) infinite; }
  .scan { animation: scan 4.5s linear infinite; }
  .float { animation: float 5s ease-in-out infinite alternate; }
  .type1 { animation: reveal1 7s steps(38) infinite; }
  .type2 { animation: reveal2 7s steps(42) infinite; }
  .type3 { animation: reveal3 7s steps(36) infinite; }
  @keyframes pulse { 0%, 100% { opacity: .45; } 50% { opacity: 1; } }
  @keyframes blink { 0%, 48% { opacity: 1; } 49%, 100% { opacity: 0; } }
  @keyframes scan { from { transform: translateX(-220px); } to { transform: translateX(1220px); } }
  @keyframes float { from { transform: translateY(-6px); } to { transform: translateY(6px); } }
  @keyframes reveal1 { 0%, 8% { clip-path: inset(0 100% 0 0); } 28%, 100% { clip-path: inset(0 0 0 0); } }
  @keyframes reveal2 { 0%, 34% { clip-path: inset(0 100% 0 0); } 58%, 100% { clip-path: inset(0 0 0 0); } }
  @keyframes reveal3 { 0%, 62% { clip-path: inset(0 100% 0 0); } 88%, 100% { clip-path: inset(0 0 0 0); } }
`;

writeAsset(
  "mission-control.svg",
  svg(`<svg width="1200" height="440" viewBox="0 0 1200 440" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">BuilderDex profile banner for shreyaas5</title>
  <desc id="desc">A GitHub themed animated profile banner styled like a builder index device.</desc>
  <defs>
    <linearGradient id="screen" x1="0" y1="0" x2="1200" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0d1117"/><stop offset=".55" stop-color="#161b22"/><stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#30363d" stroke-opacity=".65"/>
    </pattern>
    <filter id="glow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <style>${css}</style>
  </defs>
  <rect width="1200" height="440" rx="22" fill="url(#screen)"/>
  <rect width="1200" height="440" fill="url(#grid)" opacity=".28"/>
  <rect x="30" y="30" width="1140" height="380" rx="18" class="panel"/>
  <rect x="58" y="58" width="516" height="324" rx="14" class="panel2"/>
  <rect x="604" y="58" width="538" height="324" rx="14" class="panel2"/>
  <rect class="scan" x="0" y="58" width="160" height="324" fill="#58a6ff" opacity=".08"/>

  <g class="mono">
    <text x="82" y="98" font-size="14" letter-spacing="3" class="blue">BUILDERDEX // ENTRY #0005</text>
    <text x="82" y="156" font-size="56" font-weight="900" class="text">shreyaas5</text>
    <text x="86" y="194" font-size="18" class="muted">CS student. Building useful software and learning in public.</text>
    <text x="86" y="242" font-size="18" class="text type1">&gt; scanning repositories...</text>
    <text x="86" y="278" font-size="18" class="text type2">&gt; indexing agent/tooling experiments...</text>
    <text x="86" y="314" font-size="18" class="text type3">&gt; status: shipping small, improving fast</text>
    <rect x="86" y="337" width="13" height="25" class="green blink"/>
  </g>

  <g transform="translate(642 92)" class="sans">
    <rect x="0" y="0" width="192" height="116" rx="10" class="panel"/>
    <circle cx="26" cy="28" r="8" class="green pulse"/>
    <text x="48" y="34" font-size="15" font-weight="700" class="text">Active</text>
    <text x="22" y="70" font-size="13" class="muted">learning by building</text>
    <text x="22" y="94" font-size="13" class="blue">github.com/shreyaas5</text>

    <rect x="224" y="0" width="232" height="116" rx="10" class="panel"/>
    <text x="246" y="34" font-size="15" font-weight="700" class="text">Current Focus</text>
    <text x="246" y="68" font-size="13" class="muted">AI agents, dev tools, web apps</text>
    <text x="246" y="94" font-size="13" class="purple">less talk, more repos</text>

    <rect x="0" y="146" width="456" height="112" rx="10" class="panel"/>
    <text x="22" y="182" font-size="15" font-weight="700" class="text">Profile Rule</text>
    <text x="22" y="216" font-size="14" class="muted">No fake meters. No random claims. Show what exists, then upgrade it.</text>
    <text x="22" y="244" font-size="13" class="orange">last asset build: ${buildStamp}</text>
  </g>

  <g filter="url(#glow)" class="float">
    <rect x="950" y="110" width="110" height="110" rx="24" fill="#238636"/>
    <path d="M982 154h46M1005 131v46" stroke="#f0f6fc" stroke-width="12" stroke-linecap="round"/>
    <rect x="920" y="244" width="84" height="84" rx="18" fill="#1f6feb"/>
    <path d="M946 286l16 16 28-40" stroke="#f0f6fc" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`)
);

writeAsset(
  "mission-radar.svg",
  svg(`<svg width="720" height="380" viewBox="0 0 720 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">BuilderDex index grid</title>
  <desc id="desc">A GitHub themed index of current build categories.</desc>
  <defs><style>${css}</style></defs>
  <rect width="720" height="380" rx="18" class="bg"/>
  <rect x="22" y="22" width="676" height="336" rx="14" class="panel"/>
  <g class="mono">
    <text x="48" y="62" font-size="14" letter-spacing="2" class="blue">INDEX GRID</text>
    <text x="48" y="96" font-size="24" font-weight="800" class="text">what I am actually building around</text>
  </g>
  <g class="sans">
    <rect x="48" y="126" width="284" height="72" rx="10" class="panel2"/>
    <circle cx="78" cy="162" r="8" class="green pulse"/><text x="100" y="158" font-size="16" font-weight="700" class="text">AI agents</text><text x="100" y="180" font-size="13" class="muted">coordination, automation, workflows</text>
    <rect x="388" y="126" width="284" height="72" rx="10" class="panel2"/>
    <circle cx="418" cy="162" r="8" class="blue pulse"/><text x="440" y="158" font-size="16" font-weight="700" class="text">Developer tools</text><text x="440" y="180" font-size="13" class="muted">small utilities, better feedback loops</text>
    <rect x="48" y="222" width="284" height="72" rx="10" class="panel2"/>
    <circle cx="78" cy="258" r="8" class="purple pulse"/><text x="100" y="254" font-size="16" font-weight="700" class="text">Web experiments</text><text x="100" y="276" font-size="13" class="muted">interfaces, dashboards, visual polish</text>
    <rect x="388" y="222" width="284" height="72" rx="10" class="panel2"/>
    <circle cx="418" cy="258" r="8" class="orange pulse"/><text x="440" y="254" font-size="16" font-weight="700" class="text">CS fundamentals</text><text x="440" y="276" font-size="13" class="muted">systems thinking, algorithms, structure</text>
  </g>
</svg>`)
);

writeAsset(
  "stack-console.svg",
  svg(`<svg width="720" height="380" viewBox="0 0 720 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">BuilderDex terminal</title>
  <desc id="desc">A GitHub themed terminal card with current stack and profile commands.</desc>
  <defs><style>${css}</style></defs>
  <rect width="720" height="380" rx="18" class="bg"/>
  <rect x="22" y="22" width="676" height="336" rx="14" class="panel"/>
  <circle cx="50" cy="48" r="6" class="red"/><circle cx="72" cy="48" r="6" class="orange"/><circle cx="94" cy="48" r="6" class="green"/>
  <g class="mono">
    <text x="48" y="90" font-size="15" class="blue">$ npx builderdex inspect shreyaas5</text>
    <text x="48" y="132" font-size="15" class="text type1">&gt; languages: python / c++ / javascript</text>
    <text x="48" y="168" font-size="15" class="text type2">&gt; frontend: react / clean UI / useful demos</text>
    <text x="48" y="204" font-size="15" class="text type3">&gt; workflow: github actions / readmes / automation</text>
    <line x1="48" y1="238" x2="650" y2="238" class="line"/>
    <text x="48" y="280" font-size="14" class="muted">next unlock:</text>
    <text x="160" y="280" font-size="14" class="green">replace placeholders with real pinned repos</text>
    <text x="48" y="320" font-size="14" class="muted">mode:</text>
    <text x="100" y="320" font-size="14" class="purple">build first, decorate second</text>
    <rect x="326" y="302" width="12" height="23" class="green blink"/>
  </g>
</svg>`)
);

writeAsset(
  "signal-strip.svg",
  svg(`<svg width="1200" height="120" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">GitHub themed BuilderDex strip</title>
  <desc id="desc">An animated status strip using GitHub colors.</desc>
  <defs><style>${css}</style></defs>
  <rect width="1200" height="120" rx="16" class="bg"/>
  <rect x="18" y="18" width="1164" height="84" rx="10" class="panel"/>
  <rect class="scan" y="49" width="190" height="22" fill="#58a6ff" opacity=".14"/>
  <g class="mono" font-size="15">
    <text x="44" y="48" class="blue">BUILDERDEX LINK</text>
    <text x="210" y="48" class="muted">github.com/shreyaas5</text>
    <text x="44" y="82" class="text">AI agents // developer tools // web experiments // CS fundamentals // real projects only</text>
    <circle cx="1118" cy="60" r="7" class="green blink"/>
    <text x="1138" y="65" class="green">LIVE</text>
  </g>
</svg>`)
);
