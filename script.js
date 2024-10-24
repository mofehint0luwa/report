// Define the inputs and outputs
const inputs = ['a', 's', 'd', 'f', 'g', 'h'];
const outputs = [...inputs]; // Outputs are the same as inputs

// Fisher-Yates Shuffle Algorithm to shuffle the outputs
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Shuffle the outputs
const shuffledOutputs = shuffle([...outputs]);

// Assign shuffled outputs to inputs
const result = {};
inputs.forEach((input, index) => {
    result[input] = shuffledOutputs[index];
});

// Inject the results into the HTML
const assignmentList = document.getElementById('assignment-list');
Object.entries(result).forEach(([input, output]) => {
    const listItem = document.createElement('li');
    listItem.className = 'assignment-item';
    listItem.innerHTML = `<span>${input}</span> -> ${output}`;
    assignmentList.appendChild(listItem);
});
