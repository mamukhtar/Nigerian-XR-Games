import { generalQuestions, artQuestions, historyQuestions, musicQuestions, cultureQuestions } from './questions.js';

let currentCategory = 'general';
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 10; // Assuming there are 10 questions per quiz
const minimumScoreForCelebration = 7; // Minimum score to trigger the celebration


const categories = {
    history: historyQuestions,
    cultures: cultureQuestions,
    general: generalQuestions,
    art: artQuestions,
    music: musicQuestions
};

// Register a questions panel component with A-Frame
AFRAME.registerComponent('questions-panel', {
    init: function () {
        // This will be called after the scene is loaded
        this.el.sceneEl.addEventListener('loaded', () => {
            this.addEventListeners();
        });
    },
    addEventListeners: function () {
        // Attach event listeners to each button
        document.querySelectorAll('.menu-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.currentTarget.id.replace('Button', '');
                startQuiz(category.toLowerCase());
            });
        });
    }
});

function loadQuestion(category) {
    const categoriesScreen = document.querySelector('#menu');
    const question = categories[category][currentQuestionIndex];
    const questionPanel = document.getElementById('questionPanel');

    categoriesScreen.setAttribute('visible', 'false');
    questionPanel.setAttribute('visible', 'true');
    const questionText = document.getElementById('question');
    questionText.setAttribute('text', `value: ${question.question}`);

    // Get the image for the current question
    const questionImage = categories[category][currentQuestionIndex].image;

    // Set the image on the A-Frame entity
    const imageEntity = document.querySelector('#question-image');
    if(imageEntity) {
        imageEntity.setAttribute('material', 'src', questionImage);
    }

    // Update answers
    question.answers.forEach((answer, index) => {
        const answerId = `answer${index + 1}`;
        const answerElement = document.getElementById(answerId);
        answerElement.setAttribute('text', `value: ${answer}`);
        answerElement.setAttribute('material', 'color', '#FFFFFF'); // Reset color

        // Attach a new click event listener
        answerElement.onclick = () => selectAnswer(index, category);
    });
}

function selectAnswer(answerIndex, category) {
    const question = categories[category][currentQuestionIndex];
    const correct = answerIndex === question.correctIndex;
    
    // Set the clicked answer to red if incorrect, and green if correct
    const selectedAnswerElement = document.getElementById(`answer${answerIndex + 1}`);
    selectedAnswerElement.setAttribute('material', 'color', correct ? 'green' : 'red');

    // If the answer is incorrect, find and highlight the correct answer in green
    if (!correct) {
        const correctAnswerElement = document.getElementById(`answer${question.correctIndex + 1}`);
        correctAnswerElement.setAttribute('material', 'color', 'green');
    } else {
        score++;
        updateProgressBar(currentQuestionIndex); // Update progress bar on correct answer
    }

    // Wait 2 seconds before loading the next question or ending the quiz
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < categories[category].length) {
            loadQuestion(category);
        } else {
            endQuiz();
            currentCategory = null; // Reset current category
        }
    }, 2000);
}

// Adds segments to the progress bar
function createProgressBar(numQuestions) {
    const progressBar = document.getElementById('progressBar');
    for (let i = 0; i < numQuestions; i++) {
        let segment = document.createElement('a-box');
        segment.setAttribute('width', '0.2');
        segment.setAttribute('height', '0.1');
        segment.setAttribute('depth', '0.1');
        segment.setAttribute('position', `${i * 0.25 - (numQuestions * 0.25) / 2} 0 0`);
        segment.setAttribute('color', '#555'); // inactive color
        progressBar.appendChild(segment);
    }
}

// Updates the progress bar when a question is answered correctly
function updateProgressBar(questionIndex) {
    const progressBar = document.getElementById('progressBar').children;
    if (progressBar.length > questionIndex) {
        progressBar[questionIndex].setAttribute('color', '#4CAF50'); // active color
    }
}

// Resets the progress bar for a new quiz
function resetProgressBar() {
    const progressBar = document.getElementById('progressBar').children;
    Array.from(progressBar).forEach(segment => {
        segment.setAttribute('color', '#555');
    });
}

function showScoreSummary() {    
    const scoreSummaryText = `Quiz completed! Your score: ${score} out of ${totalQuestions}`;
    document.getElementById('scoreSummaryText').setAttribute('text', `value: ${scoreSummaryText}`);

    // Show the score summary panel
    document.getElementById('scoreSummaryPanel').setAttribute('visible', 'true');

    // Set a timeout to hide the summary and show categories menu again
    setTimeout(() => {
        document.getElementById('scoreSummaryPanel').setAttribute('visible', 'false');
        document.querySelector('#menu').setAttribute('visible', 'true');

        // Reset the score and question index for the next game
        score = 0;
        currentQuestionIndex = 0;
    }, 5000); // Display summary for 5 seconds
}

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion(category);
    resetProgressBar(); // Reset the progress bar at the start of a quiz
    createProgressBar(categories[category].length); // Create progress bar based on number of questions
}

function createConfettiEffect(duration = 7000) {
    const confettiWrapper = document.getElementById('confetti-wrapper');
    confettiWrapper.style.display = 'block';
    confettiWrapper.innerHTML = ''; // Clear previous confetti

    // Define a continuous generation of confetti every 50 milliseconds
    const confettiInterval = setInterval(() => {
        for (let i = 0; i < 5; i++) { // Create 5 pieces of confetti per interval
            let confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `-10px`;
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.opacity = Math.random();
            confetti.style.transform = `scale(${Math.random() + 0.5})`;
            confetti.style.transition = `top 2s ease-out, left ${Math.random() * 2 + 1}s ease-out`;

            confettiWrapper.appendChild(confetti);

            // Trigger the fall down animation
            setTimeout(() => {
                confetti.style.top = '110%';
            }, 30);

            // Clean up this piece of confetti after it falls
            setTimeout(() => {
                if (confetti.parentNode === confettiWrapper) {
                    confettiWrapper.removeChild(confetti);
                }
            }, 2030);
        }
    }, 5); // Generate new confetti every 50 milliseconds

    // Stop generating confetti after the specified duration
    setTimeout(() => {
        clearInterval(confettiInterval);
        confettiWrapper.innerHTML = ''; // Optionally clear all confetti immediately
        confettiWrapper.style.display = 'none'; // Hide the wrapper after the effect is over
    }, duration);
}


// You'll also need a way to stop the confetti when the celebration is over.
function stopConfettiEffect() {
    const confettiWrapper = document.getElementById('confetti-wrapper');
    confettiWrapper.style.display = 'none';
    confettiWrapper.innerHTML = ''; // Clear all confetti
}

function triggerBoxAnimations() {
    const boxes = document.querySelectorAll('[id^="celebration-box-"]');
    boxes.forEach(box => {
      box.setAttribute('visible', 'true');
      box.setAttribute('animation__rotation', 'property: rotation; to: 0 360 0; dur: 2000; loop: true; easing: linear');
    });
  }

  
function endQuiz() {
    document.getElementById('questionPanel').setAttribute('visible', 'false');
    console.log(`Quiz ended. Your score: ${score}`);
    showScoreSummary();

    // Trigger the fireworks and sound if score is high enough
    if (score >= minimumScoreForCelebration) {
        // Start the confetti effect
        createConfettiEffect();
        // Start the box animations
        triggerBoxAnimations();
        let celebrationSound = document.getElementById('celebration-sound');
        
        celebrationSound.components.sound.playSound();
        
        // Set a timeout to stop the celebration after 10 seconds
        setTimeout(() => {
            stopConfettiEffect(); // Stop and clear confetti
            resetQuiz();
        }, 7000);
    }
}

function resetQuiz() {
    // Hide the score summary panel
    document.getElementById('scoreSummaryPanel').setAttribute('visible', 'false');
    document.getElementById('questionPanel').setAttribute('visible', 'false');
    document.getElementById('progressBar').setAttribute('visible', 'false');

    const boxes = document.querySelectorAll('[id^="celebration-box-"]');
    boxes.forEach(box => {
        box.setAttribute('visible', 'false');
        box.removeAttribute('animation__position');
        box.removeAttribute('animation__rotation');
    });

    // If there's a need to stop any celebration sound, it can be done here
    let celebrationSound = document.getElementById('celebration-sound');
    if (celebrationSound.components.sound.isPlaying) {
        celebrationSound.components.sound.stopSound();
    }

    resetProgressBar();

    // Reset score and question index for the next game
    score = 0;
    currentQuestionIndex = 0;

    // Show categories screen again
    document.querySelector('#menu').setAttribute('visible', 'true');
}
