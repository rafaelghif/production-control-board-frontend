import FormLogin from "./FormLogin";

const ContainerLogin: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-full">
            <div className="w-10/12 p-5 rounded shadow-md md:w-1/2 lg:w-1/3">
                <div className="font-['Source_Sans_3'] text-center mb-2">
                    <span className="text-xl">Production Control Board</span>
                </div>
                <div>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
}

export default ContainerLogin;