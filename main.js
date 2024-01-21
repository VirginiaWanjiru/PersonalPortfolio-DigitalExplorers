const text = `
    I am a dedicated and detail-oriented recent IT undergraduate specializing in Software Engineering, eager to
    leverage academic excellence and hands-on experience to enhance organizational efficiency through IT solutions.
    Proficient in analytical thinking and problem-solving, with a track record of successfully executing IT projects.
    Demonstrates a strong ability to apply theoretical knowledge to practical situations, showcasing a proactive
    attitude and a collaborative team spirit. Seeking an opportunity in software engineering to contribute to projects
    and continue professional development to grow in my career while contributing to company’s goals and
    objectives.
`;

let index = 0;
const typingTextElement = document.getElementById('typing-text');

function type() {
    typingTextElement.innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
        setTimeout(type, 20); // Adjust the typing speed by changing the timeout value
    }
}

// To start typing when the page loads
window.onload = function () {
    type();
};
