'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const postFeaturedData = async fromData => {
  const req = await fetch('http://localhost:8000/featured', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(fromData),
  });

  const res = await req.json();
  if (res.acknowledged == true) {
    revalidatePath('/destinations');
    redirect('/destinations');
  }
  console.log(res);

  return;
};

export default postFeaturedData;
