# 🎮 Guess the Word

A modern, interactive word-guessing game built with vanilla JavaScript, HTML, and CSS. Challenge yourself to guess the correct 5-letter word within 5 tries!

**🌐 [Play Now](https://ahmed-eltohfa.github.io/Guess-game/)**

---

## ✨ Features

- 🎯 **100+ Word Library** - A diverse collection of 5-letter words for varied gameplay
- 🎨 **Modern UI Design** - Sleek, glassmorphic interface with gradient backgrounds
- ✨ **Smooth Animations** - Polished transitions and interactive feedback animations
- 💡 **Hint System** - 2 hints per game to help you out
- ⌨️ **Keyboard Support** - Full keyboard navigation with Enter to check and arrow keys to navigate
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🔊 **Audio Feedback** - Win and loss sound effects for enhanced gameplay
- ⚡ **Fast & Lightweight** - No dependencies, pure vanilla JavaScript

---

## 🎮 How to Play

1. **Guess the Word** - A random 5-letter word is selected
2. **Enter Letters** - Type letters in each position (left to right, auto-advances)
3. **Check Your Guess** - Click "Check" or press Enter to validate
4. **Get Feedback** - Each letter shows:
   - 🟩 **Green** - Correct letter in correct position
   - 🟨 **Yellow** - Correct letter in wrong position
   - 🔴 **Red** - Letter not in the word
5. **Win or Lose** - You have 5 tries to guess correctly!
6. **Use Hints** - Stuck? Use one of your 2 hints to reveal a random letter

---

## ⌨️ Keyboard Shortcuts

| Key             | Action                    |
| --------------- | ------------------------- |
| `A-Z`           | Type letters              |
| `→` Arrow Right | Move to next letter       |
| `←` Arrow Left  | Move to previous letter   |
| `Backspace`     | Delete letter & move back |
| `Enter`         | Check your guess          |

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox
  - Keyframe animations
  - Glassmorphism effects
  - CSS variables for theming
- **JavaScript (ES6+)** - Game logic with:
  - Event-driven architecture
  - DOM manipulation
  - Local state management

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies required!

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahmed-eltohfa/Guess-game.git
   cd Guess-game
   ```

2. **Open the game**
   - Option A: Double-click `index.html` to open in your default browser
   - Option B: Use a local server for better performance

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js with http-server
     npx http-server
     ```

3. **Play!**
   - Navigate to `http://localhost:8000` (if using a server)

---

## 📁 Project Structure

```
Guess-game/
├── index.html          # Main HTML file
├── README.md           # This file
└── files/
    ├── main.js         # Game logic & mechanics
    ├── style.css       # Styling & animations
    ├── halawade.mp3    # Win sound effect
    └── lehbs.mp3       # Loss sound effect
```

---

## 🎯 Game Mechanics

### Word Database

- 100+ carefully selected common 5-letter words
- Words are randomly selected each game
- No repeating words within a single gaming session

### Scoring System

- Each try reveals letter information
- Letters don't change position once revealed
- Hint system provides strategic advantage
- Win: Guess the word correctly
- Lose: Fail to guess after 5 tries

### Input Validation

- Only accepts alphabetic characters (A-Z)
- Auto-validates complete guesses
- Prevents invalid submissions
- Case-insensitive input (converts to lowercase)

---

## 🎨 Color Scheme

The game uses a modern color palette designed for optimal contrast and visual feedback:

- **Primary**: `#0f3460` (Deep Blue)
- **Secondary**: `#00d4ff` (Cyan)
- **Accent**: `#ff006e` (Hot Pink)
- **Correct**: `#06d6a0` (Mint Green)
- **Wrong Position**: `#ffd60a` (Gold)
- **Incorrect**: `#ff006e` (Red/Pink)

---

## 🌟 Features in Detail

### Responsive Design

- Desktop: Full layout with side-by-side game and guide
- Tablet: Stacked layout with optimized spacing
- Mobile: Compact view with hidden labels for better fit

### Animations

- **Fade In Down**: Title and header animations
- **Slide Up**: Game container entrance
- **Pop In**: Letter reveals with bounce effect
- **Shake**: Wrong letter feedback
- **Scale Transform**: Button hover effects

### Accessibility

- Clear visual feedback for all actions
- Keyboard-only gameplay support
- High contrast colors for readability
- Semantic HTML structure

---

## 🔧 Customization

### Change Word List

Edit the `arrOfWords` array in `files/main.js` to add or replace words.

### Adjust Difficulty

- Modify `NUMBER_OF_TRIES` to change attempts (default: 5)
- Modify `NUMBER_OF_LETTERS` to change word length (default: 5)
- Modify `NUMBER_OF_HINTS` to change hint count (default: 2)

### Customize Colors

Edit the CSS variables in `files/style.css`:

```css
:root {
  --maincolor: #0f3460;
  --secondarycolor: #00d4ff;
  --accent: #ff006e;
  /* ... more colors ... */
}
```

---

## 💡 Tips for Players

1. **Start with common vowels** - Try 'A', 'E', 'I', 'O' in different positions
2. **Look for patterns** - Common letter combinations like 'ST', 'CH', 'ER'
3. **Use hints wisely** - Save them for when you're stuck
4. **Think about letter frequency** - Some letters are more common than others
5. **Learn from feedback** - Yellow letters help narrow down positions

---

## 🐛 Known Issues & Limitations

- Audio playback requires user interaction (browser security feature)
- Game requires JavaScript to be enabled
- Best experienced in modern browsers (ES6+ support needed)

---

## 📊 Browser Support

| Browser | Support              |
| ------- | -------------------- |
| Chrome  | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari  | ✅ Latest 2 versions |
| Edge    | ✅ Latest 2 versions |
| IE 11   | ❌ Not supported     |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Suggestions for Improvements

- Additional word categories (Easy, Medium, Hard)
- Multiplayer mode
- Daily challenge with specific word
- Statistics/leaderboard
- Multiple languages support
- Dark/Light theme toggle

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Ahmed Eltohfa**

- GitHub: [@ahmed-eltohfa](https://github.com/ahmed-eltohfa)
- Live Demo: [Play the Game](https://ahmed-eltohfa.github.io/Guess-game/)

---

## 🙏 Acknowledgments

- Modern CSS techniques for glassmorphism effects
- Inspired by popular word-guessing games
- Community feedback for improvements

---

## 📝 Changelog

### v2.0 (Latest)

- ✨ Complete UI redesign with modern glassmorphic style
- 🎨 New color scheme and gradient backgrounds
- ✨ Smooth animations and transitions
- 📚 Expanded word library (100+ words)
- ⚡ Refactored codebase with ES6+ syntax
- 🎯 Improved keyboard navigation
- 📱 Enhanced responsive design

### v1.0

- 🚀 Initial release with basic gameplay

---

**Enjoy the game! 🎉** If you find any bugs or have suggestions, please open an issue or submit a pull request.
