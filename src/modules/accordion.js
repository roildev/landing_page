const accordion = () => {
 
    // const panelCollapse = document.querySelectorAll('.panel-collapse'),
    //     collapseOne = document.getElementById('collapseOne-two'),
    //     collapseTwo = document.getElementById('collapseTwo-two'),
    //     collapseThree = document.getElementById('collapseThree-two'),
    //     collapsed = document.querySelectorAll('.collapsed');
        

    //     collapsed.forEach((elem) => {            

    //         if(elem.getAttribute('data-parent') === "#accordion-two"){
    //             elem.addEventListener('click', () => {
    //                 event.preventDefault();
    //                 let target = event.target;
    //                 console.log('target: ', target);

    //                 // collapseOne.classList.toggle('in');
    //                 // collapseTwo.classList.toggle('in');
    //                 // collapseThree.classList.toggle('in');
                    
    //             });              
    //         }            
    //     });  
    //};
    
    const accordeonTwoParent = document.querySelector('#accordion-two'),
        collapseOne = document.getElementById('collapseOne-two'),
        collapseTwo = document.getElementById('collapseTwo-two'),
        panelHeading = accordeonTwoParent.querySelectorAll('.panel-heading'),
        panelContent = document.querySelectorAll('.collapse');
        console.log('panelContent: ', panelContent[1]);

        panelHeading.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                event.preventDefault();
                let target = event.target;
                
                if (target.closest('.panel-heading')) {
                    console.log('ok')
                    collapseOne.classList.toggle('in');
                }
            });
        });
  
};

export default accordion;