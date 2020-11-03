import {RendezVous} from './rendezVous';
import {Etablissement} from './etablissement';
import {Utilisateur} from './utilisateur';

export class Representant extends Utilisateur{
  fonction: string;
  rendezVousList: RendezVous[];
  etablissement: Etablissement ;
}
