const historyQuestions = [
    {
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "In which year did the Titanic sink?",
        choices: ["1912", "1911", "1913", "1914"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Who discovered America in 1492?",
        choices: ["Christopher Columbus", "Leif Erikson", "Ferdinand Magellan", "Marco Polo"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which empire was known as the 'Sick Man of Europe'?",
        choices: ["Ottoman Empire", "Austro-Hungarian Empire", "Roman Empire", "British Empire"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "What was the primary language of the Roman Empire?",
        choices: ["Latin", "Greek", "Italian", "Spanish"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who was the British Prime Minister during World War II?",
        choices: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Anthony Eden"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "In which city was the first atomic bomb dropped during WWII?",
        choices: ["Hiroshima", "Nagasaki", "Tokyo", "Kyoto"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        choices: ["France", "Germany", "Italy", "Spain"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What year did the Berlin Wall fall?",
        choices: ["1989", "1987", "1991", "1985"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        choices: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Angela Merkel"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which battle is considered the turning point of the American Civil War?",
        choices: ["Battle of Gettysburg", "Battle of Antietam", "Battle of Fort Sumter", "Battle of Bull Run"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Who wrote the 'I Have a Dream' speech?",
        choices: ["Martin Luther King Jr.", "Malcolm X", "Frederick Douglass", "Booker T. Washington"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What ancient civilization built the Machu Picchu?",
        choices: ["Inca", "Aztec", "Maya", "Olmec"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Who was the last Emperor of China?",
        choices: ["Puyi", "Qianlong", "Kangxi", "Hongwu"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which philosopher is known for the quote 'I think, therefore I am'?",
        choices: ["René Descartes", "Socrates", "Plato", "Aristotle"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Who was the first Emperor of Rome?",
        choices: ["Augustus", "Julius Caesar", "Nero", "Caligula"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which war was fought between the North and South regions in the United States?",
        choices: ["Civil War", "Revolutionary War", "War of 1812", "Spanish-American War"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who was the leader of the Soviet Union during World War II?",
        choices: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Leon Trotsky"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What ancient wonder was located in Egypt?",
        choices: ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Statue of Zeus at Olympia"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which treaty ended World War I?",
        choices: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Tordesillas"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
        choices: ["Mayflower", "Santa Maria", "Pinta", "Speedwell"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which empire did Charlemagne rule?",
        choices: ["Holy Roman Empire", "Byzantine Empire", "Frankish Empire", "Ottoman Empire"],
        correctAnswer: 2, difficulty: "MEDIUM"
    },
    {
        question: "Who was the primary author of the Declaration of Independence?",
        choices: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "James Madison"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who was the Queen of England during the Spanish Armada?",
        choices: ["Elizabeth I", "Mary I", "Victoria", "Anne"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which battle marked the end of Napoleon's rule?",
        choices: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Austerlitz", "Battle of Borodino"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Who was the last Tsar of Russia?",
        choices: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan the Terrible"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which country was known as the Prussia before becoming part of Germany?",
        choices: ["Germany", "Austria", "Switzerland", "Poland"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "What was the main language spoken in the Byzantine Empire?",
        choices: ["Greek", "Latin", "Arabic", "Turkish"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Who was the first President of the Republic of Turkey?",
        choices: ["Mustafa Kemal Atatürk", "Ismet Inönü", "Turgut Özal", "Recep Tayyip Erdoğan"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which year did World War II end?",
        choices: ["1945", "1944", "1943", "1942"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who was the first man to step on the moon?",
        choices: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "In what year did the Berlin Wall come down?",
        choices: ["1989", "1990", "1988", "1991"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Who was the first female pharaoh of ancient Egypt?",
        choices: ["Hatshepsut", "Cleopatra", "Nefertiti", "Sobekneferu"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What city was the capital of the Byzantine Empire?",
        choices: ["Constantinople", "Rome", "Athens", "Alexandria"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who was the leader of the Nazi Party during World War II?",
        choices: ["Adolf Hitler", "Joseph Goebbels", "Hermann Göring", "Heinrich Himmler"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What was the first dynasty of Imperial China?",
        choices: ["Qin", "Han", "Zhou", "Tang"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which conflict was known as 'The War to End All Wars'?",
        choices: ["World War I", "World War II", "The Korean War", "The Vietnam War"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Who was the longest reigning British monarch before Queen Elizabeth II?",
        choices: ["Queen Victoria", "King George III", "Queen Elizabeth I", "King Henry VIII"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which ancient civilization is known for building the Colosseum?",
        choices: ["Romans", "Greeks", "Egyptians", "Persians"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Who was the famous female pilot who disappeared over the Pacific Ocean in 1937?",
        choices: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which American President issued the Emancipation Proclamation?",
        choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Andrew Jackson"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What was the primary cause of the fall of the Western Roman Empire?",
        choices: ["Invasion by barbarian tribes", "Economic instability", "Military defeat by the Byzantines", "Plague"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Who was the first President of South Africa to be elected in a fully representative democratic election?",
        choices: ["Nelson Mandela", "F.W. de Klerk", "Thabo Mbeki", "Jacob Zuma"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What ancient civilization used cuneiform script?",
        choices: ["Sumerians", "Egyptians", "Romans", "Greeks"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Who was the main author of the Communist Manifesto?",
        choices: ["Karl Marx", "Vladimir Lenin", "Friedrich Engels", "Joseph Stalin"],
        correctAnswer: 0, difficulty: "HARD"
    }
];  // QUESTIONS = 45 ––>