import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"
import { AppContextProvider } from "./contexts/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
}
