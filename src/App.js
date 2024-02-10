import MainHeader from "./components/organism/MainHeader";
import CardsGrid from "./components/organism/CardsGrid";
import DroneGrid from "./components/organism/DroneGrid";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout
        header={<MainHeader/>}>
        <CardsGrid></CardsGrid>
        <DroneGrid></DroneGrid>
      </MainLayout>
    </>
   
  
  );
}

export default App;
