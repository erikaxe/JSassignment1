
const taskForm = document.querySelector('.form')
const inputName = document.querySelector('.input-name');
const inputCourse = document.querySelector('.input-course');
const inputAuthor = document.querySelector('.input-author');
const btn = document.querySelector('.submit-btn');

const list = document.querySelector('.card-section')


/* Add input values and create new card in card-section + border changes on submit event */
taskForm.addEventListener('submit', function(e){ /* OBS: green border blir kvar efter submit eventet, KVAR ATT FIXA! Disable button when input empty + spinner, och bättre pic "generator" till korten, så varje får en egen bild om det finns tid */
    e.preventDefault()
    const inputName = document.querySelector('.input-name')
    const inputCourse = document.querySelector('.input-course')
    const inputAuthor = document.querySelector('.input-author')
    const input = document.querySelector('.input')
    console.log(inputName.value)
    
    if(inputName.value == ''){
        
        inputName.style.border = '3px solid red';
    }
    if(inputCourse.value == ''){
        
        inputCourse.style.border = '3px solid red';
    }
    if(inputAuthor.value == ''){
        
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
    e.preventDefault()
    const inputName = document.querySelector('.input-name')
    const inputCourse = document.querySelector('.input-course')
    const inputAuthor = document.querySelector('.input-author')
    if(inputName.value == ''){
        /* alert('you need text') */
        inputName.style.border = '3px solid red';
    }
    else if(inputName.value != ''){
        inputName.style.border = '3px solid green';
    }
    if(inputCourse.value == ''){
        /* alert('you need text') */
        inputCourse.style.border = '3px solid red';
    }
    else if(inputCourse.value != ''){
        inputCourse.style.border = '3px solid green';
    }
    if(inputAuthor.value == ''){
        /* alert('you need text') */
        inputAuthor.style.border = '3px solid red';
    }
    else if(inputAuthor.value != ''){
        inputAuthor.style.border = '3px solid green';
    }

})





































/* TRASHCAN */

/* function submitButtonOnOff(){
    state = {
        disabled: true
    }

    handleChange = (e) => {
        if(e.target.value.length > 1){
            this.setState({
                disabled: false
            });
        }
        else {
            this.setState({
                disabled: true
            });
        }
    }

} */


/* function disableButton() {
    if ($(inputName).val().length > 0 &&
        $(inputCourse).val().length > 0 &&
        $(inputAuthor).val().length > 0 &&
        $(input[type=submit]).prop('disable', false);
    }
}) */