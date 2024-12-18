// A dictionary of responses based on various patterns (expanded from notes).
const responses = {
    'hello|hi|hey': [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?",
        "Hi! What’s going on with you today?",
        "Hey there! How can I support you?"
    ],
    'you remind me of (.*)': [
        "Why do you think I remind you of {0}?",
        "What makes you think of {0} when talking to me?",
        "Is it a good feeling to be reminded of {0}?",
        "How do you feel about being reminded of {0}?",
        "Do you often think about {0}?"
    ],
    '(.*) mother|father|family|parent(.*)': [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?",
        "What’s the relationship with your family like?",
        "Does your family often come to mind?"
    ],
    '(.*) friend|partner|relationship(.*)': [
        "What’s important to you in a relationship?",
        "How do your friends support you?",
        "Can you share more about your partner?",
        "How do your relationships shape your thoughts?",
        "What makes your friendships special to you?"
    ],
    '(.*) I need (.*)': [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?",
        "How would your life change with {1}?",
        "Do you think others also need {1}?"
    ],
    '(.*) I want (.*)': [
        "Why do you want {1}?",
        "Would getting {1} bring you happiness?",
        "What’s stopping you from having {1}?",
        "Do you often think about wanting {1}?",
        "What’s the first step you could take toward getting {1}?"
    ],
    '(.*) I am (.*)': [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?",
        "Does being {1} define you?",
        "How does being {1} affect your life?"
    ],
    '(.*) I feel (.*)': [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?",
        "Can you describe what feeling {1} is like?",
        "What do you think causes you to feel {1}?"
    ],
    '(.*) happy|joyful|excited(.*)': [
        "What’s bringing you happiness right now?",
        "That’s wonderful! How can you hold onto this feeling?",
        "What’s the most joyful part of this experience?",
        "Tell me more about what’s making you excited.",
        "How often do you feel this kind of happiness?"
    ],
    '(.*) sad|upset|angry|frustrated(.*)': [
        "I’m sorry to hear that. What’s contributing to this feeling?",
        "Is there anything you can do to ease this feeling?",
        "What do you think triggered this feeling?"
    ],
    '(.*) (sorry|apologize)(.*)': [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way.",
        "There’s no need to be sorry. Tell me more.",
        "Why do you feel the need to apologize?"
    ],
    'bye|goodbye|exit': [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I’m here if you need to talk again.",
        "Farewell! Hope to hear from you again.",
        "Goodbye! Remember, I’m always here for you."
    ],
    'why do you (.*)': [
        "Why do you think I {0}?",
        "What makes you ask that I {0}?",
        "Does it bother you that I {0}?",
        "Why do you want to know why I {0}?",
        "Have you thought about why you asked about {0}?"
    ],
    'do you (.*)': [
        "Why do you ask if I {0}?",
        "Does it matter to you if I {0}?",
        "What makes you curious about that?",
        "Do you think I should {0}?",
        "Why does this question interest you?"
    ],
    'are you (.*)': [
        "Do you think I am {0}?",
        "What does it mean to you if I were {0}?",
        "Why do you want to know if I am {0}?",
        "How would it affect you if I were {0}?",
        "What does being {0} mean to you?"
    ],
    'because (.*)': [
        "Is that the only reason?",
        "Why do you think that because {0}?",
        "How does {0} explain it?",
        "Does that fully explain it?",
        "What else could be the reason?"
    ],
    'I think (.*)': [
        "Why do you think {0}?",
        "What makes you believe that {0}?",
        "Have you always thought that {0}?",
        "Do others also think that {0}?",
        "What if {0} wasn’t true?"
    ],
    'why (.*)': [
        "Why do you think that’s the case?",
        "What makes you ask that question?",
        "What do you think is the reason?",
        "Why is that important to you?",
        "Can you explore why this is on your mind?"
    ],
    'what if (.*)': [
        "What makes you wonder about {1}?",
        "How would you feel if {1} happened?",
        "What’s the likelihood of {1}?",
        "What would change if {1} came true?",
        "Does thinking about {1} excite you or worry you?"
    ],
    '(.*)': [
        "Can you tell me more?",
        "Why do you say that?",
        "How does that make you feel?",
        "What do you mean by that?",
        "Interesting... go on.",
        "Can you elaborate on that?",
        "Why is that important to you?",
        "What else comes to mind when you think about that?"
    ]
};

// A dictionary of reflections to swap words, e.g. "i" -> "you" (expanded from notes).
const reflections = {
    "i": "you",
    "me": "you",
    "my": "your",
    "mine": "yours",
    "am": "are",
    "you": "i",
    "your": "my",
    "yours": "mine",
    "are": "am",
    "we": "you",
    "us": "you",
    "ours": "yours",
    "our": "your",
    "myself": "yourself",
    "yourself": "myself",
    "i'm": "you're",
    "you're": "I'm",
    "was": "were",
    "were": "was",
}

// Function to reflect responses.
// Adapted from notes:
/*
def reflect(text):
    words = text.lower().split()
    reflected_words = [reflections.get(word, word) for word in words]
    return " ".join(reflected_words)
*/
function reflect(text) {
    return text.toLowerCase().split(" ").map(word => reflections[word] || word).join(" ");
}

// Function to select a response based on the users input (adapted from notes)
function respond(user_input) {
    for (const [pattern, responses_list] of Object.entries(responses)) {
        const regex = new RegExp(pattern, 'i');
        const match = user_input.match(regex);

        // If match is found, return a random response from the list
        if (match) {
            const response = responses_list[Math.floor(Math.random() * responses_list.length)];
            const reflected_groups = match.slice(1).map(group => reflect(group || ""));
            return response.replace(/{(\d+)}/g, (_, index) => reflected_groups[index] || "");
        }
    }
    // Default response
    return "I'm not sure I understand. Can you elaborate?";
}

// Code for interacting with the HTML interface
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Function to add messages
    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(sender);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Handle user input
    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('user', "You: " + userMessage);
            const botResponse = respond(userMessage);
            addMessage('eliza', "Eliza: " + botResponse);
            userInput.value = '';
        }
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });

    // Initial message
    addMessage('eliza', "Eliza: Hello! How are you feeling today?");
});