# Page Builder (React + TypeScript + Vite)


## Overview 

This project is a simple page builder, similar to Elementor, allowing users to drag and drop elements onto a main page. It supports:

## Features
- Drag-and-drop interface for elements.
- CRUD operations on elements.
- Nesting elements inside each other.
- Element selection and padding adjustments.
- Login page with form validation and error handling.
- Redux for state management.
- Local storage for persistence.
- Bonus: Element resizing, background color, and margin controls.


## Installation & Setup

### 1. Clone the Repository

```js
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Install Dependencies

```js
npm install
```
Since the project uses Vite, run:

### 3. Start the Development Server

```js
npm run dev
```

Then, open the provided local URL in your browser.




## Deployed Version

link to the hosted version. 
[Link Text](https://builder-virid.vercel.app/)   YET TO UPDATE!


## Additional Details

src  
│── **assets/** → Stores images, icons  
│── **components/** → Contains reusable UI components (buttons, draggable elements, modals)  
│── **pages/** → Includes key pages like the login page and the main page builder  
│── **redux/** → Manages global state using Redux (actions, reducers, and store)  
│── **routes/** → Defines application routes for navigation  
│── **main.tsx** → Entry point of the React app  
│── **App.tsx** → Root component  


## Data Storage

This project uses Redux Toolkit for state management and local storage (via Redux Persist) for data persistence across page reloads.

### Redux State Management

:one:**build.ts:** Stores the drag-and-drop elements for each user, handling creation, updates, and deletions.

:two:**selected.ts:** Tracks the currently selected user and element, ensuring UI interactions update correctly.

:three:**users.ts:** Manages user registration and authentication details.


### Local Storage Persistence

he Redux store is persisted using redux-persist, so data (elements, users, selections) remains saved even after a page refresh.

The persistConfig in index.ts ensures that all state is stored in the browser’s local storage.



This setup allows the app to maintain various user sessions and keep the page builder’s state intact across visits.
