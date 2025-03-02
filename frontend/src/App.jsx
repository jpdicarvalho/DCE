import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchSupplie from './SearchSupplier/SearchSupplier';

function App() {

  return (
    <Router>
      <Routes>

          <Route path="/" element={<SearchSupplie />} />
    
      </Routes>
    </Router>
  )
}

export default App
