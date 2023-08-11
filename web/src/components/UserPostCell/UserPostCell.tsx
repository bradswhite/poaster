import { Link } from '@redwoodjs/router'
import type { FindPosts } from 'types/graphql'
import type {
  CellSuccessProps,
  CellFailureProps,
  CellLoadingProps,
} from '@redwoodjs/web'

export const QUERY = gql`
  query FindMyPosts($username: String!) {
    userByUsername: userByUsername(username: $username) {
      name
      username
      avatar
      posts {
        id
        body
      }
    }
  }
`

export const Loading: React.FC<CellLoadingProps> = () => <div>Loading...</div>

export const Empty = () => <div>No posts found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error loading posts: {error.message}</div>
)

export const Success = ({ userByUsername: user }: CellSuccessProps<FindPosts>) => {
  return (
    <div>
      <ul>
        {user.posts.map((post) => (
          <li key={post.id}>
            {' '}
            <Link to={`/post/${post.id}`}>
              <div className="shadow rounded-lg p-2 my-2 cursor-pointer">
                <p>{post.body}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
