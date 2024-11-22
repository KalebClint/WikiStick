document.addEventListener("DOMContentLoaded", function() {
    // List of pages (URLs) to select from
    const pages = [
        { url: 'GameDevelopement/amuletOfKatari.html', name: 'Amulet Of Katari' },
        { url: 'GameDevelopement/deeperDepths.html', name: 'Deeper Depths' },
        { url: 'GameDevelopement/humblingRequest.html', name: 'A Humbling Request' },
        { url: 'GameDevelopement/RP3DG.html', name: 'Random Procedual 3D Map Generation' },
        { url: 'GameDevelopement/statues.html', name: 'Statues' },
        { url: 'GameDevelopement/statuesRemake.html', name: 'Statues Remake' },
        { url: 'CyberSecurity/NetworkTools.html', name: 'Network Tools' },
        { url: 'PhysicsStudies/SpecialRelativity/timeDilation.html', name: 'Acceleration - Time Dilation Calculator' },
        { url: 'PhysicsStudies/SpecialRelativity/specialRelativity.html', name: 'Special Relativity' },
        { url: "Blender/ABUW.html", name: "Average Blender User Workspace" }

    ];

    // Function to get a random page
    function getRandomPage() {
        const randomIndex = Math.floor(Math.random() * pages.length);
        return pages[randomIndex];
    }

    // Array to hold selected pages to avoid duplicates
    const selectedPages = [];

    // Select random pages and ensure no duplicates
    while (selectedPages.length < 5) {
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

