// ------------------------------------------------------------------
// ★ 1. 이 퀴즈의 제목 (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "124: 중화반응과 실생활에서의 이용";
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 2. 퀴즈 JSON 데이터 (중화 반응 관련 11문제)
// ------------------------------------------------------------------
const quizData = [
  // --- OX 문제 5개 (1~5) ---
  {
    "type": "ox",
    "question": "1. 중화 반응은 산의 수소 이온(H⁺)과 염기의 수산화 이온(OH⁻)이 만나 물을 생성하는 반응이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. H⁺ + OH⁻ → H₂O 반응이 중화 반응의 알짜 이온 반응식입니다."
  },
  {
    "type": "ox",
    "question": "2. 중화 반응이 일어날 때는 열을 흡수하여 주변 온도가 낮아진다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 중화 반응은 열을 '방출'하는 발열 반응이므로, 혼합 용액의 온도가 올라갑니다."
  },
  {
    "type": "ox",
    "question": "3. 산성화된 토양에 석회 가루를 뿌리는 것은 중화 반응을 이용한 예이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 산성화된 토양(산성)을 염기성 물질인 석회 가루로 중화시켜 토양을 개량합니다."
  },
  {
    "type": "ox",
    "question": "4. 농도와 온도가 같은 묽은 염산과 수산화 나트륨 수용액을 1:1의 부피비로 혼합했을 때, 생성된 물 분자의 양이 가장 적다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 농도가 같다면 1:1 부피비로 섞었을 때 H⁺와 OH⁻가 모두 반응하므로 생성된 물 분자의 양이 가장 '많습니다'."
  },
  {
    "type": "ox",
    "question": "5. 중화 반응 후 혼합 용액에 수소 이온(H⁺)이 수산화 이온(OH⁻)보다 많이 남아있으면 용액은 염기성이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 수소 이온(H⁺)이 더 많이 남아있으면 용액은 '산성'입니다."
  },
  
  // --- 단답형 문제 5개 (6~10) ---
  {
    "type": "short",
    "question": "6. 산의 수소 이온(H⁺)과 염기의 수산화 이온(OH⁻)이 1:1로 반응하여 물(H₂O)이 생성되는 반응을 무엇이라고 하는가?",
    "correctAnswerText": "중화 반응",
    "explanation": "풀이: 산과 염기가 반응하여 물과 염을 생성하는 반응을 중화 반응이라고 합니다."
  },
  {
    "type": "short",
    "question": "7. 중화 반응이 일어날 때 발생하는 열을 무엇이라고 하는가?",
    "correctAnswerText": "중화열",
    "explanation": "풀이: 중화 반응 시 발생하는 열에너지를 중화열이라고 합니다."
  },
  {
    "type": "short",
    "question": "8. 묽은 염산과 수산화 나트륨 수용액의 중화 반응에서, 혼합 용액의 액성이 중성일 때 BTB 용액은 어떤 색을 띠는가?",
    "correctAnswerText": "초록색",
    "explanation": "풀이: BTB 용액은 산성에서 노란색, 중성에서 초록색, 염기성에서 파란색을 띱니다."
  },
  {
    "type": "short",
    "question": "9. 생선 비린내의 원인인 염기성 물질을 제거하기 위해 사용하는 산성 물질의 예시를 하나 쓰시오. (예: 레몬즙)",
    "correctAnswerText": "레몬즙",
    "explanation": "풀이: 생선 비린내는 염기성 물질(트라이메틸아민 등) 때문이므로, 산성인 레몬즙이나 식초를 뿌려 중화시킵니다."
  },
  {
    "type": "short",
    "question": "10. 대기 중 이산화탄소를 포집하기 위해 염기성 물질인 () 수용액과 반응시켜 고체 탄산 칼슘으로 만든다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "수산화 칼슘",
    "explanation": "풀이: 수산화 칼슘(석회수)은 이산화 탄소와 반응하여 탄산 칼슘 앙금을 생성합니다."
  },

  // --- CEI 글쓰기 문제 1개 (11) ---
  {
    "type": "writing",
    "question": "11. [논제 3]: 중화 반응을 이용한 이산화탄소 포집 및 저장 기술은 지구 환경 문제 해결에 필수적인가?\n\n위 논제에 대해 자신의 주장을 담은 CEI 구조의 글을 자유롭게 서술하세요.",
    "explanation": "CEI 구조 (C: 주장, E: 근거, I: 해석)에 맞게 이산화탄소 포집 기술의 필요성과 효과에 대한 자신의 생각을 서술합니다."
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
            showFeedback(userAnswers[index] === questionData.correctAnswerText ? 0 : 1, true);
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