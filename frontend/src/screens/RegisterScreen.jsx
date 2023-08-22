import { Tabs } from "flowbite-react";
import PersonalForm from "../components/Register/PersonalForm";
import CompanyForm from "../components/Register/CompanyForm";
import Logo from "../components/Logo";

const RegisterScreen = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center my-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Logo />
        </a>
        <div className="w-full h-fit bg-white rounded-lg shadow dark:border my-10 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <Tabs.Group aria-label="Pills" style="fullWidth">
              <Tabs.Item active title="Personal">
                <PersonalForm />
              </Tabs.Item>
              <Tabs.Item title="Company">
                <CompanyForm />
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;
