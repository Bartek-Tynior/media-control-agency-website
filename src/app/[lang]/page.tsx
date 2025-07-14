import { getDictionary } from "./dictionaries";
import ClientHome from "./ClientHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function Page({
  params,
}: {
  params: { lang: "en" | "nl" };
}) {
  const dict = await getDictionary(params.lang);

  return <ClientHome dict={dict} />;
}
