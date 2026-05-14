const getMyBookingData = async () => {
  const res = await fetch('http://localhost:8000/booking');
  return res.json();
};

export default getMyBookingData;
