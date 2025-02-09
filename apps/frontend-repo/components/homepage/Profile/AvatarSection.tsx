import Image from 'next/image';

import useProfileState from '@/hooks/useProfileState';

const AvatarSection = () => {
  const { userData } = useProfileState();

  return (
    <Image
      src={userData.picture || ''}
      width={96}
      height={96}
      alt={userData?.name || 'no-image'}
      style={{ marginBottom: 32, objectFit: 'cover', borderRadius: 96 }}
    />
  );
};

export default AvatarSection;
