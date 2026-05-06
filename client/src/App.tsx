import { useState } from 'react'
import './App.css'
import { useStock } from './hooks/useStock';
import { useDebounce } from './hooks/useDebounce';
import Home from './pages/home/Home';

function App() {

  const [symbol, setSymbol] = useState("AAPL");

  const debouncedSymbol = useDebounce(symbol, 500);


  const { isLoading, isError, error } = useStock(debouncedSymbol.trim());




  if (isLoading) return <div>Loading...</div>;


  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className='app-constainer'>
      <h1>stock market dashboard</h1>
      <div className="search-container">

        <input placeholder="Enter symbol (e.g. AAPL)"
          type="text" value={symbol} onChange={(e) => setSymbol(e.target.value.toUpperCase())} name="" id="" />
      </div>
      <Home  />
    </div>
  )
}

export default App
