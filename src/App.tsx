import { Home } from "./components/Home";
import { GlobalStyle, Header } from "./styles/global";

function App() {

 

  return (
    <div>
      <GlobalStyle/>
      <Header>
        <h1>Markdow Previewer</h1>
      </Header>
      <Home/>
    </div>
  )
}

export default App;
