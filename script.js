const questions = [
	{
		question: 'Rasulullah SAW tahu ramuan obat yang sebaiknya diminum, akan tetapi beliau tidak meraciknya sendiri,bersama siapa?',
		choices: [
			'Sa’ad radhiallahu ‘anhu',
			'Al-Harits bin Kalidah',
			'Al-Harits bin Kalidah',
		],
		answer: 1,

        question: 'الطب النبوي هو كل ما ذكر في القرآن والأحاديث النبوية الصحيحة فيما يتعلق بالطب سواء كان وقاية أم علاجا apa arti ayat tersebut?',
        choices:[
            'Thibbun nabawi adalah segala sesuatu yang disebutkan oleh Al-Quran dan As-Sunnah yang Shahih yang berkaitan dengan kedokteran baik berupa pencegahan (penyakit) atau pengobatan” ',
            '“Bahwasannya Nabi shallallaahu ‘alaihi wa sallam pernah berbekam dan menyuruhku untuk memberikan upah kepada ahli bekamnya"',
            '“Dari Sahabat Sa’ad mengisahkan, pada suatu hari aku menderita sakit, kemudian Rasulullah shallallahu ‘alaihi wa sallam menjengukku, beliau meletakkan tangannya di antara kedua putingku'
        ],
        answer: 3,
	},
	// Add more questions as needed
];

let currentQuestion = 0;

function showQuestion() {
	const questionEl = document.getElementById('question');
	questionEl.textContent = questions[currentQuestion].question;

	const choicesEl = document.getElementById('choices');
	choicesEl.innerHTML = '';

	questions[currentQuestion].choices.forEach((choice, index) => {
		const buttonEl = document.createElement('button');
		buttonEl.id = `choice${index + 1}`;
		buttonEl.textContent = choice;
		buttonEl.onclick = () => checkAnswer(index + 1);
		choicesEl.appendChild(buttonEl);
	});
}

function checkAnswer(selectedAnswer) {
	if (selectedAnswer === questions[currentQuestion].answer) {
		showResult('Benar!');
	} else {
		showResult('Salah!');
	}
}

function showResult(message) {
	const resultEl = document.getElementById('result');
	resultEl.textContent = message;

	setTimeout(() => {
		currentQuestion++;

		if (currentQuestion === questions.length) {
			alert('Quiz selesai!');
			currentQuestion = 0;
		}

		showQuestion();
	}, 1000);//de;ay 1 detik
}

showQuestion();