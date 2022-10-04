/* Imports */
import { getEntries } from './fetch-utils.js';
import { renderEntry } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const entryList = document.getElementById('board');
const errorDisplay = document.getElementById('error-display');

/* State */
let error = null;
let entries = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getEntries();
    error = response.error;
    entries = response.data;

    if (error) {
        displayError();
    }

    if (entries) {
        displayEntries();
    }
});

/* Display Functions */
function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayEntries() {
    entryList.innerHTML = '';

    for (const entry of entries) {
        const entryEl = renderEntry(entry);
        entryList.append(entryEl);
    }
}
