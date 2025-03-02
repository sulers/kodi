import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../styles/Code.css";

type CodeSnippetProps = {
  code: string;
  language: string | undefined;
};

function CodeSnippet({ code, language }: CodeSnippetProps) {
  return (
    <div className="code-snippet">
      <SyntaxHighlighter language={language} style={dark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippet;
