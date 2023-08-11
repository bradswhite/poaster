import {
  Form,
  TextAreaField,
  FieldError,
  Submit,
  useForm,
} from '@redwoodjs/forms'

interface Props {
  onSubmit: (values: string) => void
}

const CommentForm = ({ onSubmit }: Props) => {
  const formMethods = useForm()
  const onCommentSubmit = (data) => {
    onSubmit(data.comment)
    formMethods.reset()
  }
  return (
    <Form
      action="#"
      formMethods={formMethods}
      className="relative"
      onSubmit={onCommentSubmit}
    >
      <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <TextAreaField
          name="comment"
          className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
          errorClassName="input error"
          placeholder="Add your comment here..."
          validation={{ required: true }}
        />

        <div className="flex-shrink-0 float-right p-2">
          <Submit className="button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Post
          </Submit>
        </div>
      </div>
      <FieldError name="comment" className="mt-2 text-sm text-red-600" />
    </Form>
  )
}

export default CommentForm
