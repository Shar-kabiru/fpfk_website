const Membership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-yellow-500 to-blue-500 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          FPFK Kawangare Church Membership
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Become a part of our growing family. Fill out the form below to join us!
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Names <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="+254712345678"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marital Status
            </label>
            <select
              name="maritalStatus"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="na">N/A</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Born Again <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bornAgain"
                  value="yes"
                  required
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bornAgain"
                  value="no"
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Baptized <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="baptized"
                  value="yes"
                  required
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="baptized"
                  value="no"
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
              Occupation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="If not applicable, put N/A"
            />
          </div>

          <div>
            <label htmlFor="ministration" className="block text-sm font-medium text-gray-700">
              Ministration <span className="text-red-500">*</span>
            </label>
            <select
              id="ministration"
              name="ministration"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="youth">Youth</option>
              <option value="juniorYouth">Junior Youth</option>
              <option value="sundaySchool">Sunday School</option>
            </select>
          </div>

          <div>
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Additional remarks or comments"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Membership;
