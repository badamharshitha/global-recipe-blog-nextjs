import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (value: string) => {
    return /\S+@\S+\.\S+/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    setSuccess(true);
  };

  if (success) {
    return (
      <div data-testid="newsletter-success">
        Successfully subscribed!
      </div>
    );
  }

  return (
    <form
      data-testid="newsletter-form"
      onSubmit={handleSubmit}
      className="mt-10"
    >
      <input
        data-testid="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Enter email"
      />

      <button
        data-testid="newsletter-submit"
        type="submit"
        className="bg-black text-white px-4 py-2"
      >
        Subscribe
      </button>

      {error && (
        <div
          data-testid="newsletter-error"
          className="text-red-500 mt-2"
        >
          {error}
        </div>
      )}
    </form>
  );
}
