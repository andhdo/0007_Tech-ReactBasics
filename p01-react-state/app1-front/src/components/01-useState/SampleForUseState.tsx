import React, { useEffect, useState } from "react";

const SECURITY_CODE = "private";

const SampleForUseState = () => {
  // const [value, setValue] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
  });

  const onConfirm = () => {
    setState({ ...state, error: false, loading: false }); //  setError(false);
  };
  const onError = () => {
    setState({ ...state, error: true, loading: false }); //  setError(true);
  };
  const onWrite = (value: any) => {
    //setError(false);
    //setValue((e.target as HTMLInputElement).value);
    setState({ ...state, value });
  };
  const onCheck = () => {
    //setError(false);
    setState({ ...state, loading: true });
  };

  const callToServer = (afterResponse: () => void) => {
    setTimeout(() => {
      if (SECURITY_CODE !== state.value) {
        onError();
      } else {
        onConfirm();
      }
      afterResponse();
    }, 3000);
  };

  useEffect(() => {
    if (!!state.loading) {
      callToServer(() => {
        // setState({ ...state, loading: false }); //setLoading(false);
      });
    }
  }, [state.loading]);

  return (
    <>
      {state.error && !state.loading && <p>incorrect code</p>}
      {state.loading && <p>loading...</p>}
      <input
        placeholder="enter secret code"
        onChange={(e) => {
          onWrite((e.target as HTMLInputElement).value);
        }}
        value={state.value}
      />
      hola {state.value}
      <button
        onClick={() => {
          onCheck();
        }}
      >
        check
      </button>
    </>
  );
};

export { SampleForUseState };
