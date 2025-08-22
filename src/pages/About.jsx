import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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
              About <span className="text-green-300">Le Jardin Eden</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Nurturing young minds with love, care, and excellence in early childhood education since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2009 by early childhood education specialists, Le Jardin Eden has been 
                a cornerstone of quality childcare in our community. We believe every child deserves 
                a nurturing environment where they can grow, learn, and thrive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our philosophy centers on creating a "garden" where children can bloom at their own pace, 
                supported by experienced educators who understand the unique needs of each developmental stage.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Licensed & Accredited', desc: 'State licensed and nationally accredited' },
                { icon: Heart, title: 'Caring Environment', desc: 'Warm, nurturing atmosphere for all children' },
                { icon: Users, title: 'Experienced Staff', desc: '15+ years average teaching experience' },
                { icon: Shield, title: 'Safe & Secure', desc: 'Comprehensive safety and security measures' }
              ].map((item, index) => (
                <Card key={index} className="card-hover text-center p-6">
                  <CardContent className="space-y-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

