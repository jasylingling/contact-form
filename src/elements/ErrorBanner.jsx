function ErrorBanner() {
  return (
    <div className="error-banner xl:w-1/3 md:w-1/2 sm:w-3/4 w-5/6 rounded mx-auto mb-8 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-lg shadow-pink-300/50">
      <div className="flex gap-4 items-center py-2">
        <div>
          <svg
            className="feather feather-alert-triangle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(127 29 29)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <p>
          Ohno, something went wrong! 😥 Please fill in the required
          fields and/or try to submit again.
        </p>
      </div>
    </div>
  );
}

export default ErrorBanner;
