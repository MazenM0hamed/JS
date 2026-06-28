# 🎃 Pumpkin's Purrfect Meme Picker

A fun and interactive JavaScript web application that lets users select their current emotion and receive a random cat meme (or GIF) that matches their mood.

## 📖 Overview

Pumpkin's Purrfect Meme Picker is a simple front-end project built with **HTML**, **CSS**, and **Vanilla JavaScript**. It demonstrates DOM manipulation, event handling, ES6 modules, array methods, and dynamic UI updates.

Users can:
- Select an emotion from a dynamically generated list.
- Filter results to show only animated GIFs.
- Display a random cat meme matching the selected emotion.
- Close the meme modal when finished.

---

## ✨ Features

- 🎭 Dynamic emotion selection
- 🐱 Random cat meme generator
- 🎬 GIF-only filter
- 📦 Uses ES6 JavaScript modules
- 🖼️ Modal popup for displaying memes
- 🎨 Interactive radio button highlighting
- 📱 Responsive and simple user interface

---
## ⚙️ How It Works

1. The application loads cat meme data from `data.js`.
2. It extracts all available emotions and generates radio buttons dynamically.
3. The user selects an emotion.
4. Optionally enables the **Animated GIFs only** filter.
5. Clicking **Get Image**:
   - Filters the available cat memes.
   - Picks one randomly.
   - Displays it inside a modal.
