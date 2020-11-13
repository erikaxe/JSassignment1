
const taskForm = document.querySelector('.form')
const inputName = document.querySelector('.input-name');
const inputCourse = document.querySelector('.input-course');
const inputAuthor = document.querySelector('.input-author');
const list = document.querySelector('.card-section')
const button = document.querySelector('.submit-btn')
const input = document.querySelectorAll('.input')
const spinner = document.querySelector('.spinner')

/* Add input values and create new card in card-section + border changes on submit event + spinner*/
taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    const inputName = document.querySelector('.input-name')
    const inputCourse = document.querySelector('.input-course')
    const inputAuthor = document.querySelector('.input-author')
    /* Change spinner to "inline from none" */
    spinner.style.display = 'inline'
    
    if(inputName.value == ''){
        
    }
    if(inputCourse.value == ''){
        
        
    }
    if(inputAuthor.value == ''){
        
    } 
    else {
        /* "Revert" inline to none after 4 seconds */
        setTimeout(() =>{
            spinner.style.display = 'none'
        }, 4000)
        
        /* Delay the card submit for 4 seconds */
        setTimeout(() =>{
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
            taskForm.reset();
            
            let color = 'rgb(243, 154, 138)';
            inputName.style.borderColor = color;
            inputCourse.style.borderColor = color;
            inputAuthor.style.borderColor = color;

        }, 4000)
    }
})

taskForm.addEventListener('keyup',function(e){
    e.preventDefault()
    const inputName = document.querySelector('.input-name')
    const inputCourse = document.querySelector('.input-course')
    const inputAuthor = document.querySelector('.input-author')
    if(inputName.value == ''){
        
        inputName.style.border = '3px solid red';
    }
    else if(inputName.value != ''){
        inputName.style.border = '3px solid green';
    }
    if(inputCourse.value == ''){
        inputCourse.style.border = '3px solid red';
    }
    else if(inputCourse.value != ''){
        inputCourse.style.border = '3px solid green';
    }
    if(inputAuthor.value == ''){
        inputAuthor.style.border = '3px solid red';
    }
    else if(inputAuthor.value != ''){
        inputAuthor.style.border = '3px solid green';
    }
})

/* Remove 'disabled' from button in htmlCode */
taskForm.addEventListener('input',() => {
    if (inputName.value.length > 0 &&
        inputCourse.value.length > 0 &&
        inputAuthor.value.length > 0) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
    }
});