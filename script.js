
const ulParent = document.querySelector('ul').parentNode;
console.log("L'elemento padre di ul è:", ulParent);

const secondChild = document.querySelector('ul').children[1];
console.log("Il secondo elemento figlio di ul è:", secondChild);

const nextSibling = secondChild.nextElementSibling;
console.log("L'elemento fratello successivo del secondo li è:", nextSibling);

const previousSibling = secondChild.previousElementSibling;
console.log("L'elemento fratello precedente del secondo li è:", previousSibling);
