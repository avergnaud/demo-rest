import Versement from "avergnaud-versement";

class MockDb {
  private static sequenceId: number = 0;

  versements: Map<number, Versement>;

  constructor() {
    this.versements = new Map<number, Versement>();
  }

  public tmpraz() {
    this.versements = new Map<number, Versement>();
  }

  public create = (versement: Versement): Versement => {
    versement.id = MockDb.sequenceId++;
    versement.etat = "brouillon";
    this.versements.set(versement.id, versement);
    return versement;
  };

  public read = (id: number): Versement => {
    return this.versements.get(id);
  };

  public readAll = (): Versement[] => {
    let values: Versement[] = Array.from( this.versements.values() );
    return values;
  }

  public update = (versement: Versement): Versement => {
    if (this.versements.has(versement.id)) {
        let updated = this.versements.get(versement.id);
        updated.etat = versement.etat;
        updated.client = versement.client;
        updated.montant = versement.montant;
        updated.commentaire = versement.commentaire;
    }
    return versement;
  };

  public delete = (versement: Versement): Versement => {
    if (this.versements.has(versement.id)) {
        this.versements.delete(versement.id);
    }
    return versement;
  };
}

let mockDb = new MockDb();
export = mockDb;
