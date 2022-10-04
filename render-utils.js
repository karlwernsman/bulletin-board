export function renderEntry(entry) {
    const li = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = entry.title;

    const p1 = document.createElement('p');
    p1.textContent = entry.description;

    const p2 = document.createElement('p');
    p2.textContent = entry.contact;

    const img = document.createElement('img');
    img.src = entry.image_url;

    li.append(h2, p1, p2, img);

    return li;
}
