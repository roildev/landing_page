const sendForms = () => {

    const successMessage = 'Спасибо, мы с вами свяжемся!',
        errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...';
    
    const form = document.querySelector('.main-form');

    const statusMesage = document.createElement('div');
    statusMesage.style.cssText = `font-size: 2,3rem`;
    

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMesage);

        const request = new XMLHttpRequest();
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'multipart/form -data');

        const formData = new FormData(form);
        request.send(formData);

    });


}

export default sendForms;