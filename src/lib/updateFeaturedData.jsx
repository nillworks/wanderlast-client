'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const updateFeaturedData = async (id, fromData) => {
  const req = await fetch(`http://localhost:8000/featured/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(fromData),
  });

  const res = await req.json();
  return res;
};

export default updateFeaturedData;
