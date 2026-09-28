import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2026 <strong>Nelly</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              {...(link.name === "Phone"
                ? { "aria-label": "Add Nelly Igihozo to contacts" }
                : { target: "_blank", rel: "noreferrer" })}
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
