const modalConsult = () => {
    const consultBtn = document.querySelector('.consultation-btn'),
        popupConsult = document.querySelector('.popup-consultation'),
        popup = document.querySelectorAll('.popup'),
        captureForm = document.querySelectorAll('.capture-form'),
        directorForm = document.querySelector('.director-form');


    popup[3].addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close') || 
            target.classList.contains('popup')){
            popupConsult.style.display = 'none';
        }         
    });

    // Объединение двух объектов (данные калькулятора и данные заказчика) в один

    const question = {},
        customerData = {};

    
    consultBtn.addEventListener(('click'), () => {
        popupConsult.style.display = 'block';
        captureForm[4].addEventListener(('submit'), () => {
          const formData1 = new FormData(directorForm);
            formData1.forEach((val, key) => {
                question[key] = val;
            });
            const formData2 = new FormData(captureForm[4]);
            formData2.forEach((val, key) => {
                customerData[key] = val;
            });
            const requestCust = Object.assign(question, customerData);
            postData(requestCust);
        });
    }); 

    // Отправка данных на сервер

    const postData = (requestCust) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            
            if (request.readyState !==4) {
                return;
            }
            if (request.status === 200) {
                console.log('success');
            } else {
                console.error(request.status);
            }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        
        request.send(JSON.stringify(requestCust)); 
    };  
};

export default modalConsult;