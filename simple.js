document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate form inputs
        const name = document.getElementById('name').value;
        const location = document.getElementById('location').value;
        const phone = document.getElementById('phone').value;
        const rooms = document.getElementById('rooms').value;

        if (!name || !location || !phone || !rooms) {
            alert('Please fill all the fields.');
            return;
        }

        if (!/^\d+$/.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        if (rooms < 1) {
            alert('Please enter at least one room.');
            return;
        }

        // If validation passes, you can proceed with form submission or further processing
        console.log('Form submitted successfully');
        console.log('Name:', name);
        console.log('Location:', location);
        console.log('Phone:', phone);
        console.log('Rooms:', rooms);

        // Here you can add code to send the form data to the server
        // For demonstration, we'll just alert the user
        alert('Form submitted successfully!');
    });
});
