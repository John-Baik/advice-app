import type { ReactNode } from "react";

export default function AdviceCardContainer(props: { children?: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-5 py-10 px-6 sm:px-14">
      {props.children}
    </div>
  );
}
