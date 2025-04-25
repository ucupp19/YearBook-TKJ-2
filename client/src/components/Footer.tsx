const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold mb-3 text-yellow-100">XII - TKJ 2</h3>
          <p className="mb-6 text-blue-100">Computer and Network Engineering Class</p>
          <p className="text-blue-200">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
