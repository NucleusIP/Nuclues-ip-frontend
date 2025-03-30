import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Verify from './pages/Verify';

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/verify" element={<Verify />} />
</Routes>
</Router>
);
}

export default App;
