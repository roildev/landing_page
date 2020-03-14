const modalDiscount = () => {
 
     const discountBtn = document.querySelectorAll('.discount-btn'),
     popupDiscount = document.querySelector('.popup-discount'),
     popup = document.querySelectorAll('.popup');
    
     for(let i = 0; i < discountBtn.length; i++){
        discountBtn[i].addEventListener('click', () => {
            popupDiscount.style.display = 'block';
        });
     }
     
     popup[1].addEventListener('click', (event) => {
        let target = event.target;
        console.log('target: ', target);

        if(target.classList.contains('popup-close') || 
            target.classList.contains('popup')){
            popupDiscount.style.display = 'none';
        } 
        
    });


};

export default modalDiscount;