# FRUOOZE Website Deployment Guide

## ✅ Completed Steps

1. ✅ Git repository initialized
2. ✅ Production build created (`dist/` folder)
3. ✅ Vercel configuration added

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Deploy the Website

Run the following command in your terminal:

```bash
npx vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **What's your project's name?** → fruooze (or press Enter)
- **In which directory is your code located?** → ./ (press Enter)
- **Want to override the settings?** → No

This will deploy your site and give you a URL like: `https://fruooze.vercel.app`

### Step 2: Deploy to Production

Once the initial deployment is successful, deploy to production:

```bash
npx vercel --prod
```

### Step 3: Add Custom Domain (www.fruooze.com)

#### Option A: Through Vercel Dashboard (Recommended)

1. Go to [https://vercel.com](https://vercel.com) and login
2. Select your `fruooze` project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `fruooze.com` and `www.fruooze.com`
6. Vercel will provide DNS records to add

#### Option B: Through CLI

```bash
npx vercel domains add fruooze.com
npx vercel domains add www.fruooze.com
```

### Step 4: Configure DNS

You'll need to add these DNS records at your domain registrar (where you bought fruooze.com):

**For Apex Domain (fruooze.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain (www.fruooze.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Note:** DNS changes can take up to 48 hours to propagate, but usually complete within a few minutes to hours.

---

## 🌐 Alternative: Deploy to Netlify

### Using Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

Then add your custom domain in Netlify dashboard.

---

## 📋 DNS Configuration Checklist

### Before You Start

- [ ] Ensure you own the domain `fruooze.com`
- [ ] Have access to your domain registrar's DNS settings
- [ ] Know where you bought the domain (GoDaddy, Namecheap, Google Domains, etc.)

### After Deployment

1. [ ] Copy DNS records from Vercel
2. [ ] Login to your domain registrar
3. [ ] Add A record for apex domain
4. [ ] Add CNAME record for www subdomain
5. [ ] Wait for DNS propagation (check with: `dig fruooze.com` or `nslookup fruooze.com`)
6. [ ] Verify SSL certificate is active (Vercel auto-generates this)

---

## 🔧 Current Build Output

Your production build is ready in the `dist/` folder:

```
dist/
├── index.html (1.54 kB)
├── assets/
    ├── index.css (9.98 kB)
    └── index.js (203.56 kB)
```

---

## 🎯 Quick Deploy Commands

```bash
# Deploy to Vercel (staging)
npx vercel

# Deploy to Vercel (production)
npx vercel --prod

# Check deployment status
npx vercel ls

# View domain settings
npx vercel domains ls
```

---

## 💡 Important Notes

1. **Domain Ownership**: You must own `fruooze.com` before adding it to Vercel. If you don't own it yet, purchase it from:
   - [Namecheap](https://www.namecheap.com)
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)
   - [Cloudflare](https://www.cloudflare.com)

2. **Free Hosting**: Vercel offers free hosting for personal projects with custom domains

3. **Automatic HTTPS**: Vercel automatically provisions SSL certificates for your domain

4. **Continuous Deployment**: Connect your GitHub repository to Vercel for automatic deployments on every push

---

## 🆘 Troubleshooting

### Issue: Domain not working after DNS configuration

**Solution**: DNS propagation can take time. Check status:
```bash
dig fruooze.com
dig www.fruooze.com
```

### Issue: SSL certificate not working

**Solution**: Vercel auto-generates SSL. If it's not working:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click on your domain → **Refresh SSL Certificate**

### Issue: Website shows old version

**Solution**: Clear browser cache or use incognito mode

---

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [DNS Configuration Guide](https://vercel.com/docs/custom-domains)

---

**Your website is ready to go live! 🎉**
