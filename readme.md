# Ultimate Tic-Tac-Toe - https://daxapp.github.io/tic-tac-toe/

This project is an implementation of **Ultimate Tic-Tac-Toe**, a more strategic and complex variation of classic Tic-Tac-Toe, inspired by the book *Math with Bad Drawings*. It enhances the traditional game by adding a layered board system that requires careful planning and foresight.

## Game Rules

- The game board consists of a **3×3 grid**, where each cell contains another **3×3 Tic-Tac-Toe board**.
- Players take turns placing their mark (**X** or **O**) inside one of the small boards.
- The move you make inside a small board determines the next board your opponent must play in. For example, if you place your mark in the **bottom-right** square of a small board, your opponent must play in the **bottom-right** small board of the main board.
- If a small board is already won or full, the next player can choose any available small board.
- The goal is to **win three small boards in a row (horizontal, vertical, or diagonal)** to claim victory.

## Technologies Used

This project was built using the following technologies:
- **JavaScript (ES6+)** – Core game logic
- **React** – UI framework for rendering the game
- **SCSS** – Styling and layout
- **Firebase Realtime Database** – Backend for real-time game state synchronization
- **React Hooks** – State management and effects
- **Git & GitHub** – Version control and collaboration

## What I Learned

Through developing this project, I improved my understanding of:
- **Complex state management** in React
- **Game logic design** and turn-based mechanics
- **Optimizing component re-renders** for better performance
- **CSS Grid & Flexbox** for responsive layouts
- **SCSS for modular styling**
- **Handling user interactions and events** in React
- **Using Firebase Realtime Database for real-time updates**
- **Version control and collaboration with GitHub**

## Future Improvements

Here are some enhancements planned for the future:
- **AI Opponent**: Implement a computer player using the minimax algorithm
- **Animations & UI Improvements**: Improve visual feedback with animations
- **Mobile Optimization**: Ensure the game is fully responsive on smaller screens
- **Undo/Redo Feature**: Allow players to rewind moves

