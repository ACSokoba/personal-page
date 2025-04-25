// ArticleCard.jsx
import React, { useEffect, useState } from "react";
import { Article } from "../../data";

type ArticleCardProps = {
  article: Article;
};
const ArticleCard = ({ article }: ArticleCardProps) => {
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.microlink.io/?url=${encodeURIComponent(article.url)}`)
      .then((res) => res.json())
      .then((data) => setMetadata(data.data))
      .catch((err) => console.error(err));
  }, [article]);

  if (!metadata) return <p>No link preview</p>;

  return (
    <>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="flex rounded-xl mt-6 p-5 gap-3 bg-white mx-5 md:mx-0 mb-5">
          <div>
            {metadata.image?.url && (
              <img
                src={metadata?.image.url}
                alt={metadata?.title}
                className="h-[150px] w-[250px] rounded-xl object-fill"
              />
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-2">{metadata?.title}</h3>
            <p className="text-sm text-gray-600">{metadata?.description}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ArticleCard;
