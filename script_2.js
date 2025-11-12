// ------------------------------------------------------------------
// ★ 1. [2차시 퀴즈 제목]을 여기에 입력하세요. (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "2차시: [자연선택과 생물의 진화]";
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 2. [2차시 퀴즈 JSON 데이터]를 여기에 붙여넣으세요.
// ------------------------------------------------------------------
const quizData = [
  {
    "question": "문제 1. 2차시 첫 번째 질문입니다.",
    "options": ["보기 1", "보기 2", "보기 3", "보기 4"],
    "correctAnswer": 0,
    "explanation": "풀이: 2차시 퀴즈의 첫 번째 풀이입니다."
  },
  {
    "question": "문제 2. 2차시 두 번째 질문입니다.",
    "options": ["보기 1", "보기 2", "보기 3", "보기 4"],
    "correctAnswer": 1,
    "explanation": "풀이: 2차시 퀴즈의 두 번째 풀이입니다."
  }
  // (여기에 2차시 퀴즈 문제를 5개 또는 10개 붙여넣으세요)
];
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 3. Google Apps Script URL (1차시와 동일, 수정 불필요)
// ------------------------------------------------------------------
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzoa-Lof0RXA7BCilIYNh2g0wtL4G2h8-LqLYZBMDE2tvjj4z0ouSVUV7RyFihkI3Tm_Q/exec';
// ------------------------------------------------------------------


// DOM 요소 가져오기
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const feedbackTextEl = document.getElementById('feedback-text');
const explanationEl = document.getElementById('explanation-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.querySelector('.quiz-container');
const progressIndicator = document.getElementById('progress-indicator'); // 진행률
const lessonTitleDisplay = document.getElementById('lesson-title-display'); // 퀴즈 제목

// 퀴즈 상태 변수
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let answeredState = new Array(quizData.length).fill(false);
let score = 0;

// 문제 로드 함수
function loadQuestion(index) {
    currentQuestionIndex = index;
    const questionData = quizData[index];
    
    questionEl.textContent = questionData.question;
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn';
        button.onclick = () => selectAnswer(i);
        optionsContainer.appendChild(button);
    });
    
    // 진행률 업데이트 (예: "1/5")
    progressIndicator.textContent = `${index + 1}/${quizData.length}`;
    
    updateNavigation();
    
    if (answeredState[index]) {
        showFeedback(userAnswers[index], true);
    } else {
        feedbackEl.className = 'feedback-hidden';
        explanationEl.textContent = '';
    }
}

// 답안 선택 함수
function selectAnswer(selectedIndex) {
    if (answeredState[currentQuestionIndex]) return;

    const questionData = quizData[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;
    answeredState[currentQuestionIndex] = true;

    showFeedback(selectedIndex, false);
}

// 피드백 보여주기 함수
function showFeedback(selectedIndex, isReview) {
    const questionData = quizData[currentQuestionIndex];
    const correctIndex = questionData.correctAnswer;
    const options = optionsContainer.children;

    feedbackEl.className = ''; 

    if (selectedIndex === correctIndex) {
        feedbackTextEl.textContent = "정답입니다!";
        feedbackTextEl.className = 'correct';
        if (!isReview) score++;
    } else {
        feedbackTextEl.textContent = "오답입니다.";
        feedbackTextEl.className = 'incorrect';
    }
    
    explanationEl.textContent = questionData.explanation;

    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
        if (i === correctIndex) {
            options[i].classList.add('correct');
        } else if (i === selectedIndex && i !== correctIndex) {
            options[i].classList.add('incorrect');
        }
    }
}

// 네비게이션 버튼 업데이트
function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = (currentQuestionIndex === quizData.length - 1) ? "결과 보기" : "다음";
}

// 이전 문제
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

// 다음 문제 또는 결과 보기
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        showResults();
    }
}

// 결과 보기
function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.className = '';

    const total = quizData.length;
    const percentage = ((score / total) * 100).toFixed(0);

    document.getElementById('total-questions').textContent = total;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('score-percentage').textContent = percentage;
}

// 다시 풀기
function retryQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    answeredState.fill(false);
    score = 0;
    
    quizContainer.style.display = 'block';
    resultContainer.className = 'result-container-hidden';
    
    loadQuestion(0);
}

// 결과 전송 함수
function submitResult() {
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    const scorePercentage = document.getElementById('score-percentage').textContent;
    const submitBtn = document.getElementById('submit-btn');
    const submitStatus = document.getElementById('submit-status');

    if (!studentId || !studentName) {
        alert('학번과 이름을 모두 입력하세요.');
        return;
    }

    if (GOOGLE_APPS_SCRIPT_URL === '여기에_배포된_웹_앱_URL을_붙여넣으세요') {
        alert('오류: 퀴즈 관리자가 Google Apps Script URL을 설정하지 않았습니다.');
        return;
    }

    submitBtn.disabled = true;
    submitStatus.textContent = '전송 중...';

    const data = {
        studentId: studentId,
        studentName: studentName,
        score: scorePercentage,
        lesson: LESSON_TITLE // ★ 2차시 제목이 함께 전송됩니다.
    };

    fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'text/plain' // (CORS 오류 방지)
        }
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'success') {
          submitStatus.textContent = '결과가 성공적으로 전송되었습니다!';
          submitStatus.style.color = 'green';
          submitBtn.style.display = 'none';
        } else {
          throw new Error(data.message || '서버 응답 오류');
        }
    })
    .catch((error) => {
        submitStatus.textContent = '전송에 실패했습니다. 다시 시도하세요.';
        submitStatus.style.color = 'red';
        submitBtn.disabled = false;
        console.error('Error:', error);
    });
}

// 첫 문제 로드 및 퀴즈 제목 설정
window.onload = () => {
    // 퀴즈 제목 표시
    if (lessonTitleDisplay) {
        lessonTitleDisplay.textContent = LESSON_TITLE;
    }
    // 첫 문제 로드
    loadQuestion(0);
};