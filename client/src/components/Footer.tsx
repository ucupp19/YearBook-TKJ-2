const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold mb-3 ">XII - TKJ 2</h3>
          <p className="mb-6 text-white-100">Computer and Network Engineering Class</p>
          <p className="text-white-200">&copy; {new Date().getFullYear()} Made By Jeruk Clan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
