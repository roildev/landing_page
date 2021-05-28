const modalWindow1 = () => {

    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call'),
        popup = document.querySelector('.popup');

    for (let i = 0; i < callBtn.length; i++){
        
        callBtn[i].addEventListener('click', () => {
            if (callBtn[i].matches('button')){
                return;
            }
            popupCall.style.display = 'block';
        });
    }

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close') || 
            target.classList.contains('popup')){
            popupCall.style.display = 'none';
        } 
        
    });
    

};

export default modalWindow1;