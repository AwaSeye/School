import {Etudiant} from './etudiant';
import {Etablissement} from './etablissement';

export class Validation {
  id: number;
  date_validation: string;
  etudiant: Etudiant;
  etablissement: Etablissement;
}
