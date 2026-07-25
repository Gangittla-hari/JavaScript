# 📚 DOM (Document Object Model)

## 📖 Introduction

The **Document Object Model (DOM)** is a programming interface for HTML documents. It allows JavaScript to access, modify, add, or remove HTML elements without changing the original HTML file.

Using the browser's **Developer Console**, we can interact with the webpage in real time.

---

# 🎯 Objective

The purpose of this project is to understand how JavaScript can manipulate HTML elements using the DOM.

In this example, we use the browser console to:

- Access HTML elements
- Read element content
- Change text dynamically
- Observe live updates on the webpage

---

# 🛠️ Concepts Covered

- `window`
- `document`
- `document.all`
- `console.dir()`
- `innerText`
- HTMLCollection
- DOM Manipulation

---

# 📝 Example

### View the document object

```javascript
console.dir(document);
```

This displays the complete HTML document as a JavaScript object.

---

### View all HTML elements

```javascript
console.dir(document.all);
```

Output:

```
HTMLCollection(...)
```

`document.all` returns all HTML elements on the page.

---

### Access a specific element

```javascript
console.dir(document.all[13]);
```

Output:

```
<h1>
```

This accesses the 14th element in the HTMLCollection.

---

### Read the text

```javascript
console.dir(document.all[13].innerText);
```

Output:

```
Spider Man
```

`innerText` returns the visible text inside the selected element.

---

### Change the text

```javascript
document.all[13].innerText = "Peter Parker";
```

Output on the webpage:

Before:

```
Spider Man
```

After:

```
Peter Parker
```

The webpage updates instantly without editing the HTML file.

---

# 💡 What is `innerText`?

`innerText` is used to:

- Read the visible text of an element.
- Change the visible text dynamically.

Example:

```javascript
let heading = document.all[13];

heading.innerText = "Spider Man";
heading.innerText = "Peter Parker";
heading.innerText = "Friendly Neighborhood Spider-Man";
```

---

# 🚀 Why Learn DOM?

DOM manipulation is one of the most important JavaScript skills because it allows developers to:

- Update webpage content
- Build interactive websites
- Handle button clicks
- Create forms
- Build dynamic applications
- Develop modern web projects

---

# 📌 Conclusion

The DOM connects JavaScript with HTML.

By using JavaScript, we can change webpage content, styles, and structure dynamically without modifying the HTML source file. Understanding the DOM is a fundamental step toward becoming a Frontend or Full Stack Developer.

---

## 👨‍💻 Author

**Hari Prasad**

Learning JavaScript & Full Stack Web Development 🚀