const scienceQuestions = [
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "What planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the powerhouse of the cell?",
        choices: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "What is the atomic number of carbon?",
        choices: ["6", "8", "12", "14"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the chemical formula for table salt?",
        choices: ["NaCl", "KCl", "NaF", "KBr"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who is known as the father of modern physics?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: 1, difficulty: "MEDIUM"
    },
    {
        question: "What is the speed of light in vacuum?",
        choices: ["300,000 km/s", "150,000 km/s", "75,000 km/s", "600,000 km/s"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What element has the chemical symbol 'Fe'?",
        choices: ["Iron", "Gold", "Lead", "Silver"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "What is the first element on the periodic table?",
        choices: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
        correctAnswer: 2, difficulty: "EASY"
    },
    {
        question: "What particle in an atom has a positive charge?",
        choices: ["Proton", "Neutron", "Electron", "Photon"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the unit of electrical resistance?",
        choices: ["Ohm", "Volt", "Ampere", "Watt"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What type of bond is formed between two hydrogen atoms in a hydrogen molecule?",
        choices: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Van der Waals bond"],
        correctAnswer: 1, difficulty: "HARD"
    },
    {
        question: "Which scientist is credited with the discovery of penicillin?",
        choices: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the most common isotope of hydrogen?",
        choices: ["Protium", "Deuterium", "Tritium", "Quadrium"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which planet in our solar system has the most moons?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "What is the main gas found in the air we breathe?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "What is the pH value of pure water?",
        choices: ["5", "7", "9", "11"],
        correctAnswer: 1, difficulty: "MEDIUM"
    },
    {
        question: "Which vitamin is produced when the human skin is exposed to sunlight?",
        choices: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: 3, difficulty: "MEDIUM"
    },
    {
        question: "What is the second most abundant element in the Earth's crust?",
        choices: ["Oxygen", "Silicon", "Aluminum", "Iron"],
        correctAnswer: 1, difficulty: "HARD"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "What planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the powerhouse of the cell?",
        choices: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "What is the atomic number of carbon?",
        choices: ["6", "8", "12", "14"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the chemical formula for table salt?",
        choices: ["NaCl", "KCl", "NaF", "KBr"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who is known as the father of modern physics?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: 1, difficulty: "MEDIUM"
    },
    {
        question: "What is the speed of light in vacuum?",
        choices: ["300,000 km/s", "150,000 km/s", "75,000 km/s", "600,000 km/s"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What element has the chemical symbol 'Fe'?",
        choices: ["Iron", "Gold", "Lead", "Silver"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "What is the first element on the periodic table?",
        choices: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
        correctAnswer: 2, difficulty: "EASY"
    },
    {
        question: "What particle in an atom has a positive charge?",
        choices: ["Proton", "Neutron", "Electron", "Photon"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the unit of electrical resistance?",
        choices: ["Ohm", "Volt", "Ampere", "Watt"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What type of bond is formed between two hydrogen atoms in a hydrogen molecule?",
        choices: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Van der Waals bond"],
        correctAnswer: 1, difficulty: "HARD"
    },
    {
        question: "Which scientist is credited with the discovery of penicillin?",
        choices: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the most common isotope of hydrogen?",
        choices: ["Protium", "Deuterium", "Tritium", "Quadrium"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which planet in our solar system has the most moons?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "What is the main gas found in the air we breathe?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "What is the pH value of pure water?",
        choices: ["5", "7", "9", "11"],
        correctAnswer: 1, difficulty: "MEDIUM"
    },
    {
        question: "Which vitamin is produced when the human skin is exposed to sunlight?",
        choices: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: 3, difficulty: "MEDIUM"
    },
    {
        question: "What is the second most abundant element in the Earth's crust?",
        choices: ["Oxygen", "Silicon", "Aluminum", "Iron"],
        correctAnswer: 1, difficulty: "HARD"
    },
    {
        question: "What is the study of fungi called?",
        choices: ["Bacteriology", "Virology", "Mycology", "Phycology"],
        correctAnswer: 2, difficulty: "HARD"
    },
    {
        question: "What type of rock is granite?",
        choices: ["Igneous", "Sedimentary", "Metamorphic", "Volcanic"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the main function of red blood cells?",
        choices: ["Fight infection", "Transport oxygen", "Clot blood", "Regulate temperature"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "Which organelle is responsible for photosynthesis?",
        choices: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Gd", "Go"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which gas is released by plants during photosynthesis?",
        choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "What is the rarest naturally occurring element on Earth?",
        choices: ["Francium", "Astatine", "Technetium", "Promethium"],
        correctAnswer: 1, difficulty: "HARD"
    },
    {
        question: "What is the most common gas in the universe?",
        choices: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        correctAnswer: 1, difficulty: "MEDIUM"
    }
];  // QUESTIONS = 53 ––>