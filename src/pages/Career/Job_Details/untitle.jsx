import { useParams, Link } from 'react-router-dom'; // Assuming you use React Router for dynamic routes
import { motion } from 'framer-motion';
import jobData from './Job_Details/jobData';
import JobApplicationForm from './components/JobApplicationForm';
 // Import your simulated job data

const JobDescriptionPage = () => {
  // In a real app, you'd use useParams() from react-router-dom to get the ID from the URL.
  // For this example, we'll hardcode it to 'fullstack-developer' for demonstration.
  const { jobId } = useParams();
//   const jobId = 'fullstack-developer'; // Hardcoded for demonstration, replace with useParams()

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        // In a real app, this would be:
        // const response = await fetch(/api/jobs/${jobId});
        // if (!response.ok) throw new Error('Job not found');
        // const data = await response.json();

        // Simulate fetching from local data based on ID
        const foundJob = jobData.find(j => j.id === jobId);

        if (!foundJob) {
          throw new Error('Job not found');
        }
        setJob(foundJob);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]); // Re-fetch if jobId changes

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Loading job details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <p>Error: {error}</p>
        <Link to="/careers" className="mt-4 text-blue-600 hover:underline">
          Go back to Careers Page
        </Link>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Job details could not be loaded.
      </div>
    );
  }

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar - assuming it's a separate component or global layout */}
      {/* For this example, I'll just include a placeholder for context */}
      
      <div className="container mx-auto p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6"
          >
            Role Description:
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.1 }}
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-8"
          >
            {job.roleDescription}
          </motion.p>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-5"
          >
            Qualifications:
          </motion.h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
            className="list-none space-y-3 mb-8"
          >
            {job.qualifications.map((qualification, index) => (
              <motion.li
                key={index}
                variants={sectionVariants}
                className="flex items-start text-gray-700 text-base md:text-lg"
              >
                <svg
                  className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {qualification}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-5"
          >
            Skills Required:
          </motion.h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.5, staggerChildren: 0.08 }}
            className="list-none space-y-3 mb-8"
          >
            {job.skillsRequired.map((skill, index) => (
              <motion.li
                key={index}
                variants={sectionVariants}
                className="flex items-start text-gray-700 text-base md:text-lg"
              >
                <svg
                  className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {skill}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-5"
          >
            Responsibilities:
          </motion.h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.7, staggerChildren: 0.1 }}
            className="list-none space-y-3 mb-8"
          >
            {job.responsibilities.map((responsibility, index) => (
              <motion.li
                key={index}
                variants={sectionVariants}
                className="flex items-start text-gray-700 text-base md:text-lg"
              >
                <svg
                  className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {responsibility}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Sidebar Area */}
        <div className="lg:w-96 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-28 bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              {job.title}
            </h3>

            <div className="space-y-3 text-gray-700 mb-6">
              <div className="flex items-center">
                <span className="font-medium mr-2">Workplace:</span> {job.workplace}
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Location:</span> {job.location}
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Job Type:</span> {job.jobType}
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Experience:</span> {job.experience}
              </div>
            </div>

            <motion.a
            href='/jopapplicationform'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>APPLY NOW</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    <JobApplicationForm/>

    </div>
  );
};

export default JobDescriptionPage;