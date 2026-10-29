import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-message">페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="back-link">
        ← 목록으로
      </Link>
    </div>
  );
};

export default NotFoundPage;
