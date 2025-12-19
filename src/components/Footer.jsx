import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">
              Don Bosco School
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with quality education and holistic
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about/founder"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/about/principal"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Principal's Message
                </Link>
              </li>
              <li>
                <Link
                  to="/about/philosophy"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Education Philosophy
                </Link>
              </li>
              <li>
                <Link
                  to="/about/management"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Management & Administration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">
              Other Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/alumni"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Alumni Association
                </Link>
              </li>
              <li>
                <Link
                  to="/disclosures"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  Don Bosco School, Salemveng, D.Phailien, Churachandpur,
                  Manipur 795128
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 8837368736</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>http://sspprs001@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Don Bosco School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
