
const questions = [
   
 
    { number: 1, question: " What does GPU stand for in computing?", options: ["General Power Unit", "Graphic Performance Utility", "Global Processor Unit", "Gaming Power Utility", "Graphics Processing Unit"], answer: "Graphics Processing Unit" },
    { number: 2, question: " Which software is mainly used for vector graphic design?", options: ["Photoshop", "Canva", "Figma", "SketchUp", "Illustrator"], answer: "Illustrator" },
    { number: 3, question: " Who is known as the father of Artificial Intelligence?", options: ["Elon Musk", "Mark Zuckerberg", "Dennis Ritchie", "Larry Page", "Alan Turing"], answer: "Alan Turing" },
    { number: 4, question: " Which of these is a cloud computing platform by Amazon?", options: ["Google Cloud", "iCloud", "Azure", "DigitalOcean", "AWS"], answer: "AWS" },
    { number: 5, question: "In UI/UX design, what does ‘UX’ stand for?", options: ["User Xperience", "Ultra Experience", "User Extension", "Universal Experience", "User Experience"], answer: "User Experience" },
    { number: 6, question: "Which of these is NOT a type of computer memory?", options: ["RAM", "ROM", "SSD", "USB", "CPU"], answer: "CPU" },
    { number: 7, question: "Which programming language is mainly used for data analysis?", options: ["HTML", "CSS", "Python", "Java", "C++"], answer: "Python" },
       { number: 13, question: "Which of the following is NOT an operating system?", options: ["Windows", "Linux", "Android", "Firefox", "iOS"], answer: "Firefox" },
    { number: 14, question: "Which of these apps is used for digital drawing?", options: ["Excel", "Procreate", "Word", "Google Docs", "Zoom"], answer: "Procreate" },
    { number: 15, question: "What does 'AI' stand for?", options: ["Automatic Input", "Artificial Intelligence", "Advanced Interaction", "Automated Information", "Application Interface"], answer: "Artificial Intelligence" },
    { number: 16, question: "Which of these file formats is used for images?", options: ["DOCX", "MP3", "JPG", "XLS", "EXE"], answer: "JPG" },
    { number: 17, question: "Which part of the computer processes data?", options: ["Monitor", "Keyboard", "Mouse", "CPU", "Motherboard"], answer: "CPU" },
    { number: 18, question: "What is the brain of the computer called?", options: ["GPU", "SSD", "RAM", "CPU", "ROM"], answer: "CPU" },
    { number: 19, question: "Which company created the iPhone?", options: ["Google", "Samsung", "Apple", "Microsoft", "Nokia"], answer: "Apple" },
    { number: 20, question: "What does URL stand for?", options: ["Universal Resource Locator", "Uniform Resource Locator", "User Request Link", "Uniform Required Link", "Universal Retrieval Link"], answer: "Uniform Resource Locator"},
    { number: 21, question: "Which of the following is a programming language commonly used in robotics?", options: ["Ruby", "Python", "Swift", "JavaScript", "PHP"], answer: "Python" },
    { number: 22, question: "What is a robotic arm typically used for?", options: ["Listening to music", "Handling dangerous materials", "Browsing websites", "Typing essays", "Taking pictures"], answer: "Handling dangerous materials" },
    { number: 23, question: "Which component in a robot acts like its brain?", options: ["Sensor", "Motor", "Actuator", "Microcontroller", "Battery"], answer: "Microcontroller" },
    { number: 24, question: "What is the function of sensors in robotics?", options: ["Store data", "Power the robot", "Help the robot perceive the environment", "Build 3D models", "Access the internet"], answer: "Help the robot perceive the environment" },
    { number: 25, question: "Which of these is an example of a humanoid robot?", options: ["WALL-E", "Roomba", "ASIMO", "Alexa", "iRobot"], answer: "ASIMO" },
    { number: 26, question: "What kind of energy powers most mobile robots?", options: ["Solar Energy", "Fuel", "Battery", "Hydraulic Energy", "Wind Power"], answer: "Battery" },
    { number: 27, question: "Which of these is a real-world use of robotics?", options: ["Flying kites", "Surgery assistance", "Teaching English", "Painting houses manually", "Selling in a market"], answer: "Surgery assistance" },
    { number: 28, question: "What is the main purpose of actuators in a robot?", options: ["Store code", "Produce movement", "Sense light", "Translate language", "Filter air"], answer: "Produce movement" },
    { number: 29, question: "Which robot was sent to explore Mars?", options: ["Siri", "Sophia", "Curiosity", "Echo", "TeslaBot"], answer: "Curiosity" },
    { number: 30, question: "Which AI field is crucial for robot decision-making?", options: ["Graphic design", "Database Management", "Machine Learning", "Web Hosting", "Cryptography"], answer: "Machine Learning" },
    {
      question: " What is the symbol for oxygen?",
      options: ["O", "Ox", "O2", "Oz", "On"],
      answer: "O"
    },
    {
      question: " What is the chemical formula for water?",
      options: ["H2O", "CO2", "O2", "NaCl", "H2"],
      answer: "H2O"
    },
    {
      question: " What is the pH of a neutral solution?",
      options: ["1", "7", "10", "14", "0"],
      answer: "7"
    },
    {
      question: " Common salt is also known as?",
      options: ["Sodium Chloride", "Potassium", "Calcium", "Magnesium", "Sulphate"],
      answer: "Sodium Chloride"
    },
    {
      question: " What type of change is rusting of iron?",
      options: ["Physical", "Chemical", "Reversible", "Neutral", "Temporary"],
      answer: "Chemical"
    },
    {
      question: " Which gas is used in soda drinks?",
      options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen", "Helium"],
      answer: "Carbon Dioxide"
    },
    {
      question: " What is the smallest unit of an element?",
      options: ["Atom", "Molecule", "Ion", "Cell", "Electron"],
      answer: "Atom"
    },
   
    {
      question: " What do carnivores eat?",
      options: ["Meat", "Plants", "Fruits", "Insects", "Grass"],
      answer: "Meat"
    },
    
    {
      question: " Which one is a JavaScript data type?",
      options: ["Class", "Integer", "String", "Boolean", "Double"],
      answer: "Boolean"
    },
    {
      question: " Which is an example of an operating system?",
      options: ["Microsoft Word", "Google", "Windows", "Printer", "Excel"],
      answer: "Windows"
    },
    {
      question: " Who discovered gravity?",
      options: ["Albert Einstein", "Galileo", "Newton", "Darwin", "Faraday"],
      answer: "Newton"
    },
    {
      question: " What is the chemical symbol for water?",
      options: ["H2", "O2", "CO2", "H2O", "HO"],
      answer: "H2O"
    },
    {
      question: " What is the sum of angles in a triangle?",
      options: ["90°", "180°", "270°", "360°", "100°"],
      answer: "180°"
    },
    {
      question: " Identify the adjective in this sentence: 'She wore a beautiful dress.'",
      options: ["She", "Wore", "Beautiful", "Dress", "A"],
      answer: "Beautiful"
    },
    {
      question: " What is the boiling point of water in Celsius?",
      options: ["0°C", "50°C", "100°C", "150°C", "200°C"],
      answer: "100°C"
    },
    {
      question: " Water boils at what temperature?",
      options: ["90°C", "100°C", "80°C", "120°C"],
      answer: "100°C"
    },
    {
      question: " What is the capital of Nigeria?",
      options: ["Lagos", "Abuja", "Kano", "Enugu"],
      answer: "Abuja"
    },
    {
      question: 
      "The formula for water is?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "4. 7 x 8 = ?",
      options: ["56", "48", "64", "49"],
      answer: "56"
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "George Orwell", "J.K. Rowling", "F. Scott Fitzgerald"],
      correctAnswer: "Harper Lee"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: "Pacific"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "India", "South Korea"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Mount Kilimanjaro"],
      correctAnswer: "Mount Everest"
    },
    {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Albert Einstein"],
      correctAnswer: "Alexander Graham Bell"
    }
  ];
  
  
  
    
  
  
              
              
          
          
      
        
     
    


    // This is a  quiz of 100 Questions..

  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 1200; //Tests are to be completed within 9 minutes else you would be loggeed out. 
  let timerInterval;
  
  const questionEl = document.getElementById("question");
  const optionsForm = document.getElementById("options-form");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const timerEl = document.getElementById("timer");
  const scoreEl = document.getElementById("score");
  const progressEl = document.getElementById("progress");
  
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const seconds = String(timeLeft % 60).padStart(2, '0');
      timerEl.textContent = `⏳ ${minutes}:${seconds}`;
  
      if (timeLeft === 30) {
        alert("⚠️ 30 seconds left!");
      }
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showFinalResult("⏰ YOUR TIME IS UP!");
      }
    }, 1000);
  }
  /* This functionality loads the questions*/
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsForm.innerHTML = "";
  
    q.options.forEach((opt, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = opt;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      optionsForm.appendChild(label);
    });
  
    progressEl.textContent = `${currentQuestion + 1} of ${questions.length}`;
  }
  
  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='option']:checked");
    if (!selected) return alert("Please select an option!");
  
    const userAnswer = selected.value;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
    }
  document.addEventListener("contextmenu", e => e.preventDefault());
       document.onkeydown = function(e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'c' || e.key === 'C' ))
       {
        return false;


       }
       if (e.key === 'f12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i'))){
        return false;
       }
      }
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      clearInterval(timerInterval);
      showFinalResult("✅ TEST COMPLETED!");
    }
  
    scoreEl.textContent = `Score: ${score}`;
  });
  
  function showFinalResult(message) {
    questionEl.classList.add("hidden");
    optionsForm.classList.add("hidden");
    nextBtn.classList.add("hidden");
    progressEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
  
    resultEl.innerHTML = `<p>${message}</p><p>You have scored ${score} out of ${questions.length}</p>`;
  }
  
  function initQuiz() {
    loadQuestion();
    startTimer();
  }
  
  initQuiz();
  
