// A dictionary of responses based on various patterns (from notes).
const responses = {
    'hello|hi|hey': [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?"
    ],
    'you remind me of (.*)': [
        "Why do you think I remind you of {0}?",
        "What makes you think of {0} when talking to me?",
        "Is it a good feeling to be reminded of {0}?"
    ],
    '(.*) mother|father|family|parent(.*)': [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    '(.*) I need (.*)': [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?"
    ],
    '(.*) I am (.*)': [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    '(.*) I feel (.*)': [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
    ],
    '(.*) (sorry|apologize)(.*)': [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way."
    ],
    'bye|goodbye|exit': [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I’m here if you need to talk again."
    ],
    '(.*)': [
        "Can you tell me more?",
        "Why do you say that?",
        "How does that make you feel?",
        "What do you mean by that?",
        "Interesting... go on."
    ],
}

// A dictionary of reflections to swap words, e.g. "i" -> "you" (from notes).
const reflections = {
    "i": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "i",
    "your": "my",
    "yours": "mine",
    "are": "am",
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