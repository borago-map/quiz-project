// ------------------------------------------------------------------
// ★ 1. 이 퀴즈의 제목 (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "221: 지구의 에너지원, 태양 에너지";
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 2. 퀴즈 JSON 데이터 (태양 에너지 관련 11문제)
// ------------------------------------------------------------------
const quizData = [
  // --- OX 문제 5개 (1~5) ---
  {
    "type": "ox",
    "question": "1. 태양에서는 헬륨 원자핵 4개가 융합하여 수소 원자핵 1개가 되면서 에너지가 방출된다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 반대입니다. '수소' 원자핵 4개가 융합하여 '헬륨' 원자핵 1개가 되는 수소 핵융합 반응입니다."
  },
  {
    "type": "ox",
    "question": "2. 수소 핵융합 반응이 일어날 때, 반응 후 헬륨 원자핵 1개의 질량은 반응 전 수소 원자핵 4개의 질량을 합한 값보다 크다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 반응 후 질량이 '감소'하며(질량 결손), 줄어든 질량만큼 에너지가 생성됩니다."
  },
  {
    "type": "ox",
    "question": "3. 식물의 광합성은 태양의 빛 에너지를 화학 에너지로 전환하는 과정이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 식물은 빛 에너지를 이용하여 유기물(포도당) 속에 화학 에너지 형태로 저장합니다."
  },
  {
    "type": "ox",
    "question": "4. 우리가 사용하는 화석 연료의 근원 에너지는 지구 내부의 열에너지이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 화석 연료는 과거의 생물이 태양 에너지를 저장한 것이므로, 근원 에너지는 '태양 에너지'입니다."
  },
  {
    "type": "ox",
    "question": "5. 바람이 불고 파도가 치는 것은 태양 에너지가 운동 에너지로 전환된 현상이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 태양 에너지가 대기와 해수를 가열하고 순환시켜 운동 에너지를 만듭니다."
  },
  
  // --- 단답형 문제 5개 (6~10) ---
  {
    "type": "short",
    "question": "6. 태양의 중심부에서 4개의 수소 원자핵이 융합하여 1개의 헬륨 원자핵으로 바뀌는 반응을 무엇이라고 하는가?",
    "correctAnswerText": "수소 핵융합 반응",
    "explanation": "풀이: 태양 에너지의 생성 원리는 수소 핵융합 반응입니다."
  },
  {
    "type": "short",
    "question": "7. 태양 에너지는 물을 증발시켜 구름을 만드는데, 이때 구름은 어떤 형태의 에너지를 가지게 되는가? (OO 에너지)",
    "correctAnswerText": "위치 에너지",
    "explanation": "풀이: 수증기가 상승하여 높은 곳에 있는 구름이 되므로 위치 에너지(퍼텐셜 에너지)를 갖게 됩니다."
  },
  {
    "type": "short",
    "question": "8. 태양 에너지를 이용해 유기물을 합성한 생산자의 에너지가 여러 단계의 소비자를 거쳐 이동하는 관계를 () (이)라고 한다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "먹이사슬",
    "explanation": "풀이: 에너지는 생태계의 먹이사슬을 통해 상위 영양 단계로 이동합니다."
  },
  {
    "type": "short",
    "question": "9. 과거 생물의 유해가 땅속에 묻혀 오랜 시간 동안 높은 열과 압력을 받아 만들어진 에너지 자원을 무엇이라고 하는가?",
    "correctAnswerText": "화석 연료",
    "explanation": "풀이: 석탄, 석유, 천연가스 등은 과거 생명체가 저장한 태양 에너지가 변환된 화석 연료입니다."
  },
  {
    "type": "short",
    "question": "10. 지구에서 일어나는 대기 대순환, 해류, 물의 순환 등 다양한 자연 현상을 일으키는 근본적인 에너지원은 무엇인가?",
    "correctAnswerText": "태양 에너지",
    "explanation": "풀이: 태양 에너지는 지구 환경 변화와 생명 활동의 근원적인 에너지입니다."
  },

  // --- CEI 글쓰기 문제 1개 (11) ---
  {
    "type": "writing",
    "question": "11. [논제 3]: 만약 지구에 도달한 태양 에너지가 다른 형태의 에너지로 전혀 전환되지 않는다고 가정한다면, 현재의 지구 환경과 인류의 삶은 어떤 모습일지 상상하고 그 이유를 서술하시오.\n\n위 논제에 대해 자신의 주장을 담은 CEI 구조의 글을 자유롭게 서술하세요.",
    "explanation": "CEI 구조 (C: 주장, E: 근거, I: 해석)에 맞게 에너지 전환 없는 지구의 모습(기상 현상, 생명 활동 등)을 논리적으로 서술합니다."
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