(function () {
    let currentQuestionIndex;
    let currentStreak;
    let currentMultiplier;
    let currentScore;
    let strikes;
    let wrongAnswers;
    let canAnswerProdigy = true;
    let currentGameMode = '';
    let geniusRushMultiplier = 0; // Track Genius Rush multiplier
    let totalQuestionsAnswered = 0;

    const allQuestions = {
        SCIENCE: [...scienceQuestions],
        HISTORY: [...historyQuestions],
        GEOGRAPHY: [...geographyQuestions],
        ALL: [...scienceQuestions, ...historyQuestions, ...geographyQuestions]
    };
    let filteredQuestions = [];

    window.startGame = function (mode) {
        resetGame();
        document.getElementById('start-menu').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        document.getElementById('game-title').classList.add('hidden');
        currentGameMode = mode;

        filterQuestionsByTopicAndDifficulty();
        shuffleQuestions();
        
        if (mode === 'RisingGenius') {
            askQuestion();
        } else if (mode === 'RisingProdigy') {
            askProdigyQuestion();
        }
    };

    function resetGame() {
        currentQuestionIndex = 0;
        currentStreak = 0;
        currentMultiplier = 1;
        currentScore = 0;
        strikes = 0;
        wrongAnswers = [];
        geniusRushMultiplier = 0; // Reset Genius Rush multiplier
        totalQuestionsAnswered = 0;
        document.getElementById('genius-rush').innerText = 'Genius Rush: 0x';
        document.getElementById('score').innerText = 'Score: 0';
    }

    function filterQuestionsByTopicAndDifficulty() {
        const selectedDifficulty = document.getElementById('difficulty').value;
        const selectedTopic = document.getElementById('topic').value;
        let questions = allQuestions[selectedTopic];

        if (selectedDifficulty === 'ALL') {
            filteredQuestions = questions;
        } else {
            filteredQuestions = questions.filter(q => q.difficulty === selectedDifficulty);
        }
    }

    function shuffleQuestions() {
        for (let i = filteredQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
        }
    }

    function shuffleChoices(choices) {
        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [choices[i], choices[j]] = [choices[j], choices[i]];
        }
    }

    function askQuestion() {
        if (strikes < 3) {
            const questionContainer = document.getElementById('question-container');
            const answerButtons = document.getElementById('answer-buttons');

            const questionNumber = totalQuestionsAnswered + 1; // Adjusted to continue question numbers
            questionContainer.innerHTML = `<p class="question-number">#${questionNumber}</p>${filteredQuestions[currentQuestionIndex].question}`;

            const choices = [...filteredQuestions[currentQuestionIndex].choices];
            shuffleChoices(choices);

            answerButtons.innerHTML = '';
            choices.forEach((choice, index) => {
                const button = document.createElement('button');
                button.innerText = choice;
                button.onclick = () => checkAnswer(index, choices);
                answerButtons.appendChild(button);
            });

            updateScoreGeniusRushDisplay();
        } else {
            endGame();
        }
    }

    function askProdigyQuestion() {
        if (currentQuestionIndex < filteredQuestions.length) {
            const questionContainer = document.getElementById('question-container');
            const answerButtons = document.getElementById('answer-buttons');

            const questionNumber = totalQuestionsAnswered + 1; // Adjusted to continue question numbers
            questionContainer.innerHTML = `<p class="question-number">#${questionNumber}</p>${filteredQuestions[currentQuestionIndex].question}`;

            const choices = [...filteredQuestions[currentQuestionIndex].choices];
            shuffleChoices(choices);

            answerButtons.innerHTML = '';
            choices.forEach((choice, index) => {
                const button = document.createElement('button');
                button.innerText = choice;
                button.onclick = () => checkProdigyAnswer(index, choices, button);
                answerButtons.appendChild(button);
            });

            updateScoreGeniusRushDisplay();
        } else {
            endGame();
        }
    }

    function updateScoreGeniusRushDisplay() {
        if (currentGameMode === 'RisingProdigy') {
            document.getElementById('score').style.display = 'none';
            document.getElementById('genius-rush').style.display = 'none';
        } else {
            document.getElementById('score').style.display = 'block';
            document.getElementById('genius-rush').style.display = 'block';
        }
    }

    function checkAnswer(answer, choices) {
        const correctAnswerIndex = filteredQuestions[currentQuestionIndex].choices.indexOf(filteredQuestions[currentQuestionIndex].choices[filteredQuestions[currentQuestionIndex].correctAnswer]);
        if (choices[answer] === filteredQuestions[currentQuestionIndex].choices[correctAnswerIndex]) {
            currentStreak++;
            geniusRushMultiplier = Math.min(4, geniusRushMultiplier + 1); // Increase Genius Rush multiplier
            currentScore += geniusRushMultiplier; // Apply multiplier
            document.getElementById('score').innerText = `Score: ${currentScore}`;
            document.getElementById('genius-rush').innerText = `Genius Rush: ${geniusRushMultiplier}x`;
            currentQuestionIndex = (currentQuestionIndex + 1) % filteredQuestions.length;
            totalQuestionsAnswered++;
            askQuestion();
        } else {
            strikes++;
            wrongAnswers.push({
                question: filteredQuestions[currentQuestionIndex].question,
                userAnswer: choices[answer],
                correctAnswer: filteredQuestions[currentQuestionIndex].choices[correctAnswerIndex]
            });
            geniusRushMultiplier = 0; // Reset Genius Rush multiplier
            document.getElementById('genius-rush').innerText = 'Genius Rush: 0x';
            if (strikes < 3) {
                alert(`Wrong answer! You have ${3 - strikes} ${strikes === 2 ? 'strike' : 'strikes'} remaining.`);
                askQuestion();
            } else {
                endGame();
            }
        }
    }

    function checkProdigyAnswer(answer, choices, selectedButton) {
        const correctAnswerIndex = filteredQuestions[currentQuestionIndex].choices.indexOf(filteredQuestions[currentQuestionIndex].choices[filteredQuestions[currentQuestionIndex].correctAnswer]);
        const answerButtons = document.getElementById('answer-buttons').children;
        const correctButton = answerButtons[correctAnswerIndex];

        if (choices[answer] === filteredQuestions[currentQuestionIndex].choices[correctAnswerIndex]) {
            selectedButton.style.backgroundColor = 'gold'; // Highlight correct answer in gold
            selectedButton.style.color = 'black'; // Change text color to black
            currentQuestionIndex = (currentQuestionIndex + 1) % filteredQuestions.length;
            totalQuestionsAnswered++;
            currentStreak++;
            geniusRushMultiplier = Math.min(4, geniusRushMultiplier + 1); // Increase Genius Rush multiplier
            currentMultiplier = geniusRushMultiplier; // Apply multiplier to next question
            setTimeout(() => {
                askProdigyQuestion();
                setTimeout(() => {
                    canAnswerProdigy = true;
                }, 1000);
            }, 1000);
        } else {
            selectedButton.style.backgroundColor = 'red'; // Highlight selected wrong answer in red
            selectedButton.style.color = 'white'; // Change text color to white for visibility
            correctButton.style.backgroundColor = 'gold'; // Highlight correct answer in gold
            correctButton.style.color = 'black'; // Change text color to black
            setTimeout(() => {
                alert("Wrong answer!");
                geniusRushMultiplier = 0; // Reset Genius Rush multiplier
                document.getElementById('genius-rush').innerText = 'Genius Rush: 0x';
                endGame();
            }, 1000);
        }
    }

    function endGame() {
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('start-menu').style.display = 'block';
        document.getElementById('game-title').classList.remove('hidden');

        if (currentGameMode === 'RisingProdigy') {
            displayProdigyResult();
        } else {
            alert(`Game Over!\nYour Score: ${currentScore}\n\nQuestions you got wrong:\n${formatWrongAnswers()}`);
            resetGame();
        }
    }

    function formatWrongAnswers() {
        return wrongAnswers.map((item, index) => {
            return `${index + 1}. ${item.question}\n   Your Answer: ${item.userAnswer}\n   Correct Answer: ${item.correctAnswer}`;
        }).join('\n');
    }

    function displayProdigyResult() {
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = '<h2>Rising Prodigy Result</h2>';

        for (let i = 0; i < wrongAnswers.length; i++) {
            const questionNumber = i + 1;
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <p class="question-number">#${questionNumber}</p>
                <p class="question">${wrongAnswers[i].question}</p>
                <p class="user-answer">Your Answer: ${wrongAnswers[i].userAnswer}</p>
                <p class="correct-answer">Correct Answer: ${wrongAnswers[i].correctAnswer}</p>
            `;

            resultContainer.appendChild(resultItem);
        }

        const backButton = document.createElement('button');
        backButton.innerText = 'Back to Menu';
        backButton.onclick = () => {
            resultContainer.innerHTML = ''; // Clear result container
            document.getElementById('start-menu').style.display = 'block';
        };

        resultContainer.appendChild(backButton);
    }
})();
