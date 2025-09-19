const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {

    const li= document.createElement('li');
    const deleteBtn = document.createElement('button');

    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        list.appendChild(li);

        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
          });

        input.value = '';
        input.focus();
    }
});



