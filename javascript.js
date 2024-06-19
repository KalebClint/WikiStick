document.addEventListener("DOMContentLoaded", function() {
    // List of pages (URLs) to select from
    const pages = [
        { url: 'https://www.example1.com', name: 'Example 1' },
        { url: 'https://www.example2.com', name: 'Example 2' },
        { url: 'https://www.example3.com', name: 'Example 3' },
        { url: 'https://www.example4.com', name: 'Example 4' },
        { url: 'https://www.example5.com', name: 'Example 5' },
        { url: 'https://www.example6.com', name: 'Example 6' }
    ];

    // Function to get a random page
    function getRandomPage() {
        const randomIndex = Math.floor(Math.random() * pages.length);
        return pages[randomIndex];
    }

    // Array to hold selected pages to avoid duplicates
    const selectedPages = [];

    // Select random pages and ensure no duplicates
    while (selectedPages.length < 4) {
        const randomPage = getRandomPage();
        if (!selectedPages.includes(randomPage)) {
            selectedPages.push(randomPage);
        }
    }

    // Populate the table with random links for the Random Pages column
    selectedPages.forEach((page, index) => {
        document.getElementById(`link${index + 1}`).innerHTML = `<a href="${page.url}" target="_blank">${page.name}</a>`;
    });
});

