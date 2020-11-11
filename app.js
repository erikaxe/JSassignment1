
const inputName = document.querySelector('.input-name');
const inputCourse = document.querySelector('.input-course');
const inputAuthor = document.querySelector('.input-author');
const btn = document.querySelector('.submit-btn');
const taskForm = document.querySelector('.form')
const list = document.querySelector('.card-section')


/* Add input values and create new card in card-section */
taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    const inputName = document.querySelector('.input-name')
    const inputCourse = document.querySelector('.input-course')
    const inputAuthor = document.querySelector('.input-author')
    console.log(inputName.value)
    
    if(inputName.value == ''){
        alert('you need text')
    }
    if(inputCourse.value == ''){
        alert('you need text')
    }
    if(inputAuthor.value == ''){
        alert('you need text')
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