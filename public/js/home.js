
const editEventBtn = document.getElementById('editEventBtn');
const updateEventBtn = document.getElementById('updateEventBtn');
const eventHeading = document.getElementById("eventHeading");
const eventDescript = document.getElementById("eventDescript");
const invitedUser = document.getElementById("invitedUser");
const editEventHeading = document.getElementById('editEventHeading');
const editEventDescript = document.getElementById('editEventDescript');
const editInvitedUser = document.getElementById('editInvitedUser');

const editEvent = () => {
    editEventBtn.classList.add('hide');
    updateEventBtn.classList.remove('hide');
    eventHeading.classList.add('hide');
    eventDescript.classList.add('hide');
    invitedUser.classList.add('hide');
    editEventHeading.classList.remove('hide');
    editEventDescript.classList.remove('hide');
    editInvitedUser.classList.remove('hide');
};

editEventBtn.addEventListener('click', editEvent);

const updateEventDetails = () => {
    editEventBtn.classList.remove('hide');
    updateEventBtn.classList.add('hide');
    eventHeading.classList.remove('hide');
    eventDescript.classList.remove('hide');
    invitedUser.classList.remove('hide');
    editEventHeading.classList.add('hide');
    editEventDescript.classList.add('hide');
    editInvitedUser.classList.add('hide');
}

updateEventBtn.addEventListener('click', updateEventDetails);


const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", () => {
        coll[i].classList.toggle("active");
        const content = coll[i].nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove("open");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("open");
        }
    });
}