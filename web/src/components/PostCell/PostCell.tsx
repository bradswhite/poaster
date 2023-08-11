import type { FindPosts } from 'types/graphql'
import { format } from 'date-fns'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import type {
  CellSuccessProps,
  CellFailureProps,
  CellLoadingProps,
} from '@redwoodjs/web'
import type { DeletePostMutationVariables, FindPostById } from 'types/graphql'

import Likes from 'src/components/Likes/Likes'

export const QUERY = gql`
  query FindPostDetail($id: String!) {
    post: post(id: $id) {
      id
      body
      author {
        id
        name
      }
      parentPostId
      comments {
        id
        body
        author {
          id
          name
        }
        likes {
          id
          userId
        }
        createdAt
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

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: String!) {
    deletePost(id: $id) {
      id
    }
  }
`

export const Loading: React.FC<CellLoadingProps> = () => <div>Loading...</div>

export const Empty = () => <div>No posts found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error loading posts: {error.message}</div>
)

export const Success = ({ post }: CellSuccessProps<FindPosts>) => {
  const { currentUser } = useAuth()
  
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
      //navigate(post.parentPostId ? routes.post(post.parentPostId) : routes.posts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePostMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <div>
      {post.parentPostId && <Link to={`/post/${post.parentPostId}`}>Back</Link>}

      <div>
        {post.author.name}
        <p className="mt-2">{post.body}</p>

        <Likes postId={post.id} likes={post.likes} />

        {currentUser && currentUser.id === post.author.id && (
          <div className="m-auto">
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => onDeleteClick(post.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="mt-4">
        <hr />
        <h3 className="my-4 text-lg font-semibold text-gray-900">Comments</h3>
        {post.comments.map((comment) => (
          <div
            key={comment.id}
            className="flex justify-between sm:px-2 sm:py-2 border rounded-lg"
          >
            <Link to={`/post/${comment.id}`}>
              <div className="my-4 flex-1  leading-relaxed">
                <strong>{comment.author.name}</strong>{' '}
                <span className="text-xs text-gray-400">
                  {format(new Date(comment.createdAt), 'MMM d, yyyy h:mm a')}
                </span>
                <p>{comment.body}</p>
              </div>
            </Link>
            
            <Likes postId={comment.id} likeCount={comment.likes.length} />
            
            {currentUser && currentUser.id === comment.author.id && (
              <div className="m-auto">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => onDeleteClick(comment.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
