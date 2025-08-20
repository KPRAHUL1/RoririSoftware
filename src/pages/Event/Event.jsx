import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Calendar, MapPin, Users, Clock, ChevronRight, X, Send, Loader2 } from 'lucide-react';
import { career1, event1, event2, inaguration1, inaguration2, intern1, intern2, max1, onam1, work1, work4 } from '../../assets/events/events';
import { events } from '../../assets/lottiefiles/lettie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const EventsComponent = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institution: ''
    });
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Three.js Background Component
    const ThreeCanvas = () => {
        const mountRef = useRef(null);

        useEffect(() => {
            const currentMount = mountRef.current;
            if (!currentMount) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            currentMount.appendChild(renderer.domElement);

            const handleResize = () => {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 300;
            const posArray = new Float32Array(particlesCount * 3);

            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 8;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.03,
                color: 0x8B5CF6,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            camera.position.z = 3;

            const animate = () => {
                requestAnimationFrame(animate);
                particlesMesh.rotation.x += 0.0008;
                particlesMesh.rotation.y += 0.0012;
                renderer.render(scene, camera);
            };
            animate();

            return () => {
                window.removeEventListener('resize', handleResize);
                if (currentMount && renderer.domElement) {
                    currentMount.removeChild(renderer.domElement);
                }
                renderer.dispose();
                particlesGeometry.dispose();
                particlesMaterial.dispose();
            };
        }, []);

        return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none"></div>;
    };

    // Sample Data
    const upcomingEvents = [
        {
            id: 1,
            title: "AI & Machine Learning Summit 2025",
            date: "March 15, 2025",
            time: "9:00 AM - 6:00 PM",
            location: "Roriri IT Park, Tirunelveli",
            description: "Join industry experts for insights into the latest AI trends and technologies.",
            attendees: 200,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center"
        },
        {
            id: 2,
            title: "Web Development Bootcamp",
            date: "March 28, 2025",
            time: "10:00 AM - 4:00 PM",
            location: "Roriri Foundations, Kalakad",
            description: "Intensive hands-on workshop covering modern web technologies and frameworks.",
            attendees: 150,
            image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop&crop=center"
        }
    ];

    const pastEvents = [
        {
            id: 1,
            category: "Workshop Programs",
            title: "UI/UX Design Workshop",
            date: "September 1, 2024",
            location: "Roriri Foundations, Kalakad, Tirunelveli",
            description: "A hands-on workshop focused on user interface and user experience design principles.",
            image: event1
        },
        {
            id: 2,
            category: "Internship Programs",
            title: "IT BLUE PRINT '24",
            date: "October 12, 2024",
            location: "RORIRI IT PARK, Tirunelveli",
            description: "A structured approach to shaping future tech professionals with job cracking strategies.",
            image: event2
        },
        {
            id: 3,
            category: "Inauguration",
            title: "Inauguration Event",
            date: "October 4, 2024",
            location: "Roriri Foundations, Kalakad, Tirunelveli",
            description: "Official opening of our new Roriri IT Park with inspiring speeches and networking.",
            image: inaguration1
        }
    ];

    // Event gallery images
    const eventGallery = [
        {
            id: 1,
            category: "Workshop Programs",
            title: "UI/UX Design Workshop",
            date: "September 1, 2024",
            image: work1
        },
        {
            id: 2,
            category: "Workshop Programs",
            title: "Web Development Workshop",
            date: "September 15, 2024",
            image: work4
        },
        {
            id: 3,
            category: "Internship Programs",
            title: "IT Blueprint Session",
            date: "October 12, 2024",
            image: intern1
        },
        {
            id: 4,
            category: "Internship Programs",
            title: "Coding Bootcamp",
            date: "November 5, 2024",
            image: intern2
        },
        {
            id: 5,
            category: "Inauguration",
            title: "IT Park Inauguration",
            date: "October 4, 2024",
            image: inaguration2
        },
        {
            id: 6,
            category: "Celebrations",
            title: "Christmas Celebration",
            date: "December 25, 2024",
            image: max1
        },
        {
            id: 7,
            category: "Celebrations",
            title: "Onam Celebration",
            date: "January 1, 2025",
            image: onam1
        },
        {
            id: 8,
            category: "Career Programs",
            title: "Jobathon 2024",
            date: "November 20, 2024",
            image: career1
        }
    ];

    const eventCategories = ["All", ...new Set(eventGallery.map(event => event.category))];
    const filteredGallery = activeCategory === 'All' ? eventGallery : eventGallery.filter(event => event.category === activeCategory);

    // Form validation function
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.institution.trim()) {
            newErrors.institution = 'Institution is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input changes and clear errors
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleRegisterClick = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
        // Reset form state when opening modal
        setFormData({ name: '', email: '', phone: '', institution: '' });
        setErrors({});
        setSubmitStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "510e84f9-6c6a-4bf5-85fb-8a6bba4b6b45",
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    institution: formData.institution,
                    event: selectedEvent?.title || 'Unknown Event',
                    to: "roririsoftpvtltd@gmail.com"
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', institution: '' });
                setErrors({});
            } else {
                throw new Error(result.message || 'Failed to send registration');
            }
        } catch (error) {
            console.error('Error:', error);

            // Fallback to mailto
            const subject = encodeURIComponent(`Event Registration - ${selectedEvent?.title || 'Unknown Event'}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.phone}\n` +
                `Institution: ${formData.institution}\n` +
                `Event: ${selectedEvent?.title || 'Unknown Event'}`
            );

            window.location.href = `mailto:roririsoftpvtltd@gmail.com?subject=${subject}&body=${body}`;
            
            setSubmitStatus('fallback');
            setFormData({ name: '', email: '', phone: '', institution: '' });
            setErrors({});
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Registration Modal */}
            {showModal && selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Register for {selectedEvent.title}</h3>
                                <button 
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            
                            <div className="mb-6 space-y-2">
                                <p className="flex items-center text-gray-700">
                                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                                    {selectedEvent.date}
                                </p>
                                {selectedEvent.time && (
                                    <p className="flex items-center text-gray-700">
                                        <Clock className="w-5 h-5 mr-2 text-purple-600" />
                                        {selectedEvent.time}
                                    </p>
                                )}
                                <p className="flex items-center text-gray-700">
                                    <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                                    {selectedEvent.location}
                                </p>
                            </div>
                            
                            <form onSubmit={handleSubmit}>
                                {/* Success Message - Only show after successful submission */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                                        ✅ Registered successfully! We'll get back to you soon.
                                    </div>
                                )}

                                {/* Error Message */}
                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                                        ❌ Failed to register. Please try again or contact us directly.
                                    </div>
                                )}

                                {/* Fallback Message */}
                                {submitStatus === 'fallback' && (
                                    <div className="mb-6 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-xl">
                                        📧 Registration form opened in your email client. Please send the email to complete registration.
                                    </div>
                                )}

                                <div className="space-y-4 mb-6">
                                    {/* Full Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                                                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                                ⚠️ {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                                                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="Enter your email address"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                                ⚠️ {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                                                errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                                ⚠️ {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    {/* Institution Field */}
                                    <div>
                                        <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                                            Institution/Company <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="institution"
                                            name="institution"
                                            value={formData.institution}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                                                errors.institution ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}
                                            placeholder="Enter your institution or company"
                                        />
                                        {errors.institution && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                                ⚠️ {errors.institution}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            <span>Registering...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Submit Registration</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
                <ThreeCanvas />
                <div className="relative italic flex flex-col lg:flex-row justify-center items-center z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="max-w-4xl mx-auto text-center lg:text-left lg:w-1/2">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            Roriri Events
                        </h1>
                        <p className="text-lg sm:text-lg lg:text-xl mb-12 text-gray-300 max-w-3xl leading-relaxed">
                            Empowering innovation through hackathons, tech talks, workshops, and networking events that shape the future of technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start">
                            <button 
                                onClick={() => document.getElementById('upcoming-events').scrollIntoView({ behavior: 'smooth' })}
                                className="cursor-pointer group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
                            >
                                View Events
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => document.getElementById('event-gallery').scrollIntoView({ behavior: 'smooth' })}
                                className="cursor-pointer group border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                            >
                                View Gallery
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="w-96 h-96 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[600px]  rounded-full flex items-center justify-center">
                             <DotLottieReact
          className="sm:w-[400px] p-3 sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[600px]"
          src={events}
          loop
          autoplay
        />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>

            {/* Upcoming Events Section */}
            <section className="italic py-16 lg:py-24 bg-white" id="upcoming-events">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join us for exciting upcoming events and workshops
                        </p>
                    </div>

                    {upcomingEvents.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {upcomingEvents.map((event) => (
                                <div key={event.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={event.image} 
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center`;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {event.description}
                                        </p>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-gray-700">
                                                <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                                                <span className="font-medium">{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <Clock className="w-5 h-5 text-purple-600 mr-3" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <Users className="w-5 h-5 text-purple-600 mr-3" />
                                                <span>{event.attendees} Expected Attendees</span>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleRegisterClick(event)}
                                            className=" cursor-pointer w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                                        >
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Calendar className="w-12 h-12 text-gray-400" />
                            </div>
                            <p className="text-xl text-gray-600">No upcoming events at the moment.</p>
                            <p className="text-gray-500 mt-2">Check back soon for exciting new events!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Past Events Section */}
            <section className="italic py-16 lg:py-24 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                            Past Events
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our successful events and community gatherings
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastEvents.map((event) => (
                            <div key={event.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-300">
                                <div className="relative h-80 overflow-hidden">
                                    <img 
                                        src={event.image} 
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center`;
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {event.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                                            <span className="truncate">{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Gallery Section */}
            <section className="italic py-16 lg:py-24 bg-white" id="event-gallery">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                            Event Gallery
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Relive the moments from our amazing events
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {eventCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={` cursor-pointer px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-300 hover:text-purple-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredGallery.map((event) => (
                            <div 
                                key={event.id} 
                                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop&crop=center`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-semibold text-lg mb-1 truncate">
                                            {event.title}
                                        </h3>
                                        <p className="text-white/80 text-sm">
                                            {event.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredGallery.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-600">No gallery images found for this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EventsComponent;