// filter events that have been cancelled (eventStatus: Cancelled)
const addEventForm = document.getElementById('addEventForm');
const inviteEmailInput = document.getElementById('inviteEmailInput');
const eventTitleInput = document.getElementById('eventTitleInput');
const eventDate = document.getElementById('eventDate');
const addEventDescript = document.getElementById('addEventDescript');

const editEventBtn = document.getElementById('editEventBtn');
const updateEventBtn = document.getElementById('updateEventBtn');
const eventHeading = document.getElementById('eventHeading');
const eventDescript = document.getElementById('eventDescript');
const invitedUser = document.getElementById('invitedUser');
const cancelChangesBtn = document.getElementById('cancelChangesBtn');
// const cancelBtn = document.querySelectorAll('cancelBtn');
var cancelBtn = document.querySelectorAll('[id^="cancelBtn"]');
console.log(cancelBtn);
//query selector all all cancel butns and all other buttons
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
  cancelChangesBtn.classList.remove('hide');
  cancelBtn.classList.add('hide');
};

const updateEventDetails = () => {
  editEventBtn.classList.remove('hide');
  updateEventBtn.classList.add('hide');
  eventHeading.classList.remove('hide');
  eventDescript.classList.remove('hide');
  invitedUser.classList.remove('hide');
  editEventHeading.classList.add('hide');
  editEventDescript.classList.add('hide');
  editInvitedUser.classList.add('hide');
  cancelChangesBtn.classList.add('hide');
  cancelBtn.classList.remove('hide');
};

const cancelChanges = () => {
  editEventBtn.classList.remove('hide');
  updateEventBtn.classList.add('hide');
  eventHeading.classList.remove('hide');
  eventDescript.classList.remove('hide');
  invitedUser.classList.remove('hide');
  editEventHeading.classList.add('hide');
  editEventDescript.classList.add('hide');
  editInvitedUser.classList.add('hide');
  cancelChangesBtn.classList.add('hide');
  cancelBtn.classList.remove('hide');
};

const cancelEvent = async (eventId) => {
  const requestBody = {
    title: 'Capy Day',
    description: 'Gonna see monkeys',
    dateOfEvent: '2024-10-31T07:00:00.000Z',
    user_id_1: 1,
    user_id_2: 3,
    eventStatus: 'Scheduled',
    User_1_hasCancelled: false,
    User_2hasCancelled: false,
  };
  try {
    const response = await fetch('api/events', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      const foundObject = data.find((item) => item.id === eventId);
      const isCancelled = foundObject.eventStatus === 'Cancelled';
      const isScheduled = foundObject.eventStatus === 'Scheduled';
      const isPendingCancellation =
        foundObject.eventStatus === 'PendingCancellation';
      if (isCancelled) {
        alert(
          'this item has already been cancelled, ideally this card shouldnt even be showing up, but things slip through the cracks sometimes'
        );
      }
      if (isScheduled) {
        const requestBodyIsScheduled = {
          // title: 'Capy Day',
          // description: 'Gonna see monkeys',
          // dateOfEvent: '2024-10-31T07:00:00.000Z',
          // user_id_1: 1,
          // user_id_2: 3,
          eventStatus: 'PendingCancellation',
          User_1_hasCancelled: false,
          User_2hasCancelled: true,
        };
        // change event Status to be Pending cancellation via a post request
        // change user_BlankhasCancelled: true
        try {
          const response = await fetch(`api/events/${eventId}/cancel`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBodyIsScheduled),
          });

          if (response.ok) {
            alert('Event pending cancelled successfully');
            // You may want to update the UI or redirect the user after successful cancellation
          } else {
            const errorData = await response.json();
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An unexpected error occurred');
        }
      }
      if (isPendingCancellation) {
        // change event Status to be Cancelled via a post request
        // change bother user_1 and user_2 hascancelled to be true
        const requestBodyIsPendingCancellation = {
          // title: 'Capy Day',
          // description: 'Gonna see monkeys',
          // dateOfEvent: '2024-10-31T07:00:00.000Z',
          // user_id_1: 1,
          // user_id_2: 3,
          eventStatus: 'Cancelled',
          User_1_hasCancelled: true,
          User_2hasCancelled: true,
        };
        try {
          const response = await fetch(`api/events/${eventId}/cancel`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBodyIsPendingCancellation),
          });
          if (response.ok) {
            alert('Event has been cancelled successfully!');
            // You may want to update the UI or redirect the user after successful cancellation
          } else {
            const errorData = await response.json();
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      const errorData = await response.json();
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred');
  }
  //   try {
  //     const response = await fetch(`api/events/${eventId}/cancel`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(requestBody),
  //     });

  //     if (response.ok) {
  //       alert('Event cancelled successfully');
  //       // You may want to update the UI or redirect the user after successful cancellation
  //     } else {
  //       const errorData = await response.json();
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An unexpected error occurred');
  //   }
};

function addEvent(event) {
  event.preventDefault();
  const inviteEmail = inviteEmailInput.value;
  const title = eventTitleInput.value;
  const dateOfEvent = eventDate.value;
  const description = addEventDescript.value;

  if (inviteEmail && title && dateOfEvent && description) {
    fetch('/api/events/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inviteEmail, title, dateOfEvent, description }),
    }).then((data) => {
      console.log(data);
      if (data.ok) {
        location.reload();
      }
    });
  }
}

updateEventBtn.addEventListener('click', updateEventDetails);
editEventBtn.addEventListener('click', editEvent);
cancelChangesBtn.addEventListener('click', cancelChanges);
addEventForm.addEventListener('submit', addEvent);

function extractNumberFromString(str) {
  var length = str.length;
  var index = length - 1;

  while (index >= 0 && !isNaN(parseInt(str[index]))) {
    index--;
  }

  var numberString = str.substring(index + 1, length);
  var number = parseInt(numberString);

  return isNaN(number) ? null : number + 1;
}

cancelBtn.forEach(function (btn) {
  const eventId = extractNumberFromString(btn.id);
  btn.addEventListener('click', () => {
    cancelEvent(eventId);
  });
});

const coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', () => {
    coll[i].classList.toggle('active');
    const content = coll[i].nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('open');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
    }
  });
}

// Events.findAll().then((results) => {
//   const removeCanceledEvents = results.filter(
//     (event) => event.eventStatus !== 'Cancelled'
//   );
//   // next line remove results and replace with removeCanceledEvents
//   const formattedResults = results.map((result) => {
//     const options = {
//       weekday: 'long', // Full day name (e.g., Sunday)
//       month: 'short', // Abbreviated month name (e.g., Feb)
//       day: 'numeric', // Day of the month (e.g., 25)
//       year: 'numeric', // Full year (e.g., 2024)
//       hour: 'numeric', // Hour (e.g., 00)
//       minute: 'numeric', // Minute (e.g., 00)
//       timeZoneName: 'short', // Short time zone name (e.g., CST)
//     };

//     const formattedDate = result.dateOfEvent.toLocaleString('en-US', options);

//     return {
//       // Other fields from your model
//       dateOfEvent: formattedDate,
//     };
//   });
//   console.log(formattedResults);
// });

// Events.findAll().then((results) => {
//     const formattedResults = results.map((result) => {
//         const options = {
//             weekday: 'long', // Full day name (e.g., Sunday)
//             month: 'short',  // Abbreviated month name (e.g., Feb)
//             day: 'numeric',  // Day of the month (e.g., 25)
//             year: 'numeric', // Full year (e.g., 2024)
//             hour: 'numeric', // Hour (e.g., 00)
//             minute: 'numeric', // Minute (e.g., 00)
//             timeZoneName: 'short', // Short time zone name (e.g., CST)
//         };

//         const formattedDate = result.dateOfEvent.toLocaleString('en-US', options);

//         return {
//             dateOfEvent: formattedDate,
//         };
//     });
//     console.log(formattedResults);
// });

const cancelButtons = document.querySelectorAll('.cancelButton');
for (i = 0; i < cancelButtons.length; i++) {
  cancelButtons[i].addEventListener('click', () => {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      var particleCount = 50 * (timeLeft / duration); // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  });
}

const profileHandler = async (event) => {
  event.preventDefault();
  console.log('hello');

  document.location.replace('/profile');
};

document.querySelector('#profileBtn').addEventListener('click', profileHandler);
