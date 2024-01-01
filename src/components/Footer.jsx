import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-1 flex flex-col gap-1">
      <p className="text-center text-sm">
        Developed by <span className="font-bold">Nacho Spreafico</span>
      </p>
      <div className="w-full flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/ignacio-spreafico"
          target="_blank"
          className="lg:hover:text-blue-600 duration-200 cursor-pointer flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://www.github.com/nachospreafico"
          target="_blank"
          className="lg:hover:text-gray-600 duration-200 cursor-pointer flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.nachospreafico.com"
          target="_blank"
          className="lg:hover:text-red-500 duration-200 cursor-pointer flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faCode} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
