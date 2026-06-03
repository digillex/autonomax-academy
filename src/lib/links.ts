/** Main Autonomax hub — products, cart, and checkout live here. */
export const mainSiteUrl = "https://autonomax.site";

export const mainSiteProductsUrl = `${mainSiteUrl}/products`;
export const mainSiteCartUrl = `${mainSiteUrl}/cart`;
export const mainSiteCheckoutUrl = `${mainSiteUrl}/checkout`;

/** Course interest is passed as a query param for future checkout mapping. */
export function coursePurchaseUrl(courseSlug: string): string {
  return `${mainSiteProductsUrl}?course=${encodeURIComponent(courseSlug)}`;
}
