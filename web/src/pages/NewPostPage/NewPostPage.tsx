import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'

import { MutationcreatePostArgs } from 'types/graphql'
import { navigate, routes } from '@redwoodjs/router'

const CREATE_POST = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

interface FormValues {
  body: string
}

const NewPostPage = () => {
  const [create] = useMutation<any, MutationcreatePostArgs>(CREATE_POST)
  const { userMetadata } = useAuth()

  const onSubmit: SubmitHandler<FormValues> = async ({ body }) => {
    try {
      await create({
        variables: {
          input: { body, authorId: userMetadata },
        },
      })
      toast('Post created!')
      navigate(routes.home())
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <>
      <MetaTags title="Newpost" description="Newpost page" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="py-8 max-w-xl mx-auto">
        <div>
          <h3 className="text-3xl font-semibold">New Post</h3>

          <Form className="py-4" onSubmit={onSubmit}>
            <div className="py-2">
              <Label
                name="body"
                className="block text-sm font-medium text-gray-700"
              >
                Post
              </Label>
              <div className="mt-1">
                <TextAreaField
                  rows={4}
                  name="body"
                  id="body"
                  errorClassName="shadow-sm px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  className="shadow-sm focus:ring-indigo-500 px-2 py-2 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={''}
                  validation={{
                    required: true,
                    min: 150,
                  }}
                />
              </div>
              <FieldError name="body" className="mt-2 text-sm text-red-600" />
            </div>

            <Submit className="w-full my-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              Create Post
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default NewPostPage
