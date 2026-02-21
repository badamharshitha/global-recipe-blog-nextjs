import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    setError("");
    setSuccess(true);
  };

  if (success) {
    return <div data-testid="newsletter-success">Subscribed!</div>;
  }

  return (
    <form data-testid="newsletter-form" onSubmit={handleSubmit}>
      <input
        data-testid="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button data-testid="newsletter-submit">Subscribe</button>

      {error && (
        <div data-testid="newsletter-error">{error}</div>
      )}
    </form>
  );
}
