fetch('/data/data.json')
.then(response => response.json())
.then(data => {
    const timeline = document.getElementById('timeline');

    // Sort by date descending (most recent first)
    data.sort((a, b) => {
    const parseDate = str => new Date(str.replace(/(\w+) (\d+)/, '1 $1 $2')); // fallback to first of month
    return parseDate(b.date) - parseDate(a.date);
    });

    data.forEach((event, index) => {
    const item = document.createElement('div');
    item.classList.add('timeline-event');
    item.style.animationDelay = `${index * 0.1}s`;

    // Link date if URL is available
    const dateHTML = event.url
        ? `<a href="${event.url}" target="_blank">[${event.date}]</a>`
        : `[${event.date}]`;

    item.innerHTML = `${dateHTML} ${event.title}`;
    timeline.appendChild(item);
    });
});