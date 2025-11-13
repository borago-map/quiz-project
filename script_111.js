// ------------------------------------------------------------------
// ★ 1. 이 퀴즈의 제목 (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "111: 지질시대의 환경과 생물의 변화"; 
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// ★ 2. 퀴즈 JSON 데이터 (111번 PDF 내용)
// ------------------------------------------------------------------
const quizData = [
  // --- OX 문제 5개 ---
  {
    "type": "ox",
    "question": "1. 지구 역사상 가장 긴 지질 시대는 신생대이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 지구 역사상 가장 긴 지질 시대는 선캄브리아시대입니다. (전체의 약 88% 차지)"
  },
  {
    "type": "ox",
    "question": "2. 고생대에는 오존층이 형성되어 생물이 바다에서 육지로 진출하는 기반이 마련되었다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 고생대에 대기 중 산소 농도가 증가하며 오존층이 형성되었고, 자외선이 차단되어 육상 생물이 출현할 수 있었습니다."
  },
  {
    "type": "ox",
    "question": "3. 공룡과 암모나이트는 고생대에 번성했던 대표적인 생물이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 공룡과 암모나이트는 '중생대'를 대표하는 생물입니다."
  },
  {
    "type": "ox",
    "question": "4. 대멸종은 항상 생물 다양성의 영구적인 감소만을 초래했다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 대멸종은 일시적으로 생물 다양성을 감소시키지만, 장기적으로는 살아남은 생물이 새로운 환경에 적응하여 다양하게 진화하는 계기가 되기도 합니다."
  },
  {
    "type": "ox",
    "question": "5. 고생대부터 껍데기나 뼈와 같이 단단한 부분을 가진 생물이 출현하여 화석 기록이 풍부해졌다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 고생대 캄브리아기 대폭발 이후 단단한 껍데기나 골격을 가진 생물이 많이 출현하여 화석으로 잘 보존되었습니다."
  },

  // --- 단답형 문제 5개 ---
  {
    "type": "short",
    "question": "6. 지구 전체 역사의 약 88.3%를 차지하며 화석이 거의 발견되지 않는 가장 오래된 지질 시대의 이름은 무엇인가?",
    "correctAnswerText": "선캄브리아시대",
    "explanation": "풀이: 선캄브리아시대(선캄브리아 시대)는 화석이 드물고 지구 역사의 대부분을 차지합니다."
  },
  {
    "type": "short",
    "question": "7. 고생대 말, 흩어져 있던 대륙들이 이동하여 합쳐지면서 형성된 거대한 단일 대륙(초대륙)의 이름은 무엇인가?",
    "correctAnswerText": "판게아",
    "explanation": "풀이: 고생대 말에 형성된 초대륙을 판게아라고 합니다."
  },
  {
    "type": "short",
    "question": "8. 고생대에 거대한 숲을 이루었으며, 오늘날 석탄층의 기원이 된 식물군은 무엇인가?",
    "correctAnswerText": "양치식물",
    "explanation": "풀이: 고생대 석탄기에는 양치식물이 거대한 숲을 이루어 현재의 석탄층이 되었습니다."
  },
  {
    "type": "short",
    "question": "9. 중생대에 출현하였으나 공룡이 멸종한 이후 신생대에 이르러 번성한 동물 집단은 무엇인가?",
    "correctAnswerText": "포유류",
    "explanation": "풀이: 포유류는 중생대에 처음 출현했지만, 공룡이 멸종한 신생대에 크게 번성하였습니다."
  },
  {
    "type": "short",
    "question": "10. 중생대 말 공룡의 멸종을 설명하는 가설 중, 인도 데칸 지역의 대규모 활동을 원인으로 지목하는 가설은 무엇인가?",
    "correctAnswerText": "화산 폭발설",
    "explanation": "풀이: 인도 데칸 고원의 대규모 화산 활동으로 인한 기후 변화가 멸종 원인이라는 가설은 '화산 폭발설'입니다."
  },

  // --- CEI 글쓰기 문제 1개 ---
  {
    "type": "writing",
    "question": "11. [논제 3]: 대멸종은 생물 다양성의 급격한 감소를 초래했지만, 장기적으로는 살아남은 생물이 새로운 환경에 적응하며 진화할 기회를 제공하여 결과적으로 생물 다양성을 재편하고 촉진하는 계기가 되었다.\n\n위 논제에 대해 자신의 주장을 담은 CEI 구조의 글을 자유롭게 서술하세요.",
    "explanation": "CEI 구조 (C: 주장, E: 근거, I: 해석)에 맞게 대멸종의 이중적 측면에 대한 자신의 생각을 서술합니다."
  }
];
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 3. Google Apps Script URL (기존 URL 사용)
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
    
    // 모든 입력 영역 숨김
    optionsContainer.style.display = 'none';
    shortAnswerContainer.style.display = 'none';
    writingContainer.style.display = 'none';
    feedbackEl.className = 'feedback-hidden';
    
    // 문제 유형별 표시
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
    
    // 푼 문제 상태 복원
    if (answeredState[index]) {
        if (questionData.type === 'ox') {
            showFeedback(userAnswers[index] === questionData.correctAnswer ? 0 : 1, true);
        } else if (questionData.type === 'short') {
            const isCorrect = userAnswers[index].replace(/ /g, '') === questionData.correctAnswerText.replace(/ /g, '');
            showFeedback(isCorrect ? 0 : 1, true);
            shortAnswerInput.disabled = true;
            shortAnswerBtn.disabled = true;
        }
    }
}

// OX 답안 선택
function selectAnswer(selectedIndex) {
    if (answeredState[currentQuestionIndex]) return;

    const questionData = quizData[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;
    answeredState[currentQuestionIndex] = true;

    const isCorrect = selectedIndex === questionData.correctAnswer;
    if (isCorrect) score++;
    
    showFeedback(isCorrect ? 0 : 1, false);
}

// 단답형 정답 확인
function checkShortAnswer() {
    if (answeredState[currentQuestionIndex]) return;

    const questionData = quizData[currentQuestionIndex];
    const userAnswer = shortAnswerInput.value.trim();
    userAnswers[currentQuestionIndex] = userAnswer;
    answeredState[currentQuestionIndex] = true;

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

// 피드백 표시 (0:정답, 1:오답)
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

// 이전/다음 문제
function prevQuestion() {
    if (quizData[currentQuestionIndex].type === 'writing') {
        userAnswers[currentQuestionIndex] = writingTextarea.value;
    }
    if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1);
}

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

// 결과 화면
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

// 결과 전송
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
    if (lessonTitleDisplay) lessonTitleDisplay.textContent = LESSON_TITLE;
    loadQuestion(0);
};