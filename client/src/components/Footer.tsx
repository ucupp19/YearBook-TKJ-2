const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold mb-3 text-gray-100">XII - TKJ 2</h3>
          <p className="mb-6 text-gray-400">Computer and Network Engineering Class</p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
