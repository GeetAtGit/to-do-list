# To-Do-List

A modular React To-Do List app styled with Tailwind CSS and a soothing pastel aesthetic, featuring:

- ✅ **Add**, **edit**, **delete**, **complete** tasks  
- 💾 **localStorage** persistence across page reloads  
- 🔍 **Filtering** (All / Active / Completed)  
- 🔢 **Sorting** (Newest / Oldest / A→Z / Z→A)  
- ✏️ **Inline editing** with validation  
- 🎨 **Pastel theme** with custom fonts  
- 🖌️ **Very aesthetic vibe** for a calm, playful UI  
- 📏 **Auto-growing task box** up to 20 rem, then scrollable overflow  
- 📦 **Modular components**:  
  - `LocalStorage.jsx`  
  - `Filter.jsx`  
  - `TodoList.jsx`  
  - `EditList.jsx`  

---
## 🌐 Live Demo

🔗 [View the app here](https://geetatgit.github.io/to-do-list/)

---


## 🧪 Manual Testing Guide

You can test the app using the following steps to ensure all features are working:

### ✅ Task Management

- **Add Task**
  - Type a valid task in the input field and press **Enter** or click the **Add** button.
  - ✅ The task should appear immediately at the top of the list.
- **Validation**
  - Leave the input empty and try to add a task.
  - ✅ A red error message should appear saying "Task cannot be empty!".
- **Complete Task**
  - Click the checkbox beside any task.
  - ✅ The task text should get a strikethrough and appear faded.
- **Delete Task**
  - Click the 🗑️ (trash icon) on any task.
  - ✅ The task should be removed instantly.
- **Edit Task**
  - Click the ✏️ (edit icon) on a task.
  - ✅ Input field appears with Save and Cancel buttons.
  - Make changes and click **Save** — task updates.
  - Click **Cancel** — editing is aborted and original text remains.

---

### 🔍 Filtering & Sorting

- **Filtering**
  - Click on **All**, **Active**, or **Completed** buttons.
  - ✅ Tasks should filter accordingly.
- **Sorting**
  - Choose from **Newest**, **Oldest**, **A → Z**, or **Z → A**.
  - ✅ Task list should reorder based on the selected sort option.

---

### 💾 Local Storage

- Add a few tasks.
- Reload the page.
- ✅ Tasks should persist (check browser DevTools → Application → Local Storage → `tasks`).

---

### 🖥️ Responsive Design

- Resize the browser window or open on mobile.
- ✅ App should remain readable, usable, and aesthetic on different screen sizes.

---

### 📜 Scrollable Task Box

- Add enough tasks (10–15) to exceed the max box height.
- ✅ The task container should stop growing and show a **scrollbar** instead.


---

If anything is broken or not behaving as expected, inspect the browser console for errors and verify the correct state updates using React DevTools or `console.log()` statements.




