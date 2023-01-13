import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Logement from './pages/Logement/Logement';
import APropos from './pages/A Propos/APropos';
import NotFound from './pages/Not Found/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/logements/:id"
          element={<Logement />}
          errorElement={<NotFound />}
        />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
