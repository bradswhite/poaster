import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UserPostCell from 'src/components/UserPostCell/UserPostCell'
import ProfileCell from 'src/components/ProfileCell/ProfileCell'

const ProfilePostPage = ({ username }: { username: string }) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ProfileCell username={username} />

      <UserPostCell username={username} />
    </>
  )
}

export default ProfilePostPage
