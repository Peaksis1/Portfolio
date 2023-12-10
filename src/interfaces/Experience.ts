import { JobsPeformed } from './JobsPeformed';

export interface Experience {
  organization: string;
  organizationLogo?: string;
  jobTitles: JobsPeformed[];
}
