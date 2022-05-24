# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-app)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The App

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **In the Future**: Drag and drop to reorder items on the list

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- Javascript

### What I learned

Some of the major learnings while working through this project.

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
function storage() {
  window.localStorage.todoList = list.innerHTML;
}

function getValue() {
  let storageContent = window.localStorage.todoList;
  if (!storageContent) {
    list.innerHTML =
      '<li> Cliquez sur un todo pour le valider et sur la croix pour le supprimer <img src="images/close.png" class="cross"></li>';
  } else {
    list.innerHTML = storageContent;
  }
}
```

## Author

- Website - [Emil Toulouse](https://www.emiltoulouse.com)
