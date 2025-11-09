import { LANDINGS_MAP } from "./data/all-landings-map";
import LandingStructure from "./templates/LandingStructure";

const getCurrentLandingId = () => {
  const path = window.location.pathname
    .split("/")
    .filter((p) => p)
    .pop();

  return LANDINGS_MAP[path as keyof typeof LANDINGS_MAP] ? path : "landing-1";
};

function App() {
  const landingId = getCurrentLandingId();
  const landingData = LANDINGS_MAP[landingId as keyof typeof LANDINGS_MAP];

  document.title = landingData.metaTitle;

  return <LandingStructure data={landingData} />;
}

export default App;
