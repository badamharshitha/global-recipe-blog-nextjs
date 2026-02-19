import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div data-testid="language-switcher" className="space-x-4 mt-6">
      {["en", "es", "fr"].map((lng) => (
        <Link
          key={lng}
          href={{ pathname, query }}
          as={asPath}
          locale={lng}
          className={`px-3 py-1 border rounded ${
            locale === lng ? "bg-black text-white" : ""
          }`}
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
