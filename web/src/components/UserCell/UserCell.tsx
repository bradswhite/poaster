import type { FindUserQuery, FindUserQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserQuery($id: String!) {
    user: user(id: $id) {
      username
      name
      avatar
      bio
      banner
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user: { username, name, avatar, bio }
}: CellSuccessProps<FindUserQuery, FindUserQueryVariables>) => {
  return <div className=''>
    <span className='text-md text-white p-2'>{name}</span>
    <span className='text-sm text-white p-2'>@{username}</span>
    <img
      className='w-8 h-8 rounded-full'
      src={avatar}
      alt='User profile'
    />
  </div>
}
