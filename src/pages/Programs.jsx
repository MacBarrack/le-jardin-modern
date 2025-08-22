import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Calendar, 
  Award, 
  Heart, 
  BookOpen,
  Palette,
  Music,
  Gamepad2,
  ChevronDown,
  CheckCircle,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import images
import infantCare from '../assets/infant-care.jpg';
import toddlerProgram from '../assets/toddler-program.jpg';
import preschool from '../assets/preschool.jpg';
import schoolAge from '../assets/school-age.jpg';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const programs = [
    {
      id: 0,
      title: 'Infant Care',
      age: '6 weeks - 18 months',
      ratio: '1:3',
      hours: '6:30 AM - 6:30 PM',
      image: infantCare,
      color: 'from-pink-400 to-pink-600',
      description: 'Our infant program provides a warm, nurturing environment where your baby can grow and develop at their own pace.',
      features: [
        'Individualized care plans',
        'Flexible feeding schedules',
        'Diaper changing and hygiene',
        'Tummy time and motor development',
        'Sensory exploration activities',
        'Daily communication with parents'
      ],
      curriculum: [
        { icon: Heart, title: 'Emotional Development', desc: 'Building trust and security through consistent, loving care' },
        { icon: Users, title: 'Social Skills', desc: 'Early social interaction with caregivers and peers' },
        { icon: BookOpen, title: 'Language Development', desc: 'Reading, singing, and talking to promote language skills' },
        { icon: Gamepad2, title: 'Physical Development', desc: 'Age-appropriate activities to develop motor skills' }
      ],
      dailySchedule: [
        { time: '6:30 - 8:00 AM', activity: 'Arrival & Free Play' },
        { time: '8:00 - 9:00 AM', activity: 'Breakfast & Diaper Changes' },
        { time: '9:00 - 10:00 AM', activity: 'Sensory Activities' },
        { time: '10:00 - 11:30 AM', activity: 'Morning Nap' },
        { time: '11:30 AM - 12:30 PM', activity: 'Lunch & Diaper Changes' },
        { time: '12:30 - 2:30 PM', activity: 'Afternoon Nap' },
        { time: '2:30 - 3:30 PM', activity: 'Snack & Tummy Time' },
        { time: '3:30 - 5:00 PM', activity: 'Outdoor Time (weather permitting)' },
        { time: '5:00 - 6:30 PM', activity: 'Free Play & Departure' }
      ]
    },
    {
      id: 1,
      title: 'Toddler Program',
      age: '18 months - 3 years',
      ratio: '1:4',
      hours: '6:30 AM - 6:30 PM',
      image: toddlerProgram,
      color: 'from-blue-400 to-blue-600',
      description: 'Our toddler program encourages exploration, independence, and social development through structured play and learning.',
      features: [
        'Potty training support',
        'Language development activities',
        'Creative arts and crafts',
        'Music and movement',
        'Outdoor playground time',
        'Social skill development'
      ],
      curriculum: [
        { icon: BookOpen, title: 'Early Literacy', desc: 'Story time, letter recognition, and pre-writing skills' },
        { icon: Palette, title: 'Creative Arts', desc: 'Painting, drawing, and hands-on creative projects' },
        { icon: Music, title: 'Music & Movement', desc: 'Songs, dancing, and rhythm activities' },
        { icon: Users, title: 'Social Development', desc: 'Sharing, taking turns, and building friendships' }
      ],
      dailySchedule: [
        { time: '6:30 - 8:00 AM', activity: 'Arrival & Free Choice' },
        { time: '8:00 - 8:30 AM', activity: 'Breakfast' },
        { time: '8:30 - 9:30 AM', activity: 'Circle Time & Learning Activities' },
        { time: '9:30 - 10:30 AM', activity: 'Outdoor Play' },
        { time: '10:30 - 11:00 AM', activity: 'Snack & Story Time' },
        { time: '11:00 AM - 12:00 PM', activity: 'Creative Arts & Crafts' },
        { time: '12:00 - 1:00 PM', activity: 'Lunch' },
        { time: '1:00 - 3:00 PM', activity: 'Rest Time' },
        { time: '3:00 - 3:30 PM', activity: 'Snack' },
        { time: '3:30 - 5:00 PM', activity: 'Music & Movement' },
        { time: '5:00 - 6:30 PM', activity: 'Free Play & Departure' }
      ]
    },
    {
      id: 2,
      title: 'Preschool',
      age: '3 - 5 years',
      ratio: '1:8',
      hours: '6:30 AM - 6:30 PM',
      image: preschool,
      color: 'from-green-400 to-green-600',
      description: 'Our comprehensive preschool program prepares children for kindergarten with academic, social, and emotional readiness.',
      features: [
        'Kindergarten preparation',
        'STEM learning activities',
        'Character development',
        'Field trips and special events',
        'Technology integration',
        'Parent-teacher conferences'
      ],
      curriculum: [
        { icon: BookOpen, title: 'Academic Readiness', desc: 'Math, science, reading, and writing preparation' },
        { icon: Award, title: 'STEM Activities', desc: 'Science experiments, building, and problem-solving' },
        { icon: Heart, title: 'Character Building', desc: 'Kindness, responsibility, and leadership skills' },
        { icon: Users, title: 'Social Skills', desc: 'Cooperation, conflict resolution, and friendship building' }
      ],
      dailySchedule: [
        { time: '6:30 - 8:00 AM', activity: 'Arrival & Learning Centers' },
        { time: '8:00 - 8:30 AM', activity: 'Breakfast' },
        { time: '8:30 - 9:00 AM', activity: 'Morning Circle' },
        { time: '9:00 - 10:00 AM', activity: 'Academic Learning Time' },
        { time: '10:00 - 10:30 AM', activity: 'Snack & Story' },
        { time: '10:30 - 11:30 AM', activity: 'Outdoor Play' },
        { time: '11:30 AM - 12:30 PM', activity: 'STEM Activities' },
        { time: '12:30 - 1:30 PM', activity: 'Lunch' },
        { time: '1:30 - 2:30 PM', activity: 'Quiet Time/Rest' },
        { time: '2:30 - 3:00 PM', activity: 'Snack' },
        { time: '3:00 - 4:00 PM', activity: 'Creative Arts' },
        { time: '4:00 - 5:00 PM', activity: 'Free Choice Activities' },
        { time: '5:00 - 6:30 PM', activity: 'Outdoor Play & Departure' }
      ]
    },
    {
      id: 3,
      title: 'School Age',
      age: '5 - 12 years',
      ratio: '1:12',
      hours: 'Before/After School & Summer',
      image: schoolAge,
      color: 'from-purple-400 to-purple-600',
      description: 'Our school-age program provides homework support, enrichment activities, and fun experiences for elementary students.',
      features: [
        'Homework assistance',
        'Educational field trips',
        'Leadership opportunities',
        'Sports and fitness',
        'Technology projects',
        'Summer camp activities'
      ],
      curriculum: [
        { icon: BookOpen, title: 'Academic Support', desc: 'Homework help and tutoring in all subjects' },
        { icon: Award, title: 'Leadership Skills', desc: 'Student council, peer mentoring, and responsibility roles' },
        { icon: Gamepad2, title: 'Recreation', desc: 'Sports, games, and physical fitness activities' },
        { icon: Palette, title: 'Enrichment', desc: 'Art, music, drama, and special interest clubs' }
      ],
      dailySchedule: [
        { time: '6:30 - 7:30 AM', activity: 'Before School Care' },
        { time: '3:00 - 4:00 PM', activity: 'Arrival & Snack' },
        { time: '4:00 - 5:00 PM', activity: 'Homework Time' },
        { time: '5:00 - 6:00 PM', activity: 'Enrichment Activities' },
        { time: '6:00 - 6:30 PM', activity: 'Free Play & Departure' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What are your enrollment requirements?',
      answer: 'We require completed enrollment forms, immunization records, emergency contacts, and a non-refundable registration fee. We also schedule a tour and orientation before your child starts.'
    },
    {
      question: 'Do you provide meals and snacks?',
      answer: 'Yes, we provide nutritious breakfast, lunch, and afternoon snack. All meals are prepared fresh daily and accommodate dietary restrictions and allergies with proper documentation.'
    },
    {
      question: 'What is your sick child policy?',
      answer: 'Children must be fever-free for 24 hours before returning. We follow state health department guidelines and will contact parents if a child becomes ill during the day.'
    },
    {
      question: 'How do you communicate with parents?',
      answer: 'We use a parent app for daily reports, photos, and messages. We also provide monthly newsletters, parent-teacher conferences, and maintain an open-door policy.'
    },
    {
      question: 'What safety measures do you have in place?',
      answer: 'Our facility has secure entry systems, background-checked staff, emergency procedures, and regular safety drills. All staff are CPR and First Aid certified.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-96 h-96 border border-white/20 rounded-full absolute top-10 right-10" />
          <div className="w-64 h-64 border border-white/20 rounded-full absolute bottom-20 left-20" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-green-300">Programs</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Age-appropriate programs designed to nurture growth, learning, and development 
              at every stage of your child's journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Navigation */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {programs.map((program, index) => (
              <motion.button
                key={program.id}
                onClick={() => setSelectedProgram(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedProgram === index
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {program.title}
                <Badge className="ml-2 bg-white/20">{program.age}</Badge>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <AnimatePresence mode="wait">
        <motion.section
          key={selectedProgram}
          className="py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <motion.div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${programs[selectedProgram].color} text-white text-sm font-medium mb-4`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Ages {programs[selectedProgram].age}
                </motion.div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  {programs[selectedProgram].title}
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {programs[selectedProgram].description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Teacher Ratio</p>
                      <p className="text-gray-600">{programs[selectedProgram].ratio}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Hours</p>
                      <p className="text-gray-600">{programs[selectedProgram].hours}</p>
                    </div>
                  </div>
                </div>

                <Button className="btn-primary text-white px-8 py-3 text-lg">
                  Enroll in This Program
                </Button>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${programs[selectedProgram].color} rounded-3xl blur-xl opacity-20`} />
                <img
                  src={programs[selectedProgram].image}
                  alt={programs[selectedProgram].title}
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
              </motion.div>
            </div>

            {/* Program Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Card className="col-span-full md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Program Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {programs[selectedProgram].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="col-span-full lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span>Curriculum Highlights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {programs[selectedProgram].curriculum.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${programs[selectedProgram].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Daily Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span>Daily Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {programs[selectedProgram].dailySchedule.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{item.time}</p>
                        <p className="text-gray-600 text-sm">{item.activity}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Schedule a tour to see our programs in action and meet our amazing teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Schedule a Tour
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                Download Enrollment Forms
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

