import { ValueObject } from 'src/core/domain/ValueObject'
import { Guard } from 'src/core/logic/Guard'
import { Result } from 'src/core/logic/Result'

export interface UserEmailProps {
  value: string
}
export class UserEmail extends ValueObject<UserEmailProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: UserEmailProps) {
    super(props)
  }

  public static create(email: string): Result<UserEmail> {
    const guardResult = Guard.againstNullOrUndefined(email, 'email')
    if (!guardResult.succeeded) {
      return Result.fail<UserEmail>(guardResult.message)
    } else {
      return Result.ok<UserEmail>(new UserEmail({ value: email }))
    }
  }
}
