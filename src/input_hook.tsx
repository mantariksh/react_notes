import React, { useState } from "react";

export default function useFormInput(initialValue = "") {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: any) {
        setValue(e.target.value);
    }

    return { value, handleChange };
}