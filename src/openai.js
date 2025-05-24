export async function sendMsgToOpenAI(message) {
  const res = await fetch('http://localhost:5000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.text;
}
