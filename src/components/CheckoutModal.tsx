import { useCallback, useState } from 'react';
import type { ExchangeRateStorage } from '../interfaces/ExchangeRates';
import { SubscriptionTypes, type Subscription } from '../interfaces/Subscription';
import type { ModalProps } from './Modal';
import Modal from './Modal';
import SubscriptionBenefactor from './subscriptions/SubscriptionBenefactor';
import SubscriptionPatron from './subscriptions/SubscriptionPatron';
import SubscriptionProducer from './subscriptions/SubscriptionProducer';
import SubscriptionOneTime from './subscriptions/SubscriptionOneTime';

interface CheckoutModalProps extends ModalProps {
  subscription: Subscription
  selectedCurrency: string
  rateCache: ExchangeRateStorage
}

export default function CheckoutModal(props: CheckoutModalProps){
  const {
    backdropHides,
    isOpen,
    onClose,
    rateCache,
    selectedCurrency,
    subscription,
    title
  } = props

  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const payMethod = subscription?.type === SubscriptionTypes.OneTime ? 'stripe' : 'paypal'

  const subscriptionToDisplay = 
    subscription?.type === SubscriptionTypes.Patron ?
      <SubscriptionPatron rateCache={rateCache} selectedCurrency={selectedCurrency} /> :
    subscription?.type === SubscriptionTypes.Benefactor ?
      <SubscriptionBenefactor rateCache={rateCache} selectedCurrency={selectedCurrency} /> :
    subscription?.type === SubscriptionTypes.Producer ?
      <SubscriptionProducer rateCache={rateCache} selectedCurrency={selectedCurrency} /> :
    subscription?.type === SubscriptionTypes.OneTime ?
      <SubscriptionOneTime rateCache={rateCache} selectedCurrency={selectedCurrency} /> :
        null

  const handleConfirmClicked = useCallback(() => {
    if(!username || !email){
      return
    }
    window.open(subscription.redirectUrl, '_blank')
  }, [username, email, subscription])

  if(!isOpen){
    return null
  }

  return <Modal
    backdropHides={backdropHides}
    isOpen={isOpen}
    title={title}
    onClose={onClose}
  >
    <div className='page-main'>
      
      <div className='page-text'>
        <span className='purple'>Note</span>: Please match your in-game name exactly. It is (CaSe-sensitive).
      </div>
      <div className='page-text'>
        Java example: <code>Steve</code> Bedrock example: <code>.Steve</code>
      </div>
      <div className='page-text danger'>
        If the name is entered incorrectly, benefits may go to the wrong account or may not apply at all.
      </div>
      <div className='page-text'>
        Supporting on behalf of someone else? Enter their exact in-game name here.
      </div>

      <div className='minehaus-hr'/>

      <div style={{paddingBottom: '5px', display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center'}}>
        <div>
          <div className='page-text'>
            In-Game Name
          </div>
          <div style={{textAlign: 'center'}}>
            <input 
              type='text'
              value={username}
              onChange={(e) => {setUsername(e.currentTarget.value)}}
            />
          </div>
        </div>
        <div>
          <div className='page-text'>
            E-Mail
          </div>
          <div style={{textAlign: 'center'}}>
            <input 
              type='text'
              value={email}
              onChange={(e) => {setEmail(e.currentTarget.value)}}
            />
          </div>
        </div>
        <div>
          <div className='page-text'>
            Payment Method
          </div>
          <div className='select-wrapper'>
            <select value={payMethod} disabled style={{width: '100px', marginLeft: '13px'}}>
              <option value='paypal'>PayPal</option>
              <option value='stripe'>Stripe</option>
            </select>
            
          </div>
        </div>
      </div>
      <div style={{paddingBottom: '5px', display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center'}}>
        <button onClick={handleConfirmClicked}>
          Confirm
        </button>
      </div>
      <div className='minehaus-hr'/>
      <div style={{paddingTop: '5px', display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center'}}>
        {subscriptionToDisplay}

      </div>
      
    </div>
  </Modal>
}