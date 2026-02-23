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
    return <p>Subscribed!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button>Subscribe</button>
      {error && <p>{error}</p>}
    </form>
  );
}
