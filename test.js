const questions = [ 
    { element: 'Hydrogen', symbol: 'H' },
    { element: 'Helium', symbol: 'He' },
    { element: 'Lithium', symbol: 'Li' },
    { element: 'Beryllium', symbol: 'Be' },
    { element: 'Boron', symbol: 'B' },
    { element: 'Carbon', symbol: 'C' },
    { element: 'Nitrogen', symbol: 'N' },
    { element: 'Oxygen', symbol: 'O' },
    { element: 'Fluorine', symbol: 'F' },
    { element: 'Neon', symbol: 'Ne' },
    { element: 'Sodium', symbol: 'Na' },
    { element: 'Magnesium', symbol: 'Mg' },
    { element: 'Aluminum', symbol: 'Al' },
    { element: 'Silicon', symbol: 'Si' },
    { element: 'Phosphorus', symbol: 'P' },
    { element: 'Sulfur', symbol: 'S' },
    { element: 'Chlorine', symbol: 'Cl' },
    { element: 'Argon', symbol: 'Ar' },
    { element: 'Potassium', symbol: 'K' },
    { element: 'Calcium', symbol: 'Ca' },
    { element: 'Scandium', symbol: 'Sc' },
    { element: 'Titanium', symbol: 'Ti' },
    { element: 'Vanadium', symbol: 'V' },
    { element: 'Chromium', symbol: 'Cr' },
    { element: 'Manganese', symbol: 'Mn' },
    { element: 'Iron', symbol: 'Fe' },  
    { element: 'Cobalt', symbol: 'Co' },
    { element: 'Nickel', symbol: 'Ni' },
    { element: 'Copper', symbol: 'Cu' },
    { element: 'Zinc', symbol: 'Zn' },
    { element: 'Gallium', symbol: 'Ga' },
    { element: 'Germanium', symbol: 'Ge' },
    { element: 'Arsenic', symbol: 'As' },
    { element: 'Selenium', symbol: 'Se' },
    { element: 'Bromine', symbol: 'Br' },
    { element: 'Krypton', symbol: 'Kr' },  
    { element: 'Rubidium', symbol: 'Rb' },
    { element: 'Strontium', symbol: 'Sr' },
    { element: 'Yttrium', symbol: 'Y' },
    { element: 'Zirconium', symbol: 'Zr' },
    { element: 'Niobium', symbol: 'Nb' },
    { element: 'Molybdenum', symbol: 'Mo' },
    { element: 'Technetium', symbol: 'Tc' },
    { element: 'Ruthenium', symbol: 'Ru' },
    { element: 'Rhodium', symbol: 'Rh' },
    { element: 'Palladium', symbol: 'Pd' },
    { element: 'Silver', symbol: 'Ag' },
    { element: 'Cadmium', symbol: 'Cd' },
    { element: 'Indium', symbol: 'In' },
    { element: 'Tin', symbol: 'Sn' },
    { element: 'Antimony', symbol: 'Sb' }, 
    { element: 'Tellurium', symbol: 'Te' },
    { element: 'Iodine', symbol: 'I' },     
    { element: 'Xenon', symbol: 'Xe' },
    { element: 'Cesium', symbol: 'Cs' },
    { element: 'Barium', symbol: 'Ba' },
    { element: 'Lanthanum', symbol: 'La' },
    { element: 'Cerium', symbol: 'Ce' },
    { element: 'Praseodymium', symbol: 'Pr' },
    { element: 'Neodymium', symbol: 'Nd' },
    { element: 'Promethium', symbol: 'Pm' },
    { element: 'Samarium', symbol: 'Sm' },
    { element: 'Europium', symbol: 'Eu' },
    { element: 'Gadolinium', symbol: 'Gd' },
    { element: 'Terbium', symbol: 'Tb' },
    { element: 'Dysprosium', symbol: 'Dy' },
    { element: 'Holmium', symbol: 'Ho' },
    { element: 'Erbium', symbol: 'Er' },
    { element: 'Thulium', symbol: 'Tm' },
    { element: 'Ytterbium', symbol: 'Yb' },
    { element: 'Lutetium', symbol: 'Lu' },
    { element: 'Hafnium', symbol: 'Hf' },
    { element: 'Tantalum', symbol: 'Ta' },
    { element: 'Tungsten', symbol: 'W' },
    { element: 'Rhenium', symbol: 'Re' },
    { element: 'Osmium', symbol: 'Os' },
    { element: 'Iridium', symbol: 'Ir' },
    { element: 'Platinum', symbol: 'Pt' },
    { element: 'Gold', symbol: 'Au' },
    { element: 'Mercury', symbol: 'Hg' },
    { element: 'Thallium', symbol: 'Tl' },
    { element: 'Lead', symbol: 'Pb' },
    { element: 'Bismuth', symbol: 'Bi' },
    { element: 'Polonium', symbol: 'Po' },
    { element: 'Astatine', symbol: 'At' },
    { element: 'Radon', symbol: 'Rn' },
    { element: 'Francium', symbol: 'Fr' },
    { element: 'Radium', symbol: 'Ra' },
    { element: 'Actinium', symbol: 'Ac' },
    { element: 'Thorium', symbol: 'Th' },
    { element: 'Protactinium', symbol: 'Pa' },
    { element: 'Uranium', symbol: 'U' },
    { element: 'Neptunium', symbol: 'Np' },
    { element: 'Plutonium', symbol: 'Pu' },
    { element: 'Americium', symbol: 'Am' },
    { element: 'Curium', symbol: 'Cm' },
    { element: 'Berkelium', symbol: 'Bk' },
    { element: 'Californium', symbol: 'Cf' },
    { element: 'Einsteinium', symbol: 'Es' },
];

let score = 0;
let currentQuestionIndex = 0; 
let availableQuestions = [];  
let currentStreak = 0; 


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}
  

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  currentStreak = 0; 
  document.getElementById('restart').style.display = 'none';
 
  availableQuestions = questions.slice();
  generateQuestion();
}
  
function generateQuestion() {
  
  if (availableQuestions.length === 0) {
    document.getElementById('question').innerText = "Quiz Complete!";
    document.getElementById('choices').innerHTML = '';
    document.getElementById('next').style.display = 'none';
    document.getElementById('restart').style.display = 'block';
    return;
  }
    
  
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const question = availableQuestions.splice(randomIndex, 1)[0];
  
  
  const choices = [question.symbol];
  
  while (choices.length < 4) {
    const randomSymbol = questions[Math.floor(Math.random() * questions.length)].symbol;
    if (!choices.includes(randomSymbol)) {
      choices.push(randomSymbol);
    }
  }
    
  
  shuffleArray(choices);
  
  
  const showImage = Math.random() < 0.5;
    
  
  if (showImage) {
    document.getElementById('question').innerText = "Can you guess what symbol is in the picture?";
    const imgElement = document.getElementById('elementImage');
    imgElement.style.display = 'block';

    const elementName = question.element.toLowerCase();
    const extensions = ['webp', 'png', 'jpg']; // Priority order
    let currentExtensionIndex = 0;

    const tryLoadImage = () => {
      if (currentExtensionIndex >= extensions.length) {
        imgElement.style.display = 'none';
        return;
      }
      
      const ext = extensions[currentExtensionIndex++];
      imgElement.src = `images/${elementName}.${ext}`;
    };

    imgElement.onerror = tryLoadImage;
    imgElement.onload = () => {
      imgElement.style.display = 'block';
    };
    
    tryLoadImage();
  } else {
    document.getElementById('elementImage').style.display = 'none';
    document.getElementById('question').innerText = `What is the symbol for ${question.element}?`;
  }
  
  document.getElementById('questionNumber').innerText = `Question: ${currentQuestionIndex + 1}`;
    
  
  document.getElementById('choices').innerHTML = choices.map(choice => 
    `<button class="choice">${choice}</button>`
  ).join('');
    
  
  document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => checkAnswer(button.innerText, question.symbol));
  });
    
  document.getElementById('next').style.display = 'none';
  currentQuestionIndex++;
}
  
function checkAnswer(userAnswer, correctAnswer) {
  document.querySelectorAll('.choice').forEach(button => {
    button.disabled = true; 
  });
  
  if (userAnswer === correctAnswer) {
    currentStreak++;
    score++; // Increment total score by 1
    document.getElementById('feedback').innerText = "Correct!";
  } else {
    document.getElementById('feedback').innerText = `Incorrect! The correct answer was ${correctAnswer}.`;
    currentStreak = 0;
  }
  
  document.getElementById('score').innerText = `Score: ${score}`;
  document.getElementById('streak').innerText = `Current Streak: ${currentStreak}`;
  document.getElementById('next').style.display = 'block';
}
  
document.getElementById('next').addEventListener('click', () => {
  document.getElementById('feedback').innerText = '';
  generateQuestion();
});
  
document.getElementById('restart').addEventListener('click', () => {
  startQuiz();
});
  
window.onload = startQuiz;
