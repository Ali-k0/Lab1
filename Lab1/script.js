// script.js
let inputValue ;
var descriptions = ["Margherita pizza", "luca pizza", "Mozzarella pizza"];
var imageArray = [];

var image1 = new Image();
image1.src = 'img/paz1.jpg';
imageArray.push(image1);

var image2 = new Image();
image2.src = 'img/piz2.jpg';
imageArray.push(image2);

var image3 = new Image();
image3.src = 'img/piz3.jpg';
imageArray.push(image3);

window.onload = function() {
    var imageContainer = document.getElementById('image-container');
    var divITem = document.getElementById('myDiv');

    imageArray.forEach(function(image, index) {
        var container = document.createElement('div');
        container.className = 'image-item';

        container.appendChild(image);

        var text = document.createElement('p');
        text.innerHTML = descriptions[index] || '';
        container.appendChild(text);

        var input = document.createElement('input');
        input.type = 'number';
        input.min = 0;
        input.value = 0;
        input.id = 'quantityInput_' + index;
        container.appendChild(input);

        var button = document.createElement('button');
        button.innerHTML = 'Add';
        button.id = 'addButton_' + index;
        var text2 = document.createElement('p');
        button.onclick = function() {
            var inputIndex = this.id.split('_')[1];
             inputValue = document.getElementById('quantityInput_' + inputIndex).value;
             
             text2.innerHTML =descriptions[inputIndex] + '| Antal: ' + inputValue || ''; 
        };
        divITem.appendChild(text2);
        container.appendChild(button);
    
        imageContainer.appendChild(container);

    });




};


