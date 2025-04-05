// List of all countries and their continent mappings
const allCountries = {
    "Afghanistan": "Asia",
    "Albania": "Europe",
    "Algeria": "Africa",
    "Andorra": "Europe",
    "Angola": "Africa",
    "Antigua and Barbuda": "Central America",
    "Argentina": "South America",
    "Armenia": "Asia",
    "Australia": "Oceania",
    "Austria": "Europe",
    "Azerbaijan": "Asia",
    "Bahamas": "Central America",
    "Bahrain": "Asia",
    "Bangladesh": "Asia",
    "Barbados": "Central America",
    "Belarus": "Europe",
    "Belgium": "Europe",
    "Belize": "Central America",
    "Benin": "Africa",
    "Bhutan": "Asia",
    "Bolivia": "South America",
    "Bosnia and Herzegovina": "Europe",
    "Botswana": "Africa",
    "Brazil": "South America",
    "Brunei": "Asia",
    "Bulgaria": "Europe",
    "Burkina Faso": "Africa",
    "Burundi": "Africa",
    "Cabo Verde": "Africa",
    "Cambodia": "Asia",
    "Cameroon": "Africa",
    "Canada": "Canada",
    "Central African Republic": "Africa",
    "Chad": "Africa",
    "Chile": "South America",
    "China": "Asia",
    "Colombia": "South America",
    "Comoros": "Africa",
    "Congo": "Africa",
    "Costa Rica": "Central America",
    "Croatia": "Europe",
    "Cuba": "Central America",
    "Cyprus": "Europe",
    "Czech Republic": "Europe",
    "Denmark": "Europe",
    "Djibouti": "Africa",
    "Dominica": "Central America",
    "Dominican Republic": "Central America",
    "Ecuador": "South America",
    "Egypt": "Africa",
    "El Salvador": "Central America",
    "Equatorial Guinea": "Africa",
    "Eritrea": "Africa",
    "Estonia": "Europe",
    "Eswatini": "Africa",
    "Ethiopia": "Africa",
    "Fiji": "Oceania",
    "Finland": "Europe",
    "France": "Europe",
    "Gabon": "Africa",
    "Gambia": "Africa",
    "Georgia": "Asia",
    "Germany": "Europe",
    "Ghana": "Africa",
    "Greece": "Europe",
    "Grenada": "Central America",
    "Guatemala": "Central America",
    "Guinea": "Africa",
    "Guinea-Bissau": "Africa",
    "Guyana": "South America",
    "Haiti": "Central America",
    "Honduras": "Central America",
    "Hungary": "Europe",
    "Iceland": "Europe",
    "India": "Asia",
    "Indonesia": "Asia",
    "Iran": "Asia",
    "Iraq": "Asia",
    "Ireland": "Europe",
    "Israel": "Asia",
    "Italy": "Europe",
    "Jamaica": "Central America",
    "Japan": "Asia",
    "Jordan": "Asia",
    "Kazakhstan": "Asia",
    "Kenya": "Africa",
    "Kiribati": "Oceania",
    "Kosovo": "Europe",
    "Kuwait": "Asia",
    "Kyrgyzstan": "Asia",
    "Laos": "Asia",
    "Latvia": "Europe",
    "Lebanon": "Asia",
    "Lesotho": "Africa",
    "Liberia": "Africa",
    "Libya": "Africa",
    "Liechtenstein": "Europe",
    "Lithuania": "Europe",
    "Luxembourg": "Europe",
    "Madagascar": "Africa",
    "Malawi": "Africa",
    "Malaysia": "Asia",
    "Maldives": "Asia",
    "Mali": "Africa",
    "Malta": "Europe",
    "Marshall Islands": "Oceania",
    "Mauritania": "Africa",
    "Mauritius": "Africa",
    "Mexico": "Central America",
    "Micronesia": "Oceania",
    "Moldova": "Europe",
    "Monaco": "Europe",
    "Mongolia": "Asia",
    "Montenegro": "Europe",
    "Morocco": "Africa",
    "Mozambique": "Africa",
    "Myanmar": "Asia",
    "Namibia": "Africa",
    "Nauru": "Oceania",
    "Nepal": "Asia",
    "Netherlands": "Europe",
    "New Zealand": "Oceania",
    "Nicaragua": "Central America",
    "Niger": "Africa",
    "Nigeria": "Africa",
    "North Korea": "Asia",
    "North Macedonia": "Europe",
    "Norway": "Europe",
    "Oman": "Asia",
    "Pakistan": "Asia",
    "Palau": "Oceania",
    "Palestine": "Asia",
    "Panama": "Central America",
    "Papua New Guinea": "Oceania",
    "Paraguay": "South America",
    "Peru": "South America",
    "Philippines": "Asia",
    "Poland": "Europe",
    "Portugal": "Europe",
    "Qatar": "Asia",
    "Romania": "Europe",
    "Russia": "Europe",
    "Rwanda": "Africa",
    "Saint Kitts and Nevis": "Central America",
    "Saint Lucia": "Central America",
    "Saint Vincent and the Grenadines": "Central America",
    "Samoa": "Oceania",
    "San Marino": "Europe",
    "Sao Tome and Principe": "Africa",
    "Saudi Arabia": "Asia",
    "Senegal": "Africa",
    "Serbia": "Europe",
    "Seychelles": "Africa",
    "Sierra Leone": "Africa",
    "Singapore": "Asia",
    "Slovakia": "Europe",
    "Slovenia": "Europe",
    "Solomon Islands": "Oceania",
    "Somalia": "Africa",
    "South Africa": "Africa",
    "South Korea": "Asia",
    "South Sudan": "Africa",
    "Spain": "Europe",
    "Sri Lanka": "Asia",
    "Sudan": "Africa",
    "Suriname": "South America",
    "Sweden": "Europe",
    "Switzerland": "Europe",
    "Syria": "Asia",
    "Taiwan": "Asia",
    "Tajikistan": "Asia",
    "Tanzania": "Africa",
    "Thailand": "Asia",
    "Timor-Leste": "Asia",
    "Togo": "Africa",
    "Tonga": "Oceania",
    "Trinidad and Tobago": "Central America",
    "Tunisia": "Africa",
    "Turkey": "Asia",
    "Turkmenistan": "Asia",
    "Tuvalu": "Oceania",
    "Uganda": "Africa",
    "Ukraine": "Europe",
    "United Arab Emirates": "Asia",
    "United Kingdom": "Europe",
    "USA": "USA",
    "Uruguay": "South America",
    "Uzbekistan": "Asia",
    "Vanuatu": "Oceania",
    "Vatican City": "Europe",
    "Venezuela": "South America",
    "Vietnam": "Asia",
    "Yemen": "Asia",
    "Zambia": "Africa",
    "Zimbabwe": "Africa"
};

// Initial countries and counts
let countryCounts = {
    "Canada": 0,
    "USA": 0,
    "Mexico": 0,
    "Chile": 0,
    "Guatemala": 0
};

// Store info
let storeInfo = {
    name: "",
    date: ""
};

// Chart instance
let pieChart;

// Current chart data for downloads
let chartData = {
    labels: [],
    data: []
};

// Color mapping for consistent colors per continent
const continentColors = {
    "Africa": "#FF6384",
    "Asia": "#36A2EB",
    "Europe": "#FFCE56",
    "North America": "#4BC0C0",
    "South America": "#9966FF",
    "Central America": "#FF9F40",
    "Oceania": "#8AC249",
    "Canada": "#EA5F94",
    "USA": "#00D8B6"
};

// Initialize the page
function init() {
    // Set today's date as default
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('collectionDate').value = formattedDate;
    
    renderCountryList();
    updateChart();
    setupAutocomplete();
    
    // Add event listener for window resize to update chart
    window.addEventListener('resize', function() {
        if (pieChart) {
            pieChart.resize();
        }
    });
    
    // Setup confirmation dialog for page refresh/close
    window.addEventListener('beforeunload', function(e) {
        // Show confirmation dialog only if user has entered data
        if (hasUserEnteredData()) {
            const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        }
    });
}

// Check if user has entered any data
function hasUserEnteredData() {
    // Check if any country has a count > 0
    for (const country in countryCounts) {
        if (countryCounts[country] > 0) {
            return true;
        }
    }
    
    // Check if store name has been entered
    if (storeInfo.name) {
        return true;
    }
    
    return false;
}

// Update store information
function updateStoreInfo() {
    const storeName = document.getElementById('storeName').value.trim();
    const collectionDate = document.getElementById('collectionDate').value;
    
    storeInfo.name = storeName;
    storeInfo.date = collectionDate;
    
    updateChartTitle();
    updateChart(); // This will also update the chart title for downloads
}

// Update chart title with store info
function updateChartTitle() {
    let title = "Where do our fruits come from?";
    
    if (storeInfo.name || storeInfo.date) {
        title += '<br><span style="font-size: 0.9em; font-weight: normal;">';
        
        if (storeInfo.name) {
            title += storeInfo.name;
        }
        
        if (storeInfo.name && storeInfo.date) {
            title += ' - ';
        }
        
        if (storeInfo.date) {
            const formattedDate = new Date(storeInfo.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            title += formattedDate;
        }
        
        title += '</span>';
    }
    
    document.getElementById('chartTitle').innerHTML = title;
}

// Render the country list with counters
function renderCountryList() {
    const countryList = document.getElementById('countryList');
    countryList.innerHTML = '';
    
    // Sort countries alphabetically
    const sortedCountries = Object.keys(countryCounts).sort();
    
    for (const country of sortedCountries) {
        const count = countryCounts[country];
        
        const countryItem = document.createElement('div');
        countryItem.className = 'country-item';
        
        const countryNameEl = document.createElement('div');
        countryNameEl.className = 'country-name';
        countryNameEl.innerHTML = `<strong>${country}</strong>`;
        
        const counterEl = document.createElement('div');
        counterEl.className = 'counter';
        
        const minusBtn = document.createElement('button');
        minusBtn.innerText = '-';
        minusBtn.onclick = () => changeCount(country, -1);
        minusBtn.setAttribute('aria-label', `Decrease ${country} count`);
        
        const countEl = document.createElement('span');
        countEl.className = 'count';
        countEl.innerText = count;
        
        const plusBtn = document.createElement('button');
        plusBtn.innerText = '+';
        plusBtn.onclick = () => changeCount(country, 1);
        plusBtn.setAttribute('aria-label', `Increase ${country} count`);
        
        counterEl.appendChild(minusBtn);
        counterEl.appendChild(countEl);
        counterEl.appendChild(plusBtn);
        
        countryItem.appendChild(countryNameEl);
        countryItem.appendChild(counterEl);
        
        countryList.appendChild(countryItem);
    }
}

// Change the count for a country
function changeCount(country, delta) {
    const currentCount = countryCounts[country] || 0;
    const newCount = Math.max(0, currentCount + delta);
    
    if (newCount === 0) {
        countryCounts[country] = 0;
    } else {
        countryCounts[country] = newCount;
    }
    
    renderCountryList();
    updateChart();
}

// Add a new country
function addNewCountry() {
    const countryInput = document.getElementById('newCountry');
    const country = countryInput.value.trim();
    
    if (country) {
        // Check if it's a valid country
        if (allCountries[country]) {
            if (countryCounts[country] !== undefined) {
                alert(`${country} already exists in the list!`);
            } else {
                countryCounts[country] = 1;
                countryInput.value = '';
                renderCountryList();
                updateChart();
            }
        } else {
            alert('Please enter a valid country name.');
        }
    } else {
        alert('Please enter a country name.');
    }
}

// Update the pie chart
function updateChart() {
    // Calculate data for the chart
    const continentCounts = {};
    
    for (const country in countryCounts) {
        const count = countryCounts[country];
        if (count > 0) {
            const continent = allCountries[country];
            continentCounts[continent] = (continentCounts[continent] || 0) + count;
        }
    }
    
    // Relabel Central America as "North and Central America" for the chart
    if (continentCounts["Central America"]) {
        if (!continentCounts["North and Central America"]) {
            continentCounts["North and Central America"] = 0;
        }
        continentCounts["North and Central America"] += continentCounts["Central America"];
        delete continentCounts["Central America"];
    }
    
    const labels = Object.keys(continentCounts).sort();
    const data = labels.map(continent => continentCounts[continent]);
    
    // Store current chart data for downloads
    chartData.labels = labels;
    chartData.data = data;
    
    // Get colors based on continents, using Central America color for "North and Central America"
    const colors = labels.map(continent => {
        if (continent === "North and Central America") {
            return continentColors["Central America"];
        }
        return continentColors[continent];
    });
    
    // Update or create the chart
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    // Get chart title that includes store info if available
    const chartTitleText = getChartTitleForImage();
    
    if (pieChart) {
        pieChart.options.plugins.title.text = chartTitleText;
        pieChart.data.labels = labels;
        pieChart.data.datasets[0].data = data;
        pieChart.data.datasets[0].backgroundColor = colors;
        pieChart.update();
    } else {
        pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    title: {
                        display: true,
                        text: chartTitleText,
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 10
                        }
                    },
                    legend: {
                        position: window.innerWidth < 768 ? 'top' : 'bottom',
                        labels: {
                            font: {
                                size: window.innerWidth < 768 ? 12 : 14
                            },
                            boxWidth: window.innerWidth < 768 ? 12 : 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Get chart title for image
function getChartTitleForImage() {
    let title = "Produce Origins";
    
    if (storeInfo.name || storeInfo.date) {
        if (storeInfo.name) {
            title += " at " + storeInfo.name;
        }
        
        if (storeInfo.date) {
            const formattedDate = new Date(storeInfo.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            title += " on " + formattedDate;
        }
        
        return title;
    }
    
    return "Produce Origins";
}

// Download chart as image
function downloadImage() {
    // Make sure the chart has been updated with the latest title
    if (pieChart) {
        // Ensure the title is up to date
        pieChart.options.plugins.title.text = getChartTitleForImage();
        pieChart.update();
        
        // Give the chart a moment to render
        setTimeout(() => {
            const canvas = document.getElementById('pieChart');
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.download = 'produce_origin_chart.png';
            
            // Convert canvas to data URL
            link.href = canvas.toDataURL('image/png');
            
            // Click the link to trigger the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 100);
    } else {
        alert('Chart is not available for download.');
    }
}

// Download chart data as CSV
function downloadChartCSV() {
    // Get the chart data
    const labels = chartData.labels;
    const data = chartData.data;
    
    // Calculate percentages
    const total = data.reduce((sum, value) => sum + value, 0);
    const percentages = data.map(value => ((value / total) * 100).toFixed(1));
    
    // Create CSV content
    let csvContent = "Region,Count,Percentage\n";
    
    for (let i = 0; i < labels.length; i++) {
        csvContent += `"${labels[i]}",${data[i]},${percentages[i]}%\n`;
    }
    
    // Add store info if available
    if (storeInfo.name || storeInfo.date) {
        csvContent += "\n";
        if (storeInfo.name) {
            csvContent += `"Store Name","${storeInfo.name}"\n`;
        }
        if (storeInfo.date) {
            const formattedDate = new Date(storeInfo.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            csvContent += `"Collection Date","${formattedDate}"\n`;
        }
    }
    
    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'produce_origin_data.csv';
    
    // Click the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download country data as CSV
function downloadCountryCSV() {
    // Create CSV content
    let csvContent = "Country,Count\n";
    
    // Get all countries with counts > 0
    const countriesWithData = Object.keys(countryCounts)
        .filter(country => countryCounts[country] > 0)
        .sort();
    
    // Add each country to the CSV
    for (const country of countriesWithData) {
        csvContent += `"${country}",${countryCounts[country]}\n`;
    }
    
    // Add countries with zero counts
    const countriesWithZeroCount = Object.keys(countryCounts)
        .filter(country => countryCounts[country] === 0)
        .sort();
    
    for (const country of countriesWithZeroCount) {
        csvContent += `"${country}",0\n`;
    }
    
    // Add store info if available
    if (storeInfo.name || storeInfo.date) {
        csvContent += "\n";
        if (storeInfo.name) {
            csvContent += `"Store Name","${storeInfo.name}"\n`;
        }
        if (storeInfo.date) {
            const formattedDate = new Date(storeInfo.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            csvContent += `"Collection Date","${formattedDate}"\n`;
        }
    }
    
    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'produce_country_data.csv';
    
    // Click the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Submit data to Google Form
function submitToGoogleForm() {
    // Check if required info is available
    if (!storeInfo.name || !storeInfo.date) {
        alert("Please enter both store name and collection date before submitting.");
        return;
    }
    
    // Check if any produce data has been entered
    let hasData = false;
    for (const country in countryCounts) {
        if (countryCounts[country] > 0) {
            hasData = true;
            break;
        }
    }
    
    if (!hasData) {
        alert("Please add some produce origin data before submitting.");
        return;
    }
    
    // Prepare chart image for upload
    if (pieChart) {
        // Update chart title and prepare for export
        pieChart.options.plugins.title.text = getChartTitleForImage();
        pieChart.update();
        
        // Open the Google Form in a new tab
        const googleFormUrl = "https://forms.gle/zbGN1pfvrbRtNryZ7";
        window.open(googleFormUrl, '_blank');
        
        // Instruction dialog for users
        alert("A new tab with the Google Form has been opened.\n\n" +
              "Please download the chart image using the 'Download as Image' button " +
              "and attach it to the form when prompted.\n\n" +
              "You can also download the CSV files to attach additional data if requested.");
    } else {
        alert("Chart data is not ready. Please try again.");
    }
}

// Autocomplete function
function setupAutocomplete() {
    const input = document.getElementById("newCountry");
    let currentFocus;
    
    // Execute when typing in the input field
    input.addEventListener("input", function(e) {
        closeAllLists();
        if (!this.value) return false;
        currentFocus = -1;
        
        const val = this.value.toLowerCase();
        const matchingCountries = Object.keys(allCountries).filter(country => 
            country.toLowerCase().includes(val)
        );
        
        // Create a container for the suggestions
        const autocompleteList = document.createElement("div");
        autocompleteList.setAttribute("id", "autocomplete-list");
        autocompleteList.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(autocompleteList);
        
        // Add matching countries to the list (limited to 10 for performance)
        for (let i = 0; i < Math.min(10, matchingCountries.length); i++) {
            const country = matchingCountries[i];
            const item = document.createElement("div");
            
            // Highlight the matching text
            const matchIndex = country.toLowerCase().indexOf(val);
            item.innerHTML = country.substring(0, matchIndex);
            item.innerHTML += "<strong>" + country.substring(matchIndex, matchIndex + val.length) + "</strong>";
            item.innerHTML += country.substring(matchIndex + val.length);
            
            // Store the country name
            item.innerHTML += "<input type='hidden' value='" + country + "'>";
            
            // When clicking on an item
            item.addEventListener("click", function(e) {
                input.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            
            autocompleteList.appendChild(item);
        }
    });
    
    // Execute when pressing a key on the keyboard
    input.addEventListener("keydown", function(e) {
        const list = document.getElementById("autocomplete-list");
        if (!list) return;
        const items = list.getElementsByTagName("div");
        
        if (e.keyCode === 40) { // Down arrow
            currentFocus++;
            addActive(items);
        } else if (e.keyCode === 38) { // Up arrow
            currentFocus--;
            addActive(items);
        } else if (e.keyCode === 13) { // Enter key
            e.preventDefault();
            if (currentFocus > -1 && items) {
                items[currentFocus].click();
            } else {
                // If no item is selected, add the country directly
                addNewCountry();
            }
        }
    });
    
    // Add active class to an item
    function addActive(items) {
        if (!items) return false;
        removeActive(items);
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (items.length - 1);
        items[currentFocus].classList.add("autocomplete-active");
    }
    
    // Remove active class from all items
    function removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }
    }
    
    // Close all autocomplete lists
    function closeAllLists(elmnt) {
        const items = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < items.length; i++) {
            if (elmnt != items[i] && elmnt != input) {
                items[i].parentNode.removeChild(items[i]);
            }
        }
    }
    
    // Close lists when clicking elsewhere
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

// Initialize the page
window.onload = init;