# SEO Usage Guide - Developer Reference

## Quick Start

### Update Meta Tags for a Page

```typescript
import { SEO_META_DATA, updatePageMeta } from './data/seoMeta';

// In your component or route handler:
useEffect(() => {
  updatePageMeta(SEO_META_DATA.carRentalServices);
}, []);
```

### Available Meta Data Keys

```typescript
// All available pages in SEO_META_DATA:
- home
- carRentalServices
- taxiServices
- tempoTravellerRentals
- busRentalServices
- airportTransfers
- weddingVehicleRentals
- tourPackages
- outstationCarRentals
- innovaCrystaRental
- corporateTravelServices
- templeTourServices
- monthlyCarRental
- luxuryVehicleRentals
- contact
```

## Updating Meta Tags for New Pages

### Step 1: Add Meta Data Entry

Edit `src/data/seoMeta.ts` and add your new page:

```typescript
export const SEO_META_DATA: Record<string, PageMeta> = {
  // ... existing entries ...
  yourNewPage: {
    title: "Page Title | Sree Hanuman Travels",
    description: "A compelling description of the page content for search engines.",
    canonical: "https://sreehanumantravels.com/your-new-page",
    keywords: "keyword1, keyword2, keyword3, keyword4",
  },
};
```

### Step 2: Use in Your Component

```typescript
import { SEO_META_DATA, updatePageMeta } from './data/seoMeta';
import { useEffect } from 'react';

function YourNewPage() {
  useEffect(() => {
    updatePageMeta(SEO_META_DATA.yourNewPage);
  }, []);

  return (
    // Your page content
  );
}
```

### Step 3: Add to Sitemap

Edit `public/sitemap.xml` and add:

```xml
<url>
  <loc>https://sreehanumantravels.com/your-new-page</loc>
  <lastmod>2024-01-18</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

## Injecting Schema Markup

### Organization Schema (Already Done)

Automatically injected on app load. Shows:
- Business name, address, phone
- Service types
- Opening hours
- Ratings and reviews

### Add FAQ Schema

```typescript
import { injectSchemaMarkup, faqSchema } from './data/schemaMarkup';

const faqs = [
  {
    question: "How do I book a car?",
    answer: "You can book a car through our website or call us at 9676939529."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards, and digital payments."
  }
];

// In your component:
useEffect(() => {
  injectSchemaMarkup(faqSchema(faqs));
}, []);
```

### Add Breadcrumb Schema

```typescript
import { injectSchemaMarkup, breadcrumbSchema } from './data/schemaMarkup';

const breadcrumbs = [
  { name: "Home", url: "https://sreehanumantravels.com/" },
  { name: "Services", url: "https://sreehanumantravels.com/services" },
  { name: "Car Rentals", url: "https://sreehanumantravels.com/car-rental-services" }
];

useEffect(() => {
  injectSchemaMarkup(breadcrumbSchema(breadcrumbs));
}, []);
```

## Meta Tag Best Practices

### Title Tag
- **Length:** 50-60 characters
- **Format:** `Primary Keyword | Brand Name`
- **Example:** `Best Car Rental Services in Kadapa | Sree Hanuman Travels`

### Meta Description
- **Length:** 150-160 characters
- **Include:** Main keyword, call-to-action
- **Example:** `Hire AC cars, Innova Crysta, SUVs in Kadapa. Flexible hourly, daily, monthly rental plans available.`

### Keywords
- **Count:** 4-6 main keywords
- **Type:** Long-tail and short-tail mix
- **Example:** `Car Rental Kadapa, Innova Crysta, Premium Car Hire, Affordable Rentals`

### Canonical URL
- **Purpose:** Prevent duplicate content issues
- **Format:** Full URL with https
- **Example:** `https://sreehanumantravels.com/car-rental-services`

## SEO Monitoring

### Google Search Console Integration

1. **Verify Property:**
   - Add HTML file to public folder, or
   - Use DNS verification

2. **Submit Sitemap:**
   - Go to Sitemaps section
   - Add: `https://sreehanumantravels.com/sitemap.xml`

3. **Monitor:**
   - Crawl errors
   - Search performance
   - Click-through rate
   - Average position

### Google Analytics Integration

Add this to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## Testing SEO Implementation

### Tools and Resources

1. **Google Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly

2. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/

3. **Schema.org Validator**
   - https://validator.schema.org/

4. **SEMrush SEO Audit**
   - https://www.semrush.com/

5. **Ahrefs SEO Audit**
   - https://ahrefs.com/

### Manual Testing Checklist

- [ ] Meta title appears in browser tab
- [ ] Meta description shows in SERP (simulated)
- [ ] Canonical URL is correct
- [ ] OG tags render correctly on social media
- [ ] Schema markup validates
- [ ] Images have alt text
- [ ] Internal links are working
- [ ] Site loads in < 3 seconds
- [ ] Mobile responsive design works
- [ ] No 404 errors on main pages

## Common SEO Mistakes to Avoid

❌ **Don't:**
- Stuff keywords excessively
- Use duplicate meta titles/descriptions
- Ignore mobile optimization
- Use hidden text or white text on white background
- Buy backlinks
- Use cloaking techniques
- Auto-redirect users based on IP/location
- Have broken internal links
- Ignore Core Web Vitals
- Use misleading titles/descriptions

✅ **Do:**
- Write natural, compelling copy
- Focus on user experience
- Use semantic HTML
- Include relevant internal links
- Create original content
- Update content regularly
- Use proper heading hierarchy
- Add descriptive image alt text
- Monitor analytics
- Build quality backlinks

## Performance Optimization Tips

### Image Optimization
```html
<!-- Use modern formats with fallbacks -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Descriptive alt text">
</picture>

<!-- Lazy load images -->
<img src="image.jpg" loading="lazy" alt="Descriptive alt text">
```

### CSS & JavaScript
- Minify CSS and JS
- Use critical CSS inline
- Defer non-critical JS
- Remove unused CSS

### Caching
- Enable browser caching
- Use service workers for offline
- Cache static assets (images, CSS, JS)

## Local SEO for Kadapa

Since Sree Hanuman Travels is location-specific:

1. **Google Business Profile**
   - Add complete business information
   - Add photos and videos
   - Respond to reviews
   - Post updates regularly

2. **Local Citations**
   - Directory listings (Justdial, Google Maps)
   - Local business directories
   - Chamber of commerce websites

3. **Local Keywords**
   - "Near me" queries
   - City + service combinations
   - Neighborhood-specific content

4. **Reviews and Ratings**
   - Encourage customer reviews
   - Respond professionally
   - Use review schema

## Content Strategy

### Blog Topics to Consider
- "Top 10 Destinations from Kadapa"
- "Guide to Temple Tours in Andhra Pradesh"
- "Budget Tips for Group Travel"
- "Airport Transfer Tips for First-time Travelers"
- "Best Season to Visit Tirupati"

### Link Building Ideas
- Partner with local hotels and tourism sites
- Guest posts on travel blogs
- Local business partnerships
- Travel directory submissions

## Domain Configuration

### Before Launch

1. **Update Domain in SEO Files:**
   - `index.html` - OG URL
   - `src/data/seoMeta.ts` - All canonical URLs
   - `src/data/schemaMarkup.ts` - Organization URL
   - `public/robots.txt` - Sitemap URL
   - `public/sitemap.xml` - All URLs

2. **SSL Certificate:**
   - Ensure HTTPS is enabled
   - Redirect HTTP → HTTPS

3. **DNS Configuration:**
   - Set up proper DNS records
   - Add www subdomain redirect

## Maintenance Checklist

- [ ] Monthly: Check Google Search Console
- [ ] Monthly: Review analytics
- [ ] Quarterly: Audit meta tags
- [ ] Quarterly: Check for broken links
- [ ] Quarterly: Review and update content
- [ ] Annually: Full SEO audit
- [ ] As needed: Add new schema markup
- [ ] As needed: Update sitemap for new pages

---

**Last Updated:** January 2024
**Version:** 1.0
