import { useState } from "react";

interface TextBubbleProps {
  text: string;
  right?: boolean;
}

export default function TextBubble({ text, right = false }: TextBubbleProps) {
  const [isOpened, setIsOpened] = useState(false);
  if (text.length > 500) {
    return (
      <div className={"text-bubble " + (right ? "bubbleright" : "bubbleleft")}>
        <p className={"long " + (isOpened ? "show" : "")}>{text}</p>
        <span
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          {isOpened ? "Méně" : "Více"}
        </span>
      </div>
    );
  }
  return (
    <div className={"text-bubble " + (right ? "bubbleright" : "bubbleleft")}>
      <p>{text}</p>
    </div>
  );
}
