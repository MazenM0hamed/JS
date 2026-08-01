# 🎬 Find Your Film

Find Your Film is a movie search application that allows users to search for movies and view detailed information about them. Users can explore movie posters, ratings, genres, runtime, and descriptions through a clean and simple interface.

## ✨ Features

- 🔎 Search for movies by title
- 🎥 Display movie information:
  - Movie poster
  - Movie title
  - IMDb rating
  - Runtime
  - Genre
  - Plot description
- 🖼️ Consistent movie poster sizing
- ❌ Handles missing movie posters with fallback images
- 🎨 Clean and modern user interface
- 📱 Responsive movie layout
## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/find-your-film.git
```

Navigate into the project folder:

```bash
cd find-your-film
```

Open `index.html` in your browser.

No additional dependencies are required.

## 🔑 API Setup

This project uses the OMDb API to retrieve movie information.

Get an API key from:

```
https://www.omdbapi.com/
```

Add your API key in your JavaScript file:

```javascript
const API_KEY = "YOUR_API_KEY";
```

## 🔍 How It Works

The user enters a movie name into the search bar. JavaScript sends a request to the OMDb API and receives movie information. The data is then displayed dynamically on the page.

The process:

```
Search Movie
      ↓
Send API Request
      ↓
Receive Movie Data
      ↓
Display Movie Information
```

## 🎬 Movie Cards

Each movie result displays:

- Movie poster
- Movie title
- IMDb rating
- Runtime
- Genre
- Plot summary
- Watchlist button interface

## 📱 Responsive Design

The application uses:

- Flexbox layouts
- Flexible containers
- Responsive spacing
- Mobile-friendly design

The interface adapts to different screen sizes.

## 🔮 Future Improvements

Planned features:

- Add functional movie watchlist
- Save watchlist using LocalStorage
- Remove movies from watchlist
- Prevent duplicate movies
- Add movie trailers
- Add pagination for search results
- Add user accounts
- Add backend database
- Add dark/light theme
