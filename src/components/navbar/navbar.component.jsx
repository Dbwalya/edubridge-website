import { useState } from "react";
import logo from "../../assets/logo.png";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function DefaultNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <header className="bg-white">
        <nav
            aria-label="Global"
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/Edubridge-github" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
                to="/Edubridge-github"
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </Link>
            <Link
                to="/Edubridge-github/about-us"
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              About Us
            </Link>
            <Link
                to="/Edubridge-github/services"
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </Link>
            <Link
                to="/Edubridge-github/study-abroad"
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              Study Abroad
            </Link>
            <Link
                to="/Edubridge-github/events"
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              Events
            </Link>
            <Link
                to="/Edubridge-github/social-enterprise"
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              Social Enterprise
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
                to="/Edubridge-github/contact-us"
                className="text-sm font-semibold leading-6 border px-5 py-1 bg-black text-white rounded-2xl"
            >
              Contact Us{" "}
              <span aria-hidden="true" className="ml-1">
              &rarr;
            </span>
            </Link>
          </div>
        </nav>
        <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/Edubridge-github" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={logo} className="h-8 w-auto" />
              </Link>
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                      to="/Edubridge-github"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                      to="/Edubridge-github/about-us"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </Link>
                  <Link
                      to="/Edubridge-github/services"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </Link>
                  <Link
                      to="/Edubridge-github/study-abroad"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Study Abroad
                  </Link>
                  <Link
                      to="/Edubridge-github/events"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Events
                  </Link>
                  <Link
                      to="/Edubridge-github/social-enterprise"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Social Enterprise
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                      to="/Edubridge-github/about-us"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  );
}
