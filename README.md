# Readme for JSL-01

# KanBan Board

A responsive Kanban board built with HTML and Tailwind CSS, designed to help users visualize tasks across various progress stages. The layout is responsive to desktop and mobile screen sizes and is styled to match the provided figma.

🔹 Basic Structure:

- A Kanban board usually has three columns:

- To Do – tasks that need to be started

- In Progress/Doing

- Done – completed tasks

Each task is represented by a card and moves from left to right as work progresses.

🔹 Purpose:

- Visualize work

- Limit work in progress

- Improve workflow efficiency

- Increase team collaboration and transparency

---

## 🚀 Project Description

This project mimics the layout and functionality of a basic Kanban board. A KanBan board is commonly used in project management tools like Trello or Jira. It is designed with a mobile-first approach and adapted for desktop using responsive CSS grid and utility classes from Tailwind. 

---

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS 
- Google Fonts (Plus Jakarta Sans)

---

## ✅ Features

- Responsive grid layout using Tailwind CSS
- Mobile-first design with adaptation for desktop
- Task columns for `TODO`, `DOING`, and `DONE`
- Modular Tailwind class `card-styling` for task items
- Section headers with consistent spacing and style

---

## 🧱 Setup Instructions

Clone this repository or download the project files, including index.html, input.css, output.css, and tailwind.config.js.

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) and npm must be installed

You can check with:

```bash
node -v
npm -v
Install node.js and Tailwind or use vanilla CSS. If you are using Tailwind, link the CDN or initialize a local version.

Open the folder in VS Code.

In the terminal (I use the Ubuntu terminal inside VS Code/your terminal of choice), make sure you're in the project directory:

cd into the folder directory or open the folder directly from VS Code
Run Tailwind's build process to generate output.css:
npx tailwindcss -i ./input.css -o ./output.css --watch
This should watch for changes and automatically recompile Tailwind CSS. If the watch is not working then remove it and rebuild manually.

Use the Live Server extension in VS Code to view the HTML file.

You should now see the Kanban board layout with styled columns and cards. The layout will automatically adjust for desktop or mobile views.
```

## Example

![Desktop Kanban](/images/JSL-01-Desktop.png)

![Mobile Kanban](/images/JSL-01-Mobile.png)


## 🛠️ Future Improvements

- Add interactivity with JS
- Persisting data via the addition of a server and a backend JS framework/server-side framework