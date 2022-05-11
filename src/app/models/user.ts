export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  role: string;
  cases?: [];
  approvedCases?: [];
  state?: string;
}
