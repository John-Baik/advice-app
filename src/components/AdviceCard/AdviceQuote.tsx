import type { ReactNode } from "react";

export default function AdviceQuote(props: {
  children?: ReactNode;
  src: string;
}) {
  return (
    <div className="flex-col h-full flex">
      <span className="text-center text-[#CDE3EA] font-semibold text-3xl">
        "{props.children}"
      </span>
      <img className="py-10" src={props.src} />
    </div>
  );
}
