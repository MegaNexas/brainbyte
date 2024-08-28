const geographyQuestions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which river is the longest in the world?",
        choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which country is the largest by land area?",
        choices: ["Russia", "Canada", "China", "United States"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the smallest country in the world by area?",
        choices: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which mountain is the tallest in the world?",
        choices: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which desert is the largest in the world?",
        choices: ["Sahara", "Arabian", "Gobi", "Kalahari"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "In which country is the city of Timbuktu located?",
        choices: ["Mali", "Niger", "Chad", "Nigeria"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "What is the capital city of Australia?",
        choices: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        correctAnswer: 1, difficulty: "EASY"
    },
    {
        question: "Which sea is the saltiest?",
        choices: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Baltic Sea"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the largest island in the world?",
        choices: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which country has the most time zones?",
        choices: ["Russia", "USA", "France", "Canada"],
        correctAnswer: 2, difficulty: "HARD"
    },
    {
        question: "What is the longest mountain range in the world?",
        choices: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "In which country would you find the Great Victoria Desert?",
        choices: ["Australia", "South Africa", "Namibia", "Brazil"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the capital of Mongolia?",
        choices: ["Ulaanbaatar", "Astana", "Bishkek", "Tashkent"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which ocean is the largest by surface area?",
        choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which country has the longest coastline in the world?",
        choices: ["Canada", "Australia", "Russia", "Indonesia"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which is the largest continent by land area?",
        choices: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the deepest point in the world's oceans?",
        choices: ["Mariana Trench", "Tonga Trench", "Java Trench", "Philippine Trench"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "What is the capital of Brazil?",
        choices: ["Brasilia", "Rio de Janeiro", "São Paulo", "Salvador"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["Japan", "China", "South Korea", "Thailand"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the capital of Iceland?",
        choices: ["Reykjavik", "Oslo", "Helsinki", "Copenhagen"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which river flows through Paris?",
        choices: ["Seine", "Thames", "Danube", "Rhine"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which is the second-largest country in South America by land area?",
        choices: ["Argentina", "Brazil", "Peru", "Colombia"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which U.S. state is the largest by area?",
        choices: ["Alaska", "Texas", "California", "Montana"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the official language of Egypt?",
        choices: ["Arabic", "English", "French", "Spanish"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which country is the largest producer of coffee in the world?",
        choices: ["Brazil", "Colombia", "Vietnam", "Ethiopia"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the capital of Kazakhstan?",
        choices: ["Astana", "Almaty", "Tashkent", "Bishkek"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "What is the highest waterfall in the world?",
        choices: ["Angel Falls", "Victoria Falls", "Niagara Falls", "Yosemite Falls"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which desert covers much of northern Africa?",
        choices: ["Sahara", "Gobi", "Kalahari", "Mojave"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which country is known as the Land of Fire and Ice?",
        choices: ["Iceland", "New Zealand", "Japan", "Canada"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "What is the longest river in Europe?",
        choices: ["Volga", "Danube", "Rhine", "Elbe"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which country is the largest in Africa by land area?",
        choices: ["Algeria", "Nigeria", "Egypt", "South Africa"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which mountain range separates Europe from Asia?",
        choices: ["Ural Mountains", "Himalayas", "Rocky Mountains", "Andes"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which city is known as the City of Canals?",
        choices: ["Venice", "Amsterdam", "St. Petersburg", "Bangkok"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the name of the large desert located in northern Chile?",
        choices: ["Atacama Desert", "Karakum Desert", "Gobi Desert", "Kalahari Desert"],
        correctAnswer: 0, difficulty: "HARD"
    },
    {
        question: "Which island nation is located off the southeast coast of Africa?",
        choices: ["Madagascar", "Mauritius", "Seychelles", "Comoros"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which country is home to the ancient city of Petra?",
        choices: ["Jordan", "Egypt", "Turkey", "Iran"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which is the largest lake by surface area in Africa?",
        choices: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the capital of Argentina?",
        choices: ["Buenos Aires", "Santiago", "Montevideo", "Lima"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which country is known as the Emerald Isle?",
        choices: ["Ireland", "Scotland", "New Zealand", "Australia"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "Which ocean lies to the east of Africa?",
        choices: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: 0, difficulty: "EASY"
    },
    {
        question: "What is the smallest continent by land area?",
        choices: ["Australia", "Europe", "Antarctica", "South America"],
        correctAnswer: 0, difficulty: "MEDIUM"
    },
    {
        question: "Which country has the most islands?",
        choices: ["Sweden", "Canada", "Indonesia", "Norway"],
        correctAnswer: 0, difficulty: "HARD"
    }
];  // QUESTIONS = 0 ––>