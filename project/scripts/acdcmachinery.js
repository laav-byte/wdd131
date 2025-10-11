const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-links ul'); // target the UL

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const machineries = [
    {
        machineName: "Air Compressor",
        electricalMachine: "Induction Motor",
        typeofMachine:"Induction Motor",
        application: "Pneumatic Tools",
        principle: "Converts electrical energy into mechanical energy to compress air.",
        imageUrl: "https://powerhouse.com.ph/cdn/shop/files/3_2_5148f823-6305-40fa-812b-30c7193092de_535x.png?v=1723193460"
    },
    {
        machineName: "Conveyor Belt",
        electricalMachine: "DC Motor",
        typeofMachine:"DC Motor",
        application: "Material Handling",
        principle: "Uses electrical energy to drive a belt for transporting materials.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXielgmUs_gMhNa1IxNfSsfr1TdphqyGPZCg&s"
    },
    {
        machineName: "Welding Machine",
        electricalMachine: "Transformer",
        typeofMachine:"Transformer",
        application: "Metal Joining",
        principle: "Steps up or steps down voltage to provide the necessary current for welding.",
        imageUrl: "https://m.media-amazon.com/images/I/71JROSfIq4L._AC_SL1500_.jpg"
    },
    {
        machineName: "CNC Machine",
        electricalMachine: "Stepper Motor",
        typeofMachine:"DC Motor",
        application: "Precision Machining",
        principle: "Uses electrical pulses to control the position of the cutting tool with high accuracy.",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/602328a9fda5e94f54de312a/1615268584323-2BH0SH8UOTVAGMYYQT30/milling-machine.jpg"
    },
    {
        machineName: "Water Pump",
        electricalMachine: "Centrifugal Pump",
        typeofMachine:"Induction Motor",
        application: "Fluid Transfer",
        principle: "Converts electrical energy into kinetic energy to move fluids.",
        imageUrl: "https://i0.wp.com/www.theengineeringchoice.com/wp-content/uploads/2024/06/What-is-Water-pump.webp"
    },
    {
        machineName: "HVAC System",
        electricalMachine: "Compressor Motor",
        typeofMachine:"Induction Motor",
        application: "Climate Control",
        principle: "Uses electrical energy to compress refrigerant for heating and cooling.",
        imageUrl: "https://www.airconditioningdoctor.com.au/wp-content/uploads/2024/03/20231110_084813-1080x675.webp"
    },
    {
        machineName: "3D Printer",
        electricalMachine: "Stepper Motor",
        typeofMachine:"DC Motor",
        application: "Additive Manufacturing",
        principle: "Uses electrical pulses to control the movement of the print head and build material layer by layer.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fnb4ojVFrZpuq4fQshi2Nv1bHRpia0cpcw&s"
    },
    {
        machineName: "Electric Forklift",
        electricalMachine: "Traction Motor",
        typeofMachine:"DC Motor",
        application: "Material Handling",
        principle: "Converts electrical energy into mechanical energy to lift and move heavy loads.",
        imageUrl: "https://helieurope.eu/wp-content/uploads/2024/02/1-9.webp"
    },
    {
        machineName: "Industrial Robot Arm",
        electricalMachine: "Servo Motor",
        typeofMachine:"DC Motor",
        application: "Automation",
        principle: "Uses electrical signals to control precise movements for tasks like assembly and welding.",
        imageUrl: "https://assets.robots.com/general/3_Industrial_Robots.png"
    },
    {
        machineName: "Electric Drill",
        electricalMachine: "Universal Motor",
        typeofMachine:"AC/DC Motor",
        application: "Drilling and Fastening",
        principle: "Converts electrical energy into mechanical energy for drilling holes and driving screws.",
        imageUrl: "https://www.bosch-pt.com.ph/binary/ocsmedia/optimized/full/o60785v54_GBM_10RE_Dynamik.png"
    },
    {   machineName: "Industrial Fan", 
        electricalMachine: "AC Induction Motor",
        typeofMachine:"Induction Motor",
        application: "Ventilation and Cooling",
        principle: "Uses electrical energy to rotate blades and move air for cooling or ventilation.",
        imageUrl: "https://ansons.ph/wp-content/uploads/2022/03/TORNADO-30-TRI.png"
    },
    {
        machineName: "Wind Turbine",
        electricalMachine: "Synchronous Generator",
        typeofMachine:"Synchronous Generator",
        application: "Electricity Generation",
        principle: "Converts mechanical energy from wind into electrical energy.",
        imageUrl: "https://media.istockphoto.com/id/1192701830/photo/windmill-for-electric-power-production-closeup.jpg?s=612x612&w=0&k=20&c=-X1U36wfCsvgYZ89QCIv9rbaO_3fFyHShstM4Cm6pTA=",
    },
    {
        machineName: "Portable Generator",
        electricalMachine: "Internal Combustion Engine with Alternator",
        typeofMachine: "Alternator",
        application: "Backup Power Supply",
        principle: "Converts mechanical energy from an internal combustion engine into electrical energy through an alternator.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2txZOawIg2oV0jXZpdRYgGItw8E-gDQFnw&s"
      },         
    {
        machineName: "Mechanical Flashlight",
        electricalMachine: "DC Generator",
        typeofMachine:"DC Generator",
        application: "Illumination",
        principle: "Converts mechanical energy into electrical energy to power the light source.",
        imageUrl: "https://theparashopmanila.com/cdn/shop/products/MG_6361_1500x.png?v=1643544296"
    },
    {
        machineName: "Electric Vehicle (EV)",
        electricalMachine: "Electric Traction Motor",
        typeofMachine:"AC/DC Motor",
        application: "Transportation",
        principle: "Converts electrical energy from batteries into mechanical energy for propulsion.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyITFke9bsaoVFpZDa0EAVSrEIAt_mF55Wg&s"
    },
    {
        machineName: "Automotive Alternator",
        electricalMachine: "Alternator",
        typeofMachine:"Alternator",
        application: "Vehicle Electrical System",
        principle: "Converts mechanical energy from the engine into electrical energy to charge the battery and power electrical systems.",
        imageUrl: "https://neighborhoodtirepros.com/Files/Images/Blog/AdobeStock_410343124.jpeg"
    }

       
    
];

const container = document.querySelector('.card-container');

// Function to render machines
function renderMachines(machineries) {
    container.innerHTML = ''; // Clear previous content
    machineries.forEach(machine => {
        const card = document.createElement('div');
        card.classList.add('machine-card');
        card.innerHTML = `
            <img src="${machine.imageUrl}" alt="${machine.machineName}" loading="lazy">
            <h2>${machine.machineName}</h2>
            <p>⚙️ Electrical Machine: ${machine.electricalMachine}</p>
            <p>🔧 Type of Machine: ${machine.typeofMachine}</p>
            <p>🏭 Application: ${machine.application}</p>
            <p>🔍 Principle: ${machine.principle}</p>
        `;
        container.appendChild(card);
    }
    );
}

// Initial load
renderMachines(machineries);
// Event listeners for navigation filtering
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.textContent.trim().toLowerCase();
      const mainHeading = document.querySelector('main h2');
      let filtered = machineries;
      let headingText = 'Home';
  
      switch (filter) {
        case 'home':
          filtered = machineries;
          headingText = 'Home';
          break;
  
        case 'dc motors':
          filtered = machineries.filter(machine =>
            machine.typeofMachine.toLowerCase().includes('dc motor') ||
            machine.typeofMachine.toLowerCase().includes('ac/dc motor')
          );
          headingText = 'DC Motors';
          break;
  
        case 'alternator':
          filtered = machineries.filter(machine =>
            machine.typeofMachine.toLowerCase().includes('alternator')
          );
          headingText = 'Alternators';
          break;
  
        case 'induction motor':
          filtered = machineries.filter(machine =>
            machine.typeofMachine.toLowerCase().includes('induction motor')
          );
          headingText = 'Induction Motors';
          break;
  
        case 'transformers':
          filtered = machineries.filter(machine =>
            machine.typeofMachine.toLowerCase().includes('transformer')
          );
          headingText = 'Transformers';
          break;
  
        case 'dc generators':
          filtered = machineries.filter(machine =>
            machine.typeofMachine.toLowerCase().includes('dc generator')
          );
          headingText = 'DC Generators';
          break;
  
        default:
          filtered = machineries;
          headingText = 'All Machines';
      }
  
      // ✅ Update the heading and re-render the filtered machines
      mainHeading.textContent = headingText;
      renderMachines(filtered);
    });
  });
  
  

// Footer updates
document.getElementById("currentyear").textContent = `© ${new Date().getFullYear()} Loara Adyz Acosta`;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

let score = parseInt(localStorage.getItem('machineQuizScore')) || 0;
let currentIndex = 0;
let questions = [...machineries].sort(() => 0.5 - Math.random()); // shuffle

const questionEl = document.getElementById('question');
const imageEl = document.getElementById('quiz-image');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const quizForm = document.getElementById('quiz-form');

// Function to load a question
function loadQuestion() {
  if (currentIndex < questions.length) {
    const current = questions[currentIndex];
    questionEl.textContent = `What type of electrical machine does "${current.machineName}" use?`;
    imageEl.src = current.imageUrl;
    imageEl.style.display = "block";
    feedbackEl.textContent = "";
    quizForm.reset();
    scoreEl.textContent = `Score: ${score}/${questions.length}`;
  } else {
    // Quiz finished
    questionEl.textContent = "🎉 Quiz Complete!";
    imageEl.style.display = "none";
    feedbackEl.textContent = `Your final score is ${score}/${questions.length}`;
    localStorage.setItem('machineQuizScore', score);
    quizForm.style.display = "none";
  }
}

// Form submission
quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const answer = quizForm.answer.value;
  const correct = questions[currentIndex].typeofMachine;

  if (answer.toLowerCase() === correct.toLowerCase()) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `❌ Incorrect! The correct answer is ${correct}.`;
    feedbackEl.style.color = "red";
  }

  localStorage.setItem('machineQuizScore', score);

  currentIndex++;
  setTimeout(loadQuestion, 1500); // Load next question after 1.5 seconds
});

// Initialize quiz
loadQuestion();

const showQuizBtn = document.getElementById('show-quiz-btn');
const quizSection = document.querySelector('.quiz-section');

showQuizBtn.addEventListener('click', () => {
  quizSection.classList.toggle('active'); // show/hide the quiz
  showQuizBtn.textContent = quizSection.classList.contains('active')
    ? 'Hide Quiz'
    : 'Take the Quiz';
});
