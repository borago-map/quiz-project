// ------------------------------------------------------------------
// 지침 1에서 Gemini가 생성한 JSON 데이터를 여기에 붙여넣으세요.
// ------------------------------------------------------------------
const quizData = [
  {
    "question": "문제 1. 지질 시대를 선캄브리아시대, 고생대, 중생대, 신생대로 구분하는 주된 기준은 무엇인가요?",
    "options": [
      "대륙의 이동과 판게아의 형성",
      "기후 변화와 빙하기의 도래",
      "지층에서 발견되는 화석의 급격한 변화",
      "대규모 화산 활동의 발생 시기"
    ],
    "correctAnswer": 2,
    "explanation": "풀이: 지층에 드러난 화석의 종류와 수를 관찰할 때 특정 시기에 급격한 변화가 나타나며, 이것은 생물의 서식 환경이 크게 변했다는 것을 의미합니다. 따라서 화석에 드러난 지구 환경의 변화를 기준으로 지질 시대를 구분합니다."
  },
  {
    "question": "문제 2. 고생대에 생물이 육지로 진출할 수 있었던 가장 결정적인 환경 변화는 무엇인가요?",
    "options": [
      "대륙이 합쳐져 판게아가 형성되었다.",
      "대기 중 산소 농도가 높아져 오존층이 형성되었다.",
      "껍데기나 뼈를 가진 생물이 출현했다.",
      "기후가 온난해지고 습지가 넓게 분포했다."
    ],
    "correctAnswer": 1,
    "explanation": "풀이: 고생대에는 대기 중 산소의 농도가 높아지면서 오존층이 생겨났고, 이 오존층이 (태양의) 자외선을 차단하여 생물이 육지로 진출할 수 있게 되었습니다."
  },
  {
    "question": "문제 3. 다음 중 중생대의 환경과 생물에 대한 설명으로 옳은 것은 무엇인가요?",
    "options": [
      "최초의 단세포생물이 바다에서 출현하였다.",
      "빙하기와 간빙기가 반복되며 매머드가 번성하였다.",
      "삼엽충과 어류가 바다에서 번성하였다.",
      "육지에서는 공룡, 식물은 겉씨식물이 번성하였다."
    ],
    "correctAnswer": 3,
    "explanation": "풀이: 중생대에는 육지에서 대형 파충류인 공룡이 크게 번성하였고, 은행류나 소철류 같은 겉씨식물이 번성하였습니다. (1번은 선캄브리아시대, 2번은 신생대, 3번은 고생대에 해당합니다.)"
  },
  {
    "question": "문제 4. 지질 시대의 대부분(약 88%)을 차지하며, 화석이 거의 발견되지 않고 스트로마톨라이트 등이 발견되는 시대는 언제인가요?",
    "options": [
      "선캄브리아시대",
      "고생대",
      "중생대",
      "신생대"
    ],
    "correctAnswer": 0,
    "explanation": "풀이: 화석이 거의 발견되지 않는 선캄브리아시대는 지질 시대의 대부분(약 88.3%)을 차지하며, 이 시기 화석으로는 스트로마톨라이트나 에디아카라 생물군 화석 정도가 발견됩니다."
  },
  {
    "question": "문제 5. 공룡과 암모나이트가 멸종한 중생대 말의 대멸종 이후, 그 빈자리를 차지하여 급격하게 번성한 동물 무리는 무엇인가요?",
    "options": [
      "포유류",
      "양서류",
      "어류",
      "곤충류"
    ],
    "correctAnswer": 0,
    "explanation": "풀이: 중생대 말 급격한 환경 변화로 공룡 등이 멸종하였고, 공룡이 멸종한 뒤 포유류가 그 빈자리를 차지하여 번성하였습니다."
  }
];
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// [수정됨] 선생님의 Google Apps Script URL을 올바른 위치에 입력했습니다.
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

// 퀴즈 상태 변수
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null); // 각 문제별 사용자의 선택 (인덱스)
let answeredState = new Array(quizData.length).fill(false); // 각 문제를 풀었는지 여부
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
    
    // 버튼 상태 업데이트
    updateNavigation();
    
    // 이전에 푼 문제라면 피드백과 상태 복원
    if (answeredState[index]) {
        showFeedback(userAnswers[index], true);
    } else {
        feedbackEl.className = 'feedback-hidden';
        explanationEl.textContent = '';
    }
}

// 답안 선택 함수
function selectAnswer(selectedIndex) {
    // 이미 푼 문제는 다시 풀 수 없음 (다른 답 클릭 방지)
    if (answeredState[currentQuestionIndex]) {
        return;
    }

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

    feedbackEl.className = ''; // 피드백 창 보이기

    if (selectedIndex === correctIndex) {
        feedbackTextEl.textContent = "정답입니다!";
        feedbackTextEl.className = 'correct';
        if (!isReview) score++; // 처음 풀 때만 점수 증가
    } else {
        feedbackTextEl.textContent = "오답입니다.";
        feedbackTextEl.className = 'incorrect';
    }
    
    explanationEl.textContent = questionData.explanation;

    // 모든 버튼 비활성화 및 정답/오답 표시
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
    nextBtn.textContent = (currentQuestionIndex === quizData.length - 1) ? "결과 보기" : "다음 문제";
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
        // 퀴즈 완료
        showResults();
    }
}

// 결과 보기
function showResults() {
    quizContainer.style.display = 'none'; // 퀴즈 숨기기
    resultContainer.className = ''; // 결과 보이기

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

    // [수정됨] URL이 비어있는지('여기에...') 검사하는 코드로 원복했습니다.
    if (GOOGLE_APPS_SCRIPT_URL === '여기에_배포된_웹_앱_URL을_붙여넣으세요') {
        alert('오류: 퀴즈 관리자가 Google Apps Script URL을 설정하지 않았습니다.');
        return;
    }

    submitBtn.disabled = true;
    submitStatus.textContent = '전송 중...';

    const data = {
        studentId: studentId,
        studentName: studentName,
        score: scorePercentage
    };

    // [수정됨] 이전에 수정한 'mode: no-cors'가 삭제된 fetch 코드를 유지합니다.
   fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: 'POST',
    cache: 'no-cache',
    redirect: 'follow',
    body: JSON.stringify(data),
    headers: {
      // [수정됨] 이 부분을 'text/plain'으로 변경합니다.
      'Content-Type': 'text/plain' 
    }
})
.then(response => response.json()) // 응답은 여전히 JSON으로 받습니다.
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
} // <--- [수정됨] `submitResult` 함수를 닫는 `}` 괄호를 올바른 위치에 추가했습니다.

// [수정됨] `window.onload`를 함수 밖으로 이동시켜 파일이 올바르게 로드되도록 수정했습니다.
// 첫 문제 로드
window.onload = () => loadQuestion(0);