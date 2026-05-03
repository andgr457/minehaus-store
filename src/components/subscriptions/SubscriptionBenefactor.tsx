import type { ExchangeRateStorage } from '../../interfaces/ExchangeRates'
import Subscription from './Subscription'

interface SubscriptionProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SubscriptionBenefactor(props: SubscriptionProps){
  const {
    rateCache,
    selectedCurrency
  } = props
  
  return <Subscription 
    title='Benefactor'
    costUSD={5}
    rateCache={rateCache}
    selectedCurrency={selectedCurrency}
    description={<div>
      <div className='mossy-italic'>
        Benefactors help shape the production.
      </div>
      <div className='page-text'>
        They go beyond keeping the house open and help elevate the experience itself through care, refinement, and attention to detail.
      </div>
      <div className='page-text'>
        By stepping into the role of <span className='purple'>Benefactor</span>, you help polish what already exists while encouraging new ideas.
      </div>
      <div className='page-text'>
        Your support allows MineHaus to grow thoughtfully, without losing its character.
      </div>
      <div className='mossy-italic'>
        Help shape the experience as the show evolves.
      </div>
    </div>}
    includes={<div>
      <ul>
        <li>
          <span className='wine'>
            A prominent supporter icon
          </span>
          <br/>
          <span className='foot-note'>
            displayed by your name in chat and tab
          </span>
        </li>
        <li>
          <span className='wine'>
            Recognition in the MineHaus Discord
          </span>
        </li>
        <li>
          <span className='wine'>
            Access to the <code>/emote</code> command
          </span>
        </li>
        <li>
          <span className='wine'>
            All <span className='purple'>Patron</span> benefits.
          </span>
        </li>
      </ul>
    </div>}
  />
}