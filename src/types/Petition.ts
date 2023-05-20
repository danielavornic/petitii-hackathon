import { User } from "./User";

export interface Petition {
  id: number;
  initiator: string;
  name: string;
  date: string;
  nrSign: number;
  nrsignneeded: number;
  content: string;
  toWho: string;
  statut: string;
  semnat?: string;
  feedback: string;
  deadLine: string;
  category: string;
}

export interface PetitionFormData {
  name: string;
  content: string;
  category: string;
  region?: string;
  toWho: string;
  checkedData: boolean;
  consentedData: boolean;
}
