import { TextField, PrimaryButton } from '@fluentui/react';
import { useState } from 'react';

export default function Assistant() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>AI Assistant Bot</h2>
      <TextField value={prompt} onChange={(e,v)=>setPrompt(v)} placeholder="Type your prompt..." />
      <PrimaryButton text="Submit" onClick={handleSubmit} />
      <p>{response}</p>
    </div>
  );
}