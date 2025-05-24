const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.json({ text: response.data.choices[0].message.content });
  } catch (err) {
    console.error('OpenAI API error:', err.response?.data || err.message);
    res
      .status(500)
      .json({ error: err.response?.data?.error?.message || err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
