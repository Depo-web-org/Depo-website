import { FaMobileScreen, FaGamepad, FaDatabase } from "react-icons/fa6";
import { BiCodeAlt } from "react-icons/bi";

export default function Services() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-2">
      <h3 className="font-semibold text-lg mb-4">Services</h3>
      <ul className="space-y-2">
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary h-[19px]pt-1 w-[19px]">
              <BiCodeAlt style={{ height: "19px", width: "19px" }} />
            </div>

            <span>Web Development</span>
          </div>
        </li>
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary h-[19px] pt-1 w-[14px]">
              <FaMobileScreen />{" "}
            </div>

            <span>App Development</span>
          </div>
        </li>
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary h-[19px] pt-1 w-[19px]">
              <FaGamepad />{" "}
            </div>

            <span>Game Development</span>
          </div>
        </li>
        <li>
          <div className="flex items-start space-x-2">
            <div className="text-primary h-[19px] pt-1 w-[14px]">
              <FaDatabase />{" "}
            </div>

            <span>Integrated Database systems</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
