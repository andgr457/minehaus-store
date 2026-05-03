import type { ExchangeRateStorage } from '../../interfaces/ExchangeRates'
import Subscription from './Subscription'

interface SubscriptionProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SubscriptionPatron(props: SubscriptionProps){
  const {
    rateCache,
    selectedCurrency
  } = props
  
  return <Subscription 
    title='Patron'
    costUSD={2}
    rateCache={rateCache}
    selectedCurrency={selectedCurrency}
    description={<div>
      <div className='mossy-italic'>
        Patrons help keep the house open.
      </div>
      <div className='page-text'>
        They support the quiet, behind-the-scenes 
        work that allows MineHaus to exist as a 
        living world, night after night.
      </div>
      <div className='page-text'>
        By stepping into the role of <span className='purple'>Patron</span>, you're 
        helping sustain the ongoing production that 
        is MineHaus. 
      </div>
      <div className='page-text'>
        Your support keeps the lights 
        warm, the doors open, and the story moving 
        forward for everyone who takes part.
      </div>
      <div className='mossy-italic'>
        Keep the lights warm and the curtain rising.
      </div>
    </div>}
    includes={<div>
      <ul>
        <li>
          <span className='wine'>
            A subtle supporter icon
          </span>
          <br/>
          <span className='foot-note'>
            displayed by your name in chat and tab
          </span>
        </li>
        <li>
          <span className='wine'>
            Early access to the 4th <code>/sethome</code> unlock
          </span>
          <br/>
          <span className='foot-note'>
            (Normally earned at 96 hours of playtime)
          </span>
        </li>
      </ul>
    </div>}
  />
}