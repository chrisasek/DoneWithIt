import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button";

function AppSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default AppSubmitButton;
