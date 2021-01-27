import { useState } from "react";

const initialValue = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: null,
  errorMessage: null,
};

export default function UseFetchData() {
  const [fetchStatus, setFetchStatus] = useState(initialValue);

  function onLoading() {
    setFetchStatus({ ...initialValue, isLoading: true });
  }
  function onSuccess(data) {
    setFetchStatus({ ...initialValue, isSuccess: true, data: data });
  }
  function onError(e) {
    setFetchStatus({ ...initialValue, isError: true, errorMessage: e });
  }
  return [fetchStatus, { onLoading, onSuccess, onError }];
}
