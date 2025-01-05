import React from "react";
import { Mail, Linkedin, Github ,Youtube } from "lucide-react";

const Contact = () => {
  const contacts = [

    {
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:prashamsa35np@gmail.com",
      text: "prashamsa35np@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/prashamsa-aryal-07840224b/",
      text: "linkedin.com/Prashamsa",
    },
    {
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/frecklehead",
      text: "github.com/frecklehead",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      link: "https://www.youtube.com/@afreck",
      text: "youtube.com/Freckle",
    },
    
  ];

  return (
    <footer id="contact" className="bg-emerald-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-emerald-800 mb-2">Contact</h2>
        <p className="text-emerald-600 mb-8">Feel free to reach out!</p>
        
        <ul className="space-y-4">
          {contacts.map((contact, index) => (
            <li key={index} className="inline-block mx-4">
              <a
                href={contact.link}
                className="flex items-center gap-3 text-gray-600 hover:text-emerald-700 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-emerald-600 group-hover:text-emerald-700 transition-colors">
                  {contact.icon}
                </span>
                <span>{contact.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Contact;