import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target, label, icon, classes }) => {
  const combinedClasses = `h-11 bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-400 ${classes}`;
  if (href) {
    return (
      <a href={href} target={target} className={`btn ${combinedClasses}`}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn ${combinedClasses}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

// Button Outline starts here

const ButtonOutline = ({ href, target, label, icon, classes }) => {
  const combinedClasses = `h-11 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800 ${classes}`;
  if (href) {
    return (
      <a href={href} target={target} className={`btn ${combinedClasses}`}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn ${combinedClasses}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};
export { ButtonPrimary, ButtonOutline };
