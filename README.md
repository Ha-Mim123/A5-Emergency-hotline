# A5-Emergency-hotline
#1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
solution:
1. getElementById: Returns one element.

2. getElementsByClassName: Returns a live collection of elements.

3. querySelector: Returns one element using a CSS selector.

4. querySelectorAll: Returns multiple elements using a CSS selector.

#2 How do you create and insert a new element into the DOM?

solution: I can create an insert a new element into the DOM as like below I give an example for this--> 
firstly -->  const newDiv = document.createElement("div");
after that-->  newDiv.textContent = "Hello, World!";
and than-->  document.body.appendChild(newDiv);

#3. What is Event Bubbling and how does it work?

solution: When an event that is triggered on a child element spreads to its parent elements, this phenomenon is known as event bubbling.  As a result, when you click a button inside a div, the click event will activate the event handlers for both the button and the div.

#4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where you attach a single event listener to a parent element instead of each child. This works because events bubble up to the parent, and the parent can handle events for its children.

Why it's useful:

It improves performance when you have many child elements.

It's great for dynamically added elements, as they will still trigger the parent’s event listener.

#5. What is the difference between preventDefault() and stopPropagation() methods?

solution:
1.preventDefault(): Stops the default behavior .
2.stopPropagation(): Stops the event from bubbling to parent elements.


