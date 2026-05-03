import { useCallback, useEffect, useState } from 'react';
import type { ExchangeRateStorage } from '../interfaces/ExchangeRates';
import { SubscriptionTypes, type Subscription, type SubscriptionType } from '../interfaces/Subscription';
import { SubscriptionOneTimeDetails } from '../constants/Subscriptions';
import CheckoutModal from '../components/CheckoutModal';
import SubscriptionOneTime from '../components/subscriptions/SubscriptionOneTime';
import useScrollReveal from '../hooks/useScrollReveal';

interface SupportOneTimeProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SupportOneTimePage(props: SupportOneTimeProps){
  useScrollReveal()
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | undefined>(undefined)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)
  
  useEffect(() => {
    document.title = "Minehaus Store | Support | One-Time";
    
    // Optional: Reset title when component unmounts
    return () => {
      document.title = "Minehaus Store";
    };
  }, []);

  const handleSubscriptionClicked = useCallback((subscriptionType: SubscriptionType) => {
    if(subscriptionType === SubscriptionTypes.OneTime){
      setSelectedSubscription(SubscriptionOneTimeDetails)
    }
    setShowCheckoutModal(true)
  }, [])

  return <div>
    <CheckoutModal 
      rateCache={props.rateCache}
      selectedCurrency={props.selectedCurrency}
      subscription={selectedSubscription as Subscription}
      backdropHides={false}
      isOpen={showCheckoutModal}
      onClose={() => {setShowCheckoutModal(false)}}
      title={`Support ${selectedSubscription?.type}`}
      children={null}
    />
    <div className='page-main reveal'>
      <div className='header-1'>
        One-Time Support
        <div className='minehaus-hr small' />
      </div>
      <div className='page-text'>
        One-Time Support exists for those moments when you feel inclined to contribute, without stepping into a recurring role.
      </div>
      <div className='foot-note'>
        * Exchange rates are approximate. Final totals may vary slightly based on your payment provider.
      </div>
      <div className='minehaus-hr'></div>
      <div style={{marginTop: '5px', justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        <div onClick={() => {handleSubscriptionClicked(SubscriptionTypes.OneTime)}}>
          <SubscriptionOneTime rateCache={props.rateCache} selectedCurrency={props.selectedCurrency} />
        </div>
      </div>
    </div>
  </div>
}