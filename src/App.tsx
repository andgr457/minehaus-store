import { Routes, Route } from "react-router-dom";
import { ConfirmProvider } from './context/ConfirmProvider';
import HomePage from './pages/HomePage';
import SupportMonthlyPage from './pages/SupportMonthlyPage';
import SupportOneTimePage from './pages/SupportOneTimePage';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { ExchangeRateResponse, ExchangeRateStorage } from './interfaces/ExchangeRates';
import { DateTime } from 'luxon';
import CurrencySelection from './components/CurrencySelection';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal()
  const [currency, setCurrency] = useState('USD')
  const [rateCache, setRateCache] = useLocalStorage<ExchangeRateStorage>(
    'minehaus-rates',
    {
      lastRefreshed: '',
      rates: {}
    }
  )

  useEffect(() => {
    const load = async function(){
      return //temp since my browser already has some test data. comment out to let it run normally.
      
      //only update cache if lastRefreshed is empty or if it's been 24 hours since last refresh.
      if(rateCache.lastRefreshed){
        const today = DateTime.utc()
        const lastRefresh = DateTime.fromISO(rateCache.lastRefreshed)
        const diffHours = Math.abs(today.diff(lastRefresh, 'hours').hours)
        console.log(diffHours)
        if(diffHours < 24){
          console.debug('Rates cache not updated.')
          return
        }
      }
      //This is temporary development.
      //TODO: Point to our API
      const apiKey = import.meta.env.VITE_FX_API_KEY;
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      const res = await fetch(url);
      const data: ExchangeRateResponse = await res.json();
  
      const newRatesCache: ExchangeRateStorage = {
        lastRefreshed: DateTime.utc().toISO(),
        rates: data.conversion_rates
      }
      setRateCache(newRatesCache)
      console.debug('Rates updated.', newRatesCache)
    }
    load()
  }, [currency])

  return (
    <ConfirmProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support/monthly" element={
          <>
            <CurrencySelection selectedCurrency={currency} onCurrencyChanged={(newCurrency: string) => {setCurrency(newCurrency)}} />
            <SupportMonthlyPage 
              rateCache={rateCache} 
              selectedCurrency={currency}
            />
          </>
        } />
        <Route path="/support/one-time" element={
          <>
            <CurrencySelection selectedCurrency={currency} onCurrencyChanged={setCurrency} />
            <SupportOneTimePage 
              rateCache={rateCache} 
              selectedCurrency={currency}
            />
          </>
        } />
        

        <Route path="*" element={<HomePage />} />
      </Routes>
    </ConfirmProvider>
  );
}
