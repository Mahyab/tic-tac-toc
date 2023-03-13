import "./style.scss";
import { motion } from "framer-motion";

const Square = ({ ind, updateSquares, clsName }) => {
    const xoHandler = () => {
        updateSquares(ind);
    };
    return (
        <div
            className="square"
            onClick={xoHandler}
        >
            {clsName && (
                <span
                    className={clsName}
                ></span>
            )}
        </div>
    );
};

export default Square;
