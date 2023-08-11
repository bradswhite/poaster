import type { FindUserByUsernameQuery, FindUserByUsernameQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useState, useEffect } from 'react'
import { useAuth } from 'src/auth';
import { useQuery, useMutation } from '@redwoodjs/web';
import { MutationcreatePostLikeArgs } from 'types/graphql'
import { toast } from '@redwoodjs/web/toast'


export const QUERY = gql`
  query FindUserByUsernameQuery($username: String!) {
    user: userByUsername(username: $username) {
      id
      username
      name
      avatar
      bio
      banner
      followers {
        id
        followingId 
      }
      following {
        id
      }
    }
  }
`

const CREATE_FOLLOWS = gql`
  mutation CreateFollowsMutation($input: CreateFollowsInput!) {
    createFollows(input: $input) {
      id
    }
  }
`

const DELETE_FOLLOWS = gql`
  mutation DeleteFollowsMutation($id: String!) {
    deleteFollows(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserByUsernameQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user: { id, username, name, avatar, bio, banner, followers, following }
}: CellSuccessProps<FindUserByUsernameQuery, FindUserByUsernameQueryVariables>) => {
  const { userMetadata } = useAuth();

  const [ userFollowers, setFollowers ] = useState<number>(followers.length);
  const userFollowing = following.length;

  const [ isFollowing, setIsFollowing ] = useState<boolean | string>(false);

  useEffect(() => {
    followers.map(({ id, followingId }) => {
      if (followingId === userMetadata)
        setIsFollowing(id);
    });
  }, [ followers ]);

  const [createFollow] = useMutation<any, MutationcreateFollowsLikeArgs>(CREATE_FOLLOWS)

  const followUser = async () => {
    try {
      const { data: { createFollows } } = await createFollow({
        variables: {
          input: {
            followingId: userMetadata,
            followerId: id
          },
        },
      })

      setIsFollowing(createFollows.id);
      setFollowers(userFollowers + 1);
      toast('Followed User Successfully!')
    } catch (e) {
      toast.error(e.message)
    }
  }
  
  const [deleteFollow] = useMutation(DELETE_FOLLOWS, {
    onCompleted: () => {
      toast.success('Unfollowed User')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const unfollowUser = () => {
    try {
      deleteFollow({
        variables: {
          id: isFollowing
        }
      });
      setIsFollowing(false);
      setFollowers(userFollowers - 1);
    } catch (e) {
      toast.error(e.message)
    }
  }

  return <div className=''>
    <img
      className='w-8 h-8 rounded-full'
      src={avatar}
      alt='User profile'
    />
    <span className='text-md p-2'>{name}</span>
    <span className='text-sm p-2'>@{username}</span>
    <span>{userFollowers} Followers</span>
    <span>{userFollowing} Following</span>
    {id !== userMetadata && (
      isFollowing ? (
        <button className='bg-red-500 py-2 px-4 m-2 rounded-xl' onClick={unfollowUser}>Unfollow</button>
      ) : (
        <button className='bg-green-500 py-2 px-4 m-2 rounded-xl' onClick={followUser}>Follow</button>
      )
    )}
  </div>
}
