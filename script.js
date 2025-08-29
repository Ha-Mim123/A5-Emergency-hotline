document.addEventListener('DOMContentLoaded', function () {
    // Heart Button Logic
    const heartButtons = document.querySelectorAll('.fa-regular.fa-heart');
    const bannerHeartCounter = document.querySelector('#heart-btn .counter');

    let heartCounter = 0;

    heartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Increment the heart count
            heartCounter++;

            // Update the heart counter in the banner
            bannerHeartCounter.textContent = heartCounter;

            // Update the heart icon in the card to solid heart
            this.classList.add('fa-solid');
            this.classList.remove('fa-regular');
        });
    });

    // Copy Button Logic
    const copyButtons = document.querySelectorAll('.card button'); // Select all the buttons inside cards
    const copyCounter = document.querySelector('#copy-btn .counter'); // The copy counter in the navbar
    let copyCount = parseInt(copyCounter?.textContent) || 0; // Get the current count from the navbar, default to 0 if not set

    copyButtons.forEach(button => {
        if (button.querySelector('i') && button.querySelector('i').classList.contains('fa-copy')) {
            // Check if the button contains a "copy" icon
            button.addEventListener('click', function () {
                // Get the service number from the card
                const card = this.closest('.card'); // Find the closest parent card
                const serviceNumber = card.querySelector('.service-nmbr').textContent; // Get the service number text
                
                // Create a temporary input field to copy the service number
                const tempInput = document.createElement('input');
                tempInput.value = serviceNumber; // Set the value of the input field to the service number
                document.body.appendChild(tempInput); // Append it to the body (temporarily)

                // Select the text inside the input field
                tempInput.select();
                tempInput.setSelectionRange(0, 99999); // For mobile devices

                // Execute the copy command
                document.execCommand('copy');

                // Remove the temporary input field
                document.body.removeChild(tempInput);

                // Show success alert for user feedback
                alert(`Copied service number: ${serviceNumber}`);

                // Increase the copy counter in the navbar
                copyCount++;
                copyCounter.textContent = copyCount; // Update the copy count in the navbar
            });
        }
    });

    // Call Button Logic
    const callButtons = document.querySelectorAll('.call-btn'); // all call buttons in cards
    const coinCounter = document.querySelector('#coin-btn .counter'); // the coin counter in the navbar
    const historyItemsContainer = document.getElementById('history-items'); // the container for history items

    let coins = parseInt(coinCounter?.textContent) || 100; // initial coin count from the navbar, default to 100 if not set

    callButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get service name and number for the card that the button belongs to
            const card = this.closest('.card'); // get the closest parent card element
            const serviceName = card.querySelector('h3').textContent; // get the service name
            const serviceNumber = card.querySelector('.service-nmbr').textContent; // get the service number

            // Check if there are enough coins for the call
            if (coins < 20) {
                alert("You don't have enough coins to make this call.");
                return; // terminate the process if coins are less than 20
            }

            // Reduce coins by 20
            coins -= 20;
            coinCounter.textContent = coins; // update coin count in the navbar

            // Show an alert with the service name and number
            alert(`Calling ${serviceName} at ${serviceNumber}`);

            // Get current date and time
            let now = new Date();
            let currentDate = now.toLocaleString(); // Converts date and time to a readable format

            // Add the service name, number, and current date to the call history section
            if (historyItemsContainer) {
                const historyItem = document.createElement('p');
                historyItem.textContent = `${serviceName} - ${serviceNumber} - ${currentDate}`;
                historyItemsContainer.appendChild(historyItem);
            }
        });
    });

    // Clear Button Logic for clearing history
    const clearButton = document.querySelector('#call-history button'); // Get the "Clear" button

    if (clearButton && historyItemsContainer) { // Only add the event listener if both elements exist
        clearButton.addEventListener('click', function () {
            // Clear all history items (p tags) inside the history-items container
            historyItemsContainer.innerHTML = '';

            alert('Call history cleared!');
        });
    }
});