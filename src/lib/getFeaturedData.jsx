const getFeaturedData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  return res.json();
};

export default getFeaturedData;
