let button = document.querySelector(".submit");
let image = document.querySelector("img");
let container = document.querySelector('.container');

function loadImage() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'api.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let data = JSON.parse(this.responseText);
            // console.log(data);
            let random = Math.floor(Math.random()*(data.length+1));
            let name = data[random].name;
            name = name.toUpperCase()
            let tag = data[random].tag;
            
            container.innerHTML = `
                <img src=${data[random].img} class="img">
                <br>
                <div class="name--of--personality">${name}</div>
                 <div class="tag--name">${tag}</div>
            `
        }
    }
    xhr.send();
}


button.addEventListener('click', loadImage)