import { useQuery } from "@tanstack/react-query";
import "./App.css";
import AdviceCard from "./components/AdviceCard/AdviceCard";
import AdviceCardContainer from "./components/AdviceCard/AdviceCardContainer";
import AdviceTitle from "./components/AdviceCard/AdviceTitle";
import AdviceQuote from "./components/AdviceCard/AdviceQuote";
import AdviceButtonContainer from "./components/AdviceButton/AdviceButtonContainer";
import AdviceButton from "./components/AdviceButton/AdviceButton";

const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.slip;
};

export default function App() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return <span className="text-[#CDE3EA]">Loading...</span>;
  }

  return (
    <div className="w-full h-full items-center flex-col flex justify-center py-20 px-0 xs:px-8">
      <AdviceCard>
        <AdviceCardContainer>
          <AdviceTitle id={data.id} title="Advice #" />
          <AdviceQuote src="src/images/pattern-divider-desktop.svg">
            {data.advice}
          </AdviceQuote>
        </AdviceCardContainer>
      </AdviceCard>
      <AdviceButtonContainer>
        <AdviceButton src="src/images/icon-dice.svg" refetch={refetch} />
      </AdviceButtonContainer>
    </div>
  );
}
