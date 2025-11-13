// ------------------------------------------------------------------
// ★ 1. 이 퀴즈의 제목 (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "112: 생태계 구성요소 (OX, 단답형, CEI)";
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 2. 퀴즈 JSON 데이터 (생태계 관련 11문제)
// ------------------------------------------------------------------
const quizData = [
  // --- OX 문제 5개 (1~5) ---
  {
    "type": "ox",
    "question": "1. 생태계는 생산자, 소비자, 분해자와 같은 생물요소로만 구성된다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 생태계는 생물요소뿐만 아니라 빛, 온도, 물, 토양과 같은 비생물요소로도 구성됩니다."
  },
  {
    "type": "ox",
    "question": "2. 일정한 지역에 서식하는 여러 종의 개체군이 모여 군집을 이룬다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 군집은 일정한 지역에 서식하는 여러 개체군의 집합을 의미합니다."
  },
  {
    "type": "ox",
    "question": "3. 사막여우는 추운 지역에 적응하기 위해 몸집이 크고 귀가 작아지는 특징을 보인다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 사막여우는 '더운' 사막 지역에 적응한 동물입니다. 추운 지역에 적응한 동물(북극여우)이 몸집이 크고 귀가 작아집니다."
  },
  {
    "type": "ox",
    "question": "4. 지렁이의 배설물이 토양의 성분을 변화시키는 것은 비생물요소가 생물요소에 영향을 미치는 예이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 지렁이(생물요소)가 토양(비생물요소)에 영향을 미치는 '작용'의 예입니다."
  },
  {
    "type": "ox",
    "question": "5. 수생식물인 연꽃의 줄기에는 공기가 이동할 수 있는 통기조직이 발달했다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 연꽃은 물속 환경(비생물요소)에 적응하기 위해 공기 통로인 통기조직을 발달시켰습니다."
  },
  // --- 단답형 문제 5개 (6~10) ---
  {
    "type": "short",
    "question": "6. 생태계 내에서 광합성을 통해 스스로 양분을 만드는 생물요소를 무엇이라고 하는가?",
    "correctAnswerText": "생산자",
    "explanation": "풀이: 생산자는 광합성을 통해 무기물로부터 유기물(양분)을 합성합니다."
  },
  {
    "type": "short",
    "question": "7. 빛, 온도, 물, 토양과 같이 생물을 둘러싼 환경적 요소를 통틀어 무엇이라고 하는가?",
    "correctAnswerText": "비생물요소",
    "explanation": "풀이: 비생물요소(환경요소)는 생물요소에 영향을 주며(작용) 영향을 받습니다(반작용)."
  },
  {
    "type": "short",
    "question": "8. 생물의 사체나 배설물을 분해하여 살아가는 생물요소는 무엇인가?",
    "correctAnswerText": "분해자",
    "explanation": "풀이: 분해자(곰팡이, 버섯, 세균 등)는 물질 순환에 중요한 역할을 합니다."
  },
  {
    "type": "short",
    "question": "9. 추운 지역에 사는 포유류일수록 몸에서 열을 잃는 것을 막기 위해 피하에 두껍게 발달하는 조직은 무엇인가?",
    "correctAnswerText": "피하지방",
    "explanation": "풀이: 피하지방(층)은 열의 방출을 막는 단열재 역할을 합니다."
  },
  {
    "type": "short",
    "question": "10. 땅속 생물들이 굴을 파는 활동이 토양의 ()을/를 좋게 만든다. 괄호 안에 들어갈 알맞은 말은 무엇인가?",
    "correctAnswerText": "통기성",
    "explanation": "풀이: 땅속 굴은 공기가 통하는 통로가 되어 토양의 통기성을 좋게 합니다."
  },
  // --- CEI 글쓰기 문제 1개 (11) ---
  {
    "type": "writing",
    "question": "11. [논제 3]: 곶자왈의 생태계적 가치를 고려할 때, 곶자왈 지역은 어떠한 경우에도 개발이 아닌 보존을 우선해야 한다.\n\n위 논제에 대해 자신의 주장을 담은 CEI 구조의 글을 자유롭게 서술하세요.",
    "explanation": "CEI 구조 (C: 주장, E: 근거, I: 해석)에 맞게 자신의 생각을 논리적으로 서술합니다."
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