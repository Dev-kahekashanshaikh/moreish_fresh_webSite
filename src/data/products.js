/**
 * Product Catalog Data for MOREISH FRESH
 * 
 * Availability options:
 * - 'available': "Available Now"
 * - 'pending_confirmation': "Availability to Be Confirmed"
 * - 'coming_soon': "Coming Soon"
 * 
 * Note: Never hardcode prices, weights, package sizes, or nutritional claims.
 */

export const productsData = [
  {
    id: 'broiler-chicken',
    status: 'available', // Change to 'pending_confirmation' if verification is needed
    titleKey: 'products.broiler.title',
    labelKey: 'products.broiler.label',
    descriptionKey: 'products.broiler.description',
    image: '/images/product-broiler.jpg',
    imageAltKey: 'products.broiler.imageAlt',
    featured: true
  },
  {
    id: 'seafood',
    status: 'coming_soon',
    titleKey: 'products.seafood.title',
    labelKey: 'products.seafood.label',
    descriptionKey: 'products.seafood.description',
    image: '/images/product-seafood.jpg',
    imageAltKey: 'products.seafood.imageAlt',
    featured: false
  },
  {
    id: 'quail-bird',
    status: 'coming_soon',
    titleKey: 'products.quail.title',
    labelKey: 'products.quail.label',
    descriptionKey: 'products.quail.description',
    image: '/images/product-quail.jpg',
    imageAltKey: 'products.quail.imageAlt',
    featured: false
  },
  {
    id: 'pheasant',
    status: 'coming_soon',
    titleKey: 'products.pheasant.title',
    labelKey: 'products.pheasant.label',
    descriptionKey: 'products.pheasant.description',
    image: '/images/Pheasant.jpg',
    imageAltKey: 'products.pheasant.imageAlt',
    featured: false
  },
  {
    id: 'layer-chicken',
    status: 'coming_soon',
    titleKey: 'products.layer.title',
    labelKey: 'products.layer.label',
    descriptionKey: 'products.layer.description',
    image: '/images/product-layer.jpg',
    imageAltKey: 'products.layer.imageAlt',
    featured: false
  }
];
