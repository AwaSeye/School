import {Etablissement} from './etablissement';
import {RendezVous} from './rendezVous';
import {Validation} from './validation';
import {Utilisateur} from './utilisateur';

export class Etudiant extends Utilisateur{
  niveauEtude: string;
  etablissements: Etablissement[];
  rendezVousList: RendezVous[];
  validation: Validation;
}
