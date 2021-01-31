import Head from "next/head";

interface MetaProps {
  description?: string;
  keywords?: string;
  title?: string;
}

const Meta = ({ description, keywords, title }: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Hvilken båt er det i dag?",
  keywords:
    "båt, eidfjord, cruiseship, cruiseskip, cruise, eidfjord havn, eidfjord port",
  description:
    "Finn ut hvilket cruiseskip som ligger til kai i Eidfjord i dag.",
};

export default Meta;
