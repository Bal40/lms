import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * VidyaKumbh — Policy Center
 * Single-file React component styled with Tailwind CSS.
 * Contains: Contact Us, Shipping Policy, Terms & Conditions,
 * Cancellations & Refunds, Privacy Policy.
 *
 * ⚠️ Not legal advice. Please have a lawyer review before publishing.
 */

const sections = [
  { id: "contact", label: "Contact Us" },
  { id: "shipping", label: "Shipping Policy" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "refunds", label: "Cancellations & Refunds" },
  { id: "privacy", label: "Privacy Policy" },
];

const LastUpdated = () => (
  <p className="text-xs text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
);

const SectionCard = ({ title, children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
  >
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <div className="mt-4 prose prose-gray max-w-none">{children}</div>
    <LastUpdated />
  </motion.section>
);

const Field = ({ label, required = false, children }) => (
  <label className="block">
    <span className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-600">*</span>}
    </span>
    <div className="mt-1">{children}</div>
  </label>
);

export default function PolicyCenter() {
  const [active, setActive] = useState("contact");

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // Replace with your API endpoint or email handler
    console.log("Contact form submitted:", payload);
    alert("Thanks! We received your message and will respond within 24–48 hours.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-blue-600 text-white grid place-items-center font-bold">V</div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Vidyakumbh – Policy Center</h1>
              <p className="text-xs text-gray-500">Transparency and trust for our learners</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-3 py-2 rounded-xl text-sm font-medium border transition ${
                  active === s.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Contact Us */}
        <SectionCard id="contact" title="Contact Us">
          <p>
            Have questions about your course, account, or payment? Reach us using the form
            below or via the details provided. Our typical response time is 24–48 business hours.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <form onSubmit={onSubmit} className="space-y-4">
              <Field label="Full Name" required>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="+91-XXXXXXXXXX"
                />
              </Field>
              <Field label="Message" required>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="How can we help?"
                />
              </Field>
              <button
                type="submit"
                className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>

            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900">Company Details</h3>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li><span className="font-medium">Brand:</span> VidyaKumbh</li>
                <li><span className="font-medium">Email:</span> balmukundmishra352@gmail.com</li>
                <li><span className="font-medium">Phone:</span> +91-9693732524</li>
                <li><span className="font-medium">Address:</span> Vil Suarchhap PS Lauria PO Birti Matiariya, West Champaran, Bihar, India, 845453</li>
                <li><span className="font-medium">Hours:</span> Mon–Fri, 10:00–18:00 IST</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* Shipping Policy */}
        <SectionCard id="shipping" title="Shipping Policy">
          <p>
            VidyaKumbh provides <strong>digital products and services</strong> such as online courses,
            downloadable resources, and memberships. As no physical goods are shipped, this
            Shipping Policy clarifies how and when you receive access to your purchases.
          </p>
          <ul>
            <li><strong>Delivery Method:</strong> Instant online access via your VidyaKumbh account.</li>
            <li><strong>Delivery Time:</strong> Typically immediate after successful payment. If delayed,
              access is granted within 24 hours.</li>
            <li><strong>Non-Delivery:</strong> If you do not receive access within 24 hours, please contact
              <a className="text-blue-600" href="mailto:balmukundmishra352@gmail.com"> balmukundmishra352@gmail.com</a>.</li>
            <li><strong>Geographic Availability:</strong> Courses are available globally unless restricted by law.</li>
            <li><strong>Fees:</strong> No shipping or handling fees apply to digital items.</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">If you also sell physical goods, add your carrier, timelines, fees, and tracking rules here.</p>
        </SectionCard>

        {/* Terms & Conditions */}
        <SectionCard id="terms" title="Terms & Conditions">
          <p>
            These Terms govern your use of VidyaKumbh ("we", "us", "our") and the purchase of
            our courses and services. By accessing our website or enrolling in a course, you agree to
            these Terms.
          </p>
          <h3>Accounts</h3>
          <ul>
            <li>You must provide accurate information and keep your credentials secure.</li>
            <li>You are responsible for all activities under your account.</li>
          </ul>
          <h3>License & Use</h3>
          <ul>
            <li>Upon purchase, you receive a personal, non-transferable license to access content.</li>
            <li>Redistribution, resale, or public posting of course materials is prohibited without prior written consent.</li>
          </ul>
          <h3>Payments & Taxes</h3>
          <ul>
            <li>Prices are shown in INR unless stated otherwise and may include applicable taxes/fees.</li>
            <li>We use secure third‑party processors; you agree to their terms when paying.</li>
          </ul>
          <h3>Intellectual Property</h3>
          <p>All content, trademarks, and logos are owned by VidyaKumbh or its licensors.</p>
          <h3>Prohibited Conduct</h3>
          <ul>
            <li>No unlawful use, harassment, cheating, scraping, or attempts to bypass access controls.</li>
          </ul>
          <h3>Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, VidyaKumbh will not be liable for indirect,
            incidental, or consequential damages arising from your use of the services.
          </p>
          <h3>Changes</h3>
          <p>We may update these Terms from time to time. Continued use constitutes acceptance.</p>
          <h3>Contact</h3>
          <p>Questions about these Terms? Email <a className="text-blue-600" href="mailto:balmukundmishra352@gmail.com">balmukundmishra352@gmail.com</a>.</p>
        </SectionCard>

        {/* Cancellations & Refunds */}
        <SectionCard id="refunds" title="Cancellations & Refunds">
          <p>
            We want you to be satisfied with your learning experience. This policy explains when
            cancellations or refunds may apply.
          </p>
          <h3>Digital Courses</h3>
          <ul>
            <li><strong>7‑Day Refund Window:</strong> If you have completed <em>less than 20%</em> of a course, you may request a refund within 7 days of purchase.</li>
            <li><strong>Non‑Refundable:</strong> Certificates, downloadable assets, and fully completed courses are non‑refundable.</li>
          </ul>
          <h3>Subscriptions/Memberships</h3>
          <ul>
            <li>Cancel anytime from your account settings. Access continues until the end of the billing period.</li>
          </ul>
          <h3>How to Request</h3>
          <p>
            <li>Email <a className="text-blue-600" href="mailto:balmukundmishra352@gmail.com">balmukundmishra352@gmail.com</a> with your order ID and reason. Approved refunds are issued to the original payment method within 7–10 business days./</li>
          </p>
        </SectionCard>

        {/* Privacy Policy */}
        <SectionCard id="privacy" title="Privacy Policy">
          <p>
            Your privacy is important to us. This Privacy Policy explains what data we collect, how
            we use it, and your rights. By using VidyaKumbh you agree to this Policy.
          </p>
          <h3>Information We Collect</h3>
          <ul>
            <li><strong>Account Data:</strong> name, email, phone, password (hashed), preferences.</li>
            <li><strong>Payment Data:</strong> handled by payment processors; we store limited metadata (e.g., transaction ID).</li>
            <li><strong>Usage Data:</strong> pages visited, device, browser, IP address, and cookies for analytics and security.</li>
            <li><strong>Communications:</strong> messages you send to support or instructors.</li>
          </ul>
          <h3>How We Use Information</h3>
          <ul>
            <li>Provide and improve courses and features.</li>
            <li>Process payments and prevent fraud.</li>
            <li>Send administrative emails and, with consent, marketing updates.</li>
            <li>Comply with legal obligations and enforce our Terms.</li>
          </ul>
          <h3>Cookies & Tracking</h3>
          <p>
            We use essential cookies for login and security and optional analytics cookies to improve the site. You can control cookies via your browser settings.
          </p>
          <h3>Data Sharing</h3>
          <ul>
            <li>Service providers (hosting, analytics, payment processing) under confidentiality obligations.</li>
            <li>Legal compliance or to protect rights, property, and safety.</li>
          </ul>
          <h3>Data Retention</h3>
          <p>We retain data for as long as your account is active or as needed to provide services and meet legal obligations.</p>
          <h3>Your Rights</h3>
          <ul>
            <li>Access, correct, or delete your personal data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request data export (where applicable).</li>
          </ul>
          <h3>Children</h3>
          <p>Our services are not directed to children under 13. If you believe a child provided data, contact us to delete it.</p>
          <h3>International Transfers</h3>
          <p>Data may be processed outside your country with appropriate safeguards.</p>
          <h3>Contact</h3>
          <p>
            For privacy questions, contact our Data Protection Officer at
            <a className="text-blue-600" href="mailto:balmukundmishra352@gmail.com"> balmukundmishra352@gmail.com</a>.
          </p>
        </SectionCard>

        <footer className="text-center text-sm text-gray-500 pt-6 pb-10">
          © {new Date().getFullYear()} VidyaKumbh. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
