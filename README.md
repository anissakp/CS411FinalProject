# CS411 Final Project
- Group Members: Raghu Nema, Anissa Patel, Ana Ramirez, and Jood Alasiri
- Team #: 10

# Title: GeoGrooves
User-Generated Ambient Music Experience

# The Concept:
A web application that allows users to enhance their surroundings with personalized music playlists. When users enter a specific location (such as a café, park, or gym), they can submit their preferred music choices for that ambiance. Other users visiting the same location can vote on submitted playlists, and the most popular playlist is played in the venue. This creates a crowd-curated ambiance, making the experience more personal and engaging for everyone present.

# How It Works:
- Home Page and Log-In: Users begin at the home page and have the option to log in using Spotify.
- Map Page: Following user login, they have the ability to choose an existing location on the map or generate a new one using the add feature.
- Location Page: Upon location selection, users can contribute their favorite songs to curate a playlist specific to that chosen location.

# API's:
- Google Maps API for location data: Utilize the Google Maps API to fetch location data and allow users to add custom markers or tags to locations to associate them with specific ambiance preferences.

- Spotify Web API for music data: Implement Spotify Web API to enable users to create playlists and add tracks.

# Security: 
- Implement OAuth for secure user authentication, ensuring that only authorized users can access and modify their accounts.
