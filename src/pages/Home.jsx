import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Import images
import heroImage from '../assets/hero-bg.jpg';
import infantCare from '../assets/infant-care.jpg';
import toddlerProgram from '../assets/toddler-program.jpg';
import preschool from '../assets/preschool.jpg';
import schoolAge from '../assets/school-age.jpg';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Families' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
    { icon: Shield, number: '100%', label: 'Licensed & Insured' }
  ];

  const programs = [
    {
      title: 'Infant Care',
      age: '6 weeks - 18 months',
      image: infantCare,
      description: 'Gentle, nurturing care for your precious little ones with individualized attention.',
      features: ['1:3 ratio', 'Flexible feeding', 'Developmental activities']
    },
    {
      title: 'Toddler Program',
      age: '18 months - 3 years',
      image: toddlerProgram,
      description: 'Encouraging exploration and independence through structured play and learning.',
      features: ['Potty training', 'Social skills', 'Creative expression']
    },
    {
      title: 'Preschool',
      age: '3 - 5 years',
      image: preschool,
      description: 'Comprehensive pre-K curriculum preparing children for kindergarten success.',
      features: ['Academic readiness', 'STEM activities', 'Character building']
    },
    {
      title: 'School Age',
      age: '5 - 12 years',
      image: schoolAge,
      description: 'After-school and summer programs with homework help and enrichment activities.',
      features: ['Homework support', 'Field trips', 'Leadership skills']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent of Emma (4 years)',
      content: 'Le Jardin Eden has been a blessing for our family. Emma loves going to school every day and has grown so much!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Parent of Lucas (2 years)',
      content: 'The teachers are incredibly caring and professional. We feel so confident leaving Lucas in their hands.',
      rating: 5
    },
    {
      name: 'Amanda Rodriguez',
      role: 'Parent of Sofia (5 years)',
      content: 'The curriculum is excellent and Sofia is so well-prepared for kindergarten. Highly recommend!',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-section">
        <motion.div 
          className="absolute inset-0 bg-black/40"
          style={{ y: y1 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Award-Winning Childcare Center</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Where Little
                <span className="block gradient-text bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                  Dreams Grow
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Nurturing young minds with love, care, and excellence in early childhood education. 
                Creating a foundation for lifelong learning and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button className="btn-primary text-white px-8 py-3 text-lg group">
                    Enroll Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Tour
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ y: y2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl blur-xl opacity-30"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <img
                  src={heroImage}
                  alt="Happy children at Le Jardin Eden"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="gradient-text">Programs</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs designed to nurture growth, learning, and development 
              at every stage of your child's journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-hover overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.age}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/programs">
              <Button className="btn-primary text-white px-8 py-3 text-lg">
                View All Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Parents <span className="gradient-text">Say</span>
            </h2>
            <div className="section-divider mb-6" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 glass-effect">
                <CardContent className="space-y-6">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-96 h-96 border border-white/20 rounded-full absolute top-10 -right-20" />
          <div className="w-64 h-64 border border-white/20 rounded-full absolute bottom-10 -left-10" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Give your child the best start in life with our nurturing environment, 
              experienced teachers, and comprehensive programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Start Enrollment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
                >
                  Schedule Tour
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

