interface HandleInputBlurResult {
  error: string | null;
}

export const handleInputBlur = (
  label: string,
  value: string | number
): HandleInputBlurResult => {
  console.log("label", label);
  if (label === "Año asignatura" && typeof value === "string") {
    const [year1, year2] = value.split("-");

    if (parseInt(year1) > parseInt(year2)) {
      return {
        error: "El primer año debe ser menor o igual al segundo año",
      };
    }
    if (!/^\d{4}-\d{4}$/.test(value)) {
      return {
        error: "Debe ser año(año) ej. 1993-2013",
      };
    }
  }
  console.log("label", label);
  console.log("value", typeof value);

  if (label === "Notas") {
    if (typeof value === "number" && value < 7) {
      console.log("error");

      return {
        error: "La nota debe ser igual o mayor a 7",
      };
    }
  }

  return {
    error: null,
  };
};
