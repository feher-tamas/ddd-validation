import { ValueObject } from 'src/core/domain/ValueObject'

interface ErrorProps {
  code: string
  message: string
}
export class Error extends ValueObject<ErrorProps> {
  private constructor(props: ErrorProps) {
    super(props)
  }
  public static create(props: ErrorProps): Error {
    return new Error(props)
  }
}
export class Errors {
  static User = class {
    static invalidUserProperties(propertyName): Error {
      return Error.create({
        code: 'invalid.userproperties',
        message: `Invalid user properties${propertyName}`
      } as ErrorProps)
    }
  }
  static General = class {
    static valueIsRequired(): Error {
      return Error.create({ code: 'value.is.required', message: 'Value is required' } as ErrorProps)
    }
  }
}
