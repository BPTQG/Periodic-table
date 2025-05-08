const questions = [ 
  { element: 'Hydrogen', symbol: 'H', description: 'The lightest and most common element in the universe. Used in fuel and to make ammonia.' },
{ element: 'Helium', symbol: 'He', description: 'A light gas that doesn’t burn. Fills balloons and cools MRI machines.' },
{ element: 'Lithium', symbol: 'Li', description: 'A soft metal used in rechargeable batteries for phones and electric cars.' },
{ element: 'Beryllium', symbol: 'Be', description: 'A strong, lightweight metal used in satellites and X-ray machines.' },
{ element: 'Boron', symbol: 'B', description: 'A tough element added to glass and detergents. Also in bulletproof vests.' },
{ element: 'Carbon', symbol: 'C', description: 'Found in diamonds, coal, and all living things. Basis of life on Earth.' },
{ element: 'Nitrogen', symbol: 'N', description: 'Makes up most of the air we breathe. Used in fertilizers and explosives.' },
{ element: 'Oxygen', symbol: 'O', description: 'Essential for breathing. Also used in welding and medical treatments.' },
{ element: 'Fluorine', symbol: 'F', description: 'A reactive gas in toothpaste to prevent cavities. Also in non-stick pans.' },
{ element: 'Neon', symbol: 'Ne', description: 'Glows bright red-orange in neon signs. A non-reactive gas.' },
{ element: 'Sodium', symbol: 'Na', description: 'A salty metal in table salt (sodium chloride). Keeps nerves working.' },
{ element: 'Magnesium', symbol: 'Mg', description: 'Burns brightly in fireworks. Helps plants make chlorophyll.' },
{ element: 'Aluminum', symbol: 'Al', description: 'Lightweight metal for cans, foil, and airplanes. Resists rust.' },
{ element: 'Silicon', symbol: 'Si', description: 'Used in computer chips and solar panels. Main ingredient in sand.' },
{ element: 'Phosphorus', symbol: 'P', description: 'Glows in the dark. Key for healthy bones and DNA.' },
{ element: 'Sulfur', symbol: 'S', description: 'Yellow powder with a rotten egg smell. Used in matches and fertilizers.' },
{ element: 'Chlorine', symbol: 'Cl', description: 'A green gas that cleans swimming pools. Also in bleach.' },
{ element: 'Argon', symbol: 'Ar', description: 'A non-reactive gas used in light bulbs and to protect welds.' },
{ element: 'Potassium', symbol: 'K', description: 'Helps muscles and nerves work. Found in bananas and potatoes.' },
{ element: 'Calcium', symbol: 'Ca', description: 'Builds strong bones and teeth. Found in milk and chalk.' },
{ element: 'Scandium', symbol: 'Sc', description: 'Makes strong, lightweight bike frames and sports gear.' },
{ element: 'Titanium', symbol: 'Ti', description: 'Strong, rust-proof metal for jewelry, airplanes, and artificial joints.' },
{ element: 'Vanadium', symbol: 'V', description: 'Makes steel stronger. Used in tools and car parts.' },
{ element: 'Chromium', symbol: 'Cr', description: 'Shiny coating on cars and sinks. Prevents rust.' },
{ element: 'Manganese', symbol: 'Mn', description: 'Strengthens steel. Found in batteries and healthy bones.' },
{ element: 'Iron', symbol: 'Fe', description: 'Magnetic metal used to make steel for buildings and bridges.' },
{ element: 'Cobalt', symbol: 'Co', description: 'Blue pigment in glass. Used in phone and car batteries.' },
{ element: 'Nickel', symbol: 'Ni', description: 'Shiny metal in coins and stainless steel. Causes allergies in some people.' },
{ element: 'Copper', symbol: 'Cu', description: 'Orange metal for wires and pipes. Kills germs on surfaces.' },
{ element: 'Zinc', symbol: 'Zn', description: 'Protects metal from rust (galvanizing). Boosts the immune system.' },
{ element: 'Gallium', symbol: 'Ga', description: 'Melts in your hand! Used in LEDs and phone screens.' },
{ element: 'Germanium', symbol: 'Ge', description: 'Used in old computer chips and infrared cameras.' },
{ element: 'Arsenic', symbol: 'As', description: 'Toxic poison, but tiny amounts treat some cancers.' },
{ element: 'Selenium', symbol: 'Se', description: 'Helps photocopiers work. Important for thyroid health.' },
{ element: 'Bromine', symbol: 'Br', description: 'Red-brown liquid in fire retardants and pool cleaners.' },
{ element: 'Krypton', symbol: 'Kr', description: 'Used in bright camera flashes and energy-saving bulbs.' },
{ element: 'Rubidium', symbol: 'Rb', description: 'Used in GPS systems and to study brain activity.' },
{ element: 'Strontium', symbol: 'Sr', description: 'Makes fireworks bright red. Strengthens tooth enamel.' },
{ element: 'Yttrium', symbol: 'Y', description: 'Used in TV screens and cancer treatments.' },
{ element: 'Zirconium', symbol: 'Zr', description: 'Heat-resistant metal in nuclear reactors and fake diamonds.' },
{ element: 'Niobium', symbol: 'Nb', description: 'Makes jet engines stronger. Used in jewelry that doesn’t cause allergies.' },
{ element: 'Molybdenum', symbol: 'Mo', description: 'Tough metal for tools and car parts. Helps plants grow.' },
{ element: 'Technetium', symbol: 'Tc', description: 'Man-made element used in medical imaging to find diseases.' },
{ element: 'Ruthenium', symbol: 'Ru', description: 'Hardens jewelry metals. Used in solar cells.' },
{ element: 'Rhodium', symbol: 'Rh', description: 'Expensive metal in car exhaust systems to reduce pollution.' },
{ element: 'Palladium', symbol: 'Pd', description: 'Filters pollution from car exhaust. Used in dental crowns.' },
{ element: 'Silver', symbol: 'Ag', description: 'Shiny metal for jewelry. Kills germs and conducts electricity.' },
{ element: 'Cadmium', symbol: 'Cd', description: 'Toxic metal in old batteries. Also makes red paint.' },
{ element: 'Indium', symbol: 'In', description: 'Soft metal for touchscreens and solar panels.' },
{ element: 'Tin', symbol: 'Sn', description: 'Coats food cans to prevent rust. Used in solder for electronics.' },
{ element: 'Antimony', symbol: 'Sb', description: 'Hardens metals. Found in flame-proof materials.' },
{ element: 'Tellurium', symbol: 'Te', description: 'Used in solar panels and to make metal easier to cut.' },
{ element: 'Iodine', symbol: 'I', description: 'Added to salt for thyroid health. Kills germs in cuts.' },
{ element: 'Xenon', symbol: 'Xe', description: 'Used in car headlights and anesthesia. Glows blue in lamps.' },
{ element: 'Cesium', symbol: 'Cs', description: 'Used in atomic clocks, the most precise timekeepers.' },
{ element: 'Barium', symbol: 'Ba', description: 'Helps doctors see the digestive system in X-rays.' },
{ element: 'Lanthanum', symbol: 'La', description: 'Used in camera lenses and hybrid car batteries.' },
{ element: 'Cerium', symbol: 'Ce', description: 'Polishes glass and removes pollution from car exhaust.' },
{ element: 'Praseodymium', symbol: 'Pr', description: 'Makes strong magnets for wind turbines and headphones.' },
{ element: 'Neodymium', symbol: 'Nd', description: 'Powerful magnets in hard drives and electric car motors.' },
{ element: 'Promethium', symbol: 'Pm', description: 'Glows in the dark. Used in nuclear batteries.' },
{ element: 'Samarium', symbol: 'Sm', description: 'Magnets for missiles and headphones. Treats some cancers.' },
{ element: 'Europium', symbol: 'Eu', description: 'Makes red and blue colors in TVs and LED lights.' },
{ element: 'Gadolinium', symbol: 'Gd', description: 'Used in MRI scans to see inside the body.' },
{ element: 'Terbium', symbol: 'Tb', description: 'Makes green colors in TVs. Used in fuel cells.' },
{ element: 'Dysprosium', symbol: 'Dy', description: 'Essential for electric cars and nuclear reactors.' },
{ element: 'Holmium', symbol: 'Ho', description: 'Used in lasers for surgery and to color cubic zirconia.' },
{ element: 'Erbium', symbol: 'Er', description: 'Amplifies light in fiber-optic internet cables.' },
{ element: 'Thulium', symbol: 'Tm', description: 'Rare metal used in portable X-ray machines.' },
{ element: 'Ytterbium', symbol: 'Yb', description: 'Improves stainless steel. Used in stress sensors.' },
{ element: 'Lutetium', symbol: 'Lu', description: 'Helps refine oil. Used in cancer treatment scans.' },
{ element: 'Hafnium', symbol: 'Hf', description: 'Controls nuclear reactors. Used in computer chips.' },
{ element: 'Tantalum', symbol: 'Ta', description: 'Rust-proof metal in phones and surgical implants.' },
{ element: 'Tungsten', symbol: 'W', description: 'Extremely heat-resistant. Used in lightbulb filaments.' },
{ element: 'Rhenium', symbol: 'Re', description: 'Heat-resistant metal in jet engines and thermometers.' },
{ element: 'Osmium', symbol: 'Os', description: 'The densest metal. Used in pen tips and instrument pivots.' },
{ element: 'Iridium', symbol: 'Ir', description: 'Rare metal in spark plugs and dinosaur extinction studies.' },
{ element: 'Platinum', symbol: 'Pt', description: 'Precious metal for jewelry and car pollution filters.' },
{ element: 'Gold', symbol: 'Au', description: 'Valuable metal for jewelry. Conducts electricity in electronics.' },
{ element: 'Mercury', symbol: 'Hg', description: 'Liquid metal in old thermometers. Toxic if inhaled.' },
{ element: 'Thallium', symbol: 'Tl', description: 'Extremely toxic. Was used in rat poison.' },
{ element: 'Lead', symbol: 'Pb', description: 'Heavy metal in old pipes and paint. Causes brain damage.' },
{ element: 'Bismuth', symbol: 'Bi', description: 'Replaces lead in cosmetics and shotgun pellets. Non-toxic.' },
{ element: 'Polonium', symbol: 'Po', description: 'Radioactive element used in old spy weapon assassinations.' },
{ element: 'Astatine', symbol: 'At', description: 'One of the rarest elements. Used in cancer research.' },
{ element: 'Radon', symbol: 'Rn', description: 'Radioactive gas in basements. Causes lung cancer.' },
{ element: 'Francium', symbol: 'Fr', description: 'Extremely unstable. Barely exists naturally.' },
{ element: 'Radium', symbol: 'Ra', description: 'Glowed in old watch dials. Caused cancer in workers.' },
{ element: 'Actinium', symbol: 'Ac', description: 'Rarely used. Glows in the dark.' },
{ element: 'Thorium', symbol: 'Th', description: 'Potential clean nuclear fuel. Used in camera lenses.' },
{ element: 'Protactinium', symbol: 'Pa', description: 'Rare and radioactive. No major uses.' },
{ element: 'Uranium', symbol: 'U', description: 'Powers nuclear reactors and bombs. Glows under UV light.' },
{ element: 'Neptunium', symbol: 'Np', description: 'First synthetic element. Used in neutron detectors.' },
{ element: 'Plutonium', symbol: 'Pu', description: 'Made in reactors. Used in nuclear weapons.' },
{ element: 'Americium', symbol: 'Am', description: 'In smoke detectors. Senses smoke particles.' },
{ element: 'Curium', symbol: 'Cm', description: 'Synthetic element. Used in space probes.' },
{ element: 'Berkelium', symbol: 'Bk', description: 'Made in labs. No everyday uses.' },
{ element: 'Californium', symbol: 'Cf', description: 'Powerful neutron source. Detects gold or oil.' },
{ element: 'Einsteinium', symbol: 'Es', description: 'Synthetic element. Used only in research.' }
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
  document.getElementById('score').innerText = `Score: ${score}`;
  document.getElementById('streak').innerText = `Current Streak: ${currentStreak}`;
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
  const showImage = Math.random() < 0.5;

  let correctAnswer;
  let choices = [];
  let questionText = '';

  if (showImage) {
   
    questionText = "What is the name of the element with this symbol?";
    correctAnswer = question.element;
    choices = [correctAnswer];
    
    while (choices.length < 4) {
      const randomElement = questions[Math.floor(Math.random() * questions.length)].element;
      if (!choices.includes(randomElement)) {
        choices.push(randomElement);
      }
    }

    const imgElement = document.getElementById('elementImage');
    imgElement.style.display = 'block';
    const elementName = question.element.toLowerCase();
    const extensions = ['webp', 'png', 'jpg'];
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
    imgElement.onload = () => imgElement.style.display = 'block';
    tryLoadImage();
  } else {
  
    questionText = `What is the symbol for ${question.element}?`;
    correctAnswer = question.symbol;
    choices = [correctAnswer];
    
  
    while (choices.length < 4) {
      const randomSymbol = questions[Math.floor(Math.random() * questions.length)].symbol;
      if (!choices.includes(randomSymbol)) {
        choices.push(randomSymbol);
      }
    }
    document.getElementById('elementImage').style.display = 'none';
  }

  document.getElementById('question').innerText = questionText;
  document.getElementById('questionNumber').innerText = `Question: ${currentQuestionIndex + 1}`;
  shuffleArray(choices);


  document.getElementById('choices').innerHTML = choices.map(choice => 
    `<button class="choice">${choice}</button>`
  ).join('');


  document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => checkAnswer(button.innerText, correctAnswer));
  });

  document.getElementById('next').style.display = 'none';
  currentQuestionIndex++;
}

function checkAnswer(userAnswer, correctAnswer) {
  document.querySelectorAll('.choice').forEach(button => {
    button.disabled = true;
    if (button.innerText === correctAnswer) {
      button.classList.add('correct');
    } else if (button.innerText === userAnswer) {
      button.classList.add('incorrect');
    }
  });

  const currentQuestion = questions.find(q => 
    q.element === correctAnswer || q.symbol === correctAnswer
  );

  let feedbackText;
  if (userAnswer === correctAnswer) {
    currentStreak++;
    score++;
    feedbackText = `Correct! That's ${correctAnswer}.`;
  } else {
    feedbackText = `Incorrect! The correct answer was ${correctAnswer}.`;
    currentStreak = 0;
  }

  if (document.getElementById('elementImage').style.display !== 'none') {
    feedbackText += ` ${currentQuestion.description}`;
  }

  document.getElementById('feedback').innerText = feedbackText;
  document.getElementById('score').innerText = `Score: ${score}`;
  document.getElementById('streak').innerText = `Current Streak: ${currentStreak}`;
  document.getElementById('next').style.display = 'block';
}


document.getElementById('next').addEventListener('click', () => {
  document.getElementById('feedback').innerText = '';
  generateQuestion();
});

document.getElementById('restart').addEventListener('click', startQuiz);
window.onload = startQuiz;
