import { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@redwoodjs/web';
import { MutationcreatePostLikeArgs } from 'types/graphql'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth';

const CREATE_POST_LIKE = gql`
  mutation CreatePostLikeMutation($input: CreatePostLikeInput!) {
    createPostLike(input: $input) {
      id
    }
  }
`

const DELETE_POST_LIKE = gql`
  mutation DeletePostLikeMutation($id: String!) {
    deletePostLike(id: $id) {
      id
    }
  }
`

const Likes = ({ postId, likes }) => {
  
  const { userMetadata } = useAuth();

  const [ likeCount, setLikeCount ] = useState<number>(likes.length);

  const [ likeStatus, setLikeStatus ] = useState<boolean | string>(false);

  // Get like status for current user:
  useEffect(() => {
    likes.map(({ id, userId }) => {
      if (userId === userMetadata)
        setLikeStatus(id);
    });
  }, [ likes ]);

  const [createLike] = useMutation<any, MutationcreatePostLikeArgs>(CREATE_POST_LIKE)

  const likePost = async () => {
    try {
      const { data: { createPostLike } } = await createLike({
        variables: {
          input: {
            postId,
            userId: userMetadata
          },
        },
      })

      setLikeStatus(createPostLike.id);
      setLikeCount(likeCount + 1);
      toast('Post Liked Successfully!')
    } catch (e) {
      toast.error(e.message)
    }
  }
  
  const [deleteLike] = useMutation(DELETE_POST_LIKE, {
    onCompleted: () => {
      toast.success('Unliked Post')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const unlikePost = () => {
    try {
      deleteLike({
        variables: {
          id: likeStatus
        }
      });
      setLikeStatus(false);
      setLikeCount(likeCount - 1);
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div>
      <span>Likes: {likeCount}</span>

      {likeStatus ? (
        <button className='bg-blue-500 py-2 px-4 m-2 rounded-xl' onClick={unlikePost}>Unlike</button>
      ) : (
        <button className='bg-blue-500 py-2 px-4 m-2 rounded-xl' onClick={likePost}>Like</button>
      )}
    </div>
  )
}

export default Likes
