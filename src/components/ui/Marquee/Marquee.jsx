import React from 'react';
import Marquee from "react-fast-marquee";
import { SiReact, SiAngular, SiPrisma, SiNodedotjs, SiExpress, SiAdobephotoshop, SiFigma, SiCloudflare, SiFlutter, SiDigitalocean } from "react-icons/si";

const Marquees = () => {
  const tech = [
    { icon: <SiReact className="text-sky-400" />, name: 'React' },
    { icon: <SiAngular className="text-red-600" />, name: 'Angular' },
    { icon: <SiPrisma className="text-teal-600" />, name: 'Prisma ORM' },
    { icon: <SiDigitalocean className="text-pink-500" />, name: 'Digital Marketing' },
    { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-800" />, name: 'Express.js' },
    { icon: <SiAdobephotoshop className="text-blue-500" />, name: 'Photoshop' },
    { icon: <SiCloudflare className="text-orange-500" />, name: 'Cloud' },
    { icon: <SiFigma className="text-purple-500" />, name: 'Figma' },
    { icon: <SiFlutter className="text-sky-600" />, name: 'Flutter' },
  ];

  return (
    <div className="w-full italic py-6 ">
      <Marquee pauseOnHover speed={60}>
        {tech.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white cursor-target px-4 py-2 rounded-md mx-4 min-w-[150px] justify-center"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-medium text-gray-800">{item.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;
