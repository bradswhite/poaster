import { ReactNode, useState, useEffect } from 'react';
import type { FindUserQuery, FindUserQueryVariables } from 'types/graphql';
import { useQuery } from '@redwoodjs/web';
import { clsx } from 'clsx';
import { Link, routes } from '@redwoodjs/router';
import { useAuth } from 'src/auth'
import Button from 'src/components/UIComponents/shared/Button';
import Login from 'src/components/Login/Login';
import ThemeSwitcher from 'src/components/UIComponents/shared/ThemeSwitcher';
import Tooltip from 'src/components/UIComponents/Tooltip';
import Avatar from 'src/components/UIComponents/Avatar';

const USER_QUERY = gql`
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

type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const { isAuthenticated, logOut, userMetadata } = useAuth();
  const [ seed, setSeed ] = useState(Math.random());

  const [ avatar, setAvatar ] = useState<string>('');
  const [ name, setName ] = useState<string>('');
  const [ username, setUsername ] = useState<string>('');

  useQuery(
    USER_QUERY, {
      variables: { id: userMetadata },
      onCompleted: ({ user: { avatar, name, username } }) => {
        setAvatar(avatar)
        setName(name)
        setUsername(username)
      }
    }
  )

  return <>
    <header className='flex flex-wrap items-center justify-between mx-auto py-6 px-20'>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
        <Link to={routes.home()}>Poaster</Link>
      </h1>

      <div className='flex flex-wrap items-center justify-between gap-20'>
        <div className='text-gray-900 dark:text-gray-100 text-xs'>
          {isAuthenticated ? (
            <>
              <Tooltip content={
                <div className='block'>
                  <div className='grid'>
                    <span className='text-md p-2'>{name}</span>
                    <span className='text-sm p-2'>@{username}</span>
                  </div>
                  <Button onClick={logOut}>
                    Sign out
                  </Button>
                </div>
              }>
                <span className='hover:cursor-pointer'>
                  <Avatar src={avatar} />
                </span>
              </Tooltip>
            </>
          ) : (
            <Login setSeed={setSeed}>
              <Button>Login</Button>
            </Login>
          )}
        </div>

        <ThemeSwitcher />
      </div>
    </header>

    <main
      className={clsx(
        'w-screen p-20 overflow-x-hidden',
        'bg-gray-50 dark:bg-gray-800',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        'border-y border-gray-200 dark:border-gray-700'
      )}
    >
      {children}
    </main>
  </>;
}

export default NavbarLayout
/*
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
  </div>*/
