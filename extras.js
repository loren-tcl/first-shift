// What jobs pay, and sample teen employers.
// PAY numbers are rough US ranges for the prototype, to be replaced with Bureau of Labor Statistics data.
// Keys in PAY_JOB match a pro's "job" exactly. Keys in PAY_DREAM match a dream path id in dreams.js.
window.PAY_JOB = {
  "Nurse": { start: "$65K", typical: "$85K", top: "$130K", school: "2 to 4 years after high school", w: [40, 55, 85] },
  "Engineer": { start: "$70K", typical: "$100K", top: "$160K", school: "4 years of college", w: [45, 62, 100] },
  "Medical sales": { start: "$60K", typical: "$100K", top: "$200K+", school: "Usually 4 years of college", w: [30, 50, 100], note: "Much of the pay is commission, so it swings with what you sell." },
  "Tech sales": { start: "$60K", typical: "$110K", top: "$250K+", school: "Often 4 years of college, not always", w: [24, 44, 100], note: "Much of the pay is commission, so it swings with what you sell." },
  "Pastor": { start: "$40K", typical: "$60K", top: "$100K", school: "College, often seminary after", w: [40, 60, 100] },
  "Counselor": { start: "$40K", typical: "$55K", top: "$90K", school: "About 6 years (a master's degree)", w: [44, 61, 100] },
  "Executive coach": { start: "$50K", typical: "$100K", top: "$250K+", school: "Years of work experience first, plus training", w: [20, 40, 100] },
  "Small business owner": { start: "$0", typical: "Depends", top: "No ceiling", school: "No set path", w: [5, 40, 100], note: "Owners often earn little at first and take the risk. When it works, they keep what it makes." },
  "Nonprofit fundraising": { start: "$45K", typical: "$70K", top: "$140K", school: "Usually 4 years of college", w: [32, 50, 100] },
  "Owns a wealth management firm": { start: "$70K", typical: "$150K", top: "$500K+", school: "4 years of college plus licenses", w: [14, 30, 100], note: "Owners start as advisors and build up clients over years." },
  "Owns a CPA practice": { start: "$60K", typical: "$120K", top: "$300K", school: "4 to 5 years of college plus the CPA exam", w: [20, 40, 100] },
  "Attorney for HOAs": { start: "$70K", typical: "$145K", top: "$250K+", school: "7 years (college plus law school)", w: [28, 58, 100] },
  "Architect": { start: "$60K", typical: "$95K", top: "$150K", school: "5 to 7 years plus a license", w: [40, 63, 100] },
  "Doctor": { start: "$220K", typical: "$240K", top: "$400K+", school: "About 11 years after high school", w: [55, 60, 100], note: "Start counts after training. During residency, doctors earn about $65K while still learning." }
};
window.PAY_DREAM = {
  athlete: { start: "$0 to $50K", typical: "Most never go pro", top: "Millions", school: "Years of training; college ball for most", w: [10, 20, 100], note: "Coaches, trainers and physical therapists work in sports with steadier pay." },
  creator: { start: "$0", typical: "Under $10K for most", top: "Millions", school: "No set path", w: [2, 10, 100], note: "Editors and social media managers get paid steadily doing the same skills." },
  gamer: { start: "$60K", typical: "$95K", top: "$170K", school: "Often 4 years of college", w: [35, 56, 100], note: "Shown for game developers. Pro players are a tiny group." },
  doctor: { start: "$220K", typical: "$240K", top: "$400K+", school: "About 11 years after high school", w: [55, 60, 100] },
  vet: { start: "$100K", typical: "$120K", top: "$180K", school: "8 years (college plus vet school)", w: [55, 67, 100], note: "Vet techs need 2 years and earn about $40K." },
  music: { start: "$0", typical: "Varies a lot", top: "Millions", school: "No set path", w: [3, 15, 100], note: "Music teachers, sound engineers and theater staff earn steadier pay." },
  chef: { start: "$35K", typical: "$55K", top: "$100K+", school: "Kitchen experience; culinary school optional", w: [35, 55, 100] },
  lawyer: { start: "$70K", typical: "$145K", top: "$250K+", school: "7 years (college plus law school)", w: [28, 58, 100] },
  engineer: { start: "$70K", typical: "$100K", top: "$160K", school: "4 years of college", w: [45, 62, 100] },
  business: { start: "$0", typical: "Depends", top: "No ceiling", school: "No set path", w: [5, 40, 100] },
  fashion: { start: "$30K", typical: "$45K", top: "$100K+", school: "Cosmetology school, or design school", w: [30, 45, 100] },
  pilot: { start: "$80K", typical: "$200K", top: "$300K+", school: "Flight training and about 1,500 flight hours", w: [27, 66, 100] },
  first: { start: "$50K", typical: "$70K", top: "$110K", school: "Academy or EMT training", w: [45, 63, 100] },
  teacher: { start: "$45K", typical: "$62K", top: "$90K", school: "4 years of college plus a certificate", w: [50, 69, 100] }
};

// Sample teen employers. Names are generic on purpose. "teens" holds sample answers from teens who worked there.
window.EMPLOYERS = [
  { id: "grocery", name: "Neighborhood grocery store", minAge: 16, pay: "$15/hr", teaches: "Customer service", area: "business",
    teens: { n: 9, age: "16", pay: "$15", yes: 6, tips: ["Weekend shifts go to whoever asks first.", "You'll learn the register in a day and the people in a month."] }, check: "Do they hire at 15?", checkYes: 1, checkNo: 6 },
  { id: "camp", name: "City rec center day camp", minAge: 15, pay: "$14/hr", teaches: "Teaching kids", area: "education",
    teens: { n: 7, age: "15", pay: "$14", yes: 6, tips: ["Bring a water bottle and sunscreen. You're outside way more than they say.", "Apply in March. Spots are gone by May."] }, check: "Do they hire at 14?", checkYes: 1, checkNo: 4 },
  { id: "cafe", name: "Family-owned café", minAge: 14, pay: "$13 + tips", teaches: "Running a small business", area: "food",
    teens: { n: 4, age: "14", pay: "$16 with tips", yes: 3, tips: ["The owner will teach you everything if you ask.", "Mornings are slammed. Afternoons you learn the back of house."] }, check: "Do they hire without experience?", checkYes: 4, checkNo: 0 },
  { id: "theater", name: "Movie theater", minAge: 16, pay: "$14/hr", teaches: "Working a team shift", area: "arts",
    teens: { n: 6, age: "16", pay: "$14", yes: 4, tips: ["Free movies are real.", "Closing shifts run late on Fridays."] }, check: "Do they hire at 15?", checkYes: 0, checkNo: 5 },
  { id: "pets", name: "Pet boarding and daycare", minAge: 15, pay: "$14/hr", teaches: "Caring for animals", area: "animals",
    teens: { n: 5, age: "15", pay: "$14", yes: 5, tips: ["You will get dirty. Wear old shoes.", "Ask to shadow the vet tech when they come in."] }, check: "Do they hire at 14?", checkYes: 1, checkNo: 3 },
  { id: "landscape", name: "Landscaping crew", minAge: 16, pay: "$16/hr", teaches: "Building and outdoor work", area: "building",
    teens: { n: 3, age: "16", pay: "$16", yes: 2, tips: ["Summer starts at 5am because of the heat.", "You get strong fast."] }, check: "Do they hire for summer only?", checkYes: 3, checkNo: 0 },
  { id: "tutoring", name: "Tutoring center", minAge: 15, pay: "$15/hr", teaches: "Teaching and explaining", area: "education",
    teens: { n: 4, age: "16", pay: "$15", yes: 4, tips: ["They test you on the subject first.", "Little kids are harder than math."] }, check: "Do they hire at 15?", checkYes: 2, checkNo: 1 },
  { id: "pool", name: "Public pool lifeguard", minAge: 15, pay: "$16/hr", teaches: "Safety and staying calm", area: "outdoors",
    teens: { n: 8, age: "15", pay: "$16", yes: 7, tips: ["Get certified in the spring. Classes fill up.", "Hours are long but the crew is fun."] }, check: "Do they pay for the certification?", checkYes: 5, checkNo: 2 }
];
