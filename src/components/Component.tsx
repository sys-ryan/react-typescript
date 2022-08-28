interface ImageItem {
  id: number;
  type: "ImageItem";
  title: string;
  imageUrl: string;
}

interface QuoteItem {
  id: number;
  type: "QuoteItem";
  quote: string;
}

export type Item = ImageItem | QuoteItem;

interface ComponentProps {
  items: Item[];
}

export default function Component({ items }: ComponentProps) {
  return (
    <ul>
      {items.map((item) => {
        if (item.type === "ImageItem") {
          return (
            <li key={item.id}>
              {item.title && <p>{item.title}</p>}
              {item.imageUrl && (
                <img style={{ maxWidth: "15rem" }} src={item.imageUrl} alt={item.title} />
              )}
            </li>
          );
        }

        return <li> {item.quote && <p style={{ fontStyle: "italic" }}>{item.quote}</p>}</li>;
      })}
    </ul>
  );
}
