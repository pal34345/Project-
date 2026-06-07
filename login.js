import { TextField, PrimaryButton } from '@fluentui/react';

export default function Login() {
  return (
    <div style={{ padding: 50 }}>
      <h2>Adaptive Workplace OS</h2>
      <TextField label="Employee ID" />
      <TextField label="Password" type="password" />
      <PrimaryButton text="Login" onClick={() => window.location.href='/dashboard'} />
    </div>
  );
}