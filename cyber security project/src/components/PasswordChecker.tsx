import { useMemo, useState } from "react";

function scorePassword(value: string) {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[a-z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  return score;
}

function PasswordChecker() {
  const [password, setPassword] = useState("");

  const strength = useMemo(() => {
    const score = scorePassword(password);
    if (score <= 2) return "Weak";
    if (score <= 4) return "Medium";
    return "Strong";
  }, [password]);

  return (
    <section className="section">
      <div className="container checker-wrap">
        <h2>Password Strength Checker</h2>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Type a password"
          className="password-input"
        />
        <p className="strength-text">Strength: <strong>{strength}</strong></p>
      </div>
    </section>
  );
}

export default PasswordChecker;
