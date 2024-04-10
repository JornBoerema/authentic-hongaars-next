import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/pro-regular-svg-icons";

interface FormSuccessProps {
	message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 border border-emerald-500">
			<FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
			<p>{message}</p>
		</div>
	);
};
