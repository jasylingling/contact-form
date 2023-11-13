function SuccessBanner() {
  return (
    <div className="success-banner xl:w-1/3 md:w-1/2 sm:w-3/4 w-5/6 rounded mx-auto mb-8 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-lg shadow-pink-300/50">
      <div className="flex gap-4 items-center py-2">
        <div>
          <svg
            className="feather feather-check-circle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(20 184 166)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div>
          <p>
            Thanks for your message! I&apos;ll get back to you as soon
            as possible! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessBanner;
