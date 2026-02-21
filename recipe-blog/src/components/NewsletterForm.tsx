import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
  };

  if (success) {
    return <p data-testid="newsletter-success">Subscribed successfully!</p>;
  }

  return (
    <form onSubmit={handleSubmit} data-testid="newsletter-form">
      <input
        data-testid="newsletter-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button data-testid="newsletter-submit" type="submit">
        Subscribe
      </button>

      {error && <p data-testid="newsletter-error">{error}</p>}
    </form>
  );
}
