# Emerging Technologies

This repository contains my work for the Emerging Technologies class. It consists of two parts: a notebook called trigrams.ipynb and an eliza chatbot.

# Part 1: trigrams.ipynb

This notebook contains four tasks:

- ### Task 1: Third-order letter approximation model:
  For Task 1, I am tasked to select five free English works from Project Gutenberg. I then have to preprocess these texts by removing any preamble and postamble, and removing all characters except for ASCII letters, full stops, and spaces. Finally, I then have to make all letters uppercase.

  I then have to create a trigram model by counting the number of times each trigram (a sequence of three characters) appears. For example, "It is what it is." would become "IT IS WHAT IT IS" when processed. This will then give a trigram model like {'IT ': 2, 'T I': 3, ' IS': 2, 'IS ': 1, 'S W': 1, ' WH': 1, 'WHA': 1, 'HAT': 1, 'AT ': 1}.

  The output of this task is saved in this repository as task1trigrams.txt.
  
- ### Task 2: Third-order letter approximation generation:
  In this task, I have to use the model from task 1 to make a string with 10,000 characters, starting with "TH." For each new character, look at the last two characters to find matching trigrams in the model. Then, pick the next character randomly based on how often it appears in those trigrams.

  The output of this task is saved in this repository as task2randomstring.txt.
  
- ### Task 3. Analyze your model:
  For this task, I will use the list of English words available in the words.txt in this repository to determine the percentage of words in my 10,000 characters that are actual words in the English language.
  
- ### Task 4: Export your model as JSON
  For the final task, I have to export the model as a JSON file, which is saved in my repository as trigrams.json.

# Part 2: Eliza Chatbot

For this part, I have to create my own version of the ELIZA chatbot. All of the eliza files are stored in a folder titled "eliza" in this repository.

The chatbot interface includes a text box for user input and an area to display the conversation history. The user can talk to the chatbot, and if the message is in the chatbots list of responses, the chatbot will respond to what the user said. The chatbot will also reflect certain words, e.g. "i" -> "you". This makes the responses flow smoother.

The eliza chatbot is hosted on Github Pages: https://colinwilliamsgithub.github.io/emerging-technologies/

# References

Here is a list of resources that helped in completing these tasks:
- https://github.com/ianmcloughlin/2425_emerging_technologies/blob/main/02_language_models.ipynb
- https://www.geeksforgeeks.org/reading-and-writing-json-to-a-file-in-python/
- https://github.com/ianmcloughlin/2425_emerging_technologies/blob/main/03_eliza.ipynb
- https://github.com/actions/deploy-pages
