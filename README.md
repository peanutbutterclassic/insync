
# InSync 
## About InSync
InSync is an online multidisciplinary educational game, which is designed to help users stay up to date with the current affairs as well as matters relating to STEM (Science, Technology, Engineering and Mathematics), Sports, Arts and Literature. 
The game comprises of four disciplines which are listed as follows:
1. Current affairs;
2. Sports;
3. STEM (Science, Technology, Engineering and Mathematics);
4. Arts, Humanity & Literature. 

The website is easy to navigate as it follows a [three-click rule](https://brand-experience.ieee.org/the-3-click-rule-myth-or-fact/) and provides ease of use for people with disability.

![Responsive Mockup](media/love_maths_mockup.png)

## Features 

This quiz game is easy to operate, thanks to its simple design. 

### Existing Features

- __The InSync Landing Page__

  - The LET'S PLAY button in the middle of the page is placed there on purpose to lure users to click this button first.

![LET'S PLAY](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/Landing_page.png)

- __Leaderboard Button__

  - This button takes user straight to the leaderboard page where all the scores are stored in a two column table that includes NAME and SCORE.

- __The Question section__

  - Upon clicking on the LET'S PLAY button, the user will be directed to the quiz page where he/she will have to answer ten randomly selected questions from a database of 60 questions covering four different disciplines which are as follows:
  1. Current affairs;
  2. Sports;
  3. STEM (Science, Technology, Engineering and Mathematics);
  4. Arts, Humanity & Literature.

![Quiz Area](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/Sample_question.png)

- __The Score Progress Area__

  - This feature helps the user keep track of the progress during the game. This feature includes indication based on the ten available questions selected at random. 
  - Each correct answer selected adds 100 points to the score tracker on the top right side of the quiz page. No point is reward for incorrect answer. 
  - Once the last question is answered, the game will move to the end page where user can enter a username to record the score to be viewed in the leaderboard. 
  - If a user is unhappy with the score, this is the moment to give it another try by clicking on the play again button. 
  - There is an option to return to the homepage if a user is unsatisfied with his/her performance and want to quit. That user may be tempted to give it another try once he/she gets back to the homepage. 

- __The Score Board__
![score](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/enter_username.png)

Upon completing the game, user can save their score and check in the leaderboard to see how well they did against all odds.

- __The Leaderboard Page__
![InSync Leaderboard](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/leaderboard.png)

  - This is an area reserved for those who scored the highest points during the quiz. 
  - The data is gather from the game session(s) and stored locally to present the top performers. 

### Features Left to Implement

- Since we are always looking to improve, any coder with a passion to promote education for all are encouraged to contribute to the following features:
  - Create a more interactive quiz that covers different areas of interests; 
  - Add more interactive sounds and technologies to the website;
  - Another feature worth including in the future is the implementation of a time system with different game type such as racing against time;
  - A score tracking system;
  - A timer (for speed reading of contents and answering questions);
  - A ranking system to create competition and engagement with prizes for top drawer;
  - Images to support the correct/incorrect answers;
  - User can create a username; and,
  - Feedback form.
- Other technologies to include:
  - JavaScript Libraries:
        - [JQuery](https://jquery.com/)
        - [ReactJS](https://reactjs.org/)
    - Javascript framework:
        - [Vue.js](https://vuejs.org/) 
    - Google Charts

## Testing 

Testing was well documented throughout the development of this project in order to indentify issues and solutions for the overall learning outcomes. 

Several notable brick walls that I have encountered during the development of this website are summarised below:
- One of the most notable issue was the glitch that occured with the number of questions available for each quiz session which should have been 10 questions but 11 questions came up (11 out of 10). To resolve this issue, since there was no way to check javascript like HTML or CSS validator, the debugging process involved going line by line using Google Chrome Developer tool, to inspect the issue and second guessing the problem and pressuming possible solutions. 
1. ![Glitch identified during debugging process](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/screen_error_image.png)
2. ![Glitch identified during debugging process](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/increm_error_spotted.png)
3. ![Glitch identified during debugging process](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/incremental_error_fixed.png)

Although the issue was apparent, as shown in image 1, but the solution did not come immediately. Figure 2 showed that the issue occured because of the nature of incrementation which meant [questionCounter > MAX_QUESTIONS] does not return a number less that 10. Instead, the following, as indicated in figure 3 [questionCounter === MAX_QUESTIONS], returned the right number of questions for the said issue identified in figure 1.

Another issue was identified while using Google Chrome Developer's tool during inspection of the website. 
![Sound issue](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/Sound_issue.png)

In the end, this particular issue was resolved by adding class="click" to every button that can be clicked. The javascript code is reported in script.js from line 409 to 422. 

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS
    - 93 errors were found when passing through the official [(Jigsaw) validator](http://www.css-validator.org/validator#errors)

    ![CSS errors](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/css_errors.png)

    - Having been through several comments in different developers' forums, the issue could be ignored since most of the errors were directed to errors for em, rem, vh, and vw values. 
    ![CSS error justification](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/css_validator.png)

- JavaScript
![JavaScript validation](https://raw.githubusercontent.com/peanutbutterclassic/insync/master/assets/images/javascript_validator.png)

- JavaScript validation showed 47 warnings when passing through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned: 
      - There are 15 functions in this file;
      - Function with the largest signature take 2 arguments, while the median is 0;
      - Largest function has 12 statements in it, while the median is 2; and,
      - The most complex function has a cyclomatic complexity value of 4 while the median is 1.
      

### Unfixed Bugs

The aim was to create a functioning quiz website. Major bug fixes have been performed and reported in the TESTING section. Considering the limited time left before deadline, addressing and fixing the validation of CSS and Javascript errors or warning shall be put on pending since the website is already working as expected. However, additional efforts will be allocated to improve the quality of the code after receiving comments from external review.  

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - The live link can be found here - [InSync](https://peanutbutterclassic.github.io/insync/)

## Credits 

A special mention to [Code Institute](https://codeinstitute.net/)'s tutoring team for their support throughout my coding development. My mentor Guido has been phenomenal because he has kept encouraging me to try new things. The w3schools' resources have helped me overcome many hurdles. [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3763s)' tutorial on YouTube has helped me gain an knowledge on the logic behind creating a quiz through HTML, CSS and JavaScript. 

### Content 

- A YouTube tutorial given by [Traversy Media](https://www.youtube.com/watch?v=6ophW7Ask_0) has helped me understand how to use modal box which I had combined with [w3schools](https://www.w3schools.com/howto/howto_css_modals.asp)'s tutorial to create my quiz page that pops up on the same page as the main page without having to use another page.
- Instructions on how to create a quiz using HTML, CSS and JavaScript [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3763s)

### Media

- Background image by [Miguel Á. Padriñán](https://www.pexels.com/photo/brown-and-pink-keychain-1111318/)

## Main Technologies
* Required: 
    * HTML, 
    * CSS, 
    * JavaScript.


## Reference
1. Online Python Tutor: Embeddable Web-Based Program Visualization for CS Education. ACM Technical Symposium on Computer Science Education (SIGCSE), 2013. [ACM DL]
2. [Quizzit](https://quizizz.com/join)

## Acknowledgement 
I want to thank Code Institute's tutorial team for their patience and support throughout my coding development. Finally, a shout out to my mentor Guido who has been phenomenal since I started coding. He has given me valuable guidance and support while ensuring I take that stride to be adventurous with new technologies.

## Reference
1. Online Python Tutor: Embeddable Web-Based Program Visualization for CS Education. ACM Technical Symposium on Computer Science Education (SIGCSE), 2013. [ACM DL]
2. [[Code Institute](https://codeinstitute.net/) Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3763s)'s tutorial on YouTube has helped me gain an knowledge on how quiz are created using codes.
3. [Web Dev Simplified](https://youtu.be/riDzcEQbX6k)
4. [The Guardian Sports](https://www.theguardian.com/sport/2021/jun/25/sports-quiz-week-euro-2020-jon-rahm-copa-america-joe-marler)
5. [Parade](https://parade.com/1221929/jessicasager/lgbtq-trivia/)
6. [Radio Times](https://www.radiotimes.com/quizzes/pub-quiz-science/)
7. Sound from [Zapslat](https://www.zapsplat.com/)
8. [Traversy Media](https://www.youtube.com/watch?v=6ophW7Ask_0)
9. [Photo by Chris F from Pexels](https://www.pexels.com/photo/a-broken-wooden-door-3714194/)
10. [Minna Nurmiluoto](https://dev.to/minna_xd/adding-a-high-score-table-to-javascript30-whack-a-mole-4adk)
11. [w3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
12. [Quizzit](https://quizizz.com/join)
13. [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3763s)
14. [Brad Wu](https://www.radiotimes.com/quizzes/pub-quiz-science/)
15. [Font Awesome](https://fontawesome.com/)

