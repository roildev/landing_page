const getStocks = () => {

    const btnAdd = document.querySelector('.add-sentence-btn'),
        stocks = document.querySelectorAll('.stocks');
    
    btnAdd.addEventListener(('click'), () => {
        stocks.forEach((e) => {
            e.classList.toggle('visible-lg');
            e.classList.toggle('visible-md');
            e.classList.toggle('visible-sm');
            e.classList.toggle('visible-xs');
        });

        btnAdd.style.display = 'none';
    });
};

export default getStocks;