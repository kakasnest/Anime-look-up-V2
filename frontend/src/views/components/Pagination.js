import {
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import useAnime from "../../hooks/useAnime";

const Pagination = ({ pageCounter, setPageCounter }) => {
  const { load } = useAnime();

  const leftMove = () => {
    setPageCounter(Math.max(1, pageCounter - 1));
  };

  const rightMove = () => {
    setPageCounter(Math.min(357, pageCounter + 1));
  };

  const firstPage = () => {
    setPageCounter(1);
  };

  const lastPage = () => {
    setPageCounter(357);
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
