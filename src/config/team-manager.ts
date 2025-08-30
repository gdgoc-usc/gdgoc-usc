import type { TeamMember, DepartmentMember } from './team.types';

export interface TeamYearData {
  leadership: TeamMember[];
  externalRelations: DepartmentMember[];
  humanresources: DepartmentMember[];
  marketing: DepartmentMember[];
  operations: DepartmentMember[];
  finance: DepartmentMember[];
  technology: DepartmentMember[];
}

export interface SchoolYear {
  id: string;
  label: string;
  data: TeamYearData;
}

const getTeamData = async (year: string): Promise<TeamYearData> => {
  switch (year) {
    case '2025-2026': {
      const current = await import('./team-2025-2026.data');
      return {
        leadership: current.leadership,
        externalRelations: current.externalRelations,
        humanresources: current.humanresources,
        marketing: current.marketing,
        operations: current.operations,
        finance: current.finance,
        technology: current.technology,
      };
    }
    case '2024-2025': {
      const previous = await import('./team-2024-2025.data');
      return {
        leadership: previous.leadership,
        externalRelations: previous.externalRelations,
        humanresources: previous.humanresources,
        marketing: previous.marketing,
        operations: previous.operations,
        finance: previous.finance,
        technology: previous.technology,
      };
    }
    default: {
      const defaultData = await import('./team-2025-2026.data');
      return {
        leadership: defaultData.leadership,
        externalRelations: defaultData.externalRelations,
        humanresources: defaultData.humanresources,
        marketing: defaultData.marketing,
        operations: defaultData.operations,
        finance: defaultData.finance,
        technology: defaultData.technology,
      };
    }
  }
};

export const availableYears: SchoolYear[] = [
  {
    id: '2025-2026',
    label: 'S.Y 2025-2026',
    data: {} as TeamYearData,
  },
  {
    id: '2024-2025',
    label: 'S.Y 2024-2025',
    data: {} as TeamYearData,
  },
];

export const getCurrentYear = (): string => '2025-2026';

export const getTeamDataForYear = getTeamData;

export const getYearLabel = (yearId: string): string => {
  const year = availableYears.find(y => y.id === yearId);
  return year ? year.label : 'S.Y 2025-2026';
};
