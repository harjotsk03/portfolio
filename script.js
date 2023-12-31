const reloadButton = document.getElementById('reloadButton');
const projectsLink = document.getElementById('projectsLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');
const vancouverTimeElement = document.getElementById('vancouverTime');
const resumeButton = document.getElementById('resumeButton');

const goToPage = (page) => {
            console.log(`navigate to ${page}`);
            // Add logic to navigate to the specified page
};

const reload = () => {
            window.location.reload(); // Reloads the page
};

const fetchData = async () => {
            try {
                const response = await fetch('https://worldtimeapi.org/api/timezone/America/Vancouver');
                const data = await response.json();

                // Extract local time from the response
                const { datetime } = data;

                // Format the time and date
                const formattedDate = new Date(datetime).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                });

                const formattedTime = new Date(datetime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                });

                const formattedDateTime = `${formattedDate} ${formattedTime}`;
                vancouverTimeElement.textContent = formattedDateTime;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
};

        // Fetch data initially
fetchData();

        // Set up interval to fetch data every second
const intervalId = setInterval(() => {
            fetchData();
}, 1000);




