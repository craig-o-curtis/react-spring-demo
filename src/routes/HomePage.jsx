import { useState } from "react";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import ComponentThree from "../components/ComponentThree";

const HomePage = () => {
  const [showCard3, setShowCard3] = useState(false);
  return (
    <div>
      <ComponentOne />
      <ComponentTwo onToggleCard3={() => setShowCard3(!showCard3)} />
      <ComponentThree show={showCard3} />
    </div>
  );
};

export default HomePage;
