import { IoCartOutline } from "react-icons/io5";

const Cart = ({ quantitiy }) => {
  return (
    <>
      <div className="text-primary text-3xl relative">
        <IoCartOutline />

        <div className="">
          <div
            className="absolute top-[-0.5rem] right-[-0.5rem] px-1 flex  items-center justify-center rounded-xl bg-primary text-sm
        text-white"
          >
            <span className="">{quantitiy}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
