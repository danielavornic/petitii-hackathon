import { User } from "./User";

export interface Petition {
  id: number;
  initiator: User;
  name: string;
  date: Date;
  nrSign: number;
  nrSignNeeded: number;
  content: string;
  toWho: string;
  statut: string;
  semnat: User[];
  feedback: string;
  deadLine: Date;
  Category: string[];
}
