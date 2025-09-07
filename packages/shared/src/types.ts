export type CrashBundle = {
  appId: string;
  version: string;
  device: string;
  os: string;
  locale: string;
  context: Record<string, unknown>; // device/app state deltas (hashed)
  uiSteps: Array<{ t: number; type: string; target: string; extra?: any }>;
  networkCassettes?: Array<{ method: string; urlHash: string; status: number; reqHash: string; resHash: string }>;
};

export type ReproStep = {
  t: number;
  type: string;
  target: string;
  extra?: any;
};

export type ReplayJob = {
  id: string;
  clusterId: string;
  bundleId?: string;
  target: string;
  status: 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED';
  startedAt?: Date;
  finishedAt?: Date;
  artifacts?: {
    videoUrl?: string;
    steps?: string[];
    envSnapshot?: any;
  };
};

export type Cluster = {
  id: string;
  appId: string;
  signature: string;
  title?: string;
  severity: number;
  firstSeen: Date;
  lastSeen: Date;
  ownerUserId?: string;
  status: 'OPEN' | 'REGRESSED' | 'RESOLVED' | 'SUPPRESSED';
  ticketUrl?: string;
};

export type App = {
  id: string;
  slug: string;
  name: string;
  platform: 'ANDROID' | 'IOS';
};

export type User = {
  id: string;
  email: string;
  name?: string;
  role: 'ADMIN' | 'MAINTAINER' | 'VIEWER' | 'PRIVACY';
  createdAt: Date;
  updatedAt: Date;
};
