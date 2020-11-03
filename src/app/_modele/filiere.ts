import {Etablissement} from './etablissement';

export class Filiere {
  id: number;
  nomFiliere: string;
  description: string;
  montantMensuel: number;
  cycle: string;
  fraisInscription: number;
  etablissements: Etablissement[];
}
