/* =====================================================
   MYSTERY DETECTIVE - EXTREME EDITION
   ===================================================== */

const cases = [

{
    title: "The Missing Trophy",

    story:
        "The school's championship trophy disappeared from a locked display cabinet during lunch. Three students were nearby. One of them knows more than they are saying.",

    time: 90,

    clues: [
        {
            icon: "🔐",
            title: "Locked Cabinet",
            text: "The cabinet was locked when the teacher returned. There was no sign of forced entry."
        },
        {
            icon: "👟",
            title: "Muddy Footprint",
            text: "A muddy footprint was found directly in front of the trophy cabinet."
        },
        {
            icon: "🌧️",
            title: "Rainy Day",
            text: "It had been raining heavily outside during lunch."
        }
    ],

    suspects: [
        {
            name: "Alex",
            role: "Football Player",
            avatar: "⚽",
            statement: "I stayed in the gym during lunch."
        },
        {
            name: "Maya",
            role: "Library Volunteer",
            avatar: "📚",
            statement: "I was returning books in the library."
        },
        {
            name: "Sam",
            role: "Outdoor Club Member",
            avatar: "🥾",
            statement: "I came inside from the garden because of the rain."
        }
    ],

    answer: 2,

    explanation:
        "Sam had just come inside from the garden during the rain. The muddy footprint directly connects Sam's story to the evidence.",

    hint:
        "Look carefully at the muddy footprint. Who had recently been outside?"
},

{
    title: "The Vanishing Painting",

    story:
        "A valuable painting vanished from the school art room shortly before an exhibition. The door was locked, but the window was open.",

    time: 85,

    clues: [
        {
            icon: "🪟",
            title: "Open Window",
            text: "The art room window was open, but it was too small for an adult to climb through."
        },
        {
            icon: "🎨",
            title: "Paint on the Floor",
            text: "Fresh blue paint was found near the doorway."
        },
        {
            icon: "🧤",
            title: "Painted Glove",
            text: "A paint-covered glove was found behind a storage box."
        }
    ],

    suspects: [
        {
            name: "Lina",
            role: "Art Student",
            avatar: "🎨",
            statement: "I was painting in the classroom next door."
        },
        {
            name: "Noah",
            role: "Basketball Player",
            avatar: "🏀",
            statement: "I was practicing in the sports hall."
        },
        {
            name: "Riya",
            role: "Art Assistant",
            avatar: "🖌️",
            statement: "I was helping clean the art room."
        }
    ],

    answer: 2,

    explanation:
        "Riya admitted being inside the art room. The fresh paint and paint-covered glove connect her directly to the scene.",

    hint:
        "Which suspect had a reason to be inside the art room?"
},

{
    title: "The Missing Laptop",

    story:
        "A school laptop disappeared from the computer lab after class. The teacher remembers seeing three students near the lab.",

    time: 80,

    clues: [
        {
            icon: "💻",
            title: "Computer Lab",
            text: "The laptop was last seen on the desk closest to the door."
        },
        {
            icon: "🎒",
            title: "Large Backpack",
            text: "A large backpack was seen leaving the lab shortly after class."
        },
        {
            icon: "📹",
            title: "Hallway Camera",
            text: "The hallway camera shows only one student carrying a backpack large enough for the laptop."
        }
    ],

    suspects: [
        {
            name: "Daniel",
            role: "Science Student",
            avatar: "🔬",
            statement: "I left with my notebook only."
        },
        {
            name: "Emma",
            role: "Computer Student",
            avatar: "💻",
            statement: "I carried my large backpack home."
        },
        {
            name: "Leo",
            role: "Music Student",
            avatar: "🎸",
            statement: "I went straight to music class."
        }
    ],

    answer: 1,

    explanation:
        "The hallway camera showed a student carrying a backpack large enough for the laptop. Emma confirmed she had the large backpack.",

    hint:
        "Compare the size of the missing laptop with the backpacks."
},

{
    title: "The Secret Locker",

    story:
        "Someone opened the principal's locker and took an important envelope. The locker was not damaged, meaning the person probably knew the combination.",

    time: 85,

    clues: [
        {
            icon: "🔢",
            title: "No Damage",
            text: "The combination lock had no scratches or signs of being forced."
        },
        {
            icon: "📝",
            title: "Combination Note",
            text: "A note containing part of the combination was found near the staff room."
        },
        {
            icon: "👀",
            title: "Witness",
            text: "A teacher saw someone leaving the staff room shortly before the locker was opened."
        }
    ],

    suspects: [
        {
            name: "Tom",
            role: "Student",
            avatar: "🎒",
            statement: "I never went near the staff room."
        },
        {
            name: "Sara",
            role: "Office Helper",
            avatar: "📋",
            statement: "I delivered papers to the staff room."
        },
        {
            name: "Ben",
            role: "Sports Captain",
            avatar: "🏆",
            statement: "I was on the field."
        }
    ],

    answer: 1,

    explanation:
        "Sara admitted being in the staff room, where the combination note was found. She is the only suspect directly connected to that evidence.",

    hint:
        "Who was actually near the place where the combination note was found?"
},

{
    title: "The Disappearing Science Project",

    story:
        "A student's important science model disappeared just before judging. Three students had access to the science room.",

    time: 90,

    clues: [
        {
            icon: "🧪",
            title: "Chemical Stain",
            text: "A small blue chemical stain was found on the table."
        },
        {
            icon: "🧤",
            title: "Safety Gloves",
            text: "One pair of safety gloves was missing from the science room."
        },
        {
            icon: "🧹",
            title: "Storage Area",
            text: "The model's empty display box was found behind the storage cabinet."
        }
    ],

    suspects: [
        {
            name: "Aarav",
            role: "Science Club",
            avatar: "🔬",
            statement: "I was collecting materials."
        },
        {
            name: "Nisha",
            role: "Drama Club",
            avatar: "🎭",
            statement: "I never entered the science room."
        },
        {
            name: "Kabir",
            role: "Art Club",
            avatar: "🎨",
            statement: "I was painting posters."
        }
    ],

    answer: 0,

    explanation:
        "Aarav was collecting science materials and had a reason to use the safety equipment. The chemical stain and storage evidence point toward Aarav.",

    hint:
        "Which suspect had a legitimate reason to handle science equipment?"
},

{
    title: "The Library Code",

    story:
        "The school's digital library account was accessed after hours. Only three students knew where the temporary access code was stored.",

    time: 95,

    clues: [
        {
            icon: "💻",
            title: "Login Record",
            text: "The account was accessed from a computer in the library."
        },
        {
            icon: "📝",
            title: "Code Card",
            text: "The temporary access code card was found moved from its usual location."
        },
        {
            icon: "🕘",
            title: "Time",
            text: "The login happened at 6:42 PM, shortly after library club ended."
        }
    ],

    suspects: [
        {
            name: "Mina",
            role: "Library Captain",
            avatar: "📚",
            statement: "I left immediately after club."
        },
        {
            name: "Rohan",
            role: "Computer Club",
            avatar: "💻",
            statement: "I was still helping organize computers."
        },
        {
            name: "Sita",
            role: "Art Club",
            avatar: "🎨",
            statement: "I left before library club ended."
        }
    ],

    answer: 1,

    explanation:
        "Rohan said he remained in the library helping with computers. The login came from a library computer shortly afterward.",

    hint:
        "Focus on who remained near a computer after the club ended."
},

{
    title: "The Stolen Medal",

    story:
        "A rare sports medal disappeared from the coach's office. The office door was unlocked for only ten minutes.",

    time: 80,

    clues: [
        {
            icon: "🚪",
            title: "Open Door",
            text: "The office was unattended for exactly ten minutes."
        },
        {
            icon: "👣",
            title: "Wet Shoes",
            text: "Wet footprints were found inside the office."
        },
        {
            icon: "🏃",
            title: "Training",
            text: "It had rained just before football training began."
        }
    ],

    suspects: [
        {
            name: "Arjun",
            role: "Football Player",
            avatar: "⚽",
            statement: "I had just returned from training."
        },
        {
            name: "Priya",
            role: "Chess Captain",
            avatar: "♟️",
            statement: "I was in the chess room."
        },
        {
            name: "Dev",
            role: "Basketball Player",
            avatar: "🏀",
            statement: "I was waiting in the hallway."
        }
    ],

    answer: 0,

    explanation:
        "Arjun had just returned from outdoor football training after the rain. The wet footprints inside the office match that timeline.",

    hint:
        "Wet footprints + recent outdoor activity. Put those two facts together."
},

{
    title: "The Broken Telescope",

    story:
        "The astronomy club's telescope was found damaged before an observation night. Someone had entered the equipment room after school.",

    time: 100,

    clues: [
        {
            icon: "🔭",
            title: "Telescope",
            text: "The telescope had been moved from its storage position."
        },
        {
            icon: "🪢",
            title: "Loose Strap",
            text: "A carrying strap was found hanging from a shelf."
        },
        {
            icon: "🌌",
            title: "Astronomy Club",
            text: "Only astronomy club members had permission to move the telescope."
        }
    ],

    suspects: [
        {
            name: "Yash",
            role: "Astronomy Member",
            avatar: "🌌",
            statement: "I was preparing star charts."
        },
        {
            name: "Meera",
            role: "Music Club",
            avatar: "🎵",
            statement: "I was practicing piano."
        },
        {
            name: "Vikram",
            role: "Football Club",
            avatar: "⚽",
            statement: "I was on the field."
        }
    ],

    answer: 0,

    explanation:
        "Yash was an astronomy member preparing star charts and therefore had permission to move the telescope.",

    hint:
        "Who was officially allowed to handle the telescope?"
},

{
    title: "The Exam Paper Mystery",

    story:
        "A sealed envelope containing tomorrow's quiz questions was found opened in the staff room. No questions were missing, but someone had clearly looked inside.",

    time: 95,

    clues: [
        {
            icon: "✉️",
            title: "Opened Envelope",
            text: "The seal was carefully opened and placed back."
        },
        {
            icon: "📋",
            title: "Desk Log",
            text: "The staff room desk log shows three people entered."
        },
        {
            icon: "☕",
            title: "Coffee Cup",
            text: "A fresh coffee cup was left beside the envelope."
        }
    ],

    suspects: [
        {
            name: "Aman",
            role: "Office Assistant",
            avatar: "📋",
            statement: "I delivered attendance sheets."
        },
        {
            name: "Tara",
            role: "Student Helper",
            avatar: "🎒",
            statement: "I came to return a book."
        },
        {
            name: "Kiran",
            role: "Teacher Assistant",
            avatar: "☕",
            statement: "I was helping prepare the room."
        }
    ],

    answer: 2,

    explanation:
        "Kiran was preparing the staff room and was the suspect connected to the fresh coffee beside the opened envelope.",

    hint:
        "Look at the small detail left beside the envelope."
},

{
    title: "The Midnight Message",

    story:
        "A mysterious message appeared on the school's announcement computer late in the evening. Three students had recently used the computer.",

    time: 100,

    clues: [
        {
            icon: "🖥️",
            title: "Computer Log",
            text: "The announcement computer was used at 7:15 PM."
        },
        {
            icon: "⌨️",
            title: "Keyboard Shortcut",
            text: "The message was created using a shortcut known by members of the coding club."
        },
        {
            icon: "💡",
            title: "Power Log",
            text: "The computer room lights were switched on shortly before the message appeared."
        }
    ],

    suspects: [
        {
            name: "Ravi",
            role: "Coding Club",
            avatar: "💻",
            statement: "I was working on a programming project."
        },
        {
            name: "Anika",
            role: "Dance Club",
            avatar: "💃",
            statement: "I had already gone home."
        },
        {
            name: "Suman",
            role: "Sports Club",
            avatar: "🏃",
            statement: "I was at football practice."
        }
    ],

    answer: 0,

    explanation:
        "Ravi was the coding club member and said he was working on a programming project. The computer shortcut matches his club knowledge.",

    hint:
        "Who would naturally know the special computer shortcut?"
}

];


/* =====================================================
   PLAYER DATA
   ===================================================== */

let currentCase = 0;
let selectedSuspect = null;

let hints = 2;
let timer = 0;
let timerInterval = null;
let timeUsed = 0;

let score = 0;
let streak = 0;

let totalScore =
    Number(localStorage.getItem("mdScore")) || 0;

let solved =
    Number(localStorage.getItem("mdSolved")) || 0;

let coins =
    Number(localStorage.getItem("mdCoins"));

if (isNaN(coins)) {
    coins = 100;
}

let bestStreak =
    Number(localStorage.getItem("mdBestStreak")) || 0;

let xp =
    Number(localStorage.getItem("mdXP")) || 0;


/* =====================================================
   HELPERS
   ===================================================== */

const $ = id => document.getElementById(id);


/* =====================================================
   RANK SYSTEM
   ===================================================== */

const ranks = [
    {
        name: "Rookie Detective",
        icon: "🥉",
        xp: 0
    },
    {
        name: "Junior Investigator",
        icon: "🔍",
        xp: 300
    },
    {
        name: "Investigator",
        icon: "🥈",
        xp: 700
    },
    {
        name: "Senior Detective",
        icon: "🕵️",
        xp: 1300
    },
    {
        name: "Elite Investigator",
        icon: "🥇",
        xp: 2200
    },
    {
        name: "Master Detective",
        icon: "🏆",
        xp: 3500
    }
];

function getRankData() {

    let rank = ranks[0];

    for (const r of ranks) {

        if (xp >= r.xp) {
            rank = r;
        }

    }

    return rank;
}


/* =====================================================
   SAVE
   ===================================================== */

function saveData() {

    localStorage.setItem("mdScore", totalScore);
    localStorage.setItem("mdSolved", solved);
    localStorage.setItem("mdCoins", coins);
    localStorage.setItem("mdBestStreak", bestStreak);
    localStorage.setItem("mdXP", xp);

}


/* =====================================================
   HOME UPDATE
   ===================================================== */

function updateHome() {

    const rank = getRankData();

    $("coins").textContent = coins;
    $("coinsHome").textContent = coins;

    $("totalScore").textContent = totalScore;
    $("totalScoreHome").textContent = totalScore;

    $("casesSolved").textContent = solved;
    $("bestStreak").textContent = bestStreak;

    $("rank").textContent = rank.name;
    $("rankIcon").textContent = rank.icon;

    const nextRank =
        ranks.find(r => r.xp > xp);

    if (nextRank) {

        const previous =
            rank.xp;

        const percentage =
            ((xp - previous) /
            (nextRank.xp - previous)) * 100;

        $("xpBar").style.width =
            Math.min(100, percentage) + "%";

        $("xpText").textContent =
            `${xp} / ${nextRank.xp} XP`;

    } else {

        $("xpBar").style.width = "100%";
        $("xpText").textContent = `${xp} XP • MAX RANK`;

    }

    const progress =
        Math.min(100,
            (solved / cases.length) * 100);

    $("caseProgress").style.width =
        progress + "%";

    $("caseProgressText").textContent =
        `${Math.min(solved,cases.length)} / ${cases.length} cases solved`;

    updateAchievements();

}


/* =====================================================
   ACHIEVEMENTS
   ===================================================== */

function updateAchievements() {

    const achievements = [

        {
            icon: "🎯",
            name: "First Case",
            unlocked: solved >= 1
        },

        {
            icon: "🔥",
            name: "Hot Streak",
            unlocked: bestStreak >= 3
        },

        {
            icon: "🕵️",
            name: "Seasoned Detective",
            unlocked: solved >= 5
        },

        {
            icon: "🏆",
            name: "Mastermind",
            unlocked: solved >= 10
        },

        {
            icon: "💰",
            name: "Coin Collector",
            unlocked: coins >= 300
        }

    ];

    $("achievements").innerHTML =
        achievements.map(a => `
            <div class="achievement ${a.unlocked ? "" : "locked"}">
                ${a.icon} ${a.name}
                ${a.unlocked ? "✓" : "🔒"}
            </div>
        `).join("");

}


/* =====================================================
   SCREEN
   ===================================================== */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen =>
            screen.classList.remove("active")
        );

    $(id).classList.add("active");

    window.scrollTo(0,0);

}


/* =====================================================
   START
   ===================================================== */

$("startBtn").onclick = () => {

    currentCase = 0;

    loadCase();

    showScreen("case");

};


/* =====================================================
   LOAD CASE
   ===================================================== */

function loadCase() {

    clearInterval(timerInterval);

    const data = cases[currentCase];

    selectedSuspect = null;

    hints = 2;

    timer = data.time;

    timeUsed = 0;

    $("hintCount").textContent = hints;

    $("caseNumber").textContent =
        `CASE #${String(currentCase + 1).padStart(3,"0")}`;

    $("caseTitle").textContent =
        data.title;

    $("storyTitle").textContent =
        data.title;

    $("story").textContent =
        data.story;

    $("caseScore").textContent =
        score;

    $("caseCoins").textContent =
        coins;

    $("timer").textContent =
        timer;

    $("timer").parentElement.classList.remove("warning");

    $("progressBar").style.width =
        `${((currentCase) / cases.length) * 100}%`;

    $("message").className =
        "message";

    $("message").textContent =
        "Study the evidence carefully before making your accusation.";

    $("accuseBtn").classList.add("disabled");


    /* CLUES */

    $("clues").innerHTML = "";

    data.clues.forEach(clue => {

        const card =
            document.createElement("div");

        card.className = "clue";

        card.innerHTML = `
            <div class="clue-icon">${clue.icon}</div>
            <b>${clue.title}</b>
            <p>${clue.text}</p>
        `;

        $("clues").appendChild(card);

    });


    /* SUSPECTS */

    $("suspects").innerHTML = "";

    data.suspects.forEach(
        (suspect,index) => {

            const card =
                document.createElement("div");

            card.className =
                "suspect";

            card.innerHTML = `
                <div class="suspect-avatar">
                    ${suspect.avatar}
                </div>

                <h4>${suspect.name}</h4>

                <small>
                    ${suspect.role}
                </small>

                <p class="statement">
                    "${suspect.statement}"
                </p>

                <span class="check">
                    ✓
                </span>
            `;

            card.onclick = () => {

                document
                    .querySelectorAll(".suspect")
                    .forEach(x =>
                        x.classList.remove("selected")
                    );

                card.classList.add("selected");

                selectedSuspect = index;

                $("accuseBtn")
                    .classList
                    .remove("disabled");

                $("message").className =
                    "message";

                $("message").textContent =
                    `You selected ${suspect.name}. Ready to make your accusation?`;

            };

            $("suspects")
                .appendChild(card);

        }
    );


    startTimer();

}


/* =====================================================
   TIMER
   ===================================================== */

function startTimer() {

    timerInterval =
        setInterval(() => {

            timer--;

            timeUsed++;

            $("timer").textContent =
                timer;

            if (timer <= 15) {

                $("timer")
                    .parentElement
                    .classList
                    .add("warning");

            }

            if (timer <= 0) {

                clearInterval(timerInterval);

                timeExpired();

            }

        },1000);

}


function timeExpired() {

    $("resultIcon").textContent =
        "⏰";

    $("resultTitle").textContent =
        "Time's Up!";

    $("resultText").textContent =
        "The investigation timer reached zero before you solved the case.";

    $("earnedScore").textContent =
        "0";

    $("earnedCoins").textContent =
        "0";

    $("timeUsed").textContent =
        timeUsed;

    $("resultStreak").textContent =
        "0";

    $("explanation").innerHTML =
        `<b>🔎 Detective Report</b><br><br>
        The correct suspect was
        <b>${cases[currentCase].suspects[cases[currentCase].answer].name}</b>.
        <br><br>
        ${cases[currentCase].explanation}`;

    streak = 0;

    $("nextBtn").textContent =
        "🔎 TRY NEXT CASE";

    showScreen("result");

}


/* =====================================================
   HINT
   ===================================================== */

$("hintBtn").onclick = () => {

    if (hints <= 0) {

        $("message").className =
            "message bad";

        $("message").textContent =
            "You have no hints left. Buy one from the shop.";

        return;

    }

    hints--;

    $("hintCount").textContent =
        hints;

    const data =
        cases[currentCase];

    $("message").className =
        "message good";

    $("message").innerHTML =
        `💡 <b>Detective Hint:</b> ${data.hint}`;

};


/* =====================================================
   ACCUSATION
   ===================================================== */

$("accuseBtn").onclick = () => {

    if (selectedSuspect === null)
        return;

    const data =
        cases[currentCase];

    const correct =
        selectedSuspect === data.answer;

    clearInterval(timerInterval);

    if (correct) {

        solveCase(data);

    } else {

        wrongAnswer(data);

    }

};


/* =====================================================
   SOLVE CASE
   ===================================================== */

function solveCase(data) {

    const remainingTime =
        Math.max(0,timer);

    let earned =
        100;

    earned +=
        remainingTime * 2;

    earned +=
        hints * 25;

    earned +=
        streak * 20;

    score =
        earned;

    totalScore +=
        earned;

    solved++;

    streak++;

    if (streak > bestStreak) {

        bestStreak =
            streak;

    }

    const earnedXP =
        100 +
        remainingTime +
        (hints * 15);

    xp +=
        earnedXP;

    const earnedCoins =
        30 +
        Math.floor(remainingTime / 5) +
        hints * 5;

    coins +=
        earnedCoins;

    saveData();

    $("resultIcon").textContent =
        "🏆";

    $("resultTitle").textContent =
        "Case Solved!";

    $("resultText").textContent =
        `Excellent detective work! You correctly identified ${data.suspects[data.answer].name}.`;

    $("earnedScore").textContent =
        earned;

    $("earnedCoins").textContent =
        "+" + earnedCoins;

    $("timeUsed").textContent =
        timeUsed;

    $("resultStreak").textContent =
        streak;

    $("explanation").innerHTML =
        `<b>🔎 Detective Report</b>
        <br><br>
        ${data.explanation}
        <br><br>
        ⭐ Score: +${earned}
        <br>
        🪙 Coins: +${earnedCoins}
        <br>
        ✨ XP: +${earnedXP}`;

    $("nextBtn").textContent =
        currentCase < cases.length - 1
            ? "🔎 NEXT CASE"
            : "🏆 CASE FILE COMPLETE";

    updateHome();

    showScreen("result");

}


/* =====================================================
   WRONG ANSWER
   ===================================================== */

function wrongAnswer(data) {

    streak = 0;

    $("resultIcon").textContent =
        "❌";

    $("resultTitle").textContent =
        "Wrong Accusation";

    $("resultText").textContent =
        "The evidence does not support your accusation.";

    $("earnedScore").textContent =
        "0";

    $("earnedCoins").textContent =
        "0";

    $("timeUsed").textContent =
        timeUsed;

    $("resultStreak").textContent =
        "0";

    $("explanation").innerHTML =
        `<b>🔎 Detective Report</b>
        <br><br>
        The correct suspect was
        <b>${data.suspects[data.answer].name}</b>.
        <br><br>
        ${data.explanation}`;

    $("nextBtn").textContent =
        "🔎 NEXT CASE";

    showScreen("result");

}


/* =====================================================
   NEXT CASE
   ===================================================== */

$("nextBtn").onclick = () => {

    if (currentCase < cases.length - 1) {

        currentCase++;

        loadCase();

        showScreen("case");

    } else {

        currentCase = 0;

        loadCase();

        showScreen("case");

    }

};


/* =====================================================
   HOME
   ===================================================== */

$("homeBtn").onclick = () => {

    clearInterval(timerInterval);

    updateHome();

    showScreen("home");

};


$("resultHomeBtn").onclick = () => {

    updateHome();

    showScreen("home");

};


/* =====================================================
   SHOP
   ===================================================== */

$("shopBtn").onclick = () => {

    $("shopCoins").textContent =
        coins;

    showScreen("shopScreen");

};


$("shopBackBtn").onclick = () => {

    $("caseCoins").textContent =
        coins;

    showScreen("case");

};


/* =====================================================
   BUY TIME
   ===================================================== */

function buyTime(amount) {

    const cost =
        amount === 30
            ? 30
            : 50;

    if (coins < cost) {

        alert("Not enough coins!");

        return;

    }

    coins -=
        cost;

    timer +=
        amount;

    saveData();

    $("timer").textContent =
        timer;

    $("caseCoins").textContent =
        coins;

    $("shopCoins").textContent =
        coins;

    updateHome();

    alert(
        `⏱️ ${amount} seconds added!`
    );

}


/* =====================================================
   BUY HINT
   ===================================================== */

function buyHint() {

    if (coins < 40) {

        alert("Not enough coins!");

        return;

    }

    coins -= 40;

    hints++;

    $("hintCount").textContent =
        hints;

    $("caseCoins").textContent =
        coins;

    $("shopCoins").textContent =
        coins;

    saveData();

    updateHome();

    alert(
        "💡 Extra hint added!"
    );

}


/* =====================================================
   THEME
   ===================================================== */

$("themeBtn").onclick = () => {

    document.body.classList.toggle("light");

    $("themeBtn").textContent =
        document.body.classList.contains("light")
            ? "☀️"
            : "🌙";

};


/* =====================================================
   RESET
   ===================================================== */

$("resetBtn").onclick = () => {

    const confirmReset =
        confirm(
            "Are you sure you want to reset ALL detective progress?"
        );

    if (!confirmReset)
        return;

    localStorage.removeItem("mdScore");
    localStorage.removeItem("mdSolved");
    localStorage.removeItem("mdCoins");
    localStorage.removeItem("mdBestStreak");
    localStorage.removeItem("mdXP");

    totalScore = 0;
    solved = 0;
    coins = 100;
    bestStreak = 0;
    xp = 0;
    streak = 0;

    updateHome();

    alert(
        "Detective progress has been reset."
    );

};


/* =====================================================
   KEYBOARD
   ===================================================== */

document.onkeydown = event => {

    if (
        event.key === "Escape" &&
        $("case").classList.contains("active")
    ) {

        clearInterval(timerInterval);

        updateHome();

        showScreen("home");

    }

};


/* =====================================================
   INITIALIZE
   ===================================================== */

updateHome();
