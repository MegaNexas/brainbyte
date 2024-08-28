Welcome to the BrainByte Project!

Thanks for checking out the BrainByte project! This is my first attempt at creating a full-fledge "game" that has a functiong gameloop containing a beginning and ending. This file will serve as your friendly guide on how to add more question topics and expand the question pool.

---

**Adding Questions to the Pool**
1. Open an Existing Topic Questions File
- Pick one you find interesting and add more questions to your liking!!
- To add more questions, just follow this format:
   //scienceQuestions.js
   const scienceQuestions = [
       {
           question: "What is the chemical symbol for water?",
           choices: ["H2O", "CO2", "O2", "NaCl"], //choices: ["0", "1", "2", "3"], (do not forget the comma at the end for every property)
           correctAnswer: 0, Difficulty: "HARD",
// Index of the correct answer in the choices array. starts from 0, then 1,2,3. So the correct answer for this questions is "H2O" which is the first item in the order.
       },
       // Existing questions

       // Add more questions here
   ];



**Adding More Question Topic JavaScript Files**

1. Create a New JavaScript File
- Name it something that makes sense for your topic, e.g., `mathQuestions.js` or `literatureQuestions.js`.
2. Create New Questions
- Create new questions based on the topic you have made. I recommend that you follow this ideology when creating questions.
Difficulty:
EASY: Questions that most regular students can answer.
MEDIUM: Questions that most regular adult's can answer.
HARD: Questions that most experts in that specific "subject" can answer.



**Reference the New Files** (If you have made a new topic file)
1. Update the "script.js" file
- Make sure to include your new topic arrays in the main "script.js". Here's how:
   //script.js
   const allQuestions = [...scienceQuestions, ...historyQuestions, ...geographyQuestions, ...mathQuestions,    ...literatureQuestions];
   //This can be found in line 13 if you somehow couldn't find it.

2. Update the "index.html" file
- Open the index.html file using your prefered IDE (or using notepad) and reference any new Topic Files you have made by adding a new line among the existing ones.
//example:
   <script src="scienceQuestions.js"></script>
   <script src=" (add the new topic file name here) "></script>
   <script src="historyQuestions.js"></script>

3. Update the "script.js" file
- Open the index.html file using your prefered IDE (or using notepad) and reference any new Topic Files you have made by adding a new line among the existing ones.
//example:
    const allQuestions = {
        SCIENCE: [...scienceQuestions],
        HISTORY: [...historyQuestions],
        GEOGRAPHY: [...geographyQuestions],
        //Reference new file here. example: SCIFI: [...sciencefictionQuestions],
        ALL: [...scienceQuestions, ...historyQuestions, ...geographyQuestions, //add the file name here. example: ...sciencefictionQuestions(the last file name in the order should not end with a comma.
        ]
    };
    let filteredQuestions = [];



**Test The Project**
- Once you have done the deed, you can either launch another instance of the project in the browser of your choosing or just refresh an already created instance of the project.



I hope you enjoy my first actual attempt at a "game" (if you consider it as one). You can use and copy the code in this project as well as any of the questions if you find it useful.

CONTACT-ME: meganexas@gmail.com
TWITTER: @MegaNexas_
DISCORD: meganexas