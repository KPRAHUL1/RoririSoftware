import React, { useEffect, useRef, useState } from 'react';
import {motion as Motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
import * as THREE from 'three';

// Main App Component for Events Page
const App = () => {
    // State for managing the visibility of the workshop advertisement
    const [showWorkshopAd, setShowWorkshopAd] = useState(true);

    // Animation variants for sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Animation variants for cards/items
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Three.js Canvas Component
    const ThreeCanvas = () => {
        const mountRef = useRef(null);

        useEffect(() => {
            const currentMount = mountRef.current;
            if (!currentMount) return;

            // Scene, Camera, Renderer setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            currentMount.appendChild(renderer.domElement);

            // Responsive resizing
            const handleResize = () => {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            // Add some simple 3D objects (e.g., glowing particles)
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 500;
            const posArray = new Float32Array(particlesCount * 3);

            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 10;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.02,
                color: 0x8A2BE2, // BlueViolet
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            camera.position.z = 2;

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);

                // Rotate particles
                particlesMesh.rotation.x += 0.0005;
                particlesMesh.rotation.y += 0.0007;

                renderer.render(scene, camera);
            };
            animate();

            // Cleanup
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


    const [activeCategory, setActiveCategory] = useState('Onam Celebrations'); // State for event categories

    const eventCategories = [
        "Onam Celebrations",
        "Internship Programs",
        "Inauguration",
        "X-Mas"
    ];

    const upcomingEvents = [
        {
            title: "Future IT Professionals Workshop",
            date: "October 19 @ 10:00 AM",
            location: "Roriri Foundations, Kalakad, Tirunelveli",
            image: "https://placehold.co/400x250/E0E7FF/312E81?text=Workshop+Image"
        }
    ];

    const pastEvents = [
        {
            category: "Past Events",
            title: "Healing Program for Mental Well-being",
            date: "October 5 @ 11:00 AM",
            location: "Roriri Foundations, Kalakad, Tirunelveli",
            description: "Focused on mental well-being, this program offered meditation, group discussions, and coping techniques to manage stress effectively.",
            image: "https://placehold.co/400x250/E0E7FF/312E81?text=Healing+Program"
        },
        {
            category: "Past Events",
            title: "IT BLUE PRINT '24",
            subtitle: "A Structured Approach to Shaping Future Tech Professionals",
            details: [
                "A Non IT to IT",
                "Job Cracking Strategy",
                "Mock Interviews",
                "KT Session"
            ],
            hiring: "Hiring Process for Few Jobs",
            contact: "contact@roririfoundation.com | +91 87783 28630",
            date: "October 10 AM - 01 PM",
            day: "Saturday",
            recommended: "Recommended",
            audience: ["Non IT Students & Professionals", "Mech Students", "Civil Students"],
            qrCode: "https://placehold.co/150x150/E0E7FF/312E81?text=QR+Code",
            qrLocation: "RORIRI IT PARK, Tirunelveli-627002",
            image: "https://placehold.co/400x250/E0E7FF/312E81?text=IT+Blueprint"
        },
        {
            category: "Past Events",
            title: "JOBATHON",
            speaker: "MR. SANTHINESH",
            speakerTitle: "EX- TESLA PROFESSIONAL",
            image: "https://placehold.co/400x250/E0E7FF/312E81?text=Jobathon+Image",
            eventDetails: "Jobathon for Students: Connects students with recruiters, offering mock interviews and networking sessions to enhance job readiness.",
            eventDate: "October 4 @ 9:00 AM",
            eventLocation: "Roriri Foundations, Kalakad, Tirunelveli"
        },
        {
            category: "Past Events",
            title: "CAREER GUIDANCE - 2024",
            subtitle: "THE CAREER GUIDANCE PROGRAM",
            speaker: "Mrs. JERINA BUBBY",
            speakerTitle: "Post-Director at MEME Pro (Tirunelveli)",
            specialGuest: "Mr. K. Selva, Engineer (Kanyakumari)",
            motivationalSpeaker: "Mr. JC SELVARAJ, Motivational Speaker",
            welcomeMessage: "Welcome All School & College Students",
            careerCounseling: "Career Counseling for Students: Guidance on career paths, providing insights and strategies for making informed decisions.",
            eventDate: "September 28 @ 10:00 AM",
            eventLocation: "Roriri Foundations, Kalakad, Tirunelveli",
            image: "https://placehold.co/400x250/E0E7FF/312E81?text=Career+Guidance"
        }
    ];


    return (
        <div className="font-inter antialiased bg-gray-50">
            {/* Workshop Advertisement Notification */}
            <AnimatePresence>
                {showWorkshopAd && (
                    <Motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-3 md:p-4 text-center text-sm md:text-base flex items-center justify-center space-x-4 rounded-b-lg shadow-lg z-10"
                    >
                        <a
                            href="https://www.linkedin.com/company/roririsoft/" // Replace with actual LinkedIn/Instagram/Registration link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-grow flex items-center justify-center hover:underline cursor-pointer"
                        >
                            🎉 Don't miss our "Future IT Professionals Workshop"! Click here to register!
                        </a>
                        <Motion.button
                            onClick={() => setShowWorkshopAd(false)}
                            className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Dismiss advertisement"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </Motion.button>
                    </Motion.div>
                )}
            </AnimatePresence>

            {/* Header/Navigation */}
       

            {/* Hero Section for Events */}
            <Motion.section
                className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden rounded-b-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                {/* Three.js Background Canvas */}
                <ThreeCanvas />

                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl relative z-10">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <Motion.h1
                            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Roriri Events
                        </Motion.h1>
                        <Motion.p
                            className="text-lg md:text-xl mb-8 opacity-90 rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Empowering innovation with hackathons, tech talks, client appreciation events, product launches, webinars, team-building activities, and workshops.
                        </Motion.p>
                        <Motion.button
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center mx-auto md:mx-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </Motion.button>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end relative">
                        {/* Placeholder for the Events illustration image */}
                        <Motion.img
                            src="https://placehold.co/600x400/6D28D9/FFFFFF?text=Events+Illustration"
                            alt="Events Illustration"
                            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/6D28D9/FFFFFF?text=Events+Illustration'; }}
                        />
                    </div>
                </div>
            </Motion.section>

            {/* Upcoming Events Section */}
            <Motion.section
                className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Upcoming Events</h2>

                    {upcomingEvents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {upcomingEvents.map((event, index) => (
                                <Motion.div
                                    key={index}
                                    className="bg-gray-100 p-6 rounded-xl shadow-lg text-left border border-gray-200"
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E7FF/312E81?text=Event+Image'; }} />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 rounded-lg">{event.title}</h3>
                                    <p className="text-gray-700 mb-1 rounded-lg">
                                        <span className="font-medium">Date:</span> {event.date}
                                    </p>
                                    <p className="text-gray-700 rounded-lg">
                                        <span className="font-medium">Location:</span> {event.location}
                                    </p>
                                </Motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-700 text-lg">No upcoming events at the moment. Please check back later!</p>
                    )}
                </div>
            </Motion.section>

            {/* Past Events Section */}
            <Motion.section
                className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Past Events</h2>

                    {/* Event Categories Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {eventCategories.map((category) => (
                            <Motion.button
                                key={category}
                                className={`py-2 px-6 rounded-full font-semibold transition duration-300 ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                                }`}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </Motion.button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastEvents.filter(event => activeCategory === 'All' || event.category === activeCategory).map((event, index) => (
                            <Motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg text-left border border-gray-200"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E7FF/312E81?text=Event+Image'; }} />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 rounded-lg">{event.title}</h3>
                                {event.subtitle && <p className="text-sm text-gray-600 mb-2 rounded-lg">{event.subtitle}</p>}
                                {event.description && <p className="text-gray-700 mb-2 rounded-lg">{event.description}</p>}
                                {event.details && (
                                    <ul className="list-disc list-inside text-gray-700 mb-2 rounded-lg">
                                        {event.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                {event.hiring && <p className="text-lg font-bold text-blue-600 mb-2 rounded-lg">{event.hiring}</p>}
                                {event.contact && <p className="text-gray-700 text-sm mb-2 rounded-lg">{event.contact}</p>}
                                {event.speaker && <p className="text-gray-800 font-medium mb-1 rounded-lg">Speaker: {event.speaker}</p>}
                                {event.speakerTitle && <p className="text-gray-600 text-sm mb-2 rounded-lg">{event.speakerTitle}</p>}
                                {event.specialGuest && <p className="text-gray-800 font-medium mb-1 rounded-lg">Special Guest: {event.specialGuest}</p>}
                                {event.motivationalSpeaker && <p className="text-gray-800 font-medium mb-1 rounded-lg">Motivational Speaker: {event.motivationalSpeaker}</p>}
                                {event.welcomeMessage && <p className="text-gray-700 italic mb-2 rounded-lg">{event.welcomeMessage}</p>}
                                {event.careerCounseling && <p className="text-gray-700 mb-2 rounded-lg">{event.careerCounseling}</p>}
                                {event.eventDetails && <p className="text-gray-700 mb-2 rounded-lg">{event.eventDetails}</p>}
                                {event.date && <p className="text-gray-700 mb-1 rounded-lg"><span className="font-medium">Date:</span> {event.date}</p>}
                                {event.day && <p className="text-gray-700 mb-1 rounded-lg"><span className="font-medium">Day:</span> {event.day}</p>}
                                {event.location && <p className="text-gray-700 rounded-lg"><span className="font-medium">Location:</span> {event.location}</p>}
                                {event.eventDate && <p className="text-gray-700 mb-1 rounded-lg"><span className="font-medium">Date:</span> {event.eventDate}</p>}
                                {event.eventLocation && <p className="text-gray-700 rounded-lg"><span className="font-medium">Location:</span> {event.eventLocation}</p>}
                                {event.recommended && <p className="text-green-600 font-bold mt-2 rounded-lg">{event.recommended}</p>}
                                {event.audience && (
                                    <div className="mt-2 rounded-lg">
                                        <p className="font-medium text-gray-800">Audience:</p>
                                        <ul className="list-disc list-inside text-gray-700">
                                            {event.audience.map((aud, i) => <li key={i}>{aud}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {event.qrCode && <img src={event.qrCode} alt="QR Code" className="w-24 h-24 mx-auto mt-4 rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/E0E7FF/312E81?text=QR+Code'; }} />}
                                {event.qrLocation && <p className="text-gray-700 text-sm mt-2 rounded-lg">{event.qrLocation}</p>}
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </Motion.section>

            {/* Gallery Section (based on the image with Onam Celebrations, etc.) */}
            <Motion.section
                className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">Event Gallery</h2>

                    {/* Gallery Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {["Onam Celebrations", "Internship Programs", "Inauguration", "X-Mas"].map((category) => (
                            <Motion.button
                                key={category}
                                className={`py-2 px-6 rounded-full font-semibold transition duration-300 ${
                                    activeCategory === category // Reusing activeCategory state, could be separate if more complex
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                                }`}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </Motion.button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for gallery images - will show duplicates for now */}
                        {[...Array(6)].map((_, index) => ( // Displaying 6 placeholder images
                            <Motion.div
                                key={index}
                                className="bg-gray-100 p-4 rounded-xl shadow-lg overflow-hidden"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img
                                    src={`https://placehold.co/400x300/E0E7FF/312E81?text=Event+Photo+${index + 1}`}
                                    alt={`Event Photo ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition duration-300"
                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/E0E7FF/312E81?text=Event+Photo+${index + 1}`; }}
                                />
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </Motion.section>


           
        </div>
    );
};

export default App;
