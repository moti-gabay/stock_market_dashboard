import { useState } from 'react'
import './App.css'
import { useStock } from './hooks/useStock';
import { useDebounce } from './hooks/useDebounce';
import Home from './pages/home/Home';
import { InputEl } from './components/UI/input/Input';

function App() {
  const [symbol, setSymbol] = useState("NVDA");

  const debouncedSymbol = useDebounce(symbol, 500);

  const { data,isLoading, isError, error } = useStock(debouncedSymbol.trim())

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className='app-constainer'>
      <h1>stock market dashboard</h1>
      <InputEl value={symbol} onChange={(e:any) => setSymbol(e.target.value.toUpperCase())} />

      <Home data={data}  />
    </div>
  )
}

export default App
