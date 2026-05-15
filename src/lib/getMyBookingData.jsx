import { headers } from 'next/headers';
import { auth } from './auth';

const getMyBookingData = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return res.json();
};

export default getMyBookingData;
