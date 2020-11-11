
const taskForm = document.querySelector('.form')
const inputName = document.querySelector('.input-name');
const inputCourse = document.querySelector('.input-course');
const inputAuthor = document.querySelector('.input-author');
const btn = document.querySelector('.submit-btn');

const list = document.querySelector('.card-section')


/* Add input values and create new card in card-section + border changes on submit event */
taskForm.addEventListener('submit', function(e){ /* OBS: green border blir kvar efter submit eventet, keyup eventet verkar bättre, kolla upp! */
    e.preventDefault()
    const inputName = document.querySelector('.input-name')
    const inputCourse = document.querySelector('.input-course')
    const inputAuthor = document.querySelector('.input-author')
    const input = document.querySelector('.input')
    console.log(inputName.value)
    
    if(inputName.value == ''){
        /* alert('you need text') */
        inputName.style.border = '3px solid red';
    }
    if(inputCourse.value == ''){
        /* alert('you need text') */
        inputCourse.style.border = '3px solid red';
    }
    if(inputAuthor.value == ''){
        /* alert('you need text') */
        inputAuthor.style.border = '3px solid red';
    } 
    else {
        const todos = []
        todos.push(inputName.value, inputCourse.value, inputAuthor.value)
        /* Add card inside card-section */
        const htmlCode = `

        <div class="card-placeholder">
            <div class="card-top"></div>
            <div class="card-info">
                <div class="name-cont">
                    <h6 class="name-name">Name:</h6><p class="card-input-name">${inputName.value}</p>
                </div>
                <div class="course-cont">
                    <h6 class="course-name">Course:</h6><p class="card-input-course">${inputCourse.value}</p>
                </div>
                <div class="author-cont">
                    <h6 class="author-name">Author:</h6><p class="card-input-Author">${inputAuthor.value}</p>
                </div>
            </div>
        </div>
        `;

        /* list.innerHTML = htmlCode */
        list.innerHTML = list.innerHTML + htmlCode
        inputName.value = ''
        inputCourse.value = ''
        inputAuthor.value = ''
    }
    
})

taskForm.addEventListener('keyup',function(e){
    const inputName = document.querySelector('.input-name')
    const inputCourse = document.querySelector('.input-course')
    const inputAuthor = document.querySelector('.input-author')
    if(inputName.value == ''){
        /* alert('you need text') */
        inputName.style.border = '3px solid red';
    }
    else if(inputName.value > 0){
        inputName.style.border = '3px solid green';
    }
    if(inputCourse.value == ''){
        /* alert('you need text') */
        inputCourse.style.border = '3px solid red';
    }
    else if(inputCourse.value > 0){
        inputCourse.style.border = '3px solid green';
    }
    if(inputAuthor.value == ''){
        /* alert('you need text') */
        inputAuthor.style.border = '3px solid red';
    }
    else if(inputAuthor.value > 0){
        inputAuthor.style.border = '3px solid green';
    }
    
    else {
        list.innerHTML = list.innerHTML + htmlCode
        inputName.value = ''
        inputCourse.value = ''
        inputAuthor.value = ''
    }

})