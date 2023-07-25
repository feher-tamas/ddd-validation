import { User, UserProps } from 'src/domain/user/user'
import { UserEmail } from 'src/domain/user/userEmail'

test('invalid user name', () => {
  const emailOrError = UserEmail.create('tamas.feher@gjkjjgg.hu')
  const userProps = {
    firstName: 'tamas',
    lastName: 'feher',
    email: emailOrError.getValue()
  } as UserProps

  const newuserOrError = User.create(userProps)
  expect(newuserOrError.isSuccess).toBe(true)
})
