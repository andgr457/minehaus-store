import type { ExchangeRateStorage } from '../../interfaces/ExchangeRates'
import Subscription from './Subscription'

interface SubscriptionProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SubscriptionOneTime(props: SubscriptionProps){
  const {
    rateCache,
    selectedCurrency
  } = props
  
  return <Subscription 
    title='One-Time'
    costUSD={1}
    rateCache={rateCache}
    selectedCurrency={selectedCurrency}
    description={<div>
      <div className='page-text'>
        One-Time Support exists for those moments when you feel inclined to contribute, without stepping into a recurring role.
      </div>
      <div className='page-text'>
        It offers a flexible way to lend support on your own terms, whether as a quiet thank you, a celebration, or simply a gesture of appreciation for the world and community you enjoy.
      </div>
      <div className='page-text'>
        <span className='purple'>Tip</span>: You can adjust the <span className='gold'>quantity</span> at checkout to reflect any amount you would like to give.
      </div>
      <div className='mossy-italic'>
        Keep the lights warm and the curtain rising.
      </div>
    </div>}
    includes={null}
  />
}