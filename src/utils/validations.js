export const imgValidations = {
	required: "La imagen del post es obligatoria.",
	minLength: {
		value: 10,
		message: "La ruta url es muy corta.",
	},
	maxLength: {
		value: 10000,
		message: "La ruta url es muy larga.",
	},
	pattern: {
		value: /\.(jpeg|jpg|gif|png)$/i,
		message: "Este input acepta solo url de imagenes.",
	},
};
