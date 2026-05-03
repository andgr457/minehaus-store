import { useCallback, useEffect, useState } from 'react';
import type { ExchangeRateStorage } from '../interfaces/ExchangeRates';
import SubscriptionPatron from '../components/subscriptions/SubscriptionPatron';
import SubscriptionBenefactor from '../components/subscriptions/SubscriptionBenefactor';
import SubscriptionProducer from '../components/subscriptions/SubscriptionProducer';
import CheckoutModal from '../components/CheckoutModal';
import { SubscriptionTypes, type Subscription, type SubscriptionType } from '../interfaces/Subscription';
import { SubscriptionBenefactorDetails, SubscriptionPatronDetails, SubscriptionProducerDetails } from '../constants/Subscriptions';
import useScrollReveal from '../hooks/useScrollReveal';

interface SupportMonthlyProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SupportMonthlyPage(props: SupportMonthlyProps){
  useScrollReveal()
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | undefined>(undefined)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)

  useEffect(() => {
    document.title = "Minehaus Store | Support | Monthly";
    
    // Optional: Reset title when component unmounts
    return () => {
      document.title = "Minehaus Store";
    };
  }, []);

  const handleSubscriptionClicked = useCallback((subscriptionType: SubscriptionType) => {
    if(subscriptionType === SubscriptionTypes.Patron){
      setSelectedSubscription(SubscriptionPatronDetails)
    } else if(subscriptionType === SubscriptionTypes.Benefactor){
      setSelectedSubscription(SubscriptionBenefactorDetails)
    } else if(subscriptionType === SubscriptionTypes.Producer){
      setSelectedSubscription(SubscriptionProducerDetails)
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
      title={`Support as a ${selectedSubscription?.type}`}
      children={null}
    />
    <div className='page-main reveal'>
      <div className='header-1'>
        Why monthly support?
        <div className='minehaus-hr small' />
      </div>
      <div className='page-text dark'>
        MineHaus has ongoing monthly costs, including physical server hardware, 
        data security, plugin development, and infrastructure that keeps the 
        network running smoothly. Monthly support provides the stability needed 
        to cover those fixed costs reliably.
      </div>
      <div className='page-text dark'>
        It also helps ensure that support comes from players who are actively 
        part of MineHaus. This keeps benefits relevant, fair, and aligned with 
        those who are currently playing and contributing to the community.
      </div>
      <div className='page-text dark'>
        Beyond fixed costs, monthly support reflects the ongoing responsibility 
        of running a server. MineHaus requires consistent attention, care, and 
        decision-making to remain well-maintained, and enjoyable for everyone.
      </div>
      <div className='foot-note'>
        * Exchange rates are approximate. Final totals may vary slightly based on your payment provider.
      </div>
      <div className='minehaus-hr gold' />
      <div style={{marginTop: '5px', justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        <div onClick={() => {handleSubscriptionClicked(SubscriptionTypes.Patron)}}>
          <SubscriptionPatron rateCache={props.rateCache} selectedCurrency={props.selectedCurrency} />
        </div>
        <div onClick={() => {handleSubscriptionClicked(SubscriptionTypes.Benefactor)}}>
          <SubscriptionBenefactor rateCache={props.rateCache} selectedCurrency={props.selectedCurrency} />
        </div>
        <div onClick={() => {handleSubscriptionClicked(SubscriptionTypes.Producer)}}>
          <SubscriptionProducer rateCache={props.rateCache} selectedCurrency={props.selectedCurrency} />
        </div>
      </div>
    </div>
  </div>
}