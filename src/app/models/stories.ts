export interface IStory {
  id: number;
  deleted?: boolean;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by?: string;
  time: string;
  text?: string;
  dead?: boolean;
  parent?: any;
  poll?: any;
  kids?: any;
  url?: string;
  score?: any;
  title?: string;
  parts?: any;
  descendants?: any;
}
