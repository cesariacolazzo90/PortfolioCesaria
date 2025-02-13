// import { Fragment } from 'react'
import { Disclosure, } from '@headlessui/react'
// Menu, Transition  
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import {BellIcon} '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Navbar.css'

const navigation = [
  {
    name: 'Projects',
    href: '#projects-section',
    current: false
  },
  {
    name: 'Timeline',
    href: '#timeline-section',
    current: false
  },
  {
    name: 'Contact',
    href: '#contact-section',
    current: false
  },
  {
    name: 'CV',
    href: 'https://drive.google.com/file/d/17vFdueDYE05FowVKrxaohccLdhxHChnN/view?usp=sharing',
    current: false
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-black allNavbar'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start buttonsNavbar'>
                <div className='flex flex-shrink-0 items-center'></div>
                <div className='flex flex-1 justify-center items-center'>
                  <div className='flex space-x-4'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-lg font-medium hidden md:inline'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.icon ? item.icon : item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <a
                  href='https://www.github.com/carlosrodmor'
                  className='text-gray-300 hover:text-white mx-2'
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href='https://www.linkedin.com/in/cesaria-91439292/'
                  className='text-gray-300 hover:text-white mx-2'
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
