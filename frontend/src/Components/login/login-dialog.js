import { useState, forwardRef } from "react";

//  const Transition = forwardRef (function Transition(props, ref) {
//    return (
//     <>
//     <ref={ref} {...props}/>
//     </>
//     )
// })

export const LoginDialog = ({ open, handleClose, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  // const open=(props,ref) => {
  //   return(
  //      <>
  //         <ref={ref}/>
  //         </>
  //   )
  // }

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(username, password);
  };

  const handleEnterkeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  return (
    <div
      open={open}
      //KeepMounted
      onClose={handleClose}
      onKeyDown={handleEnterkeyDown}
      //TransitionEffect={Transition}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md transform transition-transform ease-in-out duration-300 w-96">
          <h1 className="text-2xl font-semibold mb-6">Login</h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="cancle"
                  onClick={handleClose}
                >
                  Cancle
                </button>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
