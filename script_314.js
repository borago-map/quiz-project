// ------------------------------------------------------------------
// ★ 1. 이 퀴즈의 제목 (시트에 기록될 이름)
// ------------------------------------------------------------------
const LESSON_TITLE = "314: 과학 관련 사회적 쟁점과 과학 윤리";
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// ★ 2. 퀴즈 JSON 데이터 (과학 윤리 관련 11문제)
// ------------------------------------------------------------------
const quizData = [
  // --- OX 문제 5개 (1~5) ---
  {
    "type": "ox",
    "question": "1. 소설가 아시모프가 제시한 로봇 3원칙 중 가장 우선하는 첫째 원칙은 '로봇은 사람을 해쳐서는 안 된다'이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 제1원칙은 로봇이 인간에게 해를 가하거나, 행동하지 않음으로써 인간이 해를 입게 해서는 안 된다는 것입니다."
  },
  {
    "type": "ox",
    "question": "2. 과학기술의 발전은 항상 인류에게 긍정적인 모습만을 가져온다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 과학기술은 혜택뿐만 아니라 환경 오염, 윤리적 문제 등 부정적인 영향도 가져올 수 있습니다."
  },
  {
    "type": "ox",
    "question": "3. 과학기술의 발전 과정에서 발생하는 사회 문화적 쟁점을 '과학 관련 사회적 쟁점(SSI)'이라고 한다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. SSI(Socio-Scientific Issues)는 과학과 사회가 얽힌 복잡한 문제를 의미합니다."
  },
  {
    "type": "ox",
    "question": "4. '맞춤 아기'나 '동물 실험'과 관련된 윤리적 문제는 주로 에너지 분야의 과학 관련 사회적 쟁점이다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 1,
    "explanation": "풀이: 맞춤 아기나 동물 실험은 '생명 공학' 또는 '의료' 분야의 쟁점입니다."
  },
  {
    "type": "ox",
    "question": "5. 과학 윤리는 과학기술이 인류 전체에 이익이 되도록 하는 최소한의 원칙으로, 생명 존중, 안전, 공정성 등이 포함된다. (O/X)",
    "options": ["O", "X"],
    "correctAnswer": 0,
    "explanation": "풀이: 맞습니다. 과학 윤리는 연구 과정과 결과 활용에 있어 지켜야 할 도덕적 기준입니다."
  },
  
  // --- 단답형 문제 5개 (6~10) ---
  {
    "type": "short",
    "question": "6. 과학 연구를 수행하거나 과학기술을 이용할 때 지켜야 할 윤리적 원칙과 기준을 () (이)라고 한다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "과학 윤리",
    "explanation": "풀이: 과학자가 지켜야 할 도덕적 의무와 책임을 과학 윤리라고 합니다."
  },
  {
    "type": "short",
    "question": "7. 기후 위기, 원자력 발전소 안전성, 유전자조작 위험성, 인공지능 윤리 문제 등 과학기술과 관련된 사회 문화적 쟁점을 통틀어 () (이)라고 한다. (영문 약자: SSI)",
    "correctAnswerText": "과학 관련 사회적 쟁점",
    "explanation": "풀이: 과학 기술의 발달로 파생되는 사회적, 윤리적 문제들을 의미합니다."
  },
  {
    "type": "short",
    "question": "8. 인공지능 로봇이 인간의 일자리를 대체하는 문제, 자율주행 자동차의 사고 책임 문제 등은 () 기술의 발전에 따라 새롭게 등장한 사회적 쟁점이다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "인공지능",
    "explanation": "풀이: 인공지능(AI) 기술이 발달하면서 로봇 윤리, 알고리즘 편향성 등의 새로운 쟁점이 등장했습니다."
  },
  {
    "type": "short",
    "question": "9. 영화 <마이 시스터즈 키퍼>에서처럼 언니의 치료를 위해 유전자를 맞춘 아기를 태어나게 하는 문제는 () 분야의 쟁점과 관련이 깊다. 괄호 안에 들어갈 말은?",
    "correctAnswerText": "생명 공학",
    "explanation": "풀이: 유전자 조작, 맞춤 아기 등은 생명 공학 기술의 윤리적 쟁점입니다."
  },
  {
    "type": "short",
    "question": "10. 과학 관련 사회적 쟁점은 다양한 이해관계가 얽혀 사회적 갈등을 일으킬 수 있으므로, 충분한 협의를 통한 () 의사 결정 과정이 필요하다. 괄호 안에 들어갈 말은? (예: 민주적)",
    "correctAnswerText": "합리적",
    "explanation": "풀이: 갈등 해결을 위해서는 과학적 근거와 윤리적 가치를 고려한 합리적이고 민주적인 의사 결정이 필요합니다."
  },

  // --- CEI 글쓰기 문제 1개 (11) ---
  {
    "type": "writing",
    "question": "11. [논제 3]: \"인공지능, 생명공학과 같은 과학기술의 발전은 인류에게 긍정적인가, 부정적인가? 교과서에서 배운 '과학 윤리'와 '과학 관련 사회적 쟁점(SSI)'의 중요성을 바탕으로 자신의 생각을 논술하시오.\"\n\n위 논제에 대해 자신의 주장을 담은 CEI 구조의 글을 자유롭게 서술하세요.",
    "explanation": "CEI 구조 (C: 주장, E: 근거, I: 해석)에 맞게 과학기술의 양면성과 윤리적 책임에 대한 자신의 가치관을 논리적으로 서술합니다."
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