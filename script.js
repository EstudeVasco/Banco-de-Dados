const FORMATIONS = {
  "4-4-2": ["GOL", "ZAG", "ZAG", "LAT", "LAT", "VOL", "VOL", "MEI", "MEI", "ATA", "ATA"],
  "4-3-3": ["GOL", "ZAG", "ZAG", "LAT", "LAT", "VOL", "MEI", "MEI", "ATA", "ATA", "ATA"],
  "3-5-2": ["GOL", "ZAG", "ZAG", "ZAG", "LAT", "VOL", "VOL", "MEI", "MEI", "ATA", "ATA"],
  "3-4-3": ["GOL", "ZAG", "ZAG", "ZAG", "VOL", "VOL", "MEI", "MEI", "ATA", "ATA", "ATA"],
  "5-3-2": ["GOL", "ZAG", "ZAG", "ZAG", "LAT", "LAT", "VOL", "VOL", "MEI", "ATA", "ATA"],
};

const MODE_CONFIG = {
  facil: { label: "Fácil", description: "Fácil: OVR visível e 1 troca por rodada.", showOverall: true, redraftType: "perRound", redrafts: 1 },
  medio: { label: "Médio", description: "Médio: OVR visível e 3 trocas no draft inteiro.", showOverall: true, redraftType: "total", redrafts: 3 },
  dificil: { label: "Difícil", description: "Difícil: OVR oculto e 1 troca no draft inteiro.", showOverall: false, redraftType: "total", redrafts: 1 },
};

const RARITY_WEIGHTS = {
  "Comum": 65,
  "Xodó": 10,
  "Craque": 16,
  "Lenda": 6,
  "Panteão": 0.2,
};

const OPPONENTS = [
  { name: "Botafogo", def: 81, ata: 83 },
  { name: "Fluminense", def: 83, ata: 83 },
  { name: "Flamengo", def: 86, ata: 87 },
  { name: "Santos", def: 80, ata: 82 },
  { name: "São Paulo", def: 80, ata: 82 },
  { name: "Corinthians", def: 83, ata: 82 },
  { name: "Palmeiras", def: 87, ata: 87 },
  { name: "Grêmio", def: 82, ata: 82 },
  { name: "Internacional", def: 82, ata: 81 },
  { name: "Atlético-MG", def: 80, ata: 83 },
  { name: "Cruzeiro", def: 82, ata: 84 },
  { name: "Bahia", def: 81, ata: 83 },
  { name: "Vitória", def: 80, ata: 81 },
  { name: "Bragantino", def: 81, ata: 83 },
  { name: "Athletico-PR", def: 82, ata: 82 },
  { name: "Mirassol", def: 82, ata: 79 },
  { name: "Remo", def: 78, ata: 82 },
  { name: "Coritiba", def: 81, ata: 82 },
  { name: "Chapecoense", def: 78, ata: 79 },
];


const PITCH_COORDS = {
  "4-4-2": [
    ["GOL", 50, 91], ["ZAG", 37, 75], ["ZAG", 63, 75], ["LAT", 16, 72], ["LAT", 84, 72],
    ["VOL", 34, 55], ["VOL", 66, 55], ["MEI", 26, 39], ["MEI", 74, 39], ["ATA", 40, 19], ["ATA", 60, 19],
  ],
  "4-3-3": [
    ["GOL", 50, 91], ["ZAG", 37, 75], ["ZAG", 63, 75], ["LAT", 16, 72], ["LAT", 84, 72],
    ["VOL", 50, 56], ["MEI", 35, 42], ["MEI", 65, 42], ["ATA", 22, 20], ["ATA", 50, 15], ["ATA", 78, 20],
  ],
  "3-5-2": [
    ["GOL", 50, 91], ["ZAG", 28, 75], ["ZAG", 50, 78], ["ZAG", 72, 75], ["LAT", 12, 53],
    ["VOL", 38, 56], ["VOL", 62, 56], ["MEI", 28, 38], ["MEI", 72, 38], ["ATA", 40, 18], ["ATA", 60, 18],
  ],
  "3-4-3": [
    ["GOL", 50, 91], ["ZAG", 28, 76], ["ZAG", 50, 78], ["ZAG", 72, 76], ["VOL", 35, 57],
    ["VOL", 65, 57], ["MEI", 30, 40], ["MEI", 70, 40], ["ATA", 22, 20], ["ATA", 50, 15], ["ATA", 78, 20],
  ],
  "5-3-2": [
    ["GOL", 50, 91], ["ZAG", 30, 77], ["ZAG", 50, 79], ["ZAG", 70, 77], ["LAT", 13, 68], ["LAT", 87, 68],
    ["VOL", 38, 53], ["VOL", 62, 53], ["MEI", 50, 37], ["ATA", 40, 18], ["ATA", 60, 18],
  ],
};

let game = {};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function normalizePlayers() {
  return players.map((p, index) => ({
    ...p,
    id: p.id || `${slug(p.nome)}_${index}`,
    nome: String(p.nome).trim(),
    posicao: String(p.posicao).trim().toUpperCase(),
    overall: Number(p.overall),
    raridade: String(p.raridade).trim(),
    era: String(p.era).trim(),
  }));
}

function slug(text) {
  return String(text).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function resetGame() {
  const mode = game.mode || "facil";
  const formation = game.formation || "4-4-2";
  game = {
    mode,
    formation,
    slots: [],
    selected: [],
    pool: normalizePlayers(),
    currentOptions: [],
    round: 1,
    redraftsLeft: MODE_CONFIG[mode].redrafts,
    redraftUsedThisRound: false,
  };
}

function playerPositions(player) { return player.posicao.split("/").map((p) => p.trim()); }
function canFillSlot(player, slot) {
  const pos = playerPositions(player);
  if (slot === "VOL") return pos.includes("VOL") || pos.includes("MC");
  if (slot === "MEI") return pos.includes("MEI") || pos.includes("MC");
  return pos.includes(slot);
}
function openSlotsFor(player) { return game.slots.filter((slot) => !slot.player && canFillSlot(player, slot.type)); }
function bestOpenSlotFor(player) {
  const open = openSlotsFor(player);
  if (!open.length) return null;
  const pos = playerPositions(player);
  return open.find((slot) => pos.includes(slot.type)) || open[0];
}

function buildSlots() {
  game.slots = PITCH_COORDS[game.formation].map(([type, x, y], index) => ({ id: `${type}_${index}`, type, x, y, player: null }));
}

function switchScreen(id) { $$(".screen").forEach((s) => s.classList.remove("active")); $(`#${id}`).classList.add("active"); }

function weightedRarity() {
  const availableRarities = Object.keys(RARITY_WEIGHTS).filter((rarity) => game.pool.some((p) => p.raridade === rarity));
  const total = availableRarities.reduce((sum, rarity) => sum + RARITY_WEIGHTS[rarity], 0);
  let roll = Math.random() * total;
  for (const rarity of availableRarities) {
    roll -= RARITY_WEIGHTS[rarity];
    if (roll <= 0) return rarity;
  }
  return availableRarities[availableRarities.length - 1];
}

function takeRandomFromRarity(rarity, temporaryPool) {
  const candidates = temporaryPool.filter((p) => p.raridade === rarity);
  if (!candidates.length) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function removeFromArrayById(arr, id) { const i = arr.findIndex((p) => p.id === id); if (i >= 0) arr.splice(i, 1); }

function generateOptions() {
  const options = [];
  const temporaryPool = [...game.pool];
  let safety = 0;
  while (options.length < 8 && temporaryPool.length && safety < 300) {
    safety++;
    const rarity = weightedRarity();
    let player = takeRandomFromRarity(rarity, temporaryPool);
    if (!player) player = temporaryPool[Math.floor(Math.random() * temporaryPool.length)];
    if (player && !options.some((p) => p.id === player.id)) {
      options.push(player);
      removeFromArrayById(temporaryPool, player.id);
    }
  }
  game.currentOptions = options;
  // Opção B: todas as cartas vistas saem do draft, mesmo as recusadas.
  options.forEach((p) => removeFromArrayById(game.pool, p.id));
}

function renderCard(player) {
  const slot = bestOpenSlotFor(player);
  const disabled = !slot;
  const config = MODE_CONFIG[game.mode];
  const ovrText = config.showOverall ? player.overall : "??";
  return `<button class="player-card ${disabled ? "disabled" : ""}" data-id="${player.id}" data-rarity="${player.raridade}" ${disabled ? "disabled" : ""} data-lock="Posição completa">
    <div class="card-top">
      <span class="card-pos">${player.posicao}</span>
      <span class="card-ovr">${ovrText}</span>
    </div>
    <div class="jersey-wrap">
      <svg class="jersey-svg" viewBox="0 0 120 120" aria-hidden="true">
        <path class="shirt-shadow" d="M27 25 L43 13 H77 L93 25 L111 48 L93 62 L88 51 V106 H32 V51 L27 62 L9 48 Z"/>
        <path class="shirt-body" d="M27 23 L43 11 H77 L93 23 L110 47 L93 61 L88 50 V105 H32 V50 L27 61 L10 47 Z"/>
        <clipPath id="shirtClip">
          <path d="M27 23 L43 11 H77 L93 23 L110 47 L93 61 L88 50 V105 H32 V50 L27 61 L10 47 Z"/>
        </clipPath>
        <g clip-path="url(#shirtClip)">
          <polygon class="shirt-sash" points="103 4 116 14 23 116 10 106"/>
        </g>
        <path class="shirt-outline" d="M27 23 L43 11 H77 L93 23 L110 47 L93 61 L88 50 V105 H32 V50 L27 61 L10 47 Z"/>
        <path class="shirt-collar" d="M49 11 H71 L60 29 Z"/>
      </svg>
    </div>
    <div class="card-bottom">
      <div class="player-name">${player.nome} <span class="player-era">${player.era}</span></div>
    </div>
  </button>`;
}

function renderCards() {
  $("#cards-grid").innerHTML = game.currentOptions.map(renderCard).join("");
  $$(".player-card:not(.disabled)").forEach((btn) => btn.addEventListener("click", () => selectPlayer(btn.dataset.id)));
}

function renderPitch() {
  $("#pitch-title").textContent = game.formation;
  $("#selected-count").textContent = `${game.selected.length}/11`;
  const lines = `<div class="penalty-box top"></div><div class="penalty-box bottom"></div><div class="goal-box top"></div><div class="goal-box bottom"></div>`;
  const slots = game.slots.map((slot) => `<div class="slot ${slot.player ? "filled" : ""}" style="left:${slot.x}%; top:${slot.y}%">
    <span class="slot-pos">${slot.type}</span>
    ${slot.player ? `<span class="slot-name">${shortName(slot.player.nome)}</span>` : ""}
  </div>`).join("");
  $("#pitch").innerHTML = lines + slots;
}

function shortName(name) {
  const parts = String(name).split(" ");
  if (parts.length <= 2) return name;
  return `${parts[0]} ${parts[parts.length - 1]}`;
}

function updateTopbar() {
  const config = MODE_CONFIG[game.mode];
  const mandatory = needsMandatoryRedraft();
  $("#round-number").textContent = game.round;
  $("#mode-label").textContent = config.label;
  $("#formation-label").textContent = game.formation;
  if (mandatory) {
    $("#redrafts-left").textContent = "Troca obrigatória liberada";
    $("#redraft-button").textContent = "Trocar opções sem gastar";
    $("#redraft-button").disabled = false;
    return;
  }
  $("#redraft-button").textContent = "Trocar opções";
  if (config.redraftType === "perRound") {
    $("#redrafts-left").textContent = game.redraftUsedThisRound ? "Trocas: 0 nesta rodada" : "Trocas: 1 nesta rodada";
    $("#redraft-button").disabled = game.redraftUsedThisRound;
  } else {
    $("#redrafts-left").textContent = `Trocas: ${game.redraftsLeft}`;
    $("#redraft-button").disabled = game.redraftsLeft <= 0;
  }
}

function startDraft() {
  resetGame();
  buildSlots();
  generateOptions();
  switchScreen("draft-screen");
  renderAll();
}
function hasSelectableOption() { return game.currentOptions.some((player) => bestOpenSlotFor(player)); }
function needsMandatoryRedraft() { return game.currentOptions.length > 0 && !hasSelectableOption() && game.selected.length < 11; }
function renderAll() { updateTopbar(); renderCards(); renderPitch(); }

function selectPlayer(id) {
  const player = game.currentOptions.find((p) => p.id === id);
  const slot = player && bestOpenSlotFor(player);
  if (!player || !slot) return;
  slot.player = player;
  game.selected.push(player);
  if (game.selected.length >= 11) return finishDraft();
  game.round += 1;
  game.redraftUsedThisRound = false;
  generateOptions();
  renderAll();
}

function redraft() {
  const config = MODE_CONFIG[game.mode];
  const mandatory = needsMandatoryRedraft();
  if (!mandatory) {
    if (config.redraftType === "perRound") {
      if (game.redraftUsedThisRound) return;
      game.redraftUsedThisRound = true;
    } else {
      if (game.redraftsLeft <= 0) return;
      game.redraftsLeft -= 1;
    }
  }
  generateOptions();
  renderAll();
}

function finishDraft() {
  const avg = game.selected.reduce((sum, p) => sum + p.overall, 0) / game.selected.length;
  const teamPower = calculateTeamPower();
  const season = simulateBrasileirao(teamPower);

  $("#final-overall").textContent = avg.toFixed(1).replace(".", ",");
  $("#final-attack").textContent = teamPower.ata.toFixed(1).replace(".", ",");
  $("#final-defense").textContent = teamPower.def.toFixed(1).replace(".", ",");
  $("#final-expectation").textContent = expectationLabel(avg);
  $("#final-score-global").textContent = season.userScore.toFixed(1).replace(".", ",");

  const counts = game.selected.reduce((acc, p) => { acc[p.raridade] = (acc[p.raridade] || 0) + 1; return acc; }, {});
  const order = ["Panteão", "Lenda", "Craque", "Xodó", "Comum"];
  $("#rarity-summary").innerHTML = order.filter((r) => counts[r]).map((r) => `<span>${r}: ${counts[r]}</span>`).join("");
  $("#final-team").innerHTML = game.slots.map((slot) => `<div class="final-player"><strong>${slot.player.nome}</strong><span>${slot.type} • ${slot.player.posicao} • ${slot.player.raridade} • OVR ${slot.player.overall} • Era ${slot.player.era}</span></div>`).join("");

  renderLeagueTable(season.table);
  renderUserFixtures(season.userFixtures);
  renderPlayerStats(season.playerStats);
  switchScreen("result-screen");
}

function mainPositionForSlot(slot) { return slot.type; }
function calculateTeamPower() {
  let defSum = 0, defWeight = 0, ataSum = 0, ataWeight = 0;
  game.slots.forEach((slot) => {
    const ovr = slot.player.overall;
    const type = mainPositionForSlot(slot);
    if (["GOL", "ZAG", "LAT"].includes(type)) { defSum += ovr; defWeight += 1; }
    else if (["VOL", "MC"].includes(type)) { defSum += ovr * 0.5; defWeight += 0.5; ataSum += ovr * 0.5; ataWeight += 0.5; }
    else if (type === "MEI" || type === "ATA") { ataSum += ovr; ataWeight += 1; }
  });
  const avg = game.selected.reduce((sum, p) => sum + p.overall, 0) / game.selected.length;
  return {
    def: defWeight ? defSum / defWeight : avg,
    ata: ataWeight ? ataSum / ataWeight : avg,
    avg,
  };
}

function expectationLabel(avg) {
  if (avg >= 90) return "Brigar pelo título";
  if (avg >= 87) return "G4 / Libertadores";
  if (avg >= 84) return "Classificar para a Libertadores";
  if (avg >= 80) return "Sul-Americana";
  return "Luta contra o Z4";
}

function createTeamRecord(team) {
  return { name: team.name, def: team.def, ata: team.ata, pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 };
}

function generateSchedule(teamNames) {
  const teams = [...teamNames];
  const n = teams.length;
  const rounds = [];
  for (let r = 0; r < n - 1; r++) {
    const matches = [];
    for (let i = 0; i < n / 2; i++) {
      const a = teams[i];
      const b = teams[n - 1 - i];
      if (r % 2 === 0) matches.push({ home: a, away: b });
      else matches.push({ home: b, away: a });
    }
    rounds.push(matches);
    const fixed = teams[0];
    const rest = teams.slice(1);
    rest.unshift(rest.pop());
    teams.splice(0, teams.length, fixed, ...rest);
  }
  const returnRounds = rounds.map((round) => round.map((m) => ({ home: m.away, away: m.home })));
  return [...rounds, ...returnRounds];
}

function randomBetween(min, max) { return min + Math.random() * (max - min); }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function poisson(lambda) {
  const L = Math.exp(-lambda);
  let k = 0, p = 1;
  do { k++; p *= Math.random(); } while (p > L && k < 8);
  return Math.max(0, k - 1);
}
function expectedGoals(attack, defense, homeBonus = 0) {
  const variation = randomBetween(-5, 5);
  const edge = attack + homeBonus + variation - defense;
  return clamp(1.15 + edge * 0.085, 0.2, 3.4);
}
function simulateMatch(home, away) {
  const homeLambda = expectedGoals(home.ata, away.def, 1);
  const awayLambda = expectedGoals(away.ata, home.def, 0);
  return { homeGoals: poisson(homeLambda), awayGoals: poisson(awayLambda) };
}
function applyResult(table, homeName, awayName, hg, ag) {
  const home = table[homeName];
  const away = table[awayName];
  home.j++; away.j++;
  home.gp += hg; home.gc += ag; away.gp += ag; away.gc += hg;
  home.sg = home.gp - home.gc; away.sg = away.gp - away.gc;
  if (hg > ag) { home.v++; home.pts += 3; away.d++; }
  else if (hg < ag) { away.v++; away.pts += 3; home.d++; }
  else { home.e++; away.e++; home.pts++; away.pts++; }
}

function simulateBrasileirao(userPower) {
  const userTeam = { name: "Vasco Draft", def: userPower.def, ata: userPower.ata };
  const allTeams = [userTeam, ...OPPONENTS];
  const table = Object.fromEntries(allTeams.map((team) => [team.name, createTeamRecord(team)]));
  const powerByName = Object.fromEntries(allTeams.map((team) => [team.name, team]));
  const schedule = generateSchedule(allTeams.map((team) => team.name));
  const userFixtures = [];
  const playerStats = Object.fromEntries(game.selected.map((p) => [p.id, { player: p, goals: 0, assists: 0 }]));

  schedule.forEach((round, roundIndex) => {
    round.forEach((match) => {
      const result = simulateMatch(powerByName[match.home], powerByName[match.away]);
      applyResult(table, match.home, match.away, result.homeGoals, result.awayGoals);
      if (match.home === "Vasco Draft" || match.away === "Vasco Draft") {
        const vascoHome = match.home === "Vasco Draft";
        const vascoGoals = vascoHome ? result.homeGoals : result.awayGoals;
        distributeVascoStats(vascoGoals, playerStats);
        userFixtures.push({
          round: roundIndex + 1,
          home: match.home,
          away: match.away,
          homeGoals: result.homeGoals,
          awayGoals: result.awayGoals,
        });
      }
    });
  });

  const sortedTable = Object.values(table).sort((a, b) => b.pts - a.pts || b.v - a.v || b.sg - a.sg || b.gp - a.gp || a.name.localeCompare(b.name));
  const user = table["Vasco Draft"];
  const userScore = user.pts + user.v + user.gp * 0.5;
  return { table: sortedTable, userFixtures, playerStats: Object.values(playerStats), userScore };
}

function statRoleWeight(player, type) {
  const pos = playerPositions(player);
  if (type === "goal") {
    if (pos.includes("ATA")) return 6;
    if (pos.includes("MEI")) return 4;
    if (pos.includes("MC")) return 2.2;
    if (pos.includes("VOL")) return 1.4;
    if (pos.includes("LAT")) return 0.8;
    if (pos.includes("ZAG")) return 0.55;
    return 0.05;
  }
  if (pos.includes("MEI")) return 5;
  if (pos.includes("MC")) return 3.8;
  if (pos.includes("VOL")) return 2.8;
  if (pos.includes("ATA")) return 2.4;
  if (pos.includes("LAT")) return 2.2;
  if (pos.includes("ZAG")) return 0.55;
  return 0.05;
}
function weightedPickForStats(type, playerStats, excludeId = null) {
  const candidates = playerStats.filter((s) => s.player.id !== excludeId);
  const total = candidates.reduce((sum, s) => sum + statRoleWeight(s.player, type) * Math.max(70, s.player.overall), 0);
  let roll = Math.random() * total;
  for (const stat of candidates) {
    roll -= statRoleWeight(stat.player, type) * Math.max(70, stat.player.overall);
    if (roll <= 0) return stat;
  }
  return candidates[candidates.length - 1];
}
function distributeVascoStats(goals, statsObj) {
  const stats = Object.values(statsObj);
  for (let i = 0; i < goals; i++) {
    const scorer = weightedPickForStats("goal", stats);
    if (scorer) scorer.goals++;
    if (Math.random() < 0.78) {
      const assister = weightedPickForStats("assist", stats, scorer && scorer.player.id);
      if (assister) assister.assists++;
    }
  }
}

function renderLeagueTable(table) {
  $("#league-table").innerHTML = `<table><thead><tr><th>Pos</th><th>Clube</th><th>Pts</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th></tr></thead><tbody>${table.map((t, i) => `<tr class="${t.name === "Vasco Draft" ? "highlight" : ""}"><td>${i + 1}</td><td>${t.name}</td><td>${t.pts}</td><td>${t.j}</td><td>${t.v}</td><td>${t.e}</td><td>${t.d}</td><td>${t.gp}</td><td>${t.gc}</td><td>${t.sg}</td></tr>`).join("")}</tbody></table>`;
}
function renderUserFixtures(fixtures) {
  $("#user-fixtures").innerHTML = fixtures.map((m) => `<div class="fixture-row"><span>Rodada ${m.round}</span><strong>${m.home} ${m.homeGoals} x ${m.awayGoals} ${m.away}</strong></div>`).join("");
}
function renderPlayerStats(stats) {
  const goals = [...stats].sort((a, b) => b.goals - a.goals || b.assists - a.assists).slice(0, 11);
  const assists = [...stats].sort((a, b) => b.assists - a.assists || b.goals - a.goals).slice(0, 11);
  $("#scorers-table").innerHTML = goals.map((s, i) => `<div class="stat-row"><span>${i + 1}. ${s.player.nome}</span><strong>${s.goals}</strong></div>`).join("");
  $("#assists-table").innerHTML = assists.map((s, i) => `<div class="stat-row"><span>${i + 1}. ${s.player.nome}</span><strong>${s.assists}</strong></div>`).join("");
}

function init() {
  resetGame();
  $$("[data-mode]").forEach((btn) => btn.addEventListener("click", () => {
    game.mode = btn.dataset.mode;
    $$("[data-mode]").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    $("#mode-description").textContent = MODE_CONFIG[game.mode].description;
  }));
  $$("[data-formation]").forEach((btn) => btn.addEventListener("click", () => {
    game.formation = btn.dataset.formation;
    $$("[data-formation]").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  }));
  $("#start-draft").addEventListener("click", startDraft);
  $("#redraft-button").addEventListener("click", redraft);
  $("#restart").addEventListener("click", () => switchScreen("start-screen"));
}

document.addEventListener("DOMContentLoaded", init);

function downloadCard(){
 const card=document.getElementById('share-card');
 const w=1200,h=1600;
 const c=document.createElement('canvas');c.width=w;c.height=h;
 const ctx=c.getContext('2d');
 ctx.fillStyle='#111';ctx.fillRect(0,0,w,h);
 ctx.fillStyle='#fff';ctx.font='bold 52px Arial';
 ctx.fillText('DRAFT HISTÓRICO DO VASCO',40,80);
 ctx.font='32px Arial';
 ctx.fillText('monteseuvasco.estudevasco.com/draft-historico',40,h-40);
 let y=160;
 card.querySelectorAll('.final-player strong').forEach(el=>{ctx.fillText(el.textContent,60,y);y+=40;});
 const a=document.createElement('a');
 a.href=c.toDataURL('image/png');a.download='vasco-draft.png';a.click();
}
async function shareResult(){
 const text=`Montei meu time no Draft Histórico do Vasco!\n\n⭐ OVR ${document.getElementById('final-overall').textContent}\n\nJogue também:\nhttps://monteseuvasco.estudevasco.com/draft-historico/\n\n#Vasco #CRVG #EstudeVasco`;
 if(navigator.share){try{await navigator.share({text});}catch(e){}}
 else {navigator.clipboard.writeText(text); alert('Texto copiado para a área de transferência');}
}
document.addEventListener('click',e=>{
 if(e.target&&e.target.id==='download-card') downloadCard();
 if(e.target&&e.target.id==='share-result') shareResult();
});
