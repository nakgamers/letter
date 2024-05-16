document.addEventListener("DOMContentLoaded", function() {
    // Set the release date and close date here in WIB (UTC+7)
    const releaseDate = new Date('2024-05-17T21:00:00+07:00');
    const closeDate = new Date('2024-05-18T12:00:00+07:00');
    const container = document.getElementById('container');
    const message = document.createElement('div');
    message.id = 'message';
    document.body.appendChild(message);

    function checkDate() {
        const now = new Date();
        const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000); // Convert to UTC
        const releaseDateUTC = new Date(releaseDate.getTime() - 7 * 60 * 60000); // Convert WIB to UTC
        const closeDateUTC = new Date(closeDate.getTime() - 7 * 60 * 60000); // Convert WIB to UTC

        if (nowUTC >= releaseDateUTC && nowUTC <= closeDateUTC) {
            container.style.display = 'block';
            message.style.display = 'none';
        } else if (nowUTC < releaseDateUTC) {
            container.style.display = 'none';
            message.innerHTML = `This letter will be available on ${releaseDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false })}`;
            message.style.display = 'block';
        } else if (nowUTC > closeDateUTC) {
            container.style.display = 'none';
            message.innerHTML = `This letter was available until ${closeDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false })}`;
            message.style.display = 'block';
        }
    }

    checkDate();
    setInterval(checkDate, 1000); // Check every second
});
