# Logo Setup Guide for FRUOOZE Website

## ✅ What's Already Done

Your website has been fully configured to use your FRUOOZE logo in the following places:

1. **Browser Favicon** - The icon that appears in browser tabs
2. **Website Header** - Main navigation logo
3. **Footer** - Brand logo at the bottom of the page
4. **Social Media Previews** - Open Graph meta tags for sharing

## 📋 How to Add Your Logo

### Step 1: Save Your Logo Image

Take the FRUOOZE logo image (the one with orange slices forming "OO") and save it as:

**Filename:** `logo.png`
**Location:** `/Users/sandeepramdaz/fruooze/public/`

### Step 2: Image Requirements

For best results, your logo should be:

- **Format:** PNG (with transparent background preferred)
- **Resolution:** At least 500px wide (higher is better)
- **Aspect Ratio:** Horizontal/landscape orientation
- **File Size:** Under 500KB for fast loading

### Step 3: Refresh Your Browser

Once you add the logo.png file to the /public folder:

1. The website will automatically detect it
2. Refresh your browser (or it will auto-reload)
3. Your logo will appear in the header, footer, and favicon

## 🎨 Current Setup

### Temporary Favicon
A temporary SVG favicon has been created at `/public/favicon.svg` with your brand colors (orange and green). This will be used until you add your PNG logo.

### Fallback Text
If the logo image is not found or fails to load, the website will display "FRUOOZE" text instead, ensuring the site always looks professional.

### Where Your Logo Appears

1. **Header (60px height)**
   - Desktop: Up to 200px wide
   - Mobile: 50px height, up to 160px wide

2. **Footer (70px height)**
   - Up to 220px wide
   - Slightly brightened for visibility on dark green background

3. **Favicon (16x16, 32x32, etc.)**
   - Browser automatically scales to appropriate size

## 🚀 Quick Command

To copy your logo to the correct location, run:

```bash
# Replace /path/to/your/logo.png with the actual path
cp /path/to/your/logo.png /Users/sandeepramdaz/fruooze/public/logo.png
```

## 🔍 Verify Logo Setup

After adding the logo, check:

1. Open http://localhost:5173/ in your browser
2. Look for the logo in the header (top of page)
3. Scroll to the footer to see the logo there
4. Check the browser tab for the favicon

## 💡 Additional Customization

If you want to adjust logo sizes, edit these files:

- **Header:** `/src/components/Header.css` (line 29-34)
- **Footer:** `/src/components/Footer.css` (line 30-36)

---

**Need Help?** The website is already configured and working. Simply add your logo.png file to the /public folder and you're done! 🎉
