// ------------------------------------------------------------------
// ★ 1. 이 퀴즈의 제목 (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "312: 빅데이터와 과학기술사회";
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 2. 퀴즈 JSON 데이터 (빅데이터 관련 11문제)
// ------------------------------------------------------------------
const quizData = [
  // --- OX 문제 5개 (1~5) ---
  {
    "type": "ox",
    "question": "1. '데이터'는 단순한 사실을 의미하며, 이것을 필요한 목적에 맞게 모으고 분석하면 '정보'가 된다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 데이터는 가공되지 않은 사실이고, 정보는 의사 결정을 위해 가공된 데이터입니다."
  },
  {
    "type": "ox",
    "question": "2. 교실의 이산화 탄소 농도를 측정하는 탐구에서, 마이크로컨트롤러와 이산화 탄소 센서를 연결하여 데이터를 수집한다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 센서를 통해 수집한 데이터를 마이크로컨트롤러로 처리하여 활용합니다."
  },
  {
    "type": "ox",
    "question": "3. 빅데이터는 방대한 양의 수치 자료만을 의미하며, 글이나 영상, 음성 등은 포함되지 않는다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 빅데이터는 정형화된 수치 자료뿐만 아니라 문자, 영상, 위치 정보 등 비정형 데이터도 포함합니다."
  },
  {
    "type": "ox",
    "question": "4. 정부 기관에서 심야 유동 인구를 분석하여 심야 버스 노선을 결정하는 것은 빅데이터 활용 사례이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 통화량 데이터와 교통 카드 데이터를 분석하여 최적의 노선을 정한 대표적인 사례입니다."
  },
  {
    "type": "ox",
    "question": "5. 빅데이터 분석은 항상 올바른 결론을 도출하므로, 데이터의 편향성이나 신뢰성은 고려하지 않아도 된다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 수집된 데이터가 편향되거나 왜곡될 수 있으므로, 결과의 신뢰성을 항상 비판적으로 검토해야 합니다."
  },
  
  // --- 단답형 문제 5개 (6~10) ---
  {
    "type": "short",
    "question": "6. 센서 개발과 정보 통신 기술이 발달하면서 실시간으로 수집되는, 수치 자료뿐 아니라 글이나 영상 등을 포함하는 방대하고 복잡한 데이터 집합을 () (이)라고 한다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "빅데이터",
    "explanation": "풀이: 기존의 방법으로는 수집, 저장, 검색, 분석하기 어려운 방대한 데이터를 빅데이터라고 합니다."
  },
  {
    "type": "short",
    "question": "7. 교실의 이산화 탄소 농도가 높아지면 졸리거나 () 이/가 떨어진다고 알려져 있다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "집중력",
    "explanation": "풀이: 이산화 탄소 농도 증가는 두통, 졸음, 집중력 저하를 유발할 수 있습니다."
  },
  {
    "type": "short",
    "question": "8. 「학교보건법」이 정한 교실의 이산화 탄소 농도 기준은 () ppm 이하이다. (숫자만 입력)",
    "correctAnswerText": "1000",
    "explanation": "풀이: 쾌적한 학습 환경을 위해 교실 내 이산화 탄소 농도는 1000ppm 이하로 유지하도록 규정되어 있습니다."
  },
  {
    "type": "short",
    "question": "9. 인간의 () 데이터를 분석하여 암이나 난치병 치료, 개인 맞춤형 의학에 빅데이터를 활용한다. 괄호 안에 들어갈 말은? (예: 유전)",
    "correctAnswerText": "유전",
    "explanation": "풀이: 유전(게놈) 정보 빅데이터 분석은 질병 예측 및 맞춤형 의료 서비스에 활용됩니다."
  },
  {
    "type": "short",
    "question": "10. 빅데이터에는 () 정보가 포함될 수 있으므로, 민감한 정보의 보호와 관리에 주의해야 한다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "개인",
    "explanation": "풀이: 위치 정보, 검색 기록, 금융 정보 등 개인을 식별할 수 있는 정보가 유출되지 않도록 해야 합니다."
  },

  // --- CEI 글쓰기 문제 1개 (11) ---
  {
    "type": "writing",
    "question": "11. [논제 3]: \"코로나19와 같은 국가 감염병 위기 상황에서, 신속한 확산 방지라는 '공공의 이익'을 위해 카드 이용 정보, 이동 경로 등 '개인의 정보'를 수집하고 활용하는 것은 정당한가?\"\n\n위 논제에 대해 자신의 주장을 담은 CEI 구조의 글을 자유롭게 서술하세요.",
    "explanation": "CEI 구조 (C: 주장, E: 근거, I: 해석)에 맞게 공익과 개인의 사생활 보호 사이의 가치 충돌에 대한 자신의 생각을 서술합니다."
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