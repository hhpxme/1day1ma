const listImage = document.querySelector(".list-image");
for (i = 0; i < 4; i++) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText(i + ".png");
    li.appendChild(img);
    listImage.appendChild(li);
}