// IMPORTS
import { createEntry } from '../fetch-utils.js';

// DOM
const entryForm = document.getElementById('add-entry-form');
const errorDisplay = document.getElementById('error-display');

// STATE
let error = null;

// EVENTS

entryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(entryForm);

    const entry = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
    };

    const response = await createEntry(entry);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('../');
    }
});

// DISPLAY
function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
