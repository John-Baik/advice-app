import type { ReactNode } from "react";

export default function AdviceTitle(props: {
  title?: ReactNode;
  id?: ReactNode;
}) {
  return (
    <span className="text-[#52FEAA]">
      {props.title}
      {props.id}
    </span>
  );
}
