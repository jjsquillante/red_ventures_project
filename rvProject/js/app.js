    /* Declare variables */
    const btn = document.querySelectorAll('a.button');    
    const companyName = document.getElementById('md-title');
    const companyDescription = document.getElementById('modal-description');
    const modalPopup = document.getElementById('modal-1');
    const modalClose = document.getElementById('md-close');
    const navClick = document.getElementById('nav-btn--link');
    const toggleMenu = document.getElementById('nav--menu'); 
    const nav = document.querySelector('.nav'); 

    /* Display Modal */
    modalClose.addEventListener('click', () => {
      modalPopup.classList.toggle('md-show');
    });

    /* Display Navigation menu on mobile */
    navClick.addEventListener('click', (e) => {
      if (e.view.innerWidth <= 750) {
        nav.classList.toggle('is--padding-bottomless')
        toggleMenu.classList.toggle('is--hidden');
      }
    });

    /* - Add listener for each card
       - Fetch API to retrieve data based on companyID.
       - Populate company data in Modal and toggle modal display.
    **/
    btn.forEach((item) => {
       item.addEventListener('click', (e) => {
      
         return fetch('https://demo5004212.mockable.io/rvProject', {
          method: 'GET',
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
            }
         })
         .then((data) => { 
            return data.json(); 
          })
          .then((data) => {
            modalPopup.classList.toggle('md-show');
            data.dealers.forEach((dealerData) => {
              if (dealerData.data.companyID == e.target.dataset.id) {
                companyName.innerHTML = dealerData.data.name;
                companyDescription.innerHTML = `Fill out the form below and ${companyName.innerHTML} will get back to you soon.`;
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
       });
    });


/* Toggle SVG nav-icons */
Array.prototype.forEach.call(document.getElementsByClassName('radio-btn-checked'), (item) => {
  // if user clicks 'text' next to radio btn ==> apply toggle, as well.
  const parent = item.parentElement.parentElement;
  parent.addEventListener('click', function(e) {
    item.classList.toggle('is--invisible');
  });
});


/* TODO: Filter Logic */ 

/* TODO: Form Validation */