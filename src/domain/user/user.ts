import { Entity } from 'src/core/domain/Entity'
import { Guard } from 'src/core/logic/Guard'
import { Result } from 'src/core/logic/Result'
import { UserEmail } from './userEmail'

export interface UserProps {
  firstName: string
  lastName: string
  email: UserEmail
  username: string
}
export class User extends Entity<UserProps> {
  get email(): UserEmail {
    return this.props.email
  }

  get firstName(): string {
    return this.props.firstName
  }

  get lastName(): string {
    return this.props.lastName
  }

  get username(): string {
    return this.props.username
  }

  private constructor(props: UserProps, id?: number) {
    super(props, id)
  }

  public static create(props: UserProps, id?: 1): Result<User> {
    const guardedProps = [
      { argument: props.firstName, argumentName: 'firstName' },
      { argument: props.lastName, argumentName: 'lastName' },
      { argument: props.username, argumentName: 'userName' },
      { argument: props.email, argumentName: 'email' }
    ]

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps)

    if (!guardResult.succeeded) {
      return Result.fail<User>(guardResult.message)
    } else {
      const user = new User(
        {
          ...props
        },
        id
      )
      return Result.ok<User>(user)
    }
  }
}
