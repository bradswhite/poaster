import { MetaTags, useMutation } from '@redwoodjs/web'
import { MutationcreatePostArgs } from 'types/graphql'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'

import CommentForm from 'src/components/CommentForm/CommentForm'
import PostCell, { QUERY as PostCellQuery } from 'src/components/PostCell/PostCell'

const CREATE_COMMENT = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

interface Props {
  id: number
}

const PostDetailsPage = ({ id }: Props) => {
  const [create] = useMutation<any, MutationcreatePostArgs>(CREATE_COMMENT, {
    refetchQueries: [{ query: PostCellQuery, variables: { id } }],
  })
  const { currentUser } = useAuth()

  const onCommentAdded = async (values: string) => {
    try {
      await create({
        variables: {
          input: {
            parentPostId: id,
            body: values,
            authorId: currentUser.id,
          },
        },
      })

      toast('Comment Added Successfully!')
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div>
      <PostCell id={id} />

      <div className="mt-4">
        <CommentForm onSubmit={onCommentAdded} />
      </div>
    </div>
  )
}

export default PostDetailsPage
