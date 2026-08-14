const cases = [

    {
        title: "The Missing Trophy",

        story:
            "The school's championship trophy disappeared from a locked display cabinet during lunch. Three students were nearby. One of them knows more than they are saying.",

        clues: [

            {
                icon: "🔐",
                title: "Locked Cabinet",
                text:
                    "The cabinet was locked when the teacher returned. There was no sign of forced entry."
            },

            {
                icon: "👟",
                title: "Muddy Footprint",
                text:
                    "A muddy footprint was found directly in front of the trophy cabinet."
            },

            {
                icon: "🌧️",
                title: "Rainy Day",
                text:
                    "It had been raining heavily outside during lunch."
            }

        ],

        suspects: [

            {
                name: "Alex",
                role: "Football Player",
                avatar: "⚽",
                statement:
                    "I stayed in the gym during lunch."
            },

            {
                name: "Maya",
                role: "Library Volunteer",
                avatar: "📚",
                statement:
                    "I was returning books in the library."
            },

            {
                name: "Sam",
                role: "Outdoor Club Member",
                avatar: "🥾",
                statement:
                    "I came inside from the garden because of the rain."
            }

        ],

        answer: 2,

        explanation:
            "Sam said they had just come inside from the garden during the rain. The muddy footprint matches that story. The other two suspects had no reason to have muddy shoes near the cabinet.",

        hint:
            "Look carefully at the muddy footprint and ask who had recently been outside."

    },


    {
        title: "The Vanishing Painting",

        story:
            "A valuable painting vanished from the school art room shortly before an exhibition. The door was locked, but the window was open.",

        clues: [

            {
                icon: "🪟",
                title: "Open Window",
                text:
                    "The art room window was open, but it was too small for an adult to climb through."
            },

            {
                icon: "🎨",
                title: "Paint on the Floor",
                text:
                    "Fresh blue paint was found near the doorway."
            },

            {
                icon: "🧤",
                title: "Glove",
                text:
                    "A paint-covered glove was found behind a storage box."
            }

        ],

        suspects: [

            {
                name: "Lina",
                role: "Art Student",
                avatar: "🎨",
                statement:
                    "I was painting in the classroom next door."
            },

            {
                name: "Noah",
                role: "Basketball Player",
                avatar: "🏀",
                statement:
                    "I was practicing in the sports hall."
            },

            {
                name: "Riya",
                role: "Art Assistant",
                avatar: "🖌️",
                statement:
                    "I was helping clean the art room."
            }

        ],

        answer: 2,

        explanation:
            "Riya said she was cleaning the art room. The fresh paint and paint-covered glove strongly connect her to the missing painting.",

        hint:
            "Which suspect had a reason to be inside the art room?"

    },


    {
        title: "The Missing Laptop",

        story:
            "A school laptop disappeared from the computer lab after class. The teacher remembers seeing three students near the lab.",

        clues: [

            {
                icon: "💻",
                title: "Computer Lab",
                text:
                    "The laptop was last seen on the desk closest to the door."
            },

            {
                icon: "🎒",
                title: "Large Backpack",
                text:
                    "A large backpack was seen leaving the lab shortly after the class ended."
            },

            {
                icon: "📹",
                title: "Camera",
                text:
                    "The hallway camera shows only one student carrying a backpack large enough for the laptop."
            }

        ],

        suspects: [

            {
                name: "Daniel",
                role: "Science Student",
                avatar: "🔬",
                statement:
                    "I left with my notebook only."
            },

            {
                name: "Emma",
                role: "Computer Student",
                avatar: "💻",
                statement:
                    "I carried my large backpack home."
            },

            {
                name: "Leo",
                role: "Music Student",
                avatar: "🎸",
                statement:
                    "I went straight to music class."
            }

        ],

        answer: 1,

        explanation:
            "The hallway camera showed a student carrying a backpack large enough for the laptop. Emma confirmed she had the large backpack.",

        hint:
            "Think about the size of the missing laptop and compare it with the backpacks."

    },


    {
        title: "The Secret Locker",

        story:
            "Someone opened the principal's locker and took an important envelope. The locker was not damaged, meaning the person probably knew the combination.",

        clues: [

            {
                icon: "🔢",
                title: "No Damage",
                text:
                    "The combination lock had no scratches or signs of being forced."
            },

            {
                icon: "📝",
                title: "Combination Note",
                text:
                    "A note containing part of the combination was found near the staff room."
            },

            {
                icon: "👀",
                title: "Witness",
                text:
                    "A teacher saw someone leaving the staff room shortly before the locker was opened."
            }

        ],

        suspects: [

            {
                name: "Tom",
                role: "Student",
                avatar: "🎒",
                statement:
                    "I never went near the staff room."
            },

            {
                name: "Sara",
                role: "Office Helper",
                avatar: "📋",
                statement:
                    "I delivered papers to the staff room."
            },

            {
                name: "Ben",
                role: "Sports Captain",
                avatar: "🏆",
                statement:
                    "I was on the field."
            }

        ],

        answer: 1,

        explanation:
            "Sara admitted being in the staff room, where the combination note was found. She also had a legitimate reason to be there, making her the only suspect connected to the evidence.",

        hint:
            "Who was actually near the place where the combination note was found?"

    }

];


let currentCase = 0;

let selectedSuspect = null;

let hints = 2;

let score = 0;

let streak = 0;

let bestStreak =
    Number(localStorage.getItem("mdBestStreak")) || 0;

let solved =
    Number(localStorage.getItem("mdSolved")) || 0;

let totalScore =
    Number(localStorage.getItem("mdScore")) || 0;


const $ = id =>
    document.getElementById(id);


/* RANK */

function getRank() {

    if (solved >= 15)
        return "Master Detective";

    if (solved >= 10)
        return "Elite Investigator";

    if (solved >= 6)
        return "Senior Detective";

    if (solved >= 3)
        return "Investigator";

    return "Rookie Detective";

}


function updateHome() {

    $("casesSolved").textContent =
        solved;

    $("totalScore").textContent =
        totalScore;

    $("totalScoreHome").textContent =
        totalScore;

    $("bestStreak").textContent =
        bestStreak;

    $("rank").textContent =
        getRank();

    $("bestRank").textContent =
        getRank()
            .replace(" Detective","")
            .replace(" Investigator","");

}


updateHome();


/* SCREEN */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen =>
            screen.classList.remove("active")
        );

    $(id).classList.add("active");

    window.scrollTo(0,0);

}


/* START */

$("startBtn").onclick = () => {

    currentCase = 0;

    loadCase();

    showScreen("case");

};


/* LOAD CASE */

function loadCase() {

    const data =
        cases[currentCase];


    selectedSuspect = null;

    hints = 2;

    $("hintCount").textContent =
        hints;

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


    $("progressBar").style.width =
        `${((currentCase) / cases.length) * 100}%`;


    /* CLUES */

    $("clues").innerHTML = "";


    data.clues.forEach((clue,index) => {

        const card =
            document.createElement("div");

        card.className =
            "clue";


        card.innerHTML = `

            <div class="clue-icon">
                ${clue.icon}
            </div>

            <b>${clue.title}</b>

            <p>${clue.text}</p>

        `;


        $("clues")
            .appendChild(card);

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

                <h4>
                    ${suspect.name}
                </h4>

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
                        x.classList.remove(
                            "selected"
                        )
                    );


                card.classList.add(
                    "selected"
                );


                selectedSuspect =
                    index;


                $("accuseBtn")
                    .classList
                    .remove("disabled");


                $("message").textContent =
                    `You selected ${suspect.name}. Ready to make your accusation?`;

            };


            $("suspects")
                .appendChild(card);

        }
    );


    $("message").textContent =
        "Study the evidence carefully before making your accusation.";

}


/* HINT */

$("hintBtn").onclick = () => {

    if (hints <= 0)
        return;


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


/* ACCUSATION */

$("accuseBtn").onclick = () => {

    if (selectedSuspect === null)
        return;


    const data =
        cases[currentCase];


    const correct =
        selectedSuspect === data.answer;


    if (correct) {

        solveCase(data);

    } else {

        wrongAnswer(data);

    }

};


/* CORRECT */

function solveCase(data) {

    let earned = 100;


    /* Bonus for unused hints */

    earned +=
        hints * 25;


    /* Streak bonus */

    streak++;

    earned +=
        streak * 20;


    if (streak > bestStreak) {

        bestStreak =
            streak;

        localStorage.setItem(
            "mdBestStreak",
            bestStreak
        );

    }


    score += earned;

    totalScore += earned;

    solved++;


    localStorage.setItem(
        "mdScore",
        totalScore
    );


    localStorage.setItem(
        "mdSolved",
        solved
    );


    $("resultIcon").textContent =
        "🏆";

    $("resultTitle").textContent =
        "Case Solved!";


    $("resultText").textContent =
        `Excellent detective work! You correctly identified ${data.suspects[data.answer].name}.`;


    $("earnedScore").textContent =
        earned;


    $("clueCount").textContent =
        data.clues.length;


    $("resultStreak").textContent =
        streak;


    $("explanation").innerHTML =
        `<b>🔎 Detective Report</b><br><br>${data.explanation}`;


    $("nextBtn").textContent =
        currentCase <
        cases.length - 1
            ? "🔎 NEXT CASE"
            : "🏆 CASE FILE COMPLETE";


    showScreen("result");

    updateHome();

}


/* WRONG */

function wrongAnswer(data) {

    streak = 0;


    $("message").className =
        "message bad";


    $("message").innerHTML =
        `❌ That's not enough evidence. Re-examine the clues before accusing someone.`;

}


/* NEXT */

$("nextBtn").onclick = () => {

    if (
        currentCase <
        cases.length - 1
    ) {

        currentCase++;

        score = 0;

        loadCase();

        showScreen("case");

    } else {

        currentCase = 0;

        loadCase();

        showScreen("case");

    }

};


/* HOME */

$("homeBtn").onclick = () =>
    showScreen("home");


$("resultHomeBtn").onclick = () => {

    updateHome();

    showScreen("home");

};


/* THEME */

$("themeBtn").onclick = () => {

    document.body.classList.toggle(
        "light"
    );


    $("themeBtn").textContent =
        document.body.classList.contains(
            "light"
        )
            ? "☀️"
            : "🌙";

};


/* KEYBOARD SHORTCUT */

document.onkeydown = event => {

    if (
        event.key === "Escape" &&
        $("case").classList.contains("active")
    ) {

        showScreen("home");

    }

};