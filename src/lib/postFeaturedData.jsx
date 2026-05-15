'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from './auth';
import { headers } from 'next/headers';

const postFeaturedData = async fromData => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fromData),
  });

  const res = await req.json();
  if (res.acknowledged == true) {
    revalidatePath('/destinations');
    redirect('/destinations');
  }

  return res;
};

export default postFeaturedData;
