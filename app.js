(function () {
  "use strict";

  // ---------- Content ----------
  const AREAS = [
    { id: "food", name: "Food", icon: '<path d="M6 3v8a3 3 0 0 0 6 0V3M9 3v18M17 3c-2 2-2 6 0 8v10"/>' },
    { id: "helping", name: "Helping people", icon: '<circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.8-3.5 3.2-5 6-5s5.2 1.5 6 5M15 15c2.5 0 4.5 1.2 5.5 4"/>' },
    { id: "health", name: "Health", icon: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>' },
    { id: "building", name: "Building", icon: '<path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6"/>' },
    { id: "tech", name: "Tech", icon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>' },
    { id: "animals", name: "Animals", icon: '<circle cx="6" cy="9" r="2"/><circle cx="10" cy="5" r="2"/><circle cx="14" cy="5" r="2"/><circle cx="18" cy="9" r="2"/><path d="M12 11c-3 0-5 3.5-5 6 0 2 2 3 5 3s5-1 5-3c0-2.5-2-6-5-6z"/>' },
    { id: "business", name: "Business", icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>' },
    { id: "finance", name: "Finance", icon: '<path d="M3 20h18"/><path d="M6 16v-5M11 16V8M16 16v-7M21 6l-5 3-5-4-6 4"/>' },
    { id: "law", name: "Law and justice", icon: '<path d="M12 3v18M7 21h10M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>' },
    { id: "education", name: "Education", icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>' },
    { id: "arts", name: "Arts", icon: '<path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>' },
    { id: "outdoors", name: "Sports and outdoors", icon: '<path d="M3 20l6-11 4 7 3-4 5 8z"/><circle cx="17" cy="6" r="2"/>' }
  ];
  const areaName = (id) => (AREAS.find((a) => a.id === id) || {}).name || "Something new";

  const QUIZ = [
    { q: "A group project starts. You...", o: { D: "Split up the work and set a deadline", I: "Get everyone talking and throwing out ideas", S: "Make sure nobody gets left out", C: "Read the instructions so it gets done right" } },
    { q: "Your friends can't decide where to eat. You...", o: { D: "Pick a place and start walking", I: "Pitch the most fun option", S: "Go with what most people want", C: "Check reviews and prices first" } },
    { q: "Something goes wrong at work or practice. You...", o: { D: "Fix it fast and move on", I: "Talk it through with someone", S: "Stay calm and keep going", C: "Figure out exactly what caused it" } },
    { q: "Which words fit you?", o: { D: "Bold, competitive", I: "Outgoing, funny", S: "Patient, loyal", C: "Careful, precise" } },
    { q: "You get a new game or app. You...", o: { D: "Jump in and try to win", I: "Get friends to play with you", S: "Learn it at your own pace", C: "Learn the rules and strategy first" } },
    { q: "Your coach or boss changes the plan last minute. You...", o: { D: "Push back if it seems wrong", I: "Roll with it, it'll be fine", S: "Go along, but it bugs you", C: "Ask what the new plan is, exactly" } },
    { q: "People count on you to...", o: { D: "Make the hard call", I: "Lift the mood", S: "Show up every time", C: "Get the details right" } },
    { q: "Perfect Friday night:", o: { D: "Something with a challenge", I: "A big group hangout", S: "A few close friends", C: "Something you planned ahead" } },
    { q: "In class you're the one who...", o: { D: "Wants to get to the point", I: "Talks the most", S: "Listens the most", C: "Asks the most questions" } },
    { q: "When you disagree with someone, you...", o: { D: "Say it straight", I: "Try to win them over", S: "Keep the peace", C: "Show them the facts" } },
    { q: "What's hardest for you?", o: { D: "Waiting on slow people", I: "Working alone in silence", S: "Sudden big changes", C: "Sloppy work" } },
    { q: "A goal you'd love:", o: { D: "Being the best at something", I: "Being known and liked", S: "Being someone people trust", C: "Being really skilled at something" } }
  ];

  const MOTIVES = [
    { a: "I want to know why things work", at: "Curious", b: "I learn what I need, when I need it", bt: "Hands-on" },
    { a: "I want my effort to pay off", at: "Earner", b: "I like giving without keeping score", bt: "Giver" },
    { a: "How a place looks and feels matters to me", at: "Good vibes", b: "If it works, it works", bt: "Practical" },
    { a: "I want to help people who need it", at: "Helper", b: "I help when it moves my goals forward", bt: "Goal-getter" },
    { a: "I want to lead and be noticed", at: "Leader", b: "I'd rather be a key part of the team", bt: "Teammate" },
    { a: "I like a clear system to follow", at: "Structure", b: "I like figuring it out my own way", bt: "Freedom" }
  ];
  const ALL_MOTIVE_TAGS = MOTIVES.flatMap((m) => [m.at, m.bt]);

  const STYLES = {
    D: { name: "The Driver", stat: "Drive", line: "Takes charge. Gets it done.", thrive: "You can move fast, make calls, and see results.",
      jobs: ["Sales", "Starting a business", "Contractor or trades boss", "EMT or firefighter", "Coach", "Restaurant manager"] },
    I: { name: "The Spark", stat: "Spark", line: "Gets people moving. Thinks out loud.", thrive: "It's busy, you're around people, and no two days are the same.",
      jobs: ["Teacher", "Marketing or social media", "Event planner", "Server or host", "Real estate", "Camp counselor"] },
    S: { name: "The Anchor", stat: "Calm", line: "Steady and loyal. The one people count on.", thrive: "The team is close, you know what's coming, and you get to help people.",
      jobs: ["Nurse", "Vet tech", "Counselor", "Childcare", "Physical therapist", "Office manager"] },
    C: { name: "The Architect", stat: "Precise", line: "Gets it right. Loves a good system.", thrive: "Quality matters, the rules are clear, and you have time to do it well.",
      jobs: ["Engineer", "Electrician", "Programmer", "Accountant", "Lab tech", "Pharmacist"] }
  };

  const PROMPTS = [
    "What did you notice at work or school today?",
    "When did time go fast today?",
    "What did you do today that you'd do again for free?",
    "What drained you today?",
    "Who did you see today with a job you'd like to know more about?",
    "What did you learn today that nobody made you learn?"
  ];
  const DAY_TAGS = ["Time flew", "Learned something", "Drained me", "Helped someone", "Made something", "Nothing special"];

  // ---------- State ----------
  const KEY = "firstshift_v1";
  const fresh = () => ({
    started: false, name: "", parentPhone: "", dreamMode: "", dreamText: "", dreamArea: "",
    quizDone: false, motivesDone: false, firstMove: "", disc: null, motives: [], source: "quiz",
    xp: 0, watched: {}, requests: [], cards: [], roles: {}, dreamDone: {},
    daily: { last: "", streak: 0, freezes: 2, entries: [] }, events: [], challenges: [], checks: {}
  });
  let S;
  try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = fresh(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const log = (e, d) => { S.events.push({ t: Date.now(), e, d: d || null }); if (S.events.length > 600) S.events.splice(0, S.events.length - 600); save(); };

  // transient
  let quiz = { i: 0, most: null, least: null, picks: [], m: 0, mv: [] };
  let cardDraft = null;

  // ---------- Helpers ----------
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const svg = (inner, size, extra) => `<svg width="${size || 22}" height="${size || 22}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra || ""}>${inner}</svg>`;
  const ICON = {
    me: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    pros: '<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    today: '<path d="M12 3c1 4 5 5.5 5 11a5 5 0 0 1-10 0c0-2.5 1.2-4 2.5-5 .2 1.8 1 2.8 2 3 0-3-.5-6 .5-9z"/>',
    cards: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6"/>',
    star: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    back: '<path d="M15 18l-6-6 6-6"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    share: '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v13"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .9 3 2.1-1.3 1.9-3 1.9c-1.4 0-2.6-.6-3-1.6M12 6.5v11"/>',
    bag: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'
  };
  const dstr = (d) => { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const daysBetween = (a, b) => Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000);
  const level = () => Math.floor(S.xp / 200) + 1;
  const money = (r) => /^\$\d+$/.test(r || "") ? +r.slice(1) : 0;
  const earned = () => S.challenges.filter((c) => c.status === "approved").reduce((a, c) => a + money(c.reward), 0);
  const openChallenges = () => S.challenges.filter((c) => c.status === "open");
  const scoutCount = () => S.cards.filter((c) => c.scout).length + Object.keys(S.checks).length;
  const CH_KINDS = [
    ["chat", "Chat with a pro", (w) => "15-minute chat with " + (w || "a pro") + " about their work"],
    ["shadow", "Shadow day", (w) => "Shadow " + (w || "someone") + " at work for a morning"],
    ["newjob", "Try a new job", () => "Try a job you've never done, even for a day"],
    ["duo", "Shadow day for two", (w) => "Shadow day for two with " + (w || "someone") + ": bring a friend"],
    ["friend", "Bring a friend", () => "A friend joins First Shift and earns their first card"],
    ["scout", "Help the next person", () => "Answer the four questions after your next job"],
    ["custom", "Write your own", () => ""]
  ];
  function payCard(pay, title) {
    if (!pay) return "";
    const row = (l, v, w, c) => `<div style="display:flex;flex-direction:column;gap:4px"><div class="between" style="font-size:13px"><span>${l}</span><span style="font-weight:700">${esc(v)}</span></div><div class="bar"><div style="width:${w}%;background:${c}"></div></div></div>`;
    return `<div class="card"><span class="label" style="color:var(--lime)">What ${esc(title)} pays</span>
      ${row("Starting", pay.start, pay.w[0], "var(--sky)")}${row("Typical", pay.typical, pay.w[1], "var(--lime)")}${row("Top earners", pay.top, pay.w[2], "#FFB86B")}
      <div class="between" style="font-size:14px;border-top:1px solid var(--line);padding-top:10px"><span style="color:var(--muted)">To get there</span><span style="text-align:right;max-width:60%">${esc(pay.school)}</span></div>
      ${pay.note ? `<span style="font-size:13px;line-height:1.4">${esc(pay.note)}</span>` : ""}
      <span style="font-size:11px;color:var(--muted)">Rough US ranges for this prototype. Real numbers will come from the Bureau of Labor Statistics.</span></div>`;
  }
  function earnRows() {
    const e = earned(), o = openChallenges().length;
    return `<a class="quest" href="#challenges"><div class="qicon main">${svg(ICON.coin, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">Challenges${e ? " · $" + e + " earned" : ""}</span><span style="font-size:13px;color:var(--muted)">${o ? o + " open, sponsored by your people" : "Get paid a little for trying real things"}</span></div></a>
      <a class="quest" href="#hired"><div class="qicon">${svg(ICON.bag, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">Get hired</span><span style="font-size:13px;color:var(--muted)">Teen jobs near you, a résumé, and what teens say</span></div></a>`;
  }

  let toastTimer;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
  }
  function addXP(n, why) { S.xp += n; save(); toast("+" + n + " XP  " + (why || "")); }

  function go(h) { if (location.hash === h) render(); else location.hash = h; }

  function smsLink(body) {
    const num = (S.parentPhone || "").replace(/[^\d+]/g, "");
    return "sms:" + num + "?&body=" + encodeURIComponent(body);
  }

  // ---------- Derived ----------
  function dream() { return S.dreamMode === "idea" && S.dreamText ? window.matchDream(S.dreamText) : null; }
  function dreamAreaId() { const d = dream(); return d ? (d.area || S.dreamArea || "") : ""; }

  function areaStatus(id) {
    if (S.cards.some((c) => c.area === id && (c.kind === "Job" || c.kind === "Shadow day"))) return "tried";
    const pros = window.PROS.filter((p) => p.area === id).map((p) => p.id);
    if (Object.keys(S.watched).some((k) => pros.includes(k.split(":")[0]))) return "explored";
    if (S.requests.some((r) => pros.includes(r.pro))) return "explored";
    if (S.cards.some((c) => c.area === id)) return "explored";
    if (dreamAreaId() === id) return "explored";
    return "locked";
  }

  const hasAnswer = (v) => !!(v.youtube || v.text);
  const answerCount = (p) => p.videos.filter(hasAnswer).length;
  function watchedCount(p) { return p.videos.filter((v, i) => hasAnswer(v) && S.watched[p.id + ":" + i]).length; }

  function streakNow() {
    const d = S.daily;
    if (!d.last) return 0;
    const gap = daysBetween(d.last, dstr());
    if (gap <= 1) return d.streak;
    return (gap - 1) <= d.freezes ? d.streak : 0;
  }
  const doneToday = () => S.daily.last === dstr();

  function quests() {
    const q = [];
    const oc = openChallenges()[0];
    if (oc) q.push({ title: oc.title, sub: (money(oc.reward) ? oc.reward : oc.reward || "Challenge") + " from " + (oc.sponsor || "your sponsor"), xp: 30, href: "#challenges" });
    if (!S.cards.length) q.push({ main: true, title: "Log your first job, shadow day or chat", sub: "Earn your first card", xp: 150, href: "#newcard" });
    else {
      const explored = AREAS.filter((a) => areaStatus(a.id) === "explored");
      const a = explored[0] || AREAS.find((x) => areaStatus(x.id) === "locked");
      if (a) q.push({ main: true, title: "Try a job or shadow day in " + a.name, sub: "Light up " + a.name + " on your map", xp: 150, href: "#newcard" });
    }
    const d = dream();
    if (d) {
      const nextAsk = d.ask.find((x, i) => !S.dreamDone["ask" + i]);
      if (nextAsk) q.push({ title: "Dream path: talk to " + nextAsk.charAt(0).toLowerCase() + nextAsk.slice(1), sub: d.title, xp: 50, href: "#dream" });
    }
    if (!S.quizDone) q.push({ title: "Unlock your play style", sub: styleReason(), xp: 100, act: "startstyle" });
    else if (!S.motivesDone && (S.cards.length || Object.keys(S.watched).length >= 2)) q.push({ title: "Unlock what fires you up", sub: "6 quick picks about what keeps you going", xp: 50, act: "startmotives" });
    if (!doneToday()) q.push({ title: "Today's 30-second check-in", sub: "Keep your streak alive", xp: 10, href: "#today" });
    for (const p of window.PROS) {
      const n = watchedCount(p);
      const total = answerCount(p);
      if (total && n < total) { q.push({ title: "Watch " + p.name + ": " + p.job, sub: n + " of " + total + " answers seen", xp: 20, href: "#pro/" + p.id }); break; }
    }
    const asked = new Set(S.requests.map((r) => r.pro));
    const ready = window.PROS.find((p) => watchedCount(p) > 0 && !asked.has(p.id)) || window.PROS.find((p) => !asked.has(p.id) && !answerCount(p));
    if (ready) q.push({ title: "Ask " + ready.name + " for a chat", sub: "Side quest", xp: 30, href: "#pro/" + ready.id });
    return q.slice(0, 5);
  }

  // ---------- Pieces ----------
  function tabs(active) {
    const items = [["me", "Me", "#me"], ["map", "Map", "#map"], ["pros", "Pros", "#pros"], ["today", "Today", "#today"], ["cards", "Cards", "#cards"]];
    $("#tabsin").innerHTML = items.map(([k, l, h]) => `<a href="${h}" class="${k === active ? "on" : ""}" ${k === active ? 'aria-current="page"' : ""}>${svg(ICON[k])}${l}</a>`).join("");
    $("#tabs").hidden = !active;
  }
  const backBtn = (h, label) => `<button class="back" data-go="${h}">${svg(ICON.back, 18)}${esc(label || "Back")}</button>`;
  function questRow(q) {
    return `<${q.act ? "button" : "a"} class="quest" ${q.act ? `data-act="${q.act}"` : `href="${q.href}"`}><div class="qicon ${q.main ? "main" : ""}">${svg(q.main ? ICON.star : ICON.target, 20)}</div>
      <div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">${esc(q.title)}</span><span style="font-size:13px;color:var(--muted)">${esc(q.sub)}</span></div>
      <span class="xp ${q.main ? "main" : ""}">+${q.xp}</span></${q.act ? "button" : "a"}>`;
  }

  // ---------- Screens ----------
  const V = {};

  V.start = function () {
    tabs(null);
    const m = S.dreamMode;
    return `<div style="display:flex;flex-direction:column;gap:6px;margin-top:12px">
        <span class="label">First Shift</span>
        <h1 class="h1">Try real jobs now, while it's cheap to switch.</h1>
        <p class="sub">Figure out what you're good at, what you love, and what you want to learn more about, before you have to decide.</p>
      </div>
      <div class="card">
        <div class="field"><label for="nm">Your first name</label><input id="nm" autocomplete="given-name" value="${esc(S.name)}"></div>
        <div class="field"><label for="ph">A parent's cell number (for asking adults for chats and shadow days)</label><input id="ph" type="tel" inputmode="tel" autocomplete="off" value="${esc(S.parentPhone)}"></div>
      </div>
      <div class="card">
        <span class="h2">What do you want to do for work as an adult?</span>
        <div class="chips" role="group" aria-label="Choose one">
          <button class="chip ${m === "idea" ? "on" : ""}" data-dm="idea">I have something in mind</button>
          <button class="chip ${m === "exploring" ? "on" : ""}" data-dm="exploring">I'm exploring a few things</button>
          <button class="chip ${m === "none" ? "on" : ""}" data-dm="none">No idea yet</button>
        </div>
        ${m === "idea" ? `<div class="field"><label for="dt">What is it? Any answer counts.</label><input id="dt" placeholder="Pro basketball player, vet, YouTuber..." value="${esc(S.dreamText)}"></div>` : ""}
        ${m === "exploring" ? `<div class="field"><label for="dt">What are you curious about? (optional)</label><input id="dt" value="${esc(S.dreamText)}"></div>` : ""}
        ${m === "none" ? `<p class="sub">Perfect. That's exactly what this is for.</p>` : ""}
      </div>
      <button class="btn" data-act="begin">Let's go</button>
      <p class="sub center" style="font-size:12px">All of your data stays on this phone.</p>`;
  };

  V.choose = function () {
    tabs(null);
    const opt = (k, title, sub, icon) => `<button class="quest" data-move="${k}" style="padding:18px 16px"><div class="qicon main">${svg(icon, 20)}</div>
      <div style="flex:1;display:flex;flex-direction:column;gap:4px"><span style="font-weight:700;font-size:17px">${title}</span><span style="font-size:14px;color:var(--muted);line-height:1.35">${sub}</span></div></button>`;
    return `<div style="display:flex;flex-direction:column;gap:6px;margin-top:12px"><span class="label">Hey ${esc(S.name)}</span>
        <h1 class="h1">Where do you want to start?</h1><p class="sub">Pick one. You can do the others any time.</p></div>
      ${opt("style", "See what jobs fit my style", "A quick game that shows how you like to work and which jobs might fit. About 2 minutes.", ICON.star)}
      ${opt("reflect", "Reflect on a job I've had", "Babysitting, mowing, a real job, anything counts. Turn it into your first card.", ICON.cards)}
      ${opt("explore", "See what's out there", dream() ? "Start with your dream path: " + esc(dream().title) + "." : "Hear from real adults about what their jobs are actually like.", ICON.map)}`;
  };

  V.quiz = function (part) {
    tabs(null);
    if (part !== "motives") {
      const total = QUIZ.length;
      const item = QUIZ[quiz.i];
      const order = ["D", "I", "S", "C"].sort((a, b) => ((quiz.i * 7 + a.charCodeAt(0)) % 5) - ((quiz.i * 7 + b.charCodeAt(0)) % 5));
      const step = quiz.most == null ? "Tap the one MOST like you" : "Now tap the one LEAST like you";
      return `<div class="progress" aria-hidden="true"><div style="width:${(quiz.i / total) * 100}%"></div></div>
        <div class="between"><span class="label">${quiz.i + 1} of ${total}</span><button class="back" data-act="qexit" style="font-size:13px">Finish later</button></div>
        <h1 class="h1">${esc(item.q)}</h1>
        <p class="sub" style="color:${quiz.most == null ? "var(--lime)" : "var(--sky)"};font-weight:600">${step}</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${order.map((k) => `<button class="opt ${quiz.most === k ? "most" : ""} ${quiz.least === k ? "least" : ""}" data-pick="${k}">${esc(item.o[k])}${quiz.most === k ? '<span class="tag" style="background:var(--ink);color:var(--lime)">Most</span>' : ""}${quiz.least === k ? '<span class="tag" style="background:var(--line);color:var(--muted)">Least</span>' : ""}</button>`).join("")}
        </div>
        ${quiz.i > 0 ? `<button class="back" data-act="qback">${svg(ICON.back, 18)}Previous</button>` : ""}`;
    }
    const mi = quiz.m;
    const m = MOTIVES[mi];
    const cur = quiz.mv[mi];
    const opts = [["a2", "Totally " + m.at], ["a1", "Kind of " + m.at], ["b1", "Kind of " + m.bt], ["b2", "Totally " + m.bt]];
    return `<div class="progress" aria-hidden="true"><div style="width:${(mi / MOTIVES.length) * 100}%"></div></div>
      <div class="between"><span class="label">${mi + 1} of ${MOTIVES.length} · This or that</span><button class="back" data-act="qexit" style="font-size:13px">Finish later</button></div>
      <h1 class="h1">Which sounds more like you?</h1>
      <div class="pair"><div><span class="label" style="color:var(--lime)">${esc(m.at)}</span><br>${esc(m.a)}</div><div><span class="label" style="color:var(--sky)">${esc(m.bt)}</span><br>${esc(m.b)}</div></div>
      <div class="scale" role="group" aria-label="How much">${opts.map(([v, l]) => `<button class="${cur === v ? "on" : ""}" data-mv="${v}">${l}</button>`).join("")}</div>
      ${mi > 0 ? `<button class="back" data-act="mback">${svg(ICON.back, 18)}Previous</button>` : ""}`;
  };

  function styleFit() {
    const st = topStyle();
    const pros = window.PROS.filter((p) => (p.fit || []).includes(st));
    return `<div class="card"><span class="label">Jobs that often fit ${esc(STYLES[st].name)}</span>
        <div class="chips">${STYLES[st].jobs.map((j) => `<span class="chip" style="cursor:default">${esc(j)}</span>`).join("")}</div>
        <span style="font-size:13px;color:var(--muted)">Fit isn't a rule. Lots of people thrive outside their style. Trying it is how you find out.</span></div>
      ${pros.length ? `<span class="label">Pros you know whose jobs fit your style</span>${pros.map((p) => `<a class="quest" href="#pro/${p.id}"><div class="qicon">${svg(ICON.pros, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">${esc(p.name)}</span><span style="font-size:13px;color:var(--muted)">${esc(p.job)}</span></div></a>`).join("")}` : ""}`;
  }

  V.reveal = function () {
    tabs(null);
    const st = topStyle();
    return `<div class="pop" style="display:flex;flex-direction:column;gap:16px;margin-top:24px">
      <span class="label center">Your play style</span>
      <h1 class="h1 center" style="font-size:40px;color:var(--lime)">${esc(STYLES[st].name)}</h1>
      <p class="sub center" style="font-size:16px">${esc(STYLES[st].line)}</p>
      ${characterCard(false)}
      ${styleFit()}
      <button class="btn" data-go="#me">See my card</button>
      <p class="sub center" style="font-size:12px">This is a quick read, not a full assessment. Your parent can add real assessment scores later.</p></div>`;
  };

  function topStyle() { const d = S.disc || { D: 50, I: 50, S: 50, C: 50 }; return Object.keys(d).sort((a, b) => d[b] - d[a])[0]; }

  function styleReason() {
    if (S.cards.length) return "Find out why you loved or hated your " + (S.cards[S.cards.length - 1].title || "last job").toLowerCase() + ".";
    if (Object.keys(S.watched).length >= 3) return "See which of the jobs you've heard about fit how you work.";
    if (dream()) return "See how your style fits " + dream().title.toLowerCase() + ", and which part of it might suit you best.";
    return "A quick game that shows how you like to work and which jobs might fit.";
  }

  function characterCard(full) {
    if (!S.quizDone) {
      return `<div class="card" style="border-radius:24px;border-style:dashed;border-color:var(--dim)">
        <div class="row"><div class="qicon">${svg(ICON.lock, 20)}</div><div style="display:flex;flex-direction:column;gap:2px"><span style="font-weight:700;font-size:17px">Unlock your play style</span><span style="font-size:13px;color:var(--muted)">2 minutes · +100 XP</span></div></div>
        <span style="font-size:15px;line-height:1.4">${esc(styleReason())}</span>
        <button class="btn" data-act="startstyle">Play</button></div>`;
    }
    const d = S.disc;
    const st = topStyle();
    const bars = ["D", "I", "S", "C"].map((k) => `<div style="display:flex;flex-direction:column;gap:4px">
        <div class="between" style="font-size:13px"><span>${STYLES[k].stat}</span><span style="color:var(--muted)">${d[k]}</span></div>
        <div class="bar"><div style="width:${d[k]}%;background:${k === st ? "var(--lime)" : "var(--sky)"}"></div></div></div>`).join("");
    const motives = S.motivesDone
      ? `<div style="display:flex;flex-direction:column;gap:8px"><span class="label">What fires you up</span>
        <div class="chips">${(S.motives || []).map((t) => `<span class="chip" style="cursor:default">${esc(t)}</span>`).join("")}</div></div>`
      : (full ? `<button class="quest" data-act="startmotives" style="background:var(--bg)"><div class="qicon">${svg(ICON.lock, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">Unlock what fires you up</span><span style="font-size:13px;color:var(--muted)">6 quick picks · +50 XP</span></div></button>` : "");
    return `<div class="card" style="border-radius:24px;gap:16px">
      ${full ? `<div class="row"><div style="width:64px;height:64px;border-radius:20px;background:var(--lime);color:var(--ink);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:26px">${esc((S.name || "?").charAt(0).toUpperCase())}</div>
        <div style="display:flex;flex-direction:column;gap:2px"><span class="label">${esc(S.name || "You")}${S.source === "tti" ? " · TTI scores" : ""}</span><span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:26px;line-height:1.1">${esc(STYLES[st].name)}</span><span style="font-size:13px;color:var(--muted)">${esc(STYLES[st].line)}</span></div></div>` : ""}
      <div style="display:flex;flex-direction:column;gap:10px">${bars}</div>
      ${motives}
      <div style="display:flex;flex-direction:column;gap:4px"><span class="label">You might thrive where</span><span style="font-size:15px;line-height:1.4">${esc(STYLES[st].thrive)}</span></div>
    </div>`;
  }

  V.me = function () {
    tabs("me");
    const d = dream();
    return `<div class="between"><span class="h2">${esc(S.name ? S.name + "'s card" : "Your card")}</span><span style="font-size:13px;color:var(--muted)">Level ${level()} · ${S.xp} XP</span></div>
      ${characterCard(true)}
      ${S.quizDone ? `<a class="quest" href="#reveal"><div class="qicon">${svg(ICON.star, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">Jobs that fit your style</span><span style="font-size:13px;color:var(--muted)">And pros you know who do them</span></div></a>` : ""}
      ${d ? `<a class="quest" href="#dream"><div class="qicon main">${svg(ICON.target, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span class="label">Your dream path</span><span style="font-weight:700;font-size:17px">${esc(d.title)}</span><span style="font-size:13px;color:var(--muted)">${Object.keys(S.dreamDone).length} steps done</span></div></a>`
        : `<button class="quest" data-go="#settings"><div class="qicon">${svg(ICON.target, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">Have something in mind?</span><span style="font-size:13px;color:var(--muted)">Add a dream and get a path for it</span></div></button>`}
      ${S.quizDone ? `<div class="row"><a class="btn" href="#sharecard">${svg(ICON.share, 18)}Share my card</a></div>
      <p class="sub center" style="font-size:12px">Only you see your card unless you share it.</p>` : ""}
      ${earnRows()}
      <div class="card"><span class="h2">Bring a friend along</span><span style="font-size:14px;color:var(--muted)">Exploring is better with someone. Send them the app.</span>
        <button class="btn ghost" data-act="invitefriend">${svg(ICON.share, 18)}Invite a friend · +20 XP</button></div>
      <button class="back" data-go="#settings" style="align-self:center">${svg(ICON.gear, 18)}Settings and parent tools</button>`;
  };

  V.dream = function () {
    tabs("me");
    const d = dream();
    if (!d) return `${backBtn("#me")}<p class="sub">No dream added yet.</p>`;
    const box = (key, items, label, kind) => `<div class="card"><span class="label">${label}</span>
      ${items.map((x, i) => {
        const done = S.dreamDone[key + i];
        return `<div class="between" style="border-top:${i ? "1px solid var(--line)" : "none"};padding-top:${i ? "12px" : "0"}">
          <span style="font-size:15px;line-height:1.35;${done ? "color:var(--muted);text-decoration:line-through" : ""}">${esc(x)}</span>
          ${done ? `<span style="color:var(--lime)">${svg(ICON.check, 20)}</span>` : `<button class="chip" data-dream="${key}:${i}:${kind}">${kind === "ask" ? "Ask" : kind === "shadow" ? "Request" : kind === "try" ? "Did it" : "Curious"}</button>`}
        </div>`;
      }).join("")}</div>`;
    const needArea = d.custom && !S.dreamArea;
    return `${backBtn("#me")}
      <div style="display:flex;flex-direction:column;gap:6px"><span class="label">Your dream path</span><h1 class="h1">${esc(d.title)}</h1>
      <p class="sub">Let's find out what it's really like. Talk to people in it, see it up close, and try a piece of it now. Every step teaches you something, wherever it leads.</p></div>
      ${!S.quizDone ? `<button class="quest" data-act="startstyle"><div class="qicon main">${svg(ICON.star, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">Which part of this world fits you?</span><span style="font-size:13px;color:var(--muted)">Unlock your play style · 2 minutes</span></div><span class="xp main">+100</span></button>` : ""}
      ${needArea ? `<div class="card"><span class="label">Which area is closest?</span><div class="chips">${AREAS.map((a) => `<button class="chip" data-darea="${a.id}">${a.name}</button>`).join("")}</div></div>` : ""}
      ${payCard(window.PAY_DREAM[d.id], d.title.toLowerCase())}
      ${box("world", d.world, "The whole world around it", "world")}
      ${box("ask", d.ask, "People to ask", "ask")}
      ${box("shadow", d.shadow, "Ways to see it up close", "shadow")}
      ${box("try", d.tryit, "A piece to try now", "try")}
      <p class="sub" style="font-size:13px">"Ask" and "Request" open a text to your parent so they can help set it up.</p>`;
  };

  V.map = function () {
    tabs("map");
    const n = AREAS.filter((a) => areaStatus(a.id) !== "locked").length;
    return `<div style="display:flex;flex-direction:column;gap:4px"><h1 class="h1">Your map</h1><p class="sub">${n} of ${AREAS.length} areas explored. Every job, video and question lights up more.</p></div>
      <div class="grid3">${AREAS.map((a) => {
        const s = areaStatus(a.id);
        return `<div class="tile ${s}">${svg(s === "locked" ? ICON.lock : a.icon, 22, s === "explored" ? 'style="color:var(--lime)"' : "")}<b style="font-weight:${s === "locked" ? 400 : 700}">${a.name}</b></div>`;
      }).join("")}</div>
      <p class="sub" style="font-size:12px">Solid: you tried a job or shadow day there. Outlined: you watched, asked or dreamed about it.</p>
      ${earnRows()}
      <span class="label">Quests</span>
      <div style="display:flex;flex-direction:column;gap:10px">${quests().map(questRow).join("")}</div>`;
  };

  V.pros = function () {
    tabs("pros");
    return `<div style="display:flex;flex-direction:column;gap:4px"><h1 class="h1">Pros you know</h1><p class="sub">Real adults in your life, answering real questions about their jobs.</p></div>
      ${window.PROS.map((p) => {
        const n = watchedCount(p), total = answerCount(p);
        return `<a class="card" href="#pro/${p.id}" style="text-decoration:none;color:inherit;gap:8px">
          <div class="row">${proAvatar(p, 48)}<div style="display:flex;flex-direction:column;gap:2px;flex:1;min-width:0">
            <span style="font-weight:700;font-size:17px">${esc(p.name)}</span>
            <span style="font-size:14px">${esc(p.job)}</span>
            <span style="font-size:13px;color:var(--muted)">${[p.relation, areaName(p.area)].filter(Boolean).map(esc).join(" · ")}</span></div></div>
          <div class="between" style="font-size:13px"><span style="color:var(--muted)">${total ? n + " of " + total + " answers seen" : "Video answers coming soon"}</span><span style="color:var(--lime)">${[p.offers.chat ? "Chat" : "", p.offers.shadow ? "Shadow" : ""].filter(Boolean).join(" · ")}</span></div>
          ${total ? `<div class="bar"><div style="width:${(n / total) * 100}%;background:var(--lime)"></div></div>` : ""}
        </a>`;
      }).join("")}
      <p class="sub" style="font-size:12px">Their video answers are on the way. You can already ask any of them for a chat.</p>
      ${inviteBlock()}
      <a class="back" href="#forpros" style="align-self:center">See what pros are asked to do</a>`;
  };

  V.pro = function (id) {
    tabs("pros");
    const p = window.PROS.find((x) => x.id === id);
    if (!p) return backBtn("#pros") + '<p class="sub">Not found.</p>';
    const asked = S.requests.filter((r) => r.pro === p.id).map((r) => r.type);
    return `${backBtn("#pros", "Pros")}
      <div style="display:flex;flex-direction:column;gap:4px">
        <div class="row">${proAvatar(p, 64)}<h1 class="h1">${esc(p.name)}</h1></div>
        <span style="font-size:16px">${esc(p.job)}</span>
        <span class="sub">${[p.relation, areaName(p.area)].filter(Boolean).map(esc).join(" · ")}</span>
      </div>
      ${payCard(window.PAY_JOB[p.job], "this job")}
      ${!answerCount(p) ? `<div class="card"><span class="label">Video answers coming soon</span><span style="font-size:15px;line-height:1.4">${esc(p.name)} will answer these. Want to hear it sooner? Ask for a chat below.</span>
        <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:15px;line-height:1.4">${p.videos.map((v) => `<li>${esc(v.q)}</li>`).join("")}</ol></div>` : ""}
      ${p.videos.map((v, i) => {
        if (!hasAnswer(v) && !answerCount(p)) return "";
        const w = S.watched[p.id + ":" + i];
        const yt = ytId(v.youtube);
        return `<div class="card"><div class="between"><span style="font-weight:600;font-size:15px">${esc(v.q)}</span>${w ? `<span style="color:var(--lime)">${svg(ICON.check, 20)}</span>` : ""}</div>
          ${!hasAnswer(v) ? `<div class="ans" style="color:var(--muted)">Coming soon. Ask ${esc(p.name)} in person if you can't wait.</div>` : yt ? `<iframe class="video" src="https://www.youtube-nocookie.com/embed/${yt}" title="${esc(p.name)}: ${esc(v.q)}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>` : `<div class="ans">${esc(v.text || "Video coming soon.")}</div>`}
          ${w || !hasAnswer(v) ? "" : `<button class="btn ghost small" data-watch="${p.id}:${i}">${yt ? "I watched it" : "Got it"} · +20 XP</button>`}
        </div>`;
      }).join("")}
      ${p.note ? `<p class="sub">${esc(p.note)}</p>` : ""}
      <div class="card"><span class="h2">Want to know more?</span>
        <div class="field"><label for="why">Why you'd like to talk to ${esc(p.name)} (optional)</label><textarea id="why" placeholder="I'm curious about..."></textarea></div>
        ${p.offers.chat ? `<button class="btn" data-req="${p.id}:chat">${asked.includes("chat") ? "Asked for a chat · ask again" : "Ask for a 20-minute chat · +30 XP"}</button>` : ""}
        ${p.offers.shadow ? `<button class="btn ghost" data-req="${p.id}:shadow">${asked.includes("shadow") ? "Asked to shadow · ask again" : "Ask to shadow for a day · +30 XP"}</button>` : ""}
        <p class="sub" style="font-size:12px">This opens a text to your parent, who sets it up with ${esc(p.name)}.</p>
      </div>`;
  };

  const AV_COLORS = ["#C8F560", "#7CC8FF", "#FFB347", "#FF8FA3", "#B39DFF", "#6EE7B7"];
  function proAvatar(p, size) {
    size = size || 48;
    if (p.photo) return `<img src="${esc(p.photo)}" alt="" style="width:${size}px;height:${size}px;border-radius:999px;object-fit:cover;flex-shrink:0">`;
    const words = p.name.replace(/^(Uncle|Aunt|Coach|Mr\.|Mrs\.|Ms\.|Dr\.)\s+/i, "").split(/\s+/);
    const ini = (words[0][0] + (words[1] ? words[1][0] : "")).toUpperCase();
    const i = window.PROS.indexOf(p);
    return `<div aria-hidden="true" style="width:${size}px;height:${size}px;border-radius:999px;background:${AV_COLORS[(i < 0 ? 0 : i) % AV_COLORS.length]};color:var(--ink);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:${Math.round(size * 0.38)}px;flex-shrink:0">${esc(ini)}</div>`;
  }

  function ytId(u) {
    if (!u) return "";
    const m = String(u).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : "";
  }

  const SITE = "https://loren-tcl.github.io/first-shift";
  function inviteBlock() {
    return `<div class="card"><span class="h2">Know someone with an interesting job?</span>
      <span style="font-size:14px;color:var(--muted);line-height:1.4">Invite them to answer five quick questions on video. Your parent sends the invite, so they know it's really from you.</span>
      <div class="field"><label for="inv_n">Their name</label><input id="inv_n" placeholder="Coach Rivera, Aunt Kim..."></div>
      <div class="field"><label for="inv_j">Their job (if you know it)</label><input id="inv_j"></div>
      <button class="btn ghost" data-act="invitepro">Ask my parent to invite them · +30 XP</button></div>`;
  }

  V.forpros = function () {
    tabs(S.started ? "pros" : null);
    return `${S.started ? backBtn("#pros", "Pros") : ""}
      <div style="display:flex;flex-direction:column;gap:6px"><span class="label">For pros</span>
      <h1 class="h1">A teen you know wants to hear about your job.</h1>
      <p class="sub">First Shift helps teens try real jobs and talk to real adults before they have to choose a path. You'd be one of those adults.</p></div>
      <div class="card"><span class="label">What you'd do</span>
        <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:15px;line-height:1.45">
          <li>Record five short videos on your phone, about a minute each, answering the questions below.</li>
          <li>Upload them to YouTube as unlisted videos.</li>
          <li>Text the links to the person who invited you, along with a photo of yourself you like. It shows on your page.</li>
          <li>If you're up for it, say yes to a 20-minute chat or a shadow day when a teen asks. A parent always sets it up.</li>
        </ol></div>
      <div class="card"><span class="label">The five questions</span>
        <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:15px;line-height:1.4">
          <li>What do you actually do all day?</li><li>What's the best part, and the part you'd skip if you could?</li><li>How did you end up doing this?</li><li>What would you tell a 15-year-old who's curious about it?</li><li>What could a teen do now to try a small piece of it?</li></ol>
        <span style="font-size:13px;color:var(--muted)">Be honest, including the boring parts. That's what helps most.</span></div>
      <div class="card"><span class="h2">Know another adult who'd be good at this?</span>
        <button class="btn" data-act="sharepros">Pass this invite along</button></div>`;
  };

  V.today = function () {
    tabs("today");
    const st = streakNow();
    const prompt = PROMPTS[Math.floor(Date.now() / 86400000) % PROMPTS.length];
    const done = doneToday();
    const recent = S.daily.entries.slice(-5).reverse();
    return `<div class="card" style="align-items:center;text-align:center;gap:6px;padding:24px">
        <span style="color:${st ? "var(--lime)" : "var(--muted)"}">${svg(ICON.today, 40, st ? 'fill="currentColor"' : "")}</span>
        <span class="streakbig">${st}</span><span style="font-weight:600">day streak</span>
        <span class="sub" style="font-size:13px">${S.daily.freezes} freeze${S.daily.freezes === 1 ? "" : "s"} saved · earn one every 7 days</span>
      </div>
      ${done ? `<div class="card"><span class="label">Today</span><span style="font-weight:600;font-size:17px">Done for today. See you tomorrow.</span></div>`
        : `<div class="card"><span class="label">Today, 30 seconds</span><span style="font-weight:600;font-size:18px;line-height:1.3">${esc(prompt)}</span>
          <div class="chips" role="group" aria-label="Pick any">${DAY_TAGS.map((t) => `<button class="chip" data-tag="${esc(t)}" aria-pressed="false">${esc(t)}</button>`).join("")}</div>
          <div class="field"><label for="note">Say more (optional)</label><textarea id="note"></textarea></div>
          <button class="btn" data-act="daily">Save · +10 XP</button></div>`}
      ${recent.length ? `<span class="label">Recent</span>${recent.map((e) => `<div class="card" style="gap:6px;padding:14px 16px"><span style="font-size:12px;color:var(--muted)">${esc(e.date)}</span>${e.tags && e.tags.length ? `<span style="font-size:14px;color:var(--lime)">${esc(e.tags.join(" · "))}</span>` : ""}${e.note ? `<span style="font-size:14px">${esc(e.note)}</span>` : ""}</div>`).join("")}` : ""}`;
  };

  V.cards = function () {
    tabs("cards");
    const cards = S.cards.slice().reverse();
    return `<div class="between"><h1 class="h1">Your cards</h1><span style="font-size:13px;color:var(--muted)">${S.cards.length} earned</span></div>
      <a class="btn" href="#newcard">Log a job, shadow day or chat</a>
      ${S.cards.length && !S.quizDone ? `<button class="quest" data-act="startstyle"><div class="qicon main">${svg(ICON.star, 20)}</div><div style="flex:1;display:flex;flex-direction:column;gap:2px"><span style="font-weight:600;font-size:15px">Why did that job feel that way?</span><span style="font-size:13px;color:var(--muted)">Unlock your play style and find out · 2 minutes</span></div><span class="xp main">+100</span></button>` : ""}
      ${cards.length ? cards.map(cardView).join("") : `<div class="card" style="border-style:dashed;border-color:var(--dim)"><span style="font-weight:600">No cards yet</span><span class="sub">Every job, shadow day or chat becomes a card when you write what you learned. That's how you level up.</span></div>`}
      <div class="card"><span class="label">Before you say yes to a job, ask</span>
        <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:15px;line-height:1.4">
          <li>What could I learn about here?</li><li>Who would teach me?</li><li>What would I be trusted with?</li></ol></div>`;
  };

  function cardView(c) {
    return `<div class="jobcard">
      <div class="between" style="align-items:flex-start"><div style="display:flex;flex-direction:column;gap:2px">
        <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px">${esc(areaName(c.area))} · ${esc(c.kind)}</span>
        <span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:22px;line-height:1.15">${esc(c.title)}</span>
        <span style="font-size:13px">${esc([c.where, c.length].filter(Boolean).join(" · "))}</span></div>
        <span class="tag" style="background:var(--ink);color:var(--lime)">+${c.xp} XP</span></div>
      <div class="jgrid">
        ${[["Loved", c.loved], ["Drained me", c.drained], ["Learned about me", c.learned], ["Try next", c.next]].filter((x) => x[1]).map(([l, v]) => `<div class="jcell"><span>${l}</span><span>${esc(v)}</span></div>`).join("")}
      </div></div>`;
  }

  V.newcard = function () {
    tabs("cards");
    const c = cardDraft || { kind: "Job", title: "", where: "", area: "", length: "", loved: "", drained: "", learned: "", next: "" };
    cardDraft = c;
    const kinds = ["Job", "Shadow day", "Chat", "Something I tried"];
    return `${backBtn("#cards", "Cards")}
      <h1 class="h1">Earn a card</h1>
      <p class="sub">Write what it taught you. That's the whole point, and it's what earns the card.</p>
      <div class="card">
        <span class="label">What was it?</span>
        <div class="chips">${kinds.map((k) => `<button class="chip ${c.kind === k ? "on" : ""}" data-kind="${k}">${k}</button>`).join("")}</div>
        <div class="field"><label for="c_title">Job or role</label><input id="c_title" data-f="title" value="${esc(c.title)}" placeholder="Prep cook, lifeguard, chat with a nurse..."></div>
        <div class="field"><label for="c_where">Where or with who</label><input id="c_where" data-f="where" value="${esc(c.where)}"></div>
        <div class="field"><label for="c_len">How long</label><input id="c_len" data-f="length" value="${esc(c.length)}" placeholder="One afternoon, 3 months..."></div>
        <span class="label">Area</span>
        <div class="chips">${AREAS.map((a) => `<button class="chip ${c.area === a.id ? "on" : ""}" data-carea="${a.id}">${a.name}</button>`).join("")}</div>
      </div>
      <div class="card"><span class="label">The reflection</span>
        <div class="field"><label for="c_l">What did you like doing most?</label><textarea id="c_l" data-f="loved">${esc(c.loved)}</textarea></div>
        <div class="field"><label for="c_d">What drained you, even if you were good at it?</label><textarea id="c_d" data-f="drained">${esc(c.drained)}</textarea></div>
        <div class="field"><label for="c_m">What did you learn about yourself?</label><textarea id="c_m" data-f="learned">${esc(c.learned)}</textarea></div>
        <div class="field"><label for="c_n">What do you want to try next?</label><textarea id="c_n" data-f="next">${esc(c.next)}</textarea></div>
      </div>
      <button class="btn" data-act="savecard">Earn this card</button>`;
  };

  V.settings = function () {
    tabs("me");
    const d = S.disc || { D: 50, I: 50, S: 50, C: 50 };
    return `${backBtn("#me")}
      <h1 class="h1">Settings</h1>
      <div class="card"><span class="label">You</span>
        <div class="field"><label for="s_nm">First name</label><input id="s_nm" value="${esc(S.name)}"></div>
        <div class="field"><label for="s_ph">Parent's cell number</label><input id="s_ph" type="tel" value="${esc(S.parentPhone)}"></div>
        <div class="field"><label for="s_dt">Something you have in mind (leave blank if not)</label><input id="s_dt" value="${S.dreamMode === "idea" ? esc(S.dreamText) : ""}" placeholder="Pro basketball player, vet..."></div>
        <button class="btn small" data-act="saveyou">Save</button></div>
      <div class="card"><span class="label">Parent tools · challenges</span>
        <p class="sub" style="font-size:13px">Put a little money behind something you want your teen to try, and approve challenges they finish. You pay it out yourself.</p>
        <a class="btn small" href="#sponsor">Sponsor or approve challenges${S.challenges.filter((c) => c.status === "claimed").length ? " · " + S.challenges.filter((c) => c.status === "claimed").length + " waiting" : ""}</a></div>
      <div class="card"><span class="label">Parent tools · real TTI scores</span>
        <p class="sub" style="font-size:13px">Type the four DISC scores (0 to 100) from the teen's TTI report. They replace the quiz.</p>
        <div class="grid3" style="grid-template-columns:repeat(4,minmax(0,1fr))">${["D", "I", "S", "C"].map((k) => `<div class="field"><label for="t_${k}">${STYLES[k].stat}</label><input id="t_${k}" type="number" min="0" max="100" inputmode="numeric" value="${d[k]}"></div>`).join("")}</div>
        <span class="label">Top three motivators</span>
        <div class="chips">${ALL_MOTIVE_TAGS.map((t) => `<button class="chip ${S.motives.includes(t) ? "on" : ""}" data-mtag="${esc(t)}">${esc(t)}</button>`).join("")}</div>
        <button class="btn small" data-act="savetti">Use these scores</button></div>
      <div class="card"><span class="label">For testing</span>
        <button class="btn ghost small" data-act="export">Copy usage log</button>
        <button class="btn ghost small" data-act="retake">Retake the quiz</button>
        <button class="btn ghost small" data-act="reset" style="color:#FFB4A8">Erase all of your data on this phone</button></div>`;
  };


  // ---------- Earn: challenges ----------
  let spDraft = { kind: "chat", who: "", reward: "$10", sponsor: "", custom: "" };
  function chRow(c, teen) {
    const right = c.status === "approved" ? `<span class="tag" style="background:var(--lime);color:var(--ink)">Paid</span>`
      : c.status === "claimed" ? `<span class="tag" style="background:var(--line);color:var(--muted)">Waiting for OK</span>`
      : teen ? `<button class="chip" data-chdone="${c.id}">I did it</button>` : `<button class="chip" data-chdel="${c.id}">Remove</button>`;
    return `<div class="card" style="flex-direction:row;align-items:center;gap:12px;padding:12px 14px"><div style="flex:1;display:flex;flex-direction:column;gap:3px">
      <span style="font-weight:600;font-size:15px;line-height:1.3">${esc(c.title)}</span>
      <span style="font-size:12px;color:var(--muted)">${esc((money(c.reward) ? c.reward : c.reward || "") + (c.sponsor ? " · from " + c.sponsor : ""))}</span></div>${right}</div>`;
  }
  V.challenges = function () {
    tabs("map");
    const open = S.challenges.filter((c) => c.status === "open"), wait = S.challenges.filter((c) => c.status === "claimed"), done = S.challenges.filter((c) => c.status === "approved");
    return `${backBtn("#map", "Map")}
      <div style="background:linear-gradient(135deg,#C8F560,#7CC8FF);color:var(--ink);border-radius:22px;padding:16px 18px;display:flex;flex-direction:column;gap:4px">
        <span class="label" style="color:var(--ink)">Earned so far</span><span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:40px;line-height:1">$${earned()}</span>
        <span style="font-size:13px;font-weight:600">Your sponsors pay you directly</span></div>
      ${open.length ? `<span class="label">Open</span>${open.map((c) => chRow(c, true)).join("")}` : `<div class="card" style="border-style:dashed;border-color:var(--dim)"><span style="font-weight:600">No challenges yet</span><span class="sub">A parent, grandparent or pro can put a few dollars behind something real: a chat, a shadow day, a new job. Ask one to set it up on your phone.</span>
        <button class="btn ghost" data-act="asksponsor">${svg(ICON.share, 18)}Ask a parent to sponsor one</button></div>`}
      ${wait.length ? `<span class="label">Waiting for your sponsor's OK</span>${wait.map((c) => chRow(c, true)).join("")}` : ""}
      ${done.length ? `<span class="label">Done</span>${done.map((c) => chRow(c, true)).join("")}` : ""}
      <p class="sub center" style="font-size:12px">Money only for things you do in the real world. Nothing for taps in the app.</p>
      <a class="back" href="#sponsor" style="align-self:center">For parents: sponsor or approve</a>`;
  };
  V.sponsor = function () {
    tabs(null);
    const d = spDraft;
    const kind = CH_KINDS.find((k) => k[0] === d.kind);
    const needsWho = ["chat", "shadow", "duo"].includes(d.kind);
    const wait = S.challenges.filter((c) => c.status === "claimed"), open = S.challenges.filter((c) => c.status === "open");
    return `${backBtn("#challenges", "Challenges")}
      <div style="display:flex;flex-direction:column;gap:4px"><span class="label">For parents and sponsors</span><h1 class="h1">Sponsor a challenge</h1>
      <p class="sub">Put a little money behind something you want ${esc(S.name || "your teen")} to try. You pay it out yourself; the app just keeps track.</p></div>
      ${wait.length ? `<div class="card" style="border-color:var(--lime)"><span class="label" style="color:var(--lime)">Waiting for your OK</span>
        ${wait.map((c) => `<div class="between" style="gap:10px"><span style="font-size:15px;line-height:1.35">${esc(c.title)}<br><span style="font-size:12px;color:var(--muted)">${esc(c.reward)}${c.card ? " · card earned" : ""}</span></span><button class="chip on" data-chok="${c.id}">Approve</button></div>`).join("")}</div>` : ""}
      <div class="card"><span class="label">Pick one</span>
        <div class="chips">${CH_KINDS.map((k) => `<button class="chip ${d.kind === k[0] ? "on" : ""}" data-spk="${k[0]}">${k[1]}</button>`).join("")}</div>
        ${needsWho ? `<span class="label">With who</span><div class="chips">${window.PROS.map((p) => `<button class="chip ${d.who === p.name ? "on" : ""}" data-spw="${esc(p.name)}">${esc(p.name)}</button>`).join("")}</div>` : ""}
        ${d.kind === "custom" ? `<div class="field"><label for="sp_c">The challenge</label><input id="sp_c" value="${esc(d.custom)}" placeholder="Ask your boss what they'd do differently..."></div>` : `<span style="font-size:15px;font-weight:600;line-height:1.35">${esc(kind[2](d.who))}</span>`}
        <span class="label">Reward</span>
        <div class="chips">${["$5", "$10", "$25"].map((r) => `<button class="chip ${d.reward === r ? "on" : ""}" data-spr="${r}">${r}</button>`).join("")}<button class="chip ${money(d.reward) ? "" : "on"}" data-spr="other">Not money</button></div>
        ${money(d.reward) ? "" : `<div class="field"><label for="sp_o">What they get</label><input id="sp_o" value="${esc(d.reward === "other" ? "" : d.reward)}" placeholder="Later curfew, dinner out, gas money..."></div>`}
        <div class="field"><label for="sp_s">From</label><input id="sp_s" value="${esc(d.sponsor)}" placeholder="Mom, Dad, Grandma, Uncle Ryan..."></div>
        <button class="btn" data-act="addch">Add this challenge</button></div>
      ${open.length ? `<span class="label">Open challenges</span>${open.map((c) => chRow(c, false)).join("")}` : ""}
      <p class="sub" style="font-size:12px">Use this on your teen's phone for now. Separate parent logins come later.</p>`;
  };

  // ---------- Earn: get hired ----------
  let hireAge = 0;
  V.hired = function () {
    tabs("map");
    const list = window.EMPLOYERS.filter((e) => !hireAge || e.minAge <= hireAge);
    const jobs = S.cards.filter((c) => c.kind !== "Chat");
    const refs = [...new Set(S.requests.map((r) => r.pro))].map((id) => window.PROS.find((p) => p.id === id)).filter(Boolean);
    const sc = scoutCount();
    return `${backBtn("#map", "Map")}
      <div style="display:flex;flex-direction:column;gap:4px"><h1 class="h1">Get hired</h1><p class="sub">Places that hire teens, what each one teaches, and what teens who worked there say.</p></div>
      <div class="chips"><span class="label" style="align-self:center;margin-right:4px">I'm</span>${[0, 14, 15, 16].map((a) => `<button class="chip ${hireAge === a ? "on" : ""}" data-hage="${a}">${a ? a : "Any age"}</button>`).join("")}</div>
      ${list.map((e) => `<a class="card" href="#employer/${e.id}" style="text-decoration:none;color:inherit;gap:6px;padding:12px 14px">
        <div class="between"><span style="font-weight:600;font-size:15px">${esc(e.name)}</span><span style="font-weight:700;color:var(--lime)">${esc(e.pay)}</span></div>
        <div class="chips"><span class="chip" style="cursor:default">Hires ${e.minAge}+</span><span class="chip" style="cursor:default">Teaches: ${esc(e.teaches)}</span></div></a>`).join("")}
      ${list.length ? "" : `<p class="sub">Nothing on this list hires that young yet. Babysitting, yard work and pet sitting for neighbors all count as jobs.</p>`}
      <div class="card"><span class="label" style="color:var(--lime)">Your edge</span>
        <div class="between"><span style="font-size:14px">Résumé from your ${jobs.length} card${jobs.length === 1 ? "" : "s"}</span><a href="#resume" style="color:var(--lime);font-weight:600;font-size:14px">${jobs.length ? "View" : "Start"}</a></div>
        <div class="between"><span style="font-size:14px">${refs.length ? "Possible references: " + esc(refs.map((p) => p.name).join(", ")) : "References: ask a pro for a chat first"}</span></div>
        <div class="between"><span style="font-size:14px">Scout badge</span><span style="font-size:14px;color:${sc >= 5 ? "var(--lime)" : "var(--muted)"}">${sc >= 5 ? "Earned" : sc + " of 5"}</span></div></div>
      <p class="sub" style="font-size:12px">Sample employers for the prototype. Real listings will come from employers who post, checked by teens who worked there.</p>`;
  };
  V.employer = function (id) {
    tabs("map");
    const e = window.EMPLOYERS.find((x) => x.id === id);
    if (!e) return backBtn("#hired") + '<p class="sub">Not found.</p>';
    const mine = S.cards.filter((c) => c.scout && c.scout.emp === e.id).map((c) => c.scout);
    const t = e.teens, n = t.n + mine.length, yes = t.yes + mine.filter((m) => m.rec === "Yes").length;
    const tips = mine.filter((m) => m.tip).map((m) => m.tip + " (you)").concat(t.tips);
    const ck = S.checks[e.id];
    const stat = (v, l) => `<div style="flex:1;background:var(--bg);border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:2px"><span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px">${esc(v)}</span><span style="font-size:11px;color:var(--muted);line-height:1.3">${l}</span></div>`;
    return `${backBtn("#hired", "Get hired")}
      <div style="display:flex;flex-direction:column;gap:6px"><span class="label">Employer</span><h1 class="h1">${esc(e.name)}</h1>
      <div class="chips"><span class="chip" style="cursor:default">Hires ${e.minAge}+</span><span class="chip" style="cursor:default">${esc(e.pay)}</span><span class="chip" style="cursor:default">Teaches: ${esc(e.teaches)}</span></div></div>
      <div class="card"><span class="label" style="color:var(--lime)">What teens who worked here say</span><span style="font-size:12px;color:var(--muted)">From ${n} teen${n === 1 ? "" : "s"}${mine.length ? ", including you" : ""} · sample answers</span>
        <div style="display:flex;gap:8px">${stat(t.age, "usual hiring age")}${stat(t.pay, "real pay per hour")}${stat(yes + " of " + n, "would tell a friend")}</div></div>
      <div class="card"><span class="label">Wish I'd known</span>${tips.map((x) => `<span style="font-size:14px;line-height:1.45">"${esc(x)}"</span>`).join("")}</div>
      <div class="card"><span class="label" style="color:var(--sky)">Quick check</span><span style="font-size:15px;font-weight:600">${esc(e.check)}</span>
        <div class="chips">${["Yes", "No", "Not sure"].map((a) => `<button class="chip ${ck === a ? "on" : ""}" data-check="${e.id}:${a}">${a}${a === "Yes" ? " · " + (e.checkYes + (ck === "Yes" ? 1 : 0)) : a === "No" ? " · " + (e.checkNo + (ck === "No" ? 1 : 0)) : ""}</button>`).join("")}</div>
        <span style="font-size:12px;color:var(--muted)">Answer if you applied here or know someone who did. +10 XP</span></div>
      <a class="btn ghost" href="#newcard" data-act="cardfor" data-emp="${e.id}">I worked here: earn a card</a>`;
  };
  V.resume = function () {
    tabs("map");
    return `${backBtn("#hired", "Get hired")}<h1 class="h1">Your résumé</h1><p class="sub">Built from your cards. Copy it into an application or send it to a parent to print.</p>
      <div class="card"><pre style="white-space:pre-wrap;font-family:Inter,system-ui,sans-serif;font-size:14px;line-height:1.5;margin:0">${esc(resumeText())}</pre></div>
      <div class="row"><button class="btn" data-act="copyresume">Copy</button><button class="btn ghost" data-act="shareresume">${svg(ICON.share, 18)}Send</button></div>
      ${S.cards.length ? "" : `<a class="back" href="#newcard" style="align-self:center">Earn a card to fill it in</a>`}`;
  };
  function resumeText() {
    const st = S.quizDone ? STYLES[topStyle()] : null;
    const exp = S.cards.filter((c) => c.kind !== "Chat").slice().reverse();
    const refs = [...new Set(S.requests.map((r) => r.pro))].map((id) => window.PROS.find((p) => p.id === id)).filter(Boolean);
    const L = [S.name || "Your name", ""];
    if (st) L.push("About me", st.line + (S.motives.length ? " Motivated by: " + S.motives.join(", ").toLowerCase() + "." : ""), "");
    L.push("Experience");
    if (exp.length) exp.forEach((c) => { L.push("- " + c.title + (c.where ? ", " + c.where : "") + (c.length ? " (" + c.length + ")" : "")); if (c.learned) L.push("  What I learned: " + c.learned); });
    else L.push("- Your jobs, shadow days and things you tried show up here.");
    L.push("", "References", refs.length ? refs.map((p) => p.name + ", " + p.job).join("\n") + "\n(Ask before listing them.)" : "Available on request");
    return L.join("\n");
  }

  // ---------- Help the next person ----------
  let scoutDraft = null;
  V.scout = function (id) {
    tabs("cards");
    const c = S.cards.find((x) => String(x.id) === String(id));
    if (!c) return backBtn("#cards") + '<p class="sub">Card not found.</p>';
    const d = scoutDraft && scoutDraft.id === c.id ? scoutDraft : (scoutDraft = Object.assign({ id: c.id, emp: c.emp || "", age: "", pay: "", rec: "", tip: "" }, c.scout || {}));
    const q = (label, key, opts) => `<span style="font-size:14px;font-weight:600">${label}</span><div class="chips">${opts.map((o) => `<button class="chip ${d[key] === o ? "on" : ""}" data-sc="${key}:${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
    return `<div style="display:flex;flex-direction:column;gap:4px"><span class="label" style="color:var(--lime)">Card saved · ${esc(c.title)}</span><h1 class="h1">Help the next person</h1>
      <p class="sub">Four quick answers. Your card stays private. Only these go public, mixed with other teens' answers.</p></div>
      <div class="card">
        <span style="font-size:14px;font-weight:600">Where was it?</span><div class="chips">${window.EMPLOYERS.map((e) => `<button class="chip ${d.emp === e.id ? "on" : ""}" data-sc="emp:${e.id}">${esc(e.name)}</button>`).join("")}<button class="chip ${d.emp === "other" ? "on" : ""}" data-sc="emp:other">Not listed</button></div>
        ${q("How old were you when they hired you?", "age", ["14", "15", "16", "17+"])}
        ${q("What did you really make per hour?", "pay", ["$12", "$13", "$14", "$15", "$16+"])}
        ${q("Would you tell a friend to work here?", "rec", ["Yes", "Maybe", "No"])}
        <div class="field"><label for="sc_tip">One thing you wish you knew before you started</label><textarea id="sc_tip" placeholder="Apply early, wear old shoes...">${esc(d.tip)}</textarea></div>
        <span style="font-size:11px;color:var(--muted)">No names of coworkers or managers.</span></div>
      <button class="btn" data-act="savescout">Share with the next person · +40 XP</button>
      <button class="back" data-go="#cards" style="align-self:center">Skip for now</button>`;
  };

  // ---------- Share-ready card ----------
  V.sharecard = function () {
    tabs(null);
    if (!S.quizDone) return backBtn("#me") + '<p class="sub">Unlock your play style first.</p>';
    const st = STYLES[topStyle()];
    return `${backBtn("#me")}
      <div style="border-radius:28px;background:radial-gradient(circle at 30% 15%,#2E3A12,#0F1020 65%);border:1px solid var(--line);padding:32px 20px;display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center">
        <span class="label" style="color:var(--lime)">My play style</span>
        <div style="width:110px;height:110px;border-radius:30px;background:var(--lime);color:var(--ink);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:52px">${esc((S.name || "?").charAt(0).toUpperCase())}</div>
        <span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:36px;line-height:1.1">${esc(st.name)}</span>
        <span style="font-size:16px;color:var(--muted)">${esc(st.line)}</span>
        ${S.motives.length ? `<div class="chips" style="justify-content:center">${S.motives.map((m) => `<span class="chip" style="cursor:default">${esc(m)}</span>`).join("")}</div>` : ""}
        <div class="card" style="padding:12px 16px;font-size:14px;line-height:1.4">Jobs that fit ${esc(st.name.replace("The ", ""))}s:<br><b>${esc(st.jobs.slice(0, 4).join(" · "))}</b></div>
        <span style="font-weight:700;color:var(--lime)">What's yours? Find out on First Shift</span></div>
      <p class="sub center" style="font-size:12px">Screenshot it for your story, or send it.</p>
      <div class="row"><button class="btn" data-act="share">${svg(ICON.share, 18)}Send to a friend</button></div>`;
  };

  // ---------- Router ----------
  function route() {
    const h = (location.hash || "").slice(1);
    if (h === "forpros") return ["forpros"];
    if (!S.started && h !== "settings") return ["start"];
    if (!S.firstMove && !["settings", "quiz", "reveal"].includes(h.split("/")[0])) return ["choose"];
    if (h === "reveal" && !S.quizDone) return ["me"];
    const [a, b] = h.split("/");
    if (V[a]) return [a, b];
    return ["me"];
  }
  function render() {
    const [name, arg] = route();
    $("#view").innerHTML = V[name](arg);
    window.scrollTo(0, 0);
    log("view", name + (arg ? "/" + arg : ""));
  }

  // ---------- Actions ----------
  function finishStyle() {
    const raw = { D: 0, I: 0, S: 0, C: 0 };
    quiz.picks.forEach((p) => { raw[p.most]++; raw[p.least]--; });
    const disc = {};
    Object.keys(raw).forEach((k) => { disc[k] = Math.max(4, Math.min(98, Math.round(((raw[k] + 9) / 18) * 100))); });
    S.disc = disc; S.quizDone = true; S.source = "quiz";
    if (!S._quizXP) { S.xp += 100; S._quizXP = true; }
    save(); log("style_done", { disc });
    quiz = { i: 0, most: null, least: null, picks: [], m: 0, mv: [] };
    go("#reveal");
  }
  function finishMotives() {
    const tags = quiz.mv.map((v, i) => ({ t: v[0] === "a" ? MOTIVES[i].at : MOTIVES[i].bt, s: +v[1], i }))
      .sort((x, y) => y.s - x.s || x.i - y.i).slice(0, 3).map((x) => x.t);
    S.motives = tags; S.motivesDone = true;
    if (!S._motXP) { S.xp += 50; S._motXP = true; toast("+50 XP  Unlocked what fires you up"); }
    save(); log("motives_done", { tags });
    quiz = { i: 0, most: null, least: null, picks: [], m: 0, mv: [] };
    go("#me");
  }

  function sendRequest(body, rec) {
    if (rec) S.requests.push(rec);
    save();
    if (!S.parentPhone) toast("Tip: add a parent's number in Settings");
    window.location.href = smsLink(body);
  }

  document.addEventListener("click", (ev) => {
    const el = ev.target.closest("button,a");
    if (!el) return;
    const ds = el.dataset;

    if (ds.go) { ev.preventDefault(); go(ds.go); return; }

    if (ds.move) {
      S.firstMove = ds.move; save(); log("first_move", ds.move);
      if (ds.move === "style") { quiz = { i: 0, most: null, least: null, picks: [], m: 0, mv: [] }; go("#quiz/style"); }
      else if (ds.move === "reflect") { cardDraft = { kind: "Job", title: "", where: "", area: "", length: "", loved: "", drained: "", learned: "", next: "" }; go("#newcard"); }
      else go(dream() ? "#dream" : "#pros");
      return;
    }

    if (ds.dm) {
      const nm = $("#nm"), ph = $("#ph");
      if (nm) S.name = nm.value.trim();
      if (ph) S.parentPhone = ph.value.trim();
      if (S.dreamMode !== ds.dm) S.dreamText = "";
      S.dreamMode = ds.dm; save(); log("dream_mode", ds.dm); render();
      const dt = $("#dt"); if (dt) dt.focus();
      return;
    }

    if (ds.pick) {
      const k = ds.pick;
      if (quiz.most == null) { quiz.most = k; render(); return; }
      if (k === quiz.most) { quiz.most = null; render(); return; }
      quiz.least = k;
      quiz.picks[quiz.i] = { most: quiz.most, least: quiz.least };
      render();
      setTimeout(() => { if (quiz.i === QUIZ.length - 1) finishStyle(); else { quiz.i++; quiz.most = null; quiz.least = null; render(); } }, 280);
      return;
    }
    if (ds.mv) {
      const mi = quiz.m;
      quiz.mv[mi] = ds.mv; render();
      setTimeout(() => { if (mi === MOTIVES.length - 1) finishMotives(); else { quiz.m++; render(); } }, 250);
      return;
    }

    if (ds.watch) {
      if (!S.watched[ds.watch]) { S.watched[ds.watch] = Date.now(); addXP(20, "Answer seen"); log("watch", ds.watch); }
      render(); return;
    }
    if (ds.req) {
      const [pid, type] = ds.req.split(":");
      const p = window.PROS.find((x) => x.id === pid);
      const why = ($("#why") || {}).value || "";
      const first = !S.requests.some((r) => r.pro === pid && r.type === type);
      const body = `Hi! It's ${S.name || "me"}. Could you help me ${type === "chat" ? "set up a 20-minute chat" : "set up a day shadowing"} with ${p.name} about their work (${p.job})?${why.trim() ? " " + why.trim() : ""} (sent from First Shift)`;
      if (first) { S.xp += 30; toast("+30 XP  Request sent"); }
      log("request", { pro: pid, type });
      sendRequest(body, { pro: pid, type, date: dstr() });
      setTimeout(render, 300); return;
    }

    if (ds.dream) {
      const [key, i, kind] = ds.dream.split(":");
      const d = dream();
      const item = ({ world: d.world, ask: d.ask, shadow: d.shadow, try: d.tryit })[key][+i];
      S.dreamDone[key + i] = dstr();
      log("dream_step", { key, i: +i });
      if (kind === "ask" || kind === "shadow") {
        S.xp += 50; toast("+50 XP  Dream path step");
        const body = kind === "ask"
          ? `Hi! It's ${S.name || "me"}. I'm exploring "${S.dreamText}" and want to talk to ${item.charAt(0).toLowerCase() + item.slice(1)}. Do you know anyone? (sent from First Shift)`
          : `Hi! It's ${S.name || "me"}. I'm exploring "${S.dreamText}." Could you help me set up this: ${item}? (sent from First Shift)`;
        sendRequest(body, null); setTimeout(render, 300); return;
      }
      if (kind === "try") {
        save();
        cardDraft = { kind: "Something I tried", title: item, where: "", area: dreamAreaId(), length: "", loved: "", drained: "", learned: "", next: "" };
        toast("Now earn the card"); go("#newcard"); return;
      }
      addXP(10, "Curious"); render(); return;
    }
    if (ds.darea) { S.dreamArea = ds.darea; save(); render(); return; }

    if (ds.kind) { syncDraft(); cardDraft.kind = ds.kind; render(); return; }
    if (ds.carea) { syncDraft(); cardDraft.area = ds.carea; render(); return; }
    if (ds.tag) { const on = el.classList.toggle("on"); el.setAttribute("aria-pressed", on); return; }
    if (ds.mtag) {
      const t = ds.mtag;
      if (S.motives.includes(t)) S.motives = S.motives.filter((x) => x !== t);
      else if (S.motives.length < 3) S.motives = S.motives.concat(t);
      else { toast("Pick three"); return; }
      el.classList.toggle("on"); save(); return;
    }

    if (ds.chdone) {
      const c = S.challenges.find((x) => String(x.id) === ds.chdone); if (!c) return;
      c.status = "claimed"; c.claimed = dstr(); save(); log("challenge_claim", c.kind);
      if (["chat", "shadow", "newjob", "duo"].includes(c.kind)) {
        cardDraft = { kind: c.kind === "chat" ? "Chat" : c.kind === "newjob" ? "Job" : "Shadow day", title: "", where: c.who || "", area: "", length: "", loved: "", drained: "", learned: "", next: "" };
        toast("Now earn the card so your sponsor can OK it"); go("#newcard");
      } else { toast("Sent to your sponsor for an OK"); render(); }
      return;
    }
    if (ds.chok) { const c = S.challenges.find((x) => String(x.id) === ds.chok); if (c) { c.status = "approved"; c.paid = dstr(); save(); log("challenge_ok", c.kind); toast(money(c.reward) ? "Approved. Pay " + c.reward + " when you can." : "Approved"); render(); } return; }
    if (ds.chdel) { S.challenges = S.challenges.filter((x) => String(x.id) !== ds.chdel); save(); render(); return; }
    if (ds.spk) { syncSp(); spDraft.kind = ds.spk; render(); return; }
    if (ds.spw) { syncSp(); spDraft.who = ds.spw; render(); return; }
    if (ds.spr) { syncSp(); spDraft.reward = ds.spr === "other" ? "other" : ds.spr; render(); return; }
    if (ds.hage != null && ds.hage !== undefined && el.hasAttribute("data-hage")) { hireAge = +ds.hage; render(); return; }
    if (ds.check) {
      const [id, a] = ds.check.split(":");
      if (!S.checks[id]) { S.xp += 10; toast("+10 XP  Thanks, scout"); }
      S.checks[id] = a; save(); log("quick_check", { id, a }); render(); return;
    }
    if (ds.sc) {
      const i = ds.sc.indexOf(":"), k = ds.sc.slice(0, i), v = ds.sc.slice(i + 1);
      const t = $("#sc_tip"); if (t) scoutDraft.tip = t.value;
      scoutDraft[k] = v; render(); return;
    }
    const act = ds.act;
    if (!act) return;
    if (act === "addch") {
      syncSp();
      const d = spDraft, kind = CH_KINDS.find((k) => k[0] === d.kind);
      const title = d.kind === "custom" ? d.custom.trim() : kind[2](d.who);
      if (!title) { toast("Write the challenge"); return; }
      if (["chat", "shadow", "duo"].includes(d.kind) && !d.who) { toast("Pick who it's with"); return; }
      const reward = money(d.reward) ? d.reward : (d.reward === "other" ? "" : d.reward).trim();
      if (!reward) { toast("Add a reward"); return; }
      S.challenges.push({ id: Date.now(), kind: d.kind, who: d.who, title, reward, sponsor: d.sponsor.trim(), status: "open", added: dstr() });
      save(); log("challenge_add", d.kind); spDraft = { kind: "chat", who: "", reward: "$10", sponsor: d.sponsor, custom: "" };
      toast("Challenge added"); render(); return;
    }
    if (act === "asksponsor") {
      const body = `Hi! It's ${S.name || "me"}. Would you sponsor a challenge for me on First Shift? Grab my phone, open Settings, then Parent tools. (sent from First Shift)`;
      log("ask_sponsor"); sendRequest(body, null); return;
    }
    if (act === "savescout") {
      const t = $("#sc_tip"); if (t) scoutDraft.tip = t.value.trim();
      const d = scoutDraft;
      if (!d.emp || !d.age || !d.pay || !d.rec) { toast("Answer the four questions"); return; }
      const c = S.cards.find((x) => x.id === d.id);
      const first = !c.scout;
      c.scout = { emp: d.emp, age: d.age, pay: d.pay, rec: d.rec, tip: d.tip };
      if (first) { S.xp += 40; const ch = S.challenges.find((x) => x.status === "open" && x.kind === "scout"); if (ch) { ch.status = "claimed"; ch.card = c.id; } }
      save(); log("scout", { emp: d.emp }); scoutDraft = null;
      toast(first ? "+40 XP  You helped the next person" : "Updated");
      go(d.emp !== "other" ? "#employer/" + d.emp : "#cards"); return;
    }
    if (act === "copyresume") { if (navigator.clipboard) navigator.clipboard.writeText(resumeText()).then(() => toast("Copied")); log("resume_copy"); return; }
    if (act === "shareresume") { log("resume_share"); if (navigator.share) navigator.share({ title: "My résumé", text: resumeText() }).catch(() => {}); else window.location.href = "sms:?&body=" + encodeURIComponent(resumeText()); return; }
    if (act === "cardfor") { cardDraft = { kind: "Job", title: "", where: (window.EMPLOYERS.find((e) => e.id === ds.emp) || {}).name || "", area: (window.EMPLOYERS.find((e) => e.id === ds.emp) || {}).area || "", length: "", loved: "", drained: "", learned: "", next: "", emp: ds.emp }; return; }
    if (act === "begin") {
      S.name = ($("#nm").value || "").trim();
      S.parentPhone = ($("#ph").value || "").trim();
      const dt = $("#dt"); if (dt) S.dreamText = dt.value.trim();
      if (!S.name) { toast("Add your first name"); $("#nm").focus(); return; }
      if (!S.dreamMode) { toast("Pick an answer to the question"); return; }
      if (S.dreamMode === "idea" && !S.dreamText) { toast("Tell us what it is"); $("#dt").focus(); return; }
      S.started = true; save(); log("start", { mode: S.dreamMode, dream: S.dreamText }); go("#choose");
    }
    if (act === "startstyle") { quiz.most = null; quiz.least = null; log("style_start", { resume: quiz.i }); go("#quiz/style"); }
    if (act === "startmotives") { log("motives_start", { resume: quiz.m }); go("#quiz/motives"); }
    if (act === "qexit") { log("quiz_exit", { at: quiz.i, m: quiz.m }); go("#me"); }
    if (act === "mback") { if (quiz.m > 0) quiz.m--; render(); }
    if (act === "qback") {
      if (quiz.i > 0) { quiz.i--; quiz.most = null; quiz.least = null; }
      render();
    }
    if (act === "invitefriend") {
      const text = `I'm trying First Shift. You try real jobs, hear from adults about what they actually do, and level up. Try it: ${SITE}`;
      if (!S._invXP) { S.xp += 20; S._invXP = true; save(); }
      log("invite_friend");
      if (navigator.share) navigator.share({ title: "First Shift", text }).catch(() => {});
      else window.location.href = "sms:?&body=" + encodeURIComponent(text);
      return;
    }
    if (act === "invitepro") {
      const n = ($("#inv_n").value || "").trim(), j = ($("#inv_j").value || "").trim();
      if (!n) { toast("Add their name"); $("#inv_n").focus(); return; }
      const body = `Hi! It's ${S.name || "me"}. Could you invite ${n}${j ? " (" + j + ")" : ""} to be a pro on First Shift? Here's what they'd do: ${SITE}/#forpros (sent from First Shift)`;
      S.xp += 30; save(); log("invite_pro", { job: !!j }); toast("+30 XP  Invite sent to your parent");
      sendRequest(body, null); return;
    }
    if (act === "sharepros") {
      const text = `A teen I know is using First Shift to explore careers, and adults like us answer five quick questions about our jobs. Here's what it involves: ${SITE}/#forpros`;
      log("share_pros");
      if (navigator.share) navigator.share({ title: "Be a pro on First Shift", text }).catch(() => {});
      else window.location.href = "sms:?&body=" + encodeURIComponent(text);
      return;
    }
    if (act === "share") {
      const st = topStyle();
      const text = `My play style is ${STYLES[st].name}: ${STYLES[st].line}${S.motives.length ? " What fires me up: " + S.motives.join(", ") + "." : ""} What's yours? ${SITE}`;
      log("share");
      if (navigator.share) navigator.share({ title: "My First Shift card", text }).catch(() => {});
      else if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => toast("Copied to share"));
    }
    if (act === "daily") {
      const tags = Array.from(document.querySelectorAll("[data-tag].on")).map((b) => b.dataset.tag);
      const note = ($("#note").value || "").trim();
      if (!tags.length && !note) { toast("Tap one or write a few words"); return; }
      const today = dstr(), d = S.daily;
      if (d.last !== today) {
        if (!d.last) d.streak = 1;
        else {
          const gap = daysBetween(d.last, today);
          if (gap === 1) d.streak++;
          else if (gap - 1 <= d.freezes) { d.freezes -= gap - 1; d.streak++; toast("Used " + (gap - 1) + " freeze"); }
          else d.streak = 1;
        }
        if (d.streak % 7 === 0 && d.freezes < 2) d.freezes++;
        d.last = today;
      }
      d.entries.push({ date: today, tags, note });
      S.xp += 10; save(); log("daily", { tags: tags.length, note: !!note });
      toast("+10 XP  " + d.streak + "-day streak"); render();
    }
    if (act === "savecard") {
      syncDraft();
      const c = cardDraft;
      if (!c.title.trim()) { toast("Add the job or role"); return; }
      if (!c.area) { toast("Pick an area"); return; }
      if (!c.learned.trim() || !(c.loved.trim() || c.drained.trim())) { toast("Fill in what you learned, plus one more"); return; }
      c.xp = c.kind === "Job" ? 150 : c.kind === "Shadow day" ? 100 : 50;
      c.date = dstr(); c.id = Date.now();
      S.cards.push(c); S.xp += c.xp; save(); log("card", { kind: c.kind, area: c.area });
      const pend = S.challenges.find((x) => x.status === "claimed" && !x.card && x.kind !== "scout" && x.kind !== "friend");
      if (pend) pend.card = c.id;
      cardDraft = null; save(); toast("Card earned  +" + c.xp + " XP");
      if (c.kind === "Job") { scoutDraft = null; go("#scout/" + c.id); } else go("#cards");
    }
    if (act === "saveyou") {
      S.name = $("#s_nm").value.trim(); S.parentPhone = $("#s_ph").value.trim();
      const dt = $("#s_dt").value.trim();
      if (dt) { S.dreamMode = "idea"; S.dreamText = dt; } else if (S.dreamMode === "idea") { S.dreamMode = "exploring"; S.dreamText = ""; }
      save(); toast("Saved"); log("settings_you");
    }
    if (act === "savetti") {
      const disc = {};
      for (const k of ["D", "I", "S", "C"]) { const v = parseInt($("#t_" + k).value, 10); if (isNaN(v) || v < 0 || v > 100) { toast("Scores must be 0 to 100"); return; } disc[k] = v; }
      if (S.motives.length !== 3) { toast("Pick three motivators"); return; }
      S.disc = disc; S.source = "tti"; S.quizDone = true; S.motivesDone = true; S.firstMove = S.firstMove || "tti"; save(); log("tti_override"); toast("TTI scores saved"); go("#me");
    }
    if (act === "export") {
      const data = JSON.stringify({ exported: new Date().toISOString(), xp: S.xp, cards: S.cards.length, streak: S.daily.streak, events: S.events });
      if (navigator.clipboard) navigator.clipboard.writeText(data).then(() => toast("Usage log copied")); else toast("Copy not supported here");
    }
    if (act === "retake") { S.quizDone = false; S.motivesDone = false; save(); quiz = { i: 0, most: null, least: null, picks: [], m: 0, mv: [] }; go("#quiz/style"); }
    if (act === "reset") {
      if (el.dataset.confirm !== "1") { el.dataset.confirm = "1"; el.textContent = "Tap again to erase all of your data"; return; }
      S = fresh(); save(); quiz = { i: 0, most: null, least: null, picks: [], m: 0, mv: [] }; go("#");
    }
  });

  function syncSp() {
    const c = $("#sp_c"), o = $("#sp_o"), sp = $("#sp_s");
    if (c) spDraft.custom = c.value; if (sp) spDraft.sponsor = sp.value;
    if (o) spDraft.reward = o.value || "other";
  }
  function syncDraft() {
    if (!cardDraft) return;
    document.querySelectorAll("[data-f]").forEach((i) => { cardDraft[i.dataset.f] = i.value; });
  }
  document.addEventListener("input", (ev) => {
    if (ev.target.dataset && ev.target.dataset.f && cardDraft) cardDraft[ev.target.dataset.f] = ev.target.value;
  });

  window.addEventListener("hashchange", render);
  render();
})();
