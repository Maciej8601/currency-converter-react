import './App.css';
import Footer from "./Footer";
import Form from "./Form";
import Currency from "./Currency";
import Title from "./Title";

function App() {
  return (
    <div className="body">
      <main>
        <Title description="Kalkulator walut" />
        <Form />
        <Currency />
      </main>
      <Footer />
    </div>
  );
}

export default App;
