export type CommitInput = {
  hash: string;
  message: string;
  author?: string;
  date?: string;
};

export type GenerateChangelogRequest = {
  version?: string;
  commits: CommitInput[];
  format?: 'markdown' | 'json' | 'html';
  title?: string;
};

export type UserRecord = {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
};

export type AuthTokenPayload = {
  userId: string;
  email: string;
};

export type AuthenticatedUser = {
  id: string;
  email: string;
};
