
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  User, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Layers, 
  Github, 
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';

// Define proper type for ContactCard props
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
  color: string;
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  // Project data
  const project = {
    title: 'My Fun Project',
    description: 'A playful showcase of my web development skills using HTML, CSS, and JavaScript.',
    tags: ['HTML/CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    details: 'This project demonstrates my ability to create responsive, interactive web applications. I focused on clean code and user experience, implementing modern design principles and ensuring cross-browser compatibility.'
  };

  // Skills data
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Random rotation for cartoony effect
  const getRandomRotation = () => {
    return Math.random() * 6 - 3; // Random number between -3 and 3
  };

  return (
    <div className="min-h-screen cartoon-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-black">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="bg-[#FF6B6B] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-3 border-4 border-black">
                JT
              </div>
              <h1 className="text-2xl font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Jack Tambanis</h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavItem href="#about" label="About" icon={<User size={16} />} setActiveTab={setActiveTab} activeTab={activeTab} />
              <NavItem href="#skills" label="Skills" icon={<Layers size={16} />} setActiveTab={setActiveTab} activeTab={activeTab} />
              <NavItem href="#project" label="Project" icon={<Code size={16} />} setActiveTab={setActiveTab} activeTab={activeTab} />
              <NavItem href="#resume" label="Resume" icon={<FileText size={16} />} setActiveTab={setActiveTab} activeTab={activeTab} />
              <NavItem href="#contact" label="Contact" icon={<Mail size={16} />} setActiveTab={setActiveTab} activeTab={activeTab} />
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black p-2 bubble-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-3 border-t border-black mt-3"
            >
              <nav className="flex flex-col space-y-2">
                <MobileNavItem href="#about" label="About" icon={<User size={18} />} setActiveTab={setActiveTab} onClick={() => setIsMenuOpen(false)} />
                <MobileNavItem href="#skills" label="Skills" icon={<Layers size={18} />} setActiveTab={setActiveTab} onClick={() => setIsMenuOpen(false)} />
                <MobileNavItem href="#project" label="Project" icon={<Code size={18} />} setActiveTab={setActiveTab} onClick={() => setIsMenuOpen(false)} />
                <MobileNavItem href="#resume" label="Resume" icon={<FileText size={18} />} setActiveTab={setActiveTab} onClick={() => setIsMenuOpen(false)} />
                <MobileNavItem href="#contact" label="Contact" icon={<Mail size={18} />} setActiveTab={setActiveTab} onClick={() => setIsMenuOpen(false)} />
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Fun shape decorations */}
        <div className="shape-circle" style={{ top: '120px', left: '5%' }}></div>
        <div className="shape-triangle" style={{ top: '300px', right: '10%' }}></div>
        <div className="shape-rectangle" style={{ top: '500px', left: '15%' }}></div>
        
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center relative">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Hello, I'm<br />
              <span className="text-[#FF6B6B] squiggle">
                Jack Tambanis
              </span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed font-medium">
              Web Developer specializing in creating fun, functional websites using HTML, CSS, and JavaScript.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveTab("contact");
                }} 
                className="bubble-button"
              >
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
                  setActiveTab("project");
                }}
                className="border-black border-3 font-bold"
              >
                View Project
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bouncy">
              <div className="cartoon-card overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Developer working" 
                  className="w-full h-auto transform rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Main Content Sections */}
        <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid grid-cols-5 mb-8 p-1 cartoon-border bg-white">
            <TabsTrigger value="about" className="data-[state=active]:bg-[#FFD166] data-[state=active]:text-black font-bold">About</TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-[#06D6A0] data-[state=active]:text-black font-bold">Skills</TabsTrigger>
            <TabsTrigger value="project" className="data-[state=active]:bg-[#118AB2] data-[state=active]:text-white font-bold">Project</TabsTrigger>
            <TabsTrigger value="resume" className="data-[state=active]:bg-[#073B4C] data-[state=active]:text-white font-bold">Resume</TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-[#FF6B6B] data-[state=active]:text-white font-bold">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" id="about" className="mt-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="cartoon-card">
                <div className="md:flex">
                  <div className="md:w-1/3 p-6 bg-[#FFD166]">
                    <div className="rounded-full w-48 h-48 mx-auto overflow-hidden border-4 border-black cartoon-shadow">
                      <img 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&q=80" 
                        alt="Jack Tambanis" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardContent className="p-8 md:w-2/3">
                    <h2 className="text-3xl font-bold mb-4 squiggle" style={{ fontFamily: 'Comic Sans MS, cursive' }}>About Me</h2>
                    <p className="mb-6 leading-relaxed text-lg">
                      I'm Jack Tambanis, a passionate web developer based in Melbourne. I specialize in creating fun, 
                      user-friendly websites using HTML, CSS, and JavaScript.
                    </p>
                    <p className="mb-6 leading-relaxed text-lg">
                      My goal is to build intuitive and responsive web experiences that look great on any device. 
                      I'm constantly learning and improving my skills to deliver better solutions.
                    </p>
                  </CardContent>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="skills" id="skills" className="mt-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="cartoon-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 squiggle" style={{ fontFamily: 'Comic Sans MS, cursive' }}>My Skills</h2>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-xl">{skill.name}</span>
                          <span className="text-[#FF6B6B] font-bold">{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="progress-fill"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="project" id="project" className="mt-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="cartoon-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 squiggle" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{project.title}</h2>
                    <p className="mb-4 text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-[#FFD166] text-black font-bold rounded-full text-sm border-2 border-black transform" style={{ transform: `rotate(${getRandomRotation()}deg)` }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.div
                      animate={{ height: isProjectExpanded ? 'auto' : '0' }}
                      className={`overflow-hidden transition-all duration-300 ${isProjectExpanded ? 'mb-6' : ''}`}
                    >
                      <p className="text-lg">{project.details}</p>
                    </motion.div>
                    
                    <Button 
                      onClick={() => setIsProjectExpanded(!isProjectExpanded)} 
                      variant="outline"
                      className="border-2 border-black font-bold flex items-center gap-2 hover:bg-[#FFD166]"
                    >
                      {isProjectExpanded ? 'Show Less' : 'Show More'}
                      {isProjectExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </Button>
                    <Button className="mt-4 bubble-button">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="resume" id="resume" className="mt-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="cartoon-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 squiggle" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Resume</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#118AB2]">Education</h3>
                      <div className="bg-white rounded-lg p-4 border-4 border-black cartoon-shadow" style={{ transform: `rotate(${getRandomRotation()}deg)` }}>
                        <div className="flex justify-between mb-1">
                          <h4 className="font-bold text-lg">Web Development Course</h4>
                          <span className="text-[#FF6B6B] text-sm font-bold bg-[#FFD166] px-2 py-1 rounded-full border-2 border-black">2023</span>
                        </div>
                        <p className="text-md">Completed comprehensive web development training focusing on modern technologies and best practices.</p>
                      </div>
                    </div>

                    <hr className="doodle-hr" />

                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#118AB2]">Experience</h3>
                      <div className="bg-white rounded-lg p-4 border-4 border-black cartoon-shadow" style={{ transform: `rotate(${-getRandomRotation()}deg)` }}>
                        <div className="flex justify-between mb-1">
                          <h4 className="font-bold text-lg">Freelance Web Developer</h4>
                          <span className="text-[#FF6B6B] text-sm font-bold bg-[#FFD166] px-2 py-1 rounded-full border-2 border-black">2023 - Present</span>
                        </div>
                        <p className="text-md">Creating responsive websites and web applications for various clients using HTML, CSS, and JavaScript.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="bubble-button wiggle w-full md:w-auto">
                      Download CV <FileText className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="contact" id="contact" className="mt-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="cartoon-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 squiggle" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Get In Touch</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <ContactCard 
                      icon={<Mail className="h-6 w-6 text-white" />}
                      title="Email"
                      content="jack.jacktambanis.tech"
                      href="mailto:jack.jacktambanis.tech"
                      color="from-[#FF6B6B] to-[#FF8E8E]"
                    />
                    <ContactCard 
                      icon={<Phone className="h-6 w-6 text-white" />}
                      title="Phone"
                      content="+61 491 601"
                      href="tel:+61491601"
                      color="from-[#06D6A0] to-[#0AC593]"
                    />
                    <ContactCard 
                      icon={<MapPin className="h-6 w-6 text-white" />}
                      title="Location"
                      content="Melbourne, Australia"
                      href="#"
                      color="from-[#FFD166] to-[#FFE599]"
                    />
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-md font-bold mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-white border-4 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] cartoon-shadow"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-md font-bold mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-white border-4 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] cartoon-shadow"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-md font-bold mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-white border-4 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] cartoon-shadow"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="bubble-button wiggle"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="py-8 bg-white border-t-4 border-black mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl font-bold squiggle inline-block mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Jack Tambanis
          </div>
          <div className="text-black font-bold text-sm">
            &copy; {new Date().getFullYear()} Jack Tambanis. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const NavItem = ({ href, label, icon, activeTab, setActiveTab }) => {
  const isActive = activeTab === href.slice(1);
  
  return (
    <a
      href={href}
      onClick={() => setActiveTab(href.slice(1))}
      className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
        isActive 
        ? 'bg-[#FFD166] text-black border-2 border-black cartoon-shadow' 
        : 'text-black hover:bg-[#FFE599] border-2 border-transparent hover:border-black'
      }`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </a>
  );
};

const MobileNavItem = ({ href, label, icon, onClick, setActiveTab }) => {
  return (
    <a
      href={href}
      onClick={() => {
        setActiveTab(href.slice(1));
        onClick();
      }}
      className="flex items-center px-4 py-3 hover:bg-[#FFD166] rounded-xl transition-colors text-black font-bold border-2 border-black cartoon-shadow"
    >
      <span className="mr-3 text-[#FF6B6B]">{icon}</span>
      {label}
    </a>
  );
};

const ContactCard = ({ icon, title, content, href, color }: ContactCardProps) => {
  return (
    <motion.a 
      whileHover={{ y: -5, rotate: 5 }}
      href={href || '#'} 
      className="block group"
    >
      <div className="bg-white rounded-xl cartoon-card p-6 text-center wiggle">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${color} mx-auto flex items-center justify-center mb-4 border-4 border-black`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{title}</h3>
        <p className="group-hover:text-[#FF6B6B] transition-colors font-medium">{content}</p>
      </div>
    </motion.a>
  );
};

export default Portfolio;
