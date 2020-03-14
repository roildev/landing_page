const accordion = () => {

    const accordeonTwo = document.querySelector('#accordion-two'),
    panelHeading = accordeonTwo.querySelectorAll('.panel-heading'),
    panelCollapse = accordeonTwo.querySelectorAll('.panel-collapse');
    
    panelHeading.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            let target = event.target.closest('.panel');

            panelCollapse.forEach((section) => {
                if(target.contains(section)){                    
                    section.classList.add('in');
                } else {
                    section.classList.remove('in');
                }                
            }); 
        });    
    });  
};

export default accordion;