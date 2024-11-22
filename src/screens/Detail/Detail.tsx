import { Poem } from "../../types/poems";
import "./detail.css";

interface DetailProps {
  poem: Poem;
  onBack: () => void;
}

const Detail: React.FC<DetailProps> = ({ poem, onBack }) => {
  const { author, linecount, lines, title, category } = poem;

  return (
    <div className="detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back
      </button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author}</h2>
      <p className="category">
        <strong>Category:</strong> {category || "Uncategorized"}
      </p>
      <div className="content">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <p className="lines-count">
        <strong>Total Lines:</strong> {linecount}
      </p>
    </div>
  );
};

export default Detail;
