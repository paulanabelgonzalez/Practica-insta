import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
} from "@chakra-ui/react";

export const ModalValidations = ({
	isOpen,
	onClose,
	validations,
	setIsRegister,
	setLoggedIn,
}) => {
	const handleLoggedIn = () => {
		setLoggedIn(true);
		setIsRegister(true);
		onClose();
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalBody textAlign="center" p="25px">
						{validations === 0 &&
							"Los datos ingresados no coinciden con ningún usuario registrado."}
						{validations === 1 && "Por favor complete todos los campos."}
						{validations === 2 && "Las contraseñas no coinciden."}
						{validations === 3 && "Se ha registrado exitosamente"}
					</ModalBody>

					<ModalFooter>
						{validations === 3 ? (
							<Button color="#efa4b1" mr={3} onClick={handleLoggedIn}>
								Iniciar sesión
							</Button>
						) : (
							<Button color="#efa4b1" mr={3} onClick={onClose}>
								Aceptar
							</Button>
						)}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
