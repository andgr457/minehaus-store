import { useEffect } from 'react';
import type { ExchangeRateStorage } from '../interfaces/ExchangeRates';
import SubscriptionPatron from '../components/subscriptions/SubscriptionPatron';

interface SupportMonthlyProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SupportMonthlyPage(props: SupportMonthlyProps){
  useEffect(() => {
    document.title = "Minehaus Store | Support | Monthly";
    
    // Optional: Reset title when component unmounts
    return () => {
      document.title = "Minehaus Store";
    };
  }, []);
  return <div>
    <div className='page-main'>
      <div className='header-1'>
        Why monthly support?
      </div>
      <div className='page-text'>
        MineHaus has ongoing monthly costs, including physical server hardware, 
        data security, plugin development, and infrastructure that keep the 
        network running smoothly. Monthly support provides the stability needed 
        to cover those fixed costs reliably.
      </div>
      <div className='page-text'>
        It also helps ensure that support comes from players who are actively 
        part of MineHaus. This keeps benefits relevant, fair, and aligned with 
        those who are currently playing and contributing to the community.
      </div>
      <div className='page-text'>
        Beyond fixed costs, monthly support reflects the ongoing responsibility 
        of running a server. MineHaus requires consistent attention, care, and 
        decision-making to remain well-maintained, and enjoyable for everyone.
      </div>
      <div className='foot-note'>
        * Exchange rates are approximate. Final totals may vary slightly based on your payment provider.
      </div>
      <hr/>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        <SubscriptionPatron rateCache={props.rateCache} selectedCurrency={props.selectedCurrency} />
      </div>
    </div>
  </div>
}