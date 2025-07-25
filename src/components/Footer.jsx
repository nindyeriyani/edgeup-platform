export default function Footer() {
  return (
    <footer className="bg-[#13171B] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Logo */}
          <img
            src="/images/logo-edgeup.png"
            alt="Logo EdgeUp"
            className="w-[152px] h-[36px] mb-13"
          />

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#">
              <img
                src="/images/icon-linkedin.png"
                alt="LinkedIn"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/images/icon-instagram.png"
                alt="Instagram"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/images/icon-x.png"
                alt="X"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/images/icon-mail.png"
                alt="Mail"
                className="w-[24px] h-[24px]"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/80">
            © 2025 EdgeUp. All rights reserved.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Tentang EdgeUp</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Fitur</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">Certificates & Training</a>
              </li>
              <li>
                <a href="#">Job Trends & Tracker</a>
              </li>
              <li>
                <a href="#">Career Stories</a>
              </li>
              <li>
                <a href="#">Career Roadmap</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Bantuan</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
            </ul>
          </div>
          <div className="-ml-10">
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
