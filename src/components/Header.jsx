

const Header = () => {
  return (
    <div className=" mx-auto">
      <div className="w-full max-h-[300px]   ">
        <img
          className="w-full h-full object-cover  max-h-[300px]"
          src={"/images/food.jpg"}
          alt="/ "
        />
      </div>
      <div
        className=" relative -top-32"
        style={{ height: "150px", overflow: "hidden" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-1.41,123.86 C210.78,119.91 352.42,83.39 509.87,9.39 L500.00,150.00 L0.00,150.00 Z"
            style={{
              stroke: "none",
              fill: "rgb(31 41 55 / var(--tw-bg-opacity))",
            }}
          ></path>
        </svg>
      </div>
      <div className="mx-auto  max-w-[600px] relative -top-60 text-white flex flex-col items-center bg-gray-800 px-8 py-4 drop-shadow-2xl rounded-md  gap-4">
        <h1 className="text-2xl font-bold text-center  ">
          Delicious Food, Delivered To You
        </h1>
        <p className="text-center text-sm md:text-base">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p className="text-center text-sm md:text-base">
          All our meals are cookied with high-quality ingredients, just-in-time
          and of course by experienced chefs!{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
