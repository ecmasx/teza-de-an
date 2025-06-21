import textsData from '@/data/texts.json'

export const texts = textsData

export function getText(key: string): string {
  const keys = key.split('.')
  let current: unknown = texts

  for (const k of keys) {
    if (current && typeof current === 'object' && current !== null && k in current) {
      current = (current as Record<string, unknown>)[k]
    } else {
      console.warn(`Text key not found: ${key}`)
      return key
    }
  }

  return typeof current === 'string' ? current : key
}

export type TextKeys =
  | 'navigation.shop'
  | 'navigation.categories'
  | 'navigation.about'
  | 'navigation.contact'
  | 'navigation.faqs'
  | 'navigation.returns'
  | 'navigation.shipping'
  | 'navigation.terms'
  | 'navigation.privacy'
  | 'hero.badge'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'sections.bestSellers'
  | 'sections.tryInAR'
  | 'sections.byCategory'
  | 'sections.shopAll'
  | 'tryInAR.description'
  | 'cart.title'
  | 'cart.empty'
  | 'cart.addToCart'
  | 'cart.removeFromCart'
  | 'cart.total'
  | 'search.placeholder'
  | 'search.placeholderMobile'
  | 'search.noResults'
  | 'footer.signupTitle'
  | 'footer.signupButton'
  | 'footer.companyName'
  | 'footer.ordersSupport'
  | 'footer.termsConditions'
  | 'footer.followUs'
  | 'footer.promoTitle'
  | 'footer.promoDescription'
  | 'footer.copyToClipboard'
  | 'forms.emailPlaceholder'
  | 'forms.namePlaceholder'
  | 'forms.helpPlaceholder'
  | 'ariaLabels.openMenu'
  | 'ariaLabels.closeMenu'
  | 'ariaLabels.search'
  | 'ariaLabels.cart'
  | 'ariaLabels.closeCart'
  | 'ariaLabels.closeSearch'
  | 'ariaLabels.decrease'
  | 'ariaLabels.increase'
  | 'ariaLabels.decreaseQuantity'
  | 'ariaLabels.increaseQuantity'
  | 'ariaLabels.copyToClipboard'
  | 'ariaLabels.instagram'
  | 'ariaLabels.logo'
  | 'ariaLabels.previousSlide'
  | 'ariaLabels.nextSlide'
  | 'altTexts.logo'
  | 'altTexts.phoneAR'
  | 'about.title'
  | 'about.description'
  | 'about.mission.title'
  | 'about.mission.text'
  | 'about.whyChoose.title'
  | 'categories.shopPrefix'
  | 'contact.title'
  | 'contact.description'
  | 'contact.email'
  | 'contact.phone'
  | 'contact.address'
  | 'contact.addressValue'
  | 'contact.emailValue'
  | 'contact.phoneValue'
  | 'contact.yourName'
  | 'contact.yourEmail'
  | 'contact.message'
  | 'contact.sendMessage'
  | 'contact.sending'
  | 'contact.successMessage'
  | 'contact.errorMessage'
  | 'product.backToShop'
  | 'product.addToCart'
  | 'product.scanAR'
  | 'chairCard.arPreview'
  | 'chairCard.view'
  | 'common.currency'

export function getTypedText(key: TextKeys): string {
  return getText(key)
}

export default texts
