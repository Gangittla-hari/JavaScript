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

# Selecting Elements by Class Name

The `getElementsByClassName()` method is used to select all HTML elements that share the same class name. It returns an **HTMLCollection**, which is an array-like collection of elements. Since multiple elements can have the same class, a loop is commonly used to access or modify each element.

## Syntax

```javascript
document.getElementsByClassName("className");
```

## Example 1 – Reading Image Sources

```javascript
let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
    console.log(smallImages[i].src);
}
```

### Explanation

- Selects all elements with the class `oldImg`.
- Stores them inside the `smallImages` variable.
- Loops through every image one by one.
- Prints the `src` (image path) of each image in the browser console.
- The webpage remains unchanged because this code only reads data.

**Output**

```
image1.png
image2.png
image3.png
```

---

## Example 2 – Changing Image Sources

```javascript
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "spiderman_img.png";
    console.log(`Value of image no. ${i} is changed.`);
}
```

### Explanation

- Loops through every selected image.
- Replaces the existing `src` with `spiderman_img.png`.
- Updates every image displayed on the webpage.
- Prints a confirmation message in the console for each image.

**Console Output**

```
Value of image no. 0 is changed.
Value of image no. 1 is changed.
Value of image no. 2 is changed.
```

---

## Read vs Update

| Reading Data | Updating Data |
|--------------|---------------|
| Displays the current value. | Replaces the existing value. |
| Does not change the webpage. | Updates the webpage immediately. |
| Example: `console.log(image.src)` | Example: `image.src = "newImage.png"` |

---

# Query Selectors

The `querySelector()` and `querySelectorAll()` methods use CSS selectors to find HTML elements. They are among the most commonly used DOM methods because they are flexible and easy to understand.

---

## Selecting an Element by Tag Name

```javascript
console.dir(document.querySelector("h1"));
```

### Explanation

- Selects the first `<h1>` element in the document.
- Returns the element object.

**Output**

```
h1
```

---

## Selecting an Element by ID

```javascript
console.dir(document.querySelector("#description"));
```

### Explanation

- Uses the `#` symbol to target an element by its ID.
- Returns the first element with the ID `description`.

**Output**

```
p#description
```

---

## Selecting an Element by Class

```javascript
console.dir(document.querySelector(".oldImg"));
```

### Explanation

- Uses the `.` symbol to target a class.
- Returns the first element with the class `oldImg`.

**Output**

```
img.oldImg
```

---

## Selecting an `<a>` Element Inside a `<div>`

```javascript
console.dir(document.querySelector("div a"));
```

### Explanation

- Selects the **first `<a>` element** that is inside a `<div>`.
- This is called a **descendant selector** because the `<a>` element is selected based on its parent `<div>`.

**Output**

```
a.boxLink
```

---

## Selecting All `<a>` Elements Inside a `<div>`

```javascript
console.dir(document.querySelectorAll("div a"));
```

### Explanation

- Selects every `<a>` element inside `<div>` elements.
- Returns a **NodeList** containing all matching elements.
- A loop can be used to access each element individually.

**Output**

```
NodeList(4)
0: a.boxLink
1: a.boxLink
2: a.boxLink
3: a.boxLink
```

---

## `querySelector()` vs `querySelectorAll()`

| `querySelector()` | `querySelectorAll()` |
|-------------------|----------------------|
| Returns the first matching element. | Returns all matching elements. |
| Returns a single Element object. | Returns a NodeList. |
| Stops after finding the first match. | Collects every matching element. |
| No loop is required. | A loop is usually used to access each element. |

---

## Summary

- `getElementsByClassName()` selects elements using their class name.
- `querySelector()` returns only the first matching element.
- `querySelectorAll()` returns all matching elements as a NodeList.
- CSS selectors such as **tag**, **class**, **id**, and **descendant selectors** can all be used with query selectors.

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