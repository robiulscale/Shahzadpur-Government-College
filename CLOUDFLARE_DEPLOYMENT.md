# ক্লাউডফ্লেয়ার (Cloudflare Pages) এ ওয়েবসাইট হোস্ট করার সহজ নির্দেশিকা

এই ওয়েবসাইটটি সম্পূর্ণভাবে **Cloudflare Pages** এ হোস্ট করার জন্য প্রস্তুত ও অপ্টিমাইজ করা হয়েছে।

---

## পদ্ধতি ১: GitHub / Git রিপোজিটরি যুক্ত করে (সর্বাধিক জনপ্রিয় ও অটোমেটেড)

1. আপনার কোডটি GitHub-এ পুশ করুন।
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) এ লগইন করুন।
3. বাম পাশের মেনু থেকে **Workers & Pages** > **Create application** > **Pages** > **Connect to Git** সিলেক্ট করুন।
4. আপনার GitHub রিপোজিটরি নির্বাচন করুন।
5. **Build settings** কনফিগার করুন:
   - **Framework preset**: `Vite` (অথবা `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (ফাঁকা রাখুন)
6. **Save and Deploy** বাটনে ক্লিক করুন। ২ মিনিটের মধ্যে সাইট লাইভ হয়ে যাবে!
7. Cloudflare আপনাকে একটি ফ্রি সাবডোমেন দেবে (যেমন: `shahzadpur-govt-college.pages.dev`), এবং আপনি চাইলে আপনার নিজস্ব ডোমেন (যেমন: `shgc.edu.bd` বা যেকোনো কাস্টম ডোমেন) **Custom domains** ট্যাবে সহজে যুক্ত করতে পারবেন।

---

## পদ্ধতি ২: Wrangler CLI দিয়ে সরাসরি টার্মিনাল থেকে ডেপ্লয় করা

যদি Git ছাড়া সরাসরি টার্মিনাল থেকে ক্লাউডফ্লেয়ারে আপলোড করতে চান:

```bash
# ১. প্রোডাকশন বিল্ড তৈরি করুন
npm run build

# ২. Wrangler দিয়ে সরাসরি ডেপ্লয় করুন
npx wrangler pages deploy dist --project-name=shahzadpur-govt-college
```

---

## গুরুত্বপূর্ণ বৈশিষ্ট্য যা ইতিমধ্যে কনফিগার করা হয়েছে:

1. **SPA Client-side Routing (`_redirects`)**:
   - `public/_redirects` ফাইলে `/* /index.html 200` দেওয়া আছে। ফলে ক্লাউডফ্লেয়ারে কোনো 404 ত্রুটি হবে না।
2. **অফিসিয়াল কলেজ লোগো**:
   - আপনার দেওয়া আসল সিল/প্রতীক `/college-logo.png` হিসেবে বিল্ডের মধ্যে অন্তর্ভুক্ত।
3. **সরাসরি ক্লাউডফ্লেয়ার ক্যাশিং ও এসএসএল**:
   - ক্লাউডফ্লেয়ার স্বয়ংক্রিয়ভাবে ফ্রি SSL (HTTPS) এবং বিশ্বব্যাপী ফাস্ট CDN প্রদান করবে।
