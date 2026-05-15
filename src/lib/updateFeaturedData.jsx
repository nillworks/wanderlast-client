'use server';

const updateFeaturedData = async (id, fromData) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/featured/${id}`,
    {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(fromData),
    },
  );

  const res = await req.json();
  return res;
};

export default updateFeaturedData;
