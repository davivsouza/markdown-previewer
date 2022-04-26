import { Container, HtmlArea, MarkDownArea } from "./styles";
import { useState } from "react";
import { marked } from "marked";

export function Home() {
  const [markdownString, setMarkdownString] = useState<string>("");

  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownString(e.currentTarget.value);
    console.log(marked.parse(markdownString));
    
  };
  return (
    <Container>
      <MarkDownArea id="editor" value={markdownString} onChange={handleChange} />
      <HtmlArea
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdownString) }}
      />
    </Container>
  );
}
