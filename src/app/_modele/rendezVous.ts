import {Etablissement} from './etablissement';
import {Representant} from './representant';
import {Etudiant} from './etudiant';

export class RendezVous {
  id: number;
  date_rv: number;
  etablissement: Etablissement;
  representant: Representant;
  etudiant: Etudiant;
}
