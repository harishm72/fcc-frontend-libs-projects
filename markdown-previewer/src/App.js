import { useState } from "react";
import marked from "marked";


import "./App.css";

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.


1. And there are numbererd lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};


function App() {
  const [text, setText] = useState(initialMarkdown);

  console.log(marked(text));

  return (
    <div className="App">
      <header className="App-header">
        <p>Markdown Previewer</p>
      </header>
      <main className="main">
        <div>
          <textarea id="editor" value={text} onChange={e => { setText(e.target.value) }} placeholder="Enter markdown here" />
        </div>
        <div
      dangerouslySetInnerHTML={{
        __html: marked(text, { renderer: renderer })
      }}
      id='preview'
    />
      </main>
    </div>
  );
}

export default App;
