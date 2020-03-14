const modalCheck = () => {
    const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check'),
        popup = document.querySelectorAll('.popup');

    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });

    popup[2].addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close') || 
            target.classList.contains('popup')){
            popupCheck.style.display = 'none';
        }         
    });
};

export default modalCheck;