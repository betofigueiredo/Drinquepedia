import { useDocumentTitle } from "usehooks-ts";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import SecondHighlights from "@/components/SecondHighlights";
import ThirdHighlights from "@/components/ThirdHighlights";
import FourthHighlights from "@/components/FourthHighlights";

const Home = () => {
  useDocumentTitle("Drinquepedia | Things go better with a cocktail!");

  return (
    <>
      <div className="container">
        <FeaturedHighlights />
        <SecondHighlights />
      </div>
      <div className="my-24 w-full bg-gray-100">
        <ThirdHighlights />
      </div>
      <div className="container">
        <FourthHighlights />
      </div>
    </>
  );
};

export default Home;
