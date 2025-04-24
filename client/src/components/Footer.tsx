const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-decorative font-bold mb-3 text-gray-100 animate-slideUp">XII - TKJ 2</h3>
          <p className="mb-6 text-gray-400 animate-slideUp delay-200">Computer and Network Engineering Class</p>
          <p className="text-gray-500 animate-slideUp delay-300">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
