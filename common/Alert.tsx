import { XCircleIcon } from '@heroicons/react/24/solid';

interface AlertProps {
  alert: AlertOptions;
  handleClose(): void;
}

const Alert = ({ alert, handleClose }: AlertProps): JSX.Element => {
  if (alert.active && alert.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  return (
    <>
      {alert.active && (
        <div className="bg-cyan-500 p-8 w-full rounded mb-8">
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
