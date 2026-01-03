import { createFileRoute } from '@tanstack/react-router';
import FeaturedHighlights from '@/components/FeaturedHighlights';
import FourthHighlights from '@/components/FourthHighlights';
import SecondHighlights from '@/components/SecondHighlights';
import ThirdHighlights from '@/components/ThirdHighlights';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <>
      <div className="container px-3 mx-auto">
        <FeaturedHighlights />
        <SecondHighlights />
      </div>
      <div className="my-24 w-full bg-gray-100">
        <ThirdHighlights />
      </div>
      <div className="container px-3 mx-auto">
        <FourthHighlights />
      </div>
    </>
  );
}
