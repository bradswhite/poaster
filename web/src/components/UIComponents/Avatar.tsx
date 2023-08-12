import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { clsx } from 'clsx';

type AvatarProps = {
  src: string
};

const Avatar = ({ src }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root className='relative inline-flex h-10 w-10'>
      <AvatarPrimitive.Image
        src={src}
        alt='Avatar'
        className='h-full w-full object-cover rounded-full'
      />
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
