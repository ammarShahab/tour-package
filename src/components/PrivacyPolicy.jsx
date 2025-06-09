import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-gray-700 mb-6">
        This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our Tour Package Booking Platform.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and travel preferences during sign-up or booking.
          </li>
          <li>
            <strong>Booking Details:</strong> Destination, dates, and number of
            travelers.
          </li>
          <li>
            <strong>Authentication Data:</strong> Firebase Authentication stores
            your email and login credentials securely.
          </li>
          <li>
            <strong>Usage Data:</strong> Device, IP address, and browser type
            used to interact with the platform.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700">We use your information to:</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Provide and manage your bookings</li>
          <li>Send booking confirmations and travel updates</li>
          <li>Personalize your user experience</li>
          <li>Improve our platform functionality and customer support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-700">
          We do not sell or rent your personal data to third parties. We may
          share your information with trusted partners only to fulfill your
          booking (e.g., tour operators).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p className="text-gray-700">
          Your data is protected through industry-standard security protocols.
          Firebase Authentication ensures your credentials are securely stored
          and encrypted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Access and update your personal data anytime</li>
          <li>Request deletion of your account</li>
          <li>Withdraw consent to marketing communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700">
          We may update this policy from time to time. Any changes will be
          posted on this page with an updated effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or your data,
          please contact us at{" "}
          <a
            href="mailto:info@mywebsite.com"
            className="text-blue-500 underline"
          >
            info@mywebsite.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
