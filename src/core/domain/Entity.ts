/* eslint-disable @typescript-eslint/no-explicit-any */
const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity
}
export abstract class Entity<T> {
  protected readonly id: number
  public readonly props: T

  constructor(props: T, id?: number) {
    this.id = id ? id : -1
    this.props = props
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!isEntity(object)) {
      return false
    }
    return this.id == object.id
  }
}
