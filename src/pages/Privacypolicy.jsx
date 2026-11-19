
import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We may collect personal information that you voluntarily provide when contacting us, requesting a quote, or using our services. This may include your name, email address, phone number, business name, and project details."
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use your information to respond to inquiries, communicate about projects, provide website development and UI/UX design services, prepare quotations, and improve our services."
    },
    {
      title: "3. Information Sharing",
      content:
        "We do not sell your personal information. We may share information with trusted service providers when necessary to operate our services or complete your project. We may also disclose information when required by law."
    },
    {
      title: "4. Data Security",
      content:
        "We take reasonable measures to protect the personal information shared with us. However, no method of internet transmission or electronic storage is completely secure."
    },
    {
      title: "5. Cookies and Third-Party Services",
      content:
        "Our website or third-party services may use cookies and similar technologies to improve functionality and understand website usage. Third-party services have their own privacy policies."
    },
    {
      title: "6. Data Retention",
      content:
        "We retain personal information only for as long as reasonably necessary to respond to inquiries, provide services, maintain business records, or meet legal obligations."
    },
    {
      title: "7. Your Privacy Rights",
      content:
        "You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable legal requirements."
    },
    {
      title: "8. Children's Privacy",
      content:
        "Our services are intended for businesses and general audiences. We do not knowingly collect personal information from children under the age of 13."
    },
    {
      title: "9. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated effective date."
    },
    {
      title: "10. Contact Us",
      content:
        "If you have questions about this Privacy Policy or how your information is handled, please contact us using the details below."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-800">
      {/* Hero */}
      <section className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="text-blue-200 hover:text-white transition"
          >
            ← Back to Home
          </Link>

          <p className="mt-10 text-blue-300 font-semibold uppercase tracking-widest text-sm">
            MA Software Solution
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Privacy Policy
          </h1>

          <p className="mt-5 text-blue-100 max-w-2xl leading-7">
            Your privacy matters to us. Learn how we collect,
            use, and protect your personal information.
          </p>

          <p className="mt-6 text-sm text-blue-200">
            Effective Date: November 19, 2026
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-200 p-6 md:p-12">

          <p className="text-white leading-8 mb-10">
            MA Software Solution respects your privacy. This Privacy Policy explains
            how we handle information when you visit our website
            or contact us about our services.
          </p>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-400 leading-8">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Contact Card */}
          <div className="mt-12 p-7 rounded-xl bg-blue-50 border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Contact Information
            </h2>

            <p className="text-slate-600 mb-3">
              MA Software Solution
            </p>

            <a
              href="mailto:masoftwaresolution7@gmail.com"
              className="text-blue-700 font-semibold hover:underline"
            >
              masoftwaresolution7@gmail.com
            </a>

            <p className="text-slate-600 mt-3">
              Website Development & UI/UX Design Services
            </p>
          </div>

        </div>
      </main>

      
    </div>
  );
};

export default PrivacyPolicy;
