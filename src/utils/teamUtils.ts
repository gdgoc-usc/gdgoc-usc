import {
  leadership,
  externalRelations,
  humanresources,
  marketing,
  operations,
  finance,
  technology,
} from '../config/team.data';
import type {
  TeamMember as _TeamMember,
  DepartmentMember as _DepartmentMember,
} from '../config/team.types';

export interface MemberWithDepartment {
  name: string;
  role: string;
  imageUrl: string;
  department: string;
}

export function getAllMembersWithImages(): MemberWithDepartment[] {
  const members: MemberWithDepartment[] = [];

  leadership.forEach(member => {
    if (member.imageUrl && member.imageUrl.trim() !== '') {
      members.push({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: 'Leadership',
      });
    }
  });

  externalRelations.forEach(member => {
    if (member.imageUrl && member.imageUrl.trim() !== '') {
      members.push({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: 'External Relations',
      });
    }
  });

  humanresources.forEach(member => {
    if (member.imageUrl && member.imageUrl.trim() !== '') {
      members.push({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: 'Human Resources',
      });
    }
  });

  marketing.forEach(member => {
    if (member.imageUrl && member.imageUrl.trim() !== '') {
      members.push({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: 'Marketing',
      });
    }
  });

  operations.forEach(member => {
    if (member.imageUrl && member.imageUrl.trim() !== '') {
      members.push({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: 'Operations',
      });
    }
  });

  finance.forEach(member => {
    if (member.imageUrl && member.imageUrl.trim() !== '') {
      members.push({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: 'Finance',
      });
    }
  });

  technology.forEach(member => {
    if (member.imageUrl && member.imageUrl.trim() !== '') {
      members.push({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: 'Technology',
      });
    }
  });

  return members;
}

export function getMembersByDepartment(
  department: string
): MemberWithDepartment[] {
  return getAllMembersWithImages().filter(
    member => member.department === department
  );
}

export function getRandomMemberWithImage(): MemberWithDepartment | null {
  const members = getAllMembersWithImages();
  if (members.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * members.length);
  return members[randomIndex];
}

export function getMemberCountByDepartment(): Record<string, number> {
  const members = getAllMembersWithImages();
  const counts: Record<string, number> = {};

  members.forEach(member => {
    counts[member.department] = (counts[member.department] || 0) + 1;
  });

  return counts;
}

export function getTotalMembersWithImages(): number {
  return getAllMembersWithImages().length;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomMembersForReels(
  count: number = 12
): MemberWithDepartment[] {
  const allMembers = getAllMembersWithImages();
  const shuffled = shuffleArray(allMembers);

  // If we need more than available, repeat the array
  if (count > allMembers.length) {
    const repeated = [];
    while (repeated.length < count) {
      repeated.push(...shuffled);
    }
    return repeated.slice(0, count);
  }

  return shuffled.slice(0, count);
}

export function getAllMembersWithPrioritizedSorting(): MemberWithDepartment[] {
  const departments = [
    { data: leadership, name: 'Leadership' },
    { data: externalRelations, name: 'External Relations' },
    { data: humanresources, name: 'Human Resources' },
    { data: marketing, name: 'Marketing' },
    { data: operations, name: 'Operations' },
    { data: finance, name: 'Finance' },
    { data: technology, name: 'Technology' },
  ];

  const membersWithImages: MemberWithDepartment[] = [];
  const membersWithoutImages: MemberWithDepartment[] = [];

  departments.forEach(dept => {
    dept.data.forEach(member => {
      const memberWithDept: MemberWithDepartment = {
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl,
        department: dept.name,
      };

      if (member.imageUrl && member.imageUrl.trim() !== '') {
        membersWithImages.push(memberWithDept);
      } else {
        membersWithoutImages.push(memberWithDept);
      }
    });
  });

  return [...membersWithImages, ...membersWithoutImages];
}
