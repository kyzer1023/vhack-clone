import React from 'react';
import { teamMembers, getTeamMembersByRole } from '../data';
import '../styles/teamSection.css';

export default function TeamSection({ selectedRole }) {
  const filteredMembers = selectedRole === 'All' 
    ? teamMembers 
    : getTeamMembersByRole(selectedRole);

  return (
    <>
      {filteredMembers.map((member, index) => (
        <div key={index} className="flex flex-col justify-center items-center min-h-[400px] py-8">
          <div className="w-44 mb-8 relative">
            <div className="w-44 h-24 rounded-t-sm bottom-0 bg-white absolute z-2"></div>
            <div className="w-44 overflow-hidden">
              <span className="lazy-load-image-background opacity lazy-load-image-loaded" 
                    style={{ color: 'transparent', display: 'inline-block', height: '200px', width: '200px' }}>
                <img
                  id={`committeeAvatar-${index}`}
                  src={member.img}
                  alt={member.name}
                  className="w-44 translate-y-0 hover:-translate-y-2 hover:scale-105 transition-all duration-150 relative object-center -bottom-12 z-3 max-h-[250px] max-w-[176px]"
                  width="200"
                  height="200"
                />
              </span>
            </div>
          </div>
          <p className="font-bold text-base text-center text-white font-proza -mt-4">{member.name}</p>
          <p className=" text-center text-base text-white font-proza md:text-[15px] lg:text-base">{member.role}</p>
          <p className="text-white font-proza">{member.position}</p>
          <div className="mt-2 flex gap-3">
            {member.socials.facebook && (
              <a className="link" href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook fa-lg text-white/50 hover:text-[#3b5998] transition-all duration-300 social-icon"></i>
              </a>
            )}
            <a className="link" href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram fa-lg text-white/50 hover:text-[#8a3ab9] transition-all duration-300 social-icon"></i>
            </a>
            <a className="link" href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-lg text-white/50 hover:text-[#0077B5] transition-all duration-300 social-icon"></i>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}