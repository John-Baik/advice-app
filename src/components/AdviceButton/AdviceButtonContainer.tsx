import type { ReactNode } from "react";

export default function AdviceButtonContainer(props: { children: ReactNode }) {
  return <div className="relative top-[-35px]">{props.children}</div>;
}
