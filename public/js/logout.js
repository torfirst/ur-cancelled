const logoutHandler = async (event) =>{
    event.preventDefault();
    document.location.replace('login');
    console.log('goodbye');
};

document
    .querySelector('#logout')
    .addEventListener('click', logoutHandler);
