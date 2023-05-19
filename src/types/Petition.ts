import { User } from "./User";

export interface Petition {
  id: number;
  initiator: User;
  name: string;
  date: string;
  nrSign: number;
  nrSignNeeded: number;
  content: string;
  toWho: string;
  statut: string;
  semnat: User[];
  feedback: string;
  deadLine: string;
  Category: string[];
}
