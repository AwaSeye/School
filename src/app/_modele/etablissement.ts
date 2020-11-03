import {Etudiant} from './etudiant';
import {Filiere} from './filiere';
import {RendezVous} from './rendezVous';
import {Representant} from './representant';
import {Validation} from './validation';

export class Etablissement {
  id: number;
  nomEtablissement: string;
  adresse: string;
  description: string;
  contact: string;
  etudiants: Etudiant[];
  filieres: Filiere[];
  rendezVousList: RendezVous[];
  representant: Representant[];
  validations: Validation[];
}
