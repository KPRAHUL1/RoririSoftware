import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Calendar, MapPin, Users, Clock, ChevronRight } from 'lucide-react';
import { event1, event2, inaguration1 } from '../../assets/events/events';
import { events } from '../../assets/lottiefiles/lettie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const EventsComponent = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    

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
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center"
        },
        {
            id: 2,
            title: "Web Development Bootcamp",
            date: "March 28, 2025",
            time: "10:00 AM - 4:00 PM",
            location: "Roriri Foundations, Kalakad",
            description: "Intensive hands-on workshop covering modern web technologies and frameworks.",
            attendees: 150,
            image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop&crop=center"
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
        },
        {
            id: 4,
            category: "Celebrations",
            title: "Christmas Celebration 2024",
            date: "December 25, 2024",
            location: "Roriri Foundations, Kalakad, Tirunelveli",
            description: "Festive joy and community gathering with career counseling for students.",
            image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=300&fit=crop&crop=center"
        },
        {
            id: 5,
            category: "Career Programs",
            title: "JOBATHON",
            date: "October 4, 2024",
            location: "Roriri Foundations, Kalakad, Tirunelveli",
            description: "Connecting students with recruiters through mock interviews and networking sessions.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
        },
        {
            id: 6,
            category: "Career Programs",
            title: "Career Guidance 2024",
            date: "September 28, 2024",
            location: "Roriri Foundations, Kalakad, Tirunelveli",
            description: "Comprehensive career counseling program providing guidance on career paths.",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center"
        }
    ];

    const eventCategories = ["All", ...new Set(pastEvents.map(event => event.category))];
    const filteredEvents = activeCategory === 'All' ? pastEvents : pastEvents.filter(event => event.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
                <ThreeCanvas />
                <div className="relative flex flex-col lg:flex-row  justify-center items-center z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-5">
                    <div className="max-w-4xl mx-auto ">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            Roriri Events
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Empowering innovation through hackathons, tech talks, workshops, and networking events that shape the future of technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4  items-center">
                            <button 
                            onClick={() => window.location.href='/contact'}
                            className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                                Get In Touch
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button 
                            onClick={() => window.location.href='#event-gallery'}
                            className="group border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                                View Gallery
                            </button>
                        </div>
                    </div>
                    <DotLottieReact
          className=" w-96 h-96 sm:w-[400px] p-3 sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[600px]"
          src={events}
          loop
          autoplay
        />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
                                                e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center`;
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
                                        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
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
            <section className="py-16 lg:py-24 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
                                        className="w-full h-full  group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center`;
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
            <section className="py-16 lg:py-24 bg-white" id='event-gallery'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Event Gallery
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Relive the moments from our amazing events
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {eventCategories.slice(1).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
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
                        {filteredEvents.map((event) => (
                            <div 
                                key={event.id} 
                                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop&crop=center`;
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

                    {filteredEvents.length === 0 && (
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