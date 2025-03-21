const searchData = {
    "home": "/",
    "about": "/about",
    "contact": "/contact",
    "products": "/products",
    "blog": "/blog",
    "help": "/help"
};

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchData[searchTerm]) {
        window.location.href = searchData[searchTerm];
    } else {
        alert('No results found for "' + searchTerm + '". Please try another search term.');
    }
});

// Optional: Allow pressing Enter to trigger the search
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});