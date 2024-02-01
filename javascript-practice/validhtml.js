const isValidHTML = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      const closingTagIndex = str.indexOf(">", i);
      if (closingTagIndex === -1) {
        console.log("The HTML is not valid.");
        return;
      }

      const tag = str.substring(i, closingTagIndex + 1);

      if (tag[1] === "/") {
        // Closing tag
        const openTag = stack.pop();
        if (!openTag || openTag !== "<" + tag.substring(2)) {
          console.log("The HTML is not valid.");
          return;
        }
      } else {
        // Opening tag
        stack.push(tag);
      }

      i = closingTagIndex;
    }
  }

  console.log("stack:", stack);

  if (stack.length === 0) {
    console.log("The HTML is valid.");
  } else {
    console.log("The HTML is not valid.");
  }
};

const htmlString = "<b><i>CD</i><div>CD</div></b><i>EF</i>";
isValidHTML(htmlString);

function a() {}

var b = function z() {};

const c = () => {};
