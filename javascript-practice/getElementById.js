const getElementById = (id, parent) => {
  const checkNode = (node) => {
    if (node.id === id) return node;

    for (const element of node.childNodes) {
      if (element.childNodes) {
        const result = checkNode(element);
        if (result) return result;
      }
    }

    return null;
  };

  return checkNode(parent);
};

const querySelectorAll = (id, parent) => {
  const elementList = [];
  const checkNode = (node) => {
    if (node.id === id) elementList.push(node);
    console.log("Element List:", elementList);
    for (const element of node.children) {
      if (element.children) checkNode(element);
    }

    return elementList;
  };

  return checkNode(parent);
};

// const element = getElementById("span-by-id", document.body);
const elementList = querySelectorAll("span-by-id", document.body);

// console.log("Output:", element);
console.log("Output: elementList", elementList);
