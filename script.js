function postDoubt() {
    const email = document.getElementById('email').value;
    const title = document.getElementById('doubtTitle').value;
    const content = document.getElementById('doubtContent').value;

    if (email && title && content) {
        const doubtsContainer = document.getElementById('doubtsContainer');

        // Create doubt element
        const doubtDiv = document.createElement('div');
        doubtDiv.classList.add('doubt');

        // Create email, title, and content
        const doubtEmail = document.createElement('p');
        doubtEmail.textContent = `Posted by: ${email}`;

        const doubtTitle = document.createElement('h3');
        doubtTitle.textContent = title;

        const doubtContent = document.createElement('p');
        doubtContent.textContent = content;

        // Create answers section
        const answersDiv = document.createElement('div');
        answersDiv.classList.add('answers');

        // Create answer form
        const answerForm = document.createElement('div');
        answerForm.classList.add('answer-form');

        const answerInput = document.createElement('textarea');
        answerInput.rows = 2;
        answerInput.placeholder = "Type your answer here...";

        const answerButton = document.createElement('button');
        answerButton.textContent = "Post Answer";
        answerButton.onclick = function() {
            const answerContent = answerInput.value;
            if (answerContent) {
                const answerDiv = document.createElement('div');
                answerDiv.classList.add('answer');
                answerDiv.textContent = answerContent;
                answersDiv.appendChild(answerDiv);
                answerInput.value = ""; // Clear input after posting
            } else {
                alert('Please write an answer before posting.');
            }
        };

        // Append email, title, content, answers, and answer form to the doubt element
        doubtDiv.appendChild(doubtEmail);
        doubtDiv.appendChild(doubtTitle);
        doubtDiv.appendChild(doubtContent);
        doubtDiv.appendChild(answersDiv);
        answerForm.appendChild(answerInput);
        answerForm.appendChild(answerButton);
        doubtDiv.appendChild(answerForm);

        // Add doubt to the container
        doubtsContainer.prepend(doubtDiv); // Add to the top of the list

        // Update the newest doubt in the sidebar
        updateNewestDoubt(title, content);

        // Clear input fields
        document.getElementById('email').value = '';
        document.getElementById('doubtTitle').value = '';
        document.getElementById('doubtContent').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

function updateNewestDoubt(title, content) {
    const newestDoubtDiv = document.getElementById('newestDoubt');
    newestDoubtDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}
