import Header from "./components/Header/Header";
import PageLayout from "./components/PageLayout/PageLayout";
import TickersList from "./components/TickersList/TickersList";
import "./App.css";

function App() {
  return (
    <div data-testid="app-wrapper" className="App">
      <Header />
      <PageLayout>
        <TickersList />
      </PageLayout>
    </div>
  );
}

export default App;
