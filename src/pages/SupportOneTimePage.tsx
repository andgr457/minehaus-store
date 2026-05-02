import { useEffect } from 'react';
import type { ExchangeRateStorage } from '../interfaces/ExchangeRates';

interface SupportOneTimeProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SupportOneTimePage(props: SupportOneTimeProps){
  useEffect(() => {
      document.title = "Minehaus Store | Support | One-Time";
      
      // Optional: Reset title when component unmounts
      return () => {
        document.title = "Minehaus Store";
      };
    }, []);
  return <div>
    Support One-Time Page
  </div>
}