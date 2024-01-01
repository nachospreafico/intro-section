import Databiz from "./../assets/images/client-databiz.svg";
import Audiophile from "./../assets/images/client-audiophile.svg";
import Maker from "./../assets/images/client-maker.svg";
import Meet from "./../assets/images/client-meet.svg";

const Clients = () => {
  let data = [Databiz, Audiophile, Maker, Meet];

  return (
    <div className="flex flex-row mb-16 md:mb-0 items-center w-full justify-between md:justify-start gap-6">
      {data.map((elem, index) => {
        return (
          <img
            src={elem}
            className="object-contain w-16 lg:cursor-pointer"
            key={index}
            alt="client logo"
          ></img>
        );
      })}
    </div>
  );
};

export default Clients;
