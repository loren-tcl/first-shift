// Dream paths: what the app suggests when a teen already has something in mind.
// "match" words are checked against what the teen types. Add new dreams by copying a block.
window.DREAMS = [
  { id: "athlete", match: ["basketball","football","soccer","baseball","athlete","nba","nfl","wnba","mlb","sports","volleyball","tennis","golf","hockey","pro player"],
    title: "Pro athlete", area: "outdoors",
    world: ["Pro or college player","Coach","Athletic trainer","Physical therapist","Sports analyst","Team operations","Sports media","Referee"],
    ask: ["A high school or club coach","A former college player","An athletic trainer at a high school"],
    shadow: ["A practice with a high school team","A day with an athletic trainer","A game from the scorer's table"],
    tryit: ["Work a youth sports camp","Ref rec league games","Keep stats for a team"] },
  { id: "creator", match: ["youtube","youtuber","streamer","stream","tiktok","influencer","content creator","creator","twitch","podcast"],
    title: "YouTuber or streamer", area: "arts",
    world: ["Creator","Video editor","Thumbnail and graphic designer","Social media manager","Brand partnerships","Marketing"],
    ask: ["Someone who runs social media for a business","A video editor","A local creator with a real following"],
    shadow: ["A day with a marketing team","A video shoot for a business","A wedding or event videographer"],
    tryit: ["Post one video a week for a month and track what works","Edit videos for a local business or church","Run social media for a club"] },
  { id: "gamer", match: ["gamer","gaming","esports","video game","games","game designer","game developer","make games"],
    title: "Games", area: "tech",
    world: ["Esports player","Game designer","Game programmer","Game artist","Tester","Community manager","Streamer"],
    ask: ["A software developer","A digital artist or animator","Someone who works at a game or app company"],
    shadow: ["A day with a developer","A team planning meeting at a tech company","A college game design class"],
    tryit: ["Make a tiny game with a free tool","Join a school or club esports team","Help run a gaming tournament"] },
  { id: "doctor", match: ["doctor","surgeon","physician","medicine","pediatrician","dentist","nurse","medical","pharmacist"],
    title: "Medicine", area: "health",
    world: ["Doctor","Nurse","Physician assistant","Paramedic","Physical therapist","Pharmacist","Medical lab tech"],
    ask: ["A nurse","A doctor or physician assistant","An EMT or paramedic"],
    shadow: ["A morning at a clinic","A hospital volunteer shift","A ride-along day with EMTs where allowed"],
    tryit: ["Get CPR certified","Volunteer at a hospital or care home","Work as a lifeguard"] },
  { id: "vet", match: ["vet","veterinarian","animals","animal","zoo","marine biologist","dog","horse"],
    title: "Working with animals", area: "animals",
    world: ["Veterinarian","Vet tech","Zookeeper","Dog trainer","Groomer","Wildlife biologist","Shelter manager"],
    ask: ["A vet or vet tech","Someone who runs a kennel or shelter","A dog trainer"],
    shadow: ["A morning at a vet clinic","A day at an animal shelter","A visit behind the scenes at a zoo program"],
    tryit: ["Work at a kennel","Volunteer at a shelter","Start a dog walking business"] },
  { id: "music", match: ["musician","singer","rapper","band","music","producer","actor","actress","acting","broadway","dj","artist","famous"],
    title: "Music or acting", area: "arts",
    world: ["Performer","Producer","Sound engineer","Music teacher","Stage manager","Lighting tech","Talent manager"],
    ask: ["A working musician or actor","A sound engineer","A music or drama teacher"],
    shadow: ["A rehearsal for a local theater","A recording session","A concert crew setup"],
    tryit: ["Play or perform anywhere that will have you","Run sound or lights at church or school","Record and release one song"] },
  { id: "chef", match: ["chef","cook","baker","restaurant","food","culinary","cooking"],
    title: "Chef", area: "food",
    world: ["Chef","Line cook","Baker","Restaurant owner","Food truck owner","Caterer","Food scientist"],
    ask: ["A chef or line cook","A restaurant or bakery owner","A caterer"],
    shadow: ["A morning prep shift in a kitchen","A catering event","A food truck lunch rush"],
    tryit: ["Work prep or dishes in a restaurant","Cook dinner for your family once a week","Sell something you bake"] },
  { id: "lawyer", match: ["lawyer","attorney","law","judge","legal"],
    title: "Law", area: "law",
    world: ["Lawyer","Paralegal","Judge","Court reporter","Police officer","Policy advisor"],
    ask: ["A lawyer","A paralegal","Someone who works at a courthouse"],
    shadow: ["A day at a law office","Sit in on a public court hearing","A city council meeting"],
    tryit: ["Join mock trial or debate","Volunteer for a legal aid fundraiser","Work reception at a law office"] },
  { id: "engineer", match: ["engineer","engineering","robot","robotics","nasa","space","rocket","inventor"],
    title: "Engineering", area: "building",
    world: ["Engineer","Technician","Electrician","Machinist","Architect","Drafter","Product designer"],
    ask: ["An engineer","An electrician or technician","An architect"],
    shadow: ["A day at an engineering firm","A construction site walk-through","A manufacturing plant tour"],
    tryit: ["Join a robotics team","Build something real with your hands","Take apart and fix an old device"] },
  { id: "business", match: ["business","entrepreneur","ceo","own my own","rich","boss","startup","sell","real estate","money"],
    title: "Running a business", area: "business",
    world: ["Business owner","Salesperson","Manager","Accountant","Real estate agent","Marketer"],
    ask: ["Someone who owns a small business","A salesperson","An accountant"],
    shadow: ["A day with a small business owner","A sales call or open house","A store opening shift"],
    tryit: ["Start a tiny business: lawn care, baking, reselling","Work retail and watch how the manager thinks","Track money for a club"] },
  { id: "fashion", match: ["fashion","designer","clothes","clothing","model","makeup","hair","stylist","beauty"],
    title: "Fashion and beauty", area: "arts",
    world: ["Designer","Stylist","Hair stylist","Makeup artist","Retail buyer","Photographer"],
    ask: ["A hair stylist or makeup artist","Someone who works in a clothing store","A photographer"],
    shadow: ["A day at a salon","A photo shoot","Behind the counter at a boutique"],
    tryit: ["Work retail at a clothing store","Style a photo shoot for friends","Alter or make one piece of clothing"] },
  { id: "pilot", match: ["pilot","fly","airplane","plane","aviation","air force","flight"],
    title: "Flying", area: "outdoors",
    world: ["Pilot","Air traffic controller","Aircraft mechanic","Flight attendant","Drone operator"],
    ask: ["A pilot","An aircraft mechanic","Someone who works at an airport"],
    shadow: ["A visit to a small airport","A day with a mechanic","A flight school intro session"],
    tryit: ["Take a discovery flight","Join Civil Air Patrol","Learn to fly a drone"] },
  { id: "first", match: ["police","firefighter","fire fighter","cop","military","army","marine","navy","soldier","emt"],
    title: "Protecting people", area: "helping",
    world: ["Firefighter","Police officer","EMT","Military service","Dispatcher","Search and rescue"],
    ask: ["A firefighter","A police officer","Someone who served in the military"],
    shadow: ["A fire station visit","A police ride-along where allowed","A day with a dispatcher"],
    tryit: ["Join a teen fire or police explorer program","Get CPR and first aid certified","Volunteer for search and rescue support"] },
  { id: "teacher", match: ["teacher","teach","coach","counselor","therapist","psychologist","social worker","pastor","help people"],
    title: "Helping people grow", area: "education",
    world: ["Teacher","Coach","Counselor","Therapist","Social worker","Pastor or youth leader"],
    ask: ["A teacher","A school counselor","A youth leader"],
    shadow: ["A day in a classroom","A youth program evening","A day with a coach"],
    tryit: ["Tutor a younger kid","Help at a summer camp","Lead a small group at church or a club"] }
];

window.matchDream = function (text) {
  const t = (text || "").toLowerCase();
  if (!t.trim()) return null;
  let best = null, bestLen = 0;
  for (const d of window.DREAMS) {
    for (const m of d.match) {
      if (t.includes(m) && m.length > bestLen) { best = d; bestLen = m.length; }
    }
  }
  if (best) return best;
  const clean = text.trim().replace(/^(be|become|a|an)\s+/i, "");
  return {
    id: "custom", custom: true, title: clean.charAt(0).toUpperCase() + clean.slice(1), area: null,
    world: ["The job itself", "The people who train or teach it", "The people who support it behind the scenes", "The business side of it"],
    ask: ["Someone who does it now", "Someone who tried it and changed paths", "Someone who hires or manages people who do it"],
    shadow: ["A day with someone who does it", "A behind-the-scenes visit where it happens"],
    tryit: ["Find the smallest version you can do this month", "Volunteer anywhere it happens", "Watch three real people who do it and write what surprised you"]
  };
};
