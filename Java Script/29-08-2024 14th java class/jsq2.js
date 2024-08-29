// Function to fetch data asynchronously, takes a callback function as a parameter
function fetchData(callback) {
    // Simulate an asynchronous operation using setTimeout (e.g., fetching data from an API)
    setTimeout(() => {
        let data = 'Sample data'; // Simulated fetched data
        callback(data); // Execute the callback function with the fetched data
    }, 5000); // Delay of 1 second to mimic an async operation
}

// Arrow function used as a callback to handle the fetched data
let handleData = (data) => {
    console.log('Received:', data); // Log the received data to the console
};

// Call fetchData with handleData as the callback function
fetchData(handleData); // Output: "Received: Sample data" after 1 second
