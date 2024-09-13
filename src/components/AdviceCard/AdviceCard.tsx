import type { ReactNode } from "react";

export default function AdviceCard(props: { children: ReactNode }) {
  return (
    <div className="w-full sm:w-[570px] min-h-[320px] h-full rounded-xl bg-[#303A48] flex flex-col items-center">
      {props.children}
    </div>
  );
}
