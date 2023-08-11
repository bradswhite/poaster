import { Link } from '@redwoodjs/router'
import type { FindPosts } from 'types/graphql'
import type {
  CellSuccessProps,
  CellFailureProps,
  CellLoadingProps,
} from '@redwoodjs/web'

import Likes from 'src/components/Likes/Likes'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      body
      author {
        name
        username
        avatar
      }
      likes {
        id
        userId
      }
      createdAt
      updatedAt
    }
  }
`

export const Loading: React.FC<CellLoadingProps> = () => <div>Loading...</div>

export const Empty = () => <div>No posts found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error loading posts: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<FindPosts>) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {' '}
            <Link to={`/post/${post.id}`}>
              <div className="shadow rounded-lg p-2 my-2 cursor-pointer">
                <h5>{post.author.name}</h5>
                <p>{post.body}</p>
              </div>
            </Link>

            <Likes postId={post.id} likes={post.likes} />
          </li>
        ))}
      </ul>
    </div>
  )
}
