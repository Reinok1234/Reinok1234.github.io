
function upload() {
 let text= document.getElementById('post')
 let stuff = document.getElementById('coolInput').value
 // Get the element
var elem = document.querySelector('#thediv');

// Create a copy of it
var clone = elem.cloneNode(true);

// Update the ID and add a class
clone.id = 'elem2';
clone.classList.add('text-large');

// Inject it into the DOM
elem.after(clone);
    text.textContent = (""+stuff+"");
  } 
