import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';

function FranchisingRequest() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto flex flex-col items-start px-5 lg:px-0">
        <h1
          className="mt-5 text-3xl font-bold text-orange-500"
          style={{ fontFamily: 'Piedra, serif' }}
        >
          DEAR PROSPECTIVE FRANCHISEE
        </h1>

        <div className="text-white mb-3">
          <h4 className="font-bold text-xl">Thank you for your interest in Buffalo Burger!</h4>
          <p className="text-lg">
            There is an immense opportunity to grow with one of Egypt&apos;s strongest and fastest-growing brands. With over
            15 years of experience in the market and by sticking to our philosophy of offering The Real Thing, Buffalo
            Burger has expanded from an online store in 2008 to over 45 branches across Egypt. As part of our growth
            strategy and market expansion plan, you, the franchisee, are our key ingredient. We wish you the best as you
            pursue your journey to become a Buffalo Burger franchisee.
          </p>
        </div>

        <div className="flex flex-col items-start mb-2">
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faDiamond} className="text-2xl text-custom-orange" />
            <h5 className="text-white ml-2">To request a franchise:</h5>
          </div>
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faDiamond} className="text-2xl text-custom-orange" />
            <h6 className="text-white ml-2">
              1- Download the application by clicking the button below
            </h6>
          </div>
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faDiamond} className="text-2xl text-custom-orange" />
            <h6 className="text-white ml-2">2- Fill in the details of either the Arabic or English form</h6>
          </div>
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faDiamond} className="text-2xl text-custom-orange" />
            <h6 className="text-white ml-2">3- Send it on franchise@buffaloburger.com</h6>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mb-5">
          <button
            type="button"
            className="text-white bg-custom-orange rounded px-4 py-2 mb-3 lg:mb-0 lg:mr-3"
          >
            Download Arabic
          </button>
          <button
            type="button"
            className="text-white bg-custom-orange rounded px-4 py-2"
          >
            Download English
          </button>
        </div>

        <img
          className="img-fluid mb-5"
          style={{ width: '270px', height: '187px' }}
          src="https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2Fabout-us%2Ffranchising_request.JPG&w=384&q=75"
          alt="Franchising Request"
        />
      </div>
    </div>
  );
}

export default FranchisingRequest;
