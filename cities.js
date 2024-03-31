// Fetch states for India
fetch(`proxy.php?url=https://secure.geonames.org/childrenJSON?geonameId=1269750`)
.then(response => response.json())
.then(data => {
    const states = data.geonames;
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });
})
.catch(error => console.error('Error fetching states:', error));

// When a state is selected, fetch cities for that state
stateSelect.addEventListener('change', function() {
    const selectedState = stateSelect.value;
    citySelect.innerHTML = '<option value="">Select a city</option>'; // Clear city options
    if (selectedState) {
        fetch(`proxy.php?url=https://secure.geonames.org/childrenJSON?geonameId=IN&name=${selectedState}`)
        .then(response => response.json())
        .then(data => {
            const cities = data.geonames;
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.name;
                option.textContent = city.name;
                citySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
});
