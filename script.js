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



function downloadPDF() {
    // Create a link element
    var link = document.createElement('a');
    // Set the href attribute to the path of your PDF file
    link.href = 'harjotKoonerResume.pdf';
    // Set the download attribute with a desired filename
    link.download = 'Harjot Kooner Resume.pdf';
    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);
    // Trigger a click on the link to start the download
    link.click();
    // Remove the link from the body (cleanup)
    document.body.removeChild(link);
}


document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
  
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    scrollToTopButton.addEventListener("click", function () {
      smoothScrollToTop();
    });
  
    function smoothScrollToTop() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 16);
      }
    }
  });
  

