const tripDatabase = [
  // Andhra Pradesh
  {
    destination: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Beach",
    budget: 12000,
    people: 2,
    tripLength: 4,
    hotel: "The Park Visakhapatnam",
    address: "Beach Road, Visakhapatnam",
    contact: "+91 9447788967",
    googleMapLink: "https://www.google.com/maps/place/Visakhapatnam"
  },
  {
    destination: "Tirupati",
    state: "Andhra Pradesh",
    type: "Temple",
    budget: 5000,
    people: 1,
    tripLength: 2,
    hotel: "Tirumala Residency",
    address: "Tirupati, Andhra Pradesh",
    contact: "+91 9966234567",
    googleMapLink: "https://www.google.com/maps/place/Tirupati"
  },

  // Arunachal Pradesh
  {
    destination: "Tawang",
    state: "Arunachal Pradesh",
    type: "Mountain",
    budget: 15000,
    people: 2,
    tripLength: 5,
    hotel: "Tawang Valley Resort",
    address: "Tawang, Arunachal Pradesh",
    contact: "+91 8012334455",
    googleMapLink: "https://www.google.com/maps/place/Tawang"
  },

  // Assam
  {
    destination: "Kaziranga National Park",
    state: "Assam",
    type: "Forest",
    budget: 10000,
    people: 3,
    tripLength: 6,
    hotel: "Kaziranga Golf Resort",
    address: "Kaziranga, Assam",
    contact: "+91 9888776655",
    googleMapLink: "https://www.google.com/maps/place/Kaziranga"
  },
  {
    destination: "Guwahati",
    state: "Assam",
    type: "City",
    budget: 8000,
    people: 2,
    tripLength: 3,
    hotel: "Vivanta Guwahati",
    address: "Guwahati, Assam",
    contact: "+91 9701012345",
    googleMapLink: "https://www.google.com/maps/place/Guwahati"
  },

  // Bihar
  {
    destination: "Patna",
    state: "Bihar",
    type: "City",
    budget: 7000,
    people: 2,
    tripLength: 3,
    hotel: "Buddha Residency",
    address: "Patna, Bihar",
    contact: "+91 9334556789",
    googleMapLink: "https://www.google.com/maps/place/Patna"
  },

  // Chhattisgarh
  {
    destination: "Raipur",
    state: "Chhattisgarh",
    type: "City",
    budget: 6000,
    people: 2,
    tripLength: 2,
    hotel: "The Raipur Ashoka",
    address: "Raipur, Chhattisgarh",
    contact: "+91 9222334455",
    googleMapLink: "https://www.google.com/maps/place/Raipur"
  },

  // Goa
  {
    destination: "Goa",
    state: "Goa",
    type: "Beach",
    budget: 15000,
    people: 2,
    tripLength: 5,
    hotel: "Sunset Beach Resort",
    address: "Calangute, Goa",
    contact: "+91 9876543210",
    googleMapLink: "https://www.google.com/maps/place/Calangute"
  },
  {
    destination: "South Goa",
    state: "Goa",
    type: "Beach",
    budget: 12000,
    people: 2,
    tripLength: 6,
    hotel: "Taj Exotica Resort & Spa",
    address: "Benaulim Beach, Goa",
    contact: "+91 9922334455",
    googleMapLink: "https://www.google.com/maps/place/Benaulim+Beach"
  },

  // Gujarat
  {
    destination: "Kutch",
    state: "Gujarat",
    type: "Desert",
    budget: 18000,
    people: 4,
    tripLength: 7,
    hotel: "Rann Riders",
    address: "Kutch, Gujarat",
    contact: "+91 9822334456",
    googleMapLink: "https://www.google.com/maps/place/Kutch"
  },
  {
    destination: "Ahmedabad",
    state: "Gujarat",
    type: "City",
    budget: 10000,
    people: 2,
    tripLength: 4,
    hotel: "Hyatt Ahmedabad",
    address: "Ahmedabad, Gujarat",
    contact: "+91 7998765432",
    googleMapLink: "https://www.google.com/maps/place/Ahmedabad"
  },

  // Haryana
  {
    destination: "Gurugram",
    state: "Haryana",
    type: "City",
    budget: 9000,
    people: 2,
    tripLength: 3,
    hotel: "The Westin Gurgaon",
    address: "Gurugram, Haryana",
    contact: "+91 9812334455",
    googleMapLink: "https://www.google.com/maps/place/Gurugram"
  },

  // Himachal Pradesh
  {
    destination: "Shimla",
    state: "Himachal Pradesh",
    type: "Mountain",
    budget: 12000,
    people: 2,
    tripLength: 4,
    hotel: "The Oberoi Cecil",
    address: "Shimla, Himachal Pradesh",
    contact: "+91 8885432100",
    googleMapLink: "https://www.google.com/maps/place/Shimla"
  },
  {
    destination: "Manali",
    state: "Himachal Pradesh",
    type: "Mountain",
    budget: 15000,
    people: 2,
    tripLength: 5,
    hotel: "Himalayan Heights Hotel",
    address: "Old Manali, Himachal Pradesh",
    contact: "+91 9845123456",
    googleMapLink: "https://www.google.com/maps/place/Old+Manali"
  },
  // Jammu & Kashmir
  {
    destination: "Srinagar",
    state: "Jammu & Kashmir",
    type: "Mountain",
    budget: 14000,
    people: 2,
    tripLength: 6,
    hotel: "Houseboat Deluxe",
    address: "Dal Lake, Srinagar",
    contact: "+91 9412001234",
    googleMapLink: "https://www.google.com/maps/place/Srinagar"
  },
  {
    destination: "Leh",
    state: "Jammu & Kashmir",
    type: "Mountain",
    budget: 18000,
    people: 4,
    tripLength: 7,
    hotel: "Leh Palace Resort",
    address: "Leh, Jammu & Kashmir",
    contact: "+91 9623445678",
    googleMapLink: "https://www.google.com/maps/place/Leh"
  },

  // Jharkhand
  {
    destination: "Ranchi",
    state: "Jharkhand",
    type: "City",
    budget: 6000,
    people: 2,
    tripLength: 3,
    hotel: "Radisson Blu Ranchi",
    address: "Ranchi, Jharkhand",
    contact: "+91 9833445567",
    googleMapLink: "https://www.google.com/maps/place/Ranchi"
  },

  // Karnataka
  {
    destination: "Bengaluru",
    state: "Karnataka",
    type: "City",
    budget: 10000,
    people: 2,
    tripLength: 4,
    hotel: "Taj West End",
    address: "Bengaluru, Karnataka",
    contact: "+91 8041422123",
    googleMapLink: "https://www.google.com/maps/place/Bengaluru"
  },
  {
    destination: "Coorg",
    state: "Karnataka",
    type: "Hill Station",
    budget: 12000,
    people: 3,
    tripLength: 5,
    hotel: "The Orange County Resort",
    address: "Coorg, Karnataka",
    contact: "+91 8228223344",
    googleMapLink: "https://www.google.com/maps/place/Coorg"
  },

  // Kerala
  {
    destination: "Alleppey",
    state: "Kerala",
    type: "Backwater",
    budget: 15000,
    people: 2,
    tripLength: 5,
    hotel: "Backwater Bliss Resort",
    address: "Alleppey, Kerala",
    contact: "+91 9745612345",
    googleMapLink: "https://www.google.com/maps/place/Alleppey"
  },
  {
    destination: "Munnar",
    state: "Kerala",
    type: "Hill Station",
    budget: 12000,
    people: 2,
    tripLength: 4,
    hotel: "Tea County Munnar",
    address: "Munnar, Kerala",
    contact: "+91 4852301098",
    googleMapLink: "https://www.google.com/maps/place/Munnar"
  },

  // Madhya Pradesh
  {
    destination: "Kanha National Park",
    state: "Madhya Pradesh",
    type: "Forest",
    budget: 15000,
    people: 3,
    tripLength: 6,
    hotel: "Kanha Earth Lodge",
    address: "Kanha, Madhya Pradesh",
    contact: "+91 9123445678",
    googleMapLink: "https://www.google.com/maps/place/Kanha+National+Park"
  },
  {
    destination: "Khajuraho",
    state: "Madhya Pradesh",
    type: "Monument",
    budget: 12000,
    people: 2,
    tripLength: 4,
    hotel: "The Radisson Khajuraho",
    address: "Khajuraho, Madhya Pradesh",
    contact: "+91 9977886655",
    googleMapLink: "https://www.google.com/maps/place/Khajuraho"
  },
  {
  destination: "Shillong",
  state: "Meghalaya",
  type: "Mountain",
  budget: 12000,
  people: 3,
  tripLength: 4,
  hotel: "Pine Hill Resort",
  address: "Shillong, Meghalaya",
  contact: "+91 9436100000",
  googleMapLink: "https://www.google.com/maps/place/Shillong"
},
{
  destination: "Aizawl",
  state: "Mizoram",
  type: "Mountain",
  budget: 14000,
  people: 2,
  tripLength: 5,
  hotel: "Aizawl View Inn",
  address: "Aizawl, Mizoram",
  contact: "+91 9436154321",
  googleMapLink: "https://www.google.com/maps/place/Aizawl"
},
{
  destination: "Dimapur",
  state: "Nagaland",
  type: "Mountain",
  budget: 13000,
  people: 4,
  tripLength: 4,
  hotel: "Highland Stay",
  address: "Dimapur, Nagaland",
  contact: "+91 9436001122",
  googleMapLink: "https://www.google.com/maps/place/Dimapur"
},
{
  destination: "Puri Beach",
  state: "Odisha",
  type: "Beach",
  budget: 8000,
  people: 2,
  tripLength: 3,
  hotel: "Blue Sea Resort",
  address: "Puri, Odisha",
  contact: "+91 6752245678",
  googleMapLink: "https://www.google.com/maps/place/Puri+Beach"
},
{
  destination: "Golden Temple",
  state: "Punjab",
  type: "Monuments",
  budget: 7000,
  people: 3,
  tripLength: 2,
  hotel: "Temple View Hotel",
  address: "Amritsar, Punjab",
  contact: "+91 9814567890",
  googleMapLink: "https://www.google.com/maps/place/Golden+Temple"
},
{
  destination: "Jaisalmer Fort",
  state: "Rajasthan",
  type: "Forts",
  budget: 15000,
  people: 2,
  tripLength: 4,
  hotel: "Desert Fort Hotel",
  address: "Jaisalmer, Rajasthan",
  contact: "+91 9988776655",
  googleMapLink: "https://www.google.com/maps/place/Jaisalmer+Fort"
},
{
  destination: "Gangtok",
  state: "Sikkim",
  type: "Mountain",
  budget: 16000,
  people: 2,
  tripLength: 5,
  hotel: "Himalaya Retreat",
  address: "Gangtok, Sikkim",
  contact: "+91 9832112345",
  googleMapLink: "https://www.google.com/maps/place/Gangtok"
},
{
  destination: "Kanyakumari",
  state: "Tamil Nadu",
  type: "Beach",
  budget: 10000,
  people: 4,
  tripLength: 3,
  hotel: "Ocean Breeze Hotel",
  address: "Kanyakumari, Tamil Nadu",
  contact: "+91 9487654321",
  googleMapLink: "https://www.google.com/maps/place/Kanyakumari"
},
{
  destination: "Hyderabad",
  state: "Telangana",
  type: "Monuments",
  budget: 11000,
  people: 3,
  tripLength: 4,
  hotel: "City Pearl Inn",
  address: "Charminar Road, Hyderabad",
  contact: "+91 9845012345",
  googleMapLink: "https://www.google.com/maps/place/Charminar"
},
{
  destination: "Agra",
  state: "Uttar Pradesh",
  type: "Monuments",
  budget: 9000,
  people: 2,
  tripLength: 3,
  hotel: "Taj Gateway Hotel",
  address: "Agra, Uttar Pradesh",
  contact: "+91 9837777654",
  googleMapLink: "https://www.google.com/maps/place/Taj+Mahal"
},
{
  destination: "Mussoorie",
  state: "Uttarakhand",
  type: "Mountain",
  budget: 9500,
  people: 3,
  tripLength: 4,
  hotel: "Hilltop Heights",
  address: "Mussoorie, Uttarakhand",
  contact: "+91 9998899999",
  googleMapLink: "https://www.google.com/maps/place/Mussoorie"
},
{
  destination: "Darjeeling",
  state: "West Bengal",
  type: "Mountain",
  budget: 12500,
  people: 2,
  tripLength: 5,
  hotel: "Tea Garden Retreat",
  address: "Darjeeling, West Bengal",
  contact: "+91 9831122334",
  googleMapLink: "https://www.google.com/maps/place/Darjeeling"
}
];

const form = document.getElementById("tripForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const state = document.getElementById("state").value;
  const placeType = document.getElementById("placeType").value;
  const people = parseInt(document.getElementById("people").value);
  const budget = parseInt(document.getElementById("budget").value);

  const filteredTrips = tripDatabase.filter(trip => {
    const budgetPerPersonInput = budget / people;
    const budgetPerPersonTrip = trip.budget / trip.people;
    const budgetMatch = Math.abs(budgetPerPersonTrip - budgetPerPersonInput) / budgetPerPersonInput <= 0.3; // 30% range

    return (
      (!state || trip.state === state) &&
      (!placeType || trip.type === placeType) &&
      budgetMatch
    );
  });

  displayTrips(filteredTrips);
});

function displayTrips(trips) {
  const container = document.querySelector(".trip-form-container");

  const resultsDiv = document.createElement("div");
  resultsDiv.className = "results";
  resultsDiv.style.marginTop = "40px";

  if (trips.length === 0) {
    resultsDiv.innerHTML = "<p>No matching trips found.</p>";
  } else {
    resultsDiv.innerHTML = "<h3>Recommended Trips:</h3>";
    trips.slice(0, 4).forEach(trip => {
      const card = document.createElement("div");
      card.className = "trip-card";
      card.style.border = "1px solid #ccc";
      card.style.borderRadius = "10px";
      card.style.padding = "20px";
      card.style.marginBottom = "20px";
      card.style.background = "#eaf4f9";

      card.innerHTML = `
        <h4>${trip.destination} (${trip.type})</h4>
        <p><strong>Budget:</strong> ₹${trip.budget}</p>
        <p><strong>Hotel:</strong> ${trip.hotel}</p>
        <p><strong>Address:</strong> ${trip.address}</p>
        <p><strong>Contact:</strong> ${trip.contact}</p>
        <p><strong>Map Link:</strong> <a href="${trip.googleMapLink}" target="_blank">View on Google Maps</a></p>
      `;

      resultsDiv.appendChild(card);
    });
  }

  const existingResults = document.querySelector(".results");
  if (existingResults) {
    existingResults.remove();
  }

  container.appendChild(resultsDiv);
}
