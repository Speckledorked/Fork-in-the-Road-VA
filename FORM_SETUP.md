# Contact Form Setup Guide

The contact form on your website needs to be connected to a form handling service. Here are your options:

---

## 🎯 Recommended Solutions

### Option 1: Netlify Forms (Best for Netlify Hosting) ⭐

**Pros:**
- ✅ Free (up to 100 submissions/month)
- ✅ Built-in spam protection
- ✅ No configuration needed
- ✅ View submissions in Netlify dashboard
- ✅ Email notifications included

**Setup Steps:**
1. Deploy your site to Netlify (if not already)
2. The form is already configured with `netlify` attribute
3. That's it! Forms work automatically after deployment
4. Go to Netlify Dashboard > Forms to see submissions

**Status:** ✅ Already configured in contact.html

---

### Option 2: Formspree (Works Anywhere) ⭐

**Pros:**
- ✅ Works on GitHub Pages, Netlify, anywhere
- ✅ Free tier: 50 submissions/month
- ✅ Easy setup (5 minutes)
- ✅ Email notifications
- ✅ File uploads supported (paid)

**Setup Steps:**

1. **Create Account**
   - Go to https://formspree.io
   - Sign up for free account
   - Verify your email

2. **Create Form**
   - Click "New Form"
   - Name it "Contact Form" or "Catering Inquiry"
   - Copy your Form ID (looks like: `xpznabcd`)

3. **Update contact.html**
   - Open `contact.html` in your editor
   - Find line 298: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `action="https://formspree.io/f/xpznabcd"`

4. **Remove Netlify attribute (if not using Netlify)**
   - Delete or comment out line 299: `netlify`
   - Delete or comment out line 300: `netlify-honeypot="bot-field"`
   - Delete or comment out lines 303-306 (hidden Netlify fields)

5. **Test**
   - Deploy your site
   - Submit a test form
   - Check your Formspree dashboard for the submission

**Cost:** Free (50/month), Gold $10/month (unlimited)

---

### Option 3: Google Forms (Quick & Free)

**Pros:**
- ✅ Completely free
- ✅ Unlimited submissions
- ✅ Responses in Google Sheets
- ✅ No code required

**Cons:**
- ⚠️ Leaves your site (redirects to Google)
- ⚠️ Less professional appearance
- ⚠️ No custom styling

**Setup Steps:**
1. Create Google Form at https://forms.google.com
2. Design your form with the same fields
3. Get the form link
4. Update contact.html:
   ```html
   <a href="YOUR_GOOGLE_FORM_LINK" class="btn btn-primary">
       Request Catering Quote
   </a>
   ```

---

### Option 4: Email Link (Temporary Fallback)

**Pros:**
- ✅ Works immediately
- ✅ No setup required
- ✅ No monthly costs

**Cons:**
- ⚠️ Opens user's email client
- ⚠️ Users might not complete it
- ⚠️ No form validation
- ⚠️ Manual data entry

**Already implemented:** Email link available at bottom of contact page

---

## 🚀 Recommended Approach

**If hosting on Netlify:**
→ Use **Option 1: Netlify Forms** (already set up!)

**If hosting on GitHub Pages:**
→ Use **Option 2: Formspree** (follow steps above)

**Quick temporary solution:**
→ Use **Option 4: Email Link** (already working)

---

## 📧 Current Status

### ✅ What's Already Working:
- Form HTML structure is complete
- Client-side validation is working
- Email fallback links are present
- Netlify Forms attributes are added
- Formspree placeholder is ready

### ⚠️ What Needs Setup:
1. Choose which form service to use
2. Get API key/credentials (if using Formspree)
3. Update form action URL (if using Formspree)
4. Test form submissions
5. Set up email notifications in chosen service

---

## 🔧 Testing Your Form

After setup, test with these scenarios:

1. **Valid submission:**
   - Fill all required fields correctly
   - Check that validation works
   - Verify submission reaches your inbox/dashboard

2. **Invalid submission:**
   - Try empty required fields → Should show errors
   - Try invalid email → Should show error
   - Try past event date → Should show error
   - Try 10+ digit phone number

3. **Spam protection:**
   - Check that honeypot field is hidden
   - Verify reCAPTCHA works (if enabled)

---

## 📞 Support

### Formspree Support:
- Docs: https://help.formspree.io
- Email: support@formspree.io

### Netlify Forms Support:
- Docs: https://docs.netlify.com/forms/setup/
- Forum: https://answers.netlify.com

---

## 🎯 Next Steps

1. **Choose your form service** from options above
2. **Follow the setup steps** for your chosen service
3. **Test thoroughly** before going live
4. **Set up email notifications** to get instant alerts
5. **Monitor submissions** regularly

---

**Need help?** Check the setup instructions in `contact.html` lines 276-293
