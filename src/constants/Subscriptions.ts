import { SubscriptionTypes, type Subscription } from '../interfaces/Subscription';

export const SubscriptionPatronDetails: Subscription = {
  type: SubscriptionTypes.Patron,
  costUSD: 2,
  redirectUrl: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-01E37140NS2029534'
}

export const SubscriptionBenefactorDetails: Subscription = {
  type: SubscriptionTypes.Benefactor,
  costUSD: 5,
  redirectUrl: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-1Y820204WK712254P'
}

export const SubscriptionProducerDetails: Subscription = {
  type: SubscriptionTypes.Producer,
  costUSD: 10,
  redirectUrl: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-09S56472V1987490B'
}

export const SubscriptionOneTimeDetails: Subscription = {
  type: SubscriptionTypes.OneTime,
  costUSD: 1,
  redirectUrl: 'https://checkout.stripe.com/c/pay/cs_live_a1LsmutbDdd9DK8g3GGGNVrspSZc1PUcrus1hTe9hBGB13dgNhd0ZXylQe#fidkdWxOYHwnPyd1blppbHNgWk50amNNSXBXMXdMRkdLYUR2cW4yRGtvRDU1aEh3VkthfHMnKSdobGF2Jz9%2BJ2hwbGEnPydLRCcpJ3ZsYSc%2FJ0tEJyknYnBsYSc%2FJ0tEJ3gpJ2dgcWR2Jz9eWCknaWR8anBxUXx1YCc%2FJ3Zsa2JpYFpscWBoJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnVkfGhga3F2K2ZpanBhdXdqcWBmcWBhK2tgcSd4JSUl'
}