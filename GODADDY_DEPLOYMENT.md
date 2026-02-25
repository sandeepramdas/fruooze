# Deploy FRUOOZE to www.fruooze.com (GoDaddy Domain)

## 🎯 Recommended: Cloudflare Pages (FREE + Fast)

### Why Cloudflare Pages?
- ✅ **100% FREE** - No credit card needed
- ✅ **Lightning Fast** - Global CDN
- ✅ **Easy DNS** - Manages your GoDaddy domain
- ✅ **Auto SSL** - Free HTTPS certificate
- ✅ **Unlimited Sites** - Deploy as many as you want

---

## 🚀 Option 1: Cloudflare Pages (RECOMMENDED)

### Step 1: Create GitHub Repository

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/fruooze.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Cloudflare Pages

1. **Go to:** [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. **Sign up/Login** (free account)
3. Click **Workers & Pages** → **Create Application** → **Pages**
4. Click **Connect to Git**
5. Select your **fruooze** repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Click **Save and Deploy**

### Step 3: Add Custom Domain (www.fruooze.com)

1. In Cloudflare Pages, go to your project
2. Click **Custom domains** → **Set up a custom domain**
3. Enter: `www.fruooze.com`
4. Cloudflare will show you DNS records

### Step 4: Configure GoDaddy DNS

#### Transfer Nameservers to Cloudflare (Recommended - Easiest)

1. In Cloudflare Dashboard, click **Add a Site**
2. Enter: `fruooze.com` → Click **Add site**
3. Select **Free Plan** → Continue
4. Cloudflare will show you **2 nameservers** (like `chad.ns.cloudflare.com`)
5. **Copy these nameservers**

6. **Go to GoDaddy:**
   - Login to [https://godaddy.com](https://godaddy.com)
   - Go to **My Products** → **Domains** → Click on **fruooze.com**
   - Scroll to **Nameservers** → Click **Change**
   - Select **Enter my own nameservers (advanced)**
   - Paste the 2 Cloudflare nameservers
   - Click **Save**

7. **Wait 10-30 minutes** for DNS to update

8. **In Cloudflare:** Your domain will show as Active
9. **In Cloudflare Pages:** Your website will be live at www.fruooze.com

---

## 🌐 Option 2: Netlify (Alternative)

### Step 1: Create GitHub Repository

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/fruooze.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

#### Method A: Using Netlify Dashboard (Easy)

1. **Go to:** [https://app.netlify.com](https://app.netlify.com)
2. **Sign up/Login** (free with GitHub)
3. Click **Add new site** → **Import an existing project**
4. Choose **GitHub** → Select **fruooze** repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

#### Method B: Using CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init

# Follow prompts, then:
netlify deploy --prod
```

### Step 3: Add Custom Domain in Netlify

1. In your Netlify site dashboard
2. Go to **Domain settings** → **Add custom domain**
3. Enter: `www.fruooze.com`
4. Click **Verify**
5. Netlify will show DNS records

### Step 4: Configure GoDaddy DNS for Netlify

**In GoDaddy DNS Management:**

1. Login to [https://godaddy.com](https://godaddy.com)
2. Go to **My Products** → **Domains** → **fruooze.com** → **DNS**
3. Add these records:

**For www.fruooze.com:**
```
Type: CNAME
Name: www
Value: [YOUR-SITE-NAME].netlify.app
TTL: 600 seconds
```

**For fruooze.com (optional, redirects to www):**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 600 seconds
```

4. Save changes
5. Wait 10-30 minutes for DNS propagation

---

## 📋 Quick Comparison

| Feature | Cloudflare Pages | Netlify |
|---------|-----------------|---------|
| Price | Free Forever | Free (100GB bandwidth) |
| Speed | ⚡⚡⚡ Fastest | ⚡⚡ Fast |
| DNS | Manages your domain | Need to configure manually |
| Setup | Easiest | Easy |
| SSL | Auto (instant) | Auto (instant) |

---

## 🎯 My Recommendation: Cloudflare Pages

**Why?** Because you have GoDaddy domain:
1. **Easier DNS**: Just change nameservers once, Cloudflare manages everything
2. **Faster**: Best global CDN
3. **Free Forever**: No limits for personal projects
4. **All-in-one**: Domain DNS + Hosting in one place

---

## 🚀 Quick Start (Cloudflare Pages)

Run these commands:

```bash
# 1. Create GitHub repo (do this on github.com first)

# 2. Push your code
git remote add origin https://github.com/YOUR_USERNAME/fruooze.git
git push -u origin main

# 3. Go to Cloudflare Pages and connect your GitHub repo
# 4. Point GoDaddy nameservers to Cloudflare
# Done! Your site will be live at www.fruooze.com
```

---

## ✅ Final Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Cloudflare Pages project created
- [ ] Connected GitHub repository to Cloudflare
- [ ] Build successful
- [ ] Changed GoDaddy nameservers to Cloudflare
- [ ] Added custom domain in Cloudflare Pages
- [ ] DNS propagated (check: nslookup www.fruooze.com)
- [ ] SSL certificate active
- [ ] Website live at www.fruooze.com! 🎉

---

## 🆘 Need Help?

**Check DNS Propagation:**
```bash
nslookup www.fruooze.com
```

**Cloudflare Support:**
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Community Forum](https://community.cloudflare.com/)

**Netlify Support:**
- [Netlify Docs](https://docs.netlify.com/)
- [Community Forum](https://answers.netlify.com/)

---

**Ready to deploy? Let me know which option you prefer!** 🚀
