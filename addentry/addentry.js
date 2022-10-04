// IMPORTS
import { createEntry, uploadImage } from '../fetch-utils.js';

// DOM
const entryForm = document.getElementById('add-entry-form');
const errorDisplay = document.getElementById('error-display');
const imageInput = document.getElementById('image-input');
const imagePlaceholder = document.getElementById('image-placeholder');

// STATE
let error = null;

// EVENTS

entryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(entryForm);
    const imageFile = formData.get('image');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `photos/$${randomFolder}/${imageFile.name}`;
    const url = await uploadImage('photos', imagePath, imageFile);

    const entry = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        contact: formData.get('contact'),
        image_url: url,
    };

    const response = await createEntry(entry);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('../');
    }
});

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        imagePlaceholder.src = URL.createObjectURL(file);
    } else {
        imagePlaceholder.src = '../assets/bulletin-board.png';
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
