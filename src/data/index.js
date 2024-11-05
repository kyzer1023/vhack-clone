import { topcom } from './topcom';
import { programme } from './programme';
import { pr } from './pr';
import { publicity } from './publicity';
import { sponsorship } from './sponsorship';
import { logistics } from './logistics';
import { technical } from './technical';
import { design } from './design';
import { ROLES } from './constants';

export const teamMembers = [
  ...topcom,
  ...programme,
  ...pr,
  ...publicity,
  ...sponsorship,
  ...logistics,
  ...technical,
  ...design
];

// Helper functions
export const getTeamMembersByRole = (role) => {
  return teamMembers.filter(member => member.role === role);
};

export const getAllRoles = () => {
  return [...new Set(teamMembers.map(member => member.role))];
};

export { ROLES };
