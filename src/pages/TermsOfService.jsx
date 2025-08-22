import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
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
              Terms of <span className="text-green-300">Service</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Please read these terms carefully before using our services.
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
                    These Terms of Service ("Terms") govern your use of Le Jardin Eden's childcare services and website. By enrolling your child or using our services, you agree to these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrollment and Admission</h2>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      <strong>Age Requirements:</strong> We accept children from 6 weeks to 12 years of age, depending on program availability.
                    </p>
                    <p>
                      <strong>Enrollment Process:</strong> All children must complete our enrollment process, including health records, emergency contacts, and signed agreements.
                    </p>
                    <p>
                      <strong>Non-Discrimination:</strong> We welcome children of all backgrounds regardless of race, religion, gender, or family structure.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Terms</h2>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      <strong>Tuition:</strong> Tuition is due in advance and must be paid by the first of each month.
                    </p>
                    <p>
                      <strong>Late Fees:</strong> A late fee of $25 will be charged for payments received after the 5th of the month.
                    </p>
                    <p>
                      <strong>Registration Fee:</strong> A non-refundable registration fee is required upon enrollment.
                    </p>
                    <p>
                      <strong>Returned Payments:</strong> A $35 fee will be charged for any returned checks or failed electronic payments.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Hours of Operation</h2>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      <strong>Regular Hours:</strong> Monday through Friday, 6:30 AM to 6:30 PM
                    </p>
                    <p>
                      <strong>Saturday Hours:</strong> 8:00 AM to 4:00 PM (limited programs)
                    </p>
                    <p>
                      <strong>Late Pickup:</strong> A late pickup fee of $1 per minute will be charged after closing time.
                    </p>
                    <p>
                      <strong>Holidays:</strong> We are closed on major holidays. A holiday schedule will be provided annually.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Health and Safety</h2>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      <strong>Immunizations:</strong> All children must have current immunizations as required by state law.
                    </p>
                    <p>
                      <strong>Illness Policy:</strong> Children with fever, contagious conditions, or other symptoms must stay home.
                    </p>
                    <p>
                      <strong>Medication:</strong> We can administer prescription medications with proper authorization and labeling.
                    </p>
                    <p>
                      <strong>Emergency Care:</strong> In case of emergency, we will contact parents immediately and seek appropriate medical care.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Behavior and Discipline</h2>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      We use positive guidance techniques to help children develop self-control and social skills. Physical punishment is never used.
                    </p>
                    <p>
                      If a child's behavior consistently disrupts the program or poses a safety risk, we will work with parents to develop strategies. In extreme cases, we reserve the right to terminate enrollment.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Parent Responsibilities</h2>
                  <div className="text-gray-700">
                    <p className="mb-3">Parents/guardians agree to:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Provide accurate and current information</li>
                      <li>Pick up children on time</li>
                      <li>Notify us of any changes in child's needs or circumstances</li>
                      <li>Treat staff and other families with respect</li>
                      <li>Follow all center policies and procedures</li>
                      <li>Provide appropriate clothing and supplies</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Termination of Services</h2>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      <strong>Parent Termination:</strong> Parents may terminate services with two weeks' written notice.
                    </p>
                    <p>
                      <strong>Center Termination:</strong> We may terminate services for non-payment, violation of policies, or if we cannot meet a child's needs.
                    </p>
                    <p>
                      <strong>No Refunds:</strong> Tuition is non-refundable once services begin.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Liability and Insurance</h2>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      Le Jardin Eden maintains appropriate insurance coverage. Parents are responsible for their child's personal belongings.
                    </p>
                    <p>
                      We are not liable for injuries that occur despite reasonable supervision, or for loss of personal items.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Photography and Media</h2>
                  <p className="text-gray-700">
                    We may take photographs or videos of children for educational purposes, promotional materials, or our website. Parents will be asked to sign a media release form.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
                  <p className="text-gray-700">
                    We reserve the right to modify these Terms at any time. Parents will be notified of significant changes with at least 30 days' notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                  <div className="text-gray-700">
                    <p className="mb-3">For questions about these Terms, please contact us:</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Le Jardin Eden</strong></p>
                      <p>544 Pugsley Ave, Bronx, NY</p>
                      <p>Phone: 636-895-3821</p>
                      <p>Email: lejardindedenigwe@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm text-gray-600">
                    By enrolling your child at Le Jardin Eden, you acknowledge that you have read, understood, and agree to these Terms of Service.
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

export default TermsOfService;

