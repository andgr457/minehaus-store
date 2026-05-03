import { SubscriptionTypes, type Subscription } from '../interfaces/Subscription';

export const SubscriptionPatronDetails: Subscription = {
  type: SubscriptionTypes.Patron,
  costUSD: 2,
  redirectUrl: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-01E37140NS2029534'
}

export const SubscriptionBenefactorDetails: Subscription = {
  type: SubscriptionTypes.Benefactor,
  costUSD: 5,
  redirectUrl: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token='
}

export const SubscriptionProducerDetails: Subscription = {
  type: SubscriptionTypes.Producer,
  costUSD: 10,
  redirectUrl: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token='
}

export const SubscriptionOneTimeDetails: Subscription = {
  type: SubscriptionTypes.OneTime,
  costUSD: 1,
  redirectUrl: 'https://checkout.stripe.com/c/pay'
}