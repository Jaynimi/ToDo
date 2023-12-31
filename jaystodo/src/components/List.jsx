import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit, FaTrash } from "react-icons/fa";

const List = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" type="button">
                <FaRegEdit />
              </button>
              <button className="delete-btn" type="button">
                <RiDeleteBin6Line />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
