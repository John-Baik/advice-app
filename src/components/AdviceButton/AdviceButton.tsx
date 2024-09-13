export default function AdviceButtonContainer(props: {
  src: string;
  refetch: () => void;
}) {
  return (
    <button
      onClick={props.refetch}
      className="rounded-full transition-all duration-100 hover:shadow-[0_0_20px_5px_rgba(82,254,170,0.7)] bg-[#52FEAA]  p-6"
    >
      <img src={props.src} />
    </button>
  );
}
