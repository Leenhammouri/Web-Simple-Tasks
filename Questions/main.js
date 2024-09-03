const plusBtns = document.querySelectorAll('.plus-btn');

plusBtns.forEach(plusBtn => {
    plusBtn.addEventListener('click', () => {
        const answer = plusBtn.parentElement.nextElementSibling;
        console.log(answer);
        const qa = plusBtn.parentElement.parentElement;
        console.log(qa);
        const questionDiv = plusBtn.parentElement;
        const plusIcon = plusBtn.querySelector('i');

        answer.classList.toggle('answer-div-show');
        qa.classList.toggle('qa-h');
        questionDiv.classList.toggle('question-div-show')

        if (plusIcon.classList.contains('fa-plus')) {
            plusIcon.classList.remove('fa-plus');
            plusIcon.classList.add('fa-minus');
        } else {
            plusIcon.classList.remove('fa-minus');
            plusIcon.classList.add('fa-plus');
        }


    });
});

