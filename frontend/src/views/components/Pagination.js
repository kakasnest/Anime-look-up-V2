import {
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import useAnime from "../../hooks/useAnime";

const Pagination = ({ pageCounter }) => {
  const { load } = useAnime();

  const leftMove = () => {
    const nextPage = Math.max(1, pageCounter - 1);
    load(nextPage);
  };

  const rightMove = () => {
    const nextPage = Math.min(357, pageCounter + 1);
    load(nextPage);
  };

  const firstPage = () => {
    load(1);
  };

  const lastPage = () => {
    load(357);
  };

  return (
    <div className="Pagination">
      <button>
        <FaAngleDoubleLeft onClick={firstPage} />
      </button>
      <button onClick={leftMove}>
        <FaAngleLeft />
      </button>
      <button>
        <FaAngleRight onClick={rightMove} />
      </button>
      <button>
        <FaAngleDoubleRight onClick={lastPage} />
      </button>
    </div>
  );
};

export default Pagination;
