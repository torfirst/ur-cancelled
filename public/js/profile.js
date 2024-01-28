const backHandler = async (event) => {
    event.preventDefault();
    console.log('bye profile');

    document.location.replace('/');
      };

  
  
  document
    .querySelector('#backBtn')
    .addEventListener('click', backHandler);