// ------------------------------------------------------------------
// ★ 1. 이 퀴즈의 제목 (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "225: 신재생 에너지 기술의 활용 방안";
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 2. 퀴즈 JSON 데이터 (신재생 에너지 관련 11문제)
// ------------------------------------------------------------------
const quizData = [
  // --- OX 문제 5개 (1~5) ---
  {
    "type": "ox",
    "question": "1. 태양광 발전은 태양 전지에 빛을 비추면 전자가 움직이면서 전류가 흐르는 원리를 이용한다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 이를 광전 효과라고 하며, 터빈 없이 직접 전기 에너지를 생산합니다."
  },
  {
    "type": "ox",
    "question": "2. 풍력 발전은 발전 지역이 제한적이지만 발전량을 예측하기 쉬워 안정적인 에너지 공급이 가능하다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 풍력 발전은 바람의 세기가 일정하지 않아 발전량을 정확히 예측하기 어렵다는 단점이 있습니다."
  },
  {
    "type": "ox",
    "question": "3. 연료 전지는 수소와 산소가 반응할 때 발생하는 화학 에너지를 직접 전기 에너지로 전환하며, 에너지 효율이 높다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 연료 전지는 연소 과정(열기관)을 거치지 않아 에너지 손실이 적고 효율이 높습니다."
  },
  {
    "type": "ox",
    "question": "4. 바이오 에너지는 식물이나 유기성 폐자원 등을 연료로 하며, 화석 연료보다 이산화 탄소 배출량이 적다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 식물이 자라면서 흡수한 이산화 탄소 때문에 연소 시 배출되는 탄소는 탄소 중립으로 간주되거나 적습니다."
  },
  {
    "type": "ox",
    "question": "5. 수상 태양광 발전은 육상 태양광 발전에 비해 발전 효율이 낮지만, 녹조 발생을 막아주는 장점이 있다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 수상 태양광 발전은 수면의 냉각 효과로 인해 육상보다 발전 효율이 약 10% 더 높습니다."
  },
  
  // --- 단답형 문제 5개 (6~10) ---
  {
    "type": "short",
    "question": "6. 화석 연료를 대체하며, 고갈될 염려가 적고 환경 문제를 일으키지 않는 햇빛, 바람, 수소 등을 이용하는 에너지를 통틀어 () 에너지라고 한다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "신재생",
    "explanation": "풀이: 신에너지(수소, 연료전지 등)와 재생에너지(태양광, 풍력, 수력 등)를 합쳐 신재생 에너지라고 합니다."
  },
  {
    "type": "short",
    "question": "7. 밀물과 썰물로 생기는 해수면의 높이 차를 이용하여 발전기를 돌리는 발전 방식은 () 발전이다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "조력",
    "explanation": "풀이: 조수 간만의 차(조력)를 이용하는 방식을 조력 발전이라고 합니다."
  },
  {
    "type": "short",
    "question": "8. 태양광 발전, 풍력 발전, 조력 발전 중 () 현상을 이용하여 발전기를 돌리는 방식은 풍력 발전과 조력 발전이다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "전자기 유도",
    "explanation": "풀이: 터빈을 돌려 전기를 생산하는 풍력, 조력 발전은 전자기 유도 현상을 이용합니다. (태양광은 광전 효과)"
  },
  {
    "type": "short",
    "question": "9. 태양광 발전을 대규모로 하려면 넓은 면적이 필요하고 () 훼손의 우려가 있어, 이를 해결하기 위한 방안으로 수상 태양광 발전이 제시되었다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "산림",
    "explanation": "풀이: 육상 태양광 설치를 위해 나무를 베어내는 등 산림 훼손 문제가 발생할 수 있습니다."
  },
  {
    "type": "short",
    "question": "10. () 에너지는 원료가 되는 식물을 재배하는 데 넓은 면적의 토지가 필요하고 재배에 시간이 걸린다는 단점이 있다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "바이오",
    "explanation": "풀이: 바이오 에너지는 옥수수, 사탕수수 등을 원료로 하므로 넓은 경작지가 필요합니다."
  },

  // --- CEI 글쓰기 문제 1개 (11) ---
  {
    "type": "writing",
    "question": "11. [논제 3]: \"지구 환경 문제 해결을 위해, 우리나라는 특정 신재생 에너지원(예: 태양광, 풍력, 조력 등)에 집중 투자해야 하는가, 아니면 다양한 에너지원을 균형 있게 개발해야 하는가?\"\n\n위 논제에 대해 자신의 주장을 담은 CEI 구조의 글을 자유롭게 서술하세요.",
    "explanation": "CEI 구조 (C: 주장, E: 근거, I: 해석)에 맞게 우리나라의 지리적 특성과 에너지 안보를 고려하여 서술합니다."
  }
];
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 3. Google Apps Script URL (수정 불필요)
// ------------------------------------------------------------------
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzoa-Lof0RXA7BCilIYNh2g0wtL4G2h8-LqLYZBMDE2tvjj4z0ouSVUV7RyFihkI3Tm_Q/exec';
// ------------------------------------------------------------------


// DOM 요소 가져오기
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const shortAnswerContainer = document.getElementById('short-answer-container');
const shortAnswerInput = document.getElementById('short-answer-input');
const shortAnswerBtn = document.getElementById('short-answer-btn');
const writingContainer = document.getElementById('writing-container');
const writingTextarea = document.getElementById('writing-textarea');
const feedbackEl = document.getElementById('feedback');
const feedbackTextEl = document.getElementById('feedback-text');
const explanationEl = document.getElementById('explanation-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.querySelector('.quiz-container');
const progressIndicator = document.getElementById('progress-indicator');
const lessonTitleDisplay = document.getElementById('lesson-title-display');

// 퀴즈 상태 변수
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let answeredState = new Array(quizData.length).fill(false);
let score = 0;
const totalScorableQuestions = 10; // 점수 채점 대상 문항 수 (OX 5 + 단답형 5)

// 문제 로드 함수
function loadQuestion(index) {
    currentQuestionIndex = index;
    const questionData = quizData[index];
    
    questionEl.textContent = questionData.question;
    
    // 모든 입력 영역을 숨기고 시작
    optionsContainer.style.display = 'none';
    shortAnswerContainer.style.display = 'none';
    writingContainer.style.display = 'none';
    feedbackEl.className = 'feedback-hidden';
    
    // 문제 유형에 따라 적절한 입력 영역 표시
    if (questionData.type === 'ox') {
        optionsContainer.style.display = 'flex';
        optionsContainer.innerHTML = '';
        questionData.options.forEach((option, i) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option-btn';
            button.onclick = () => selectAnswer(i);
            optionsContainer.appendChild(button);
        });
        
    } else if (questionData.type === 'short') {
        shortAnswerContainer.style.display = 'flex';
        shortAnswerInput.value = userAnswers[index] || '';
        shortAnswerBtn.disabled = false;
        shortAnswerInput.disabled = false;
        
    } else if (questionData.type === 'writing') {
        writingContainer.style.display = 'block';
        writingTextarea.value = userAnswers[index] || '';
    }

    // 진행률 업데이트
    if (progressIndicator) {
        progressIndicator.textContent = `${index + 1}/${quizData.length}`;
    }
    
    updateNavigation();
    
    // 이미 푼 문제 상태 복원
    if (answeredState[index]) {
        if (questionData.type === 'ox') {
            showFeedback(userAnswers[index], true);
        } else if (questionData.type === 'short') {
            // 정답 확인 로직 (공백 제거 후 비교)
            const isCorrect = userAnswers[index].replace(/ /g, '') === questionData.correctAnswerText.replace(/ /g, '');
            showFeedback(isCorrect ? 0 : 1, true);
            shortAnswerInput.disabled = true;
            shortAnswerBtn.disabled = true;
        }
    }
}

// 답안 선택 함수 (OX 전용)
function selectAnswer(selectedIndex) {
    if (answeredState[currentQuestionIndex]) return;

    const questionData = quizData[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;
    answeredState[currentQuestionIndex] = true;

    const isCorrect = selectedIndex === questionData.correctAnswer;
    if (isCorrect) {
        score++;
    }
    showFeedback(isCorrect ? 0 : 1, false);
}

// 단답형 정답 확인
function checkShortAnswer() {
    if (answeredState[currentQuestionIndex]) return;

    const questionData = quizData[currentQuestionIndex];
    const userAnswer = shortAnswerInput.value.trim();
    userAnswers[currentQuestionIndex] = userAnswer;
    answeredState[currentQuestionIndex] = true;

    // 정답 비교 (공백 제거)
    const isCorrect = userAnswer.replace(/ /g, '') === questionData.correctAnswerText.replace(/ /g, '');

    if (isCorrect) {
        score++;
        showFeedback(0, false);
    } else {
        showFeedback(1, false);
    }
    
    shortAnswerInput.disabled = true;
    shortAnswerBtn.disabled = true;
}

// 피드백 보여주기 함수
function showFeedback(status, isReview) {
    const questionData = quizData[currentQuestionIndex];
    feedbackEl.className = ''; 

    if (status === 0) {
        feedbackTextEl.textContent = "정답입니다!";
        feedbackTextEl.className = 'correct';
    } else {
        feedbackTextEl.textContent = "오답입니다.";
        feedbackTextEl.className = 'incorrect';
    }
    
    if (questionData.correctAnswerText && status === 1) {
        explanationEl.textContent = `(정답: ${questionData.correctAnswerText}) ${questionData.explanation}`;
    } else {
        explanationEl.textContent = questionData.explanation;
    }

    if (questionData.type === 'ox') {
        const options = optionsContainer.children;
        const correctIndex = questionData.correctAnswer;
        const selectedIndex = userAnswers[currentQuestionIndex];
        
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = true;
            if (i === correctIndex) {
                options[i].classList.add('correct');
            } else if (i === selectedIndex && i !== correctIndex) {
                options[i].classList.add('incorrect');
            }
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
    if (quizData[currentQuestionIndex].type === 'writing') {
        userAnswers[currentQuestionIndex] = writingTextarea.value;
    }
    
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

// 다음 문제 또는 결과 보기
function nextQuestion() {
    if (quizData[currentQuestionIndex].type === 'writing') {
        userAnswers[currentQuestionIndex] = writingTextarea.value;
    }

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

    const percentage = ((score / totalScorableQuestions) * 100).toFixed(0);

    document.getElementById('total-score').textContent = score;
    document.getElementById('total-scorable').textContent = totalScorableQuestions;
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
    const submitBtn = document.getElementById('submit-btn');
    const submitStatus = document.getElementById('submit-status');

    if (!studentId || !studentName) {
        alert('학번과 이름을 모두 입력하세요.');
        return;
    }

    submitBtn.disabled = true;
    submitStatus.textContent = '전송 중...';

    let shortAnswers = [];
    let writingAnswer = "";

    quizData.forEach((q, index) => {
        if (q.type === 'short') {
            shortAnswers.push(userAnswers[index] || ""); 
        } else if (q.type === 'writing') {
            writingAnswer = userAnswers[index] || ""; 
        }
    });
    
    const data = {
        studentId: studentId,
        studentName: studentName,
        lesson: LESSON_TITLE,
        score: score,
        total: totalScorableQuestions,
        sa: shortAnswers,
        writing: writingAnswer
    };

    fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'text/plain' }
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

// 초기화
window.onload = () => {
    if (lessonTitleDisplay) {
        lessonTitleDisplay.textContent = LESSON_TITLE;
    }
    loadQuestion(0);
};