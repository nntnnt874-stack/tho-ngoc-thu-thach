/* =========================================================
   🌾 TẾT LÚA & NẾP
   🦁 ĐÁNH BẠI LÂN TÂN SỬU
   🎆 SCRIPT.JS HOÀN CHỈNH
========================================================= */

"use strict";


/* =========================================================
   🎵 AUDIO
========================================================= */

const waitingMusic = document.getElementById("waitingMusic");
const gameMusic = document.getElementById("gameMusic");


/* =========================================================
   🎆 HIỆU ỨNG
========================================================= */

const effects = document.getElementById("effects");
const flowerTrail = document.getElementById("flowerTrail");
const victoryEffects = document.getElementById("victoryEffects");
const startFireworks = document.getElementById("startFireworks");


/* =========================================================
   🎮 SCREEN
========================================================= */

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");


/* =========================================================
   🔘 BUTTONS
========================================================= */

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");


/* =========================================================
   ❓ QUESTION
========================================================= */

const currentQuestionEl =
    document.getElementById("currentQuestion");

const totalQuestionsEl =
    document.getElementById("totalQuestions");

const questionNumberEl =
    document.getElementById("questionNumber");

const questionTextEl =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answersContainer");


/* =========================================================
   🏆 SCORE
========================================================= */

const scoreEl =
    document.getElementById("score");

const finalScoreEl =
    document.getElementById("finalScore");


/* =========================================================
   📊 PROGRESS
========================================================= */

const progressPercentEl =
    document.getElementById("progressPercent");

const progressFillEl =
    document.getElementById("progressFill");


/* =========================================================
   🦁 ENEMY
========================================================= */

const enemyHealthEl =
    document.getElementById("enemyHealth");

const enemyHealthTextEl =
    document.getElementById("enemyHealthText");

const enemyMessageEl =
    document.getElementById("enemyMessage");

const tanSuuBattle =
    document.getElementById("tanSuuBattle");

const luaBattle =
    document.getElementById("luaBattle");

const nepBattle =
    document.getElementById("nepBattle");

const attackEffect =
    document.querySelector(".attack-effect");


/* =========================================================
   🎉 FEEDBACK
========================================================= */

const feedback =
    document.getElementById("feedback");

const feedbackIcon =
    document.getElementById("feedbackIcon");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");


/* =========================================================
   💬 COMIC
========================================================= */

const comic =
    document.querySelector(".comic");

const luaSpeech =
    document.getElementById("luaSpeech");

const nepSpeech =
    document.getElementById("nepSpeech");


/* =========================================================
   🎬 VIDEO
========================================================= */

const endingVideo =
    document.getElementById("endingVideo");


/* =========================================================
   ❓ BỘ 8 CÂU HỎI
========================================================= */

const questions = [

    {
        question:
            "An ninh truyền thống chủ yếu tập trung vào vấn đề nào?",

        options: [
            "An ninh con người và môi trường",
            "An ninh kinh tế và biến đổi khí hậu",
            "Bảo vệ chủ quyền, lãnh thổ và an ninh quốc gia",
            "Các vấn đề xã hội và thiên tai"
        ],

        correct: 2
    },


    {
        question:
            "Đặc điểm nổi bật của các mối đe dọa an ninh phi truyền thống là gì?",

        options: [
            "Chỉ xuất hiện trong phạm vi một quốc gia",
            "Có tính xuyên quốc gia và tác động đến nhiều lĩnh vực",
            "Chỉ liên quan đến quân sự",
            "Không ảnh hưởng đến con người"
        ],

        correct: 1
    },


    {
        question:
            "Mối đe dọa nào sau đây thuộc an ninh phi truyền thống?",

        options: [
            "Xung đột quân sự giữa các quốc gia",
            "Tranh chấp biên giới",
            "Biến đổi khí hậu và thiên tai",
            "Chiến tranh giữa các lực lượng vũ trang"
        ],

        correct: 2
    },


    {
        question:
            "Một trong những biểu hiện của an ninh phi truyền thống ở Việt Nam là gì?",

        options: [
            "Dịch bệnh, biến đổi khí hậu và tội phạm xuyên quốc gia",
            "Chỉ có chiến tranh xâm lược",
            "Chỉ có tranh chấp lãnh thổ",
            "Chỉ có xung đột quân sự"
        ],

        correct: 0
    },


    {
        question:
            "Yếu tố nào có thể làm gia tăng các mối đe dọa an ninh phi truyền thống?",

        options: [
            "Sự phát triển của giao lưu và hợp tác quốc tế",
            "Sự phát triển của khoa học, công nghệ và quá trình toàn cầu hóa",
            "Việc giảm giao lưu giữa các quốc gia",
            "Sự thu hẹp của các hoạt động kinh tế"
        ],

        correct: 1
    },


    {
        question:
            "Để ứng phó với các mối đe dọa an ninh phi truyền thống cần làm gì?",

        options: [
            "Chỉ sử dụng biện pháp quân sự",
            "Tăng cường hợp tác quốc tế và phối hợp giữa các lực lượng",
            "Không cần sự tham gia của người dân",
            "Chỉ giải quyết khi mối đe dọa xảy ra"
        ],

        correct: 1
    },


    {
        question:
            "Ai có vai trò trong phòng ngừa và ứng phó với các mối đe dọa an ninh phi truyền thống?",

        options: [
            "Chỉ lực lượng quân đội",
            "Nhà nước, các tổ chức và toàn thể nhân dân",
            "Chỉ các doanh nghiệp",
            "Chỉ các tổ chức quốc tế"
        ],

        correct: 1
    },


    {
        question:
            "Giải pháp quan trọng nhằm nâng cao nhận thức về các mối đe dọa an ninh phi truyền thống là gì?",

        options: [
            "Hạn chế tuyên truyền thông tin",
            "Chỉ tập trung vào các vấn đề quân sự",
            "Không cần giáo dục cộng đồng",
            "Tăng cường tuyên truyền, giáo dục và phổ biến kiến thức"
        ],

        correct: 3
    }

];


/* =========================================================
   🎮 GAME STATE
========================================================= */

let currentQuestionIndex = 0;

let score = 0;

let enemyHP = 100;

let questionAnswered = false;

let gameStarted = false;

let startFireworkTimer = null;

let mouseFlowerTimer = null;


/* =========================================================
   🔧 HÀM TIỆN ÍCH
========================================================= */

function safeAddClass(element, className) {

    if (element) {
        element.classList.add(className);
    }

}


function safeRemoveClass(element, className) {

    if (element) {
        element.classList.remove(className);
    }

}


/* =========================================================
   🎬 CHUYỂN SCREEN
========================================================= */

function showScreen(screen) {

    [startScreen, gameScreen, endScreen]
        .forEach(element => {

            if (!element) return;

            element.classList.add("hidden");

        });


    if (screen) {

        screen.classList.remove("hidden");

    }

}


/* =========================================================
   🎵 NHẠC
========================================================= */

function playWaitingMusic() {

    if (!waitingMusic) return;

    waitingMusic.volume = 0.55;

    const promise =
        waitingMusic.play();

    if (promise) {

        promise.catch(() => {
            // Trình duyệt có thể chặn autoplay.
        });

    }

}


function stopWaitingMusic() {

    if (!waitingMusic) return;

    waitingMusic.pause();

    waitingMusic.currentTime = 0;

}


function playGameMusic() {

    if (!gameMusic) return;

    gameMusic.volume = 0.55;

    const promise =
        gameMusic.play();

    if (promise) {

        promise.catch(() => {
            // Sẽ phát sau khi người dùng click START.
        });

    }

}


function stopGameMusic() {

    if (!gameMusic) return;

    gameMusic.pause();

    gameMusic.currentTime = 0;

}


/* =========================================================
   🎆 PHÁO HOA START
========================================================= */

function createStartFirework(x, y) {

    if (!startFireworks) return;


    /* FLASH */

    const flash =
        document.createElement("div");

    flash.className =
        "start-flash";

    flash.style.left =
        `${x}px`;

    flash.style.top =
        `${y}px`;

    startFireworks.appendChild(flash);


    setTimeout(() => {

        flash.remove();

    }, 600);


    /* TÂM */

    const core =
        document.createElement("div");

    core.className =
        "start-firework";

    core.style.left =
        `${x}px`;

    core.style.top =
        `${y}px`;

    startFireworks.appendChild(core);


    setTimeout(() => {

        core.remove();

    }, 500);


    /* TIA */

    const colors = [
        "#ffd700",
        "#ffffff",
        "#ff5252",
        "#ff9800",
        "#ff4081",
        "#00e5ff",
        "#76ff03",
        "#ffeb3b"
    ];


    const amount = 44;


    for (let i = 0; i < amount; i++) {

        const spark =
            document.createElement("div");

        spark.className =
            "start-spark";


        const angle =
            (360 / amount) * i;


        const distance =
            80 + Math.random() * 180;


        spark.style.left =
            `${x}px`;

        spark.style.top =
            `${y}px`;


        spark.style.setProperty(
            "--angle",
            `${angle}deg`
        );


        spark.style.setProperty(
            "--distance",
            `${distance}px`
        );


        const color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        spark.style.background =
            color;

        spark.style.color =
            color;


        spark.style.animationDelay =
            `${Math.random() * .15}s`;


        startFireworks.appendChild(spark);


        setTimeout(() => {

            spark.remove();

        }, 1800);

    }

}


/* =========================================================
   🎇 PHÁO NGẪU NHIÊN
========================================================= */

function createRandomStartFirework() {

    if (!startFireworks) return;


    const width =
        window.innerWidth;

    const height =
        window.innerHeight;


    const x =
        50 +
        Math.random() *
        Math.max(100, width - 100);


    const y =
        60 +
        Math.random() *
        Math.max(100, height * .58);


    createStartFirework(x, y);

}


/* =========================================================
   🎆 CHẠY PHÁO MÀN HÌNH CHỜ
========================================================= */

function startWaitingFireworks() {

    if (!startFireworks) return;


    stopWaitingFireworks();


    createRandomStartFirework();


    startFireworkTimer =
        setInterval(() => {

            createRandomStartFirework();

        }, 700);

}


/* =========================================================
   🛑 DỪNG PHÁO
========================================================= */

function stopWaitingFireworks() {

    if (startFireworkTimer !== null) {

        clearInterval(
            startFireworkTimer
        );

        startFireworkTimer = null;

    }

}


/* =========================================================
   💥 ĐẠI PHÁO START
========================================================= */

function startMegaFireworks() {

    const width =
        window.innerWidth;

    const height =
        window.innerHeight;


    const positions = [

        [width * .10, height * .22],

        [width * .22, height * .15],

        [width * .35, height * .30],

        [width * .50, height * .18],

        [width * .65, height * .30],

        [width * .78, height * .15],

        [width * .90, height * .22],

        [width * .25, height * .48],

        [width * .50, height * .43],

        [width * .75, height * .48]

    ];


    positions.forEach(
        (position, index) => {

            setTimeout(() => {

                createStartFirework(
                    position[0],
                    position[1]
                );

            }, index * 90);

        }
    );

}


/* =========================================================
   🎇 PHÁO HOA TRẬN ĐẤU
========================================================= */

function createBattleFirework(
    x,
    y,
    colorSet = null
) {

    if (!effects) return;


    const colors =
        colorSet || [
            "#ffd700",
            "#ff5252",
            "#ffffff",
            "#ff9800",
            "#00e5ff"
        ];


    for (let i = 0; i < 32; i++) {

        const spark =
            document.createElement("div");

        spark.className =
            "spark";


        const angle =
            Math.random() * Math.PI * 2;


        const distance =
            60 + Math.random() * 130;


        spark.style.left =
            `${x}px`;

        spark.style.top =
            `${y}px`;


        spark.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        spark.style.setProperty(
            "--dx",
            `${Math.cos(angle) * distance}px`
        );


        spark.style.setProperty(
            "--dy",
            `${Math.sin(angle) * distance}px`
        );


        effects.appendChild(spark);


        setTimeout(() => {

            spark.remove();

        }, 1300);

    }

}


/* =========================================================
   🎉 PHÁO HOA TOÀN MÀN HÌNH
========================================================= */

function fullScreenFireworks() {

    const width =
        window.innerWidth;

    const height =
        window.innerHeight;


    for (let i = 0; i < 10; i++) {

        setTimeout(() => {

            const x =
                50 +
                Math.random() *
                Math.max(100, width - 100);


            const y =
                50 +
                Math.random() *
                Math.max(100, height - 100);


            createBattleFirework(
                x,
                y
            );

        }, i * 160);

    }

}


/* =========================================================
   📊 UPDATE PROGRESS
========================================================= */

function updateProgress() {

    const total =
        questions.length;


    const completed =
        currentQuestionIndex;


    const percent =
        Math.round(
            (completed / total) * 100
        );


    if (progressPercentEl) {

        progressPercentEl.textContent =
            `${percent}%`;

    }


    if (progressFillEl) {

        progressFillEl.style.width =
            `${percent}%`;

    }


    if (currentQuestionEl) {

        currentQuestionEl.textContent =
            Math.min(
                currentQuestionIndex + 1,
                total
            );

    }


    if (totalQuestionsEl) {

        totalQuestionsEl.textContent =
            total;

    }

}


/* =========================================================
   🦁 UPDATE MÁU LÂN
========================================================= */

function updateEnemyHealth() {

    enemyHP =
        Math.max(
            0,
            Math.min(
                100,
                enemyHP
            )
        );


    if (enemyHealthEl) {

        enemyHealthEl.style.width =
            `${enemyHP}%`;

    }


    if (enemyHealthTextEl) {

        enemyHealthTextEl.textContent =
            `${enemyHP}%`;

    }


    /* Đổi màu theo máu */

    if (enemyHealthEl) {

        if (enemyHP <= 25) {

            enemyHealthEl.style.background =
                "linear-gradient(90deg,#d50000,#ff5252)";

        }

        else if (enemyHP <= 50) {

            enemyHealthEl.style.background =
                "linear-gradient(90deg,#ff6d00,#ffab00)";

        }

        else {

            enemyHealthEl.style.background =
                "linear-gradient(90deg,#00c853,#76ff03)";

        }

    }

}


/* =========================================================
   ❓ HIỂN THỊ CÂU HỎI
========================================================= */

function renderQuestion() {

    if (
        !questionTextEl ||
        !answersContainer
    ) return;


    const question =
        questions[currentQuestionIndex];


    if (!question) return;


    questionAnswered = false;


    /* Ẩn feedback */

    hideFeedback();

    hideNextButton();


    /* Số câu */

    if (questionNumberEl) {

        questionNumberEl.textContent =
            `Câu ${currentQuestionIndex + 1}`;

    }


    if (currentQuestionEl) {

        currentQuestionEl.textContent =
            currentQuestionIndex + 1;

    }


    /* Nội dung */

    questionTextEl.textContent =
        question.question;


    /* Xóa đáp án cũ */

    answersContainer.innerHTML = "";


    /* Tạo đáp án */

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "answer-btn";


            button.dataset.index =
                index;


            button.innerHTML =
                `<strong>${String.fromCharCode(65 + index)}.</strong> ${option}`;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    updateProgress();

}


/* =========================================================
   🎯 KIỂM TRA ĐÁP ÁN
========================================================= */

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    if (questionAnswered) return;


    const question =
        questions[currentQuestionIndex];


    if (!question) return;


    /* ĐÚNG */

    if (
        selectedIndex ===
        question.correct
    ) {

        questionAnswered = true;


        score += 10;


        if (scoreEl) {

            scoreEl.textContent =
                score;

        }


        /* Đánh dấu đúng */

        selectedButton.classList.add(
            "correct"
        );


        /* Khóa tất cả */

        const buttons =
            answersContainer.querySelectorAll(
                ".answer-btn"
            );


        buttons.forEach(button => {

            button.disabled = true;

        });


        /* Lúa/Nếp tấn công */

        attackLan();


        /* Feedback */

        showCorrect();


        /* Pháo */

        fullScreenFireworks();


        /* Nếu câu cuối */

        if (
            currentQuestionIndex ===
            questions.length - 1
        ) {

            setTimeout(() => {

                finishGame();

            }, 2200);

        }

        else {

            setTimeout(() => {

                showNextButton();

            }, 1000);

        }

    }

    /* SAI */

    else {

        selectedButton.classList.add(
            "wrong"
        );


        showWrong();


        enemyAttack();


        setTimeout(() => {

            selectedButton.classList.remove(
                "wrong"
            );

            hideFeedback();

        }, 1300);

    }

}


/* =========================================================
   🎉 ĐÚNG
========================================================= */

function showCorrect() {

    if (feedback) {

        feedback.classList.remove(
            "hidden"
        );

    }


    if (feedbackIcon) {

        feedbackIcon.textContent =
            "🎆";

    }


    if (feedbackTitle) {

        feedbackTitle.textContent =
            "CHÍNH XÁC!";

    }


    if (feedbackText) {

        feedbackText.textContent =
            "Tuyệt vời! Lúa và Nếp đã tấn công Lân!";

    }


    if (enemyMessageEl) {

        if (enemyHP > 0) {

            enemyMessageEl.textContent =
                `Lân Tân Sửu bị đánh! Còn ${enemyHP}% máu!`;

        }

        else {

            enemyMessageEl.textContent =
                "🦁 Lân Tân Sửu đã bị đánh bại!";

        }

    }

}


/* =========================================================
   ❌ SAI
========================================================= */

function showWrong() {

    if (feedback) {

        feedback.classList.remove(
            "hidden"
        );

    }


    if (feedbackIcon) {

        feedbackIcon.textContent =
            "💥";

    }


    if (feedbackTitle) {

        feedbackTitle.textContent =
            "CHƯA ĐÚNG!";

    }


    if (feedbackText) {

        feedbackText.textContent =
            "Lân phản công! Hãy thử lại đáp án khác.";

    }


    if (enemyMessageEl) {

        enemyMessageEl.textContent =
            "🦁 Lân Tân Sửu phản công!";

    }

}


/* =========================================================
   🙈 ẨN FEEDBACK
========================================================= */

function hideFeedback() {

    if (feedback) {

        feedback.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   ➡️ NÚT CÂU TIẾP
========================================================= */

function showNextButton() {

    if (!nextBtn) return;

    nextBtn.classList.remove(
        "hidden"
    );

}


function hideNextButton() {

    if (!nextBtn) return;

    nextBtn.classList.add(
        "hidden"
    );

}


/* =========================================================
   ⚔️ LÚA + NẾP ĐÁNH LÂN
========================================================= */

function attackLan() {

    /* Tính máu theo 8 câu */

    const damage =
        Math.round(
            100 / questions.length
        );


    enemyHP =
        Math.max(
            0,
            enemyHP - damage
        );


    updateEnemyHealth();


    /* Hiệu ứng Lúa */

    if (luaBattle) {

        luaBattle.style.transform =
            "translateX(35px) scale(1.15)";

        setTimeout(() => {

            luaBattle.style.transform =
                "";

        }, 350);

    }


    /* Hiệu ứng Nếp */

    if (nepBattle) {

        nepBattle.style.transform =
            "translateX(25px) scale(1.15)";

        setTimeout(() => {

            nepBattle.style.transform =
                "";

        }, 350);

    }


    /* 💥 EXPLOSION */

    if (attackEffect) {

        attackEffect.style.opacity =
            "1";

        attackEffect.style.transform =
            "translate(-50%, -50%) scale(1.5)";

        setTimeout(() => {

            attackEffect.style.opacity =
                "0";

            attackEffect.style.transform =
                "translate(-50%, -50%) scale(.5)";

        }, 450);

    }


    /* Lân rung */

    if (tanSuuBattle) {

        tanSuuBattle.style.transform =
            "translateX(20px) rotate(8deg)";

        setTimeout(() => {

            tanSuuBattle.style.transform =
                "";

        }, 350);

    }


    /* Comic */

    showComic();


    /* Pháo gần Lân */

    setTimeout(() => {

        const rect =
            tanSuuBattle
                ? tanSuuBattle.getBoundingClientRect()
                : null;


        if (rect) {

            createBattleFirework(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
            );

        }

    }, 250);

}


/* =========================================================
   💥 LÂN PHẢN CÔNG
========================================================= */

function enemyAttack() {

    if (!tanSuuBattle) return;


    tanSuuBattle.animate(

        [
            {
                transform:
                    "translateX(0)"
            },

            {
                transform:
                    "translateX(-15px)"
            },

            {
                transform:
                    "translateX(15px)"
            },

            {
                transform:
                    "translateX(-10px)"
            },

            {
                transform:
                    "translateX(0)"
            }

        ],

        {
            duration: 450
        }

    );

}


/* =========================================================
   💬 COMIC
========================================================= */

function showComic() {

    if (!comic) return;


    comic.classList.remove(
        "hidden"
    );


    if (luaSpeech) {

        luaSpeech.textContent =
            "🌾 Lúa chiến thôi!";

    }


    if (nepSpeech) {

        nepSpeech.textContent =
            "🍚 Nếp tung chiêu!";

    }


    setTimeout(() => {

        comic.classList.add(
            "hidden"
        );

    }, 1200);

}


/* =========================================================
   ➡️ CÂU TIẾP THEO
========================================================= */

function nextQuestion() {

    if (
        currentQuestionIndex >=
        questions.length - 1
    ) {

        finishGame();

        return;

    }


    currentQuestionIndex++;


    renderQuestion();


    if (enemyMessageEl) {

        enemyMessageEl.textContent =
            "🦁 Lân Tân Sửu đang thách thức bạn!";

    }

}


/* =========================================================
   🏆 KẾT THÚC
========================================================= */

function finishGame() {

    stopWaitingMusic();

    stopGameMusic();

    stopWaitingFireworks();


    /* Progress 100% */

    if (progressPercentEl) {

        progressPercentEl.textContent =
            "100%";

    }


    if (progressFillEl) {

        progressFillEl.style.width =
            "100%";

    }


    enemyHP = 0;

    updateEnemyHealth();


    if (finalScoreEl) {

        finalScoreEl.textContent =
            score;

    }


    showScreen(endScreen);


    /* Pháo chiến thắng */

    victoryFireworks();


    /* Video */

    setTimeout(() => {

        playEndingVideo();

    }, 800);

}


/* =========================================================
   🎇 VICTORY FIREWORKS
========================================================= */

function victoryFireworks() {

    const width =
        window.innerWidth;

    const height =
        window.innerHeight;


    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const x =
                50 +
                Math.random() *
                Math.max(100, width - 100);


            const y =
                50 +
                Math.random() *
                Math.max(100, height - 100);


            createBattleFirework(
                x,
                y,
                [
                    "#ffd700",
                    "#ffffff",
                    "#ff5252",
                    "#ff4081",
                    "#00e5ff",
                    "#76ff03"
                ]
            );

        }, i * 180);

    }

}


/* =========================================================
   🎬 VIDEO
========================================================= */

function playEndingVideo() {

    if (!endingVideo) return;


    endingVideo.currentTime = 0;


    const promise =
        endingVideo.play();


    if (promise) {

        promise.catch(() => {
            // Người dùng có thể tự bấm Play.
        });

    }

}


/* =========================================================
   🌸 HOA THEO CHUỘT
========================================================= */

function createMouseFlower(
    x,
    y
) {

    if (!flowerTrail) return;


    const flowers = [
        "🌸",
        "🌼",
        "🌺",
        "✨"
    ];


    const flower =
        document.createElement("div");


    flower.className =
        "mouse-flower";


    flower.textContent =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];


    flower.style.left =
        `${x}px`;

    flower.style.top =
        `${y}px`;


    flowerTrail.appendChild(
        flower
    );


    setTimeout(() => {

        flower.remove();

    }, 1500);

}


/* =========================================================
   🖱️ CHUỘT
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        if (
            !startScreen ||
            startScreen.classList.contains("hidden")
        ) {

            return;

        }


        if (mouseFlowerTimer) return;


        mouseFlowerTimer =
            setTimeout(() => {

                createMouseFlower(
                    event.clientX,
                    event.clientY
                );


                mouseFlowerTimer = null;

            }, 80);

    }
);


/* =========================================================
   📱 TOUCH
========================================================= */

document.addEventListener(
    "touchmove",
    event => {

        const touch =
            event.touches[0];


        if (!touch) return;


        if (
            !startScreen ||
            startScreen.classList.contains("hidden")
        ) {

            return;

        }


        createMouseFlower(
            touch.clientX,
            touch.clientY
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   🎮 START GAME
========================================================= */

function startGame() {

    if (gameStarted) return;


    gameStarted = true;


    /* Đại pháo */

    startMegaFireworks();


    /* Dừng pháo nền */

    stopWaitingFireworks();


    /* Nhạc */

    stopWaitingMusic();

    playGameMusic();


    /* Reset game */

    currentQuestionIndex = 0;

    score = 0;

    enemyHP = 100;


    if (scoreEl) {

        scoreEl.textContent =
            "0";

    }


    updateEnemyHealth();


    updateProgress();


    /* Chuyển màn */

    showScreen(gameScreen);


    /* Hiện câu hỏi */

    setTimeout(() => {

        renderQuestion();

    }, 250);

}


/* =========================================================
   🔄 RESTART
========================================================= */

function restartGame() {

    stopGameMusic();


    if (endingVideo) {

        endingVideo.pause();

        endingVideo.currentTime = 0;

    }


    currentQuestionIndex = 0;

    score = 0;

    enemyHP = 100;

    questionAnswered = false;

    gameStarted = false;


    if (scoreEl) {

        scoreEl.textContent =
            "0";

    }


    if (finalScoreEl) {

        finalScoreEl.textContent =
            "0";

    }


    updateEnemyHealth();


    updateProgress();


    hideFeedback();

    hideNextButton();


    showScreen(startScreen);


    playWaitingMusic();


    startWaitingFireworks();

}


/* =========================================================
   🎯 CLICK START
========================================================= */

if (startBtn) {

    startBtn.addEventListener(
        "click",
        startGame
    );

}


/* =========================================================
   ➡️ CLICK NEXT
========================================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        nextQuestion
    );

}


/* =========================================================
   🔄 CLICK RESTART
========================================================= */

if (restartBtn) {

    restartBtn.addEventListener(
        "click",
        restartGame
    );

}


/* =========================================================
   🛡️ NGĂN BUTTON BỊ CLICK NHẦM
========================================================= */

if (startBtn) {

    startBtn.style.pointerEvents =
        "auto";

}


/* =========================================================
   🚀 KHỞI ĐỘNG
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* Reset */

        currentQuestionIndex = 0;

        score = 0;

        enemyHP = 100;

        gameStarted = false;


        /* Hiện START */

        showScreen(startScreen);


        /* Cập nhật */

        updateEnemyHealth();

        updateProgress();


        /* 🎆 Pháo màn hình chờ */

        startWaitingFireworks();


        /* Nhạc chờ */

        /*
         * Một số trình duyệt không cho autoplay.
         * Khi người dùng click START, nhạc sẽ chắc chắn chạy.
         */

        if (waitingMusic) {

            waitingMusic.volume =
                0.55;

        }


    }
);