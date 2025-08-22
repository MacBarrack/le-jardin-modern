import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-green-300">Policy</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Your privacy is important to us. Learn how we protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Le Jardin Eden ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                      <p>We may collect personal information that you provide directly to us, including:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Name, email address, and phone number</li>
                        <li>Child's information (name, age, special needs)</li>
                        <li>Emergency contact information</li>
                        <li>Medical information relevant to childcare</li>
                        <li>Payment and billing information</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                      <p>We may automatically collect certain information about your device and usage, including:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>IP address and browser information</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referring website information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                  <div className="text-gray-700">
                    <p className="mb-3">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Provide and maintain our childcare services</li>
                      <li>Process enrollment applications and payments</li>
                      <li>Communicate with parents and guardians</li>
                      <li>Ensure the safety and well-being of children</li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Improve our services and website functionality</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
                  <div className="text-gray-700">
                    <p className="mb-3">We do not sell, trade, or rent your personal information. We may share information only in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect the safety of children and staff</li>
                      <li>With trusted service providers who assist in our operations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                  <div className="text-gray-700">
                    <p className="mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Access and review your personal information</li>
                      <li>Request corrections to inaccurate information</li>
                      <li>Request deletion of your information (subject to legal requirements)</li>
                      <li>Opt-out of marketing communications</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
                  <p className="text-gray-700">
                    We are committed to protecting children's privacy. We do not knowingly collect personal information from children under 13 without parental consent. All information about enrolled children is collected with parental authorization and used solely for childcare purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <div className="text-gray-700">
                    <p className="mb-3">If you have questions about this Privacy Policy, please contact us:</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Le Jardin Eden</strong></p>
                      <p>544 Pugsley Ave, Bronx, NY</p>
                      <p>Phone: 636-895-3821</p>
                      <p>Email: lejardindedenigwe@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

