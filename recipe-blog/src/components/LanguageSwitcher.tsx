import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <div style={{ marginBottom: 20 }}>
      <Link href={{ pathname, query }} as={asPath} locale="en">EN</Link>{" "}
      <Link href={{ pathname, query }} as={asPath} locale="es">ES</Link>{" "}
      <Link href={{ pathname, query }} as={asPath} locale="fr">FR</Link>
    </div>
  );
}
