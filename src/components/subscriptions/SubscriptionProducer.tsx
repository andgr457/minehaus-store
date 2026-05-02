import type { ExchangeRateStorage } from '../../interfaces/ExchangeRates'
import Subscription from './Subscription'

interface SubscriptionProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SubscriptionProducer(props: SubscriptionProps){
  const {
    rateCache,
    selectedCurrency
  } = props
  
  return <Subscription 
    title='Producer'
    costUSD={10}
    rateCache={rateCache}
    selectedCurrency={selectedCurrency}
    description={<div>
      <div className='mossy-italic'>
        Producers help guide the direction of the show.
      </div>
      <div className='page-text'>
        They don't just support the experience as it exists today, they help refine the script into what it becomes tomorrow.
      </div>
      <div className='page-text'>
        By stepping into the role of <span className='purple'>Producer</span>, you help move the world forward with care and long-term perspective.
      </div>
      <div className='page-text'>
        Your support reflects belief in the vision of MineHaus and where its story is headed.
      </div>
      <div className='mossy-italic'>
        Guide the production towards what comes next.
      </div>
    </div>}
    includes={<div>
      <ul>
        <li>
          <span className='wine'>
            The most prominent supporter icon
          </span>
          <br/>
          <span className='subscription-includes-text'>
            displayed by your name in chat and tab
          </span>
        </li>
        <li>
          <span className='wine'>
            A seated statue of your player
          </span>
          <br/>
          <span className='subscription-includes-text'>
            in the MineHaus Grand Theater
          </span>
        </li>
        <li>
          <span className='wine'>
            Access to a private Discord channel
          </span>
          <br/>
          <span className='subscription-includes-text'>
            for feedback, discussion, and polls
          </span>
        </li>
        <li>
          <span className='wine'>
            All <span className='purple'>Benefactor</span> and <span className='purple'>Patron</span> benefits.
          </span>
        </li>
      </ul>
    </div>}
  />
}