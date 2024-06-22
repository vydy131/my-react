import "./App.css";
import Header from "./components/Header/Header";
import TabsSelector from "./components/TabsSelector";

// хочу свой сайт
// СДЕЛАНО с хэдером
// СДЕЛАНО после него идут табы
//  СДЕЛАНО табы включают кнопки, которые переключают вкладки
// СДЕЛАНО табы подсвечиваются если активны
// таб с инфой из json
// таб с каким нибудь списком, может импортнутьб Json
// таб с формой
// кнопочки справа внизу
// возможно потом стоит продумать роутинг, просто для галочки
// после этого подумать насчет mobx

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TabsSelector />
      </main>
    </>
  );
}
