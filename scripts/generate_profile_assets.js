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
  .github-bg { fill: #0d1117; }
  .dex-shell { fill: #161b22; stroke: #30363d; }
  .screen { fill: #010409; stroke: #30363d; }
  .screen-line { stroke: #21262d; }
  .text { fill: #f0f6fc; }
  .muted { fill: #8b949e; }
  .green { fill: #3fb950; }
  .blue { fill: #58a6ff; }
  .orange { fill: #d29922; }
  .purple { fill: #bc8cff; }
  .red { fill: #f85149; }
  .chip { fill: #21262d; stroke: #30363d; }
  .blink { animation: blink 1s steps(2,start) infinite; }
  .pulse { animation: pulse 2.2s ease-in-out infinite; }
  .scan { animation: scan 4.8s linear infinite; }
  .float { animation: float 5s ease-in-out infinite alternate; }
  .type1 { animation: reveal1 7s steps(34) infinite; }
  .type2 { animation: reveal2 7s steps(36) infinite; }
  .type3 { animation: reveal3 7s steps(32) infinite; }
  @keyframes blink { 0%,48% { opacity: 1; } 49%,100% { opacity: 0; } }
  @keyframes pulse { 0%,100% { opacity: .48; } 50% { opacity: 1; } }
  @keyframes scan { from { transform: translateY(-330px); } to { transform: translateY(330px); } }
  @keyframes float { from { transform: translateY(-5px); } to { transform: translateY(6px); } }
  @keyframes reveal1 { 0%, 8% { clip-path: inset(0 100% 0 0); } 30%, 100% { clip-path: inset(0 0 0 0); } }
  @keyframes reveal2 { 0%, 34% { clip-path: inset(0 100% 0 0); } 58%, 100% { clip-path: inset(0 0 0 0); } }
  @keyframes reveal3 { 0%, 62% { clip-path: inset(0 100% 0 0); } 88%, 100% { clip-path: inset(0 0 0 0); } }
`;

writeAsset(
  "mission-control.svg",
  svg(`<svg width="1200" height="460" viewBox="0 0 1200 460" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">GitDex profile device for shreyaas5</title>
  <desc id="desc">A GitHub color themed Dex-style profile device with animated scan screen and builder entry.</desc>
  <defs>
    <pattern id="screenGrid" width="26" height="26" patternUnits="userSpaceOnUse">
      <path d="M26 0H0V26" fill="none" stroke="#21262d" stroke-width="1"/>
    </pattern>
    <linearGradient id="scanLine" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#58a6ff" stop-opacity="0"/>
      <stop offset=".48" stop-color="#58a6ff" stop-opacity=".34"/>
      <stop stop-color="#58a6ff" stop-opacity="0"/>
    </linearGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <style>${css}</style>
  </defs>
  <rect width="1200" height="460" rx="28" class="github-bg"/>
  <path d="M58 38H1142C1159.67 38 1174 52.3269 1174 70V390C1174 407.673 1159.67 422 1142 422H58C40.3269 422 26 407.673 26 390V70C26 52.3269 40.3269 38 58 38Z" class="dex-shell" stroke-width="2"/>
  <path d="M58 38H514L562 86H1174V70C1174 52.3269 1159.67 38 1142 38H58Z" fill="#21262d"/>
  <circle cx="82" cy="72" r="22" fill="#58a6ff" stroke="#f0f6fc" stroke-width="4" class="pulse"/>
  <circle cx="130" cy="72" r="8" class="red"/><circle cx="158" cy="72" r="8" class="orange"/><circle cx="186" cy="72" r="8" class="green"/>

  <rect x="70" y="122" width="505" height="250" rx="18" class="screen"/>
  <rect x="92" y="144" width="461" height="206" rx="10" fill="#0d1117"/>
  <rect x="92" y="144" width="461" height="206" fill="url(#screenGrid)" opacity=".5"/>
  <rect class="scan" x="92" y="144" width="461" height="70" fill="url(#scanLine)"/>
  <g class="mono">
    <text x="118" y="182" font-size="13" letter-spacing="2" class="blue">GITDEX ENTRY #0005</text>
    <text x="118" y="238" font-size="52" font-weight="900" class="text">shreyaas5</text>
    <text x="122" y="276" font-size="17" class="muted">CS student / builder / learning in public</text>
    <text x="122" y="316" font-size="16" class="text type1">&gt; scanning repos...</text>
    <rect x="296" y="300" width="12" height="23" class="green blink"/>
  </g>

  <g class="sans" transform="translate(640 122)">
    <text x="0" y="0" dy="20" font-size="15" font-weight="700" class="muted">TYPE</text>
    <rect x="0" y="38" width="128" height="38" rx="19" fill="#238636"/><text x="28" y="63" font-size="14" font-weight="700" class="text">AGENT</text>
    <rect x="142" y="38" width="132" height="38" rx="19" fill="#1f6feb"/><text x="166" y="63" font-size="14" font-weight="700" class="text">DEVTOOL</text>
    <rect x="288" y="38" width="100" height="38" rx="19" fill="#8957e5"/><text x="320" y="63" font-size="14" font-weight="700" class="text">WEB</text>

    <rect x="0" y="106" width="430" height="84" rx="12" class="screen"/>
    <text x="22" y="138" font-size="15" font-weight="700" class="text">ABILITY</text>
    <text x="22" y="166" font-size="14" class="muted">turns curiosity into small shipped experiments</text>

    <rect x="0" y="216" width="430" height="96" rx="12" class="screen"/>
    <text x="22" y="250" font-size="15" font-weight="700" class="text">DEX NOTE</text>
    <text x="22" y="278" font-size="14" class="muted">No fake levels. No random domains. Real projects get the spotlight.</text>
    <text x="22" y="302" font-size="13" class="orange">asset build: ${buildStamp}</text>
  </g>

  <g transform="translate(94 385)" class="float">
    <rect x="0" y="-11" width="34" height="72" rx="8" fill="#30363d"/><rect x="-19" y="8" width="72" height="34" rx="8" fill="#30363d"/>
  </g>
  <g filter="url(#glow)">
    <circle cx="1104" cy="82" r="10" class="green blink"/>
    <path d="M1075 386h54" stroke="#58a6ff" stroke-width="8" stroke-linecap="round"/>
  </g>
</svg>`)
);

writeAsset(
  "mission-radar.svg",
  svg(`<svg width="720" height="380" viewBox="0 0 720 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">GitDex type cards</title>
  <desc id="desc">Dex-style type cards for current GitHub profile build categories.</desc>
  <defs><style>${css}</style></defs>
  <rect width="720" height="380" rx="18" class="github-bg"/>
  <rect x="22" y="22" width="676" height="336" rx="18" class="dex-shell"/>
  <g class="mono">
    <text x="48" y="62" font-size="14" letter-spacing="2" class="blue">GITDEX TYPES</text>
    <text x="48" y="98" font-size="26" font-weight="900" class="text">current build categories</text>
  </g>
  <g class="sans">
    <rect x="48" y="126" width="284" height="76" rx="14" class="screen"/>
    <rect x="70" y="148" width="74" height="32" rx="16" fill="#238636"/><text x="92" y="169" font-size="13" font-weight="800" class="text">AI</text>
    <text x="162" y="156" font-size="16" font-weight="800" class="text">Agents</text><text x="162" y="180" font-size="13" class="muted">automation and workflows</text>
    <rect x="388" y="126" width="284" height="76" rx="14" class="screen"/>
    <rect x="410" y="148" width="92" height="32" rx="16" fill="#1f6feb"/><text x="430" y="169" font-size="13" font-weight="800" class="text">TOOL</text>
    <text x="520" y="156" font-size="16" font-weight="800" class="text">Devtools</text><text x="520" y="180" font-size="13" class="muted">scripts and utilities</text>
    <rect x="48" y="230" width="284" height="76" rx="14" class="screen"/>
    <rect x="70" y="252" width="90" height="32" rx="16" fill="#8957e5"/><text x="94" y="273" font-size="13" font-weight="800" class="text">WEB</text>
    <text x="178" y="260" font-size="16" font-weight="800" class="text">Interfaces</text><text x="178" y="284" font-size="13" class="muted">clean UI and demos</text>
    <rect x="388" y="230" width="284" height="76" rx="14" class="screen"/>
    <rect x="410" y="252" width="82" height="32" rx="16" fill="#d29922"/><text x="431" y="273" font-size="13" font-weight="800" class="text">CORE</text>
    <text x="512" y="260" font-size="16" font-weight="800" class="text">CS basics</text><text x="512" y="284" font-size="13" class="muted">structure and systems</text>
  </g>
</svg>`)
);

writeAsset(
  "stack-console.svg",
  svg(`<svg width="720" height="380" viewBox="0 0 720 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">GitDex terminal screen</title>
  <desc id="desc">A Dex-style terminal screen with stack and profile commands.</desc>
  <defs><style>${css}</style></defs>
  <rect width="720" height="380" rx="18" class="github-bg"/>
  <rect x="22" y="22" width="676" height="336" rx="18" class="dex-shell"/>
  <rect x="48" y="58" width="624" height="256" rx="14" class="screen"/>
  <circle cx="76" cy="342" r="10" class="blue pulse"/><circle cx="112" cy="342" r="10" class="red"/><circle cx="148" cy="342" r="10" class="green"/>
  <g class="mono">
    <text x="76" y="96" font-size="15" class="blue">$ gitdex scan shreyaas5</text>
    <text x="76" y="140" font-size="15" class="text type1">&gt; languages: python / c++ / javascript</text>
    <text x="76" y="178" font-size="15" class="text type2">&gt; building: agents / tools / web demos</text>
    <text x="76" y="216" font-size="15" class="text type3">&gt; rule: no filler, only repos that earn a slot</text>
    <line x1="76" y1="246" x2="620" y2="246" class="screen-line"/>
    <text x="76" y="282" font-size="14" class="muted">next evolution:</text>
    <text x="212" y="282" font-size="14" class="green">pin real projects and link them here</text>
    <rect x="514" y="263" width="12" height="23" class="green blink"/>
  </g>
</svg>`)
);

writeAsset(
  "signal-strip.svg",
  svg(`<svg width="1200" height="128" viewBox="0 0 1200 128" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">GitDex status strip</title>
  <desc id="desc">A GitHub themed Dex-style status strip.</desc>
  <defs><style>${css}</style></defs>
  <rect width="1200" height="128" rx="18" class="github-bg"/>
  <rect x="22" y="22" width="1156" height="84" rx="18" class="dex-shell"/>
  <rect x="44" y="42" width="86" height="44" rx="22" fill="#238636"/><text x="64" y="70" font-size="15" font-weight="900" class="sans text">LIVE</text>
  <rect class="scan" x="164" y="34" width="180" height="60" fill="#58a6ff" opacity=".12"/>
  <g class="mono" font-size="15">
    <text x="164" y="56" class="blue">GITDEX://github.com/shreyaas5</text>
    <text x="164" y="84" class="text">AI agents / developer tools / web experiments / CS fundamentals / no fake entries</text>
    <circle cx="1128" cy="64" r="8" class="green blink"/>
  </g>
</svg>`)
);
