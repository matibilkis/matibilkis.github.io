# Analytics & Monitoring Setup

## 📊 Analytics Options

### Option 1: Google Analytics 4 (Recommended for Most)

**Pros:** Free, comprehensive, industry standard
**Cons:** Privacy concerns in some regions

#### Setup:
1. Create GA4 property at https://analytics.google.com/
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `<head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Custom Events to Track:
```javascript
// Planet clicks
document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('click', (e) => {
    gtag('event', 'planet_click', {
      'planet_name': planet.querySelector('.planet__label').textContent
    });
  });
});

// Email clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'contact_email_click');
  });
});

// Video plays
document.querySelectorAll('.video-embed iframe').forEach((video, index) => {
    gtag('event', 'video_view', {
      'video_index': index
    });
});
```

---

### Option 2: Plausible Analytics (Privacy-Focused)

**Pros:** Privacy-friendly, GDPR compliant, no cookie banner needed
**Cons:** Paid ($9/month), less features than GA4

#### Setup:
1. Sign up at https://plausible.io/
2. Add your domain: `matibilkis.github.io`
3. Add to `<head>`:

```html
<script defer data-domain="matibilkis.github.io" src="https://plausible.io/js/script.js"></script>
```

#### Custom Events:
```javascript
// Use plausible() function
document.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('click', () => {
    plausible('Planet Click', {
      props: { planet: planet.querySelector('.planet__label').textContent }
    });
  });
});
```

---

### Option 3: Self-Hosted (Umami)

**Pros:** Full data ownership, privacy-friendly, free
**Cons:** Requires hosting setup

#### Setup:
1. Deploy Umami to Vercel/Railway (free)
2. Get tracking code
3. Add to `<head>`

---

## 🎯 Key Metrics to Track

### Engagement Metrics
- **Page views per session** (target: >2)
- **Average time on site** (target: >30s)
- **Bounce rate** (target: <50%)
- **Scroll depth** (% of users reaching footer)

### Conversion Metrics
- **Planet clicks** (which section is most popular?)
- **Contact email clicks** (% of visitors clicking)
- **External link clicks** (GitHub, LinkedIn)
- **Video plays** (engagement with content)

### Technical Metrics
- **Page load time** (target: <2s)
- **First Contentful Paint** (target: <1.5s)
- **Time to Interactive** (target: <3s)

---

## 🔍 Error Monitoring

### Option 1: Sentry (Recommended)

**Free tier:** 5,000 events/month

#### Setup:
1. Create project at https://sentry.io/
2. Add to `<head>`:

```html
<script
  src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"
  integrity="sha384-xxx"
  crossorigin="anonymous"
></script>
<script>
  Sentry.init({
    dsn: 'YOUR_DSN_HERE',
    environment: 'production',
    tracesSampleRate: 0.1,
  });
</script>
```

---

### Option 2: Custom Error Logging

Simple console error tracking:

```javascript
// Add to assets/js/error-logging.js
window.addEventListener('error', (event) => {
  const errorData = {
    message: event.message,
    source: event.filename,
    line: event.lineno,
    col: event.colno,
    userAgent: navigator.userAgent,
    url: window.location.href,
    timestamp: new Date().toISOString()
  };
  
  // Send to your logging endpoint
  fetch('YOUR_LOGGING_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(errorData)
  }).catch(err => console.error('Failed to log error', err));
});
```

---

## 📈 Uptime Monitoring

### Option 1: UptimeRobot (Free)

1. Sign up at https://uptimerobot.com/
2. Add monitor for `https://matibilkis.github.io/`
3. Configure alerts (email, Slack, etc.)
4. Set check interval: 5 minutes

### Option 2: GitHub Actions

Already included in `.github/workflows/` - runs daily Lighthouse checks.

---

## 🎨 User Experience Monitoring

### Hotjar or Microsoft Clarity

**Heatmaps, session recordings, surveys**

#### Setup (Clarity - Free):
1. Sign up at https://clarity.microsoft.com/
2. Create project
3. Add tracking code to `<head>`:

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

**What you'll see:**
- Heatmaps of where users click
- Session recordings (watch user journeys)
- Scroll maps (how far users scroll)
- Rage clicks (frustration indicators)

---

## 🔔 Recommended Setup for You

Based on your needs (quantum + art + business audience):

### Minimal Setup (Start Here)
```
✅ Google Analytics 4 (free, comprehensive)
✅ GitHub Actions monitoring (already set up!)
✅ Console error logging (lightweight)
```

### Ideal Setup (After Launch)
```
✅ Google Analytics 4 (track all events)
✅ Microsoft Clarity (see user behavior)
✅ UptimeRobot (uptime monitoring)
✅ Sentry (error tracking)
```

### Privacy-First Setup (if GDPR is priority)
```
✅ Plausible Analytics ($9/mo)
✅ Self-hosted Umami (free)
✅ GitHub Actions monitoring
✅ No cookie banner needed!
```

---

## 📝 Implementation Checklist

- [ ] Choose analytics provider
- [ ] Add tracking code to all pages
- [ ] Set up custom events (planet clicks, email, videos)
- [ ] Configure error monitoring
- [ ] Set up uptime monitoring
- [ ] Test all tracking in browser console
- [ ] Add privacy policy page (if using GA4/cookies)
- [ ] Document what data is collected
- [ ] Set up weekly report emails
- [ ] Create dashboard for key metrics

---

## 🎯 Quick Start: Add Google Analytics

1. **Get your GA4 ID** from Google Analytics
2. **Create file:** `assets/js/analytics.js`

```javascript
// Google Analytics 4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your ID

// Custom event tracking
document.addEventListener('DOMContentLoaded', () => {
  // Planet clicks
  document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
      gtag('event', 'planet_click', {
        planet_name: planet.querySelector('.planet__label').textContent
      });
    });
  });
  
  // Email clicks
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'contact_click', { method: 'email' });
    });
  });
  
  // External links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'external_link_click', {
        url: link.href
      });
    });
  });
});
```

3. **Add to all HTML files** before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script src="assets/js/analytics.js"></script>
```

4. **Test:** Open browser console, click around, check `dataLayer` array

---

## 📊 What to Monitor Weekly

1. **Traffic:** How many visitors?
2. **Popular sections:** Which planet gets most clicks?
3. **Contact rate:** % of visitors clicking email
4. **Bounce rate:** Are people leaving immediately?
5. **Mobile vs Desktop:** Device breakdown
6. **Top referrers:** Where are visitors coming from?

---

## 🚨 Alerts to Set Up

1. **Uptime:** Alert if site is down >5 min
2. **Performance:** Alert if load time >3s
3. **Errors:** Alert on JS console errors
4. **Traffic spike:** Alert on 10x traffic increase (possible bot attack)

---

**Need help?** All these tools have great docs. Start with Google Analytics for now, add others as you grow!

