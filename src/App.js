import Router from "./router";
import { Toaster } from "react-hot-toast";

import Spinner from "./components/Spinner";
import useLoginByToken from "./hooks/useLoginByToken";
import FullPageSpinner from "./components/FullPageSpinner";
import Modal from "./components/Modal";

function App() {
  const { isLoading, isLogedin, user } = useLoginByToken();

  console.log(isLogedin, user);

  if (isLoading) {
    return <FullPageSpinner />;
  }

  return (
    <section className="bg-slate-200 text-slate-100 text-sm">
      <Router />
      <Toaster position="top-center" gutter={8} />
      <Modal width="w-[500px]" />
    </section>
  );
}

export default App;
