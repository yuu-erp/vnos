import { generatePrefixId } from "../../helpers/ids";
import { EntityId } from "../../typings";

export class UniqueEntityID {
  protected readonly id: EntityId;

  constructor(_id?: EntityId) {
    this.id = _id || generatePrefixId("entity");
  }

  equals(_id?: UniqueEntityID): boolean {
    if (!_id) {
      return false;
    }
    if (!(_id instanceof this.constructor)) {
      return false;
    }
    return _id.toValue() === this.id;
  }

  toString() {
    return String(this.id);
  }

  toValue(): EntityId {
    return this.id;
  }
}
