const getFeaturedData = async () => {
  const res = await fetch('http://localhost:8000/featured');
  return res.json();
};

export default getFeaturedData;
