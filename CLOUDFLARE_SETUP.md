# 🚀 Cloudflare Pages Deployment - Step by Step

## ✅ Step 1: Code Pushed to GitHub ✓

Your code is now live at: **https://github.com/sandeepramdas/fruooze**

---

## 📋 Step 2: Connect to Cloudflare Pages

### 2.1 Create Cloudflare Account (if you don't have one)

1. Go to: **https://dash.cloudflare.com/sign-up**
2. Sign up with your email (it's 100% FREE)
3. Verify your email
4. Login to Cloudflare Dashboard

### 2.2 Create a Pages Project

1. **In Cloudflare Dashboard:**
   - Click **Workers & Pages** in the left sidebar
   - Click **Create Application**
   - Click **Pages** tab
   - Click **Connect to Git**

2. **Connect GitHub:**
   - Click **Connect GitHub**
   - Authorize Cloudflare to access your GitHub account
   - Select **Only select repositories** → Choose **fruooze**
   - Click **Install & Authorize**

3. **Configure Build Settings:**
   ```
   Project name: fruooze
   Production branch: main

   Build settings:
   - Framework preset: None (or Vite)
   - Build command: npm run build
   - Build output directory: dist
   - Root directory: (leave blank)
   ```

4. **Click "Save and Deploy"**

5. **Wait 1-2 minutes** for build to complete

6. You'll get a URL like: `https://fruooze-xxx.pages.dev`

---

## 🌐 Step 3: Add Your Domain (fruooze.com)

### 3.1 Add Site to Cloudflare

1. **In Cloudflare Dashboard:**
   - Click **Websites** in the left sidebar (or home icon)
   - Click **Add a site**
   - Enter: `fruooze.com` (without www)
   - Click **Add site**

2. **Select Free Plan:**
   - Select **Free** plan
   - Click **Continue**

3. **Quick Scan:**
   - Cloudflare will scan your existing DNS records
   - Click **Continue**

### 3.2 Get Cloudflare Nameservers

Cloudflare will show you **2 nameservers**, something like:

```
chad.ns.cloudflare.com
kara.ns.cloudflare.com
```

**⚠️ IMPORTANT: Copy these nameservers!** You'll need them for GoDaddy.

---

## 🔧 Step 4: Update GoDaddy Nameservers

### 4.1 Login to GoDaddy

1. Go to: **https://godaddy.com**
2. Login to your account
3. Click **My Products**

### 4.2 Change Nameservers

1. Find **fruooze.com** domain
2. Click the **DNS** button next to it
3. Scroll down to **Nameservers** section
4. Click **Change** (or **Manage**)
5. Select **Enter my own nameservers (advanced)**
6. Remove existing nameservers
7. Add the 2 Cloudflare nameservers you copied earlier:
   ```
   Nameserver 1: [paste first cloudflare nameserver]
   Nameserver 2: [paste second cloudflare nameserver]
   ```
8. Click **Save**

### 4.3 Confirm in Cloudflare

1. **Back in Cloudflare Dashboard:**
   - Click **Done, check nameservers**
   - Cloudflare will verify (this can take 5-30 minutes)

2. **Wait for Email:**
   - You'll receive an email when Cloudflare activates
   - Status will change to **Active**

---

## 🎯 Step 5: Connect Custom Domain to Pages

### 5.1 Add Custom Domain

1. **Go back to Workers & Pages:**
   - Click **Workers & Pages**
   - Click on your **fruooze** project
   - Click **Custom domains** tab
   - Click **Set up a custom domain**

2. **Add Domain:**
   - Enter: `www.fruooze.com`
   - Click **Continue**
   - Cloudflare will automatically add DNS records
   - Click **Activate domain**

3. **Add Root Domain (optional):**
   - Click **Set up a custom domain** again
   - Enter: `fruooze.com`
   - Click **Continue**
   - Click **Activate domain**

### 5.2 Configure DNS Records

Cloudflare should automatically create these records:

```
Type: CNAME
Name: www
Target: fruooze-xxx.pages.dev
Proxy: Enabled (orange cloud)

Type: CNAME
Name: @
Target: fruooze-xxx.pages.dev
Proxy: Enabled (orange cloud)
```

If not automatically created:
1. Go to **DNS** → **Records**
2. Add the records manually
3. Make sure **Proxy status** is ON (orange cloud)

---

## ⏱️ Step 6: Wait for DNS Propagation

**DNS changes take time:**
- Minimum: 5-10 minutes
- Maximum: 24-48 hours (rare)
- Usually: 30 minutes to 2 hours

### Check if DNS is ready:

**Option A: Browser**
1. Open incognito/private window
2. Go to `www.fruooze.com`

**Option B: Terminal**
```bash
nslookup www.fruooze.com
dig www.fruooze.com
```

---

## 🎉 Step 7: Verify Deployment

### Your website should be live at:
- ✅ `https://www.fruooze.com`
- ✅ `https://fruooze.com` (redirects to www)
- ✅ `https://fruooze-xxx.pages.dev` (Cloudflare URL)

### Check SSL Certificate:
- Look for 🔒 padlock icon in browser
- Cloudflare auto-generates FREE SSL certificate

---

## 🔄 Future Updates

Every time you push code to GitHub:

```bash
git add .
git commit -m "Update website"
git push
```

Cloudflare Pages will **automatically rebuild and deploy** in 1-2 minutes! 🚀

---

## ✅ Quick Checklist

- [ ] Cloudflare account created
- [ ] Connected GitHub to Cloudflare Pages
- [ ] Project deployed to `*.pages.dev`
- [ ] Added fruooze.com to Cloudflare
- [ ] Copied Cloudflare nameservers
- [ ] Updated GoDaddy nameservers
- [ ] Cloudflare site status: Active
- [ ] Added custom domains (www.fruooze.com + fruooze.com)
- [ ] DNS propagated
- [ ] Website live at www.fruooze.com! 🎉

---

## 🆘 Troubleshooting

### Issue: "Site not found" on www.fruooze.com

**Solution:**
- Check nameservers are updated in GoDaddy
- Wait for DNS propagation (up to 24h)
- Verify domain is "Active" in Cloudflare

### Issue: SSL/HTTPS not working

**Solution:**
- Cloudflare auto-generates SSL (takes 5-10 mins)
- Go to SSL/TLS → Overview → Set to "Full" or "Full (strict)"

### Issue: Changes not showing

**Solution:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 1-2 minutes for Cloudflare to rebuild
- Check deployment status in Pages dashboard

---

## 📞 Need Help?

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **Community:** https://community.cloudflare.com/
- **GoDaddy Support:** https://www.godaddy.com/help

---

**You're all set! Follow the steps above and your website will be live at www.fruooze.com! 🎉**
