export default function NotFound({ the }: { the: string }) {
  switch (the) {
    case 'author':
      return <span className="text-red-700">Author not found</span>;
    case 'publishedDate':
      return <span className="text-red-700">Publication date unknown</span>;
    case 'publisher':
      return <span className="text-red-700">Unknown publisher</span>;
    case 'amount':
      return <span className="text-red-700">Unknown price</span>;
    case 'description':
      return (
        <span className="text-red-700">
          Sorry. There is no description for this book at this time.
        </span>
      );
    case 'pageCount':
      return <span className="text-red-700">Unknown</span>;
    case 'categories':
      return <span className="text-red-700">Unknown category</span>;
  }
}
