import { Footer } from "flowbite-react";
import logo from "../imgs/A.png";

const FFooter = () => {
    return(
        <Footer container className="">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <Footer.Brand
                    href="#"
                    src={logo}
                    alt="Logo"
                    name="Splitify"
                />
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Splitify" year={2024} />
            </div>
        </Footer>
    );
};
export default FFooter;